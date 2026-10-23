import { postCartitemApi } from "@/api-endpoints/CartsApi";

export const GUEST_CART_KEY = "guest_cart";
export const GUEST_CART_EVENT = "guest_cart_updated";

export interface GuestCartProductDetails {
  id?: number | string;
  name?: string;
  title?: string;
  price?: number | string;
  product_size?: string;
  image_urls?: string[];
  product_variant_image_urls?: string[];
  product_variant_price?: number;
  product_size_price?: number;
  [key: string]: any;
}

export interface GuestCartItem {
  id: string; // e.g. "guest_123"
  product: number;
  quantity: number;
  product_details?: GuestCartProductDetails;
}

export const getGuestCart = (): GuestCartItem[] => {
  if (typeof window === "undefined") return [];
  try {
    const raw = localStorage.getItem(GUEST_CART_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Error reading guest_cart:", e);
    return [];
  }
};

export const saveGuestCart = (cart: GuestCartItem[]) => {
  if (typeof window === "undefined") return;
  localStorage.setItem(GUEST_CART_KEY, JSON.stringify(cart));
  window.dispatchEvent(new Event(GUEST_CART_EVENT));
};

export const addToGuestCart = (product: any, quantity: number = 1) => {
  const cart = getGuestCart();
  const prodId = Number(product?.id !== undefined ? product.id : (product?.actualApiId || product));
  if (!prodId || isNaN(prodId)) return;

  const existingIndex = cart.findIndex((i) => Number(i.product) === prodId);
  const qtyToAdd = Number(quantity) || 1;

  const details: GuestCartProductDetails | undefined =
    typeof product === "object" && product !== null
      ? {
          id: prodId,
          name: product.name || product.title || product.displayMukhi,
          title: product.name || product.title || product.displayMukhi,
          price: Number(product.price || product.product_variant_price || product.product_size_price || 0),
          image_urls: product.image_urls || (product.image ? [product.image] : []),
          product_variant_image_urls: product.product_variant_image_urls,
          product_variant_price: product.product_variant_price,
          product_size_price: product.product_size_price,
        }
      : undefined;

  if (existingIndex > -1) {
    cart[existingIndex].quantity = (Number(cart[existingIndex].quantity) || 0) + qtyToAdd;
    if (details) {
      cart[existingIndex].product_details = {
        ...(cart[existingIndex].product_details || {}),
        ...details,
      };
    }
  } else {
    cart.push({
      id: `guest_${prodId}`,
      product: prodId,
      quantity: qtyToAdd,
      product_details: details,
    });
  }
  saveGuestCart(cart);
};

export const updateGuestCartQty = (productId: string | number, newQty: number) => {
  const prodId = Number(String(productId).replace(/^guest_/, ""));
  if (newQty <= 0) {
    removeFromGuestCart(prodId);
    return;
  }
  const cart = getGuestCart();
  const updated = cart.map((item) =>
    Number(item.product) === prodId || String(item.id) === String(productId)
      ? { ...item, quantity: newQty }
      : item
  );
  saveGuestCart(updated);
};

export const removeFromGuestCart = (productId: string | number) => {
  const prodId = Number(String(productId).replace(/^guest_/, ""));
  const cart = getGuestCart();
  const updated = cart.filter(
    (item) =>
      Number(item.product) !== prodId &&
      String(item.id) !== String(productId) &&
      String(item.id) !== `guest_${prodId}`
  );
  saveGuestCart(updated);
};

export const clearGuestCart = () => {
  if (typeof window === "undefined") return;
  localStorage.removeItem(GUEST_CART_KEY);
  window.dispatchEvent(new Event(GUEST_CART_EVENT));
};

export const syncGuestCartToApi = async (
  cartId: string | number,
  userId: string | number,
  vendorId: any = 63,
  userName?: string
): Promise<void> => {
  const cart = getGuestCart();
  if (!cart || cart.length === 0) return;

  for (const item of cart) {
    try {
      await postCartitemApi("", {
        cart: Number(cartId),
        product: Number(item.product),
        user: Number(userId),
        vendor: Number(vendorId) || 63,
        quantity: Number(item.quantity) || 1,
        created_by: userName || "user",
      });
    } catch (err) {
      console.error(`Error syncing product ${item.product} to API:`, err);
    }
  }

  clearGuestCart();
};

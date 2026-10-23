"use client";
import { createContext, useContext, useEffect, useState, ReactNode, useCallback } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCartitemsApi } from "@/api-endpoints/CartsApi";
import {
  getGuestCart,
  addToGuestCart,
  updateGuestCartQty,
  removeFromGuestCart,
  clearGuestCart,
  syncGuestCartToApi,
  GuestCartItem,
  GUEST_CART_KEY,
  GUEST_CART_EVENT,
} from "@/lib/cartUtils";

// Context
const CartItemContext = createContext<any | undefined>(undefined);

// Provider
export function CartItemProvider({ children }: { children: ReactNode }) {
  const [cartId, setCartId] = useState<string | null>(null);
  const [guestCart, setGuestCart] = useState<GuestCartItem[]>([]);

  const updateFromStorage = useCallback(() => {
    if (typeof window !== "undefined") {
      setCartId(localStorage.getItem("cartId"));
      setGuestCart(getGuestCart());
    }
  }, []);

  useEffect(() => {
    updateFromStorage();
    window.addEventListener("storage", updateFromStorage);
    window.addEventListener(GUEST_CART_EVENT, updateFromStorage);

    return () => {
      window.removeEventListener("storage", updateFromStorage);
      window.removeEventListener(GUEST_CART_EVENT, updateFromStorage);
    };
  }, [updateFromStorage]);

  const refreshCartId = useCallback(() => {
    if (typeof window !== "undefined") {
      setCartId(localStorage.getItem("cartId"));
    }
  }, []);

  const isValidCartId = !!cartId && cartId !== "null" && cartId !== "undefined";

  const { data, isLoading, refetch } = useQuery({
    queryKey: ["getCartitemsData", cartId],
    queryFn: () => getCartitemsApi(`/${cartId}`),
    enabled: isValidCartId,
  });

  // Auto-sync guest cart if user is logged in and cartId exists
  useEffect(() => {
    if (typeof window === "undefined") return;
    const storedUserId = localStorage.getItem("userId");
    const storedCartId = localStorage.getItem("cartId");
    const storedGuestCart = localStorage.getItem(GUEST_CART_KEY);
    if (storedUserId && storedCartId && storedGuestCart) {
      try {
        const parsed = JSON.parse(storedGuestCart);
        if (Array.isArray(parsed) && parsed.length > 0) {
          syncGuestCartToApi(storedCartId, storedUserId, 63).then(() => {
            refetch();
            setGuestCart([]);
          });
        }
      } catch (e) {
        console.error("Cart sync check error:", e);
      }
    }
  }, [cartId, refetch]);

  const syncGuestCart = useCallback(
    async (cId?: any, uId?: any) => {
      if (typeof window === "undefined") return;
      const currentUserId = uId || localStorage.getItem("userId");
      const currentCartId = cId || localStorage.getItem("cartId");
      if (currentUserId && currentCartId) {
        await syncGuestCartToApi(currentCartId, currentUserId, 63);
        await refetch();
        setGuestCart([]);
      }
    },
    [refetch]
  );

  const effectiveCartItem = isValidCartId
    ? (data || { data: [] })
    : { data: guestCart, length: guestCart.length };

  return (
    <CartItemContext.Provider
      value={{
        cartItem: effectiveCartItem,
        guestCart,
        isAuthenticated: isValidCartId && !!data,
        isLoading: isValidCartId ? isLoading : false,
        refetchCart: refetch,
        refreshCartId,
        addToGuestCart,
        updateGuestCartQty,
        removeFromGuestCart,
        clearGuestCart,
        syncGuestCart,
      }}
    >
      {children}
    </CartItemContext.Provider>
  );
}

// Hook
export function useCartItem() {
  const context = useContext(CartItemContext);
  if (!context) {
    throw new Error("useCartItem must be used within a CartItemProvider");
  }
  return context;
}


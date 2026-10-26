import { GetServerSideProps } from "next";
import Head from "next/head";
import ProductGallery from "./ProductGallery";
import ProductCard from "@/components/ProductCard";
import { useCurrency } from "@/context/CurrencyContext";
import { useState, useEffect } from "react";
import CartControls from "./CartControls";
import toast from "react-hot-toast";
import { postCartitemApi, updateCartitemsApi, deleteCartitemsApi } from "@/api-endpoints/CartsApi";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import { useCartItem } from "@/context/CartItemContext";
import { addToGuestCart, updateGuestCartQty, removeFromGuestCart } from "@/lib/cartUtils";
import { InvalidateQueryFilters, useQueryClient } from "@tanstack/react-query";
import { useVendor } from "@/context/VendorContext";
import { useRouter } from "next/router";
import LoginModal from "@/pages/LoginModal/page";

interface Product {
    id: number;
    name: string;
    description: string;
    description_2?: string;
    price: number;
    discount?: number;
    stock_quantity: number;
    status: boolean;
    category: string;
    image_urls: string[];
    ratingValue?: number;
    ratingCount?: number;
}

interface SingleProductViewProps {
    productDetails: Product;
    relatedProducts: Product[];
    schemaData: Record<string, any>;
}

export default function SingleProductView({
    productDetails,
    relatedProducts,
    schemaData,
}: SingleProductViewProps) {
    const { convertPrice } = useCurrency();
    const [signInmodal, setSignInModal] = useState(false);
    const [getUserId, setUserId] = useState<string | null>(null);
    const [getCartId, setCartId] = useState<string | null>(null);
    const { cartItem }: any = useCartItem();
    const queryClient = useQueryClient();
    const { vendorId } = useVendor();
    const router = useRouter();

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);


    // === Hydrate cart info from localStorage ===
    useEffect(() => {
        const storedUserId = localStorage.getItem("userId");
        const storedCartId = localStorage.getItem("cartId");

        setUserId(storedUserId);
        setCartId(storedCartId);
    }, []);

    const matchingData = cartItem?.data?.map((item: any, index: number) => {
        const product = productDetails;
        const isProductMatch = Number(product?.id) === Number(item?.product);

        if (isProductMatch) {
            return {
                Aid: index,
                cartId: item?.id,
                cartQty: item?.quantity,
                ...product,
            };
        }

        return null;
    }).filter(Boolean);

    const totalQty = matchingData?.reduce((sum: number, item: any) => sum + (item?.cartQty || 0), 0);

    // === Cart handlers ===
    const handleAddCart = async (id: any) => {
        if (!getUserId) {
            addToGuestCart(productDetails, 1);
            toast.success("Product added in cart!");
            return;
        }

        const payload = {
            cart: getCartId,
            product: productDetails?.id,
            user: getUserId,
            quantity: 1,
            created_by: "user",
            vendor: vendorId,
        };

        try {
            const response = await postCartitemApi("", payload);
            if (response) {
                toast.success("Product added in cart!");
                // Update local cart data
                queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleUpdateCart = async (cartId: string, type: "increase" | "decrease", qty: number) => {
        if (!getUserId || String(cartId).startsWith("guest_")) {
            const currentQty = totalQty || qty || 0;
            if (type === "decrease") {
                if (currentQty <= 1) {
                    removeFromGuestCart(productDetails?.id);
                    toast.success("Product removed!");
                } else {
                    updateGuestCartQty(productDetails?.id, currentQty - 1);
                    toast.success("Product updated in cart!");
                }
            } else {
                updateGuestCartQty(productDetails?.id, currentQty + 1);
                toast.success("Product updated in cart!");
            }
            return;
        }

        try {
            if (qty === 1 && type === "decrease") {
                const res = await deleteCartitemsApi(`${cartId}`);
                if (res) {
                    toast.success("Product removed!");
                    queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
                }
            } else {
                if (qty) {
                    const response = await updateCartitemsApi(`${cartId}/${type}/`)
                    if (response) {
                        toast.success('Product updated in cart!')
                        queryClient.invalidateQueries(['getCartitemsData'] as InvalidateQueryFilters);
                    }
                } else {
                    handleAddCart(productDetails?.id)
                }
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Head>
                <title>{productDetails?.name} | Omsritara</title>
                <meta name="description" content={productDetails?.description_2 || productDetails?.name} />
                <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
            </Head>

            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-8">
                    <ProductGallery images={productDetails?.image_urls || []} name={productDetails?.name || ""} />

                    <div>
                        <h1 className="text-2xl font-semibold border-b-2 border-gray-500 capitalize mb-5">
                            {productDetails?.name}
                        </h1>
                        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                            <div className="mt-4 text-2xl font-bold text-red-600 py-2 border-gray-200">
                                {convertPrice(Number(productDetails?.price))}
                            </div>
                            {productDetails?.discount &&
                                productDetails.discount > 0 &&
                                productDetails.discount !== productDetails.price && (
                                    <span className="mt-4 text-xl font-bold text-gray-600 py-2 border-gray-200 line-through">
                                        {convertPrice(Number(productDetails?.discount))}
                                    </span>
                                )}
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: productDetails?.description || "" }} className="quill-content" />

                        {/* Cart Controls */}
                        <CartControls
                            totalQty={totalQty}
                            userId={getUserId}
                            cartId={getCartId}
                            handleUpdateCart={handleUpdateCart}
                            handleAddCart={handleAddCart}
                            setSignInModal={setSignInModal}
                            signInmodal={signInmodal}
                            productId={productDetails?.id}
                            cartItemId={matchingData?.[0]?.cartId}
                            vendorId={vendorId}
                        />

                        <ul className="mt-6 mb-3 space-y-2 text-sm text-gray-700 border-y py-2 border-gray-200">
                            <li>
                                <strong>Brand:</strong> OMSRITARA
                            </li>
                            <li>
                                <strong>Availability: </strong>
                                <span
                                    className={`font-semibold ${productDetails?.stock_quantity === 0 || !productDetails?.status ? "text-red-600" : "text-green-600"
                                        }`}
                                >
                                    {productDetails?.stock_quantity === 0 || !productDetails?.status ? "Out Of Stock" : "In Stock"}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Related Products */}
                <div className="mt-5 border-t pt-5">
                    <h2 className="text-xl font-bold mb-4">Related Products</h2>
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {relatedProducts?.map((product, idx) => (
                            <ProductCard
                                key={idx}
                                image={product?.image_urls?.[0] || ""}
                                hoverImage={product?.image_urls?.[1] || ""}
                                title={product?.name}
                                price={product?.price}
                                onAddToCart={() => alert(`Add to cart: ${product?.name}`)}
                                onView={() => router.push(`/shop/${slugConvert(product?.name)}`)}
                                onWishlist={() => alert(`Wishlist: ${product?.name}`)}
                                product={product}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </>
    );
}

// Helper
function slugConvert(name?: string) {
    if (!name) return "";
    return name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");
}

// SSR Data Fetching
export const getServerSideProps: GetServerSideProps = async (context) => {
    const rawSlug = context.params?.slug;

    if (!rawSlug || typeof rawSlug !== "string") {
        return { notFound: true };
    }

    const decodedSlug = decodeURIComponent(rawSlug).trim();

    // Determine healthy API base URL
    const rawEnvBase = process.env.NEXT_PUBLIC_API_BASE_URL;
    const isEnvHealthy = rawEnvBase && !rawEnvBase.includes("justvy.in");
    const apiBase = (isEnvHealthy ? rawEnvBase : null) || baseUrl || "https://ecomapi.ftdigitalsolutions.org";

    const requestHeaders: HeadersInit = {
        "Origin": process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in",
        "Referer": `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in"}/`,
        "Accept": "application/json",
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
    };

    try {
        const res = await fetch(`${apiBase}/api/products/?vendor_id=63`, {
            headers: requestHeaders,
        });

        let products: any[] = [];
        if (res.ok) {
            const data = await res.json();
            if (Array.isArray(data)) {
                products = data;
            }
        }

        // Match by Product ID, URL slug, or slug_name
        let productDetails = products.find((p: any) => {
            const matchId = String(p?.id) === decodedSlug;
            const matchSlug = slugConvert(p?.name) === decodedSlug.toLowerCase();
            const matchSlugName = p?.slug_name && String(p?.slug_name).toLowerCase() === decodedSlug.toLowerCase();
            return matchId || matchSlug || matchSlugName;
        }) || null;

        // Fallback: If not found in the vendor list, try querying single product endpoint directly
        if (!productDetails && decodedSlug) {
            try {
                const singleRes = await fetch(`${apiBase}/api/products/${decodedSlug}/`, {
                    headers: requestHeaders,
                });
                if (singleRes.ok) {
                    const singleData = await singleRes.json();
                    if (singleData && singleData.id) {
                        productDetails = singleData;
                    }
                }
            } catch (singleErr) {
                console.error("Single product API fallback fetch error:", singleErr);
            }
        }

        if (!productDetails || !productDetails.id) {
            return { notFound: true };
        }

        const relatedProducts = Array.isArray(products)
            ? products.filter(
                (p: any) => p?.category === productDetails?.category && p?.id !== productDetails?.id
              ).slice(0, 4)
            : [];

        const schemaData = {
            "@context": "https://schema.org/",
            "@type": "Product",
            name: productDetails?.name || "Product",
            image: productDetails?.image_urls || [],
            description: productDetails?.description_2 || productDetails?.name || "",
            brand: { "@type": "Brand", name: "Omsritara" },
            offers: {
                "@type": "Offer",
                priceCurrency: "INR",
                price: productDetails?.discount && productDetails.discount > 0 ? productDetails.discount : (productDetails?.price || 0),
                availability: productDetails?.stock_quantity === 0 ? "https://schema.org/OutOfStock" : "https://schema.org/InStock",
                itemCondition: "https://schema.org/NewCondition",
            },
            aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: productDetails?.ratingValue || "4.8",
                bestRating: "5",
                ratingCount: productDetails?.ratingCount || "6",
            },
        };

        return { props: { productDetails, relatedProducts, schemaData } };
    } catch (err) {
        console.error("getServerSideProps error in shop [slug]:", err);
        return { notFound: true };
    }
};

"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import { useCartItem } from "@/context/CartItemContext";
import { useWishList } from "@/context/WishListContext";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";

/* ================== REUSABLE SCROLL SLIDER ================== */

function ProductSlider({
    title,
    description,
    products,
    isLoading,
}: {
    title: string;
    description: string;
    products: any[];
    isLoading: boolean;
}) {
    const router = useRouter();
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const interval = setInterval(() => {
            if (!isHovered) {
                slider.scrollBy({ left: slider.clientWidth / 5, behavior: "smooth" });
                if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                    slider.scrollTo({ left: 0 });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    const slugConvert = (n: string) =>
        n.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]/g, "");

    return (
        <div className="container mx-auto px-4 max-w-7xl mt-10">
            <h2 className="text-4xl font-semibold text-center mt-6 mb-4">{title}</h2>
            <p className="text-black md:mx-24 mx-12 my-4 text-center">{description}</p>

            <div
                ref={sliderRef}
                className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide"
                style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {isLoading
                    ? Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%]">
                            <ProductCardSkeleton />
                        </div>
                    ))
                    : products.map((product: any, i: number) => (
                        <div key={i} className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%]">
                            <ProductCard
                                image={product.image_urls[0] || ""}
                                hoverImage={product.image_urls[1] || ""}
                                title={product.name}
                                price={product.price}
                                onAddToCart={() => alert(`Add to cart: ${product.name}`)}
                                onView={() => router.push(`/shop/${slugConvert(product?.name)}`)}
                                onWishlist={() => alert(`Wishlist: ${product.name}`)}
                                product={product}
                            />
                        </div>
                    ))}
            </div>
        </div>
    );
}

/* ================== MAIN EXPORT ================== */

export default function Bracelets() {
    const { products, isLoading }: any = useProducts();
    const { cartItem }: any = useCartItem();
    const { wishList }: any = useWishList();

    const finalProducts = useMemo(() => {
        if (!products?.data) return [];
        const active = products.data.filter(
            (p: any) =>
                p.status === true || p.status === 1 || p.status === "1" ||
                p.status === "true" || p.status === "TRUE" ||
                p.status === "active" || p.status === "ACTIVE"
        );
        const withCart = active.map((p: any, idx: number) => {
            const cart = cartItem?.data?.find((c: any) => c.product === p.id);
            return cart ? { ...p, Aid: idx, cartQty: cart.quantity, cartId: cart.id } : p;
        });
        return withCart.map((p: any) => {
            const wish = wishList?.data?.find((w: any) => w.product === p.id);
            return { ...p, isLike: !!wish, wishListId: wish?.id };
        });
    }, [products, cartItem, wishList]);

    const braceletsData = finalProducts.filter((p: any) => p.category?.toString() === "204");
    const pendulumsData = finalProducts.filter((p: any) => p.category?.toString() === "290");

    return (
        <section className="mt-6">
            <ProductSlider
                title="Bracelets"
                description="Wear your healing power daily with our Reiki-charged crystal bracelets — crafted to balance your chakras and uplift your spirit."
                products={braceletsData}
                isLoading={isLoading}
            />
            {/* <ProductSlider
                title="Pendulums"
                description="Shop high-vibration crystal pendulums online for Reiki, dowsing, and energy work — each piece cleansed and attuned by Om Sritara experts."
                products={pendulumsData}
                isLoading={isLoading}
            /> */}
        </section>
    );
}

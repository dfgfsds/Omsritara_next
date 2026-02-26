"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useProducts } from "@/context/ProductsContext";
import { useCartItem } from "@/context/CartItemContext";
import { useWishList } from "@/context/WishListContext";
import { useRouter } from "next/navigation";
import ProductCard from "./ProductCard";
import ProductCardSkeleton from "./ProductCardSkeleton";
import bg from "@/public/omsritara-new-arrivalas-bg.png";
import Image from "next/image";

export default function NewArrivals() {
  const { products, isLoading }: any = useProducts();
  const { cartItem }: any = useCartItem();
  const { wishList }: any = useWishList();
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  /* ---------------- MERGE + FILTER + SORT ---------------- */
  const mergedProductData = useMemo(() => {
    if (!products?.data) return [];
    const activeProducts = products.data.filter(
      (p: any) =>
        p.status === true || p.status === 1 || p.status === "1" ||
        p.status === "true" || p.status === "TRUE" ||
        p.status === "active" || p.status === "ACTIVE"
    );
    const withCart = activeProducts.map((p: any) => {
      const cart = cartItem?.data?.find((ci: any) => ci.product === p.id);
      return cart ? { ...p, cartQty: cart.quantity, cartId: cart.id } : p;
    });
    return withCart.map((p: any) => {
      const wish = wishList?.data?.find((w: any) => w.product === p.id);
      return { ...p, isLike: !!wish, wishListId: wish?.id };
    });
  }, [products, cartItem, wishList]);

  const sortedProducts = useMemo(() => {
    return [...mergedProductData].sort((a, b) => {
      if (a.created_at && b.created_at)
        return new Date(b.created_at).getTime() - new Date(a.created_at).getTime();
      return Number(b.id) - Number(a.id);
    });
  }, [mergedProductData]);

  /* ---------------- SCROLL AUTO-PLAY ---------------- */
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

  const slugConvert = (name: string) =>
    name.toLowerCase().trim().replace(/\s+/g, "-").replace(/[^\w-]+/g, "");

  /* ---------------- UI ---------------- */
  return (
    <section className="relative mt-20 min-h-[520px] overflow-hidden">
      <Image src={bg} alt="New Arrivals Background" fill priority={false} sizes="100vw" className="object-cover" unoptimized />
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10 min-h-[520px] py-10">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-4">New Arrivals</h2>
          <p className="text-center text-black mb-8">
            Discover new healing crystals online — freshly charged and added weekly. Buy healing crystals online that radiate pure positive energy and natural beauty
          </p>

          {/* Slider */}
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
              : sortedProducts.map((p: any, i: number) => (
                <div key={i} className="flex-shrink-0 w-[45%] sm:w-[30%] md:w-[22%] lg:w-[18%]">
                  <ProductCard
                    image={p.image_urls[0] || ""}
                    hoverImage={p.image_urls[1] || ""}
                    title={p.name}
                    price={p.price}
                    onAddToCart={() => alert(`Add to cart: ${p.name}`)}
                    onView={() => router.push(`/shop/${slugConvert(p?.name)}`)}
                    onWishlist={() => alert(`Wishlist: ${p.name}`)}
                    product={p}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}

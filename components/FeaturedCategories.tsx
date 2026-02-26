"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useCategories } from "@/context/CategoriesContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { slugConvert } from "@/lib/utils";

export default function FeaturedCategories() {
  const { categories } = useCategories();
  const router = useRouter();
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const data = categories?.data || [];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    const interval = setInterval(() => {
      if (!isHovered) {
        slider.scrollBy({ left: slider.clientWidth / 6, behavior: "smooth" });
        if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
          slider.scrollTo({ left: 0 });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, [isHovered]);

  if (!data.length) return null;

  return (
    <section className="mt-16">
      <div className="container mx-auto px-4 max-w-7xl">

        {/* HEADER */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 items-center gap-4 mb-2">
          <div className="text-center col-span-1 md:col-start-2">
            <h2 className="text-2xl md:text-3xl font-extrabold text-black">
              Top Categories
            </h2>
          </div>
          <div className="flex mt-4 flex-col items-center md:items-end col-span-1 md:col-start-3">
            <Link href="/categories" className="text-sm text-gray-600 hover:underline">
              View All
            </Link>
          </div>
        </div>

        <p className="text-black p-2 md:p-4 md:mx-24 mx-2 my-4 text-center">
          Explore our wide range of authentic crystal jewelry and energy stones. From healing pendants and gemstone bracelets to chakra pendulums and raw crystals - Om Sritara brings you the best online crystal shop experience with handpicked, Reiki-energised products.
        </p>

        {/* CAROUSEL */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide mt-5"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {data.map((cat: any, idx: number) => (
            <div
              key={idx}
              className="flex-shrink-0 w-[28%] sm:w-[18%] md:w-[14%] lg:w-[13%] cursor-pointer"
              onClick={() => router.push(`/categories/${slugConvert(cat?.name)}`)}
            >
              <div className="w-full aspect-square rounded-full overflow-hidden shadow">
                <Image
                  src={cat?.image}
                  alt={cat?.name}
                  width={120}
                  height={120}
                  loading="lazy"
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>
              <p className="mt-3 text-center font-semibold text-sm">{cat?.name}</p>
            </div>
          ))}
        </div>

        {/* DOTS — kept for visual consistency */}
        <div className="flex justify-center mt-6 gap-2">
          {data.slice(0, 5).map((_: any, dotIndex: number) => (
            <div
              key={dotIndex}
              className="h-2 w-2 bg-gray-300 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

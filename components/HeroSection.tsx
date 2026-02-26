"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export default function HeroSection({ banners }: { banners: any[] }) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);

  /* -------- Detect mobile -------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* -------- Filter banners -------- */
  const filteredBanners = banners.filter((b) =>
    isMobile ? b.type === "Mobile View" : b.type === "Web View"
  );

  /* -------- Auto slide -------- */
  useEffect(() => {
    if (!filteredBanners.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev === filteredBanners.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [filteredBanners.length]);

  const handleBannerClick = (banner: any) => {
    if (!banner?.target_url) return;
    banner.target_url.startsWith("http")
      ? window.open(banner.target_url, "_blank")
      : router.push(banner.target_url);
  };

  if (!filteredBanners.length) {
    return (
      <div className="md:h-[70vh] bg-gray-200 animate-pulse rounded-lg" />
    );
  }

  return (
    <div className="relative md:h-[70vh] overflow-hidden rounded-lg md:px-10 md:py-4">

      <div
        className="flex transition-transform duration-700 ease-in-out h-full"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {filteredBanners.map((banner, index) => (
          <div
            key={banner.id}
            className="flex-shrink-0 px-2"
            style={{ width: '100%' }}

            onClick={() => handleBannerClick(banner)}
          >
            <Image
              src={banner.image_url}
              alt={banner.title || 'banner'}
              loading={index === 0 ? 'eager' : 'lazy'}
              width={1920}
              height={1080}

              className={`md:rounded-lg md:object-cover w-full h-[70vh] md:h-auto cursor-pointer
                ${current === index ? 'scale-100' : 'scale-90 opacity-80'}
              `}
            />
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2">
        {filteredBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-2 rounded-full transition-all
              ${current === index ? "bg-[#a5291b] w-4" : "bg-gray-300 w-2"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
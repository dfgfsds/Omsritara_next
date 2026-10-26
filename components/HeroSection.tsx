"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { baseUrl } from "@/api-endpoints/ApiUrls";

export default function HeroSection({ banners = [] }: { banners?: any[] }) {
  const router = useRouter();
  const [isMobile, setIsMobile] = useState(false);
  const [current, setCurrent] = useState(0);
  const [bannerList, setBannerList] = useState<any[]>(Array.isArray(banners) ? banners : []);

  /* -------- Detect mobile -------- */
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* -------- Client fallback if SSR banners were empty -------- */
  useEffect(() => {
    if (banners && banners.length > 0) {
      setBannerList(banners);
    } else {
      const fetchBanners = async () => {
        try {
          const apiBase = baseUrl || "https://ecomapi.ftdigitalsolutions.org";
          const res = await fetch(`${apiBase}/banners/?vendorId=63`);
          if (res.ok) {
            const data = await res.json();
            if (data?.banners && Array.isArray(data.banners)) {
              setBannerList(data.banners);
            }
          }
        } catch (e) {
          console.error("Client fallback banners fetch failed:", e);
        }
      };
      fetchBanners();
    }
  }, [banners]);

  /* -------- Filter banners -------- */
  const safeBanners = Array.isArray(bannerList) ? bannerList : [];
  const activeBanners = safeBanners.filter((b) => b?.is_active !== false);
  const filteredBanners = activeBanners.filter((b) =>
    isMobile ? b.type === "Mobile View" : b.type === "Web View"
  );
  // Fallback to activeBanners if specific view type has no banners
  const displayBanners = filteredBanners.length > 0 ? filteredBanners : activeBanners;

  /* -------- Auto slide -------- */
  useEffect(() => {
    if (!displayBanners.length) return;
    const timer = setInterval(() => {
      setCurrent((prev) =>
        prev >= displayBanners.length - 1 ? 0 : prev + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [displayBanners.length]);

  useEffect(() => {
    setCurrent(0);
  }, [isMobile, displayBanners.length]);

  const handleBannerClick = (banner: any) => {
    if (!banner?.target_url) return;
    banner.target_url.startsWith("http")
      ? window.open(banner.target_url, "_blank")
      : router.push(banner.target_url);
  };

  if (!displayBanners.length) {
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
        {displayBanners.map((banner, index) => {
          const rawUrl = banner?.image_url;
          const imageUrl = rawUrl
            ? rawUrl.startsWith("http")
              ? rawUrl
              : `${baseUrl}${rawUrl.startsWith("/") ? "" : "/"}${rawUrl}`
            : "https://semantic-ui.com/images/wireframe/image.png";

          return (
            <div
              key={banner.id || index}
              className="flex-shrink-0 px-2"
              style={{ width: "100%" }}
              onClick={() => handleBannerClick(banner)}
            >
              <Image
                src={imageUrl}
                alt={banner.title || "banner"}
                loading={index === 0 ? "eager" : "lazy"}
                width={1920}
                height={1080}
                className={`md:rounded-lg md:object-cover w-full h-[70vh] md:h-auto cursor-pointer
                  ${current === index ? "scale-100" : "scale-90 opacity-80"}
                `}
              />
            </div>
          );
        })}
      </div>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex gap-2">
        {displayBanners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Slide ${index + 1}`}
            className={`h-2 rounded-full transition-all
              ${current === index ? "bg-[#a5291b] w-4" : "bg-gray-300 w-2"}
            `}
          />
        ))}
      </div>
    </div>
  );
}
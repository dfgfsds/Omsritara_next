"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const summerImages = [
  { src: "/img1.webp", alt: "Enjoy Summer" },
  { src: "/img2.jpg", alt: "Summer Vacation" },
  { src: "/img3.jpg", alt: "Happy Summer" },
  { src: "/img4.jpg", alt: "Welcome Summer" },
  { src: "/img5.png", alt: "Summer Vacation Again" },
];

export default function Certificates() {
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

  return (
    <section className="py-10 px-4 bg-white">
      <div className="relative max-w-6xl mx-auto">
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {summerImages.map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[30%] sm:w-[20%] md:w-[18%] flex justify-center items-center"
            >
              {item?.src && (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={120}
                  height={120}
                  className="object-contain hover:scale-105 transition-transform h-32"
                  unoptimized
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

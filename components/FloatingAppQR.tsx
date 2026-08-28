'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const PLAY_STORE_URL =
  'https://play.google.com/store/apps/details?id=in.omsritara.app&pcampaignid=web_share';

export default function FloatingAppQR() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div
      className="fixed right-0 top-1/2 -translate-y-1/2 z-40 select-none transition-all duration-300 ease-in-out"
    >
      <div className="bg-white rounded-l-2xl shadow-2xl border-y border-l border-gray-200/90 flex items-stretch overflow-hidden">
        {isOpen ? (
          <div className="flex items-stretch">
            {/* QR Code and Info Section */}
            <div className="p-3 sm:p-3.5 md:p-4 flex flex-col items-center justify-center text-center">
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group block p-1 bg-white rounded-lg hover:opacity-95 transition-transform duration-200 hover:scale-105"
                title="Scan to Download Om Sritara App"
              >
                <Image
                  src="/omsritara_google_play_qr.png"
                  alt="Om Sritara Mobile App QR"
                  width={115}
                  height={115}
                  className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 object-contain"
                  priority
                />
              </a>

              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1.5 text-[11px] sm:text-xs font-bold text-gray-800 tracking-wider uppercase hover:text-[#a5291b] transition-colors"
              >
                App QR
              </a>
              <span className="text-[9px] sm:text-[10px] text-gray-500 font-medium tracking-tight mt-0.5">
                Download App
              </span>
            </div>

            {/* Close Arrow Toggle Button (Matching Reference Image) */}
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="bg-gray-50 hover:bg-gray-100 border-l border-gray-200/80 text-gray-600 hover:text-gray-900 transition-colors px-1.5 sm:px-2 flex items-center justify-center cursor-pointer group"
              title="Close App QR"
              aria-label="Close App QR"
            >
              <ChevronRight
                size={20}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </button>
          </div>
        ) : (
          /* Collapsed Tab with Open Arrow */
          <button
            type="button"
            onClick={() => setIsOpen(true)}
            className="flex flex-col items-center justify-center py-3.5 px-2 bg-gradient-to-b from-[#a5291b] to-[#801c12] text-white hover:brightness-110 transition-all rounded-l-xl shadow-md group cursor-pointer"
            title="Open App QR"
            aria-label="Open App QR"
          >
            <ChevronLeft
              size={18}
              className="transition-transform group-hover:-translate-x-0.5"
            />
            <span className="[writing-mode:vertical-lr] rotate-180 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mt-2 text-white">
              App QR
            </span>
          </button>
        )}
      </div>
    </div>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import {
    Sparkles,
    ShieldCheck,
    Truck,
    Flame,
    ArrowRight,
    HelpCircle,
    CheckCircle2,
    X,
    Award,
    Compass
} from 'lucide-react';

interface RudrakshaHeroProps {
    onExploreClick?: () => void;
    onSelectMukhi?: (mukhiNum: number) => void;
}

const MUKHI_QUICK_GUIDE = [
    { mukhi: '1 Mukhi (Silver Cap)', deity: 'Lord Shiva', benefit: 'Inner peace, supreme consciousness, meditation support', planet: 'Sun' },
    { mukhi: '2 Mukhi', deity: 'Ardhanarishvara', benefit: 'Harmony in relationships, unity, emotional stability', planet: 'Moon' },
    { mukhi: '3 Mukhi', deity: 'Agni Dev', benefit: 'Courage, release from past negativity, renewal & confidence', planet: 'Mars' },
    { mukhi: '4 Mukhi', deity: 'Lord Brahma', benefit: 'Wisdom, creativity, intellectual growth & mental clarity', planet: 'Mercury' },
    { mukhi: '5 Mukhi', deity: 'Lord Shiva', benefit: 'Peace, protection, calmness, mindfulness & spiritual well-being', planet: 'Jupiter' },
    { mukhi: '6 Mukhi', deity: 'Lord Kartikeya', benefit: 'Courage, willpower, focus, determination & self-discipline', planet: 'Venus' },
    { mukhi: '7 Mukhi', deity: 'Goddess Mahalakshmi', benefit: 'Wealth, abundance, prosperity, stability & positive growth', planet: 'Saturn' },
    { mukhi: '8 Mukhi', deity: 'Lord Ganesha', benefit: 'Removal of obstacles, success, wisdom & grounding energy', planet: 'Rahu' },
    { mukhi: '9 Mukhi', deity: 'Maa Durga (Navadurga)', benefit: 'Divine protection, inner strength, fearless energy & vitality', planet: 'Ketu' },
    { mukhi: '10 Mukhi', deity: 'Lord Vishnu', benefit: 'Universal protection, peace, shield from negative vibrations', planet: 'All Planets' },
    { mukhi: '11 Mukhi', deity: '11 Rudras / Lord Hanuman', benefit: 'Courage, protection, high spiritual focus & vitality', planet: 'Mars' },
    { mukhi: '12 Mukhi', deity: 'Surya Dev (Sun God)', benefit: 'Leadership, self-confidence, radiance, vitality & authority', planet: 'Sun' },
    { mukhi: '13 Mukhi', deity: 'Lord Kamadeva', benefit: 'Charm, attraction, self-expression, confidence & fulfilment', planet: 'Venus' },
    { mukhi: '14 Mukhi', deity: 'Lord Shiva & Hanuman', benefit: 'Supreme protection, courage, deep discipline & awakening', planet: 'Saturn' }
];

export default function RudrakshaHero({ onExploreClick, onSelectMukhi }: RudrakshaHeroProps) {
    const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number }>({
        days: 3,
        hours: 14,
        minutes: 42,
        seconds: 18
    });
    const [isGuideOpen, setIsGuideOpen] = useState(false);

    // Dynamic festive countdown timer
    useEffect(() => {
        const targetDate = new Date();
        targetDate.setDate(targetDate.getDate() + 4);
        targetDate.setHours(23, 59, 59);

        const timer = setInterval(() => {
            const now = new Date().getTime();
            const difference = targetDate.getTime() - now;

            if (difference > 0) {
                const days = Math.floor(difference / (1000 * 60 * 60 * 24));
                const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((difference % (1000 * 60)) / 1000);
                setTimeLeft({ days, hours, minutes, seconds });
            }
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const scrollToCollection = () => {
        if (onExploreClick) {
            onExploreClick();
        } else {
            const el = document.getElementById('rudraksha-collection');
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-[#2a0404] via-[#430909] to-[#1f0303] text-white pt-8 pb-14 md:pt-14 md:pb-20 px-4 sm:px-6 lg:px-8 border-b border-amber-900/40">
            {/* Ambient Background Aura Lights */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-amber-500/15 via-red-600/10 to-transparent blur-3xl pointer-events-none" />
            <div className="absolute top-1/4 right-0 w-80 h-80 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-10 left-0 w-80 h-80 bg-red-900/20 rounded-full blur-3xl pointer-events-none" />

            {/* Sacred Vedic Pattern Overlay */}
            <div
                className="absolute inset-0 opacity-[0.04] pointer-events-none"
                style={{
                    backgroundImage: `radial-gradient(#fbbf24 1.5px, transparent 1.5px)`,
                    backgroundSize: '28px 28px'
                }}
            />

            <div className="relative max-w-7xl mx-auto">
                {/* 🔱 Top Festive Badge */}
                <div className="flex justify-center mb-5">
                    <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-amber-950/80 via-amber-900/60 to-amber-950/80 border border-amber-500/40 shadow-[0_0_20px_rgba(245,158,11,0.2)] backdrop-blur-md">
                        <span className="flex h-2 w-2 relative">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                        </span>
                        <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-amber-200">
                            Sacred Mahashivratri & Divine Utsav 2026 • 100% Certified Original
                        </span>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                    {/* Left Column: Heading, Subheading, Description, Countdown, CTAs */}
                    <div className="lg:col-span-7 text-center lg:text-left space-y-5">
                        {/* Main Heading */}
                        <div className="space-y-2">
                            <div className="inline-block">
                                <span className="text-xs sm:text-sm uppercase tracking-[0.25em] text-amber-400/90 font-medium flex items-center justify-center lg:justify-start gap-1.5 mb-1">
                                    <Sparkles size={14} className="text-amber-300" />
                                    Divine Consecrated Collection
                                </span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-black tracking-tight text-white leading-[1.12]">
                                OM SRITARA{' '}
                                <span className="block mt-1 bg-gradient-to-r from-[#ffd778] via-[#fff3b0] to-[#f59e0b] bg-clip-text text-transparent drop-shadow-[0_2px_15px_rgba(245,158,11,0.35)]">
                                    RUDRAKSHA UTSAV 2026
                                </span>
                            </h1>
                        </div>

                        {/* Sub-heading */}
                        <p className="text-lg sm:text-2xl md:text-3xl font-serif italic text-amber-100/95 font-medium tracking-wide">
                            &ldquo;Wear the Divine, Experience the Energy&rdquo;
                        </p>

                        {/* Description */}
                        <p className="text-stone-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light">
                            Derived from the sacred tears of Lord Shiva, each authentic Himalayan Rudraksha holds transformative cosmic vibrations.
                            Ethically handpicked, lab-certified, and spiritually consecrated through Vedic <strong className="text-amber-300 font-normal">Prana Pratishtha</strong> rituals by <strong className="text-amber-300 font-normal">Guru Matha</strong> to bestow divine peace, protection, and boundless prosperity.
                        </p>


                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
                            <button
                                onClick={scrollToCollection}
                                className="w-full sm:w-auto px-6 py-3.5 bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-bold text-sm sm:text-base rounded-xl shadow-[0_0_25px_rgba(245,158,11,0.4)] transition-all duration-300 flex items-center justify-center gap-2 group hover:scale-[1.02] active:scale-95"
                            >
                                <Sparkles size={18} className="text-stone-950 group-hover:rotate-12 transition-transform" />
                                <span>Explore Sacred Beads (1–14 Mukhi)</span>
                                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </button>

                            <button
                                onClick={() => setIsGuideOpen(true)}
                                className="w-full sm:w-auto px-5 py-3.5 bg-white/10 hover:bg-white/15 text-amber-100 hover:text-white border border-amber-400/40 rounded-xl font-medium text-sm sm:text-base backdrop-blur-md transition-all duration-200 flex items-center justify-center gap-2 shadow-sm"
                            >
                                <HelpCircle size={18} className="text-amber-300" />
                                <span>Mukhi Guidance Chart</span>
                            </button>
                        </div>


                    </div>

                    {/* Right Column: Hero Visual Artwork with glowing aura */}
                    <div className="hidden lg:flex lg:col-span-5 justify-center">
                        <div className="relative w-full max-w-md sm:max-w-lg">
                            {/* Radial Aura Glow behind the image */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-amber-500/30 via-yellow-500/20 to-amber-600/30 rounded-3xl blur-2xl opacity-75 animate-pulse" />

                            {/* Main Framed Visual */}
                            <div className="relative rounded-2xl overflow-hidden border-2 border-amber-500/50 shadow-[0_15px_40px_rgba(0,0,0,0.7)] bg-[#1a0303]">
                                <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full">
                                    <Image
                                        src="/rudraksha-hero.jpg"
                                        alt="OM SRITARA RUDRAKSHA UTSAV 2026 - Sacred Divine Himalayan Rudraksha"
                                        fill
                                        priority
                                        className="object-cover object-center scale-[1.02] hover:scale-105 transition-transform duration-700"
                                        sizes="(max-width: 768px) 100vw, 500px"
                                    />
                                    {/* Gradient vignettes on image edges */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-black/30 pointer-events-none" />
                                </div>

                                {/* Floating Divine Badges overlaid on image */}
                                <div className="absolute top-3 left-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/75 border border-amber-400/60 text-amber-200 text-xs font-semibold backdrop-blur-md shadow-md">
                                        <Sparkles size={12} className="text-amber-300" />
                                        1 to 14 Mukhi Available
                                    </span>
                                </div>

                                <div className="absolute top-3 right-3">
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#721515]/90 border border-amber-400/50 text-white text-xs font-semibold backdrop-blur-md shadow-md">
                                        Authentic Nepal Beads
                                    </span>
                                </div>

                                {/* Bottom Info Strip inside frame */}
                                <div className="absolute bottom-0 inset-x-0 p-4 text-center bg-gradient-to-t from-black via-black/90 to-transparent">
                                    <div className="flex items-center justify-between gap-2 text-left">
                                        <div>
                                            <p className="text-amber-300 text-xs font-bold uppercase tracking-wider">
                                                Conceiving Cosmic Power
                                            </p>
                                            <p className="text-white text-sm font-semibold">
                                                Energized by Guru Matha
                                            </p>
                                        </div>
                                        <button
                                            onClick={scrollToCollection}
                                            className="px-3.5 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold text-xs rounded-lg transition-colors flex items-center gap-1 shadow"
                                        >
                                            <span>Shop Beads</span>
                                            <ArrowRight size={13} />
                                        </button>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            {/* 📖 MUKHI SELECTION GUIDE MODAL */}
            {isGuideOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-3xl max-h-[85vh] bg-[#1a0505] text-white border-2 border-amber-500/60 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
                        {/* Modal Header */}
                        <div className="flex items-center justify-between px-6 py-4 border-b border-amber-900/50 bg-[#2d0909]">
                            <div className="flex items-center gap-2">
                                <Sparkles size={20} className="text-amber-400" />
                                <div>
                                    <h3 className="text-base sm:text-lg font-bold text-amber-200">
                                        Rudraksha Mukhi Selection Guide
                                    </h3>
                                    <p className="text-xs text-stone-300">
                                        Find the sacred bead aligned with your spiritual and worldly aspirations
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsGuideOpen(false)}
                                className="p-1.5 rounded-lg text-stone-400 hover:text-white hover:bg-white/10 transition"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Modal Body: Scrollable Guide List */}
                        <div className="p-6 overflow-y-auto space-y-3.5 text-stone-200 text-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                {MUKHI_QUICK_GUIDE.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="p-3.5 rounded-xl bg-stone-950/60 border border-amber-900/40 hover:border-amber-500/50 transition-colors"
                                    >
                                        <div className="flex items-center justify-between mb-1.5">
                                            <span className="font-bold text-amber-300 text-sm">{item.mukhi}</span>
                                            <span className="text-[11px] px-2 py-0.5 rounded-full bg-amber-950/80 text-amber-200 border border-amber-700/40">
                                                {item.deity}
                                            </span>
                                        </div>
                                        <p className="text-xs text-stone-300 leading-relaxed mb-1.5">
                                            {item.benefit}
                                        </p>
                                        <div className="text-[11px] text-amber-400/80 flex items-center justify-between">
                                            <span>Governing Planet: {item.planet}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Modal Footer */}
                        <div className="px-6 py-3 border-t border-amber-900/50 bg-[#2d0909] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                            <span className="text-stone-300 text-center sm:text-left">
                                Need personal astrological recommendation?
                            </span>
                            <div className="flex items-center gap-2">
                                <a
                                    href="https://wa.me/917448899396?text=Hello%20Om%20Sritara,%20I%20need%20guidance%20for%20choosing%20the%20right%20Rudraksha"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition"
                                >
                                    WhatsApp Guidance
                                </a>
                                <button
                                    onClick={() => {
                                        setIsGuideOpen(false);
                                        scrollToCollection();
                                    }}
                                    className="px-4 py-1.5 bg-amber-500 hover:bg-amber-400 text-stone-950 font-bold rounded-lg transition"
                                >
                                    View Collection
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

"use client";

import { Leaf, BadgeCheck, Globe, Gem, Headset, CheckCircle2, ArrowUpRight } from "lucide-react";

// Decorative SVG Pattern
const DotPattern = () => (
    <svg className="absolute inset-0 h-full w-full stroke-amber-900/5 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]" aria-hidden="true">
        <defs>
            <pattern id="dot-pattern" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="2" cy="2" r="1" fill="currentColor" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="0" fill="url(#dot-pattern)" />
    </svg>
);

const tips = [
    {
        id: 1,
        title: "Choose Natural",
        description: "Choose a natural gemstone whenever possible for the highest astrological and aesthetic value.",
        icon: Leaf,
        color: "text-emerald-600",
        bg: "bg-emerald-50",
        border: "border-emerald-100",
        shadow: "shadow-emerald-100/50"
    },
    {
        id: 2,
        title: "Quality Checked",
        description: "Check that the gemstone has been quality checked and comes with proper certification.",
        icon: BadgeCheck,
        color: "text-blue-600",
        bg: "bg-blue-50",
        border: "border-blue-100",
        shadow: "shadow-blue-100/50"
    },
    {
        id: 3,
        title: "Origin & Significance",
        description: "Learn about its origin and traditional significance to ensure it aligns with your intentions.",
        icon: Globe,
        color: "text-amber-600",
        bg: "bg-amber-50",
        border: "border-amber-100",
        shadow: "shadow-amber-100/50"
    },
    {
        id: 4,
        title: "Preferred Format",
        description: "Select your preferred format – whether you want a Loose Gemstone, a crafted Ring, or a Pendant.",
        icon: Gem,
        color: "text-purple-600",
        bg: "bg-purple-50",
        border: "border-purple-100",
        shadow: "shadow-purple-100/50"
    },
    {
        id: 5,
        title: "Expert Guidance",
        description: "Seek expert guidance if you are unsure which gemstone is right for your unique journey.",
        icon: Headset,
        color: "text-rose-600",
        bg: "bg-rose-50",
        border: "border-rose-100",
        shadow: "shadow-rose-100/50"
    }
];

export default function BeforeChoosingGemstone() {
    return (
        <section className="relative overflow-hidden bg-[#FAFAFA] py-10 sm:py-16 lg:py-16 border-t border-gray-100">
            <DotPattern />

            {/* Ambient Backgrounds */}
            <div className="pointer-events-none absolute left-0 top-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-50/80 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-0 right-0 h-[600px] w-[600px] translate-x-1/3 translate-y-1/3 rounded-full bg-rose-50/80 blur-[120px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mx-auto mb-14 md:mb-16 max-w-3xl text-center relative">
                    <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-gray-200 bg-white px-5 py-2.5 shadow-sm">
                        <CheckCircle2 size={18} className="text-amber-500" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-900">
                            Pre-Purchase Checklist
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a192f] font-serif mb-6 leading-tight">
                        Before Choosing <br />
                        <span className="relative inline-block mt-2">
                            <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">
                                Your Gemstone
                            </span>
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-300 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
                            </svg>
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-2xl text-xl leading-relaxed text-gray-600 font-light">
                        Keep these 5 essential guidelines in mind to ensure you choose the perfect, authentic gemstone.
                    </p>
                </div>

                {/* Grid Layout for 5 Items (Bento Style) */}
                <div className="grid gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 relative z-10">
                    {tips.map((tip, index) => {
                        const Icon = tip.icon;
                        return (
                            <div
                                key={tip.id}
                                className={`group relative overflow-hidden rounded-[2.5rem] bg-white p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] ${index === 3 ? "lg:col-span-1 lg:col-start-1" : ""
                                    } ${index === 4 ? "md:col-span-2 lg:col-span-2" : ""
                                    }`}
                            >
                                {/* Inner Double Border */}
                                <div className="absolute inset-0 rounded-[2.5rem] border-[3px] border-gray-50/50 m-2 transition-colors duration-500 group-hover:border-amber-100/40"></div>

                                {/* Subtle glowing blob on hover */}
                                <div className={`absolute -right-20 -top-20 h-48 w-48 rounded-full ${tip.bg} opacity-0 blur-3xl transition-opacity duration-700 group-hover:opacity-100`} />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="mb-10 flex items-center justify-between">
                                        <div className={`relative flex h-20 w-20 items-center justify-center rounded-[1.25rem] ${tip.bg} ${tip.border} border shadow-sm transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                            <Icon size={32} strokeWidth={1.5} className={tip.color} />
                                        </div>
                                        <div className="text-7xl font-black text-gray-50 transition-colors duration-500 group-hover:text-gray-100">
                                            0{tip.id}
                                        </div>
                                    </div>

                                    <h3 className="mb-5 text-2xl md:text-3xl font-bold text-gray-900 font-serif leading-tight">
                                        {tip.title}
                                    </h3>

                                    <p className="md:text-lg text-base leading-relaxed text-gray-500 mb-6 font-light flex-1">
                                        {tip.description}
                                    </p>

                                    {/* Action link for expert guidance (only on the last card) */}
                                    {index === 4 && (
                                        <div className="mt-8">
                                            <button className="group/btn relative inline-flex items-center gap-4 rounded-full bg-gray-900 px-8 py-4 text-white overflow-hidden transition-all hover:shadow-[0_10px_20px_rgba(0,0,0,0.15)]">
                                                <div className="absolute inset-0 w-0 bg-gradient-to-r from-amber-500 to-orange-600 transition-all duration-500 ease-out group-hover/btn:w-full"></div>
                                                <span className="relative z-10 font-bold text-sm uppercase tracking-[0.1em]">Talk to an Expert</span>
                                                <ArrowUpRight size={18} className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}

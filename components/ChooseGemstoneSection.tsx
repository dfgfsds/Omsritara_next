"use client";

import {
    CalendarDays,
    Sparkles,
    Target,
    ShieldCheck,
    BriefcaseBusiness,
    Heart,
    Brain,
    TrendingUp,
    ChevronRight,
    Globe,
    Flame
} from "lucide-react";

const gemstoneWays = [
    {
        number: "01",
        icon: CalendarDays,
        title: "Choose by Birth Month",
        description:
            "Birthstones are traditionally associated with each month of the year. If you're looking for a simple and traditional approach, start with your Birthstone.",
        label: "Traditional Choice",
        color: "from-rose-400 to-pink-500",
        lightBg: "bg-rose-50",
        borderColor: "border-rose-100",
        textColor: "text-rose-700"
    },
    {
        number: "02",
        icon: Sparkles,
        title: "Choose by Rashi",
        description:
            "Many people choose gemstones based on their Rashi (zodiac sign). Each Rashi is traditionally associated with specific gemstones.",
        label: "Zodiac Based",
        color: "from-indigo-400 to-purple-500",
        lightBg: "bg-indigo-50",
        borderColor: "border-indigo-100",
        textColor: "text-indigo-700"
    },
    {
        number: "03",
        icon: Globe,
        title: "Choose by Planet",
        description:
            "Some gemstones are traditionally linked to planets such as the Sun, Moon, Jupiter, Venus, Saturn, Rahu, and Ketu. This approach is commonly followed in Vedic astrology.",
        label: "Vedic Astrology",
        color: "from-amber-400 to-orange-500",
        lightBg: "bg-amber-50",
        borderColor: "border-amber-100",
        textColor: "text-amber-700"
    },
];

const purposes = [
    {
        icon: Flame,
        title: "Confidence",
        iconBg: "bg-orange-50",
        iconColor: "text-orange-500",
        borderColor: "border-orange-100",
        hoverShadow: "hover:shadow-orange-100",
    },
    {
        icon: TrendingUp,
        title: "Prosperity",
        iconBg: "bg-emerald-50",
        iconColor: "text-emerald-500",
        borderColor: "border-emerald-100",
        hoverShadow: "hover:shadow-emerald-100",
    },
    {
        icon: BriefcaseBusiness,
        title: "Career Growth",
        iconBg: "bg-blue-50",
        iconColor: "text-blue-500",
        borderColor: "border-blue-100",
        hoverShadow: "hover:shadow-blue-100",
    },
    {
        icon: Brain,
        title: "Emotional Balance",
        iconBg: "bg-cyan-50",
        iconColor: "text-cyan-500",
        borderColor: "border-cyan-100",
        hoverShadow: "hover:shadow-cyan-100",
    },
    {
        icon: Heart,
        title: "Love & Relationships",
        iconBg: "bg-rose-50",
        iconColor: "text-rose-500",
        borderColor: "border-rose-100",
        hoverShadow: "hover:shadow-rose-100",
    },
    {
        icon: ShieldCheck,
        title: "Protection",
        iconBg: "bg-slate-100",
        iconColor: "text-slate-600",
        borderColor: "border-slate-200",
        hoverShadow: "hover:shadow-slate-200",
    },
    {
        icon: Sparkles,
        title: "Spiritual Growth",
        iconBg: "bg-amber-50",
        iconColor: "text-amber-500",
        borderColor: "border-amber-100",
        hoverShadow: "hover:shadow-amber-100",
    },
];

export default function ChooseGemstoneSection() {
    return (
        <section className="relative overflow-hidden bg-[#faf9f6] py-16 sm:py-16 lg:py-16">
            {/* Soft Ambient Background Elements */}
            <div className="pointer-events-none absolute left-[-10%] top-[10%] h-[500px] w-[500px] rounded-full bg-orange-100/60 blur-[120px]" />
            <div className="pointer-events-none absolute bottom-[-10%] right-[-10%] h-[600px] w-[600px] rounded-full bg-amber-100/50 blur-[130px]" />
            <div className="pointer-events-none absolute left-[40%] top-[40%] h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-rose-50/40 blur-[150px]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="mx-auto mb-16 max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-200 bg-amber-50 px-4 py-2 shadow-sm">
                        <Sparkles size={16} className="text-amber-600" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">
                            Find Your Perfect Gemstone
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a192f] font-serif mb-6 leading-tight">
                        4 Ways to Choose the{" "}
                        <br className="hidden sm:block" />
                        <span className="bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 bg-clip-text text-transparent">
                            Right Gemstone
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-gray-600 px-2">
                        Discover a gemstone that resonates perfectly with your birth month, astrological Rashi, planetary associations, or personal goals.
                    </p>
                </div>

                {/* Top 3 Cards Grid */}
                <div className="grid gap-6 md:grid-cols-3">
                    {gemstoneWays.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.number}
                                className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white/70 p-6 sm:p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-white hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)]"
                            >
                                {/* Large Watermark Number */}
                                <div className="absolute -right-4 -top-6 text-9xl font-black tracking-tighter text-gray-50 transition-all duration-500 group-hover:scale-110 group-hover:text-gray-100/70">
                                    {item.number}
                                </div>

                                <div className="relative z-10">
                                    {/* Icon & Label */}
                                    <div className="mb-8 flex items-center justify-between">
                                        <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} shadow-lg text-white transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110`}>
                                            <Icon size={30} strokeWidth={1.5} />
                                        </div>

                                        <span className={`rounded-full border ${item.borderColor} ${item.lightBg} px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${item.textColor}`}>
                                            {item.label}
                                        </span>
                                    </div>

                                    {/* Content */}
                                    <h3 className="mb-4 text-2xl font-bold text-gray-900 font-serif">
                                        {item.title}
                                    </h3>

                                    <p className="text-base leading-relaxed text-gray-600">
                                        {item.description}
                                    </p>


                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* Purpose Section (Full Width / Card 4) */}
                <div className="relative mt-6 overflow-hidden rounded-3xl sm:rounded-[2.5rem] border border-amber-100/50 bg-gradient-to-br from-white via-amber-50/30 to-orange-50/50 p-6 sm:p-8 md:p-10 lg:p-14 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
                    {/* Decorative Elements */}
                    <div className="absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-gradient-to-br from-amber-200 to-orange-300 opacity-20 blur-3xl" />
                    <div className="absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-tr from-rose-200 to-pink-300 opacity-20 blur-3xl" />

                    <div className="relative z-10 grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:items-center">
                        {/* Left Content */}
                        <div>
                            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-orange-200 text-white">
                                <Target size={32} strokeWidth={1.5} />
                            </div>

                            <h3 className="mb-4 text-3xl sm:text-4xl font-bold text-gray-900 font-serif">
                                Choose by{" "}
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                                    Your Purpose
                                </span>
                            </h3>

                            <p className="max-w-md text-base sm:text-lg leading-relaxed text-gray-600">
                                You may also choose a gemstone based on your personal goals, intentions,
                                and the areas of life you wish to focus on.
                            </p>
                        </div>

                        {/* Purpose Tags/Pills */}
                        <div className="flex flex-wrap gap-3 lg:gap-4">
                            {purposes.map((purpose) => {
                                const Icon = purpose.icon;

                                return (
                                    <div
                                        key={purpose.title}
                                        className={`group flex items-center gap-3 rounded-2xl border bg-white/80 px-5 py-4 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${purpose.borderColor} ${purpose.hoverShadow}`}
                                    >
                                        <div className={`flex items-center justify-center p-2.5 rounded-xl ${purpose.iconBg} ${purpose.iconColor} transition-transform duration-300 group-hover:scale-110`}>
                                            <Icon size={20} strokeWidth={2} />
                                        </div>

                                        <span className="text-sm sm:text-base font-bold text-gray-700">
                                            {purpose.title}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
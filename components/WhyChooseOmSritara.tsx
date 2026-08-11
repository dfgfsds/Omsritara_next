"use client";

import { Gem, ShieldCheck, HeartHandshake, Star, Layers, Headset, Sparkles } from "lucide-react";

const reasons = [
    {
        title: "Carefully Selected Natural Gemstones",
        description: "We source only the most authentic, natural gemstones, ensuring pure energetic vibration.",
        icon: Gem,
        color: "text-rose-500",
        bg: "bg-rose-50",
    },
    {
        title: "Quality-Checked Recommendations",
        description: "Every recommendation undergoes strict quality checks to guarantee authenticity and perfection.",
        icon: ShieldCheck,
        color: "text-blue-500",
        bg: "bg-blue-50",
    },
    {
        title: "Personalized Spiritual Guidance",
        description: "Receive tailored guidance aligning the gemstone's energy with your personal spiritual journey.",
        icon: HeartHandshake,
        color: "text-emerald-500",
        bg: "bg-emerald-50",
    },
    {
        title: "Birthstone, Rashi & Planet Consultation",
        description: "Expert astrological consultations based on your unique birth chart, Rashi, and planetary alignments.",
        icon: Star,
        color: "text-amber-500",
        bg: "bg-amber-50",
    },
    {
        title: "Loose Gemstone, Ring & Pendant",
        description: "Choose your preferred format—whether you desire a loose stone, a custom ring, or an elegant pendant.",
        icon: Layers,
        color: "text-purple-500",
        bg: "bg-purple-50",
    },
    {
        title: "Dedicated Customer Support",
        description: "Our compassionate support team is always here to assist you at every step of your gemstone journey.",
        icon: Headset,
        color: "text-cyan-500",
        bg: "bg-cyan-50",
    }
];

const HexPattern = () => (
    <svg className="absolute inset-0 h-full w-full stroke-amber-900/5 [mask-image:radial-gradient(100%_100%_at_center,white,transparent)]" aria-hidden="true">
        <defs>
            <pattern id="hex-pattern" width="30" height="30" patternUnits="userSpaceOnUse" patternTransform="scale(2)">
                <path d="M15 0L30 8.66025V25.9808L15 34.641L0 25.9808V8.66025L15 0Z" fill="none" />
            </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth="1" fill="url(#hex-pattern)" />
    </svg>
);

export default function WhyChooseOmSritara() {
    return (
        <section className="relative overflow-hidden bg-white py-10 sm:py-16 lg:py-16">
            {/* Background Texture & Watermark */}
            <HexPattern />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-black text-gray-50/50 font-serif whitespace-nowrap pointer-events-none z-0">
                OM SRITARA
            </div>

            {/* Floating ambient glowing orbs */}
            <div className="pointer-events-none absolute left-[10%] top-[20%] h-[400px] w-[400px] rounded-full bg-amber-100/40 blur-[100px]" />
            <div className="pointer-events-none absolute right-[10%] bottom-[20%] h-[400px] w-[400px] rounded-full bg-rose-100/40 blur-[100px]" />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="mx-auto mb-20 max-w-3xl text-center">
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gray-100 bg-white px-5 py-2 shadow-sm">
                        <Sparkles size={16} className="text-amber-500 animate-pulse" />
                        <span className="text-xs font-bold uppercase tracking-[0.2em] text-gray-800">
                            The Om Sritara Difference
                        </span>
                    </div>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a192f] font-serif mb-6 leading-tight">
                        Why Choose{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-rose-500">
                            Om Sritara?
                        </span>
                    </h2>
                </div>

                {/* 3x2 Grid */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {reasons.map((reason, index) => {
                        const Icon = reason.icon;
                        return (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-[2rem] border border-gray-100 bg-white/80 backdrop-blur-md p-6 sm:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:border-transparent"
                            >
                                {/* Animated Gradient Border on Hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-amber-200/50 to-rose-200/50 opacity-0 transition-opacity duration-500 group-hover:opacity-100 -z-10" />
                                <div className="absolute inset-[2px] bg-white rounded-[1.9rem] -z-10" />

                                {/* Icon */}
                                <div className="mb-8 relative inline-flex">
                                    {/* Rotating dashed ring */}
                                    <div className="absolute -inset-3 rounded-full border border-dashed border-gray-200 transition-colors duration-500 group-hover:border-amber-300 animate-[spin_15s_linear_infinite]" />

                                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${reason.bg} transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 shadow-sm`}>
                                        <Icon size={30} strokeWidth={1.5} className={reason.color} />
                                    </div>
                                </div>

                                <h3 className="mb-4 text-2xl font-bold text-gray-900 font-serif leading-tight">
                                    {reason.title}
                                </h3>

                                <p className="text-gray-500 leading-relaxed font-light">
                                    {reason.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Grand Concluding Statement (The Divine Blessing Banner) */}
                <div className="mt-16 md:mt-24 relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-red-400 via-red-500 to-red-600 shadow-2xl p-1.5 group mx-1 sm:mx-0">
                    {/* Animated gradient border container */}
                    <div className="relative overflow-hidden rounded-[2.25rem] bg-gradient-to-br from-red-950 via-red-900 to-red-900 px-6 py-10 sm:px-12 sm:py-16 shadow-inner">

                        {/* Dynamic colorful glowing background */}
                        <div className="absolute -left-[50%] -top-[50%] h-[200%] w-[200%] animate-[spin_15s_linear_infinite] opacity-40">
                            <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-red-500 to-red-500 blur-3xl rounded-full mix-blend-screen" />
                        </div>

                        {/* Shimmer effect that sweeps across on hover */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

                        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
                            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-white/10 shadow-[0_0_40px_rgba(251,191,36,0.3)] backdrop-blur-md border border-white/20 text-amber-400">
                                <Sparkles size={36} strokeWidth={1.5} className="animate-pulse" />
                            </div>

                            <h4 className="text-2xl sm:text-3xl md:text-4xl font-serif text-white leading-relaxed font-light">
                                All Om Sritara gemstones are carefully selected, quality checked, and energized with the <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-orange-400">divine blessings</span> of Guru Matha Sri Tara Amma before being recommended.
                            </h4>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

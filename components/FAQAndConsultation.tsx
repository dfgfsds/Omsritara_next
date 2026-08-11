"use client";

import { useState } from "react";
import { ChevronDown, Sparkles, MessageCircleHeart, Calendar, User, Star, ArrowRight } from "lucide-react";

const faqs = [
    {
        question: "Which gemstone is right for me?",
        answer: "The most suitable gemstone depends on your Birth Month, Rashi, planetary guidance, and personal preferences."
    },
    {
        question: "Can I wear more than one gemstone?",
        answer: "Yes. Some people choose to wear multiple gemstones. If you follow traditional spiritual or astrological practices, personalized guidance is recommended."
    },
    {
        question: "Which format should I choose?",
        answer: "Depending on your preference, gemstones can be recommended as a Loose Gemstone, an elegantly crafted Ring, or a beautiful Pendant."
    },
    {
        question: "Why should I consult an expert before choosing a gemstone?",
        answer: "A consultation helps you understand which gemstone best aligns with your birth details, spiritual goals, and personal preferences."
    }
];

export default function FAQAndConsultation() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="relative overflow-hidden bg-[#FAFAFA] py-24 sm:py-32 border-t border-gray-100">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
                <div className="absolute top-[20%] left-[10%] h-96 w-96 rounded-full bg-amber-100/30 blur-[100px]" />
                <div className="absolute bottom-[20%] right-[10%] h-96 w-96 rounded-full bg-rose-100/30 blur-[100px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-16 lg:grid-cols-12 lg:gap-8">
                    
                    {/* Left Column: FAQs */}
                    <div className="lg:col-span-6 lg:pr-8">
                        <div className="mb-10">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 font-serif">
                                Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-500">Questions</span>
                            </h2>
                            <p className="mt-4 text-lg text-gray-600 font-light">
                                Find answers to common questions about choosing and wearing our sacred gemstones.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                return (
                                    <div 
                                        key={index}
                                        className={`group rounded-2xl border transition-all duration-300 ${
                                            isOpen ? "border-amber-200 bg-white shadow-[0_10px_30px_rgba(251,191,36,0.05)]" : "border-gray-100 bg-white/50 hover:bg-white hover:border-amber-100"
                                        }`}
                                    >
                                        <button
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="flex w-full items-center justify-between px-5 sm:px-6 py-4 sm:py-5 text-left gap-4"
                                        >
                                            <span className={`text-base sm:text-lg font-bold transition-colors duration-300 ${isOpen ? "text-amber-700" : "text-gray-800"}`}>
                                                {faq.question}
                                            </span>
                                            <div className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${isOpen ? "bg-amber-100 text-amber-600 rotate-180" : "bg-gray-50 text-gray-400 group-hover:bg-amber-50 group-hover:text-amber-500"}`}>
                                                <ChevronDown size={18} strokeWidth={2} />
                                            </div>
                                        </button>
                                        
                                        <div 
                                            className={`grid transition-all duration-500 ease-in-out ${
                                                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                            }`}
                                        >
                                            <div className="overflow-hidden">
                                                <p className="px-6 pb-6 text-gray-600 font-light leading-relaxed">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right Column: CTA Consultation Card */}
                    <div className="lg:col-span-6">
                        <div className="relative h-full w-full overflow-hidden rounded-3xl sm:rounded-[2.5rem] bg-gray-900 p-6 sm:p-10 md:p-12 shadow-2xl group">
                            
                            {/* Animated Background */}
                            <div className="absolute inset-0 z-0">
                                <div className="absolute -top-32 -right-32 h-[500px] w-[500px] rounded-full bg-gradient-to-br from-amber-500/20 to-rose-500/20 blur-[80px] group-hover:bg-gradient-to-br group-hover:from-amber-500/30 group-hover:to-orange-500/30 transition-all duration-700" />
                                <div className="absolute -bottom-32 -left-32 h-[400px] w-[400px] rounded-full bg-gradient-to-tr from-orange-600/20 to-red-600/20 blur-[80px]" />
                                {/* Overlay pattern */}
                                <svg className="absolute inset-0 h-full w-full opacity-10" fill="none" stroke="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0 100 C 20 0 50 0 100 100" strokeWidth="0.5" strokeDasharray="2 2" />
                                    <path d="M0 50 C 50 100 80 0 100 50" strokeWidth="0.5" strokeDasharray="2 2" />
                                </svg>
                            </div>

                            <div className="relative z-10 flex h-full flex-col justify-between">
                                <div>
                                    <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg text-white">
                                        <MessageCircleHeart size={32} strokeWidth={1.5} />
                                    </div>

                                    <h3 className="mb-4 text-3xl sm:text-4xl font-extrabold text-white font-serif leading-tight">
                                        Need Personalized <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-300">
                                            Guidance?
                                        </span>
                                    </h3>

                                    <p className="mb-8 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
                                        Still unsure which gemstone is right for you? Share your details with Om Sritara, and our team will provide expert guidance to align with your spiritual journey.
                                    </p>

                                    {/* Little checklist showing what they need to provide */}
                                    <div className="mb-10 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                        {[
                                            { icon: User, label: "Your Name" },
                                            { icon: Calendar, label: "Date of Birth" },
                                            { icon: Star, label: "Rashi (optional)" },
                                            { icon: Sparkles, label: "Preferred Format" }
                                        ].map((item, i) => (
                                            <div key={i} className="flex items-center gap-3 rounded-xl bg-white/5 border border-white/10 px-4 py-3 backdrop-blur-sm">
                                                <item.icon size={16} className="text-amber-400 shrink-0" />
                                                <span className="text-sm font-medium text-gray-200">{item.label}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <button className="group/btn relative w-full overflow-hidden rounded-full bg-white px-6 sm:px-8 py-4 sm:py-5 text-center transition-all hover:shadow-[0_0_40px_rgba(251,191,36,0.3)]">
                                    <div className="absolute inset-0 w-0 bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-500 ease-out group-hover/btn:w-full" />
                                    <span className="relative z-10 flex items-center justify-center gap-2 text-xs sm:text-sm font-bold uppercase tracking-wider text-gray-900 group-hover/btn:text-white transition-colors">
                                        Begin Your Consultation
                                        <ArrowRight size={18} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

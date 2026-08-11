import React from 'react';
import { Sparkles, Star, ShieldCheck } from 'lucide-react';
import ChooseGemstoneSection from './ChooseGemstoneSection';
import BeforeChoosingGemstone from './BeforeChoosingGemstone';
import WhyChooseOmSritara from './WhyChooseOmSritara';
import FAQAndConsultation from './FAQAndConsultation';

const BuyingGuide = () => {
    return (
        <div className="bg-[#fffdfa] py-20 px-4 sm:px-4 lg:px-4 relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-red-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 translate-x-1/2 translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-700 font-medium text-sm mb-6">
                        <Sparkles className="w-4 h-4" />
                        <span>Gemstone Buying Guide</span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#0a192f] font-serif mb-6 leading-tight">
                        How to Choose the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-800 to-amber-600">Right Gemstone</span>
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600 font-medium px-2">
                        Find the Gemstone That Best Aligns with Your Spiritual Journey
                    </p>
                </div>

                <div className="bg-white rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] border border-gray-100 p-5 sm:p-8 md:p-10 relative overflow-hidden">
                    {/* Subtle Corner Accents */}
                    <div className="absolute top-0 left-0 w-32 h-32 border-t-4 border-l-4 border-amber-100 rounded-tl-3xl m-2 opacity-50"></div>
                    <div className="absolute bottom-0 right-0 w-32 h-32 border-b-4 border-r-4 border-amber-100 rounded-br-3xl m-2 opacity-50"></div>

                    <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-12 relative z-10">
                        {/* Text Content (Left on Desktop, Bottom on Mobile) */}
                        <div className="lg:w-1/2">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                Choosing the right gemstone is a <span className="font-semibold text-red-800">personal journey</span>. Whether you're looking for a Birthstone, Rashi Stone, or Planet Stone, the ideal gemstone depends on your birth details, personal preferences, and spiritual guidance.
                            </p>
                            <div className="p-6 bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-100 border-l-4 border-l-amber-500 mb-8">
                                <p className="text-gray-800 font-medium text-lg italic">
                                    "Om Sritara helps you make an informed choice with personalized recommendations."
                                </p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-red-600">
                                        <Star className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Birthstones</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600">
                                        <Sparkles className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Rashi Stones</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center text-amber-600">
                                        <ShieldCheck className="w-5 h-5" />
                                    </div>
                                    <span className="font-semibold text-gray-800">Planet Stones</span>
                                </div>
                            </div>
                        </div>

                        {/* Creative Image Showcase (Right) */}
                        <div className="lg:w-1/2 w-full relative flex justify-center mt-10 lg:mt-0">
                            {/* Decorative Background blob */}
                            <div className="absolute inset-0 bg-gradient-to-tr from-amber-200 to-red-200 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] animate-[spin_10s_linear_infinite] opacity-30 transform scale-105"></div>

                            {/* Main Image Container */}
                            <div className="relative w-full max-w-[425px] sm:max-w-md h-[20rem] sm:h-[28rem] lg:w-[500px] lg:max-w-none rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white z-10 group mx-auto">
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a192f] opacity-20 group-hover:opacity-10 transition-opacity duration-500 z-10"></div>
                                {/* Using one of your existing images */}
                                <img
                                    src="/img/gemston-poster.webp"
                                    alt="Gemstones Collection"
                                    className="w-full h-full object-cover sm:object-contain group-hover:scale-110 transition-transform duration-700 ease-in-out"
                                />
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <ChooseGemstoneSection />
            <BeforeChoosingGemstone />
            <WhyChooseOmSritara />
            <FAQAndConsultation />
        </div>
    );
};

export default BuyingGuide;

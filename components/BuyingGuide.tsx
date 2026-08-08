import React, { useState } from 'react';
import { ChevronDown, Star, ShieldCheck, Heart, Sparkles, Gem, Sun } from 'lucide-react';

const BuyingGuide = () => {
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const steps = [
        {
            title: "1. Follow Your Intuition",
            description: "The right crystal often chooses you. If you feel drawn to a particular stone's color, shape, or energy, trust that instinct. Your higher self knows what you need.",
            icon: <Heart className="w-8 h-8 text-rose-500" />
        },
        {
            title: "2. Shop by Intention",
            description: "Are you seeking love, wealth, protection, or peace? Different crystals hold specific vibrational frequencies that align with these intentions. (e.g., Rose Quartz for Love, Pyrite for Wealth).",
            icon: <Sparkles className="w-8 h-8 text-amber-500" />
        },
        {
            title: "3. Choose by Astrology & Zodiac",
            description: "Your Rashi (Moon Sign) and birth month can guide you toward stones that balance your planetary energies and amplify your natural strengths.",
            icon: <Star className="w-8 h-8 text-indigo-500" />
        },
        {
            title: "4. Consider Chakras",
            description: "If you feel a block in a specific area of your life, choose a stone that corresponds to that Chakra. For instance, Amethyst for the Crown Chakra (spiritual connection).",
            icon: <Sun className="w-8 h-8 text-yellow-500" />
        }
    ];

    const qualityChecks = [
        {
            title: "100% Authentic",
            desc: "We ethically source all our stones, ensuring they are natural and unheated unless specified."
        },
        {
            title: "Energized & Blessed",
            desc: "Every crystal is spiritually cleansed and energized by Guru Matha through sacred rituals before it reaches you."
        },
        {
            title: "Premium Quality",
            desc: "We select only the highest grade stones, checking for clarity, color, and energetic vibration."
        }
    ];

    const faqs = [
        {
            question: "How do I know if a crystal is working for me?",
            answer: "You may feel a subtle shift in your energy, mood, or circumstances. Sometimes, the changes are gradual. Trust the process and keep the crystal close."
        },
        {
            question: "Can I wear multiple gemstones together?",
            answer: "Yes, but it's important to ensure their energies are compatible. Generally, stones with similar intentions work well together. When in doubt, consult our experts."
        },
        {
            question: "How often should I cleanse my crystals?",
            answer: "We recommend cleansing your crystals once a month, during a full moon, or whenever they feel 'heavy' or dull. You can use sage, moonlight, or selenite."
        }
    ];

    return (
        <div className="bg-[#F9F6F0] min-h-screen font-quicksand pb-20">
            {/* Hero Section */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-100 py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
                <div className="max-w-4xl mx-auto relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                        Gemstone & Crystal Buying Guide
                    </h1>
                    <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
                        Your spiritual journey is unique. Let us help you find the perfect crystal companion to elevate your energy, manifest your desires, and bring balance to your life.
                    </p>
                </div>
                {/* Decorative elements */}
                <div className="absolute top-10 left-10 opacity-20">
                    <Gem className="w-24 h-24 text-amber-600" />
                </div>
                <div className="absolute bottom-10 right-10 opacity-20">
                    <Sparkles className="w-32 h-32 text-orange-600" />
                </div>
            </div>

            {/* How to Choose Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose Your Crystal</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        There is no single "right" way to choose a crystal. Here are four powerful methods to find the stone that aligns with your path.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((step, idx) => (
                        <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-amber-100 flex flex-col items-center text-center">
                            <div className="bg-amber-50 p-4 rounded-full mb-6">
                                {step.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quality & Authenticity */}
            <div className="bg-white py-16 border-y border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Om Sritara Promise</h2>
                            <p className="text-gray-600 mb-8 leading-relaxed">
                                We understand that the power of a crystal lies in its purity and energetic charge. That's why we take extraordinary care in bringing you only the most vibrant, authentic stones.
                            </p>
                            <div className="space-y-6">
                                {qualityChecks.map((check, idx) => (
                                    <div key={idx} className="flex gap-4">
                                        <div className="mt-1">
                                            <ShieldCheck className="w-6 h-6 text-green-500" />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-semibold text-gray-900">{check.title}</h4>
                                            <p className="text-gray-600 text-sm mt-1">{check.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <div className="bg-gradient-to-br from-amber-100 to-orange-200 rounded-3xl p-2 h-[400px] flex items-center justify-center relative overflow-hidden shadow-inner">
                                <div className="absolute inset-0 bg-white/20 backdrop-blur-sm"></div>
                                <div className="relative z-10 text-center p-8 bg-white/80 rounded-2xl shadow-lg max-w-sm">
                                    <Sparkles className="w-12 h-12 text-amber-500 mx-auto mb-4" />
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Energized & Blessed</h3>
                                    <p className="text-gray-700 text-sm">Every crystal is personally blessed by Guru Matha before dispatch, ensuring it reaches you vibrating with divine energy.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-600">Common questions about buying and using crystals.</p>
                </div>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-200"
                        >
                            <button
                                className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                                onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                            >
                                <span className="font-semibold text-gray-900">{faq.question}</span>
                                <ChevronDown
                                    className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                                        activeFaq === index ? "transform rotate-180" : ""
                                    }`}
                                />
                            </button>
                            <div
                                className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
                                    activeFaq === index ? "max-h-40 pb-4 opacity-100" : "max-h-0 opacity-0"
                                }`}
                            >
                                <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BuyingGuide;

"use client";

import React, { useState } from "react";

type FaqItem = {
    id: number;
    question: string;
    answer: string;
};

const defaultFaqs: FaqItem[] = [
    {
        id: 1,
        question: "Why choose Om Sritara for spiritual healing and Reiki training?",
        answer:
            "Om Sritara, operating under Anandat Bhavati Private Limited, is a trusted spiritual wellness centre guided by Guru Matha. We offer authentic spiritual healing services, Reiki certification courses, holistic wellness programs, and spiritually energized products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha before reaching our customers.",
    },
    {
        id: 2,
        question: "Are all products at Om Sritara personally energized by Guru Matha?",
        answer:
            "Yes. Every healing crystal, bracelet, ring, pendant, Rudraksha mala, pendulum, Yantra, and spiritual product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha before dispatch.",
    },
    {
        id: 3,
        question: "What spiritual healing services and courses does Om Sritara offer?",
        answer:
            "Om Sritara offers Reiki Healing, Reiki certification, Crystal Healing, Chakra Healing, Akashic Records, Angel Reiki, Shamballa Reiki, Lama Fera, Quantum Healing, Pendulum Dowsing, Sujok Therapy, Numerology, Meditation, Spiritual Counseling, Aura Cleansing, Energy Healing, Thanthrigam (Tantra), Shamanism, and more than 24 certified spiritual courses in Tamil and English.",
    },
    {
        id: 4,
        question: "Can I learn Reiki and spiritual healing online from anywhere?",
        answer:
            "Yes. Om Sritara offers online Reiki certification, spiritual healing courses, and holistic wellness programs for students across India and worldwide through guided lessons, practical demonstrations, study materials, and certification.",
    },
    {
        id: 5,
        question: "What makes Om Sritara different from other spiritual wellness centres?",
        answer:
            "Om Sritara combines authentic spiritual traditions with practical learning under the guidance of Guru Matha. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha. We also offer 24+ certified courses, online and offline learning, personalized guidance, and holistic wellness services.",
    }
];

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.omsritara.in/#faq",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Why choose Om Sritara for spiritual healing and Reiki training?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Om Sritara, operating under Anandat Bhavati Private Limited, is a trusted spiritual wellness centre guided by Guru Matha. We offer authentic spiritual healing services, Reiki certification courses, holistic wellness programs, and spiritually energized products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha before reaching our customers."
            }
        },
        {
            "@type": "Question",
            "name": "Are all products at Om Sritara personally energized by Guru Matha?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Every healing crystal, bracelet, ring, pendant, Rudraksha mala, pendulum, Yantra, and spiritual product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha before dispatch."
            }
        },
        {
            "@type": "Question",
            "name": "What spiritual healing services and courses does Om Sritara offer?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Om Sritara offers Reiki Healing, Reiki certification, Crystal Healing, Chakra Healing, Akashic Records, Angel Reiki, Shamballa Reiki, Lama Fera, Quantum Healing, Pendulum Dowsing, Sujok Therapy, Numerology, Meditation, Spiritual Counseling, Aura Cleansing, Energy Healing, Thanthrigam (Tantra), Shamanism, and more than 24 certified spiritual courses in Tamil and English."
            }
        },
        {
            "@type": "Question",
            "name": "Can I learn Reiki and spiritual healing online from anywhere?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes. Om Sritara offers online Reiki certification, spiritual healing courses, and holistic wellness programs for students across India and worldwide through guided lessons, practical demonstrations, study materials, and certification."
            }
        },
        {
            "@type": "Question",
            "name": "What makes Om Sritara different from other spiritual wellness centres?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Om Sritara combines authentic spiritual traditions with practical learning under the guidance of Guru Matha. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha. We also offer 24+ certified courses, online and offline learning, personalized guidance, and holistic wellness services."
            }
        }
    ]
};

export default function FAQSection({
    faqs = defaultFaqs,
    className = "",
}: {
    faqs?: FaqItem[];
    className?: string;
}) {
    const [openId, setOpenId] = useState<number | null>(faqs[0]?.id ?? null);

    const toggle = (id: number) => setOpenId(openId === id ? null : id);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
            <section
                className={`max-w-6xl mx-auto p-6 sm:p-10 bg-white rounded-2xl transition-all duration-300 ${className}`}
                aria-labelledby="faq-heading"
            >
                <h2
                    id="faq-heading"
                    className="text-2xl sm:text-3xl font-semibold mb-4 text-center text-gray-900"
                >
                    FAQs – Everything You Need to Know About Buying Healing Crystals Online
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-8 text-center max-w-2xl mx-auto">
                    Have a question? See the most common ones below. Click or tap a question to
                    reveal its answer.
                </p>

                <div className="space-y-4">
                    {faqs.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`border border-gray-200 rounded-md transition-all duration-300 overflow-hidden ${isOpen ? "shadow-md" : "shadow-sm"
                                    }`}
                            >
                                <button
                                    onClick={() => toggle(item.id)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-panel-${item.id}`}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left focus:outline-none"
                                >
                                    <span className="flex-1 text-base sm:text-lg font-medium text-gray-900">
                                        {item.question}
                                    </span>
                                    <span
                                        className={`ml-4 flex-none transform transition-transform duration-300 ease-in-out ${isOpen ? "rotate-45 text-indigo-600" : "rotate-0 text-gray-500"
                                            }`}
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-6 w-6"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            stroke="currentColor"
                                        >
                                            <path
                                                d="M10 4v12M4 10h12"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>

                                <div
                                    id={`faq-panel-${item.id}`}
                                    role="region"
                                    aria-labelledby={`faq-heading-${item.id}`}
                                    className={`grid transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="px-5 pb-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </section>
        </>
    );
}
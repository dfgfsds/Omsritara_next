"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Kirti",
        review: "Guru Matha is kind, compassionate, and patiently answered every question during the class. I'm truly grateful to have learned from her and highly recommend Om Sritara to anyone interested in spiritual healing",
        rating: 5,
    },
    {
        name: "Sowmiyalakshmi Prakash",
        review: "The class was clear, easy to understand, and filled with positive spiritual energy. Guru Matha explained everything patiently, making it a wonderful learning experience.",
        rating: 5,
    },
    {
        name: "Crisy Vaasan",
        review: "I loved the Lama Fera and Magnified Healing classes. The sessions were informative, inspiring, and conducted at a very high standard.",
        rating: 4,
    },
    {
        name: "Suganya Manojkumar",
        review: "The session was genuine, informative, and exceeded my expectations. Thank you to the Om Sritara team for such a valuable experience.",
        rating: 5,
    },
    {
        name: "Ravi Kumar",
        review: "My order arrived quickly and in excellent condition. Thank you for the prompt delivery and great service.",
        rating: 4,
    },
    {
        name: "Malathi K",
        review: "The spiritual class was wonderful and peaceful. It helped calm my mind and encouraged me to bring more balance into my daily life.",
        rating: 5,
    },
    {
        name: "Honey Senthil",
        review: "I've been using the Money Magnet Bracelet for the past three months, and it's been a wonderful experience. I'm very happy with my purchase.",
        rating: 5,
    },
    {
        name: "Gayathri Reguselvam",
        review: "It was a wonderful experience learning from Guru Matha. Her spiritual guidance was inspiring and left a lasting positive impact on me.",
        rating: 5,
    },
    {
        name: "Sheela Vijay",
        review: "I was so happy to attend the Reiki class. It gave me a very positive feeling, and Guru Matha's teaching was warm, kind, and inspiring.",
        rating: 5,
    },
    {
        name: "Vijay Anand",
        review: "A wonderful place to find clarity, positive energy, and personal healing. I had a great experience at Om Sritara.",
        rating: 5,
    },
];

const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.omsritara.in/#testimonials",
    "name": "Om Sritara Customer Reviews",
    "description":
        "Verified customer experiences with Om Sritara's Reiki classes, healing crystals, spiritual products and holistic wellness services.",
    "numberOfItems": 10,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": [
        {
            "@type": "Review",
            "position": 1,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Kirti"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody":
                "Guru Matha is kind, compassionate and patiently answered every question. I'm grateful to have learned from her."
        },
        {
            "@type": "Review",
            "position": 2,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Sowmiyalakshmi Prakash"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "The class was easy to understand, spiritually uplifting and explained clearly with patience."
        },
        {
            "@type": "Review",
            "position": 3,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Crisy Vaasan"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "Loved the Lama Fera and Magnified Healing classes. The sessions were informative and conducted at a very high level."
        },
        {
            "@type": "Review",
            "position": 4,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Suganya Manojkumar"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "A genuine and informative session. Thank you to the Om Sritara team for such a valuable experience."
        },
        {
            "@type": "Review",
            "position": 5,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Ravi Kumar"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "Product arrived quickly and in excellent condition. Very happy with the delivery and service."
        },
        {
            "@type": "Review",
            "position": 6,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Malathi K."
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "The spiritual class was peaceful, inspiring and helped me feel mentally refreshed and balanced."
        },
        {
            "@type": "Review",
            "position": 7,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Honey Senthil"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "I've been using the Money Magnet Bracelet for several months and have had a wonderful experience."
        },
        {
            "@type": "Review",
            "position": 8,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Gayathri Reguselvam"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "A wonderful experience learning from Guru Matha. Her spiritual guidance was inspiring and deeply meaningful."
        },
        {
            "@type": "Review",
            "position": 9,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Sheela Vijay"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody": "The Reiki class gave me a very positive feeling. Guru Matha's teaching style was warm and encouraging."
        },
        {
            "@type": "Review",
            "position": 10,
            "itemReviewed": {
                "@id": "https://www.omsritara.in/#organization"
            },
            "author": {
                "@type": "Person",
                "name": "Vijay Anand"
            },
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
            },
            "reviewBody":
                "A wonderful place to experience positivity, healing and inner clarity."
        }
    ]
};

export default function Testimonials() {
    const sliderRef = useRef<HTMLDivElement>(null);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        const interval = setInterval(() => {
            if (!isHovered) {
                slider.scrollBy({ left: slider.clientWidth / 3, behavior: "smooth" });
                if (slider.scrollLeft + slider.clientWidth >= slider.scrollWidth) {
                    slider.scrollTo({ left: 0 });
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isHovered]);

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(reviewSchema),
                }}
            />
            <section className="py-12 bg-gray-50">
                <div className="max-w-6xl mx-auto px-4">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                        <Image src="/google-logo.png" alt="Google" width={40} height={40} />
                        <h2 className="text-2xl font-bold">What Our Spiritual Community Says</h2>
                    </div>

                    {/* Slider */}
                    <div
                        ref={sliderRef}
                        className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        {testimonials.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[80%] sm:w-[45%] md:w-[31%]"
                            >
                                <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4 h-full">
                                    <div className="flex items-center gap-2">
                                        {Array.from({ length: t.rating }).map((_, idx) => (
                                            <Star key={idx} className="text-yellow-500 fill-yellow-500" size={18} />
                                        ))}
                                    </div>
                                    <p className="text-gray-600 italic">"{t.review}"</p>
                                    <p className="font-semibold text-gray-800">- {t.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

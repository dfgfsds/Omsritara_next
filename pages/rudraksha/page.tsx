'use client';

import React, { useEffect, useState, useMemo } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useProducts } from '@/context/ProductsContext';
import { useCategories } from '@/context/CategoriesContext';
import { useCurrency } from '@/context/CurrencyContext';
import { useVendor } from '@/context/VendorContext';
import { getProductApi } from '@/api-endpoints/products';
import { postNewCartitemWithQtyApi } from '@/api-endpoints/CartsApi';
import { InvalidateQueryFilters, useQuery, useQueryClient } from '@tanstack/react-query';
import { slugConvert } from '@/lib/utils';
import toast from 'react-hot-toast';
import LoginModal from '@/pages/LoginModal/page';
import RudrakshaHero from '@/components/RudrakshaHero';
import { addToGuestCart } from '@/lib/cartUtils';
import {
    Sparkles,
    CheckCircle2,
    ShoppingCart,
    Plus,
    Minus,
    ShieldCheck,
    Eye,
    Zap,
    Award,
    ArrowRight,
    Search,
    X,
    Star,
    Flame,
    ChevronRight,
    ChevronLeft,
    HeartHandshake
} from 'lucide-react';

interface RudrakshaItemConfig {
    id: number;
    mukhiNumber: number;
    slug: string;
    displayMukhi: string;
    title: string;
    apiNameMatch: string[];
    deity: string;
    mantra: string;
    planet: string;
    chakra: string;
    description: string;
    benefits: string[];
}

const RUDRAKSHA_CONFIGS: RudrakshaItemConfig[] = [
    {
        id: 23119,
        mukhiNumber: 1,
        slug: '1-mukhi-rudraksha-silver-cap',
        displayMukhi: '1 Mukhi (Silver Cap)',
        title: 'Mukhi with Silver Cap',
        apiNameMatch: ['mukhi with silver cap', '1 mukhi'],
        deity: 'Lord Shiva',
        mantra: 'Om Hreem Namah',
        planet: 'Sun (Surya)',
        chakra: 'Sahasrara (Crown Chakra)',
        description:
            'Sacred Rudraksha with an elegant silver cap, traditionally associated with Lord Shiva. Believed to support inner peace, meditation, self-awareness, and spiritual growth, making it ideal for daily spiritual practices.',
        benefits: [
            'Supports meditation and inner peace.',
            'Encourages self-awareness and spiritual growth.',
            'Symbolizes deeper consciousness and spiritual connection.'
        ]
    },
    {
        id: 23120,
        mukhiNumber: 2,
        slug: '2-mukhi-rudraksha',
        displayMukhi: '2 Mukhi',
        title: '2 Mukhi Rudraksha',
        apiNameMatch: ['2 mukhi rudraksha', '2 mukhi'],
        deity: 'Ardhanarishvara',
        mantra: 'Om Namah',
        planet: 'Moon (Chandra)',
        chakra: 'Svadhisthana (Sacral Chakra)',
        description:
            '2 Mukhi Rudraksha, traditionally associated with Ardhanarishvara, symbolizes unity, harmony, and emotional balance.',
        benefits: [
            'Encourages harmony in relationships.',
            'Supports emotional balance and inner peace.',
            'Symbolizes unity and mutual understanding.'
        ]
    },
    {
        id: 23121,
        mukhiNumber: 3,
        slug: '3-mukhi-rudraksha',
        displayMukhi: '3 Mukhi',
        title: '3 Mukhi Rudraksha',
        apiNameMatch: ['3 mukhi rudraksha', '3 mukhi'],
        deity: 'Agni Dev',
        mantra: 'Om Kleem Namah',
        planet: 'Mars (Mangal)',
        chakra: 'Manipura (Solar Plexus Chakra)',
        description:
            '3 Mukhi Rudraksha, traditionally associated with Agni Dev, symbolizes courage, renewal, and inner transformation.',
        benefits: [
            'Encourages confidence and inner strength.',
            'Symbolizes release from past negativity.',
            'Supports personal growth and fresh beginnings.'
        ]
    },
    {
        id: 23123,
        mukhiNumber: 4,
        slug: '4-mukhi-rudraksha',
        displayMukhi: '4 Mukhi',
        title: '4 Mukhi Rudraksha',
        apiNameMatch: ['4 mukhi rudraksha', '4 mukhi'],
        deity: 'Lord Brahma',
        mantra: 'Om Hreem Namah',
        planet: 'Mercury (Budha)',
        chakra: 'Anahata (Heart Chakra)',
        description:
            '4 Mukhi Rudraksha, traditionally associated with Lord Brahma, symbolizes wisdom, knowledge, creativity, and intellectual growth.',
        benefits: [
            'Supports focus and concentration.',
            'Encourages creativity and self-expression.',
            'Symbolizes wisdom and mental clarity.'
        ]
    },
    {
        id: 23124,
        mukhiNumber: 5,
        slug: '5-mukhi-rudraksha',
        displayMukhi: '5 Mukhi',
        title: '5 Mukhi Rudraksha',
        apiNameMatch: ['5 mukhi rudraksha', '5 mukhi'],
        deity: 'Lord Shiva',
        mantra: 'Om Hreem Namah',
        planet: 'Jupiter (Brihaspati)',
        chakra: 'Vishuddha (Throat Chakra)',
        description:
            '5 Mukhi Rudraksha, traditionally associated with Lord Shiva, symbolizes peace, protection, and spiritual balance. Ideal for meditation and daily spiritual practices, it represents calmness, mindfulness, and inner harmony.',
        benefits: [
            'Encourages calmness and inner stability.',
            'Supports mindfulness and mental clarity.',
            'Symbolizes spiritual well-being and harmony.'
        ]
    },
    {
        id: 23125,
        mukhiNumber: 6,
        slug: '6-mukhi-rudraksha',
        displayMukhi: '6 Mukhi',
        title: '6 Mukhi Rudraksha',
        apiNameMatch: ['6 mukhi rudraksha', '6 mukhi'],
        deity: 'Lord Kartikeya',
        mantra: 'Om Hreem Hoom Namah',
        planet: 'Venus (Shukra)',
        chakra: 'Muladhara (Root Chakra)',
        description:
            '6 Mukhi Rudraksha, traditionally associated with Lord Kartikeya, symbolizes courage, confidence, and determination. Ideal for spiritual practices, it represents willpower, focus, and inner strength.',
        benefits: [
            'Encourages confidence and courage.',
            'Symbolizes willpower and self-discipline.',
            'Supports focus and personal growth.'
        ]
    },
    {
        id: 23126,
        mukhiNumber: 7,
        slug: '7-mukhi-rudraksha',
        displayMukhi: '7 Mukhi',
        title: '7 Mukhi Rudraksha',
        apiNameMatch: ['7 mukhi rudraksha', '7 mukhi'],
        deity: 'Mahalakshmi',
        mantra: 'Om Hoom Namah',
        planet: 'Saturn (Shani)',
        chakra: 'Anahata (Heart Chakra)',
        description:
            '7 Mukhi Rudraksha, traditionally associated with Mahalakshmi, symbolizes wealth, abundance, and prosperity. Ideal for spiritual practices, it represents stability, confidence, and positive growth.',
        benefits: [
            'Symbolizes prosperity and abundance.',
            'Encourages confidence and stability.',
            'Represents positive energy and growth.'
        ]
    },
    {
        id: 23128,
        mukhiNumber: 8,
        slug: '8-mukhi-rudraksha',
        displayMukhi: '8 Mukhi',
        title: '8 Mukhi Rudraksha',
        apiNameMatch: ['8 mukhi rudraksha', '8 mukhi'],
        deity: 'Lord Ganesha',
        mantra: 'Om Hoom Namah',
        planet: 'Rahu',
        chakra: 'Muladhara (Root Chakra)',
        description:
            '8 Mukhi Rudraksha, traditionally associated with Lord Ganesha, symbolizes success, wisdom, and removal of obstacles. Ideal for spiritual practices, it represents grounding energy and inner strength.',
        benefits: [
            'Symbolizes removal of obstacles and smooth progress.',
            'Encourages wisdom and grounded thinking.',
            'Supports confidence and positive momentum.'
        ]
    },
    {
        id: 23129,
        mukhiNumber: 9,
        slug: '9-mukhi-rudraksha',
        displayMukhi: '9 Mukhi',
        title: '9 Mukhi Rudraksha',
        apiNameMatch: ['9 mukhi rudraksha', '9 mukhi'],
        deity: 'Maa Durga (Navadurga)',
        mantra: 'Om Hreem Hoom Namah',
        planet: 'Ketu',
        chakra: 'Ajna (Third Eye Chakra)',
        description:
            '9 Mukhi Rudraksha, traditionally associated with Maa Durga (Navadurga), symbolizes power, protection, and courage. Ideal for spiritual practices, it represents inner strength and fearless confidence.',
        benefits: [
            'Symbolizes divine protection and courage.',
            'Encourages inner strength and fearlessness.',
            'Supports vitality and active determination.'
        ]
    },
    {
        id: 23130,
        mukhiNumber: 10,
        slug: '10-mukhi-rudraksha',
        displayMukhi: '10 Mukhi',
        title: '10 Mukhi Rudraksha',
        apiNameMatch: ['10 mukhi rudraksha', '10 mukhi'],
        deity: 'Lord Vishnu',
        mantra: 'Om Hreem Namah',
        planet: 'Navagraha (All 9 Planets)',
        chakra: 'Anahata (Heart Chakra)',
        description:
            '10 Mukhi Rudraksha, traditionally associated with Lord Vishnu, symbolizes peace, protection, and universal harmony. Ideal for spiritual practices, it represents balance and divine blessings.',
        benefits: [
            'Symbolizes universal protection and peace.',
            'Encourages emotional stability and harmony.',
            'Represents spiritual balance and well-being.'
        ]
    },
    {
        id: 23131,
        mukhiNumber: 11,
        slug: '11-mukhi-rudraksha',
        displayMukhi: '11 Mukhi',
        title: '11 Mukhi Rudraksha',
        apiNameMatch: ['11 mukhi rudraksha', '11 mukhi'],
        deity: '11 Rudras / Lord Hanuman',
        mantra: 'Om Hreem Hoom Namah',
        planet: 'Mars (Mangal)',
        chakra: 'Vishuddha (Throat Chakra)',
        description:
            '11 Mukhi Rudraksha, traditionally associated with the 11 Rudras (Lord Hanuman), symbolizes courage, protection, and vitality. Ideal for spiritual practices, it represents discipline, focus, and inner strength.',
        benefits: [
            'Encourages courage, stamina, and willpower.',
            'Symbolizes divine protection and spiritual energy.',
            'Supports focus, meditation, and healthy lifestyle habits.'
        ]
    },
    {
        id: 23132,
        mukhiNumber: 12,
        slug: '12-mukhi-rudraksha',
        displayMukhi: '12 Mukhi',
        title: '12 Mukhi Rudraksha',
        apiNameMatch: ['12 mukhi rudraksha', '12 mukhi'],
        deity: 'Surya Dev (Sun God)',
        mantra: 'Om Kraum Ksaum Raum Namah',
        planet: 'Sun (Surya)',
        chakra: 'Manipura (Solar Plexus Chakra)',
        description:
            '12 Mukhi Rudraksha, traditionally associated with Surya Dev (Sun God), symbolizes radiance, vitality, and leadership. Ideal for spiritual practices, it represents self-confidence, clarity, and positive energy.',
        benefits: [
            'Symbolizes self-confidence and radiant presence.',
            'Encourages motivation, clarity, and leadership qualities.',
            'Represents vitality and positive energy.'
        ]
    },
    {
        id: 23133,
        mukhiNumber: 13,
        slug: '13-mukhi-rudraksha',
        displayMukhi: '13 Mukhi',
        title: '13 Mukhi Rudraksha',
        apiNameMatch: ['13 mukhi rudraksha', '13 mukhi'],
        deity: 'Lord Kamadeva',
        mantra: 'Om Hreem Namah',
        planet: 'Venus (Shukra)',
        chakra: 'Svadhisthana (Sacral Chakra)',
        description:
            '13 Mukhi Rudraksha, traditionally associated with Lord Kamadeva, symbolizes attraction, charm, and fulfilment. Ideal for spiritual practices, it represents confidence, creativity, and positive energy.',
        benefits: [
            'Symbolizes charm and attraction.',
            'Encourages confidence and self-expression.',
            'Represents fulfilment and emotional positivity.'
        ]
    },
    {
        id: 23134,
        mukhiNumber: 14,
        slug: '14-mukhi-rudraksha',
        displayMukhi: '14 Mukhi',
        title: '14 Mukhi Rudraksha',
        apiNameMatch: ['14 mukhi rudraksha', '14 mukhi'],
        deity: 'Lord Shiva, Hanuman & Shani Dev',
        mantra: 'Om Namah Shivaya',
        planet: 'Saturn (Shani)',
        chakra: 'Ajna (Third Eye Chakra)',
        description:
            '14 Mukhi Rudraksha, traditionally associated with Lord Shiva, Hanuman, and Shani Dev, symbolizes protection, courage, and discipline. Ideal for spiritual practices, it represents focus and inner strength.',
        benefits: [
            'Symbolizes courage and divine protection.',
            'Encourages discipline and determination.',
            'Represents spiritual awareness and personal growth.'
        ]
    }
];

interface RudrakshaCardImageSliderProps {
    images: string[];
    alt: string;
    displayMukhi: string;
    deity: string;
    onQuickView?: (index: number) => void;
}

function RudrakshaCardImageSlider({
    images,
    alt,
    displayMukhi,
    deity,
    onQuickView
}: RudrakshaCardImageSliderProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    const currentImages = Array.isArray(images) && images.length > 0 ? images : ['/rudraksha-hero.jpg'];

    // ⚡ Automatic sliding every 3 seconds (smooth continuous carousel)
    useEffect(() => {
        if (!currentImages || currentImages.length <= 1 || isHovered) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % currentImages.length);
        }, 3000);
        return () => clearInterval(timer);
    }, [currentImages, isHovered]);

    const handlePrev = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev === 0 ? currentImages.length - 1 : prev - 1));
    };

    const handleNext = (e: React.MouseEvent) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % currentImages.length);
    };

    return (
        <div
            className="relative aspect-[4/3] sm:aspect-square w-[calc(100%-1.25rem)] m-2.5 rounded-2xl bg-gradient-to-b from-stone-950 via-stone-900 to-black overflow-hidden shadow-inner border border-amber-900/30 group/slider select-none cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => onQuickView?.(currentIndex)}
        >
            {/* Smooth Sliding Image Track */}
            <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {currentImages.map((imgUrl, i) => (
                    <div key={i} className="relative min-w-full h-full flex-shrink-0">
                        <Image
                            src={imgUrl}
                            alt={`${alt} view ${i + 1}`}
                            fill
                            className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={i === 0}
                        />
                    </div>
                ))}
            </div>

            {/* Top-Left Royal Medallion Badge */}
            <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-black/90 via-[#3a0808]/90 to-black/90 border border-amber-400/80 text-amber-300 text-xs font-bold tracking-wide shadow-lg backdrop-blur-md">
                    <Sparkles size={13} className="text-amber-300 animate-pulse" />
                    <span>{displayMukhi}</span>
                </div>
            </div>

            {/* Top-Right Deity Pill */}
            <div className="absolute top-2.5 right-2.5 z-10 pointer-events-none">
                <div className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#6d1313]/90 border border-amber-400/60 text-amber-100 text-[11px] font-bold shadow-md backdrop-blur-md">
                    <span>{deity}</span>
                </div>
            </div>

            {/* Hover Next / Prev Arrow Navigation Buttons */}
            {currentImages.length > 1 && (
                <>
                    <button
                        type="button"
                        onClick={handlePrev}
                        className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-all duration-200 z-10 shadow-md hover:scale-110 active:scale-95"
                        title="Previous Angle"
                    >
                        <ChevronLeft size={16} />
                    </button>
                    <button
                        type="button"
                        onClick={handleNext}
                        className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 hover:bg-black/90 text-white/80 hover:text-white backdrop-blur-md opacity-0 group-hover/slider:opacity-100 transition-all duration-200 z-10 shadow-md hover:scale-110 active:scale-95"
                        title="Next Angle"
                    >
                        <ChevronRight size={16} />
                    </button>
                </>
            )}

            {/* Bottom-Center Interactive Auto-sliding Progress Indicator Dots */}
            {currentImages.length > 1 && (
                <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/20 z-10 shadow-md">
                    {currentImages.map((_, i) => (
                        <button
                            key={i}
                            type="button"
                            onClick={(e) => {
                                e.stopPropagation();
                                setCurrentIndex(i);
                            }}
                            className={`h-2 rounded-full transition-all duration-300 ${currentIndex === i
                                ? 'w-6 bg-gradient-to-r from-amber-300 to-amber-500 shadow-[0_0_8px_#f59e0b]'
                                : 'w-2 bg-white/50 hover:bg-white/80'
                                }`}
                            title={`Angle ${i + 1}`}
                        />
                    ))}
                </div>
            )}

        </div>
    );
}

// 🧹 Helper to thoroughly clean HTML tags and decode HTML entities from API descriptions
function cleanHtmlDescription(raw: string = ''): string {
    if (!raw) return '';
    return raw
        .replace(/<style[^>]*>[\s\S]*?<\/style>/gi, '')
        .replace(/<script[^>]*>[\s\S]*?<\/script>/gi, '')
        .replace(/<[^>]+>/g, ' ')
        .replace(/&amp;/g, '&')
        .replace(/&lt;/g, '<')
        .replace(/&gt;/g, '>')
        .replace(/&quot;/g, '"')
        .replace(/&#39;/g, "'")
        .replace(/&apos;/g, "'")
        .replace(/&nbsp;/g, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

// 📿 Dynamic Spiritual Attribute Extractors for API Products
function getDeityForProduct(name: string, mukhi: number): string {
    const n = (name || '').toLowerCase();
    if (mukhi === 1) return 'Lord Shiva';
    if (mukhi === 2) return 'Ardhanarishvara';
    if (mukhi === 3) return 'Agni Dev';
    if (mukhi === 4) return 'Lord Brahma';
    if (mukhi === 5) return 'Lord Shiva';
    if (mukhi === 6) return 'Lord Kartikeya';
    if (mukhi === 7) return 'Mahalakshmi';
    if (mukhi === 8) return 'Lord Ganesha';
    if (mukhi === 9) return 'Maa Durga (Navadurga)';
    if (mukhi === 10) return 'Lord Vishnu';
    if (mukhi === 11) return '11 Rudras / Hanuman';
    if (mukhi === 12) return 'Surya Dev (Sun God)';
    if (mukhi === 13) return 'Lord Kamadeva';
    if (mukhi === 14) return 'Lord Shiva & Hanuman';
    if (n.includes('gowri') || n.includes('gauri')) return 'Shiva & Parvati';
    if (n.includes('lakshmi')) return 'Maa Mahalakshmi';
    if (n.includes('saraswathi')) return 'Maa Saraswati';
    if (n.includes('health') || n.includes('dhanvantari')) return 'Lord Dhanvantari';
    if (n.includes('navagraha')) return 'Navagraha Devatas';
    if (n.includes('sid')) return 'Sarva Devata (All Deities)';
    if (n.includes('spadigam') || n.includes('sphatik')) return 'Lord Shiva';
    return 'Lord Shiva';
}

function getMantraForProduct(name: string, mukhi: number): string {
    const n = (name || '').toLowerCase();
    if (mukhi === 1) return 'Om Hreem Namah';
    if (mukhi === 2) return 'Om Namah';
    if (mukhi === 3) return 'Om Kleem Namah';
    if (mukhi === 4) return 'Om Hreem Namah';
    if (mukhi === 5) return 'Om Hreem Namah';
    if (mukhi === 6) return 'Om Hreem Hoom Namah';
    if (mukhi === 7) return 'Om Hoom Namah';
    if (mukhi === 8) return 'Om Hoom Namah';
    if (mukhi === 9) return 'Om Hreem Hoom Namah';
    if (mukhi === 10) return 'Om Hreem Namah';
    if (mukhi === 11) return 'Om Hreem Hoom Namah';
    if (mukhi === 12) return 'Om Kraum Ksaum Raum Namah';
    if (mukhi === 13) return 'Om Hreem Namah';
    if (mukhi === 14) return 'Om Namah Shivaya';
    if (n.includes('gowri') || n.includes('gauri')) return 'Om Gauri Shankaraya Namah';
    if (n.includes('lakshmi')) return 'Om Shreem Maha Lakshmiyei Namah';
    if (n.includes('saraswathi')) return 'Om Aim Saraswatyai Namah';
    if (n.includes('navagraha')) return 'Om Navagraha Devatabhyo Namah';
    return 'Om Namah Shivaya';
}

function getPlanetForProduct(name: string, mukhi: number): string {
    const n = (name || '').toLowerCase();
    if (mukhi === 1) return 'Sun (Surya)';
    if (mukhi === 2) return 'Moon (Chandra)';
    if (mukhi === 3) return 'Mars (Mangal)';
    if (mukhi === 4) return 'Mercury (Budha)';
    if (mukhi === 5) return 'Jupiter (Brihaspati)';
    if (mukhi === 6) return 'Venus (Shukra)';
    if (mukhi === 7) return 'Saturn (Shani)';
    if (mukhi === 8) return 'Rahu';
    if (mukhi === 9) return 'Ketu';
    if (mukhi === 10) return 'Navagraha (9 Planets)';
    if (mukhi === 11) return 'Mars (Mangal)';
    if (mukhi === 12) return 'Sun (Surya)';
    if (mukhi === 13) return 'Venus (Shukra)';
    if (mukhi === 14) return 'Saturn (Shani)';
    if (n.includes('gowri') || n.includes('gauri')) return 'Moon & Sun';
    if (n.includes('lakshmi')) return 'Venus (Shukra)';
    if (n.includes('saraswathi')) return 'Mercury (Budha)';
    if (n.includes('navagraha')) return 'All 9 Planets';
    if (n.includes('spadigam') || n.includes('sphatik')) return 'Venus (Shukra)';
    return 'Cosmic Alignment';
}

function getChakraForProduct(name: string, mukhi: number): string {
    const n = (name || '').toLowerCase();
    if (mukhi === 1) return 'Sahasrara (Crown)';
    if (mukhi === 2) return 'Svadhisthana (Sacral)';
    if (mukhi === 3) return 'Manipura (Solar Plexus)';
    if (mukhi === 4) return 'Anahata (Heart)';
    if (mukhi === 5) return 'Vishuddha (Throat)';
    if (mukhi === 6) return 'Muladhara (Root)';
    if (mukhi === 7) return 'Anahata (Heart)';
    if (mukhi === 8) return 'Muladhara (Root)';
    if (mukhi === 9) return 'Ajna (Third Eye)';
    if (mukhi === 10) return 'Anahata (Heart)';
    if (mukhi === 11) return 'Vishuddha (Throat)';
    if (mukhi === 12) return 'Manipura (Solar Plexus)';
    if (mukhi === 13) return 'Svadhisthana (Sacral)';
    if (mukhi === 14) return 'Ajna (Third Eye)';
    if (n.includes('gowri') || n.includes('gauri') || n.includes('lakshmi')) return 'Anahata (Heart)';
    if (n.includes('saraswathi')) return 'Vishuddha (Throat)';
    if (n.includes('spadigam') || n.includes('sphatik')) return 'Sahasrara (Crown)';
    if (n.includes('navagraha') || n.includes('sid')) return 'All 7 Chakras';
    return 'Muladhara (Root)';
}

function getBenefitsForProduct(name: string, desc: string): string[] {
    const n = (name || '').toLowerCase();
    if (n.includes('gowri')) {
        return [
            'Blesses marital harmony and divine unity.',
            'Brings peace and relationship balance.',
            'Symbolizes universal cosmic union of Shiva & Parvati.'
        ];
    }
    if (n.includes('mala')) {
        return [
            'Ideal for continuous daily Japa and meditation.',
            'Calms mind, dispels anxiety, and brings serenity.',
            'Creates a sacred protective spiritual energy field.'
        ];
    }
    if (n.includes('bracelet')) {
        return [
            'Everyday wearable protection and grounding vitality.',
            'Promotes mindfulness and emotional stability.',
            'Balances everyday aura against negative vibrations.'
        ];
    }
    if (n.includes('kavatch')) {
        return [
            'Acts as a sacred spiritual shield of divine protection.',
            'Dispels negative energies, evil eye, and obstacles.',
            'Infuses confidence, health, and abundant blessings.'
        ];
    }
    return [
        'Energized with authentic Prana Pratishtha rituals.',
        'Encourages inner peace, focus, and spiritual strength.',
        'Symbolizes divine grace, protection, and auspiciousness.'
    ];
}

function getDisplayBadge(name: string): string {
    const n = (name || '').toLowerCase();
    if (n.includes('mala')) return 'Sacred Mala';
    if (n.includes('bracelet')) return 'Sacred Bracelet';
    if (n.includes('kavatch')) return 'Divine Kavatch';
    if (n.includes('gowri')) return 'Gowri Shankar';
    if (n.includes('spadigam')) return 'Sphatik Mala';
    return 'Authentic Rudraksha';
}

// 📜 Structured Data (Schema.org) for Rudraksha Collection
const rudrakshaItemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.omsritara.in/rudraksha#product-list",
    "name": "OMSRITARA Rudraksha Collection",
    "url": "https://www.omsritara.in/rudraksha",
    "numberOfItems": 14,
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "item": {
                "@type": "Product",
                "name": "1 Mukhi Rudraksha with Silver Cap",
                "description": "Sacred Rudraksha with a silver cap, traditionally associated with Lord Shiva and spiritual practices such as meditation and self-awareness."
            }
        },
        {
            "@type": "ListItem",
            "position": 2,
            "item": {
                "@type": "Product",
                "name": "2 Mukhi Rudraksha",
                "description": "Traditionally associated with Ardhanarishvara and symbolic of unity, harmony and emotional balance."
            }
        },
        {
            "@type": "ListItem",
            "position": 3,
            "item": {
                "@type": "Product",
                "name": "3 Mukhi Rudraksha",
                "description": "Traditionally associated with Agni Dev and symbolic of courage, renewal and inner transformation."
            }
        },
        {
            "@type": "ListItem",
            "position": 4,
            "item": {
                "@type": "Product",
                "name": "4 Mukhi Rudraksha",
                "description": "Traditionally associated with Lord Brahma and symbolic of wisdom, knowledge, creativity and intellectual growth."
            }
        },
        {
            "@type": "ListItem",
            "position": 5,
            "item": {
                "@type": "Product",
                "name": "5 Mukhi Rudraksha",
                "description": "Traditionally associated with Lord Shiva and symbolic of peace, protection and spiritual balance."
            }
        },
        {
            "@type": "ListItem",
            "position": 6,
            "item": {
                "@type": "Product",
                "name": "6 Mukhi Rudraksha",
                "description": "Traditionally associated with Lord Kartikeya and symbolic of courage, confidence and determination."
            }
        },
        {
            "@type": "ListItem",
            "position": 7,
            "item": {
                "@type": "Product",
                "name": "7 Mukhi Rudraksha",
                "description": "Traditionally associated with Mahalakshmi and symbolic of wealth, abundance and prosperity."
            }
        },
        {
            "@type": "ListItem",
            "position": 8,
            "item": {
                "@type": "Product",
                "name": "8 Mukhi Rudraksha",
                "description": "Traditionally associated with Lord Ganesha and symbolic of wisdom, success and overcoming obstacles."
            }
        },
        {
            "@type": "ListItem",
            "position": 9,
            "item": {
                "@type": "Product",
                "name": "9 Mukhi Rudraksha",
                "description": "Traditionally associated with Maa Durga and symbolic of power, protection and courage."
            }
        },
        {
            "@type": "ListItem",
            "position": 10,
            "item": {
                "@type": "Product",
                "name": "10 Mukhi Rudraksha",
                "description": "Traditionally associated with Lord Vishnu and symbolic of peace, protection and universal harmony."
            }
        },
        {
            "@type": "ListItem",
            "position": 11,
            "item": {
                "@type": "Product",
                "name": "11 Mukhi Rudraksha",
                "description": "Traditionally associated with the 11 Rudras and Lord Hanuman, symbolizing courage, protection and vitality."
            }
        },
        {
            "@type": "ListItem",
            "position": 12,
            "item": {
                "@type": "Product",
                "name": "12 Mukhi Rudraksha",
                "description": "Traditionally associated with Surya Dev and symbolic of radiance, vitality, confidence and leadership."
            }
        },
        {
            "@type": "ListItem",
            "position": 13,
            "item": {
                "@type": "Product",
                "name": "13 Mukhi Rudraksha",
                "description": "Traditionally associated with Lord Kamadeva and symbolic of attraction, charm, fulfilment and confidence."
            }
        },
        {
            "@type": "ListItem",
            "position": 14,
            "item": {
                "@type": "Product",
                "name": "14 Mukhi Rudraksha",
                "description": "Traditionally associated with Lord Shiva, Hanuman and Shani Dev, symbolizing protection, courage and discipline."
            }
        }
    ]
};

const rudrakshaOfferSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "@id": "https://www.omsritara.in/rudraksha#offer",
    "url": "https://www.omsritara.in/rudraksha",
    "priceCurrency": "INR",
    "seller": {
        "@type": "Organization",
        "@id": "https://www.omsritara.in/#organization",
        "name": "OMSRITARA",
        "url": "https://www.omsritara.in/",
        "email": "info@omsritara.com",
        "telephone": "+91-7092973555",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, 46 Giri Road, Satyamurthy Nagar, T. Nagar",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600017",
            "addressCountry": "IN"
        }
    }
};

const rudrakshaWebPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.omsritara.in/rudraksha#webpage",
    "url": "https://www.omsritara.in/rudraksha",
    "name": "Buy Rudraksha Online India | Sacred Beads & Malas",
    "headline": "Explore Sacred Rudraksha Beads and Traditional Malas",
    "description": "Explore Rudraksha beads and malas at OMSRITARA for meditation, prayer and spiritual practices.",
    "inLanguage": "en-IN",
    "isPartOf": {
        "@type": "WebSite",
        "@id": "https://www.omsritara.in/#website",
        "url": "https://www.omsritara.in/",
        "name": "OMSRITARA"
    },
    "breadcrumb": {
        "@id": "https://www.omsritara.in/rudraksha#breadcrumb"
    }
};

export default function RudrakshaUtsavPage() {
    const router = useRouter();
    const { products, isLoading: isProductsLoading }: any = useProducts();
    const { categories, isLoading: isCategoriesLoading }: any = useCategories();
    const { convertPrice } = useCurrency();
    const { vendorId } = useVendor();
    const queryClient = useQueryClient();

    // ⚡ Direct query to guarantee live API data from category even if context takes time
    const activeVendorId = vendorId || 63;
    const { data: directProductsData, isLoading: isDirectLoading } = useQuery({
        queryKey: ['rudrakshaCategoryProductsDirect', activeVendorId],
        queryFn: () => getProductApi(`?vendor_id=${activeVendorId}`),
        staleTime: 1000 * 60 * 5
    });

    const [userId, setUserId] = useState<string | null>(null);
    const [cartId, setCartId] = useState<string | null>(null);
    const [userName, setUserName] = useState<string | null>(null);
    const [signInModal, setSignInModal] = useState<boolean>(false);

    // Quantity state per product
    const [quantities, setQuantities] = useState<Record<number, number>>({});
    // Active image index per card
    const [activeImageIndexes, setActiveImageIndexes] = useState<Record<number, number>>({});
    // Filter and search
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedGroup, setSelectedGroup] = useState<string>('all');
    // Quick View modal state
    const [modalProduct, setModalProduct] = useState<any | null>(null);
    const [modalActiveImg, setModalActiveImg] = useState<number>(0);
    const [isSubmitting, setIsSubmitting] = useState<Record<number, boolean>>({});
    // Read more / full description toggle per card
    const [expandedDescriptions, setExpandedDescriptions] = useState<Record<number, boolean>>({});

    const toggleDescription = (id: number) => {
        setExpandedDescriptions((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setUserId(localStorage.getItem('userId'));
            setCartId(localStorage.getItem('cartId'));
            setUserName(localStorage.getItem('userName'));
        }
    }, []);

    // 1. Locate Rudraksha category dynamically from Categories API
    const rudrakshaCategory = useMemo(() => {
        const catList = Array.isArray(categories?.data) ? categories.data : [];
        return catList.find(
            (cat: any) =>
                slugConvert(cat?.name) === 'rudraksha' ||
                cat?.id === 920 ||
                (cat?.name && cat.name.toLowerCase().includes('rudraksha'))
        );
    }, [categories]);

    const rudrakshaCatId = rudrakshaCategory?.id || 920;

    // 2. Aggregate raw products from context or direct query
    const allProducts = useMemo(() => {
        const prodList = Array.isArray(products?.data)
            ? products.data
            : Array.isArray(products)
                ? products
                : Array.isArray(directProductsData?.data)
                    ? directProductsData.data
                    : Array.isArray(directProductsData)
                        ? directProductsData
                        : [];
        return prodList;
    }, [products, directProductsData]);

    // 3. Filter products matching Rudraksha Category & active status (same logic as CategoriesBasedProduct)
    const apiCategoryProducts = useMemo(() => {
        if (!allProducts || allProducts.length === 0) return [];

        return allProducts.filter((product: any) => {
            const matchesCategory =
                product?.category === rudrakshaCatId ||
                product?.category_id === rudrakshaCatId ||
                slugConvert(product?.category_name) === 'rudraksha' ||
                (product?.category_name && product?.category_name.toLowerCase().includes('rudraksha'));

            const s = product?.status;
            const isActive =
                s === true ||
                s === 1 ||
                s === '1' ||
                s === 'true' ||
                s === 'TRUE' ||
                s === 'active' ||
                s === 'ACTIVE';

            return matchesCategory && isActive;
        });
    }, [allProducts, rudrakshaCatId]);

    // 3. Filter and map ONLY the requested 14 Mukhi products from the API using both Name and ID
    const mergedRudrakshaList = useMemo(() => {
        return RUDRAKSHA_CONFIGS.map((config) => {
            // Find live product from API matching BOTH ID and Name match
            const foundInApi =
                allProducts.find((p: any) => {
                    const matchesId = p.id === config.id;
                    const pName = (p.name || '').toLowerCase();
                    const matchesName = config.apiNameMatch.some((kw) => pName.includes(kw));
                    return matchesId && matchesName;
                }) ||
                allProducts.find((p: any) => p.id === config.id) ||
                allProducts.find((p: any) => {
                    const pName = (p.name || '').toLowerCase();
                    return config.apiNameMatch.some((kw) => pName.includes(kw));
                });

            const realApiId = foundInApi?.id || config.id;
            const priceNum = foundInApi?.price ? Number(foundInApi.price) : 0;
            const discountNum = foundInApi?.discount ? Number(foundInApi.discount) : priceNum;

            const apiImages =
                Array.isArray(foundInApi?.image_urls) && foundInApi.image_urls.length > 0
                    ? foundInApi.image_urls
                    : ['https://www.omsritara.in/banner2.jpg'];

            // 🎯 API Description Priority:
            // 1. Live `description` from API (entered via admin dashboard)
            // 2. Live `description_2` from API (fallback summary)
            // 3. Static fallback config description
            const apiDesc = foundInApi?.description ? cleanHtmlDescription(foundInApi.description) : '';
            const apiDesc2 = foundInApi?.description_2 ? cleanHtmlDescription(foundInApi.description_2) : '';
            const cleanDesc = apiDesc || apiDesc2 || config.description;

            return {
                ...config,
                id: realApiId,
                actualApiId: realApiId,
                title: foundInApi?.name || config.title,
                price: priceNum,
                discountPrice: discountNum,
                imageUrls: apiImages,
                description: cleanDesc,
                rawDescription: foundInApi?.description || foundInApi?.description_2 || config.description,
                productSlug: foundInApi?.slug || config.slug,
                inStock: foundInApi?.in_stock !== false
            };
        });
    }, [allProducts]);

    // Filter items based on active group tab and search query
    const filteredItems = useMemo(() => {
        return mergedRudrakshaList.filter((item) => {
            // Group Filter
            if (selectedGroup === 'shiva' && ![1, 5, 11, 14].includes(item.mukhiNumber)) {
                return false;
            }
            if (selectedGroup === 'wealth' && ![7, 8, 12, 13].includes(item.mukhiNumber)) {
                return false;
            }
            if (selectedGroup === 'peace' && ![1, 2, 3, 4, 10].includes(item.mukhiNumber)) {
                return false;
            }

            // Search Query Filter
            if (searchQuery.trim() !== '') {
                const query = searchQuery.toLowerCase().trim();
                const matchTitle = item.title.toLowerCase().includes(query);
                const matchDisplay = item.displayMukhi.toLowerCase().includes(query);
                const matchDeity = item.deity.toLowerCase().includes(query);
                const matchDesc = item.description.toLowerCase().includes(query);
                const matchBenefits = item.benefits.some((b: string) => b.toLowerCase().includes(query));
                const matchMantra = item.mantra.toLowerCase().includes(query);
                const matchMukhiNum = item.mukhiNumber > 0 && query.includes(item.mukhiNumber.toString());
                return matchTitle || matchDisplay || matchDeity || matchDesc || matchBenefits || matchMantra || matchMukhiNum;
            }

            return true;
        });
    }, [mergedRudrakshaList, selectedGroup, searchQuery]);

    // Quantity modifiers
    const increaseQty = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: (prev[id] || 1) + 1
        }));
    };

    const decreaseQty = (id: number) => {
        setQuantities((prev) => ({
            ...prev,
            [id]: Math.max(1, (prev[id] || 1) - 1)
        }));
    };

    // Add to cart handler
    const handleAddToCart = async (item: any, redirectNow = false) => {
        const storedCartId = typeof window !== 'undefined' ? localStorage.getItem('cartId') : cartId;
        const storedUserId = typeof window !== 'undefined' ? localStorage.getItem('userId') : userId;
        const qty = quantities[item.actualApiId] || 1;

        if (!storedCartId && !storedUserId) {
            addToGuestCart({
                id: item.actualApiId,
                name: item.displayMukhi || item.name,
                price: item.price,
                image_urls: item.image ? [item.image] : [],
                ...item
            }, qty);
            toast.success(`${item.displayMukhi || 'Item'} added to your sacred cart!`, {
                icon: '🔱',
                style: {
                    borderRadius: '10px',
                    background: '#333',
                    color: '#fff'
                }
            });
            if (redirectNow) {
                router.push('/cart');
            }
            return;
        }
        setIsSubmitting((prev) => ({ ...prev, [item.actualApiId]: true }));

        const payload = {
            cart: storedCartId,
            product: item.actualApiId,
            user: storedUserId,
            vendor: vendorId || 63,
            quantity: qty,
            created_by: userName || 'Devotee'
        };

        try {
            const res = await postNewCartitemWithQtyApi('', payload);
            if (res) {
                toast.success(`${item.displayMukhi} added to your sacred cart!`, {
                    icon: '🔱',
                    style: {
                        borderRadius: '10px',
                        background: '#333',
                        color: '#fff'
                    }
                });
                queryClient.invalidateQueries(['getProductData'] as InvalidateQueryFilters);
                queryClient.invalidateQueries(['getCartData'] as InvalidateQueryFilters);

                if (redirectNow) {
                    router.push('/cart');
                }
            }
        } catch (err) {
            console.error('Cart error:', err);
            toast.error('Unable to add item to cart. Please try again.');
        } finally {
            setIsSubmitting((prev) => ({ ...prev, [item.actualApiId]: false }));
        }
    };

    return (
        <>
            <Head>
                {/* Primary Meta Tags */}
                <title>Buy Rudraksha Online India | Sacred Beads & Malas</title>
                <meta
                    name="description"
                    content="Explore Rudraksha beads and malas at OMSRITARA. Discover sacred spiritual accessories for meditation, prayer and personal spiritual practices."
                />
                <meta name="keywords" content="" />
                <link rel="canonical" href="https://www.omsritara.in/rudraksha" />
                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Buy Rudraksha Online India | Sacred Beads & Malas" />
                <meta
                    property="og:description"
                    content="Explore Rudraksha beads and malas at OMSRITARA for meditation, prayer and spiritual practices."
                />
                <meta property="og:url" content="https://www.omsritara.in/rudraksha" />
                <meta property="og:site_name" content="OMSRITARA" />
                <meta property="og:locale" content="en_IN" />
                <meta property="og:image" content="https://www.omsritara.in/rudraksha-hero.jpg" />
                <meta property="og:image:alt" content="Rudraksha beads and sacred prayer malas from OMSRITARA" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Buy Rudraksha Online India | Sacred Beads & Malas" />
                <meta
                    name="twitter:description"
                    content="Discover Rudraksha beads and prayer malas at OMSRITARA for meditation and spiritual practices."
                />
                <meta name="twitter:image" content="https://www.omsritara.in/rudraksha-hero.jpg" />
                <meta name="twitter:image:alt" content="Rudraksha beads and sacred prayer malas from OMSRITARA" />

                {/* Image_Src Tag */}
                <link rel="image_src" href="https://www.omsritara.in/rudraksha-hero.jpg" />

                {/* Structured Data (Schema.org) */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(rudrakshaItemListSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(rudrakshaOfferSchema) }}
                />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(rudrakshaWebPageSchema) }}
                />

                {/* Facebook Meta Pixel */}
                <script
                    id="rudraksha-meta-pixel"
                    dangerouslySetInnerHTML={{
                        __html: `
                            !function(f,b,e,v,n,t,s)
                            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                            n.queue=[];t=b.createElement(e);t.async=!0;
                            t.src=v;s=b.getElementsByTagName(e)[0];
                            s.parentNode.insertBefore(t,s)}(window, document,'script',
                            'https://connect.facebook.net/en_US/fbevents.js');
                            fbq('init', '1240531971583656');
                            fbq('track', 'PageView');
                        `
                    }}
                />
            </Head>

            <div className="min-h-screen bg-stone-50 text-stone-800">
                {/* 🔱 FLAGSHIP HERO SECTION */}
                <RudrakshaHero
                    onExploreClick={() => {
                        const el = document.getElementById('rudraksha-collection');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                    onSelectMukhi={(num) => {
                        setSelectedGroup('all');
                        const matched = mergedRudrakshaList.find((i) => i.mukhiNumber === num);
                        if (matched) {
                            setSearchQuery(matched.displayMukhi);
                        } else {
                            setSearchQuery(`${num} Mukhi`);
                        }
                        const el = document.getElementById('rudraksha-collection');
                        if (el) el.scrollIntoView({ behavior: 'smooth' });
                    }}
                />

                {/* 📿 SACRED COLLECTION & FILTER SECTION */}
                <main id="rudraksha-collection" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
                    {/* Collection Header & Controls */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8 pb-6 border-b border-stone-200">
                        <div>
                            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#8d1b1b] mb-1">
                                <Sparkles size={14} />
                                <span>Authentic Certified Nepal Collection</span>
                            </div>
                            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-stone-900">
                                Explore Sacred 1 to 14 Mukhi Rudrakshas
                            </h2>
                            <p className="text-xs sm:text-sm text-stone-500 mt-1">
                                Showing {filteredItems.length} sacred consecrated beads with detailed descriptions & benefits
                            </p>
                        </div>

                        {/* Search Input Bar */}
                        <div className="w-full md:w-80 relative">
                            <div className="relative">
                                <Search
                                    size={16}
                                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none"
                                />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search Mukhi, Deity, Benefit..."
                                    className="w-full pl-9 pr-8 py-2.5 bg-white border border-stone-300 rounded-xl text-xs sm:text-sm text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-amber-500/50 focus:border-amber-500 shadow-sm transition"
                                />
                                {searchQuery && (
                                    <button
                                        onClick={() => setSearchQuery('')}
                                        className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 p-1"
                                    >
                                        <X size={14} />
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>



                    {/* Products Grid */}
                    {filteredItems.length === 0 ? (
                        <div className="py-16 text-center bg-white rounded-2xl border border-stone-200 p-8">
                            <Sparkles size={36} className="mx-auto text-amber-500 mb-3" />
                            <h3 className="text-lg font-bold text-stone-800">No matching Rudraksha found</h3>
                            <p className="text-sm text-stone-500 mt-1 max-w-md mx-auto">
                                Try searching for another Mukhi number, ruling deity, or clear the search filters.
                            </p>
                            <button
                                onClick={() => {
                                    setSearchQuery('');
                                    setSelectedGroup('all');
                                }}
                                className="mt-4 px-4 py-2 bg-[#8d1b1b] text-white text-xs font-bold rounded-lg shadow hover:bg-[#721515] transition"
                            >
                                Reset Filters
                            </button>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
                            {filteredItems.map((item) => {
                                const activeImgIdx = activeImageIndexes[item.actualApiId] || 0;
                                const isAdding = !!isSubmitting[item.actualApiId];
                                const currentQty = quantities[item.actualApiId] || 1;
                                const isExpanded = !!expandedDescriptions[item.actualApiId];
                                const discountPercent =
                                    item.discountPrice > item.price
                                        ? Math.round(((item.discountPrice - item.price) / item.discountPrice) * 100)
                                        : 0;

                                return (
                                    <div
                                        key={item.id}
                                        className="group relative bg-gradient-to-b from-amber-50/50 via-white to-amber-50/30 rounded-3xl overflow-hidden border-2 border-amber-200/90 hover:border-amber-500 shadow-md hover:shadow-[0_22px_45px_rgba(180,83,9,0.22)] transition-all duration-500 flex flex-col hover:-translate-y-2"
                                    >
                                        {/* Golden Shimmer Accent Top Ribbon */}
                                        <div className="h-1.5 w-full bg-gradient-to-r from-amber-500 via-yellow-300 to-amber-600" />

                                        {/* Sacred Auto-Sliding Image Showcase Box */}
                                        <RudrakshaCardImageSlider
                                            images={item.imageUrls}
                                            alt={item.title}
                                            displayMukhi={item.displayMukhi}
                                            deity={item.deity}
                                            onQuickView={(imgIdx) => {
                                                setModalProduct(item);
                                                setModalActiveImg(imgIdx);
                                            }}
                                        />

                                        {/* Cosmic Alignment Strip (Planet & Chakra) */}
                                        <div className="grid grid-cols-2 gap-2 px-4 pt-1">
                                            <div className="flex items-center gap-1 text-[11px] text-stone-700 bg-amber-100/60 border border-amber-200/80 px-2.5 py-1 rounded-lg">
                                                <span className="text-[#8d1b1b] font-bold">Planet:</span>
                                                <span className="font-semibold truncate">{item.planet}</span>
                                            </div>
                                            <div className="flex items-center gap-1 text-[11px] text-stone-700 bg-amber-100/60 border border-amber-200/80 px-2.5 py-1 rounded-lg">
                                                <span className="text-[#8d1b1b] font-bold">Chakra:</span>
                                                <span className="font-semibold truncate">{item.chakra.split(' ')[0]}</span>
                                            </div>
                                        </div>

                                        {/* Card Content Body */}
                                        <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between space-y-4">
                                            <div className="space-y-3">
                                                {/* Product Title */}
                                                <div>
                                                    <h3 className="text-lg sm:text-xl font-serif font-black text-[#5c0d0d] group-hover:text-[#8d1b1b] transition-colors leading-tight">
                                                        {item.title}
                                                    </h3>
                                                    <p className={`text-xs text-stone-600 mt-1 leading-relaxed transition-all duration-300 ${isExpanded ? '' : 'line-clamp-2'}`}>
                                                        {item.description}
                                                    </p>
                                                    {item.description && item.description.length > 70 && (
                                                        <button
                                                            type="button"
                                                            onClick={(e) => {
                                                                e.stopPropagation();
                                                                toggleDescription(item.actualApiId);
                                                            }}
                                                            className="text-[11px] font-bold text-[#8d1b1b] hover:text-[#5c0d0d] hover:underline mt-1 inline-flex items-center gap-1 cursor-pointer transition-colors"
                                                        >
                                                            <span>{isExpanded ? 'Read Less' : 'Read More...'}</span>
                                                        </button>
                                                    )}
                                                </div>

                                                {/* 📜 Sacred Beej Mantra Chanting Scroll */}
                                                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-100/90 via-yellow-50 to-amber-100/90 border border-amber-300 shadow-sm">

                                                    <p className="text-xs sm:text-sm font-serif font-bold text-stone-900 italic text-center tracking-wide py-0.5">
                                                        &ldquo;{item.mantra}&rdquo;
                                                    </p>
                                                </div>

                                                {/* ✨ Divine Blessings Micro-Cards */}
                                                <div className="space-y-1.5 pt-1">
                                                    <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-wider">
                                                        <span className="flex items-center gap-1 text-[#7a1414]">
                                                            Divine Blessings:
                                                        </span>
                                                    </div>
                                                    <div className="space-y-1.5">
                                                        {item.benefits.map((b, bIdx) => (
                                                            <div
                                                                key={bIdx}
                                                                className="flex items-start gap-2 p-1.5 rounded-lg bg-white border border-stone-200/80 text-xs text-stone-700 leading-snug shadow-2xs"
                                                            >
                                                                <CheckCircle2
                                                                    size={13}
                                                                    className="text-emerald-600 mt-0.5 flex-shrink-0"
                                                                />
                                                                <span className="font-medium">{b}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Pricing & High-Conversion Action Box */}
                                            <div className="pt-2">
                                                <div className="p-3.5 rounded-2xl bg-gradient-to-br from-amber-50 via-white to-orange-50/60 border border-amber-300/80 shadow-sm space-y-3">
                                                    {/* Price & Discount Row */}
                                                    <div className="flex items-baseline justify-between">
                                                        <div>
                                                            <span className="text-[10px] uppercase font-bold text-stone-400 block -mb-0.5">
                                                                Price
                                                            </span>
                                                            <div className="flex items-baseline gap-2">
                                                                <span className="text-xl sm:text-2xl font-black text-stone-900 font-mono tracking-tight">
                                                                    {convertPrice(item.price)}
                                                                </span>
                                                                {item.discountPrice > item.price && (
                                                                    <span className="text-xs text-stone-400 line-through">
                                                                        {convertPrice(item.discountPrice)}
                                                                    </span>
                                                                )}
                                                            </div>
                                                        </div>

                                                        {discountPercent > 0 && (
                                                            <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-red-600 to-amber-600 text-white text-[11px] font-black shadow-sm">
                                                                {discountPercent}% OFF
                                                            </span>
                                                        )}
                                                    </div>

                                                    {/* Action Controls: Quantity + Add to Cart + Buy Now */}
                                                    <div className="flex items-center gap-2">
                                                        {/* Qty Pill */}
                                                        <div className="flex items-center border border-amber-300 rounded-xl bg-white h-10 shadow-xs">
                                                            <button
                                                                onClick={() => decreaseQty(item.actualApiId)}
                                                                className="w-8 h-full flex items-center justify-center text-stone-600 hover:text-black hover:bg-amber-100/70 rounded-l-xl transition active:scale-95"
                                                                title="Decrease"
                                                            >
                                                                <Minus size={13} />
                                                            </button>
                                                            <span className="w-7 text-center text-xs font-black text-stone-900">
                                                                {currentQty}
                                                            </span>
                                                            <button
                                                                onClick={() => increaseQty(item.actualApiId)}
                                                                className="w-8 h-full flex items-center justify-center text-stone-600 hover:text-black hover:bg-amber-100/70 rounded-r-xl transition active:scale-95"
                                                                title="Increase"
                                                            >
                                                                <Plus size={13} />
                                                            </button>
                                                        </div>

                                                        {/* Add to Cart Button */}
                                                        <button
                                                            onClick={() => handleAddToCart(item, false)}
                                                            disabled={isAdding}
                                                            className="flex-1 h-10 px-3 bg-[#7a1414] hover:bg-[#601010] text-white text-xs font-bold rounded-xl transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-1.5 active:scale-95 disabled:opacity-70 group/btn"
                                                        >
                                                            <ShoppingCart size={15} className="group-hover/btn:scale-110 transition-transform" />
                                                            <span>{isAdding ? 'Adding...' : 'Add to Cart'}</span>
                                                        </button>


                                                    </div>


                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                </main>

                {/* 🪷 SACRED ABOUT OM SRI TARA SECTION — ROYAL SANCTUARY EXPERIENCE */}
                <section className="relative overflow-hidden bg-gradient-to-b from-[#140202] via-[#240404] to-[#0d0101] text-stone-100 py-12 sm:py-20 lg:py-28 border-t-2 border-amber-500/50">
                    {/* Golden Temple Top Shimmer Line */}
                    <div className="absolute top-0 inset-x-0 h-1 sm:h-1.5 bg-gradient-to-r from-amber-600 via-yellow-300 via-amber-400 to-amber-700 shadow-[0_0_25px_rgba(245,158,11,0.6)]" />

                    {/* Cosmic Ambient Radial Glows */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[700px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.22),transparent_70%)] blur-2xl pointer-events-none" />
                    <div className="absolute bottom-10 left-10 w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle,rgba(180,83,9,0.15),transparent_70%)] blur-3xl pointer-events-none" />
                    <div className="absolute bottom-10 right-10 w-72 sm:w-96 h-72 sm:h-96 bg-[radial-gradient(circle,rgba(245,158,11,0.12),transparent_70%)] blur-3xl pointer-events-none" />

                    <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-16 lg:space-y-24">

                        {/* 🔱 PART 1: THE DIVINE INVOCATION (WELCOME TO OM SRI TARA) */}
                        <div className="text-center max-w-5xl mx-auto space-y-5 sm:space-y-6">
                            {/* Glowing Om Medallion */}
                            <div className="inline-flex flex-col items-center justify-center">
                                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-to-b from-amber-300 via-amber-500 to-amber-700 p-0.5 shadow-[0_0_40px_rgba(245,158,11,0.55)] animate-pulse">
                                    <div className="w-full h-full rounded-full bg-[#1e0303] flex items-center justify-center border border-amber-300/40">
                                        <span className="text-xl sm:text-3xl font-serif font-black text-amber-300 select-none">
                                            ॐ
                                        </span>
                                    </div>
                                </div>
                                <div className="inline-flex items-center gap-2 mt-3 sm:mt-4 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                                    <Sparkles size={12} className="text-amber-300 animate-spin flex-shrink-0" style={{ animationDuration: '6s' }} />
                                    <span>Sacred Energy & Spiritual Awakening</span>
                                </div>
                            </div>

                            {/* Main Welcome Headline */}
                            <div className="space-y-2 pt-1">
                                <h2 className="text-2xl sm:text-4xl lg:text-6xl font-serif font-black tracking-tight text-white drop-shadow-md break-words">
                                    <span className="bg-gradient-to-r from-amber-100 via-amber-200 via-yellow-100 to-amber-300 bg-clip-text text-transparent">
                                        Welcome to Om Sri Tara
                                    </span>
                                </h2>
                                <div className="flex items-center justify-center gap-2 sm:gap-3 pt-1">
                                    <div className="h-px w-8 sm:w-20 bg-gradient-to-r from-transparent to-amber-400/80" />
                                    <p className="text-sm sm:text-xl lg:text-2xl font-serif italic font-semibold text-amber-300/90 tracking-wide">
                                        Your Path to Divine Energy Begins Here
                                    </p>
                                    <div className="h-px w-8 sm:w-20 bg-gradient-to-l from-transparent to-amber-400/80" />
                                </div>
                            </div>

                            {/* Narrative Glowing Glass Tablet */}
                            <div className="relative p-4 sm:p-7 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent border border-amber-400/30 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                                <div className="absolute top-2 left-2.5 sm:left-3 text-amber-400/40 text-2xl sm:text-3xl font-serif leading-none select-none">&ldquo;</div>
                                <p className="text-xs sm:text-base lg:text-lg text-amber-100/95 font-serif leading-relaxed px-2 sm:px-6">
                                    Discover crystals, energy tools, and divine healing products to attract abundance, balance your aura, and align your energy with the cosmic power.
                                </p>
                                <div className="absolute bottom-1 right-2.5 sm:right-3 text-amber-400/40 text-2xl sm:text-3xl font-serif leading-none select-none">&rdquo;</div>
                            </div>

                            {/* 3 Interactive Sacred Energy Spheres */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-5 pt-2 sm:pt-4 text-left">
                                {/* Sphere 1: Attract Abundance */}
                                <div className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#340707]/80 to-[#1e0303]/90 border border-amber-400/30 hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_15px_35px_rgba(245,158,11,0.25)]">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-amber-500/30 transition-all">
                                        <Flame size={20} className="text-amber-400 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                                        Divine Abundance
                                    </span>
                                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                        Attract Abundance
                                    </h4>
                                    <p className="text-xs text-stone-300/85 mt-1.5 leading-relaxed">
                                        Channel auspicious cosmic wealth, prosperity, and positive vibrations through sacred energized sacred tools.
                                    </p>
                                </div>

                                {/* Sphere 2: Balance Your Aura */}
                                <div className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#340707]/80 to-[#1e0303]/90 border border-amber-400/30 hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_15px_35px_rgba(245,158,11,0.25)]">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-amber-500/30 transition-all">
                                        <Zap size={20} className="text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                                        Energetic Purity
                                    </span>
                                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                        Balance Your Aura
                                    </h4>
                                    <p className="text-xs text-stone-300/85 mt-1.5 leading-relaxed">
                                        Purify energy channels, dispel negative vibrations, and shield your spiritual presence with harmonic tranquility.
                                    </p>
                                </div>

                                {/* Sphere 3: Align Cosmic Power */}
                                <div className="group relative p-4 sm:p-6 rounded-2xl bg-gradient-to-b from-[#340707]/80 to-[#1e0303]/90 border border-amber-400/30 hover:border-amber-400/80 transition-all duration-300 hover:-translate-y-1.5 shadow-lg hover:shadow-[0_15px_35px_rgba(245,158,11,0.25)]">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/10 border border-amber-400/40 flex items-center justify-center text-amber-300 mb-3 sm:mb-4 group-hover:scale-110 group-hover:bg-amber-500/30 transition-all">
                                        <Sparkles size={20} className="text-amber-300 drop-shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                    </div>
                                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400/90 block mb-1">
                                        Universal Harmony
                                    </span>
                                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                        Align With Cosmic Power
                                    </h4>
                                    <p className="text-xs text-stone-300/85 mt-1.5 leading-relaxed">
                                        Connect directly with the 7 Chakras and ruling planetary Devatas through genuine energized sacred beads.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* 📿 PART 6: THE SACRED STORY (ABOUT OM SRI TARA GRAND PAVILION) */}
                        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-br from-[#2a0606]/95 via-[#1a0303]/95 to-[#100101]/95 border-2 border-amber-400/50 p-4 sm:p-8 lg:p-16 shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-xl overflow-hidden space-y-6 sm:space-y-10">
                            {/* Decorative Ornate Filigree Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-t-2 border-l-2 border-amber-400/60 rounded-tl-xl sm:rounded-tl-3xl pointer-events-none" />
                            <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-t-2 border-r-2 border-amber-400/60 rounded-tr-xl sm:rounded-tr-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-b-2 border-l-2 border-amber-400/60 rounded-bl-xl sm:rounded-bl-3xl pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-b-2 border-r-2 border-amber-400/60 rounded-br-xl sm:rounded-br-3xl pointer-events-none" />

                            <div className="space-y-6 sm:space-y-10 relative z-10">
                                {/* Pavilion Header */}
                                <div className="text-center space-y-2.5 sm:space-y-3">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                        <HeartHandshake size={13} className="text-amber-400 flex-shrink-0" />
                                        <span>Traditional Wisdom & Sacred Devotion</span>
                                    </div>
                                    <h3 className="text-xl sm:text-3xl lg:text-5xl font-serif font-black text-amber-100 tracking-tight break-words">
                                        About Om Sri Tara
                                    </h3>
                                    <div className="flex items-center justify-center gap-2 pt-1">
                                        <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                        <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                    </div>
                                </div>

                                {/* Two-Column Sacred Reading Experience */}
                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">
                                    {/* Left Column: Traditional Wisdom & Rudraksha Collection */}
                                    <div className="space-y-4 sm:space-y-5">
                                        <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-amber-400/25 backdrop-blur-md space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">

                                                <span>Our Sacred Heritage</span>
                                            </div>
                                            <p className="text-xs sm:text-sm lg:text-base text-stone-200 leading-relaxed font-serif">
                                                <span className="text-2xl sm:text-4xl font-serif font-black text-amber-300 float-left mr-2 sm:mr-3 leading-none drop-shadow">
                                                    O
                                                </span>
                                                m Sri Tara is dedicated to offering meaningful spiritual products that connect traditional wisdom with everyday spiritual practices. Our Rudraksha collection includes individual Mukhi beads, sacred malas, and special combinations such as Gowri Shankar and Ganesh Rudraksha, each carrying its own traditional significance and symbolism.
                                            </p>
                                        </div>

                                        {/* Sacred Collection Badges */}
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                                            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-950/40 border border-amber-400/20 flex items-center gap-2.5">
                                                <CheckCircle2 size={15} className="text-amber-400 flex-shrink-0" />
                                                <span className="text-xs font-medium text-amber-100">Individual 1 to 14 Mukhis</span>
                                            </div>
                                            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-950/40 border border-amber-400/20 flex items-center gap-2.5">
                                                <CheckCircle2 size={15} className="text-amber-400 flex-shrink-0" />
                                                <span className="text-xs font-medium text-amber-100">Sacred 108 Beads Malas</span>
                                            </div>
                                            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-950/40 border border-amber-400/20 flex items-center gap-2.5">
                                                <CheckCircle2 size={15} className="text-amber-400 flex-shrink-0" />
                                                <span className="text-xs font-medium text-amber-100">Gowri Shankar Combinations</span>
                                            </div>
                                            <div className="p-2.5 sm:p-3 rounded-xl bg-amber-950/40 border border-amber-400/20 flex items-center gap-2.5">
                                                <CheckCircle2 size={15} className="text-amber-400 flex-shrink-0" />
                                                <span className="text-xs font-medium text-amber-100">Ganesh & Special Kavatch</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Column: Devotion, Intentions & Inner Awareness */}
                                    <div className="space-y-4 sm:space-y-5">
                                        <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-b from-amber-500/10 via-amber-900/10 to-transparent border border-amber-400/30 backdrop-blur-md relative overflow-hidden space-y-3 sm:space-y-4">
                                            <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider">

                                                <span>Devotion & Intentions</span>
                                            </div>
                                            <p className="text-xs sm:text-sm lg:text-base text-stone-200 leading-relaxed font-serif italic">
                                                &ldquo;We believe spiritual accessories can serve as meaningful reminders of devotion, positive intentions, and inner awareness. Whether you are beginning your spiritual journey or deepening an established practice, Om Sri Tara helps you explore sacred products that resonate with your personal beliefs and intentions.&rdquo;
                                            </p>
                                        </div>

                                        {/* Authenticity Pledge Card */}
                                        <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-black/40 border border-amber-400/20 flex flex-col sm:flex-row items-center sm:items-center justify-between gap-3 text-center sm:text-left">
                                            <div className="flex items-center gap-3">

                                                <div className="text-left">
                                                    <p className="text-xs sm:text-sm font-bold text-amber-200">Sacred Vedic Consecration</p>
                                                    <p className="text-[11px] text-stone-400">Energized with authentic Prana Pratishtha rituals</p>
                                                </div>
                                            </div>
                                            <span className="px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-bold uppercase tracking-wider border border-amber-400/40 flex-shrink-0">
                                                Verified Purity
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* Pavilion Footer CTA */}
                                <div className="pt-6 sm:pt-8 border-t border-amber-400/20 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 text-center sm:text-left">
                                    <p className="text-xs sm:text-sm text-stone-400 font-serif italic">
                                        Deepen your spiritual journey with the authentic sacred presence of Om Sri Tara.
                                    </p>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const el = document.getElementById('rudraksha-collection');
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs sm:text-sm font-bold transition-all shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_25px_rgba(245,158,11,0.6)] hover:scale-105 active:scale-95 cursor-pointer font-serif tracking-wide"
                                    >
                                        <span>Explore Sacred Collection</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* 🌟 PART 2: WHY CHOOSE OM SRI TARA RUDRAKSHA */}
                        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#250505]/90 via-[#1c0303]/90 to-[#120101]/95 border-2 border-amber-400/40 p-4 sm:p-8 lg:p-14 shadow-2xl backdrop-blur-xl space-y-6 sm:space-y-10 overflow-hidden">
                            {/* Golden Corner Accents */}
                            <div className="absolute top-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-t-2 border-l-2 border-amber-400/50 rounded-tl-xl sm:rounded-tl-3xl pointer-events-none" />
                            <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-amber-400/50 rounded-tr-xl sm:rounded-tr-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-amber-400/50 rounded-bl-xl sm:rounded-bl-3xl pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-b-2 border-r-2 border-amber-400/50 rounded-br-xl sm:rounded-br-3xl pointer-events-none" />

                            {/* Header */}
                            <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 relative z-10">

                                <h3 className="text-xl sm:text-3xl lg:text-5xl font-serif font-black text-amber-100 tracking-tight break-words">
                                    Why Choose Om Sri Tara Rudraksha?
                                </h3>
                                <p className="text-xs sm:text-sm lg:text-base text-stone-300 font-serif leading-relaxed max-w-2xl mx-auto">
                                    Discover sacred Rudraksha beads rooted in traditional spiritual practices, thoughtfully selected to complement your journey towards peace, awareness, and personal growth.
                                </p>
                            </div>

                            {/* 3 Pillars Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 relative z-10">
                                {/* Pillar 1 */}
                                <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-amber-400/25 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5 sm:space-y-3.5">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm">
                                        <Sparkles size={20} className="text-amber-300" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100">
                                        Traditional Mukhi Varieties
                                    </h4>
                                    <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed font-serif">
                                        Explore 1 to 14 Mukhi Rudraksha beads with unique traditional associations and spiritual significance.
                                    </p>
                                </div>

                                {/* Pillar 2 */}
                                <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-amber-400/25 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5 sm:space-y-3.5">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm">
                                        <HeartHandshake size={20} className="text-amber-300" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100">
                                        Spiritual Symbolism
                                    </h4>
                                    <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed font-serif">
                                        Discover Rudraksha beads associated with Hindu deities, devotion, and sacred traditions.
                                    </p>
                                </div>

                                {/* Pillar 3 */}
                                <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-amber-400/25 hover:border-amber-400/60 transition-all duration-300 hover:-translate-y-1 shadow-md space-y-2.5 sm:space-y-3.5">
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 shadow-sm">
                                        <ShieldCheck size={20} className="text-amber-300" />
                                    </div>
                                    <h4 className="text-base sm:text-lg font-serif font-bold text-amber-100">
                                        For Daily Spiritual Practice
                                    </h4>
                                    <p className="text-xs sm:text-sm text-stone-300/90 leading-relaxed font-serif">
                                        Find meaningful accessories for meditation, prayer, chanting, and mindful living.
                                    </p>
                                </div>
                            </div>

                            {/* Concluding Sacred Inscription */}
                            <div className="p-3.5 sm:p-5 lg:p-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/15 border border-amber-400/35 text-center shadow-inner relative z-10">
                                <p className="text-xs sm:text-sm lg:text-base text-amber-200 font-serif italic font-medium leading-relaxed">
                                    &ldquo;Every Rudraksha has its own traditional significance, offering a meaningful way to connect with your spiritual intentions and daily practices.&rdquo;
                                </p>
                            </div>
                        </div>

                        {/* 📿 PART 3: EXPLORE OUR RUDRAKSHA COLLECTION */}
                        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#250505]/95 via-[#1c0303]/95 to-[#120101]/95 border-2 border-amber-400/40 p-4 sm:p-8 lg:p-14 shadow-2xl backdrop-blur-xl space-y-6 sm:space-y-10 overflow-hidden">
                            {/* Golden Corner Ornaments */}
                            <div className="absolute top-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-t-2 border-l-2 border-amber-400/50 rounded-tl-xl sm:rounded-tl-3xl pointer-events-none" />
                            <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-amber-400/50 rounded-tr-xl sm:rounded-tr-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-amber-400/50 rounded-bl-xl sm:rounded-bl-3xl pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-b-2 border-r-2 border-amber-400/50 rounded-br-xl sm:rounded-br-3xl pointer-events-none" />

                            {/* Ambient Glow */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-48 bg-amber-500/10 blur-3xl pointer-events-none" />

                            {/* Section Header */}
                            <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                    <Sparkles size={13} className="text-amber-300 animate-pulse flex-shrink-0" />
                                    <span>Sacred Categories & Consecrated Beads</span>
                                </div>
                                <h3 className="text-xl sm:text-3xl lg:text-5xl font-serif font-black text-amber-100 tracking-tight break-words">
                                    <span className="bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
                                        Explore Our Rudraksha Collection
                                    </span>
                                </h3>
                                <div className="flex items-center justify-center gap-2 pt-1">
                                    <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                    <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                </div>
                                <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed max-w-xl mx-auto pt-1">
                                    Explore authentic consecrated Rudraksha beads thoughtfully categorized to match your spiritual intentions, daily sadhana, and cosmic journey.
                                </p>
                            </div>

                            {/* 3 Collection Pillars Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6 relative z-10">
                                {/* Pillar 1: 1–14 Mukhi Rudraksha */}
                                <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#2e0808]/90 via-[#1e0303]/90 to-[#120101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                    <div className="absolute -bottom-3 -right-1 text-5xl sm:text-7xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                        1-14
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">

                                        <div className="space-y-1.5 sm:space-y-2">
                                            <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                1–14 Mukhi Rudraksha
                                            </h4>
                                            <p className="text-xs sm:text-sm text-stone-300/90 font-serif leading-relaxed">
                                                Discover individual Rudraksha beads traditionally associated with different deities, spiritual qualities, and symbolic meanings.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-amber-400/15 mt-3 sm:mt-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ Individual Beads
                                            </span>
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ 1 to 14 Mukhis
                                            </span>
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ Ruling Deities
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* Pillar 2: Rudraksha Malas */}
                                <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#2e0808]/90 via-[#1e0303]/90 to-[#120101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                    <div className="absolute -bottom-3 -right-1 text-5xl sm:text-7xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                        108
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">

                                        <div className="space-y-1.5 sm:space-y-2">
                                            <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                Rudraksha Malas
                                            </h4>
                                            <p className="text-xs sm:text-sm text-stone-300/90 font-serif leading-relaxed">
                                                Explore sacred malas for prayer, chanting, meditation, and everyday spiritual practices.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-amber-400/15 mt-3 sm:mt-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ 108 Sacred Beads
                                            </span>
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ Japa Chanting
                                            </span>
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ Daily Sadhana
                                            </span>
                                        </div>

                                    </div>
                                </div>

                                {/* Pillar 3: Special Rudraksha Combinations */}
                                <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#2e0808]/90 via-[#1e0303]/90 to-[#120101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-2 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                                    <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                    <div className="absolute -bottom-3 -right-1 text-5xl sm:text-7xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                        ॐ
                                    </div>
                                    <div className="space-y-3 sm:space-y-4">

                                        <div className="space-y-1.5 sm:space-y-2">
                                            <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                Special Combinations
                                            </h4>
                                            <p className="text-xs sm:text-sm text-stone-300/90 font-serif leading-relaxed">
                                                Discover meaningful combinations, including Gowri Shankar and Ganesh Rudraksha, representing harmony, wisdom, devotion, and spiritual growth.
                                            </p>
                                        </div>
                                    </div>
                                    <div className="space-y-3 sm:space-y-4 pt-3 sm:pt-4 border-t border-amber-400/15 mt-3 sm:mt-4">
                                        <div className="flex flex-wrap gap-1.5">
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ Gowri Shankar
                                            </span>
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ Ganesh Rudraksha
                                            </span>
                                            <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                ✦ Divine Harmony
                                            </span>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* 🪷 PART 4: BENEFITS OF RUDRAKSHA & FIND YOUR SPIRITUAL JOURNEY */}
                        <div className="space-y-10 sm:space-y-16">
                            {/* SECTION A: BENEFITS OF RUDRAKSHA */}
                            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#250505]/95 via-[#1c0303]/95 to-[#120101]/95 border-2 border-amber-400/40 p-4 sm:p-8 lg:p-14 shadow-2xl backdrop-blur-xl space-y-6 sm:space-y-10 overflow-hidden">
                                {/* Golden Corner Ornaments */}
                                <div className="absolute top-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-t-2 border-l-2 border-amber-400/50 rounded-tl-xl sm:rounded-tl-3xl pointer-events-none" />
                                <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-t-2 border-r-2 border-amber-400/50 rounded-tr-xl sm:rounded-tr-3xl pointer-events-none" />
                                <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-b-2 border-l-2 border-amber-400/50 rounded-bl-xl sm:rounded-bl-3xl pointer-events-none" />
                                <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-20 lg:h-20 border-b-2 border-r-2 border-amber-400/50 rounded-br-xl sm:rounded-br-3xl pointer-events-none" />

                                {/* Ambient Spotlight */}
                                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[500px] h-48 bg-amber-500/10 blur-3xl pointer-events-none" />

                                <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3 relative z-10">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/10 to-amber-500/20 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest shadow-[0_0_15px_rgba(245,158,11,0.2)]">
                                        <Sparkles size={13} className="text-amber-300 animate-pulse flex-shrink-0" />
                                        <span>Spiritual Awakening & Divine Energy</span>
                                    </div>
                                    <h3 className="text-xl sm:text-3xl lg:text-5xl font-serif font-black text-amber-100 tracking-tight break-words">
                                        <span className="bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent drop-shadow-sm">
                                            Benefits of Rudraksha
                                        </span>
                                    </h3>
                                    <div className="flex items-center justify-center gap-2 pt-1">
                                        <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                        <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                        <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                    </div>
                                    <p className="text-xs sm:text-sm text-stone-300 font-serif leading-relaxed max-w-xl mx-auto pt-1">
                                        Channeling cosmic consciousness, spiritual tranquility, and Vedic harmony through sacred consecrated beads.
                                    </p>
                                </div>

                                {/* 5 Sacred Benefits Cards - Harmonious 2 + 3 Bento Grid (100% Balanced, No Empty Slots) */}
                                <div className="space-y-3.5 sm:space-y-6 relative z-10">
                                    {/* Row 1: 2 Grand Feature Cards */}
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3.5 sm:gap-6">
                                        {/* Card 1: Inner Peace and Harmony */}
                                        <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#2e0808]/90 via-[#1e0303]/90 to-[#120101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                            <div className="absolute -bottom-3 -right-1 text-5xl sm:text-7xl lg:text-8xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                                I
                                            </div>
                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/25 to-amber-700/10 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-110 group-hover:border-amber-300 transition-all duration-300 flex-shrink-0">
                                                        <ShieldCheck size={22} className="text-amber-300" />
                                                    </div>

                                                </div>
                                                <div className="space-y-1.5 sm:space-y-2">
                                                    <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                        Inner Peace and Harmony
                                                    </h4>
                                                    <p className="text-xs sm:text-sm lg:text-base text-stone-300/90 font-serif leading-relaxed">
                                                        Symbolizes calmness, balance, and spiritual awareness.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-5 border-t border-amber-400/15 mt-3 sm:mt-4">
                                                <span className="text-[10px] sm:text-[11px] font-serif px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Calmness
                                                </span>
                                                <span className="text-[10px] sm:text-[11px] font-serif px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Emotional Balance
                                                </span>
                                                <span className="text-[10px] sm:text-[11px] font-serif px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Spiritual Awareness
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card 2: Focus and Mindfulness */}
                                        <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#2e0808]/90 via-[#1e0303]/90 to-[#120101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                            <div className="absolute -bottom-3 -right-1 text-5xl sm:text-7xl lg:text-8xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                                II
                                            </div>
                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="w-10 h-10 sm:w-13 sm:h-13 rounded-xl sm:rounded-2xl bg-gradient-to-br from-amber-500/25 to-amber-700/10 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.25)] group-hover:scale-110 group-hover:border-amber-300 transition-all duration-300 flex-shrink-0">
                                                        <Zap size={22} className="text-amber-300" />
                                                    </div>

                                                </div>
                                                <div className="space-y-1.5 sm:space-y-2">
                                                    <h4 className="text-lg sm:text-xl lg:text-2xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                        Focus and Mindfulness
                                                    </h4>
                                                    <p className="text-xs sm:text-sm lg:text-base text-stone-300/90 font-serif leading-relaxed">
                                                        Complements meditation, prayer, and spiritual discipline.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-3 sm:pt-5 border-t border-amber-400/15 mt-3 sm:mt-4">
                                                <span className="text-[10px] sm:text-[11px] font-serif px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Meditation
                                                </span>
                                                <span className="text-[10px] sm:text-[11px] font-serif px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Prayer Alignment
                                                </span>
                                                <span className="text-[10px] sm:text-[11px] font-serif px-2 sm:px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Spiritual Discipline
                                                </span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Row 2: 3 Balanced Cards */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
                                        {/* Card 3: Courage and Personal Growth */}
                                        <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#280707]/90 via-[#1b0303]/90 to-[#100101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
                                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                            <div className="absolute -bottom-3 -right-1 text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                                III
                                            </div>
                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-700/10 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:border-amber-300 transition-all flex-shrink-0">
                                                        <Award size={20} className="text-amber-300" />
                                                    </div>

                                                </div>
                                                <div className="space-y-1 sm:space-y-2">
                                                    <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                        Courage and Personal Growth
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-stone-300/90 font-serif leading-relaxed">
                                                        Represents inner strength, wisdom, confidence, and positive intentions.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-amber-400/15 mt-3 sm:mt-4">
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Strength
                                                </span>
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Wisdom
                                                </span>
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Confidence
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card 4: Devotion and Spiritual Connection */}
                                        <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#280707]/90 via-[#1b0303]/90 to-[#100101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
                                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                            <div className="absolute -bottom-3 -right-1 text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                                IV
                                            </div>
                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-700/10 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:border-amber-300 transition-all flex-shrink-0">
                                                        <HeartHandshake size={20} className="text-amber-300" />
                                                    </div>

                                                </div>
                                                <div className="space-y-1 sm:space-y-2">
                                                    <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                        Devotion and Spiritual Connection
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-stone-300/90 font-serif leading-relaxed">
                                                        Supports a meaningful connection with traditional spiritual practices.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-amber-400/15 mt-3 sm:mt-4">
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Sacred Devotion
                                                </span>
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Bhakti
                                                </span>
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Vedic Traditions
                                                </span>
                                            </div>
                                        </div>

                                        {/* Card 5: Prosperity and Abundance */}
                                        <div className="relative group overflow-hidden rounded-xl sm:rounded-3xl bg-gradient-to-br from-[#280707]/90 via-[#1b0303]/90 to-[#100101]/95 border border-amber-400/35 hover:border-amber-400/90 transition-all duration-500 hover:-translate-y-1.5 shadow-xl hover:shadow-[0_20px_45px_rgba(245,158,11,0.25)] p-4 sm:p-6 lg:p-7 flex flex-col justify-between">
                                            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-amber-400/70 to-transparent group-hover:via-amber-300 transition-all duration-500" />
                                            <div className="absolute -bottom-3 -right-1 text-4xl sm:text-6xl lg:text-7xl font-serif font-black text-amber-400/[0.04] group-hover:text-amber-400/[0.1] transition-colors select-none pointer-events-none">
                                                V
                                            </div>
                                            <div className="space-y-3 sm:space-y-4">
                                                <div className="flex items-center justify-between gap-3">
                                                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-amber-500/25 to-amber-700/10 border border-amber-400/50 flex items-center justify-center text-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.2)] group-hover:scale-110 group-hover:border-amber-300 transition-all flex-shrink-0">
                                                        <Flame size={20} className="text-amber-300" />
                                                    </div>

                                                </div>
                                                <div className="space-y-1 sm:space-y-2">
                                                    <h4 className="text-base sm:text-lg lg:text-xl font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                        Prosperity and Abundance
                                                    </h4>
                                                    <p className="text-xs sm:text-sm text-stone-300/90 font-serif leading-relaxed">
                                                        Certain Mukhi varieties are traditionally associated with prosperity, stability, and abundance.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-1.5 pt-3 sm:pt-4 border-t border-amber-400/15 mt-3 sm:mt-4">
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Abundance
                                                </span>
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Stability
                                                </span>
                                                <span className="text-[10px] font-serif px-2 py-0.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-amber-200">
                                                    ✦ Fortune
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Auspicious Vedic Footer Inscription Bar */}
                                <div className="p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/10 via-amber-400/15 to-amber-500/10 border border-amber-400/30 flex flex-col sm:flex-row items-center justify-between gap-3.5 sm:gap-4 text-center sm:text-left relative z-10 shadow-inner">
                                    <div className="flex items-center gap-3">
                                        <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 flex-shrink-0 shadow-sm">
                                            <Sparkles size={18} className="text-amber-300" />
                                        </div>
                                        <div className="text-left">
                                            <p className="text-xs sm:text-sm font-serif font-bold text-amber-200">
                                                Blessed by Vedic Traditions & Divine Prana Pratishtha
                                            </p>
                                            <p className="text-[11px] sm:text-xs text-stone-300/80 font-serif">
                                                Each Rudraksha bead carries sacred cosmic frequencies aligned with your soul&apos;s intentions.
                                            </p>
                                        </div>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const el = document.getElementById('rudraksha-collection');
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 font-serif font-bold text-xs uppercase tracking-wider shadow-md hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all flex items-center justify-center gap-2 flex-shrink-0 cursor-pointer"
                                    >
                                        <span>Explore Sacred Beads</span>
                                        <ArrowRight size={14} />
                                    </button>
                                </div>
                            </div>

                            {/* SECTION B: FIND THE RUDRAKSHA FOR YOUR SPIRITUAL JOURNEY */}
                            <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#2a0606]/95 via-[#1c0303]/95 to-[#100101]/95 border-2 border-amber-400/40 p-4 sm:p-8 lg:p-14 shadow-2xl backdrop-blur-xl space-y-6 sm:space-y-10">
                                <div className="text-center max-w-3xl mx-auto space-y-2.5 sm:space-y-3">
                                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/15 border border-amber-400/30 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest">
                                        <Star size={13} className="text-amber-300 flex-shrink-0" />
                                        <span>Sacred Intention & Cosmic Paths</span>
                                    </div>
                                    <h3 className="text-xl sm:text-3xl lg:text-5xl font-serif font-black text-amber-100 tracking-tight break-words">
                                        Find the Rudraksha for Your Spiritual Journey
                                    </h3>
                                    <p className="text-xs sm:text-sm text-amber-200/80 font-serif italic max-w-xl mx-auto">
                                        Select your spiritual intention to explore the consecrated Rudraksha beads aligned with your path
                                    </p>
                                </div>

                                {/* 6 Sacred Journey Paths */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
                                    {[
                                        { title: 'Peace and Mindfulness', icon: '🕊️', query: 'Peace' },
                                        { title: 'Harmony and Relationships', icon: '💖', query: 'Harmony' },
                                        { title: 'Wisdom and Focus', icon: '👁️', query: 'Wisdom' },
                                        { title: 'Courage and Confidence', icon: '🦁', query: 'Courage' },
                                        { title: 'Prosperity and Abundance', icon: '👑', query: 'Abundance' },
                                        { title: 'Protection and Spiritual Growth', icon: '🛡️', query: 'Protection' }
                                    ].map((journey, jIdx) => (
                                        <button
                                            key={jIdx}
                                            type="button"
                                            onClick={() => {
                                                setSearchQuery(journey.query);
                                                const el = document.getElementById('rudraksha-collection');
                                                if (el) el.scrollIntoView({ behavior: 'smooth' });
                                            }}
                                            className="group relative p-3.5 sm:p-5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-white/[0.08] via-white/[0.04] to-transparent border border-amber-400/30 hover:border-amber-400/80 hover:bg-amber-500/15 transition-all duration-300 text-left flex items-center justify-between gap-3 shadow-md hover:shadow-[0_10px_25px_rgba(245,158,11,0.25)] hover:-translate-y-1 cursor-pointer"
                                        >
                                            <div className="flex items-center gap-3">
                                                <span className="text-xl sm:text-2xl group-hover:scale-125 transition-transform flex-shrink-0">
                                                    {journey.icon}
                                                </span>
                                                <span className="text-xs sm:text-sm lg:text-base font-serif font-bold text-amber-100 group-hover:text-amber-300 transition-colors">
                                                    {journey.title}
                                                </span>
                                            </div>
                                            <ArrowRight size={14} className="text-amber-400/60 group-hover:text-amber-300 group-hover:translate-x-1 transition-all flex-shrink-0" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>



                        {/* 🪷 PART 7: A MEANINGFUL PART OF YOUR SPIRITUAL PRACTICE (GRAND SACRED FINALE) */}
                        <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#320707]/95 via-[#1e0303]/95 to-[#100101]/95 border-2 border-amber-400/50 p-4 sm:p-8 lg:p-14 shadow-2xl backdrop-blur-xl overflow-hidden text-center space-y-6 sm:space-y-8">
                            {/* Golden Temple Corner Filigree */}
                            <div className="absolute top-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-t-2 border-l-2 border-amber-400/60 rounded-tl-xl sm:rounded-tl-3xl pointer-events-none" />
                            <div className="absolute top-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-t-2 border-r-2 border-amber-400/60 rounded-tr-xl sm:rounded-tr-3xl pointer-events-none" />
                            <div className="absolute bottom-0 left-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-b-2 border-l-2 border-amber-400/60 rounded-bl-xl sm:rounded-bl-3xl pointer-events-none" />
                            <div className="absolute bottom-0 right-0 w-8 h-8 sm:w-16 sm:h-16 lg:w-24 lg:h-24 border-b-2 border-r-2 border-amber-400/60 rounded-br-xl sm:rounded-br-3xl pointer-events-none" />

                            {/* Center Cosmic Radiance */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[300px] bg-[radial-gradient(ellipse,rgba(245,158,11,0.18),transparent_70%)] blur-2xl pointer-events-none" />

                            <div className="max-w-4xl mx-auto space-y-4 sm:space-y-6 relative z-10">
                                {/* Sacred Medallion */}


                                <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-amber-500/15 border border-amber-400/40 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-widest backdrop-blur-md shadow-sm">
                                    <Sparkles size={12} className="text-amber-300 animate-spin flex-shrink-0" style={{ animationDuration: '6s' }} />
                                    <span>Devotion • Intention • Mindfulness</span>
                                </div>

                                {/* Headline */}
                                <h3 className="text-xl sm:text-3xl lg:text-5xl font-serif font-black tracking-tight text-white drop-shadow-md break-words">
                                    <span className="bg-gradient-to-r from-amber-100 via-yellow-200 to-amber-300 bg-clip-text text-transparent">
                                        A Meaningful Part of Your Spiritual Practice
                                    </span>
                                </h3>

                                <div className="flex items-center justify-center gap-2 pt-1">
                                    <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                    <div className="w-16 h-1 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
                                    <div className="w-8 h-0.5 bg-amber-400/40 rounded-full" />
                                </div>

                                {/* Main Narrative */}
                                <p className="text-xs sm:text-base lg:text-lg text-amber-100/90 font-serif leading-relaxed max-w-2xl mx-auto">
                                    Explore the Rudraksha collection at Om Sri Tara and choose a sacred accessory that resonates with your spiritual interests, personal intentions, and daily practices.
                                </p>

                                {/* Sacred Closing Inscription Tablet */}
                                <div className="p-4 sm:p-6 lg:p-7 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/15 via-amber-400/10 to-amber-500/15 border border-amber-400/35 max-w-2xl mx-auto shadow-inner relative">
                                    <div className="absolute top-2 left-3 sm:left-4 text-amber-400/40 text-2xl sm:text-3xl font-serif leading-none select-none">&ldquo;</div>
                                    <p className="text-xs sm:text-base lg:text-lg text-amber-200 font-serif italic font-semibold leading-relaxed px-2 sm:px-4">
                                        Your spiritual journey begins with intention, devotion, and mindful practice.
                                    </p>
                                    <div className="absolute bottom-1.5 right-3 sm:right-4 text-amber-400/40 text-2xl sm:text-3xl font-serif leading-none select-none">&rdquo;</div>
                                </div>

                                {/* Grand Interactive Action */}
                                <div className="pt-2 sm:pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            const el = document.getElementById('rudraksha-collection');
                                            if (el) el.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs sm:text-base font-bold transition-all shadow-[0_4px_25px_rgba(245,158,11,0.5)] hover:shadow-[0_6px_30px_rgba(245,158,11,0.7)] hover:scale-105 active:scale-95 cursor-pointer font-serif tracking-wide"
                                    >
                                        <Sparkles size={15} />
                                        <span>Choose Your Sacred Rudraksha</span>
                                        <ArrowRight size={15} />
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>


                {modalProduct && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
                        <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-amber-400/50">
                            {/* Close Button */}
                            <button
                                onClick={() => setModalProduct(null)}
                                className="absolute top-3 right-3 z-10 p-1.5 rounded-full bg-black/60 hover:bg-black text-white transition"
                            >
                                <X size={18} />
                            </button>

                            <div className="grid grid-cols-1 md:grid-cols-2">
                                {/* Image Box */}
                                <div className="relative aspect-square bg-stone-100">
                                    <Image
                                        src={modalProduct.imageUrls[modalActiveImg] || modalProduct.images[0]}
                                        alt={modalProduct.title}
                                        fill
                                        className="object-cover"
                                    />
                                    {modalProduct.imageUrls.length > 1 && (
                                        <div className="absolute bottom-3 inset-x-0 flex justify-center gap-2 px-2">
                                            {modalProduct.imageUrls.map((img: string, idx: number) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setModalActiveImg(idx)}
                                                    className={`w-10 h-10 rounded border-2 overflow-hidden bg-white ${modalActiveImg === idx
                                                        ? 'border-amber-600 scale-105'
                                                        : 'border-stone-300 opacity-70'
                                                        }`}
                                                >
                                                    <Image
                                                        src={img}
                                                        alt="thumb"
                                                        width={40}
                                                        height={40}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </button>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Details Box */}
                                <div className="p-6 flex flex-col justify-between space-y-4 max-h-[80vh] overflow-y-auto">
                                    <div className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <span className="px-2.5 py-0.5 rounded-full bg-[#8d1b1b] text-white text-xs font-bold">
                                                {modalProduct.displayMukhi}
                                            </span>
                                            <span className="text-xs text-stone-500">{modalProduct.deity}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-stone-900 font-serif">
                                            {modalProduct.title}
                                        </h3>
                                        <div className="flex items-baseline gap-2">
                                            <span className="text-2xl font-bold text-stone-900 font-mono">
                                                {convertPrice(modalProduct.price)}
                                            </span>
                                            {modalProduct.discountPrice > modalProduct.price && (
                                                <span className="text-sm text-stone-400 line-through">
                                                    {convertPrice(modalProduct.discountPrice)}
                                                </span>
                                            )}
                                        </div>
                                        <p className="text-xs text-stone-600 leading-relaxed">
                                            {modalProduct.description}
                                        </p>
                                        <div className="pt-2">
                                            <p className="text-xs font-bold text-[#8d1b1b] mb-1">Benefits:</p>
                                            <ul className="space-y-1 text-xs text-stone-700">
                                                {modalProduct.benefits.map((b: string, idx: number) => (
                                                    <li key={idx} className="flex items-start gap-1.5">
                                                        <CheckCircle2
                                                            size={13}
                                                            className="text-emerald-600 mt-0.5 flex-shrink-0"
                                                        />
                                                        <span>{b}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Action Buttons in Modal */}
                                    <div className="space-y-2 pt-3 border-t border-stone-200">
                                        <button
                                            onClick={() => {
                                                handleAddToCart(modalProduct, false);
                                                setModalProduct(null);
                                            }}
                                            className="w-full py-2.5 bg-[#8d1b1b] hover:bg-[#721515] text-white text-xs font-bold rounded-lg transition flex items-center justify-center gap-1.5 shadow"
                                        >
                                            <ShoppingCart size={15} /> Add to Cart
                                        </button>
                                        <button
                                            onClick={() => {
                                                handleAddToCart(modalProduct, true);
                                                setModalProduct(null);
                                            }}
                                            className="w-full py-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-stone-950 text-xs font-bold rounded-lg transition flex items-center justify-center gap-1"
                                        >
                                            <Zap size={14} /> Buy Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {/* 🔐 LOGIN MODAL */}
                {signInModal && (
                    <LoginModal
                        open={signInModal}
                        handleClose={() => setSignInModal(false)}
                        vendorId={vendorId}
                    />
                )}
            </div>
        </>
    );
}

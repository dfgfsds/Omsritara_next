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
        if (Array.isArray(products?.data) && products.data.length > 0) {
            return products.data;
        }
        if (Array.isArray(directProductsData?.data) && directProductsData.data.length > 0) {
            return directProductsData.data;
        }
        return [];
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

            const rawDesc = foundInApi?.description_2 || foundInApi?.description || config.description;
            const cleanDesc = rawDesc.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

            return {
                ...config,
                id: realApiId,
                actualApiId: realApiId,
                title: foundInApi?.name || config.title,
                price: priceNum,
                discountPrice: discountNum,
                imageUrls: apiImages,
                description: cleanDesc,
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

        if (!storedCartId && !storedUserId) {
            setSignInModal(true);
            return;
        }

        const qty = quantities[item.actualApiId] || 1;
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
                <title>OM SRITARA RUDRAKSHA UTSAV 2026 | Wear the Divine, Experience the Energy</title>
                <meta
                    name="description"
                    content="Experience the Divine Consecrated Rudraksha Utsav 2026 at Omsritara. Sacred 1 to 14 Mukhi authentic Nepali Rudrakshas blessed with Prana Pratishtha rituals by Guru Matha."
                />
                <meta
                    name="keywords"
                    content="rudraksha utsav 2026, 1 mukhi to 14 mukhi rudraksha, certified nepali rudraksha, energized rudraksha mala, om sritara rudraksha"
                />
                <link rel="canonical" href="https://www.omsritara.in/rudraksha" />
                <meta property="og:title" content="OM SRITARA RUDRAKSHA UTSAV 2026 | Wear the Divine" />
                <meta
                    property="og:description"
                    content="Wear the Divine, Experience the Energy. Authentic lab-certified 1 to 14 Mukhi Rudrakshas energized by Guru Matha."
                />
                <meta property="og:image" content="https://www.omsritara.in/rudraksha-hero.jpg" />

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

                    {/* Filter Category Tabs */}
                    <div className="flex flex-wrap items-center gap-2 mb-8">
                        <button
                            onClick={() => setSelectedGroup('all')}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${selectedGroup === 'all'
                                ? 'bg-[#8d1b1b] text-white shadow-md'
                                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                }`}
                        >
                            All 14 Mukhis ({mergedRudrakshaList.length})
                        </button>
                        <button
                            onClick={() => setSelectedGroup('shiva')}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${selectedGroup === 'shiva'
                                ? 'bg-[#8d1b1b] text-white shadow-md'
                                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                }`}
                        >
                            Lord Shiva & Protection (1, 5, 11, 14 Mukhi)
                        </button>
                        <button
                            onClick={() => setSelectedGroup('wealth')}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${selectedGroup === 'wealth'
                                ? 'bg-[#8d1b1b] text-white shadow-md'
                                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                }`}
                        >
                            Wealth & Abundance (7, 8, 12, 13 Mukhi)
                        </button>
                        <button
                            onClick={() => setSelectedGroup('peace')}
                            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${selectedGroup === 'peace'
                                ? 'bg-[#8d1b1b] text-white shadow-md'
                                : 'bg-white text-stone-600 hover:bg-stone-100 border border-stone-200'
                                }`}
                        >
                            Peace & Harmony (1, 2, 3, 4, 10 Mukhi)
                        </button>
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
                                                    <p className="text-xs text-stone-600 mt-1 leading-relaxed line-clamp-2">
                                                        {item.description}
                                                    </p>
                                                </div>

                                                {/* 📜 Sacred Beej Mantra Chanting Scroll */}
                                                <div className="p-2.5 rounded-xl bg-gradient-to-r from-amber-100/90 via-yellow-50 to-amber-100/90 border border-amber-300 shadow-sm">
                                                    <div className="flex items-center justify-between text-[10px] text-amber-950 font-extrabold uppercase tracking-wider mb-0.5">
                                                        <span className="flex items-center gap-1">

                                                            Sacred Beej Mantra
                                                        </span>
                                                        <span className="text-amber-800 font-semibold">Chant 108 Times</span>
                                                    </div>
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
                                                        <span className="text-[10px] text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                                                            Consecrated
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

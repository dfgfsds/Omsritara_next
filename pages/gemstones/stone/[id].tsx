import React, { useState, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Heart, ShoppingCart, Check, Star, Play, X, User, Mail, Phone, MessageSquare, Send, MapPin, Award, Plane, Headset, Truck, Package, RefreshCw, ChevronRight, ChevronLeft } from 'lucide-react';
import birthstonesData from '@/data/birthstones.json';
import planetGemstonesData from '@/data/planetGemstones.json';
import otherGemstonesData from '@/data/otherGemstones.json';
import rashiGemstonesData from '@/data/rashiGemstones.json';
import EnquiryModal from '@/components/EnquiryModal';
import EnquiryForm from '@/components/EnquiryForm';

const allCategoriesData = { ...birthstonesData, ...planetGemstonesData, ...otherGemstonesData, ...rashiGemstonesData };

type Stone = {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    benefits: string[];
    formats: string[];
    image: string;
    images?: string[];
    video?: string;
    ringImages?: string[];
    pendantImages?: string[];
};

interface StonePageProps {
    stone: Stone;
    monthKey?: string;
}

export default function StonePage({ stone, monthKey }: StonePageProps) {
    const [currentFormat, setCurrentFormat] = useState("");
    const [activeMedia, setActiveMedia] = useState<"image" | "video">("image");
    const [selectedImageIdx, setSelectedImageIdx] = useState(0);
    const [selectedMetal, setSelectedMetal] = useState("18k Yellow Gold");
    const scrollRef = useRef<HTMLDivElement>(null);

    const scrollLeft = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: -150, behavior: 'smooth' });
    };

    const scrollRight = () => {
        if (scrollRef.current) scrollRef.current.scrollBy({ left: 150, behavior: 'smooth' });
    };

    const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);

    if (!stone) return <div className="text-center py-20 text-2xl font-bold">Stone not found</div>;

    const monthData = monthKey ? (allCategoriesData as any)[monthKey] : null;

    const pseudoRandom = stone.id.length % 6;
    const randomRating = (4.5 + pseudoRandom * 0.08).toFixed(1);

    const galleryImages = stone.images && stone.images.length > 0 ? stone.images : [stone.image];

    let displayImage = galleryImages[selectedImageIdx] || galleryImages[0];

    // Determine the format image to show below the buttons
    let formatImage = '/img/formet/stone.webp';
    if (currentFormat.toLowerCase() === 'ring') {
        formatImage = '/img/formet/ring.webp';
    } else if (currentFormat.toLowerCase() === 'pendant') {
        formatImage = '/img/formet/pantant.webp';
    }

    return (
        <div className="bg-gray-50 min-h-screen pb-16 pt-8">
            <Head>
                <title>{`${stone.name} - Om Sritara`}</title>
                <meta name="description" content={stone.description} />
            </Head>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumbs */}
                <nav className="flex text-sm text-gray-500 font-medium mb-6" aria-label="Breadcrumb">
                    <ol className="inline-flex items-center space-x-1 md:space-x-3">
                        <li className="inline-flex items-center">
                            <Link href="/" className="hover:text-red-800 transition-colors">Home</Link>
                        </li>
                        <li>
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 mx-1" />
                                <Link href="/gemstones/january" className="hover:text-red-800 transition-colors">Gemstones</Link>
                            </div>
                        </li>
                        {monthKey && (
                            <li>
                                <div className="flex items-center">
                                    <ChevronRight className="w-4 h-4 mx-1" />
                                    <Link href={`/gemstones/${monthKey}`} className="hover:text-red-800 transition-colors capitalize">{monthKey}</Link>
                                </div>
                            </li>
                        )}
                        {/* <li aria-current="page">
                            <div className="flex items-center">
                                <ChevronRight className="w-4 h-4 mx-1" />
                                <span className="text-gray-800 font-bold">{stone.name}</span>
                            </div>
                        </li> */}
                    </ol>
                </nav>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column */}
                    <div className="w-full lg:w-[60%] flex flex-col gap-8">

                        {/* Image Section */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 relative">
                            <div className="p-6 sm:p-10 lg:p-14 pt-12 sm:pt-16 lg:pt-20 flex flex-col items-center lg:items-start justify-start min-h-[300px] sm:min-h-[400px]">
                                {/* <div className="absolute top-4 right-4 z-10">
                                <button className="w-12 h-12 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-[#991b1b] hover:text-white transition-all duration-300 text-gray-400">
                                    <Heart size={24} />
                                </button>
                            </div> */}

                                {activeMedia === "video" ? (
                                    <div className="w-full max-w-[450px] aspect-square flex items-center justify-center bg-gray-200/50 rounded-lg overflow-hidden shadow-2xl relative">
                                        <video
                                            src={stone.video || `/img/birthstone-video/${stone.id}.mp4`}
                                            controls
                                            autoPlay
                                            className="w-full h-full object-cover"
                                        >
                                            Your browser does not support the video tag.
                                        </video>
                                    </div>
                                ) : (
                                    <div className="w-full max-w-[500px] flex justify-center lg:justify-start">
                                        <Image
                                            src={displayImage}
                                            alt={`${stone.name} - ${currentFormat}`}
                                            width={500}
                                            height={500}
                                            className="object-contain drop-shadow-2xl"
                                            onError={(e) => {
                                                e.currentTarget.src = stone.image; // Fallback to base image
                                            }}
                                        />
                                    </div>
                                )}

                                {/* Dynamic Gemstone Thumbnails */}
                                <div className="relative mt-12 w-full max-w-full">
                                    {galleryImages.length > 3 && (
                                        <button
                                            onClick={scrollLeft}
                                            className="absolute left-0 top-1/2 -translate-y-1/2 -ml-4 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors text-gray-600"
                                        >
                                            <ChevronLeft size={16} />
                                        </button>
                                    )}

                                    <div ref={scrollRef} className="flex gap-3 w-full justify-start overflow-x-auto pb-2 no-scrollbar px-1 scroll-smooth">
                                        {galleryImages.map((imgSrc, idx) => (
                                            <button
                                                key={idx}
                                                onClick={() => {
                                                    setActiveMedia("image");
                                                    setSelectedImageIdx(idx);
                                                }}
                                                className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border-[3px] transition-all duration-300 ${activeMedia === 'image' && selectedImageIdx === idx ? 'border-[#3b82f6] shadow-md scale-105' : 'border-transparent hover:border-gray-300'}`}
                                            >
                                                <div className="w-full h-full relative bg-gray-200/60 p-2 rounded-lg">
                                                    <Image
                                                        src={imgSrc}
                                                        alt={`${stone.name} view ${idx + 1}`}
                                                        layout="fill"
                                                        objectFit="contain"
                                                        onError={(e) => {
                                                            e.currentTarget.src = stone.image;
                                                        }}
                                                    />
                                                </div>
                                            </button>
                                        ))}

                                        {/* Video Thumbnail */}
                                        <button
                                            onClick={() => setActiveMedia("video")}
                                            className={`w-16 h-16 md:w-20 md:h-20 flex-shrink-0 rounded-xl overflow-hidden border-[3px] transition-all duration-300 relative group ${activeMedia === 'video' ? 'border-[#3b82f6] shadow-md scale-105' : 'border-transparent hover:border-gray-300'}`}
                                        >
                                            <div className="w-full h-full relative bg-gray-200/60 p-2 rounded-lg opacity-90 group-hover:opacity-100 transition-opacity">
                                                <Image
                                                    src={stone.image}
                                                    alt="Video Thumbnail"
                                                    layout="fill"
                                                    objectFit="contain"
                                                    className="blur-[2px]"
                                                />
                                                <div className="absolute inset-0 bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors rounded-lg">
                                                    <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md text-[#3b82f6]">
                                                        <Play size={14} className="ml-1" fill="currentColor" />
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>

                                    {galleryImages.length > 3 && (
                                        <button
                                            onClick={scrollRight}
                                            className="absolute right-0 top-1/2 -translate-y-1/2 -mr-4 z-10 w-8 h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-gray-50 transition-colors text-gray-600"
                                        >
                                            <ChevronRight size={16} />
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Text Content Section (Still in Left Column) */}
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-10 md:p-14 flex flex-col justify-center">
                            <div className="mb-6 border-b border-gray-100 pb-6">
                                <h1 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] mb-2 font-serif">{stone.name}</h1>
                                <p className="text-lg text-[#991b1b] font-medium">{stone.subtitle}</p>

                                <div className="flex items-center gap-2 mt-4 text-yellow-500">
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <Star size={20} fill="currentColor" />
                                    <span className="text-sm font-semibold text-gray-600 ml-2">({randomRating} Reviews)</span>
                                </div>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Description</h3>
                                <p className="text-gray-700 leading-relaxed text-lg">
                                    {stone.description}
                                </p>
                            </div>

                            <div className="mb-8">
                                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Traditionally Associated Benefits</h3>
                                <div className="flex flex-wrap gap-2">
                                    {stone.benefits.map(b => (
                                        <span key={b} className="text-sm bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1.5 rounded-lg font-medium">{b}</span>
                                    ))}
                                </div>
                            </div>

                            {/* Other Stones in the Category */}
                            {monthData?.stones && monthData.stones.filter(s => s.id !== stone.id).length > 0 && (
                                <div className="flex flex-col">
                                    {monthData.stones.filter(s => s.id !== stone.id).map(otherStone => (
                                        <div key={otherStone.id} className="pt-10 mt-10 border-t border-gray-100">

                                            <div className="mb-6 border-b border-gray-100 pb-6">
                                                <h2 className="text-3xl md:text-4xl font-extrabold text-[#0a192f] mb-2 font-serif">{otherStone.name}</h2>
                                                <p className="text-lg text-[#991b1b] font-medium">{otherStone.subtitle}</p>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Description</h3>
                                                <p className="text-gray-700 leading-relaxed text-lg">{otherStone.description}</p>
                                            </div>

                                            <div className="mb-8">
                                                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Traditionally Associated Benefits</h3>
                                                <div className="flex flex-wrap gap-2">
                                                    {otherStone.benefits.map(b => (
                                                        <span key={b} className="text-sm bg-gray-100 border border-gray-200 text-gray-800 px-3 py-1.5 rounded-lg font-medium">{b}</span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                        </div>
                    </div>

                    {/* Right Column (Sticky) */}
                    <div className="w-full lg:w-[40%] lg:sticky lg:top-8 relative z-10">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-center">



                            <div className="mb-6">
                                <h3 className="text-sm font-bold text-gray-400 mb-3 uppercase tracking-widest">Available Formats</h3>
                                <div className="flex flex-wrap gap-3">
                                    {stone.formats.map(f => {
                                        const isSelected = currentFormat === f;
                                        return (
                                            <button
                                                key={f}
                                                onClick={() => {
                                                    setCurrentFormat(f);
                                                }}
                                                className={`text-sm px-4 py-2 rounded-lg font-bold transition-colors border-2 ${isSelected
                                                    ? 'bg-[#8B0000] hover:bg-gradient-to-r hover:from-[#8B0000] hover:to-black text-white border-[#8B0000] shadow-md'
                                                    : 'bg-yellow-50 border-yellow-200 text-yellow-800 hover:bg-yellow-100'
                                                    }`}
                                            >
                                                {f}
                                            </button>
                                        )
                                    })}
                                </div>

                                {/* Format Specific Image placed right underneath the buttons */}
                                {currentFormat && (
                                    <div className="mt-6 flex items-center justify-center bg-gray-50 rounded-xl border border-gray-200 p-4 w-40 h-40">
                                        <div className="relative w-full h-full drop-shadow-md">
                                            <Image
                                                src={formatImage}
                                                alt={`${currentFormat} Format`}
                                                layout="fill"
                                                objectFit="contain"
                                            />
                                        </div>
                                    </div>
                                )}
                            </div>

                            {/* Additional Content... */}

                            {(currentFormat === "Ring" || currentFormat === "Pendant") && (
                                <div className="mb-10 border-t border-gray-200 pt-8">
                                    <h3 className="text-gray-800 font-medium mb-4 text-lg">Select Metal</h3>
                                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                                        {[
                                            { id: "Copper", name: "Copper", img: "/images/metals/copper.png" },
                                            { id: "Silver", name: "Silver", img: "/images/metals/silver.png" },

                                            { id: "Gold", name: "Gold", img: "/images/metals/gold.png" },
                                        ].map((metal) => {
                                            const isSelected = selectedMetal === metal.id;
                                            return (
                                                <button
                                                    key={metal.id}
                                                    onClick={() => setSelectedMetal(metal.id)}
                                                    className={`flex flex-col items-center justify-start p-3 rounded-lg border transition-all bg-white ${isSelected ? 'border-red-800 shadow-sm ring-1 ring-red-800' : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
                                                        }`}
                                                >
                                                    <div className="w-full h-10 relative mb-3">
                                                        <Image
                                                            src={metal.img}
                                                            alt={metal.name}
                                                            layout="fill"
                                                            objectFit="contain"
                                                        />
                                                    </div>
                                                    <span className="text-[11px] font-bold text-gray-800 text-center leading-tight">
                                                        {metal.name}
                                                    </span>
                                                </button>
                                            );
                                        })}
                                    </div>
                                </div>
                            )}

                            <EnquiryForm />
                        </div>
                    </div>
                </div>
            </div>



            {/* Beautiful Elegant About Section */}
            {(monthData.about || (monthData.aboutList && monthData.aboutList.length > 0)) && (
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-4">
                    <div className="relative bg-[#fffdfa] rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-[#f0e8db] p-6 sm:p-8 md:p-14 lg:p-20 overflow-hidden">
                        {/* Subtle corner decorations */}
                        <div className="absolute top-0 left-0 w-24 h-24 border-t-2 border-l-2 border-[#e6d5b8] rounded-tl-[2rem] opacity-50 m-4 pointer-events-none"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 border-b-2 border-r-2 border-[#e6d5b8] rounded-br-[2rem] opacity-50 m-4 pointer-events-none"></div>

                        <div className="max-w-4xl mx-auto relative z-10">
                            <div className="text-center mb-12">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#2c3e50] font-serif mb-5 tracking-wide">
                                    About {monthData.title}
                                </h2>
                                <div className="flex items-center justify-center gap-3">
                                    <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                                    <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
                                    <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                                </div>
                            </div>

                            {monthData.about && (
                                <p className="mb-12 text-[#5a6a7c] text-lg md:text-xl leading-relaxed text-center md:text-justify font-light tracking-wide">
                                    {monthData.about}
                                </p>
                            )}

                            {monthData.aboutList && monthData.aboutList.length > 0 && (
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 mb-14">
                                    {monthData.aboutList.map((item: any, index: number) => (
                                        <div key={index} className="flex items-start gap-5 group">
                                            <div className="flex-shrink-0 mt-1.5 flex items-center justify-center">
                                                <svg className="w-5 h-5 text-[#d4af37] transform transition-transform group-hover:scale-125 group-hover:rotate-180 duration-500" fill="currentColor" viewBox="0 0 24 24">
                                                    <path d="M12 0l2.5 8.5L23 11l-8.5 2.5L12 22l-2.5-8.5L1 11l8.5-2.5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h4 className="font-semibold text-[#2c3e50] text-lg mb-1.5 font-serif tracking-wide group-hover:text-[#8b0000] transition-colors">{item.name}</h4>
                                                <p className="text-[#5a6a7c] text-base leading-relaxed font-light">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="bg-[#faf7f2] p-6 sm:p-8 md:p-10 rounded-[1.5rem] border border-[#e6d5b8]/60 flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6 text-center sm:text-left shadow-sm">
                                <div className="flex-shrink-0 text-3xl mt-1">
                                    ✨
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h4 className="text-xl font-bold text-[#8b0000] font-serif m-0">Omsritara Quality & Spiritual Trust</h4>
                                    <p className="text-base md:text-lg text-[#4a5568] italic font-serif leading-relaxed">
                                        All Om Sritara gemstones are carefully selected, quality checked, and energized with the divine blessings of <strong className="text-[#8b0000] font-bold not-italic">Guru Matha Sri Tara Amma</strong> before being recommended.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}


            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-12">
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#2c3e50] font-serif mb-4 tracking-wide">
                        The Om Sritara Promise
                    </h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                        <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
                        <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all transform hover:-translate-y-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 relative drop-shadow-md">
                            <Image src="/img/features/certified.png" alt="Certified Products" layout="fill" objectFit="contain" />
                        </div>
                        <h4 className="text-gray-800 font-medium sm:font-semibold text-sm sm:text-lg">Certified Products</h4>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all transform hover:-translate-y-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 relative drop-shadow-md">
                            <Image src="/img/features/worldwide.png" alt="Worldwide Shipping" layout="fill" objectFit="contain" />
                        </div>
                        <h4 className="text-gray-800 font-medium sm:font-semibold text-sm sm:text-lg">Worldwide Shipping</h4>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all transform hover:-translate-y-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 relative drop-shadow-md">
                            <Image src="/img/features/expert.png" alt="Talk to Expert" layout="fill" objectFit="contain" />
                        </div>
                        <h4 className="text-gray-800 font-medium sm:font-semibold text-sm sm:text-lg">Talk to Expert</h4>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all transform hover:-translate-y-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 relative drop-shadow-md">
                            <Image src="/img/features/delivery.png" alt="Fast & Safe Delivery" layout="fill" objectFit="contain" />
                        </div>
                        <h4 className="text-gray-800 font-medium sm:font-semibold text-sm sm:text-lg">Fast & Safe Delivery</h4>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all transform hover:-translate-y-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 relative drop-shadow-md">
                            <Image src="/img/features/india.png" alt="Pan India Delivery" layout="fill" objectFit="contain" />
                        </div>
                        <h4 className="text-gray-800 font-medium sm:font-semibold text-sm sm:text-lg">Pan India Delivery</h4>
                    </div>
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center text-center hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] transition-all transform hover:-translate-y-1">
                        <div className="w-16 h-16 sm:w-20 sm:h-20 mb-3 sm:mb-4 relative drop-shadow-md">
                            <Image src="/img/features/return.png" alt="Hassle Free Return" layout="fill" objectFit="contain" />
                        </div>
                        <h4 className="text-gray-800 font-medium sm:font-semibold text-sm sm:text-lg">Hassle Free Return</h4>
                    </div>
                </div>
            </div>

            {/* Help Section */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 sm:mt-20">
                <div className="bg-[#0a192f] rounded-3xl p-6 sm:p-10 md:p-14 shadow-2xl text-center text-white relative overflow-hidden">
                    {/* Decorative background circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-white opacity-5"></div>

                    <h2 className="text-3xl font-bold mb-6 relative z-10 font-serif">
                        {monthData?.help?.title || `Need Help Choosing the Right ${monthData?.title ? (monthData.title.endsWith('s') ? monthData.title.slice(0, -1) : monthData.title) : 'Gemstone'}?`}
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto relative z-10 text-lg leading-relaxed">
                        {monthData?.help?.description || "Every individual is unique, and the most suitable gemstone may vary based on birth details and spiritual guidance. Share your "}
                        {(!monthData?.help?.description && !monthData?.help?.highlightText) && <span className="font-semibold text-yellow-400">Name, Date of Birth, Rashi, Preferred Gemstone Format, and Contact Number</span>}
                        {monthData?.help?.highlightText && <span className="font-semibold text-yellow-400">{monthData.help.highlightText}</span>}
                        {(!monthData?.help?.description) && " with Om Sritara."}
                    </p>

                    <div className="bg-white/10 p-5 rounded-xl inline-block backdrop-blur-md relative z-10 mb-8 border border-white/10">
                        <p className="text-white text-base md:text-lg font-medium">
                            {monthData?.help?.subDescription || "Our team will provide personalized guidance and help you choose the gemstone that best aligns with your spiritual journey."}
                        </p>
                    </div>

                    <div className="relative z-10">
                        <a href="tel:+917092973555" className="inline-block px-6 py-3 sm:px-10 sm:py-4 bg-yellow-500 text-yellow-950 font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:-translate-y-1 text-base sm:text-lg w-full sm:w-auto text-center">
                            Get Your Personalized Recommendation Today
                        </a>
                    </div>
                </div>
            </div>

            <EnquiryModal
                isOpen={isEnquiryModalOpen}
                onClose={() => setIsEnquiryModalOpen(false)}
                stone={stone}
                currentFormat={currentFormat}
                selectedMetal={selectedMetal}
            />

            {/* Mobile Floating Enquiry Tab */}
            <button
                onClick={() => {
                    document.getElementById('enquiry-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="fixed right-0 top-[60%] -translate-y-1/2 z-50 bg-gradient-to-t from-[#5a0000] via-[#8B0000] to-[#a31010] text-white py-5 px-2.5 rounded-l-2xl shadow-[0_0_20px_rgba(212,175,55,0.4)] lg:hidden flex flex-col items-center gap-3 border-[1.5px] border-r-0 border-[#d4af37] overflow-hidden group"
            >
                {/* Shine effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-white/30 to-transparent opacity-0 group-active:opacity-100 transition-opacity"></div>
                
                <div className="relative z-10 flex flex-col items-center gap-3">
                    <div className="bg-gradient-to-br from-[#d4af37] to-[#b8860b] p-1.5 rounded-full shadow-inner relative">
                        <MessageSquare size={14} className="text-white relative z-10" />
                        <div className="absolute inset-0 bg-white/40 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-[11px] font-black tracking-[0.25em] uppercase rotate-180 drop-shadow-md text-[#fdfbf7]" style={{ writingMode: 'vertical-rl' }}>
                        Enquire Now
                    </span>
                </div>
            </button>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const paths: { params: { id: string } }[] = [];

    Object.values(allCategoriesData).forEach((category: any) => {
        category.stones.forEach((stone: Stone) => {
            paths.push({ params: { id: stone.id } });
        });
    });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const id = params?.id as string;

    let foundStone = null;
    let foundMonth = null;

    Object.entries(allCategoriesData).forEach(([month, data]: [string, any]) => {
        const stone = data.stones.find((s: Stone) => s.id === id);
        if (stone && !foundStone) {
            foundStone = stone;
            foundMonth = month;
        }
    });

    if (!foundStone) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            stone: foundStone,
            monthKey: foundMonth
        }
    };
};

// force refresh

console.log('Reloading...')

import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Heart, Eye } from 'lucide-react';
import birthstonesData from '@/data/birthstones.json';
import planetGemstonesData from '@/data/planetGemstones.json';
import otherGemstonesData from '@/data/otherGemstones.json';
import rashiGemstonesData from '@/data/rashiGemstones.json';
import { GetStaticProps, GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

const allCategoriesData = { ...birthstonesData, ...planetGemstonesData, ...otherGemstonesData, ...rashiGemstonesData };

type Stone = {
    id: string;
    name: string;
    subtitle: string;
    description: string;
    benefits: string[];
    formats: string[];
    image: string;
};

type MonthData = {
    title: string;
    origin: string;
    about: string;
    aboutList: { name: string; desc: string }[];
    stones: Stone[];
    help?: {
        title?: string;
        description?: string;
        highlightText?: string;
        subDescription?: string;
    };
};

interface BirthstonePageProps {
    monthData: MonthData;
    month: string;
    redirectUrl?: string;
}

export default function BirthstonePage({ monthData, month, redirectUrl }: BirthstonePageProps) {
    const router = useRouter();

    React.useEffect(() => {
        if (redirectUrl) {
            router.replace(redirectUrl);
        }
    }, [redirectUrl, router]);

    if (redirectUrl) return null;

    if (!monthData) return <div className="text-center py-20 text-2xl font-bold">Month not found</div>;

    const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

    return (
        <div className="bg-gray-50 min-h-screen pb-16">

            {/* Header Section */}
            <div className="relative py-24 px-4 sm:px-6 lg:px-8 shadow-md flex items-center justify-center min-h-[400px]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/images/birthstones/banner.png"
                        alt={`${monthData.title} Banner`}
                        layout="fill"
                        objectFit="fill"
                        priority
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f]/80 to-[#0a192f]/60 backdrop-blur-[2px]"></div> */}
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 font-serif drop-shadow-xl tracking-wide">{monthData.title}</h1>
                    <div className="w-32 h-1.5 bg-yellow-500 mx-auto rounded-full shadow-lg"></div>
                </div>
            </div>

            {/* Cards Section */}
            <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">

                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center text-gray-800 mb-4 font-serif">Our Collection</h2>
                <div className="flex items-center justify-center gap-3 mb-12">
                    <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                    <div className="w-2 h-2 rotate-45 bg-[#d4af37]"></div>
                    <div className="w-12 h-[1px] bg-[#d4af37]"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {monthData.stones?.map((stone) => (
                        <div key={stone.id} className="group bg-white rounded-[2rem] p-3 shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-gray-100 hover:shadow-lg transition-all duration-300 flex flex-col">
                            {/* Image Container */}
                            <div className="relative bg-[#e4e6e7] rounded-[1.5rem] p-6 h-[320px] flex items-center justify-center overflow-hidden">



                                <div className="relative w-full h-full flex items-center justify-center">
                                    <Image
                                        src={stone.image}
                                        alt={stone.name}
                                        width={240}
                                        height={240}
                                        className="object-contain filter drop-shadow-xl relative z-10 transition-transform duration-500 group-hover:scale-105"
                                        onError={(e) => {
                                            e.currentTarget.src = '/images/birthstones/garnet.png';
                                        }}
                                    />
                                </div>
                            </div>

                            {/* Product Info */}
                            <div className="px-4 py-6 flex flex-col flex-grow text-center">
                                <h3 className="text-2xl font-bold text-[#0a192f] mb-1">{stone.name}</h3>
                                <p className="text-[15px] text-[#a53737] font-medium mb-6">{stone.subtitle}</p>

                                <div className="w-full h-[1px] bg-gray-100 mb-6"></div>


                                <div className="mt-auto">



                                    {/* Button */}
                                    <button
                                        onClick={() => router.push(`/gemstones/stone/${stone.id}`)}
                                        className="w-full py-4 bg-gradient-to-r from-[#8B0000] via-[#8B0000] to-[#B8860B] bg-[length:200%_auto] hover:bg-right transition-all duration-500 text-white font-bold rounded-2xl flex items-center justify-center gap-2 text-[13px] uppercase tracking-wider shadow-md hover:shadow-lg hover:-translate-y-0.5">
                                        Enquiry Now
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>



            {/* Beautiful Elegant About Section */}
            {(monthData.about || (monthData.aboutList && monthData.aboutList.length > 0)) && (
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 mt-4">
                    <div className="relative bg-[#fffdfa] rounded-[2rem] shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)] border border-[#f0e8db] p-8 md:p-14 lg:p-20 overflow-hidden">
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
                                    {monthData.aboutList?.map((item: any, index: number) => (
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

                            <div className="bg-[#faf7f2] p-8 md:p-10 rounded-[1.5rem] border border-[#e6d5b8]/60 flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left shadow-sm">
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

            {/* Help Section */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
                <div className="bg-[#0a192f] rounded-3xl p-10 md:p-14 shadow-2xl text-center text-white relative overflow-hidden">
                    {/* Decorative background circles */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-white opacity-5"></div>
                    <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-white opacity-5"></div>

                    <h2 className="text-3xl font-bold mb-6 relative z-10 font-serif">
                        {monthData.help?.title || `Need Help Choosing the Right ${monthData.title.endsWith('s') ? monthData.title.slice(0, -1) : monthData.title}?`}
                    </h2>
                    <p className="text-gray-300 mb-8 max-w-3xl mx-auto relative z-10 text-lg leading-relaxed">
                        {monthData.help?.description || "Every individual is unique, and the most suitable gemstone may vary based on birth details and spiritual guidance. Share your "}
                        {(!monthData.help?.description && !monthData.help?.highlightText) && <span className="font-semibold text-yellow-400">Name, Date of Birth, Rashi, Preferred Gemstone Format, and Contact Number</span>}
                        {monthData.help?.highlightText && <span className="font-semibold text-yellow-400">{monthData.help.highlightText}</span>}
                        {(!monthData.help?.description) && " with Om Sritara."}
                    </p>

                    <div className="bg-white/10 p-5 rounded-xl inline-block backdrop-blur-md relative z-10 mb-8 border border-white/10">
                        <p className="text-white text-base md:text-lg font-medium">
                            {monthData.help?.subDescription || "Our team will provide personalized guidance and help you choose the gemstone that best aligns with your spiritual journey."}
                        </p>
                    </div>

                    <div className="relative z-10">
                        <button className="px-10 py-4 bg-yellow-500 text-yellow-950 font-bold rounded-full hover:bg-yellow-400 transition-all duration-300 shadow-lg transform hover:-translate-y-1 text-lg">
                            Get Your Personalized Recommendation Today
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const getStaticPaths: GetStaticPaths = async () => {
    const basePaths = Object.keys(allCategoriesData)?.map((category) => ({
        params: { month: category },
    }));

    const suffixPathsBirthstones = Object.keys(birthstonesData)?.map((month) => ({
        params: { month: `${month}-birthstone` },
    }));

    const suffixPathsPlanets = Object.keys(planetGemstonesData)?.map((planet) => ({
        params: { month: `${planet}-gemstones` },
    }));

    const exactPathsOther = Object.keys(otherGemstonesData)?.map((slug) => ({
        params: { month: slug },
    }));

    const exactPathsRashi = Object.keys(rashiGemstonesData)?.map((slug) => ({
        params: { month: slug },
    }));

    return {
        paths: [...basePaths, ...suffixPathsBirthstones, ...suffixPathsPlanets, ...exactPathsOther, ...exactPathsRashi],
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const monthParam = params?.month as string;

    const monthKey = monthParam.replace('-birthstone', '').replace('-gemstones', '');

    const monthData = (allCategoriesData as any)[monthKey] || (allCategoriesData as any)[monthParam];

    if (!monthData) {
        return {
            notFound: true,
        };
    }

    // Next.js throws a build error if getStaticProps returns 'redirect' while getStaticPaths has fallback: false.
    // To preserve the redirection logic without breaking the build, we pass the redirectUrl to the client.
    let redirectUrl: string | null = null;
    if (monthData.stones && monthData.stones.length > 0) {
        redirectUrl = `/gemstones/stone/${monthData.stones[0].id}`;
    }

    return {
        props: {
            monthData,
            month: monthKey,
            ...(redirectUrl && { redirectUrl })
        }
    };
};

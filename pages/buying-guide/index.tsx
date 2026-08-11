import BuyingGuide from '@/components/BuyingGuide';
import Head from 'next/head';

export default function BuyingGuidePage() {
    return (
        <>
            <Head>
                <title>Gemstone & Crystal Buying Guide | Om Sritara</title>
                <meta name="description" content="Discover how to choose the perfect gemstone or crystal based on your intentions, zodiac, or chakras with Om Sritara's comprehensive buying guide." />
            </Head>
            {/* Premium Banner Section */}
            <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden bg-[#0a192f]">
                {/* Background Image */}
                <div className="absolute inset-0 bg-[url('/img/gamsbanner1.webp')] bg-cover bg-center bg-no-repeat"></div>

                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-[#4a0e17]/70 to-[#0a192f]/90"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#0a192f] opacity-8"></div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 mb-4 tracking-wide font-serif drop-shadow-lg">
                        Gemstone Buying Guide
                    </h1>
                    <div className="w-24 h-1 bg-yellow-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-lg md:text-xl text-gray-200 font-medium max-w-2xl mx-auto leading-relaxed">
                        Discover the perfect crystal for your journey. Learn how to choose based on intention, astrology, and intuition.
                    </p>
                </div>
            </div>

            <BuyingGuide />


        </>
    );
}

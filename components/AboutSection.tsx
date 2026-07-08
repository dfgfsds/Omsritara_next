import React from 'react';
import HealingCrystalsSection from './HealingCrystalsSection';
import BrandStorySection from './BrandStorySection';

const AboutSection: React.FC = () => {

    return (
        <section className=" pt-5 pb-5 m-4">

            <div className="mx-auto max-w-5xl rounded-3xl border border-[#a5291b]/20 bg-gradient-to-b from-[#fff8f7] to-white p-6 md:p-10 shadow-sm">

                <h1 className="mb-6 text-3xl font-bold leading-tight text-[#a5291b] md:text-4xl">
                    Buy Spiritually Energized Healing Crystals, Spiritual Products &amp; Reiki Courses | Om Sritara
                </h1>

                <p className="mb-5 text-gray-700 leading-8">
                    Welcome to <span className="font-semibold text-[#a5291b]">Om Sritara</span>, a trusted destination for authentic spiritual healing, healing crystals, Reiki training, holistic wellness, and certified spiritual courses. Operating under Anandat Bhavati Private Limited, we are committed to helping individuals experience emotional healing, inner peace, spiritual growth, and positive transformation through ancient healing traditions and modern holistic practices.
                </p>

                <p className="mb-5 text-gray-700 leading-8">
                    Founded under the divine guidance of <span className="font-semibold text-[#a5291b]">Guru Matha</span>, an Ambal Upasaki, Reiki Master, and Spiritual Healer, Om Sritara was created with a simple mission—to make genuine spiritual knowledge, healing practices, and sacred energy tools accessible to everyone. Whether you are taking your first step into spirituality or expanding your healing journey, we provide the guidance, products, and education you need to move forward with confidence.
                </p>

                <p className="mb-5 text-gray-700 leading-8">
                    At Om Sritara, spirituality is more than a practice—it's a way of living with balance, awareness, and purpose. Our carefully selected collection of healing crystals, crystal bracelets, rings, pendants, Rudraksha malas, pendulums, spiritual statues, Reiki tools, chakra healing products, and meditation accessories is designed to support every stage of your spiritual journey.
                </p>

                <p className="mb-5 text-gray-700 leading-8">
                    What makes us different is our commitment to authenticity. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha before reaching you. This sacred preparation ensures that every crystal and spiritual product carries positive energy to support healing, protection, abundance, meditation, and emotional well-being.
                </p>

                <p className="text-gray-700 leading-8">
                    In addition to spiritually energized products, Om Sritara offers online and offline Reiki training, spiritual healing sessions, meditation guidance, Akashic Records, chakra healing, energy healing, spiritual counseling, and more than 24 certified spiritual courses. Our programs are available in Tamil and English, making spiritual learning accessible to students across India and around the world.
                </p>

            </div>

            {/* <HealingCrystalsSection/> */}

            <div className="w-full max-w-3xl mx-auto my-8 px-4">
                <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe
                        src="https://www.youtube.com/embed/Fx3LtSscbXY?si=Td4wmlIPUbT_4yDn"
                        title="Omsritara Introduction Video"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                        className="absolute top-0 left-0 w-full h-full"
                    ></iframe>
                </div>
            </div>
            <BrandStorySection />
        </section>
    );
};

export default AboutSection;

import React from 'react';

const AboutSection: React.FC = () => {

    return (
        <section className=" pt-5 pb-10 m-4">
            <div className="max-w-7xl mx-auto px-4 py-10 bg-gradient-to-br from-gray-50 to-gray-200 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.1)]">
                {/* Title Section */}
                <div className="text-center mb-8">
                    <h2 className="text-lg md:text-xl font-semibold text-gray-800 uppercase tracking-wide">
                        Our Brand Story
                    </h2>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-[#a5291b] mt-2">
                        Omsritara
                    </h1>
                </div>

                {/* Content Section */}
                <div className="space-y-6 text-gray-700 text-base md:text-lg leading-relaxed text-justify md:text-center">
                    <p>
                        Om Sritara is India’s trusted healing crystals shop online — a gift from
                        the divine to help every seeker find their way. Each piece is ethically
                        sourced, handpicked, and charged with healing vibes to guide your
                        spiritual journey.
                    </p>

                    <p>
                        Whether your path seeks unconditional love, abundant prosperity, strong
                        protection, or deep inner peace — our Reiki crystal collection is your
                        perfect companion. Experience the natural charm of Mother Earth through
                        raw stones and gemstones crafted into timeless jewelry.
                    </p>

                    <p>
                        Shop freely, heal through nature’s law, and awaken the power within you.
                        The energy that transforms your life could very well be{" "}
                        <span className="font-semibold text-[#a5291b]">Om Sritara</span> — the
                        finest online crystal shop in India.
                    </p>
                </div>
            </div>

{/* 
            <div className="max-w-5xl mx-auto text-center space-y-6 mt-4">
                <h2 className="text-xl md:text-2xl font-extrabold text-gray-900">
                    Buy Healing Crystals Online – Trusted, Tested & Energized
                </h2>

                <p className="text-base md:text-md leading-relaxed text-gray-700">
                    When you buy raw crystals online from <span className="font-semibold text-[#991b1b]">Om Sritara</span>, you’re not just buying a stone,
                    you’re bringing home a piece of Earth’s divine energy. Every crystal is:
                </p>

                <ul className="text-left max-w-2xl mx-auto list-disc list-inside space-y-1 text-gray-700">
                    <li>100% natural and ethically sourced</li>
                    <li>Cleansed and charged before shipping</li>
                    <li>Packed with intention and care</li>
                    <li>Energized using healing techniques</li>
                </ul>

                <p className="text-base md:text-md leading-relaxed text-gray-700">
                    At <span className="font-semibold text-[#991b1b]">Om Sritara</span>, all our products are personally charged and energized by
                    <span className="font-semibold"> Guru Matha</span>, a renowned Reiki Master. Each crystal undergoes a sacred three-day
                    energizing process, ensuring it carries pure, positive vibrations before reaching you.
                </p>

                <p className="text-base md:text-md leading-relaxed text-gray-700">
                    This careful spiritual process enhances the crystal’s natural energy, helping you experience deeper healing,
                    balance, and harmony in your daily life.
                </p>

                <p className="text-base md:text-md font-medium leading-relaxed text-gray-800">
                    Our mission is to deliver genuine, high-vibration crystals that truly support your spiritual and emotional healing journey.
                </p>
            </div> */}

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
        </section>
    );
};

export default AboutSection;

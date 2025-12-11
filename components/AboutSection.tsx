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
                    Om Sritara is India’s trusted healing crystals shop online, Energized healing crystals as a gift from the divine to help every seeker find their way. All of these are ethically sourced, handpicked, and charged with healing vibes to help you.
                    </p>

                    <p>
                     It doesn’t matter what nature your journey is: ⁠Unconditional love, abundance money overflow, strong protection, or deep inner peace. Our Reiki crystal products online collection is the perfect companion to strengthen your heartfelt intentions and bring you into vibrational harmony. Om Sritara welcomes you to experience the raw and rugged charm of Mother Earth through natural stones or the beauty of gemstones in jewelry and thereby connect with the timeless wisdom of nature to expedite your spiritual evolution.
                    </p>

                    <p>
                    Shop uninterruptedly, heal by nature’s law, and become aware of the power that lies within you. The energy that changes your life could very well be Om ‍‌‍‍‌‍‌‍‍‌Sritara. - The best online crystal shop in India.

                    </p>
                </div>
            </div>


           <section className="max-w-5xl mx-auto px-4 text-gray-800 py-10">

    <h2 className="text-3xl font-bold text-center text-rose-700 mb-6">
      Buy Healing Crystals Online <br/> <span className='text-xl text-gray-800 '> Trusted, Tested & Energized</span>
    </h2>

    <p className="text-lg leading-relaxed mb-4">
      When you buy raw crystals online from Om Sritara, you’re not just buying a stone, you’re bringing home a piece of Earth’s divine energy. Every crystal is:
    </p>

    <ul className="list-disc pl-6 space-y-2 text-base mb-6">
      <li>100% natural and ethically sourced</li>
      <li>Cleansed and charged before shipping</li>
      <li>Packed with intention and care</li>
      <li>Energized using healing techniques</li>
    </ul>

    <div className="bg-rose-50 border border-rose-100 rounded-lg p-5 mb-6">
      <p className="leading-relaxed">
       At Om Sritara, all our products are personally charged and energized by Guru Matha, a renowned Reiki Master. Each crystal undergoes a sacred three-day energizing process, ensuring it carries pure, positive vibrations before reaching you.
      </p>
      <p className="leading-relaxed mt-3">
        This careful spiritual process enhances the crystal’s natural energy, helping you experience deeper healing, balance, and harmony in your daily life.
      </p>
    </div>

    <p className="text-base leading-relaxed font-medium">
      Our mission is to deliver genuine, high-vibration crystals that truly support your spiritual and emotional healing journey.
    </p>

  </section>

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

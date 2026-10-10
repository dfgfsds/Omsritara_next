"use client";

import { useState } from "react";

export default function BrandStorySection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="rounded-3xl border border-[#a5291b]/20 bg-white p-6 md:p-8">
      <div
        className={`overflow-hidden transition-all duration-500 ${showMore ? "max-h-[8000px]" : "max-h-[380px]"
          }`}
      >
        <h2 className="mb-4 text-3xl font-bold text-[#a5291b]">
          Why Choose Omsritara for Healing & Spiritual Guidance?
        </h2>

        <p className="mb-4">
          Choosing the right spiritual guide and authentic products can make your healing journey more meaningful. At Omsritara, we bring together traditional wisdom, practical learning, and thoughtfully prepared spiritual resources to create a trusted experience for beginners and experienced spiritual seekers alike.
        </p>

        <p className="mb-4">
          Why Thousands of Spiritual Seekers Choose Us
        </p>

        <ul className="mb-6 list-disc space-y-2 pl-6">
          <li>Spiritually Energized Products Personally Energized by Guru Matha</li>
          <li>Authentic Spiritual Healing Services</li>
          <li>Ethically Sourced Healing Crystals</li>
          <li>Online & Offline Reiki Training</li>
          <li>24+ Certified Spiritual Courses</li>
          <li>Tamil & English Learning</li>
          <li>Personalized Spiritual Guidance</li>
          <li>Beginner-Friendly Programs</li>
          <li>Sacred Healing Traditions</li>
          <li>Trusted by Students Across India & Worldwide</li>
        </ul>

        <p className="mb-6">
          Whether your goal is emotional balance, spiritual protection, abundance, confidence, meditation support, or personal transformation, Omsritara offers authentic solutions aligned with your individual spiritual needs. Connect with us today to explore the right healing service, course, or spiritual product for your journey.
        </p>

        <h2 className="mb-4 text-3xl font-bold text-[#a5291b]">
          Our Brand Story
        </h2>

        <p className="mb-4">
          Omsritara was founded with a vision to create a trusted space where people can explore the true essence of spiritual healing. Inspired by timeless healing traditions and guided by the wisdom of Guru Matha, we have built a community centered on authenticity, compassion, and holistic well-being.
        </p>

        <p className="mb-4">
          Our spiritual foundation draws inspiration from the divine energies of Green Tara, Kwan Yin, Isis, and Goddess Fortuna, representing centuries of sacred wisdom that continue to inspire spiritual seekers around the world. These traditions form an important part of the values and spiritual approach we share at Omsritara.
        </p>

        <p className="mb-4">
          Today, Omsritara is more than a spiritual wellness brand. It is a welcoming space where individuals can discover authentic healing products, gain practical spiritual knowledge, learn powerful healing techniques, and receive compassionate guidance as they explore inner peace and self-discovery.
        </p>

        <p className="mb-4">
          Every product we offer and every course we teach is prepared with sincerity, sacred intention, and a genuine commitment to supporting your spiritual path. Whether you visit our center in Chennai or connect with us online from anywhere in the world, our purpose remains the same—to provide genuine spiritual guidance, authentic healing practices, and meaningful learning experiences.
        </p>

        <p>
          Begin your journey with Omsritara and explore healing, balance, and spiritual growth through authentic wisdom, sacred traditions, and practices that can become a meaningful part of your everyday life.
        </p>
        <div className="mt-12 space-y-8">

          {/* Spiritually Energized Products */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-gradient-to-br from-[#fff8f7] via-white to-[#fff5f3] shadow-sm">
            <div className="border-b border-[#a5291b]/10 bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Buy Healing Crystals & spiritual products online
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="leading-8 text-gray-700">
                At Omsritara, every product is thoughtfully chosen to support your spiritual and personal well-being. Explore healing crystals, crystal bracelets, rings, pendants, Rudraksha malas, pendulums, spiritual statues, Reiki tools, chakra healing products, meditation accessories, and sacred energy tools for balance, protection, prosperity, and inner peace.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                If you're looking to buy healing crystals online, our online crystal shop offers a carefully selected range for different spiritual practices and personal needs. Each product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha before reaching you.
              </p>
              
              <p className="mt-5 leading-8 text-gray-700">
                Whether you are beginning your spiritual journey or practicing healing techniques, these authentic products can complement meditation, chakra balancing, emotional healing, and spiritual growth with meaningful sacred intention.
              </p>
            </div>
          </div>

          {/* Sacred Three-Day Energizing Process */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="border-b border-[#a5291b]/10 px-6 py-5">
              <h2 className="text-2xl font-bold text-[#a5291b]">
                Sacred Three-Day Energizing Process
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="leading-8 text-gray-700">
                A distinctive part of the Omsritara experience is our Sacred Three-Day Energizing Process. Before any product is delivered, it follows a carefully maintained spiritual preparation intended to preserve its natural energy and strengthen its spiritual purpose.
              </p>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-[#a5291b]">
                  During this process:
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Products are spiritually cleansed to help remove unwanted energies.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Sacred rituals are performed with positive intentions.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Healing vibrations are infused through traditional spiritual practices.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Divine blessings are invoked for protection, healing, peace, and abundance.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4 md:col-span-2">
                    <p className="font-medium text-gray-800">
                      ✨ Each product is personally energized and blessed by Guru Matha before being carefully packed and shipped.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-l-4 border-[#a5291b] bg-[#fff8f7] p-5">
                <p className="leading-8 text-gray-700">
                  This meaningful process reflects Omsritara commitment to authenticity and careful preparation, helping every product reach you with positive spiritual energy and sacred intention.
                </p>
              </div>
            </div>
          </div>

        </div>
        <div className="mt-12 space-y-10">

          {/* Spiritual Healing Services */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Spiritual Healing Services in Chennai
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-6 leading-8 text-gray-700">
                Healing is a personal journey toward greater balance, awareness, and inner harmony. At Omsritara, our spiritual healing services bring together traditional healing practices and personalized guidance to support emotional well-being, personal transformation, and a deeper connection with yourself.
              </p>

              <h3 className="mb-4 text-lg font-semibold text-[#a5291b]">
                Our services include:
              </h3>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-[#fff8f7] p-3">Reiki Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Spiritual Counseling</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Akashic Records Reading</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Chakra Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Crystal Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Energy Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Aura Cleansing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Meditation Guidance</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Divine Guidance</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Numerology Consultation</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Angelic Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Quantum Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Shamanic Healing</div>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Each session is approached with compassion, personalized guidance, and sacred intention. Our services are designed to help you explore emotional and energetic blockages, gain greater clarity and confidence, and develop a stronger sense of spiritual awareness at your own pace.
              </p>
            </div>
          </div>

          {/* Spiritual Classes & Certified Courses */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Spiritual Classes & Certified Courses Online & Offline
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-6 leading-8 text-gray-700">
                Learning spiritual healing is a continuous journey, and Omsritara offers accessible online and offline classes in Tamil and English. From beginners to experienced practitioners, our courses combine traditional wisdom with practical learning to help you develop confidence and useful healing skills.
              </p>

              <h3 className="mb-4 text-lg font-semibold text-[#a5291b]">
                We offer more than 24 certified spiritual courses, including:
              </h3>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-[#fff8f7] p-3">Reiki Level 1</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Reiki Levels 2, 3 & 4</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Lama Fera Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Amadeus Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Akashic Records</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Crystal Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Chakra Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Angel Reiki</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Shamballa Reiki</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Kwan Yin Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Green Tara Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Quantum Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Pendulum Dowsing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Basic Numerology</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Sujok Therapy</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Shamanism</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Thanthrigam (Tantra)</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Ho'oponopono</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Angel & Archangel</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Switch Words & Angel Codes</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Goddess Fortuna</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Humkara with Haleem</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Pancha Pakshi</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Egyptian Cartouche</div>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Each course includes structured learning, practical demonstrations, study materials, and certification. Learn online from anywhere in the world or attend our training centre in Chennai with authentic guidance rooted in sacred traditions and the blessings of Guru Matha.
              </p>
            </div>
          </div>

          {/* Why Thousands Trust Omsritara */}
          <div className="rounded-3xl border border-[#a5291b]/15 bg-gradient-to-br from-[#fff8f7] to-white p-6 md:p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-[#a5291b]">
              Why Thousands Trust Omsritara for Spiritual Healing & Wellness
            </h2>

            <p className="mb-5 leading-8 text-gray-700">
              At Omsritara, trust comes from authenticity, quality, and genuine care. We believe meaningful spiritual healing begins with sincere intentions, trusted guidance, and respect for ancient traditions. Every service and product reflects our commitment to supporting your spiritual growth.
            </p>

            <p className="mb-5 leading-8 text-gray-700">
              Our healing crystals and spiritual products are carefully selected with purpose. They are ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized by Guru Matha, making Omsritara a trusted choice for authentic spiritual products and holistic healing solutions.
            </p>

            <p className="leading-8 text-gray-700">
              We also offer personalized guidance, practical learning, and supportive healing experiences for beginners and experienced practitioners. Whether you seek emotional balance, protection, meditation support, prosperity, or personal transformation, Omsritara supports your journey with authenticity and compassion.
            </p>
          </div>

          {/* Our Areas of Expertise */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Discover Our Spiritual Healing & Personal Growth Practices
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-6 leading-8 text-gray-700">
                Omsritara brings together traditional spiritual sciences and modern holistic practices to support balance, clarity, self-awareness, and personal growth. Our expertise covers a wide range of approaches for different spiritual and personal needs.
              </p>

              <h3 className="mb-4 text-lg font-semibold text-[#a5291b]">
                Our areas of expertise include:
              </h3>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-[#fff8f7] p-3">Reiki Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Crystal Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Chakra Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Energy Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Meditation</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Akashic Records</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Spiritual Counseling</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Divine Guidance</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Aura Cleansing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Angel Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Quantum Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Numerology</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Pendulum Dowsing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Shamanic Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Holistic Wellness</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Spiritual Protection</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Emotional Healing</div>
                <div className="rounded-xl bg-[#fff8f7] p-3">Conscious Living</div>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Our services and courses focus on practical knowledge, emotional well-being, self-awareness, and spiritual development, helping you explore practices that align with your individual journey.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 space-y-10">

          {/* Learn Online or Offline */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Online & Offline Spiritual Courses in Chennai
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-5 leading-8 text-gray-700">
                Learning should fit your schedule and preferred way of studying. Omsritara offers flexible online and offline spiritual classes and certification courses for learners at different stages of their spiritual journey.
              </p>

              <p className="mb-5 leading-8 text-gray-700">
                Our online programs let students from anywhere in the world learn through structured lessons, guided practice, study materials, and certification. For those who prefer hands-on learning, our offline training sessions in Chennai include live demonstrations, practical exercises, personal guidance, and interactive learning in a supportive environment.
              </p>

              <p className="leading-8 text-gray-700">
                All classes are available in Tamil and English, making spiritual education accessible to a wider community of learners.
              </p>
            </div>
          </div>

          {/* Serving India & Spiritual Seekers Worldwide */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-gradient-to-br from-[#fff8f7] to-white shadow-sm">
            <div className="px-6 py-5">
              <h2 className="text-2xl font-bold text-[#a5291b]">
                Spiritual Products & Healing Services Across India & Worldwide
              </h2>
            </div>

            <div className="px-6 pb-8">
              <p className="mb-5 leading-8 text-gray-700">
                Omsritara proudly serves customers and students across Chennai, Tamil Nadu, and India, while making our online products, spiritual healing services, and certification courses accessible to people around the world.
              </p>

              <p className="mb-5 leading-8 text-gray-700">
                Whether you are in India, Singapore, Malaysia, the United Arab Emirates, Australia, Canada, the United Kingdom, the United States, or elsewhere, you can explore our spiritually energized products, healing services, and learning programs from wherever you are.
              </p>

              <p className="leading-8 text-gray-700">
                Our goal is to make authentic spiritual knowledge and holistic healing more accessible, helping spiritual seekers connect with meaningful guidance and practices regardless of location.
              </p>
            </div>
          </div>

          {/* Our Commitment to Authenticity */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Authentic Spiritual Knowledge, Products & Healing Practices
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-5 leading-8 text-gray-700">
                Authenticity guides everything we do at Omsritara. From sourcing our healing crystals to creating our courses, we respect traditional spiritual practices while presenting them in a practical and accessible way for today’s seekers.
              </p>

              <h3 className="mb-4 text-lg font-semibold text-[#a5291b]">
                We are dedicated to providing:
              </h3>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Genuine Spiritual Knowledge
                </div>
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Authentic Healing Practices
                </div>
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Ethically Sourced Products
                </div>
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Spiritually Energized Healing Crystals
                </div>
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Compassionate Guidance
                </div>
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Practical Learning
                </div>
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Personalized Support
                </div>
                <div className="rounded-xl bg-[#fff8f7] p-3">
                  Continuous Student Assistance
                </div>
              </div>

              <p className="mt-6 leading-8 text-gray-700">
                Every product and service reflects our commitment to quality, trust, and spiritual integrity. Through a thoughtful blend of sacred traditions and practical guidance, we support individuals in developing a deeper connection with themselves and their spiritual path.
              </p>
            </div>
          </div>

          {/* Begin Your Spiritual Journey */}
          <div className="rounded-3xl bg-[#a5291b] p-8 text-white shadow-lg">
            <h2 className="mb-5 text-3xl font-bold">
              Begin Your Spiritual Journey with Authentic Healing & Guidance
            </h2>

            <p className="mb-5 leading-8 text-white/90">
              Every spiritual journey begins with a meaningful first step. Whether you're looking for healing crystals, spiritual products, Reiki training, holistic healing, meditation, or certified spiritual courses, Omsritara offers trusted guidance and authentic solutions to support you along the way.
            </p>

            <p className="mb-5 leading-8 text-white/90">
              Explore our spiritually energized products, join our online or offline courses, and discover healing practices rooted in ancient wisdom. With the guidance of Guru Matha, you can access authentic support focused on balance, inner peace, and lasting spiritual growth.
            </p>
            
            <p className="mb-5 leading-8 text-white/90">
              Ready to begin your journey? Connect with Omsritara today and take your first step toward spiritual growth.
            </p>

            <p className="text-lg font-semibold tracking-wide">
              Discover. Heal. Transform. Grow with Omsritara.
            </p>
          </div>

        </div>

      </div>


      {!showMore && (
        <div className="pointer-events-none -mt-20 h-20 bg-gradient-to-t from-white to-transparent" />
      )}

      <button
        onClick={() => setShowMore(!showMore)}
        className="mt-4 rounded-full bg-[#a5291b] px-6 py-2 font-medium text-white transition hover:opacity-90"
      >
        {showMore ? "Read Less" : "Read More"}
      </button>
    </section>
  );
}
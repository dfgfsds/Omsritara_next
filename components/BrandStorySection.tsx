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
          Why Choose Om Sritara?
        </h2>

        <p className="mb-4">
          Choosing the right spiritual guide and authentic products is an important part of your healing journey. At Om Sritara, we combine traditional wisdom with practical learning to provide a trusted and meaningful experience.
        </p>

        <p className="mb-4">
          Why thousands of spiritual seekers choose us:
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
          Whether you're looking for emotional balance, spiritual protection, abundance, confidence, meditation support, or personal transformation, Om Sritara provides authentic solutions tailored to your spiritual needs.
        </p>

        <h2 className="mb-4 text-3xl font-bold text-[#a5291b]">
          Our Brand Story
        </h2>

        <p className="mb-4">
          Om Sritara was founded with a vision to create a trusted space where people can experience the true essence of spiritual healing. Inspired by timeless healing traditions and guided by the wisdom of Guru Matha, we have built a community that values authenticity, compassion, and holistic well-being.
        </p>

        <p className="mb-4">
          Our spiritual foundation is inspired by the divine energies of Green Tara, Kwan Yin, Isis, and Goddess Fortuna, reflecting centuries of sacred wisdom that continue to guide and inspire seekers around the world.
        </p>

        <p className="mb-4">
          Today, Om Sritara has become more than a spiritual wellness brand. It is a place where individuals can discover authentic healing products, gain practical spiritual knowledge, learn powerful healing techniques, and receive compassionate guidance on their path toward inner peace and self-discovery.
        </p>

        <p className="mb-4">
          Every product we offer and every course we teach is prepared with sincerity, sacred intention, and a commitment to helping you reconnect with your higher self. Whether you visit our center in Chennai or join us online from anywhere in the world, our goal remains the same—to support your journey with genuine spiritual guidance, authentic healing practices, and products that are personally energized by Guru Matha.
        </p>

        <p>
          Begin your journey with Om Sritara and experience healing, balance, and spiritual growth through authentic wisdom and sacred traditions.
        </p>
        <div className="mt-12 space-y-8">

          {/* Spiritually Energized Products */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-gradient-to-br from-[#fff8f7] via-white to-[#fff5f3] shadow-sm">
            <div className="border-b border-[#a5291b]/10 bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Spiritually Energized Products
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="leading-8 text-gray-700">
                At Om Sritara, every product is chosen with care to support your
                spiritual and personal well-being. Our collection includes healing
                crystals, crystal bracelets, rings, pendants, Rudraksha malas,
                pendulums, spiritual statues, Reiki tools, chakra healing products,
                meditation accessories, and sacred energy tools for people seeking
                balance, protection, prosperity, and inner peace.
              </p>

              <p className="mt-5 leading-8 text-gray-700">
                We believe that a spiritual product should offer more than beauty—it
                should carry positive energy and sacred intention. That's why every
                product is ethically sourced, spiritually cleansed, energized through
                sacred rituals, and personally energized by Guru Matha before it
                reaches you. Whether you're beginning your spiritual journey or already
                practicing healing techniques, you'll find authentic products that
                support meditation, chakra balancing, emotional healing, and spiritual
                growth.
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
                One of the qualities that makes Om Sritara unique is our Sacred
                Three-Day Energizing Process. Before any product is delivered, it goes
                through a carefully followed spiritual preparation designed to preserve
                its natural energy and enhance its spiritual purpose.
              </p>

              <div className="mt-8">
                <h3 className="mb-4 text-lg font-semibold text-[#a5291b]">
                  During this process:
                </h3>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Products are spiritually cleansed to remove unwanted energies.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Sacred rituals are performed with positive intentions.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Healing vibrations are infused through traditional spiritual
                      practices.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4">
                    <p className="font-medium text-gray-800">
                      ✨ Divine blessings are invoked for protection, healing, peace,
                      and abundance.
                    </p>
                  </div>

                  <div className="rounded-2xl bg-[#fff8f7] p-4 md:col-span-2">
                    <p className="font-medium text-gray-800">
                      ✨ Every product is personally energized and blessed by Guru
                      Matha before being carefully packed and shipped.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border-l-4 border-[#a5291b] bg-[#fff8f7] p-5">
                <p className="leading-8 text-gray-700">
                  This sacred process reflects our commitment to authenticity and
                  ensures every product reaches you with positive spiritual energy.
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
                Spiritual Healing Services
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-6 leading-8 text-gray-700">
                Healing is a journey of restoring balance to the mind, body, and spirit.
                At Om Sritara, we offer a range of spiritual healing services designed to
                support emotional well-being, personal transformation, and inner harmony
                through traditional healing practices.
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
                Each session is offered with compassion, personalized guidance, and
                sacred intention to help you overcome emotional and energetic blockages
                while creating greater clarity, confidence, and spiritual awareness.
              </p>
            </div>
          </div>

          {/* Spiritual Classes & Certified Courses */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Spiritual Classes & Certified Courses
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-6 leading-8 text-gray-700">
                Learning spiritual healing is a lifelong journey, and Om Sritara makes
                that journey accessible through online and offline classes in Tamil and
                English. Whether you're a beginner or an experienced practitioner, our
                programs combine traditional wisdom with practical learning to help you
                build confidence and real-world healing skills.
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
                Every course includes structured learning, practical demonstrations,
                study materials, and certification to help you confidently apply
                spiritual healing in your personal and professional life. Whether you
                choose to learn online from anywhere in the world or attend our training
                centre in Chennai, you'll receive authentic guidance rooted in sacred
                traditions and supported by the blessings of Guru Matha.
              </p>
            </div>
          </div>

          {/* Why Thousands Trust Om Sritara */}
          <div className="rounded-3xl border border-[#a5291b]/15 bg-gradient-to-br from-[#fff8f7] to-white p-6 md:p-8 shadow-sm">
            <h2 className="mb-6 text-2xl font-bold text-[#a5291b]">
              Why Thousands Trust Om Sritara
            </h2>

            <p className="mb-5 leading-8 text-gray-700">
              At Om Sritara, trust is built through authenticity, quality, and genuine
              care for every individual who chooses us. We believe that true spiritual
              healing begins with the right guidance, sincere intentions, and products
              prepared with respect for ancient traditions. Every service we provide and
              every product we offer reflects our commitment to helping people
              experience meaningful spiritual growth.
            </p>

            <p className="mb-5 leading-8 text-gray-700">
              Our healing crystals and spiritual products are not simply selected for
              their appearance. Every product is ethically sourced, spiritually
              cleansed, energized through sacred rituals, and personally energized by
              Guru Matha before reaching you. This sacred preparation makes Om Sritara a
              trusted choice for people seeking authentic spiritual products and
              holistic healing solutions.
            </p>

            <p className="leading-8 text-gray-700">
              Along with spiritually prepared products, we provide personalized
              guidance, practical learning, and supportive healing experiences for
              beginners and experienced practitioners alike. Whether you're searching
              for emotional balance, protection, meditation support, prosperity, or
              personal transformation, Om Sritara is here to support your journey with
              authenticity and compassion.
            </p>
          </div>

          {/* Our Areas of Expertise */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Our Areas of Expertise
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-6 leading-8 text-gray-700">
                Om Sritara brings together traditional spiritual sciences and modern
                holistic practices to help individuals achieve balance, clarity, and
                personal growth.
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
                Every service and course is designed to provide practical knowledge
                while encouraging self-awareness, emotional well-being, and spiritual
                development.
              </p>
            </div>
          </div>

        </div>

        <div className="mt-12 space-y-10">

          {/* Learn Online or Offline */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Learn Online or Offline
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-5 leading-8 text-gray-700">
                Learning should be flexible and accessible. That's why Om Sritara
                offers online and offline spiritual classes and certification courses
                to suit your schedule and learning style.
              </p>

              <p className="mb-5 leading-8 text-gray-700">
                Our online programs allow students from anywhere in the world to learn
                through structured lessons, guided practice, study materials, and
                certification. If you prefer hands-on learning, our offline training
                sessions in Chennai provide live demonstrations, practical exercises,
                personal guidance, and interactive learning in a supportive
                environment.
              </p>

              <p className="leading-8 text-gray-700">
                All classes are available in Tamil and English, making spiritual
                education accessible to a wider community of learners.
              </p>
            </div>
          </div>

          {/* Serving India & Spiritual Seekers Worldwide */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-gradient-to-br from-[#fff8f7] to-white shadow-sm">
            <div className="px-6 py-5">
              <h2 className="text-2xl font-bold text-[#a5291b]">
                Serving India & Spiritual Seekers Worldwide
              </h2>
            </div>

            <div className="px-6 pb-8">
              <p className="mb-5 leading-8 text-gray-700">
                Om Sritara proudly serves customers and students across Chennai,
                Tamil Nadu, India, while offering online products, spiritual healing
                services, and certification courses to people around the world.
              </p>

              <p className="mb-5 leading-8 text-gray-700">
                Whether you're in India, Singapore, Malaysia, the United Arab Emirates,
                Australia, Canada, the United Kingdom, the United States, or anywhere
                else, you can access our spiritually energized products, healing
                services, and learning programs from wherever you are.
              </p>

              <p className="leading-8 text-gray-700">
                Our goal is to make authentic spiritual knowledge and holistic healing
                available to everyone, regardless of location.
              </p>
            </div>
          </div>

          {/* Our Commitment to Authenticity */}
          <div className="overflow-hidden rounded-3xl border border-[#a5291b]/15 bg-white shadow-sm">
            <div className="bg-[#a5291b] px-6 py-4">
              <h2 className="text-2xl font-bold text-white">
                Our Commitment to Authenticity
              </h2>
            </div>

            <div className="p-6 md:p-8">
              <p className="mb-5 leading-8 text-gray-700">
                Authenticity is at the heart of everything we do. From sourcing our
                healing crystals to designing our courses, we remain committed to
                preserving the integrity of traditional spiritual practices while
                making them accessible to modern seekers.
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
                Every product and service reflects our promise to deliver quality,
                trust, and spiritual integrity. By combining sacred traditions with
                thoughtful guidance, we help individuals build a deeper connection
                with themselves and their spiritual path.
              </p>
            </div>
          </div>

          {/* Begin Your Spiritual Journey */}
          <div className="rounded-3xl bg-[#a5291b] p-8 text-white shadow-lg">
            <h2 className="mb-5 text-3xl font-bold">
              Begin Your Spiritual Journey with Om Sritara
            </h2>

            <p className="mb-5 leading-8 text-white/90">
              Every journey begins with a single step, and we're here to walk that path
              with you. Whether you're looking for healing crystals, spiritual products,
              Reiki training, holistic healing, meditation, or certified spiritual
              courses, Om Sritara offers trusted guidance and authentic solutions for
              every stage of your journey.
            </p>

            <p className="mb-5 leading-8 text-white/90">
              Explore our collection of spiritually energized products, join our online
              or offline courses, and experience healing practices rooted in ancient
              wisdom. With the guidance of Guru Matha, you'll receive authentic support
              designed to help you find balance, inner peace, and lasting spiritual
              growth.
            </p>

            <p className="text-lg font-semibold tracking-wide">
              Discover. Heal. Transform. Grow with Om Sritara.
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
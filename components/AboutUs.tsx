import Head from "next/head";
import logo from '@/public/logo.png';
import { useState } from "react";
import { ChevronDown } from "lucide-react";


const AboutUs = () => {
  const [active, setActive] = useState<number | null>(0);

  const faqs = [
    {
      question: "What spiritual healing services does Om Sritara offer?",
      answer:
        "Om Sritara offers Reiki Healing, Akashic Records Reading, Angelic Healing Therapy, Divine Guidance, Spiritual Counseling, Numerology Consultation, Shamanic Healing, Chakra Balancing, Aura Cleansing, Quantum Healing, Crystal Healing, Meditation, Energy Healing and Multidimensional Healing. We provide online and offline healing sessions, certification courses and holistic wellness programs in Tamil and English."
    },
    {
      question: "Does Om Sritara offer online Reiki classes and certification courses?",
      answer:
        "Yes. Om Sritara offers online and offline Reiki certification courses in Tamil and English for beginners and advanced practitioners. Each course includes structured learning materials, practical guidance, certification and continuous support."
    },
    {
      question: "Are Om Sritara's products authentic and spiritually energized?",
      answer:
        "Yes. Every product is carefully selected, ethically sourced, spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha before reaching you."
    },
    {
      question: "Who can join Om Sritara's spiritual courses?",
      answer:
        "Our courses are suitable for beginners, students, working professionals, yoga practitioners, Reiki healers, therapists, wellness coaches, meditation practitioners, spiritual seekers and anyone interested in personal transformation and spiritual growth."
    },
    {
      question: "Who leads Om Sritara's spiritual teachings and healing programs?",
      answer:
        "Om Sritara is guided by Guru Matha, a respected Ambal Upasaki, Reiki Master, Spiritual Healer and Divine Guide who leads healing sessions, counseling, certification courses and sacred healing practices."
    },
    {
      question: "Where is Om Sritara located, and do you provide services worldwide?",
      answer:
        "Om Sritara is located in Chennai, Tamil Nadu, India. We provide offline spiritual healing sessions, Reiki training, counseling, certification courses and meditation classes at our Chennai centre, along with online services for students worldwide."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://www.omsritara.in/about#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What spiritual healing services does Om Sritara offer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om Sritara, operating under Anandat Bhavati Private Limited, offers Reiki Healing, Akashic Records Reading, Angelic Healing Therapy, Divine Guidance, Spiritual Counseling, Numerology Consultation, Shamanic Healing, Chakra Balancing, Aura Cleansing, Quantum Healing, Crystal Healing, Meditation, Energy Healing and Multidimensional Healing through online and offline sessions in Tamil and English."
        }
      },
      {
        "@type": "Question",
        "name": "Does Om Sritara offer online Reiki classes and certification courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Om Sritara offers online and offline Reiki certification courses including Reiki Level 1, Reiki Levels 2, 3 & 4, Lama Fera Healing, Amadeus Healing, Angel Reiki, Shamballa Reiki, Akashic Records, Crystal Healing, Chakra Healing, Quantum Healing, Sujok Therapy, Green Tara Healing, Goddess Fortuna Healing, Ho'oponopono, Thanthrigam (Tantra) and many other certified spiritual healing programs."
        }
      },
      {
        "@type": "Question",
        "name": "Are Om Sritara's products authentic and spiritually energized?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Every product offered by Om Sritara is carefully selected, ethically sourced, spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha before reaching customers. This includes healing crystals, crystal bracelets, crystal rings, pendants, Rudraksha malas, meditation accessories, spiritual tools and sacred wellness products prepared to support healing, protection, positivity, abundance, meditation, chakra balancing and holistic well-being."
        }
      },
      {
        "@type": "Question",
        "name": "Who can join Om Sritara's spiritual courses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our spiritual courses are suitable for beginners, students, working professionals, yoga practitioners, Reiki healers, therapists, meditation practitioners, wellness coaches and anyone interested in spiritual healing, energy work, self-discovery, consciousness expansion and personal transformation. Most beginner courses require no previous experience."
        }
      },
      {
        "@type": "Question",
        "name": "Who leads Om Sritara's spiritual teachings and healing programs?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om Sritara is guided by Guru Matha, a respected Ambal Upasaki, Reiki Master, Spiritual Healer and Divine Guide. Under Guru Matha's guidance, authentic healing sessions, spiritual counseling, certification courses and sacred healing practices are conducted. Every spiritual product offered by Om Sritara is also personally energized and blessed by Guru Matha before reaching customers."
        }
      },
      {
        "@type": "Question",
        "name": "Where is Om Sritara located and do you provide services worldwide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Om Sritara is located in Chennai, Tamil Nadu, India. We provide offline spiritual healing sessions, Reiki training, certification courses, meditation classes and spiritual counseling in Chennai while offering online spiritual healing services, certification programs and spiritually energized products to students and spiritual seekers across India and worldwide."
        }
      }

    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://www.omsritara.in/#organization",
    "name": "Om Sritara",
    "legalName": "Anandat Bhavati Private Limited",
    "alternateName": [
      "Om Sritara Foundation",
      "Om Sritara Satsang"
    ],
    "url": "https://www.omsritara.in/",
    "logo": "https://www.omsritara.in/_next/static/media/logo.b7ef93ea.png",
    "image": "https://www.omsritara.in/img/omsritara_about.webp",
    "description": "Om Sritara, operating under Anandat Bhavati Private Limited, is a trusted spiritual healing and holistic wellness organization dedicated to guiding individuals toward spiritual awakening, emotional healing, energetic balance and inner transformation. Founded under the divine guidance of Guru Matha, we offer authentic Reiki training, spiritual healing services, Akashic Records Reading, Angelic Healing Therapy, Crystal Healing, Quantum Healing, Shamanic Healing, meditation, spiritual counseling, certification courses and holistic wellness programs. Every product offered by Om Sritara is spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha before reaching customers.",
    "slogan": "Discover. Heal. Transform. Awaken.",
    "founder": {
      "@type": "Person",
      "name": "Guru Matha",
      "jobTitle": "Ambal Upasaki, Reiki Master & Spiritual Healer"
    },
    "parentOrganization": {
      "@type": "Organization",
      "name": "Anandat Bhavati Private Limited"
    },
    "email": "info@omsritara.in",
    "telephone": "+91-7092372555",
    "foundingLocation": {
      "@type": "Place",
      "name": "Chennai, Tamil Nadu, India"
    },
    "areaServed": [
      {
        "@type": "Country",
        "name": "India"
      },
      {
        "@type": "Place",
        "name": "Worldwide"
      }
    ],
    "knowsAbout": [
      "Spiritual Healing",
      "Reiki",
      "Energy Healing",
      "Crystal Healing",
      "Healing Crystals",
      "Spiritually Energized Products",
      "Akashic Records",
      "Angelic Healing",
      "Shamanic Healing",
      "Quantum Healing",
      "Meditation",
      "Spiritual Counseling",
      "Holistic Wellness",
      "Chakra Healing",
      "Aura Cleansing",
      "Spiritual Protection",
      "Numerology",
      "Divine Guidance"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Om Sritara Spiritual Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Spiritual Healing Services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Reiki Certification Courses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "ProductCollection",
            "name": "Spiritually Energized Healing Products"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.instagram.com/omsritara",
      "https://www.facebook.com/omsritarafoundation/",
      "https://youtube.com/@OMSRITARA_",
      "https://chat.whatsapp.com/DLgWNrOzFwxGGYs70LT7dx",
      "https://x.com/omsritara",
      "https://www.instagram.com/om_sritara_satsang",
      "https://www.youtube.com/@OmsritaraSatsang",
      "https://www.facebook.com/omsritaraenglish",
      "https://www.linkedin.com/company/omsritara-satsang/about/",
      "https://maps.app.goo.gl/3BwEGKWBf8C6exL56"
    ]

  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://www.omsritara.in/#website",
    "name": "Om Sritara",
    "alternateName": [
      "Om Sritara Spiritual Healing",
      "Om Sritara Foundation",
      "Om Sritara Satsang"
    ],
    "description": "Om Sritara, operating under Anandat Bhavati Private Limited, offers authentic spiritual healing services, Reiki certification courses, spiritually energized products, holistic wellness programs, healing crystals, meditation, Akashic Records Reading, spiritual counseling and online & offline spiritual education. Every product is spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha before reaching customers.",
    "publisher": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "inLanguage": [
      "en",
      "ta"
    ],
    "keywords": [
      "Spiritual Healing",
      "Reiki Training",
      "Spiritually Energized Products",
      "Guru Matha",
      "Healing Crystals",
      "Holistic Wellness",
      "Akashic Records",
      "Crystal Healing",
      "Meditation",
      "Online Spiritual Courses"
    ],
    "about": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "copyrightHolder": {
      "@id": "https://www.omsritara.in/#organization"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.omsritara.in/#localbusiness",
    "name": "Om Sritara",
    "url": "https://www.omsritara.in/",
    "image": "https://www.omsritara.in/img/omsritara_about.webp",
    "logo": "https://www.omsritara.in/_next/static/media/logo.b7ef93ea.png",
    "description":
      "Om Sritara is a trusted spiritual healing centre in Chennai operating under Anandat Bhavati Private Limited. Guided by Guru Matha, we offer Reiki training, spiritual healing services, Akashic Records Reading, Angelic Healing Therapy, meditation, crystal healing, holistic wellness courses and spiritually energized products.",
    "priceRange": "₹₹",
    "telephone": "+91-7092372555",
    "email": "info@omsritara.in",

    "address": {
      "@type": "PostalAddress",
      "streetAddress": "46, Giri Road, T. Nagar",
      "addressLocality": "Chennai",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600017",
      "addressCountry": "IN"
    },

    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 13.0409,
      "longitude": 80.2337
    },

    "founder": {
      "@type": "Person",
      "name": "Guru Matha",
      "jobTitle": "Ambal Upasaki, Reiki Master & Spiritual Healer"
    },

    "parentOrganization": {
      "@id": "https://www.omsritara.in/#organization"
    },

    "availableLanguage": ["English", "Tamil"],

    "sameAs": [
      "https://www.instagram.com/omsritara",
      "https://www.facebook.com/omsritarafoundation/",
      "https://youtube.com/@OMSRITARA_",
      "https://x.com/omsritara",
      "https://www.instagram.com/om_sritara_satsang",
      "https://www.youtube.com/@OmsritaraSatsang",
      "https://www.facebook.com/omsritaraenglish",
      "https://www.linkedin.com/company/omsritara-satsang/about/"
    ]
  };
  const aboutPageSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://www.omsritara.in/about",
    "url": "https://www.omsritara.in/about",
    "name": "About Om Sritara",
    "headline":
      "About Om Sritara – Trusted Spiritual Healing Centre, Reiki Training, Holistic Wellness & Spiritually Energized Products",

    "description":
      "Learn about Om Sritara, operating under Anandat Bhavati Private Limited and guided by Guru Matha. Discover authentic spiritual healing services, Reiki certification courses, spiritually energized products, healing crystals, holistic wellness programs, meditation, Akashic Records and online & offline spiritual education.",

    "isPartOf": {
      "@id": "https://www.omsritara.in/#website"
    },

    "about": {
      "@id": "https://www.omsritara.in/#organization"
    },

    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": "https://www.omsritara.in/img/omsritara_about.webp"
    },

    "publisher": {
      "@id": "https://www.omsritara.in/#organization"
    },

    "inLanguage": ["en", "ta"],

    "keywords": [
      "About Om Sritara",
      "Guru Matha",
      "Spiritual Healing",
      "Reiki Training",
      "Spiritually Energized Products",
      "Crystal Healing",
      "Healing Crystals",
      "Holistic Wellness",
      "Akashic Records",
      "Meditation",
      "Spiritual Counseling",
      "Energy Healing"
    ]
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.omsritara.in/about#breadcrumb",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.omsritara.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About Om Sritara",
        "item": "https://www.omsritara.in/about"
      }
    ]
  };
  return (

    <>
      <Head>
        <title>
          About Om Sritara | Spiritual Healing, Reiki & Holistic Wellness
        </title>

        <meta
          name="description"
          content="Learn about Om Sritara, a trusted spiritual healing centre under Anandat Bhavati Private Limited offering Reiki training, healing services and spiritually energized products personally energized and blessed by Guru Matha with online & offline certification courses and holistic wellness."
        />

        <meta
          name="keywords"
          content="Om Sritara, About Om Sritara, Anandat Bhavati Private Limited, Guru Matha, Spiritually Energized Products, Blessed by Guru Matha, Spiritual Healing, Spiritual Healing Centre, Reiki Training, Reiki Courses, Online Reiki Classes, Reiki Course Chennai, Energy Healing, Holistic Healing, Holistic Wellness, Crystal Healing, Healing Crystals, Energized Healing Crystals, Crystal Bracelets, Crystal Rings, Rudraksha Mala, Sacred Spiritual Products, Ethically Sourced Crystals, Akashic Records, Angelic Healing, Shamanic Healing, Quantum Healing, Divine Guidance, Spiritual Counseling, Meditation Classes, Chakra Healing, Aura Cleansing, Spiritual Courses India, Online Spiritual Courses, Tamil Reiki Classes, Spiritual Wellness"
        />

        <link
          rel="canonical"
          href="https://www.omsritara.in/about"
        />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="About Om Sritara | Spiritual Healing, Reiki & Holistic Wellness"
        />
        <meta
          property="og:description"
          content="Discover Om Sritara's authentic spiritual healing services, Reiki training and spiritually energized products personally energized and blessed by Guru Matha, along with holistic wellness courses and sacred healing traditions."
        />
        <meta
          property="og:url"
          content="https://www.omsritara.in/about"
        />
        <meta
          property="og:image"
          content="https://www.omsritara.in/img/omsritara_about.webp"
        />
        <meta property="og:site_name" content="Om Sritara" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="About Om Sritara | Spiritual Healing & Reiki Training"
        />
        <meta
          name="twitter:description"
          content="Explore Om Sritara's authentic spiritual healing services, Reiki certification courses, and spiritually energized products personally energized and blessed by Guru Matha."
        />
        <meta
          name="twitter:image"
          content="https://www.omsritara.in/img/omsritara_about.webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                organizationSchema,
                websiteSchema,
                localBusinessSchema,
                faqSchema,
                aboutPageSchema,
                breadcrumbSchema
              ]
            })
          }}
        />
      </Head>

      <section className="relative overflow-hidden bg-white py-16 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">

            <h1 className="mb-6 text-xl font-bold leading-tight text-[#a5291b] md:text-3xl">
              About Om Sritara – Trusted Spiritual Healing Centre, Reiki Training,
              Holistic Wellness & Spiritually Energized Products
            </h1>

            <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
              <p>
                At Om Sritara, operating under Anandat Bhavati Private Limited, we are
                dedicated to guiding individuals toward spiritual awakening,
                emotional healing, energetic balance and inner transformation through
                authentic ancient wisdom, sacred energy practices and holistic wellness.
              </p>

              <p>
                Founded under the divine guidance of Guru Matha, Om Sritara serves as
                a trusted spiritual sanctuary where traditional healing sciences are
                thoughtfully integrated into modern life. Our mission is to help
                seekers reconnect with their higher consciousness, restore energetic
                harmony and experience lasting spiritual growth through authentic
                healing, spiritual education and personalized guidance.
              </p>

              <p>
                We offer a comprehensive range of spiritual healing services, Reiki
                training, holistic wellness courses, meditation programs, healing
                crystals, spiritually energized products, and sacred spiritual tools
                that support physical, emotional, mental and spiritual well-being.
              </p>

              <p>
                Whether you are beginning your spiritual journey or seeking advanced
                healing knowledge, Om Sritara provides online and offline
                certification courses in Tamil and English, making authentic
                spiritual education accessible to students across Chennai, Tamil Nadu,
                India and around the world.
              </p>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-[#faf7f6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-16">

            {/* Our Spiritual Foundation */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Our Spiritual Foundation
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Om Sritara is deeply rooted in timeless spiritual traditions inspired
                  by the compassionate and transformative divine energies of Green Tara,
                  Kwan Yin, Isis and Goddess Fortuna. These sacred traditions guide
                  every healing session, spiritual practice, certification course and
                  product we offer.
                </p>

                <p>
                  Under the intuitive leadership of Guru Matha—a respected Ambal
                  Upasaki, Reiki Master, Spiritual Healer and Divine Guide—our
                  teachings combine ancient wisdom with practical spiritual
                  applications that empower individuals to heal emotionally,
                  strengthen energetic protection, cultivate abundance, develop inner
                  peace and align with their soul's highest purpose.
                </p>

                <p>
                  Every healing session, course, consultation and product reflects our
                  unwavering commitment to authenticity, compassion, divine guidance
                  and spiritual integrity.
                </p>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid gap-8 lg:grid-cols-2">

              <div className="rounded-3xl border border-[#a5291b]/10 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-3xl font-bold text-[#a5291b]">
                  Our Mission
                </h2>

                <div className="space-y-6 text-base leading-8 text-gray-700">
                  <p>
                    Our mission is to awaken spiritual consciousness and support
                    personal transformation by making authentic spiritual knowledge,
                    sacred healing techniques and holistic wellness practices
                    accessible to everyone.
                  </p>

                  <p>
                    Through powerful healing modalities, certified training programs,
                    ethically sourced spiritual products, and compassionate guidance,
                    we help individuals overcome emotional, spiritual, mental and
                    energetic blockages while promoting inner peace, self-awareness,
                    positive energy and lifelong spiritual growth.
                  </p>
                </div>
              </div>

              <div className="rounded-3xl border border-[#a5291b]/10 bg-white p-8 shadow-sm">
                <h2 className="mb-6 text-3xl font-bold text-[#a5291b]">
                  Our Vision
                </h2>

                <div className="space-y-6 text-base leading-8 text-gray-700">
                  <p>
                    Our vision is to become one of India's most trusted and globally
                    recognized spiritual wellness organizations where ancient healing
                    sciences are preserved, practiced and shared with authenticity and
                    integrity.
                  </p>

                  <p>
                    We aspire to inspire individuals worldwide to embrace conscious
                    living, discover their true spiritual potential, experience divine
                    protection, emotional healing, abundance and self-discovery
                    through authentic spiritual education, sacred healing practices
                    and holistic wellness.
                  </p>
                </div>
              </div>

            </div>

            {/* What We Offer */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                What We Offer
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Om Sritara provides a complete ecosystem for spiritual learning,
                  healing, holistic wellness, and personal transformation through
                  healing services, spiritually energized products, certification
                  courses and ongoing guidance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-16">

            {/* Spiritual Healing Services */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Spiritual Healing Services
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Our personalized healing sessions are carefully designed to restore
                  energetic balance, emotional well-being, mental clarity and
                  spiritual harmony.
                </p>

                <p>We offer authentic healing services including:</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    "Reiki Healing",
                    "Spiritual Counseling",
                    "Divine Guidance",
                    "Akashic Records Reading",
                    "Angelic Healing Therapy",
                    "Numerology Consultation",
                    "Shamanic Healing",
                    "Chakra Balancing",
                    "Aura Cleansing",
                    "Quantum Healing",
                    "Energy Healing",
                    "Multidimensional Healing",
                    "Spiritual Protection",
                    "Consciousness Expansion",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-[#faf7f6] p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Every healing session is conducted with compassion, authenticity,
                  sacred intention and personalized spiritual guidance to support
                  your unique journey toward healing and transformation.
                </p>
              </div>
            </div>

            {/* Spiritual Healing Products */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Spiritual Healing Products
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Explore our carefully selected collection of spiritually aligned
                  healing products designed to support meditation, emotional healing,
                  positive energy, abundance, protection and spiritual growth.
                </p>

                <p>Our collection includes:</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    "Natural Healing Crystals",
                    "Energized Healing Crystals",
                    "Crystal Bracelets",
                    "Crystal Rings",
                    "Crystal Pendants",
                    "Rudraksha Malas",
                    "Healing Malas",
                    "Spiritual Statues",
                    "Energy Tools",
                    "Meditation Accessories",
                    "Sacred Spiritual Items",
                    "Holistic Wellness Products",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-[#faf7f6] p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Every product offered by Om Sritara is ethically sourced,
                  carefully selected, spiritually cleansed, energized through sacred
                  rituals and personally energized and blessed by Guru Matha before
                  reaching you. Each product is prepared with sacred intention to
                  carry positive spiritual vibrations that support healing,
                  protection, prosperity, emotional balance, meditation, chakra
                  alignment and holistic well-being.
                </p>
              </div>
            </div>

            {/* Certified Spiritual Courses */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Certified Spiritual Courses (Online & Offline)
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Our certification courses are designed for beginners, spiritual
                  seekers, healers, therapists and advanced practitioners who wish
                  to develop professional healing skills while deepening their
                  spiritual awareness.
                </p>

                <p>Popular certification programs include:</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    "Reiki Level 1",
                    "Reiki Levels 2, 3 & 4",
                    "Lama Fera Healing",
                    "Amadeus Healing",
                    "Akashic Records",
                    "Angel Reiki",
                    "Shamballa Reiki",
                    "Sujok Therapy",
                    "Kwan Yin Healing",
                    "Green Tara Healing",
                    "Egyptian Cartouche",
                    "Quantum Healing",
                    "Crystal Healing",
                    "Chakra Healing",
                    "Pendulum Dowsing",
                    "Basic Numerology",
                    "Pancha Pakshi",
                    "Thanthrigam (Tantra)",
                    "Switch Words & Angel Codes",
                    "Angel & Archangel Healing",
                    "Goddess Fortuna Healing",
                    "Humkara with Haleem",
                    "Ho'oponopono",
                    "Shamanism",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-[#faf7f6] p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Every course includes structured learning materials, practical
                  demonstrations, live guidance, certification and continuous
                  support to help students confidently apply authentic healing
                  techniques in their personal and professional lives.
                </p>
              </div>
            </div>

            {/* Online & Offline Spiritual Classes */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Online & Offline Spiritual Classes
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Our instructor-led spiritual classes combine ancient healing
                  traditions, sacred wisdom and practical hands-on learning to help
                  students confidently practice healing techniques in their daily
                  lives.
                </p>

                <p>Students can choose from classes in:</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                  {[
                    "Reiki Training",
                    "Crystal Healing",
                    "Chakra Healing",
                    "Energy Healing",
                    "Meditation",
                    "Spiritual Protection",
                    "Aura Cleansing",
                    "Holistic Wellness Practices",
                    "Divine Feminine Healing",
                    "Spiritual Development",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-[#faf7f6] p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Courses are available online worldwide and offline at our Chennai
                  training centre, with instruction in both Tamil and English,
                  making authentic spiritual education accessible to learners
                  everywhere.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-[#faf7f6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-16">

            {/* Why Choose Om Sritara */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Why Choose Om Sritara?
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Thousands of spiritual seekers trust Om Sritara because we combine
                  authentic spiritual traditions, compassionate guidance and practical
                  learning experiences that support lifelong personal transformation.
                </p>

                <p>Our Advantages</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    "Authentic Spiritual Healing Methods",
                    "Guided by Guru Matha",
                    "Traditional Sacred Healing Systems",
                    "Certified Reiki & Healing Courses",
                    "Personalized Spiritual Guidance",
                    "Online & Offline Learning Options",
                    "Tamil & English Training",
                    "Practical Hands-on Learning",
                    "Ethically Sourced Spiritual Products",
                    "Every Product Personally Energized & Blessed by Guru Matha",
                    "Spiritually Cleansed & Energized Healing Crystals",
                    "Beginner-Friendly Programs",
                    "International Student Support",
                    "Lifetime Spiritual Learning Benefits",
                    "Continuous Learning & Community Support",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-white p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Areas of Expertise */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Our Areas of Expertise
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  We specialize in a wide range of spiritual and holistic wellness
                  disciplines, including:
                </p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4">
                  {[
                    "Reiki Healing",
                    "Energy Healing",
                    "Crystal Healing",
                    "Chakra Balancing",
                    "Aura Cleansing",
                    "Meditation",
                    "Akashic Records",
                    "Spiritual Counseling",
                    "Angel Healing",
                    "Shamanic Healing",
                    "Quantum Healing",
                    "Multidimensional Healing",
                    "Divine Feminine Healing",
                    "Numerology",
                    "Spiritual Protection",
                    "Consciousness Expansion",
                    "Holistic Wellness",
                    "Spiritual Growth",
                    "Conscious Living",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-white p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Our goal is to help every student develop practical healing
                  abilities while fostering emotional well-being, energetic balance,
                  spiritual awareness, inner peace and higher consciousness.
                </p>
              </div>
            </div>

            {/* Crystal Promise */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                The Om Sritara Crystal Promise
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Our healing crystals are more than beautiful natural stones, they
                  are prepared with sacred intention, authentic spiritual practices
                  and positive divine energy.
                </p>

                <p>
                  Every crystal undergoes a complete spiritual preparation process
                  before reaching you.
                </p>

                <p>Why Choose Our Crystals?</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                  {[
                    "100% Natural & Ethically Sourced",
                    "Spiritually Cleansed",
                    "Energized Through Sacred Rituals",
                    "Charged with Positive Spiritual Energy",
                    "Carefully Packed with Spiritual Intention",
                    "Every Crystal is Personally Energized & Blessed by Guru Matha",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-white p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Every healing crystal is spiritually cleansed, energized through
                  sacred rituals and personally energized and blessed by Guru Matha
                  before reaching you, ensuring it carries positive spiritual
                  vibrations that support emotional balance, chakra healing,
                  protection, abundance, meditation, prosperity and holistic
                  well-being.
                </p>
              </div>
            </div>

            {/* Worldwide */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Serving Chennai, India & Students Worldwide
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Om Sritara proudly serves students through offline training in
                  Chennai, Tamil Nadu, while also providing online learning and
                  spiritual guidance worldwide.
                </p>

                <p>Students from:</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-7">
                  {[
                    "Chennai",
                    "Tamil Nadu",
                    "Bangalore",
                    "Hyderabad",
                    "Mumbai",
                    "Delhi",
                    "Kerala",
                    "Singapore",
                    "Malaysia",
                    "Dubai",
                    "Australia",
                    "Canada",
                    "United Kingdom",
                    "United States",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-white p-4 text-center"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  can access our spiritual healing services, certification courses,
                  consultations and holistic wellness programs from anywhere in the
                  world.
                </p>
              </div>
            </div>

            {/* Commitment */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Our Commitment to Authenticity
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Authenticity is the foundation of everything we do.
                </p>

                <p>We are committed to providing:</p>

                <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-5">
                  {[
                    "Genuine Spiritual Knowledge",
                    "Traditional Healing Systems",
                    "Ethical Spiritual Practices",
                    "Compassionate Guidance",
                    "High-Quality Learning Resources",
                    "Authentic Spiritual Healing Products",
                    "Ethically Sourced Crystals",
                    "Spiritually Energized Products",
                    "Personalized Spiritual Support",
                    "Continuous Student Guidance",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-xl border border-[#a5291b]/10 bg-white p-4"
                    >
                      {item}
                    </div>
                  ))}
                </div>

                <p>
                  Every service, product, certification course and healing session is
                  offered with sincerity, authenticity, and sacred intention. Every
                  product available at Om Sritara is spiritually cleansed, energized
                  through sacred rituals, and personally energized and blessed by
                  Guru Matha before reaching you, ensuring genuine spiritual energy,
                  positive vibrations, protection, abundance, healing and holistic
                  support throughout your spiritual journey.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-6xl space-y-16">

            {/* Learn Anytime, Anywhere */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                Learn Anytime, Anywhere
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  Our flexible learning model allows students to choose the learning
                  experience that best suits their lifestyle.
                </p>

                <div className="grid gap-8 lg:grid-cols-2">
                  <div className="rounded-3xl border border-[#a5291b]/10 bg-[#faf7f6] p-8">
                    <h3 className="mb-6 text-2xl font-semibold text-[#a5291b]">
                      Online Learning
                    </h3>

                    <div className="space-y-3">
                      {[
                        "HD Video Lessons",
                        "Live Interactive Sessions",
                        "Study Materials",
                        "Certification",
                        "Flexible Self-Paced Learning",
                        "Tamil & English Support",
                        "Lifetime Learning Access",
                      ].map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-3xl border border-[#a5291b]/10 bg-[#faf7f6] p-8">
                    <h3 className="mb-6 text-2xl font-semibold text-[#a5291b]">
                      Offline Learning
                    </h3>

                    <div className="space-y-3">
                      {[
                        "Classroom Training",
                        "Practical Demonstrations",
                        "Live Guidance",
                        "Interactive Workshops",
                        "Personalized Mentorship",
                        "Certification",
                      ].map((item) => (
                        <div key={item}>{item}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <p>
                  Whether you prefer learning from home or attending in person
                  sessions, Om Sritara provides a complete, authentic and immersive
                  spiritual learning experience.
                </p>
              </div>
            </div>

            {/* Om Sritara Promise */}
            <div>
              <h2 className="mb-6 text-3xl font-bold text-[#a5291b] md:text-4xl">
                The Om Sritara Promise
              </h2>

              <div className="space-y-6 text-base leading-8 text-gray-700 md:text-lg">
                <p>
                  What makes Om Sritara unique is our unwavering commitment to
                  authenticity, spiritual integrity, compassionate guidance and
                  personalized healing.
                </p>

                <p>
                  Every healing session, spiritual consultation, certification course
                  and product is offered with sincere divine intention.
                </p>

                <p>
                  Every product offered by Om Sritara is spiritually cleansed,
                  energized through sacred rituals and personally energized and
                  blessed by Guru Matha before it reaches you. This sacred process
                  ensures every product carries positive spiritual vibrations that
                  support healing, protection, prosperity, emotional balance,
                  meditation, abundance and holistic well-being.
                </p>

                <p>
                  We believe true transformation begins with authentic wisdom,
                  dedicated practice, divine guidance and spiritually energized tools
                  that help individuals awaken their highest potential.
                </p>
              </div>
            </div>

            {/* Begin Your Spiritual Journey */}
            <div className="rounded-3xl bg-[#a5291b] p-8 text-white md:p-12">
              <h2 className="mb-6 text-3xl font-bold md:text-4xl">
                Begin Your Spiritual Journey with Om Sritara
              </h2>

              <div className="space-y-6 text-base leading-8 md:text-lg">
                <p>
                  Your spiritual journey begins with the right knowledge, guidance,
                  healing support and spiritually energized tools.
                </p>

                <p>
                  Whether you are looking for spiritual healing services, Reiki
                  certification courses, Akashic Records training, crystal healing
                  courses, chakra balancing, meditation programs, holistic wellness
                  education, spiritual counseling or spiritually energized healing
                  products personally energized by Guru Matha, Om Sritara offers
                  trusted solutions for every stage of your spiritual path.
                </p>

                <p>
                  Join our growing global community of spiritual seekers and
                  experience authentic healing, personal transformation, energetic
                  balance, spiritual awakening, and lifelong learning through our
                  healing services, certification programs, and sacred products.
                </p>

                <p className="text-xl font-semibold">
                  Discover. Heal. Transform. Awaken.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
      <section className="bg-[#faf7f6] py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold text-[#a5291b] md:text-5xl">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden rounded-2xl border border-[#a5291b]/10 bg-white shadow-sm"
                >
                  <button
                    onClick={() =>
                      setActive(active === index ? null : index)
                    }
                    className="flex w-full items-center justify-between p-6 text-left"
                  >
                    <span className="pr-4 text-lg font-semibold text-gray-900">
                      {faq.question}
                    </span>

                    <ChevronDown
                      className={`h-5 w-5 text-[#a5291b] transition-transform duration-300 ${active === index ? "rotate-180" : ""
                        }`}
                    />
                  </button>

                  {active === index && (
                    <div className="border-t border-[#a5291b]/10 px-6 py-5">
                      <p className="leading-8 text-gray-700">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

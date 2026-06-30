import React, { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import CourseCard from '@/components/CourseCard';
import { ChevronDown, ChevronLeft, ChevronRight, Heading1 } from 'lucide-react';
import { COURSES_DATA } from '../../data/courses';

export interface CourseContent {
  name: string;
  description: string;
  benefits: string[];
}

export interface Course {
  id: string;
  banner: string;
  en: CourseContent;
  ta: CourseContent;
}
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What are the best spiritual healing certification courses available online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Om Sri Tara offers Reiki, Lama Fera, Akashic Records, Chakra Healing, Numerology, Quantum Healing and many certified spiritual healing courses online and offline.",
      },
    },
    {
      "@type": "Question",
      "name": "Are these courses beginner friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Most courses are suitable for beginners and include complete training with certification."
      }
    },
    {
      "@type": "Question",
      "name": "Do all courses include certification?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Every course includes certification after successful completion."
      }
    },
    {
      "@type": "Question",
      "name": "Can I learn online?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All courses are available in online and offline modes."
      }
    },
    {
      "@type": "Question",
      "name": "Which languages are available?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Courses are available in Tamil and English."
      }
    }
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.omsritara.in",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Courses",
      item: "https://www.omsritara.in/courses",
    },
  ],
};

const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": "https://www.omsritara.in/courses#itemlist",
  name: "Online & Offline Spiritual Healing Certification Courses",
  url: "https://www.omsritara.in/courses",
  numberOfItems: 24,
  itemListOrder: "https://schema.org/ItemListOrderAscending",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "item": {
        "@type": "Course",
        "name": "Usui Reiki Level 1 Course",
        "url": "https://www.omsritara.in/courses/reiki-level-1"
      }
    },
    {
      "@type": "ListItem",
      "position": 2,
      "item": {
        "@type": "Course",
        "name": "Usui Reiki Levels 2, 3 & 4 Course",
        "url": "https://www.omsritara.in/courses/reiki-level-2-3-4"
      }
    },
    {
      "@type": "ListItem",
      "position": 3,
      "item": {
        "@type": "Course",
        "name": "Lama Fera Healing Course",
        "url": "https://www.omsritara.in/courses/lama-fera-healing"
      }
    },
    {
      "@type": "ListItem",
      "position": 4,
      "item": {
        "@type": "Course",
        "name": "Amadeus Healing Course",
        "url": "https://www.omsritara.in/courses/amadeus-healing-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 5,
      "item": {
        "@type": "Course",
        "name": "Akashic Records Course",
        "url": "https://www.omsritara.in/courses/akashic-records-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 6,
      "item": {
        "@type": "Course",
        "name": "Sujok Therapy Course",
        "url": "https://www.omsritara.in/courses/sujok-therapy-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 7,
      "item": {
        "@type": "Course",
        "name": "Humkara with Haleem Course",
        "url": "https://www.omsritara.in/courses/humkara-with-haleem-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 8,
      "item": {
        "@type": "Course",
        "name": "Kwan Yin Healing Course",
        "url": "https://www.omsritara.in/courses/kwan-yin-healing-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 9,
      "item": {
        "@type": "Course",
        "name": "Egyptian Cartouche Course",
        "url": "https://www.omsritara.in/courses/egyptian-cartouche-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 10,
      "item": {
        "@type": "Course",
        "name": "Pancha Pakshi Course",
        "url": "https://www.omsritara.in/courses/pancha-pakshi-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 11,
      "item": {
        "@type": "Course",
        "name": "Shamanism Course",
        "url": "https://www.omsritara.in/courses/shamanism-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 12,
      "item": {
        "@type": "Course",
        "name": "Switch Words & Angel Codes Course",
        "url": "https://www.omsritara.in/courses/switch-words-angel-codes-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 13,
      "item": {
        "@type": "Course",
        "name": "Angel Reiki Course",
        "url": "https://www.omsritara.in/courses/angel-reiki-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 14,
      "item": {
        "@type": "Course",
        "name": "Shamballa Reiki Course",
        "url": "https://www.omsritara.in/courses/shamballa-reiki-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 15,
      "item": {
        "@type": "Course",
        "name": "Angel & Archangel Course",
        "url": "https://www.omsritara.in/courses/angel-and-archangel-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 16,
      "item": {
        "@type": "Course",
        "name": "Green Tara Course",
        "url": "https://www.omsritara.in/courses/green-tara-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 17,
      "item": {
        "@type": "Course",
        "name": "Goddess Fortuna Course",
        "url": "https://www.omsritara.in/courses/goddess-fortuna-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 18,
      "item": {
        "@type": "Course",
        "name": "Basic Numerology Course",
        "url": "https://www.omsritara.in/courses/basic-numerology-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 19,
      "item": {
        "@type": "Course",
        "name": "Chakras Healing Course",
        "url": "https://www.omsritara.in/courses/chakras-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 20,
      "item": {
        "@type": "Course",
        "name": "Crystal Healing Course",
        "url": "https://www.omsritara.in/courses/crystals-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 21,
      "item": {
        "@type": "Course",
        "name": "Pendulum Dowsing Course",
        "url": "https://www.omsritara.in/courses/pendulum-dowsing-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 22,
      "item": {
        "@type": "Course",
        "name": "Ho'oponopono Course",
        "url": "https://www.omsritara.in/courses/hooponopono-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 23,
      "item": {
        "@type": "Course",
        "name": "Quantum Healing Course",
        "url": "https://www.omsritara.in/courses/quantum-healing-course"
      }
    },
    {
      "@type": "ListItem",
      "position": 24,
      "item": {
        "@type": "Course",
        "name": "Thanthrigam (Tantra) Course",
        "url": "https://www.omsritara.in/courses/thanthrigam-course"
      }
    }
  ]
};
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.omsritara.in/#website",
  url: "https://www.omsritara.in/",
  name: "Om Sri Tara",
  publisher: {
    "@id": "https://www.omsritara.in/#organization",
  },
  inLanguage: ["en", "ta"],
};
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.omsritara.in/#organization",
  name: "Om Sri Tara",
  alternateName: [
    "Om Sri Tara Foundation",
    "Om Sri Tara Satsang",
  ],
  url: "https://www.omsritara.in/",
  logo: "https://www.omsritara.in/_next/static/media/logo.b7ef93ea.png",
  description:
    "Om Sri Tara offers certified spiritual healing courses including Reiki, Lama Fera, Akashic Records, Quantum Healing, Chakra Healing, Numerology, Crystal Healing, and holistic wellness programs in Tamil and English.",
  sameAs: [
    "https://www.instagram.com/omsritara",
    "https://www.facebook.com/omsritarafoundation/",
    "https://youtube.com/@OMSRITARA_",
    "https://chat.whatsapp.com/DLgWNrOzFwxGGYs70LT7dx",
    "https://x.com/omsritara",
    "https://www.instagram.com/om_sritara_satsang",
    "https://www.youtube.com/@OmsritaraSatsang",
    "https://www.facebook.com/omsritaraenglish",
    "https://www.linkedin.com/company/omsritara-satsang/about/",
    "https://maps.app.goo.gl/3BwEGKWBf8C6exL56",
  ],
};
const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.omsritara.in/#localbusiness",
  name: "Om Sri Tara",
  url: "https://www.omsritara.in/",
  image: "https://www.omsritara.in/_next/static/media/logo.b7ef93ea.png",
  telephone: "+91-7092372555",
  email: "info@omsritara.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "46, Giri Rd, T. Nagar",
    addressLocality: "Chennai",
    addressRegion: "Tamil Nadu",
    postalCode: "600017",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "13.0409",
    longitude: "80.2337",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Chennai",
    },
    {
      "@type": "State",
      name: "Tamil Nadu",
    },
    {
      "@type": "Country",
      name: "India",
    },
  ],
  sameAs: [
    "https://www.instagram.com/omsritara",
    "https://www.facebook.com/omsritarafoundation/",
    "https://youtube.com/@OMSRITARA_",
    "https://chat.whatsapp.com/DLgWNrOzFwxGGYs70LT7dx",
    "https://x.com/omsritara",
    "https://www.instagram.com/om_sritara_satsang",
    "https://www.youtube.com/@OmsritaraSatsang",
    "https://www.facebook.com/omsritaraenglish",
    "https://www.linkedin.com/company/omsritara-satsang/about/",
    "https://maps.app.goo.gl/3BwEGKWBf8C6exL56",
  ],
};

export default function CoursesPage() {
  const [language, setLanguage] = useState<'en' | 'ta'>('en');
  const [displayedCourses] = useState(COURSES_DATA);

  return (
    <>
      <Head>
        <title>
          Online & Offline Spiritual Healing Courses with Certification | Reiki,
          Lama Fera & More | Om Sri Tara
        </title>

        <meta
          name="description"
          content="Explore 24+ certified spiritual healing courses including Reiki, Lama Fera, Akashic Records, Chakra Healing, Numerology, Quantum Healing and more. Online & Offline training in Tamil & English."
        />

        <link
          rel="canonical"
          href="https://www.omsritara.in/courses"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(faqSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(itemListSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="Online & Offline Spiritual Healing Courses with Certification | Om Sri Tara"
        />
        <meta
          property="og:description"
          content="Learn Reiki, Lama Fera, Akashic Records, Chakra Healing and 24+ certified spiritual healing courses online & offline."
        />
        <meta
          name="keywords"
          content="Spiritual Healing Courses, Spiritual Courses India, Online Spiritual Healing Course, Offline Spiritual Healing Course, Spiritual Certification Course, Reiki Course, Usui Reiki Level 1, Reiki Master Course, Lama Fera Course, Akashic Records Course, Chakra Healing Course, Crystal Healing Course, Quantum Healing Course, Numerology Course, Tantra Course, Thanthrigam Course, Pendulum Dowsing Course, Ho'oponopono Course, Angel Reiki Course, Shamballa Reiki Course, Green Tara Course, Kwan Yin Healing Course, Amadeus Healing Course, Sujok Therapy Course, Egyptian Cartouche Course, Pancha Pakshi Course, Shamanism Course, Switch Words Course, Angel Codes Course, Angel and Archangel Course, Goddess Fortuna Course, Humkara with Haleem Course, Meditation Course, Energy Healing Course, Holistic Healing Course, Spiritual Wellness Course, Healing Certification, International Certification, Online Reiki Training, Tamil Spiritual Courses, English Spiritual Courses, Video Based Spiritual Course, Spiritual Learning Platform, Om Sri Tara Courses, Om Sri Tara Foundation, Chennai Spiritual Courses, Best Spiritual Healing Institute India"
        />
        <meta
          property="og:url"
          content="https://www.omsritara.in/courses"
        />
        <meta
          property="og:image"
          content="https://www.omsritara.in//img/courses/ReikiLevel1.webp"
        />
        <meta property="og:site_name" content="Om Sri Tara" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <meta
          name="twitter:title"
          content="Online & Offline Spiritual Healing Courses | Om Sri Tara"
        />
        <meta
          name="twitter:description"
          content="Explore certified Reiki, Lama Fera, Akashic Records, Chakra Healing and 24+ online & offline spiritual healing courses."
        />
        <meta
          name="twitter:image"
          content="https://www.omsritara.in/img/courses/ReikiLevel1.webp"
        />
      </Head>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-50 to-red-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-start mb-6">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                {language === 'en' ? 'Our Courses' : 'எங்கள் பாடநெறிகள்'}
              </p>
              <h1 className="text-2xl md:text-3xl  text-gray-800 mb-2">
                {language === 'en' ? 'Online & Offline Spiritual Healing Courses with Certification | Reiki, Lama Fera, Akashic Records & More' : 'ஆன்லைன் & ஆஃப்லைன் சான்றிதழ் ஆன்மீக ஹீலிங் பயிற்சிகள் | ரெய்கி, லாமா ஃபெரா, ஆகாஷிக் ரெக்கார்ட்ஸ் மற்றும் பல'}
              </h1>
              <p className="text-gray-600 text-md">
                {language === 'en'
                  ? 'Discover certified online and offline spiritual healing courses designed to help you master Reiki, Lama Fera, Akashic Records, Chakra Healing, Numerology, Quantum Healing, Tantra, Crystal Healing, and many other ancient healing systems.'
                  : 'ரெய்கி, லாமா ஃபெரா, ஆகாஷிக் ரெக்கார்ட்ஸ், சக்ரா ஹீலிங், எண்கணிதம் (Numerology), குவாண்டம் ஹீலிங், தந்திரா, கிரிஸ்டல் ஹீலிங் மற்றும் பல பண்டைய ஆன்மீக ஹீலிங் முறைகளில் நிபுணத்துவம் பெற உதவும் சான்றளிக்கப்பட்ட ஆன்லைன் மற்றும் ஆஃப்லைன் ஆன்மீக ஹீலிங் பயிற்சிகளை அறிந்துகொள்ளுங்கள்.'}
              </p>
            </div>

            {/* Language Switcher */}
            <div className="flex gap-2">
              <button
                onClick={() => setLanguage('en')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${language === 'en'
                  ? 'bg-[#a5291b] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                English
              </button>
              <button
                onClick={() => setLanguage('ta')}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${language === 'ta'
                  ? 'bg-[#a5291b] text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
              >
                தமிழ்
              </button>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl md:text-3xl font-bold  text-gray-800 mt-6 text-center">
        {language === 'en' ? 'Explore Our Certified Spiritual Healing Courses' : 'எங்களின் சான்றளிக்கப்பட்ட ஆன்மீக ஹீலிங் பயிற்சிகளை அறிந்துகொள்ளுங்கள்'}
      </h2>
      {/* Courses Grid Section */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {displayedCourses.length > 0 ? (
          <>
            {/* Grid Layout - 4 columns on desktop, 2 on tablet, 1 on mobile */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {displayedCourses.map((course) => (
                <CourseCard
                  key={course.id}
                  id={course.id}
                  name={language === 'en' ? course.en.name : course.ta.name}
                  banner={course.banner}
                  description={language === 'en' ? course.en.description : course.ta.description}
                  language={language}
                />
              ))}
            </div>

            {/* Course Count */}
            <div className="text-center text-gray-600 mt-8">
              <p className="text-sm">
                {language === 'en'
                  ? `Showing ${displayedCourses.length} courses`
                  : `${displayedCourses.length} பாடநெறிகள் காட்டப்படுகிறது`
                }
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-gray-600">
              {language === 'en'
                ? 'No courses available at the moment'
                : 'தற்போது எந்த பாடநெறிகளும் கிடைக்கவில்லை'}
            </p>
          </div>
        )}
      </div>
      <div className="max-w-7xl mx-auto px-4 py-16">
        {language === 'en' ? (
          <>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Introduction
              </h3>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Om Sri Tara is a trusted spiritual learning platform offering:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[
                "24+ Certification Courses",
                "Online & Offline Training",
                "Tamil & English",
                "Video + Book",
                "Expert Trainers",
                "Lifetime Knowledge",
                "Spiritual Growth",
                "Energy Healing",
                "Meditation",
                "Holistic Wellness",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                அறிமுகம்:
              </h3>

              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Om Sri Tara-வை நம்பகமான ஆன்மீகக் கல்வி வழங்கும் தளமாக அறிமுகப்படுத்துங்கள்:
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
              {[
                "24+ சான்றளிக்கப்பட்ட பயிற்சிகள்",
                "ஆன்லைன் & ஆஃப்லைன் பயிற்சி",
                "தமிழ் & ஆங்கிலம்",
                "வீடியோ + பாடப்புத்தகம்",
                "நிபுணர் பயிற்சியாளர்கள்",
                "வாழ்நாள் முழுவதும் பயன்படும் அறிவு",
                "ஆன்மீக வளர்ச்சி",
                "ஆற்றல் ஹீலிங்",
                "தியானம்",
                "முழுமையான நலவாழ்வு",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <p className="font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Why Learn Spiritual Healing with Om Sri Tara */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            {language === 'en'
              ? 'Why Learn Spiritual Healing with Om Sri Tara?'
              : 'Om Sri Tara-வில் ஆன்மீக ஹீலிங் ஏன் கற்க வேண்டும்?'}
          </h2>

          <p className="text-lg text-gray-600 leading-relaxed">
            {language === 'en'
              ? 'Our certification programs combine ancient spiritual wisdom with practical healing techniques. Every course includes structured learning, certification, video lessons, and study materials suitable for beginners and experienced practitioners.'
              : 'எங்களின் சான்றளிக்கப்பட்ட பயிற்சித் திட்டங்கள், பண்டைய ஆன்மீக ஞானத்தையும் நடைமுறை ஹீலிங் நுட்பங்களையும் ஒருங்கிணைக்கின்றன. ஒவ்வொரு பாடத்திலும் கட்டமைக்கப்பட்ட கற்றல் முறை, சான்றிதழ், வீடியோ வகுப்புகள் மற்றும் படிப்புப் பொருட்கள் இடம்பெறுகின்றன. இப்பயிற்சிகள் தொடக்கநிலையினருக்கும் அனுபவமிக்க பயிற்சியாளர்களுக்கும் ஏற்ற வகையில் வடிவமைக்கப்பட்டுள்ளன.'}
          </p>
        </div>
      </section>

      {/* Benefits of Our Certification Courses */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {language === 'en'
              ? 'Benefits of Our Certification Courses'
              : 'எங்களின் சான்றளிக்கப்பட்ட பயிற்சிகளின் நன்மைகள்'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {(language === 'en'
              ? [
                'Online & Offline Learning',
                'International Certification',
                'Practical Training',
                'Lifetime Access',
                'Beginner Friendly',
                'Tamil & English',
                'Video + Book',
                'Affordable Pricing',
                'Personal Growth',
                'Spiritual Development',
              ]
              : [
                'ஆன்லைன் & ஆஃப்லைன் கற்றல்',
                'சர்வதேச அங்கீகார சான்றிதழ்',
                'நடைமுறை பயிற்சி',
                'வாழ்நாள் முழுவதும் அணுகல்',
                'தொடக்கநிலையினருக்கு ஏற்றது',
                'தமிழ் & ஆங்கிலம்',
                'வீடியோ + பாடப்புத்தகம்',
                'அனைவருக்கும் ஏற்ற கட்டணத்தில்',
                'தனிப்பட்ட வளர்ச்சி',
                'ஆன்மீக வளர்ச்சி',
              ]
            ).map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 text-center shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Om Sri Tara */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {language === 'en'
              ? 'Why Choose Om Sri Tara?'
              : 'ஏன் Om Sri Tara-வை தேர்வு செய்ய வேண்டும்?'}
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {(language === 'en'
              ? [
                '24+ Spiritual Courses',
                'Expert Guidance',
                'Practical Learning',
                'Affordable Fees',
                'Certification Included',
                'Trusted Spiritual Training',
                'Tamil & English Support',
                'Online & Offline Classes',
                'Lifetime Learning',
              ]
              : [
                '24+ ஆன்மீக பயிற்சிகள்',
                'நிபுணர்களின் வழிகாட்டுதல்',
                'நடைமுறை அடிப்படையிலான கற்றல்',
                'அனைவருக்கும் ஏற்ற கட்டணங்கள்',
                'சான்றிதழ் வழங்கப்படும்',
                'நம்பகமான ஆன்மீக பயிற்சி',
                'தமிழ் & ஆங்கில மொழி ஆதரவு',
                'ஆன்லைன் & ஆஃப்லைன் வகுப்புகள்',
                'வாழ்நாள் முழுவதும் கற்றல்',
              ]
            ).map((item, index) => (
              <div
                key={index}
                className="bg-white border rounded-lg p-4 text-center shadow-sm"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">
            {language === 'en'
              ? 'Frequently Asked Questions'
              : 'அடிக்கடி கேட்கப்படும் கேள்விகள்'}
          </h2>

          <div className="space-y-4">
            {language === 'en' ? (
              <>
                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    What are the best spiritual healing certification courses available online?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Om Sri Tara offers certified Reiki, Lama Fera, Akashic Records,
                    Chakra Healing, Numerology, Quantum Healing, Crystal Healing,
                    and many other spiritual healing courses available online and offline.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    Are these healing courses suitable for beginners?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Yes. Most courses are beginner-friendly and require no previous experience.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    Do I receive a certificate after completing the course?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Yes. Every course includes certification after successful completion.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    Can I learn these spiritual courses online?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Yes. Every course is available Online and Offline with Video + Book.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    Which languages are available?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Courses are available in English and Tamil.
                  </p>
                </details>
              </>
            ) : (
              <>
                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    1. ஆன்லைனில் கிடைக்கும் சிறந்த ஆன்மீக ஹீலிங் சான்றிதழ் பயிற்சிகள் எவை?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    Om Sri Tara-வில் ரெய்கி, லாமா ஃபெரா, ஆகாஷிக் ரெக்கார்ட்ஸ்,
                    சக்ரா ஹீலிங், எண்கணிதம், குவாண்டம் ஹீலிங், கிரிஸ்டல் ஹீலிங்
                    மற்றும் பல ஆன்மீக ஹீலிங் சான்றிதழ் பயிற்சிகள் ஆன்லைன் மற்றும்
                    ஆஃப்லைன் முறைகளில் வழங்கப்படுகின்றன.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    2. இந்த ஹீலிங் பயிற்சிகள் தொடக்கநிலையினருக்கு ஏற்றதா?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    ஆம். எங்களின் பெரும்பாலான பயிற்சிகள் தொடக்கநிலையினருக்கு
                    ஏற்றவை. முன் அனுபவம் தேவையில்லை.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    3. பாடநெறியை முடித்த பிறகு சான்றிதழ் கிடைக்குமா?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    ஆம். ஒவ்வொரு பாடத்தையும் வெற்றிகரமாக முடித்த பிறகு
                    சான்றிதழ் வழங்கப்படும்.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    4. இந்த ஆன்மீக பயிற்சிகளை ஆன்லைனில் கற்க முடியுமா?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    ஆம். ஒவ்வொரு பாடமும் வீடியோ + பாடப்புத்தகத்துடன் ஆன்லைன்
                    மற்றும் ஆஃப்லைன் முறைகளில் கிடைக்கிறது.
                  </p>
                </details>

                <details className="group border border-gray-200 rounded-xl p-5 bg-white">
                  <summary className="cursor-pointer font-semibold text-lg list-none flex justify-between items-center">
                    5. எந்த மொழிகளில் பயிற்சிகள் கிடைக்கின்றன?
                    <span className="group-open:rotate-180 transition-transform"><ChevronDown /></span>
                  </summary>
                  <p className="mt-4 text-gray-600">
                    பயிற்சிகள் ஆங்கிலம் மற்றும் தமிழ் மொழிகளில் வழங்கப்படுகின்றன.
                  </p>
                </details>
              </>
            )}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#a5291b] text-white text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            {language === 'en'
              ? 'Start Your Spiritual Healing Journey Today'
              : 'இன்றே உங்கள் ஆன்மீக ஹீலிங் பயணத்தை தொடங்குங்கள்'}
          </h2>

          <button className="px-8 py-3 bg-white text-[#a5291b] rounded-lg font-semibold hover:opacity-90 transition">
            {language === 'en' ? 'Enroll Now' : 'இப்போதே பதிவு செய்யுங்கள்'}
          </button>
        </div>
      </section>

    </>
  );
};


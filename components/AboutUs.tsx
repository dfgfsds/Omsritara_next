import Head from "next/head";
import logo from '@/public/logo.png';
const AboutUs = () => {

  return (
    <>
      {/* =======================
                 SEO / HEAD SECTION
            ======================== */}
      <Head>
        <title>About OmSri Tara | Spiritual Healing & Reiki Learning Center</title>
        <meta
          name="description"
          content="Discover Om Sri Tara, a sanctuary for holistic transformation led by Guru Matha. Explore Reiki courses, energy healing, and buy energized crystals online."
        />

        {/* Primary SEO Tags */}
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta
          name="keywords"
          content="Om Sri Tara, spiritual healing center, Reiki learning center, Reiki courses, energy healing, holistic transformation, Guru Matha, spiritual guidance, energized crystals"
        />

        {/* Open Graph Tags */}
        <meta
          property="og:title"
          content="About OmSri Tara | Spiritual Healing & Reiki Learning Center"
        />
        <meta
          property="og:description"
          content="Explore Om Sri Tara — a holistic healing sanctuary offering Reiki courses, energy healing, spiritual guidance, and energized crystals."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.omsritara.in/about" />
        <meta
          property="og:image"
          content={`https://www.omsritara.in/${logo.src}`}
        />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About OmSri Tara | Spiritual Healing & Reiki Learning Center"
        />
        <meta
          name="twitter:description"
          content="A sanctuary for healing, Reiki learning, and spiritual transformation guided by Guru Matha."
        />
        <meta
          name="twitter:image"
          content={`https://www.omsritara.in/${logo.src}`}
        />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.omsritara.in/about" />

        {/* Structured Data (JSON-LD) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Om Sri Tara",
              "url": "https://www.omsritara.in",
              "logo": `https://www.omsritara.in/${logo.src}`,
              "description":
                "Om Sri Tara is a spiritual healing sanctuary offering Reiki courses, energy healing, spiritual guidance, and energized crystals.",
              "founder": {
                "@type": "Person",
                "name": "Guru Matha",
              },
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+91-8989052020",
                  "contactType": "customer service",
                  "areaServed": "IN",
                  "availableLanguage": ["English", "Tamil"],
                },
              ],
              "address": {
                "@type": "PostalAddress",
                "streetAddress":
                  "OMSRITARA, 46 Giri Rd, Satyamurthy Nagar, T. Nagar, Chennai, Tamil Nadu",
                "addressLocality": "Chennai",
                "addressRegion": "TN",
                "postalCode": "600017",
                "addressCountry": "IN",
              },
              "sameAs": [
                "https://www.facebook.com/omsritarafoundation/",
                "https://www.instagram.com/omsritara/",
              ],
            }),
          }}
        />

      </Head>

      <section className="py-12 px-4 md:px-12 lg:px-24 bg-white text-gray-800">
        <div className="max-w-5xl mx-auto">

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-[#a5291b]">
            Who We Are
          </h2>

          {/* Intro */}
          <p className="mb-6 text-lg leading-relaxed">
            At <b>Om Sri Tara</b>, we are dedicated to guiding individuals toward spiritual awakening, emotional healing, and inner transformation through sacred energy practices and ancient wisdom. Operating under Anant Bavati Pvt Ltd, Om Sri Tara serves as a trusted spiritual sanctuary where traditional healing sciences are thoughtfully integrated into modern life.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            Founded with the divine guidance of Guru Matha, our mission is to help seekers reconnect with their higher consciousness, restore energetic balance, and experience true spiritual growth. We provide authentic healing services, spiritual counseling, Reiki training, crystal healing solutions, and multidimensional therapies that empower individuals to live with clarity, peace, and purpose.
          </p>

          {/* Spiritual Foundation */}
          <h3 className="text-2xl font-semibold text-[#a5291b] mb-4">
            Our Spiritual Foundation
          </h3>

          <p className="mb-6 text-lg leading-relaxed">
            Om Sri Tara is deeply rooted in sacred healing traditions inspired by divine feminine energies including Green Tara, Kwan Yin, Isis, and Fortuna. Every healing session, spiritual practice, and course we offer is designed to nurture emotional well-being, energetic protection, abundance, and soul alignment.
          </p>

          <p className="mb-6 text-lg leading-relaxed">
            Under the intuitive leadership of Guru Matha — a respected Ambal Upasaki, Reiki Master, and spiritual healer — we continue to guide individuals through transformative spiritual journeys with compassion, authenticity, and divine wisdom.
          </p>

          {/* Mission */}
          <h3 className="text-2xl font-semibold text-[#a5291b] mb-4">
            Our Mission
          </h3>

          <p className="mb-10 text-lg leading-relaxed">
            Our mission is to awaken spiritual consciousness and support personal transformation through powerful healing modalities, sacred teachings, and energy alignment practices. We strive to create a positive impact by helping individuals overcome emotional, spiritual, and energetic blockages through holistic healing methods.
          </p>

          {/* Vision */}
          <h3 className="text-2xl font-semibold text-[#a5291b] mb-4">
            Our Vision
          </h3>

          <p className="text-lg leading-relaxed mb-10">
            Our vision is to become a globally recognized spiritual and healing center where ancient spiritual sciences are made accessible to everyone seeking peace, healing, protection, and self-discovery. We aim to inspire individuals to embrace their spiritual path and unlock their highest potential.
          </p>

          {/* Services */}
          <h3 className="text-2xl font-semibold text-[#a5291b] my-4">
            Our Spiritual Services & Courses
          </h3>

          <p className="text-lg leading-relaxed mb-4">
            We offer a wide range of spiritual healing services and certified training programs, including:
          </p>

          <ul className="list-disc pl-6 space-y-2 text-base mb-8">
            <li>Reiki Healing & Reiki Training</li>
            <li>Akashic Records Reading</li>
            <li>Angelic Healing Therapy</li>
            <li>Numerology Consultation</li>
            <li>Shamanic Healing Practices</li>
            <li>Divine Guidance & Spiritual Counseling</li>
            <li>Healing Crystals & Energy Tools</li>
          </ul>

          {/* Crystals */}
          <section className="max-w-5xl mx-auto px-4 text-gray-800 py-2">

            <h1 className="text-2xl font-semibold text-start text-[#a5291b] my-4">
              Energized Healing Crystals
            </h1>

            <p className="text-lg leading-relaxed mb-4">
              At Om Sri Tara, we provide natural, ethically sourced, and spiritually energized healing crystals designed to support emotional balance, positivity, and energetic harmony. Every crystal undergoes a sacred cleansing and energizing process before reaching you.
            </p>

            <h3 className="text-2xl font-semibold text-[#a5291b] my-4">
              Why Choose Our Crystals?
            </h3>

            <ul className="list-disc pl-6 space-y-2 text-base mb-6">
              <li>100% Natural & Ethically Sourced</li>
              <li>Cleansed and Charged with Positive Energy</li>
              <li>Energized through Sacred Rituals</li>
              <li>Carefully Packed with Spiritual Intention</li>
              <li>Personally Blessed & Energized by Guru Matha</li>
            </ul>

            {/* Promise */}
            <h3 className="text-2xl font-semibold text-[#a5291b] my-4">
              The Om Sri Tara Promise
            </h3>

            <p className="text-lg leading-relaxed mb-4">
              What makes Om Sri Tara unique is our commitment to authenticity, spiritual integrity, and personalized healing. Every product and service is offered with divine intention, ensuring that each individual receives genuine guidance, positive energy, and holistic support on their spiritual journey.
            </p>

          </section>

        </div>
      </section>
    </>
  );
};

export default AboutUs;

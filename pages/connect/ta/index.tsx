import React from 'react';
import Link from 'next/link';
import { FaInstagram, FaYoutube, FaFacebookF, FaTwitter, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { SiGooglemaps } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';
import { FaRegStar, FaRegClock, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

export { metadata } from './metadata';

export default function ConnectTamilPage() {
  const jsonLdOrganization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Om Sritara",
    "url": "https://omsritara.in",
    "logo": "https://omsritara.in/logo.png",
    "email": "info@omsritara.com",
    "telephone": "+91-7092372555",
    "sameAs": [
      "https://www.facebook.com/omsritarafoundation/",
      "https://www.instagram.com/omsritara/",
      "https://www.youtube.com/channel/UCxXJOgXcbckwNby5kEFkBjA",
      "https://www.linkedin.com/in/omsritara/",
      "https://x.com/Omsritara"
    ]
  };

  const jsonLdLocalBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://omsritara.in/#organization",
    "name": "Om Sritara",
    "url": "https://omsritara.in",
    "image": "https://omsritara.in/logo.png",
    "logo": "https://omsritara.in/logo.png",
    "telephone": "+91-7092372555",
    "email": "info@omsritara.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "46, Giri Rd, Satyamurthy Nagar",
      "addressLocality": "T. Nagar",
      "addressRegion": "Tamil Nadu",
      "postalCode": "600017",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "13.041234",
      "longitude": "80.234567"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "19:00"
      }
    ],
    "hasMap": "https://maps.app.goo.gl/G8dRkW5VvFehifDY7",
    "sameAs": [
      "https://www.facebook.com/omsritarafoundation/",
      "https://www.instagram.com/omsritara/",
      "https://www.youtube.com/channel/UCxXJOgXcbckwNby5kEFkBjA",
      "https://www.linkedin.com/in/omsritara/",
      "https://x.com/Omsritara"
    ],
    "potentialAction": {
      "@type": "ReviewAction",
      "target": "https://g.page/r/CQWQubtyKAUEEBM/review"
    }
  };

  const jsonLdWebPage = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Om Sritara Tamil",
    "description": "Official Tamil Connect page for Om Sritara.",
    "url": "https://omsritara.in/connect/ta",
    "inLanguage": "en",
    "isPartOf": {
      "@type": "WebSite",
      "name": "Om Sritara",
      "url": "https://omsritara.in"
    }
  };

  const jsonLdBreadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://omsritara.in" },
      { "@type": "ListItem", "position": 2, "name": "Connect", "item": "https://omsritara.in/connect" },
      { "@type": "ListItem", "position": 3, "name": "Tamil", "item": "https://omsritara.in/connect/ta" }
    ]
  };

  const jsonLdFAQ = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What is Om Sritara Tamil?", "acceptedAnswer": { "@type": "Answer", "text": "Om Sritara Tamil provides Reiki Healing, Crystal Healing, Spiritual Courses and holistic wellness resources for Tamil-speaking audiences." } },
      { "@type": "Question", "name": "Where is Om Sritara located?", "acceptedAnswer": { "@type": "Answer", "text": "Om Sritara is located at 46, Giri Road, Satyamurthy Nagar, T Nagar, Chennai, Tamil Nadu 600017." } },
      { "@type": "Question", "name": "Does Om Sritara provide Reiki courses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Om Sritara offers certified Reiki courses for beginners and advanced practitioners." } },
      { "@type": "Question", "name": "How can I contact Om Sritara?", "acceptedAnswer": { "@type": "Answer", "text": "You can contact Om Sritara via WhatsApp at +91 7092372555 or email info@omsritara.com." } }
    ]
  };

  const jsonLdItemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": [
      { "@type": "Service", "name": "Reiki Healing" },
      { "@type": "Service", "name": "Crystal Healing" },
      { "@type": "Service", "name": "Meditation Classes" }
    ]
  };

  const socialLinks = [
    { name: 'Instagram', url: 'https://www.instagram.com/omsritara/', icon: <FaInstagram className="text-3xl" />, bg: 'bg-gradient-to-tr from-yellow-400 to-fuchsia-600' },
    { name: 'YouTube', url: 'https://www.youtube.com/channel/UCxXJOgXcbckwNby5kEFkBjA', icon: <FaYoutube className="text-3xl" />, bg: 'bg-red-600' },
    { name: 'Facebook', url: 'https://www.facebook.com/omsritarafoundation/', icon: <FaFacebookF className="text-3xl" />, bg: 'bg-blue-600' },
    { name: 'X (Twitter)', url: 'https://x.com/Omsritara', icon: <FaTwitter className="text-3xl" />, bg: 'bg-black' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/omsritara/', icon: <FaLinkedinIn className="text-3xl" />, bg: 'bg-blue-700' },
    { name: 'WhatsApp', url: 'https://wa.me/917092372555', icon: <FaWhatsapp className="text-3xl" />, bg: 'bg-green-500' },
    { name: 'Website', url: 'https://www.omsritara.in/', icon: <CgWebsite className="text-3xl text-gray-800" />, bg: 'bg-white border-2 border-gray-200' },
    { name: 'Map', url: 'https://maps.app.goo.gl/G8dRkW5VvFehifDY7', icon: <SiGooglemaps className="text-3xl" />, bg: 'bg-green-600' }
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdOrganization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdLocalBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdWebPage) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdBreadcrumb) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFAQ) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdItemList) }} />

      <main className="min-h-screen bg-orange-50 font-sans text-gray-800">
        <header className="bg-white py-12 px-6 shadow-sm text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-700 mb-4 tracking-tight">Om Sritara Tamil</h1>
          <p className="text-lg md:text-xl font-medium text-gray-600">Reiki Healing, Spiritual Courses & Crystal Healing</p>
        </header>

        <section className="max-w-4xl mx-auto py-12 px-6">
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 border-b-2 border-orange-200 pb-2 inline-block">Welcome to the official Om Sritara Tamil Connect page</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Whether you&apos;re looking for Reiki Healing, Crystal Healing, spiritual guidance, healing crystals, certified Reiki courses, or authentic spiritual products, this page helps you connect with all of Om Sritara&apos;s Tamil platforms in one place.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Join our growing Tamil spiritual community to explore healing knowledge, practical guidance, meditation techniques, spiritual education, and holistic wellness through videos, social media, WhatsApp support, and our spiritual centre in Chennai.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Connect With Us</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((link) => (
                <Link key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className={`flex flex-col items-center justify-center p-6 rounded-2xl transition-transform hover:-translate-y-2 hover:shadow-lg ${link.bg} ${link.name === 'Website' ? 'text-gray-800 hover:bg-gray-50' : 'text-white'}`}>
                  {link.icon}
                  <span className="mt-3 font-semibold text-sm">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="bg-orange-100 rounded-3xl p-8 mb-16">
            <h2 className="text-3xl font-bold text-center text-orange-900 mb-8">Featured Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: '✨', text: 'Book Reiki Session' },
                { icon: '🔮', text: 'Buy Healing Crystals' },
                { icon: '📿', text: 'Shop Spiritual Products' },
                { icon: '📚', text: 'Join Reiki Course' },
                { icon: '🧘', text: 'Meditation Classes' }
              ].map((service) => (
                <div key={service.text} className="bg-white px-6 py-4 rounded-xl shadow-sm flex items-center text-lg font-medium text-orange-900 border border-orange-200 transition-colors hover:bg-orange-50">
                  <span className="text-2xl mr-4">{service.icon}</span> {service.text}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><FaMapMarkerAlt className="mr-3 text-orange-500" /> Visit Our Centre</h3>
              <p className="text-gray-600 mb-4">Experience authentic spiritual healing and personalized guidance at our Chennai centre.</p>
              <address className="not-italic text-gray-800 font-medium leading-loose bg-orange-50 p-4 rounded-lg">
                Om Sritara<br />
                46, Giri Road, Satyamurthy Nagar<br />
                T. Nagar, Chennai – 600017<br />
                Tamil Nadu, India
              </address>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-orange-400">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center"><FaRegClock className="mr-3 text-orange-500" /> Business Hours</h3>
              <ul className="space-y-3">
                {['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map(day => (
                  <li key={day} className="flex justify-between text-gray-700 border-b border-gray-100 pb-2">
                    <span className="font-medium">{day}</span>
                    <span>10:00 AM – 7:00 PM</span>
                  </li>
                ))}
                <li className="flex justify-between text-red-600 font-bold pt-1">
                  <span>Sunday</span>
                  <span>Closed</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg p-8 mb-16 text-center border-2 border-orange-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center justify-center"><FaRegStar className="mr-3 text-yellow-500" /> Leave a Google Review</h2>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Your feedback inspires us to continue helping individuals on their spiritual journey. If you&apos;ve attended a Reiki class, purchased healing crystals, joined a workshop, or experienced one of our healing sessions, we&apos;d love to hear about your experience.
            </p>
            <Link href="https://g.page/r/CQWQubtyKAUEEBM/review" target="_blank" rel="noopener noreferrer" className="inline-block bg-orange-600 text-white font-bold py-3 px-8 rounded-full shadow-md hover:bg-orange-700 transition-colors">
              Write a Review
            </Link>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">Who Can Benefit From Om Sritara?</h2>
            <div className="bg-white p-8 rounded-2xl shadow-md">
              <p className="text-gray-700 font-medium mb-6">Our Tamil community serves people interested in:</p>
              <div className="flex flex-wrap gap-3 mb-6">
                {['Reiki Healing', 'Reiki Certification', 'Crystal Healing', 'Chakra Balancing', 'Energy Healing', 'Meditation', 'Aura Cleansing', 'Spiritual Growth', 'Holistic Wellness', 'Healing Crystals', 'Spiritual Products', 'Divine Guidance', 'Personal Transformation', 'Positive Energy', 'Wellness Education'].map((item) => (
                  <span key={item} className="bg-orange-100 text-orange-800 py-1.5 px-4 rounded-full text-sm font-semibold">{item}</span>
                ))}
              </div>
              <p className="text-gray-700">
                Whether you&apos;re just beginning your spiritual journey or looking to deepen your practice, Om Sritara offers authentic guidance, quality learning, and spiritually energized products to support your path.
              </p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-orange-800 mb-8">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: 'What is Om Sritara Tamil?', a: 'Om Sritara Tamil is the Tamil-language community of Om Sritara, offering Reiki healing, crystal healing, spiritual guidance, certified courses, and holistic wellness content for Tamil-speaking audiences.' },
                { q: 'Where is Om Sritara located?', a: 'Om Sritara is located at 46, Giri Road, Satyamurthy Nagar, T. Nagar, Chennai, Tamil Nadu 600017.' },
                { q: 'Does Om Sritara offer Reiki courses in Tamil?', a: 'Yes. Om Sritara provides Reiki certification courses and spiritual training in Tamil for beginners and advanced learners.' },
                { q: 'Can I contact Om Sritara through WhatsApp?', a: 'Yes. Tamil support is available on WhatsApp at +91 7092372555 during business hours.' },
                { q: 'What services does Om Sritara provide?', a: 'Om Sritara offers Reiki healing, crystal healing, chakra healing, meditation guidance, spiritual counselling, certified spiritual courses, and spiritually energized healing products.' }
              ].map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-sm p-6 border border-orange-100">
                  <h3 className="font-bold text-lg text-gray-900 mb-2">{faq.q}</h3>
                  <p className="text-gray-700">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-3xl p-10 text-white text-center shadow-xl">
            <h2 className="text-3xl font-bold mb-4">Begin Your Spiritual Journey Today</h2>
            <p className="text-orange-100 mb-8 max-w-2xl mx-auto text-lg">
              Follow Om Sritara Tamil across our official social media channels, join our spiritual community, and stay updated with Reiki courses, crystal healing insights, meditation guidance, workshops, and holistic wellness resources.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="https://wa.me/917092372555" className="bg-white text-orange-600 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-orange-50 transition-colors flex items-center justify-center">
                <FaWhatsapp className="mr-2 text-xl" /> WhatsApp Support
              </Link>
              <Link href="mailto:info@omsritara.com" className="bg-orange-800 bg-opacity-40 text-white border border-orange-400 font-bold py-3 px-8 rounded-full hover:bg-opacity-60 transition-colors flex items-center justify-center">
                <FaEnvelope className="mr-2 text-xl" /> info@omsritara.com
              </Link>
            </div>
            <p className="mt-8 text-orange-200">
              We look forward to supporting your journey toward inner peace, positive energy, and spiritual growth.
            </p>
          </div>
        </section>
      </main>
    </>
  );
}

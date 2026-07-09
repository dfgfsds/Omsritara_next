'use client';

import { Phone, Mail } from 'lucide-react';
import Head from 'next/head';

const ContactUs = () => {

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.omsritara.in/#organization",
        "name": "Om Sritara",
        "legalName": "Anandat Bhavati Private Limited",
        "url": "https://www.omsritara.in/",
        "logo": {
            "@type": "ImageObject",
            "@id": "https://www.omsritara.in/#logo",
            "url": "https://www.omsritara.in/logo.png",
            "width": 512,
            "height": 512
        },
        "image": "https://www.omsritara.in/images/contact-banner.jpg",
        "description": "Om Sritara is a trusted spiritual healing and holistic wellness organization offering Reiki certification courses, healing crystals, spiritually energized products, meditation, Akashic Records, crystal healing and holistic guidance under Guru Matha.",
        "founder": {
            "@type": "Person",
            "name": "Guru Matha",
            "jobTitle": "Ambal Upasaki, Reiki Master & Spiritual Healer",
            "description": "Guru Matha guides Om Sritara through authentic spiritual teachings, Reiki, meditation and holistic healing practices."
        },
        "foundingLocation": {
            "@type": "Place",
            "name": "Chennai, Tamil Nadu, India"
        },
        "brand": {
            "@type": "Brand",
            "name": "Om Sritara"
        },
        "email": "info@omsritara.in",
        "telephone": "+91-7092372555",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "46, Giri Road, Satyamurthy Nagar, T. Nagar",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600017",
            "addressCountry": "IN"
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
        "availableLanguage": [
            "English",
            "Tamil"
        ],
        "sameAs": [
            "https://www.facebook.com/omsritarafoundation/",
            "https://www.facebook.com/omsritaraenglish",
            "https://www.instagram.com/omsritara",
            "https://www.instagram.com/om_sritara_satsang",
            "https://www.youtube.com/@OMSRITARA_",
            "https://www.youtube.com/@OmsritaraSatsang",
            "https://www.linkedin.com/company/omsritara-satsang/about/",
            "https://x.com/omsritara"
        ],
        "contactPoint": [
            {
                "@type": "ContactPoint",
                "@id": "https://www.omsritara.in/#contactpoint",
                "contactType": "Customer Support",
                "telephone": "+91-7092372555",
                "email": "info@omsritara.in",
                "availableLanguage": [
                    "English",
                    "Tamil"
                ],
                "areaServed": "Worldwide"
            }
        ]
    }
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.omsritara.in/#website",
        "url": "https://www.omsritara.in/",
        "name": "Om Sritara",
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "copyrightHolder": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "description": "Om Sritara is a trusted destination for authentic healing crystals, Reiki certification courses, spiritual healing services, holistic wellness education and spiritually energized products.",
        "image": {
            "@type": "ImageObject",
            "url": "https://www.omsritara.in/images/contact-banner.jpg"
        },
        "inLanguage": [
            "en-IN",
            "ta-IN"
        ],
        "keywords": [
            "Healing Crystals",
            "Reiki Courses",
            "Spiritual Healing",
            "Crystal Healing",
            "Holistic Wellness",
            "Meditation",
            "Akashic Records",
            "Guru Matha"
        ],
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.omsritara.in/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    }

    const contactPageSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "@id": "https://www.omsritara.in/contact-us#contactpage",
        "url": "https://www.omsritara.in/contact-us",
        "name": "Contact Om Sritara",
        "headline": "Contact Om Sritara | Spiritual Healing & Reiki Support",
        "description": "Contact Om Sritara for healing crystals, Reiki certification courses, spiritual healing services, holistic wellness guidance, product support and course enquiries. Visit our Chennai centre or connect online from anywhere in the world.",
        "isPartOf": {
            "@id": "https://www.omsritara.in/#website"
        },
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.omsritara.in/images/contact-banner.jpg"
        },
        "inLanguage": "en-IN",
        "datePublished": "2026-07-06",
        "dateModified": "2026-07-06",
        "mainEntity": {
            "@id": "https://www.omsritara.in/#contactpoint"
        },
        "breadcrumb": {
            "@id": "https://www.omsritara.in/contact-us#breadcrumb"
        }
    }

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.omsritara.in/contact-us#webpage",
        "url": "https://www.omsritara.in/contact-us",
        "name": "Contact Om Sritara | Spiritual Healing & Reiki in Chennai",
        "headline": "Contact Om Sritara",
        "description": "Get in touch with Om Sritara for healing crystals, Reiki courses, spiritual healing, Akashic Records, holistic wellness guidance and spiritually energized products. Our team is available to assist you in English and Tamil.",
        "isPartOf": {
            "@id": "https://www.omsritara.in/#website"
        },
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "primaryImageOfPage": {
            "@type": "ImageObject",
            "url": "https://www.omsritara.in/images/contact-banner.jpg"
        },
        "breadcrumb": {
            "@id": "https://www.omsritara.in/contact-us#breadcrumb"
        },
        "mainEntity": {
            "@id": "https://www.omsritara.in/#localbusiness"
        },
        "inLanguage": "en-IN",
        "keywords": [
            "Contact Om Sritara",
            "Healing Crystals Chennai",
            "Reiki Courses Chennai",
            "Spiritual Healing",
            "Crystal Healing",
            "Holistic Wellness",
            "Guru Matha",
            "Akashic Records"
        ],
        "audience": {
            "@type": "Audience",
            "audienceType": [
                "Spiritual Seekers",
                "Students",
                "Reiki Practitioners",
                "Meditation Practitioners",
                "Energy Healers",
                "Holistic Wellness Enthusiasts"
            ]
        },
        "speakable": {
            "@type": "SpeakableSpecification",
            "cssSelector": [
                "h1",
                ".contact-information",
                ".business-hours",
                ".contact-support",
                ".contact-form"
            ]
        },
        "potentialAction": {
            "@type": "CommunicateAction",
            "name": "Contact Om Sritara",
            "target": "https://www.omsritara.in/contact-us"
        },
        "mentions": [
            {
                "@type": "Person",
                "name": "Guru Matha"
            },
            {
                "@type": "Thing",
                "name": "Healing Crystals"
            },
            {
                "@type": "Thing",
                "name": "Reiki Courses"
            },
            {
                "@type": "Thing",
                "name": "Spiritual Healing"
            },
            {
                "@type": "Thing",
                "name": "Akashic Records"
            }
        ],
        "datePublished": "2026-07-06",
        "dateModified": "2026-07-06"
    }

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.omsritara.in/#localbusiness",
        "name": "Om Sritara",
        "url": "https://www.omsritara.in/",
        "logo": "https://www.omsritara.in/logo.png",
        "image": "https://www.omsritara.in/images/contact-banner.jpg",
        "description": "Om Sritara is a trusted spiritual healing and holistic wellness centre in Chennai offering healing crystals, Reiki certification courses, spiritual healing services, meditation, Akashic Records and holistic wellness guidance.",
        "telephone": "+91-7092372555",
        "email": "info@omsritara.in",
        "priceRange": "₹₹",
        "founder": {
            "@type": "Person",
            "name": "Guru Matha"
        },
        "parentOrganization": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "46, Giri Road, Satyamurthy Nagar, T. Nagar",
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
        "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                ],
                "opens": "09:00",
                "closes": "20:00"
            }
        ],
        "currenciesAccepted": "INR",
        "paymentAccepted": [
            "Cash",
            "Credit Card",
            "Debit Card",
            "UPI",
            "Net Banking"
        ],
        "areaServed": [
            {
                "@type": "City",
                "name": "Chennai"
            },
            {
                "@type": "State",
                "name": "Tamil Nadu"
            },
            {
                "@type": "Country",
                "name": "India"
            },
            {
                "@type": "Place",
                "name": "Worldwide"
            }
        ],
        "availableLanguage": [
            "English",
            "Tamil"
        ],
        "hasMap": "https://maps.app.goo.gl/3BwEGKWBf8C6exL56",
        "contactPoint": {
            "@id": "https://www.omsritara.in/#contactpoint"
        },
        "sameAs": [
            "https://www.facebook.com/omsritarafoundation/",
            "https://www.facebook.com/omsritaraenglish",
            "https://www.instagram.com/omsritara",
            "https://www.instagram.com/om_sritara_satsang",
            "https://www.youtube.com/@OMSRITARA_",
            "https://www.youtube.com/@OmsritaraSatsang",
            "https://www.linkedin.com/company/omsritara-satsang/about/",
            "https://x.com/omsritara"
        ]
    }

    const contactPointSchema = {
        "@context": "https://schema.org",
        "@type": "ContactPoint",
        "@id": "https://www.omsritara.in/#contactpoint",
        "contactType": "Customer Support",
        "telephone": "+91-7092372555",
        "email": "info@omsritara.in",
        "url": "https://www.omsritara.in/contact-us",
        "availableLanguage": [
            "English",
            "Tamil"
        ],
        "hoursAvailable": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
            ],
            "opens": "09:00",
            "closes": "20:00"
        }
    }

    const breadcrumbListSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.omsritara.in/contact-us#breadcrumb",
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
                "name": "Contact",
                "item": "https://www.omsritara.in/contact-us"
            }
        ]
    }



    const schemas = [
        organizationSchema,
        webSiteSchema,
        contactPageSchema,
        webPageSchema,
        localBusinessSchema,
        contactPointSchema,
        breadcrumbListSchema
    ];
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Contact Om Sritara | Spiritual Healing & Reiki in Chennai</title>
                <meta name="description" content="Contact Om Sritara for authentic healing crystals, Reiki certification courses, spiritual healing services, holistic wellness guidance and spiritually energized products. Visit our Chennai centre or connect with us online worldwide." />
                <meta name="keywords" content="Contact Om Sritara, Spiritual Healing Chennai, Reiki Centre Chennai, Healing Crystals India, Reiki Courses Chennai, Crystal Healing, Chakra Healing, Akashic Records, Meditation, Guru Matha, Holistic Wellness, Spiritual Products, Online Reiki Course" />
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
                <link rel="canonical" href="https://www.omsritara.in/contact-us" />
                <meta name="author" content="Om Sritara" />
                <meta name="publisher" content="Anandat Bhavati Private Limited" />
                <meta name="copyright" content="© 2026 Om Sritara" />
                <meta httpEquiv="content-language" content="en-IN" />
                <meta name="theme-color" content="#6B2E8F" />
                <meta name="referrer" content="strict-origin-when-cross-origin" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Om Sritara" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="contact" content="info@omsritara.in" />
                <meta name="reply-to" content="info@omsritara.in" />
                <meta name="owner" content="Anandat Bhavati Private Limited" />
                <meta name="geo.region" content="IN-TN" />
                <meta name="geo.placename" content="Chennai, Tamil Nadu" />
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Om Sritara" />
                <meta property="og:title" content="Contact Om Sritara | Spiritual Healing & Reiki in Chennai" />
                <meta property="og:description" content="Have questions about healing crystals, Reiki courses or spiritual healing? Contact Om Sritara for authentic guidance, product support and holistic wellness assistance." />
                <meta property="og:url" content="https://www.omsritara.in/contact-us" />
                <meta property="og:image" content="https://www.omsritara.in/images/contact-banner.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Contact Om Sritara - Spiritual Healing & Reiki Centre" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Contact Om Sritara | Spiritual Healing & Reiki" />
                <meta name="twitter:description" content="Connect with Om Sritara for Reiki certification, healing crystals, spiritual healing services and holistic wellness guidance." />
                <meta name="twitter:image" content="https://www.omsritara.in/images/contact-banner.jpg" />
                <meta name="twitter:image:alt" content="Contact Om Sritara" />
                <meta name="twitter:site" content="@omsritara" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemas)
                    }}
                />
            </Head>

            <section>
                <div className="container mx-auto px-4 py-12" />
                <div className="py-12 px-4 sm:px-8 max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                        {/* Left: Contact Info (33%) */}
                        <div className="space-y-10">
                            {/* Customer Service */}

                            <div>
                                <h1 className="text-lg font-bold text-gray-900 mb-2">
                                    Contact Om Sritara | We're Here to Support Your Spiritual Journey
                                </h1>
                                <div>
                                    Have a question about our healing crystals, spiritual products, Reiki courses, or healing services? We'd love to help. Contact Om Sritara for guidance, product support, or course enquiries. Visit our Chennai center or connect with us online from anywhere in the world.
                                </div>

                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    CUSTOMER SERVICE
                                </h3>
                                <div className="flex items-start gap-3 text-sm text-gray-700">
                                    <Phone className="text-indigo-600 mt-1" />
                                    <div>
                                        <a href="tel:+91 7092372555" className="text-gray-400 hover:text-purple-700 transition-colors"> Tamil: +91 7092372555</a> <br />
                                        <a href="tel:+91 7092973555" className="mt-2 text-gray-400 hover:text-purple-700 transition-colors">English: +91 7092973555</a>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3 text-sm text-gray-700 mt-4">
                                    <Mail className="text-indigo-600 mt-1" />
                                    <a href="mailto:info@omsritara.com" className="text-gray-400 hover:text-purple-700 transition-colors mt-1">info@omsritara.com</a>
                                </div>


                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mt-4">Business Hours</h3>
                                <div className="text-sm text-gray-700">
                                    Monday – Saturday: 10:00 AM – 7:00 PM (IST)<br />
                                </div>
                            </div>

                            {/* Store Location */}
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                    STORE LOCATOR
                                </h3>
                                <a href="https://maps.app.goo.gl/BBbFX45PUgf757ua8" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-700 hover:text-purple-700 transition-colors inline-block">
                                    Om Sritara <br />
                                    46, Giri Rd, Satyamurthy Nagar,<br />
                                    T. Nagar, Chennai,<br />
                                    Tamil Nadu 600017
                                </a>
                            </div>
                        </div>

                        {/* Right: Map (66%) */}
                        <div className="md:col-span-2 bg-white rounded-lg shadow p-6">
                            {/* 
              Wrap the iframe in a relative container that maintains a 16:9
              ratio on small screens and a 4:3 ratio on md+ for a bit more height.
            */}
                            <div className="relative w-full overflow-hidden
                            aspect-video md:aspect-[4/3]">
                                <iframe
                                    className="absolute inset-0 h-full w-full rounded-lg"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001.137320737869!2d80.24020797367295!3d13.048277713195352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5267ba8897b355%3A0x4052872bbb99005!2sReiki%20Healing%20Center%20in%20Chennai%20%7C%20Omsritara!5e1!3m2!1sen!2sin!4v1751715820526!5m2!1sen!2sin"
                                    loading="lazy"
                                    allowFullScreen
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-4 rounded-lg border border-purple-100 bg-purple-50 px-4 sm:px-8 lg:px-16 py-4 sm:py-5">
                    <h2 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                        💬 Need Assistance?
                    </h2>
                    <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                        Whether you're looking for the right healing crystal, want to join a Reiki course, or need guidance on spiritual products, our team is here to help you choose what's best for your spiritual journey.
                    </p>
                </div>
            </section>
        </>
    );
};

export default ContactUs;

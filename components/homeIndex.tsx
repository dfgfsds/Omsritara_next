import Head from "next/head";

export default function HomeIndex() {

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.omsritara.in/#organization",
        "name": "Om Sritara",
        "legalName": "Anandat Bhavati Private Limited",
        "url": "https://www.omsritara.in/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.omsritara.in/logo.png"
        },
        "image": "https://www.omsritara.in/images/home-banner.jpg",
        "description": "Om Sritara is a trusted spiritual healing and holistic wellness organization offering spiritually energized healing crystals, Reiki certification courses, spiritual healing services, meditation, Akashic Records, crystal healing and holistic education under the guidance of Guru Matha.",
        "foundingLocation": {
            "@type": "Place",
            "name": "Chennai, Tamil Nadu, India"
        },
        "founder": {
            "@type": "Person",
            "name": "Guru Matha",
            "jobTitle": "Ambal Upasaki, Reiki Master & Spiritual Healer",
            "description": "Guru Matha guides Om Sritara through authentic spiritual teachings, Reiki, meditation and holistic healing practices."
        },
        "brand": {
            "@type": "Brand",
            "name": "Om Sritara"
        },
        "email": "info@omsritara.in",
        "telephone": "+91-7092372555",
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
    };
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.omsritara.in/#website",
        "url": "https://www.omsritara.in/",
        "name": "Om Sritara",
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "description": "Om Sritara offers authentic healing crystals, Reiki certification courses, spiritual healing services, meditation, Akashic Records, crystal healing, holistic wellness education and spiritually energized products for individuals seeking personal growth and inner transformation.",
        "inLanguage": [
            "en",
            "ta"
        ],
        "keywords": [
            "Healing Crystals",
            "Reiki Courses",
            "Spiritual Healing",
            "Crystal Healing",
            "Meditation",
            "Akashic Records",
            "Holistic Wellness",
            "Spiritually Energized Products",
            "Guru Matha",
            "Online Spiritual Courses"
        ],
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "copyrightHolder": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "image": {
            "@type": "ImageObject",
            "url": "https://www.omsritara.in/images/home-banner.jpg"
        },
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.omsritara.in/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        }
    };
    const webpageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.omsritara.in/#webpage",
        "url": "https://www.omsritara.in/",
        "name": "Om Sritara | Healing Crystals, Reiki Courses & Spiritual Healing",
        "headline": "Healing Crystals, Reiki Courses & Spiritual Healing in Chennai",
        "description": "Discover authentic healing crystals, Reiki certification courses, spiritual healing services, meditation, Akashic Records, crystal healing and holistic wellness programs from Om Sritara under the guidance of Guru Matha.",
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
            "url": "https://www.omsritara.in/images/home-banner.jpg"
        },
        "breadcrumb": {
            "@id": "https://www.omsritara.in/#breadcrumb"
        },
        "inLanguage": "en-IN",
        "keywords": [
            "Healing Crystals",
            "Reiki Courses",
            "Spiritual Healing",
            "Crystal Healing",
            "Guru Matha",
            "Holistic Wellness",
            "Meditation",
            "Akashic Records"
        ],
        "mainEntity": {
            "@id": "https://www.omsritara.in/#organization"
        },
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
                ".hero-content",
                ".about-section",
                ".services-section",
                ".faq-section"
            ]
        },
        "datePublished": "2026-07-06",
        "dateModified": "2026-07-06"
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.omsritara.in/#localbusiness",
        "name": "Om Sritara",
        "image": "https://www.omsritara.in/images/home-banner.jpg",
        "logo": "https://www.omsritara.in/logo.png",
        "url": "https://www.omsritara.in/",
        "telephone": "+91-7092372555",
        "email": "info@omsritara.in",
        "priceRange": "₹₹",
        "description": "Om Sritara is a spiritual healing and holistic wellness centre in Chennai offering Reiki courses, healing crystals, spiritual healing services, meditation, Akashic Records, crystal healing and holistic wellness programs.",
        "parentOrganization": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "founder": {
            "@type": "Person",
            "name": "Guru Matha"
        },
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
        "contactPoint": {
            "@type": "ContactPoint",
            "contactType": "Customer Support",
            "telephone": "+91-7092372555",
            "email": "info@omsritara.in",
            "availableLanguage": [
                "English",
                "Tamil"
            ]
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
    };

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.omsritara.in/#breadcrumb",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.omsritara.in/"
            }
        ]
    };

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": "https://www.omsritara.in/#service",
        "name": "Om Sritara Spiritual Healing Services",
        "description": "Om Sritara offers authentic spiritual healing services, Reiki certification courses, meditation, Akashic Records, crystal healing, chakra balancing, holistic wellness programs and spiritual guidance under Guru Matha.",
        "provider": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "serviceType": [
            "Spiritual Healing",
            "Reiki Healing",
            "Reiki Certification",
            "Crystal Healing",
            "Meditation",
            "Holistic Wellness",
            "Spiritual Counseling"
        ],
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
        "audience": {
            "@type": "Audience",
            "audienceType": [
                "Spiritual Seekers",
                "Students",
                "Working Professionals",
                "Reiki Practitioners",
                "Meditation Practitioners",
                "Holistic Wellness Enthusiasts"
            ]
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Spiritual Healing Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Reiki Healing"
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
                        "@type": "Service",
                        "name": "Crystal Healing"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Akashic Records Reading"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Meditation"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Spiritual Counseling"
                    }
                }
            ]
        }
    };

    const productCollectionSchema = {
        "@context": "https://schema.org",
        "@type": "ProductCollection",
        "@id": "https://www.omsritara.in/#products",
        "name": "Om Sritara Spiritual Products",
        "url": "https://www.omsritara.in/shop",
        "image": "https://www.omsritara.in/images/home-banner.jpg",
        "description": "Explore Om Sritara's collection of healing crystals, crystal bracelets, crystal rings, pendants, Rudraksha malas, meditation accessories and spiritually energized products prepared under the guidance of Guru Matha.",
        "brand": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "manufacturer": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "category": [
            "Healing Crystals",
            "Crystal Jewellery",
            "Spiritual Products",
            "Meditation Accessories"
        ],
        "keywords": [
            "Healing Crystals",
            "Crystal Bracelets",
            "Crystal Rings",
            "Crystal Pendants",
            "Rudraksha",
            "Spiritual Products",
            "Meditation Accessories"
        ],
        "hasPart": [
            {
                "@type": "ProductCollection",
                "name": "Healing Crystals"
            },
            {
                "@type": "ProductCollection",
                "name": "Crystal Bracelets"
            },
            {
                "@type": "ProductCollection",
                "name": "Crystal Rings"
            },
            {
                "@type": "ProductCollection",
                "name": "Crystal Pendants"
            },
            {
                "@type": "ProductCollection",
                "name": "Rudraksha Malas"
            },
            {
                "@type": "ProductCollection",
                "name": "Meditation Accessories"
            }
        ],
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "INR",
            "availability": "https://schema.org/InStock",
            "seller": {
                "@id": "https://www.omsritara.in/#organization"
            }
        },
        "potentialAction": {
            "@type": "ViewAction",
            "target": "https://www.omsritara.in/shop",
            "name": "Browse Spiritual Products"
        }
    };

    const schemas = [
        organizationSchema,
        websiteSchema,
        webpageSchema,
        localBusinessSchema,
        breadcrumbSchema,
        serviceSchema,
        productCollectionSchema
    ];
    return (
        <>
            <Head>
                {/* Primary Meta */}
                <title>Om Sritara | Healing Crystals, Reiki Courses & Spiritual Healing in Chennai</title>
                <meta
                    name="description"
                    content="Discover authentic healing crystals, Reiki certification courses, spiritual healing services, crystal jewellery and holistic wellness programs at Om Sritara. Spiritually energized by Guru Matha. Online & Offline learning available worldwide."
                />
                <meta
                    name="keywords"
                    content="Om Sritara, Healing Crystals, Reiki Course, Reiki Training, Spiritual Healing, Crystal Healing, Guru Matha, Chakra Healing, Akashic Records, Holistic Wellness, Meditation, Reiki Certification, Crystal Bracelets, Crystal Rings, Spiritual Products Chennai, Online Spiritual Courses"
                />
                <meta name="robots" content="index, follow" />
                {/* Author: Om Sritara */}
                <meta name="author" content="Om Sritara" />

                {/* Publisher - */}
                <meta name="publisher" content="Anandat Bhavati Private Limited" />

                {/* Copyright */}
                <meta name="copyright" content="© 2026 Om Sritara" />

                {/* Language */}
                <meta http-equiv="content-language" content="en-IN" />


                {/* Robots */}
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />

                {/* Canonical */}
                <link rel="canonical" href="https://www.omsritara.in/" />

                {/* Theme Color */}
                <meta name="theme-color" content="#a5291b" />

                {/* Mobile Optimization  */}
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="Om Sritara" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Open Graph  */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Om Sritara" />
                <meta property="og:title" content="Om Sritara | Healing Crystals, Reiki Courses & Spiritual Healing" />
                <meta property="og:description" content="Explore spiritually energized healing crystals, Reiki certification courses, crystal jewellery, meditation, Akashic Records, and holistic healing services guided by Guru Matha." />
                <meta property="og:url" content="https://www.omsritara.in/" />
                <meta property="og:image" content="https://www.omsritara.in/images/home-banner.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Om Sritara Healing Crystals, Reiki Courses and Spiritual Healing" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter Card  */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Om Sritara | Healing Crystals, Reiki Courses & Spiritual Healing" />
                <meta name="twitter:description" content="Authentic healing crystals, Reiki certification, spiritual healing services, crystal jewellery and holistic wellness programs from Om Sritara." />
                <meta name="twitter:image" content="https://www.omsritara.in/images/home-banner.jpg" />
                <meta name="twitter:image:alt" content="Om Sritara Spiritual Healing" />

                {/* Contact */}

                <meta name="contact" content="info@omsritara.in" />
                <meta name="reply-to" content="info@omsritara.in" />
                <meta name="owner" content="Anandat Bhavati Private Limited" />


                {/* Geographic  */}
                <meta name="geo.region" content="IN-TN" />
                <meta name="geo.placename" content="Chennai, Tamil Nadu" />

                {/* Referrer  */}
                <meta name="referrer" content="strict-origin-when-cross-origin" />

                {/* <Format Detection  */}
                <meta name="format-detection" content="+91 7092973555" />



                {/* Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemas)
                    }}
                />
            </Head>
        </>
    )
}
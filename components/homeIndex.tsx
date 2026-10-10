import Head from "next/head";

export default function HomeIndex() {

    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "@id": "https://www.omsritara.in/#organization",
        "name": "Omsritara",
        "legalName": "Anandat Bhavati Private Limited",
        "url": "https://www.omsritara.in/",
        "logo": {
            "@type": "ImageObject",
            "url": "https://www.omsritara.in/logo.png"
        },
        "image": "https://www.omsritara.in/images/home-banner.jpg",
        "description": "Omsritara is a trusted spiritual healing and holistic wellness organization offering spiritually energized healing crystals, Reiki certification courses, spiritual healing services, meditation, Akashic Records, crystal healing and holistic education under the guidance of Guru Matha.",
        "foundingLocation": {
            "@type": "Place",
            "name": "Chennai, Tamil Nadu, India"
        },
        "founder": {
            "@type": "Person",
            "name": "Guru Matha",
            "jobTitle": "Ambal Upasaki, Reiki Master & Spiritual Healer",
            "description": "Guru Matha guides Omsritara through authentic spiritual teachings, Reiki, meditation and holistic healing practices."
        },
        "brand": {
            "@type": "Brand",
            "name": "Omsritara"
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
        "name": "Omsritara",
        "alternateName": "Om Sri Tara",
        "description": "Omsritara offers healing crystals, spiritual products, Reiki training, spiritual healing services, holistic wellness programs and certified spiritual courses.",
        "inLanguage": "en-IN",
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        }
    };
    const webpageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.omsritara.in/#webpage",
        "url": "https://www.omsritara.in/",
        "name": "Reiki Courses, Crystal Healing & Spiritual Healing in Chennai",
        "headline": "Explore Spiritual Products, Healing Crystals & Reiki Courses Online",
        "description": "Explore Reiki courses, crystal healing and spiritual healing in Chennai. Learn practical healing techniques and discover a holistic path to inner wellness.",
        "isPartOf": {
            "@id": "https://www.omsritara.in/#website"
        },
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "inLanguage": "en-IN"
    };

    const localBusinessSchema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": "https://www.omsritara.in/#localbusiness",
        "name": "OMSRITARA",
        "alternateName": "Omsritara",
        "url": "https://www.omsritara.in/",
        "email": "info@omsritara.com",
        "telephone": "+91 7092973555",
        "priceRange": "$$",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "1st Floor, 46, Giri Rd, Satyamurthy Nagar, T. Nagar",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600017",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": "13.0418",
            "longitude": "80.2341"
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
                    "Saturday"
                ],
                "opens": "10:00",
                "closes": "19:00"
            }
        ],
        "sameAs": [
            "https://www.facebook.com/omsritarafoundation/",
            "https://www.facebook.com/omsritaraenglish",
            "https://www.instagram.com/omsritara/",
            "https://www.instagram.com/om_sritara_satsang",
            "https://x.com/Omsritara",
            "https://www.youtube.com/@OMSRITARA_",
            "https://www.youtube.com/@OmsritaraSatsang"
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
        "name": "Omsritara Spiritual Healing Services",
        "description": "Omsritara offers authentic spiritual healing services, Reiki certification courses, meditation, Akashic Records, crystal healing, chakra balancing, holistic wellness programs and spiritual guidance under Guru Matha.",
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
        "name": "Omsritara Spiritual Products",
        "url": "https://www.omsritara.in/shop",
        "image": "https://www.omsritara.in/images/home-banner.jpg",
        "description": "Explore Omsritara's collection of healing crystals, crystal bracelets, crystal rings, pendants, Rudraksha malas, meditation accessories and spiritually energized products prepared under the guidance of Guru Matha.",
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
                <title>Omsritara | Healing Crystals, Reiki Courses & Spiritual Healing in Chennai</title>
                <meta
                    name="description"
                    content="Discover authentic healing crystals, Reiki certification courses, spiritual healing services, crystal jewellery and holistic wellness programs at Omsritara. Spiritually energized by Guru Matha. Online & Offline learning available worldwide."
                />
                <meta name="keywords" content="Omsritara, Om Sri Tara, spiritual healing, healing crystals, Reiki healing, Reiki training, Reiki courses, Reiki classes Chennai, spiritual wellness, holistic wellness, energy healing, crystal healing, chakra healing, spiritual courses, spiritual products, healing crystals online, Reiki certification, spiritual healing Chennai, holistic healing Chennai, meditation, spiritual guidance, Guru Matha" />
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                {/* Author: Omsritara */}
                <meta name="author" content="Omsritara" />

                {/* Publisher - */}
                <meta name="publisher" content="Anandat Bhavati Private Limited" />

                {/* Copyright */}
                <meta name="copyright" content="© 2026 Omsritara" />

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
                <meta name="apple-mobile-web-app-title" content="Omsritara" />
                <meta name="apple-mobile-web-app-status-bar-style" content="default" />
                <meta name="mobile-web-app-capable" content="yes" />

                {/* Open Graph  */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Omsritara" />
                <meta property="og:title" content="Reiki Courses, Crystal Healing & Spiritual Healing in Chennai" />
                <meta property="og:description" content="Explore spiritually energized healing crystals, Reiki certification courses, crystal jewellery, meditation, Akashic Records, and holistic healing services guided by Guru Matha." />
                <meta property="og:url" content="https://www.omsritara.in/" />
                <meta property="og:image" content="https://www.omsritara.in/images/home-banner.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Omsritara healing crystals, spiritual healing and Reiki training" />
                <meta property="og:locale" content="en_IN" />

                {/* Twitter Card  */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Reiki Courses, Crystal Healing & Spiritual Healing in Chennai" />
                <meta name="twitter:description" content="Authentic healing crystals, Reiki certification, spiritual healing services, crystal jewellery and holistic wellness programs from Omsritara." />
                <meta name="twitter:image" content="https://www.omsritara.in/images/home-banner.jpg" />
                <meta name="twitter:image:alt" content="Omsritara spiritual healing, healing crystals and Reiki training" />

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
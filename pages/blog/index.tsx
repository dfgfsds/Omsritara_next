import Head from "next/head";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import axios from "axios";
import BlogAllPages from "@/components/BlogAllPages";

export default function BlogPage({ blogs }: { blogs: any[] }) {

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
        "image": "https://www.omsritara.in/images/blog-banner.jpg",
        "description": "Om Sritara is a trusted spiritual healing and holistic wellness organization offering Reiki certification courses, healing crystals, spiritually energized products, meditation, Akashic Records, crystal healing and authentic spiritual guidance under Guru Matha.",
        "founder": {
            "@type": "Person",
            "name": "Guru Matha",
            "jobTitle": "Ambal Upasaki, Reiki Master & Spiritual Healer",
            "description": "Guru Matha shares authentic teachings on Reiki, spiritual healing, meditation, energy work and holistic wellness."
        },
        "brand": {
            "@type": "Brand",
            "name": "Om Sritara"
        },
        "foundingLocation": {
            "@type": "Place",
            "name": "Chennai, Tamil Nadu, India"
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
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": "https://www.omsritara.in/#website",
        "url": "https://www.omsritara.in/",
        "name": "Om Sritara",
        "description": "Om Sritara is a trusted destination for authentic healing crystals, Reiki certification courses, spiritual healing services, holistic wellness education, spiritually energized products and expert spiritual guidance.",
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "copyrightHolder": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "image": {
            "@type": "ImageObject",
            "url": "https://www.omsritara.in/images/blog-banner.jpg"
        },
        "inLanguage": [
            "en-IN",
            "ta-IN"
        ],
        "keywords": [
            "Spiritual Healing",
            "Reiki",
            "Healing Crystals",
            "Crystal Healing",
            "Meditation",
            "Holistic Wellness",
            "Akashic Records",
            "Guru Matha",
            "Om Sritara"
        ],
        "potentialAction": {
            "@type": "SearchAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://www.omsritara.in/?s={search_term_string}"
            },
            "query-input": "required name=search_term_string"
        },
        "mainEntity": {
            "@id": "https://www.omsritara.in/#organization"
        }
    }

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "@id": "https://www.omsritara.in/blog#webpage",
        "url": "https://www.omsritara.in/blog",
        "name": "Spiritual Healing, Reiki & Healing Crystal Blog | Om Sritara",
        "headline": "Spiritual Healing, Reiki & Healing Crystal Blog",
        "description": "Explore expert articles on Reiki, healing crystals, meditation, chakra healing, Akashic Records, holistic wellness and spiritual growth. Learn practical knowledge from Om Sritara under the guidance of Guru Matha.",
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
            "@id": "https://www.omsritara.in/images/blog-banner.jpg"
        },
        "breadcrumb": {
            "@id": "https://www.omsritara.in/blog#breadcrumb"
        },
        "mainEntity": {
            "@id": "https://www.omsritara.in/blog#blog"
        },
        "inLanguage": "en-IN",
        "keywords": [
            "Spiritual Healing",
            "Reiki",
            "Healing Crystals",
            "Crystal Healing",
            "Meditation",
            "Holistic Wellness",
            "Akashic Records",
            "Guru Matha"
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
                ".blog-intro",
                ".featured-posts",
                ".latest-posts"
            ]
        },
        "potentialAction": {
            "@type": "ReadAction",
            "target": "https://www.omsritara.in/blog"
        },
        "datePublished": "2026-07-06",
        "dateModified": "2026-07-06"
    }

    const blogSchema = {
        "@context": "https://schema.org",
        "@type": "Blog",
        "@id": "https://www.omsritara.in/blog#blog",
        "url": "https://www.omsritara.in/blog",
        "name": "Om Sritara Spiritual Healing Blog",
        "headline": "Spiritual Healing, Reiki & Healing Crystal Blog",
        "description": "Discover expert articles on Reiki, healing crystals, meditation, chakra healing, Akashic Records, holistic wellness and spiritual growth. Explore authentic spiritual knowledge, practical guidance and spiritually energized products from Om Sritara.",
        "publisher": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "creator": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "about": [
            {
                "@type": "Thing",
                "name": "Spiritual Healing"
            },
            {
                "@type": "Thing",
                "name": "Reiki Healing"
            },
            {
                "@type": "Thing",
                "name": "Healing Crystals"
            },
            {
                "@type": "Thing",
                "name": "Meditation"
            },
            {
                "@type": "Thing",
                "name": "Crystal Healing"
            },
            {
                "@type": "Thing",
                "name": "Akashic Records"
            },
            {
                "@type": "Thing",
                "name": "Holistic Wellness"
            }
        ],
        "keywords": [
            "Spiritual Healing",
            "Reiki",
            "Healing Crystals",
            "Crystal Healing",
            "Meditation",
            "Chakra Healing",
            "Akashic Records",
            "Holistic Wellness",
            "Guru Matha",
            "Om Sritara"
        ],
        "isPartOf": {
            "@id": "https://www.omsritara.in/#website"
        },
        "mainEntityOfPage": {
            "@id": "https://www.omsritara.in/blog#webpage"
        },
        "inLanguage": [
            "en-IN",
            "ta-IN"
        ],
        "image": {
            "@type": "ImageObject",
            "@id": "https://www.omsritara.in/images/blog-banner.jpg"
        },
        "author": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "potentialAction": {
            "@type": "ReadAction",
            "target": "https://www.omsritara.in/blog"
        }
    }

    const collectionPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://www.omsritara.in/blog#collectionpage",
        "url": "https://www.omsritara.in/blog",
        "name": "Spiritual Healing Blog | Om Sritara",
        "headline": "Spiritual Healing, Reiki & Healing Crystal Blog",
        "description": "Browse the latest articles on Reiki, healing crystals, meditation, chakra healing, Akashic Records, holistic wellness and spiritual growth from Om Sritara.",
        "isPartOf": {
            "@id": "https://www.omsritara.in/#website"
        },
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "mainEntity": {
            "@id": "https://www.omsritara.in/blog#blog"
        },
        "primaryImageOfPage": {
            "@id": "https://www.omsritara.in/images/blog-banner.jpg"
        },
        "breadcrumb": {
            "@id": "https://www.omsritara.in/blog#breadcrumb"
        },
        "inLanguage": "en-IN"
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "@id": "https://www.omsritara.in/blog#breadcrumb",
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
                "name": "Blog",
                "item": "https://www.omsritara.in/blog"
            }
        ]
    }

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "@id": "https://www.omsritara.in/blog#latest-posts",
        "name": "Latest Blog Articles",
        "itemListOrder": "https://schema.org/ItemListOrderDescending",
        "numberOfItems": 5,
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "url": "https://www.omsritara.in/blog/blog-post-1",
                "name": "Latest Spiritual Healing Article"
            },
            {
                "@type": "ListItem",
                "position": 2,
                "url": "https://www.omsritara.in/blog/blog-post-2",
                "name": "Latest Reiki Article"
            },
            {
                "@type": "ListItem",
                "position": 3,
                "url": "https://www.omsritara.in/blog/blog-post-3",
                "name": "Latest Healing Crystal Article"
            },
            {
                "@type": "ListItem",
                "position": 4,
                "url": "https://www.omsritara.in/blog/blog-post-4",
                "name": "Latest Meditation Article"
            },
            {
                "@type": "ListItem",
                "position": 5,
                "url": "https://www.omsritara.in/blog/blog-post-5",
                "name": "Latest Chakra Healing Article"
            }
        ]
    }

    const personSchema = {
        "@context": "https://schema.org",
        "@type": "Person",
        "@id": "https://www.omsritara.in/#gurumatha",
        "name": "Guru Matha",
        "jobTitle": "Ambal Upasaki, Reiki Master & Spiritual Healer",
        "description": "Guru Matha is the spiritual guide of Om Sritara, sharing authentic teachings on Reiki, meditation, crystal healing, holistic wellness and spiritual growth.",
        "worksFor": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "knowsAbout": [
            "Reiki",
            "Healing Crystals",
            "Crystal Healing",
            "Meditation",
            "Akashic Records",
            "Spiritual Healing",
            "Holistic Wellness"
        ]
    }

    const schemas = [
        organizationSchema,
        websiteSchema,
        webPageSchema,
        blogSchema,
        collectionPageSchema,
        breadcrumbSchema,
        itemListSchema,
        personSchema

    ];
    return (
        <>
            <Head>
                {/* SEO Meta Tags */}

                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />

                <title>Spiritual Healing Blog | Reiki & Healing Crystals | Om Sritara</title>

                <meta name="description" content="Read expert articles on Reiki, healing crystals, meditation, chakra healing, holistic wellness and spiritual growth. Learn practical insights from Om Sritara and discover spiritually energized products guided by Guru Matha." />
                <meta name="keywords" content="Om Sritara, Spiritual Healing Blog, Reiki Blog, Healing Crystal Blog, Crystal Healing, Reiki Healing, Meditation Blog, Chakra Healing, Energy Healing, Holistic Wellness, Akashic Records, Spiritual Growth, Healing Stones, Spiritual Knowledge, Reiki Training, Healing Crystals India, Spiritual Products, Guru Matha, Wellness Blog" />
                <meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" />
                <link rel="canonical" href="https://www.omsritara.in/blog" />
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
                <meta property="og:title" content="Spiritual Healing Blog | Reiki & Healing Crystals | Om Sritara" />
                <meta property="og:description" content="Explore expert articles on Reiki, healing crystals, meditation, chakra healing, energy healing and holistic wellness from Om Sritara." />
                <meta property="og:url" content="https://www.omsritara.in/blog" />
                <meta property="og:image" content="https://www.omsritara.in/images/blog-banner.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="Om Sritara Spiritual Healing Blog" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Spiritual Healing Blog | Reiki & Healing Crystals | Om Sritara" />
                <meta name="twitter:description" content="Read practical articles on Reiki, healing crystals, meditation, chakra healing and holistic wellness from Om Sritara." />
                <meta name="twitter:image" content="https://www.omsritara.in/images/blog-banner.jpg" />
                <meta name="twitter:image:alt" content="Om Sritara Spiritual Healing Blog" />
                <meta name="twitter:site" content="@omsritara" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemas)
                    }}
                />
            </Head>

            <BlogAllPages blogs={blogs} />;
        </>
    )
}

// SSR function
export async function getServerSideProps() {
    try {
        const vendorId = 63;
        const blogAPI = `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/?vendor_id=${vendorId}`;
        const res = await axios.get(blogAPI);

        return {
            props: {
                blogs: res.data?.blogs || [],
            },
        };
    } catch (error) {
        console.error(error);
        return {
            props: {
                blogs: [],
            },
        };
    }
}

import Head from "next/head";
import ShopByIntentionPage from "@/components/ShopByIntentionPage";

export default function IntentionPage() {

    const webPageSchema = {
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "@id": "https://www.omsritara.in/shopByIntention/#webpage",
        "url": "https://www.omsritara.in/shopByIntention",
        "name": "Shop Spiritual Products by Intention | Om Sritara",
        "description": "Browse authentic spiritual products by intention including love, healing, protection, money, health, confidence, clarity, chakra healing, and spiritual growth.",
        "isPartOf": {
            "@id": "https://www.omsritara.in/#website"
        },
        "about": {
            "@id": "https://www.omsritara.in/#organization"
        },
        "inLanguage": [
            "en",
            "ta"
        ]
    }

    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
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
                "name": "Shop by Intention",
                "item": "https://www.omsritara.in/shopByIntention"
            }
        ]
    }

    const itemListSchema = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        "name": "Shop Spiritual Products by Intention",
        "description": "Browse healing crystals and spiritual products by your life goals and intentions.",
        "numberOfItems": 12,
        "itemListElement": [
            {
                "@type": "DefinedTerm",
                "position": 1,
                "name": "Love"
            },
            {
                "@type": "DefinedTerm",
                "position": 2,
                "name": "Spiritual Growth"
            },
            {
                "@type": "DefinedTerm",
                "position": 3,
                "name": "Education"
            },
            {
                "@type": "DefinedTerm",
                "position": 4,
                "name": "Peace"
            },
            {
                "@type": "DefinedTerm",
                "position": 5,
                "name": "Confidence"
            },
            {
                "@type": "DefinedTerm",
                "position": 6,
                "name": "Money"
            },
            {
                "@type": "DefinedTerm",
                "position": 7,
                "name": "Business Growth"
            },
            {
                "@type": "DefinedTerm",
                "position": 8,
                "name": "Healing"
            },
            {
                "@type": "DefinedTerm",
                "position": 9,
                "name": "Health"
            },
            {
                "@type": "DefinedTerm",
                "position": 10,
                "name": "Clarity"
            },
            {
                "@type": "DefinedTerm",
                "position": 11,
                "name": "Protection"
            },
            {
                "@type": "DefinedTerm",
                "position": 12,
                "name": "Feng Shui"
            }
        ]
    }

    const offerCatalogSchema = {
        "@context": "https://schema.org",
        "@type": "OfferCatalog",
        "name": "Shop by Intention Catalog",
        "description": "Spiritual products organized by healing intentions and life goals.",
        "itemListElement": [
            {
                "@type": "OfferCatalog",
                "name": "Love & Relationship Products"
            },
            {
                "@type": "OfferCatalog",
                "name": "Healing & Wellness Products"
            },
            {
                "@type": "OfferCatalog",
                "name": "Money & Prosperity Products"
            },
            {
                "@type": "OfferCatalog",
                "name": "Protection & Energy Cleansing Products"
            },
            {
                "@type": "OfferCatalog",
                "name": "Confidence & Success Products"
            },
            {
                "@type": "OfferCatalog",
                "name": "Feng Shui Products"
            }
        ]
    }

    const imageObjectSchema = {
        "@context": "https://schema.org",
        "@type": "ImageObject",
        "name": "Shop Spiritual Products by Intention",
        "description": "Healing crystals, Reiki products, crystal jewelry, yantras, pendulums, and spiritual tools organized by intention.",
        "contentUrl": "https://www.omsritara.in/images/shop-by-intention-banner.jpg",
        "thumbnailUrl": "https://www.omsritara.in/images/shop-by-intention-banner.jpg",
        "creator": {
            "@id": "https://www.omsritara.in/#organization"
        }
    }


    const schemas = [
        webPageSchema,
        breadcrumbSchema,
        itemListSchema,
        offerCatalogSchema,
        imageObjectSchema
    ];


    return (
        <>
            <Head>
                <title>Shop Spiritual Products by Intention | Om Sritara</title>
                <meta
                    name="description"
                    content="Shop spiritual products by intention including love, healing, protection, money, health, confidence, clarity, Feng Shui, and spiritual growth at Om Sritara."
                />
                <meta
                    name="keywords"
                    content="Shop by Intention, Spiritual Products by Intention, Healing Crystals, Healing Crystal Store, Love Crystal, Money Crystal, Protection Crystal, Business Growth Crystal, Health Crystals, Confidence Crystal, Peace Crystal, Chakra Healing, Reiki Products, Energy Healing, Crystal Bracelets, Healing Stones, Spiritual Store Chennai, Online Spiritual Shop, Holistic Wellness, Om Sritara"
                />
                <link rel="canonical" href="https://www.omsritara.in/shopByIntention" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Shop Spiritual Products by Intention | Om Sritara" />
                <meta property="og:description" content="Discover healing crystals and spiritual products for love, healing, protection, wealth, health, confidence, chakra balancing, and spiritual growth." />
                <meta property="og:url" content="https://www.omsritara.in/shopByIntention" />
                <meta property="og:image" content="https://www.omsritara.in/images/shop-by-intention-banner.jpg" />
                <meta property="og:site_name" content="Om Sritara" />
                <meta property="og:locale" content="en_IN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Shop Spiritual Products by Intention | Om Sritara" />
                <meta name="twitter:description" content="Explore authentic healing crystals and spiritual products for love, healing, protection, prosperity, peace, and positive energy." />
                <meta name="twitter:image" content="https://www.omsritara.in/images/shop-by-intention-banner.jpg" />

                {/* JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(schemas)
                    }}
                />
            </Head>
            <ShopByIntentionPage />
        </>
    );
}

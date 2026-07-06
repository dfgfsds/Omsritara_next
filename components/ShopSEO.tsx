"use client";
import Head from "next/head";
import logo from "@/public/logo.png";

export default function ShopSEO({ ogImage }: { ogImage: string }) {
  const fallbackImage =
    "https://omsritara.in/assets/images/og-category.jpg";

  const finalOgImage = ogImage || fallbackImage;

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.omsritara.in/shop/#collectionpage",
    "url": "https://www.omsritara.in/shop",
    "name": "Buy Spiritually Energized Healing Crystals & Spiritual Products | Om Sritara",
    "headline": "Shop Spiritually Energized Healing Crystals, Crystal Jewellery, Reiki Tools & Spiritual Products",
    "description": "Explore Om Sritara's collection of spiritually energized healing crystals, crystal bracelets, rings, pendants, Rudraksha malas, pendulums, yantras, pyramids, Reiki tools, healing stones, meditation accessories and holistic wellness products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha before reaching customers.",
    "inLanguage": [
      "en",
      "ta"
    ],
    "image": { finalOgImage },
    "isPartOf": {
      "@id": "https://www.omsritara.in/#website"
    },
    "about": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "publisher": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "breadcrumb": {
      "@id": "https://www.omsritara.in/shop/#breadcrumb"
    },
    "mainEntity": {
      "@type": "ItemList",
      "name": "Om Sritara Spiritual Product Categories",
      "numberOfItems": 16
    },
    "keywords": [
      "Om Sritara",
      "Spiritually Energized Healing Crystals",
      "Healing Crystals Online",
      "Crystal Shop India",
      "Spiritual Products",
      "Crystal Bracelets",
      "Crystal Rings",
      "Crystal Pendants",
      "Healing Stones",
      "Reiki Tools",
      "Reiki Products",
      "Spiritual Store Chennai",
      "Natural Healing Crystals",
      "Ethically Sourced Crystals",
      "Guru Matha",
      "Blessed Spiritual Products",
      "Energized Crystals",
      "Crystal Jewellery",
      "Rudraksha Mala",
      "Healing Mala",
      "Pendulums",
      "Yantras",
      "Pyramids",
      "Spiritual Statues",
      "Angels",
      "Healing Sticks",
      "Crystal Bowls",
      "Feng Shui Products",
      "Meditation Accessories",
      "Holistic Wellness Products",
      "Chakra Healing Products",
      "Positive Energy Products",
      "Protection Crystals",
      "Prosperity Crystals",
      "Love Crystals",
      "Spiritual Gifts India"
    ],
    "mentions": [
      {
        "@type": "Person",
        "name": "Guru Matha"
      },
      {
        "@type": "Organization",
        "name": "Anandat Bhavati Private Limited"
      }
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": [
        "Spiritual Seekers",
        "Reiki Practitioners",
        "Meditation Practitioners",
        "Energy Healers",
        "Holistic Wellness Enthusiasts",
        "Beginners"
      ]
    }
  }

  const webpageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.omsritara.in/shop/#webpage",
    "url": "https://www.omsritara.in/shop",
    "name": "Buy Spiritually Energized Healing Crystals & Spiritual Products | Om Sritara",
    "headline": "Shop Authentic Spiritually Energized Spiritual Products Online",
    "description": "Shop spiritually energized healing crystals, crystal jewellery, Reiki tools, Rudraksha malas, pendulums, yantras, healing stones, meditation accessories, and authentic spiritual products at Om Sritara. Every product is spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha.",
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
      "@id": { finalOgImage },
      "url": { finalOgImage },
    },
    "breadcrumb": {
      "@id": "https://www.omsritara.in/shop/#breadcrumb"
    },
    "mainEntity": {
      "@id": "https://www.omsritara.in/#products"
    },
    "inLanguage": ["en", "ta"],
    "keywords": [
      "Healing Crystals",
      "Crystal Shop India",
      "Crystal Bracelets",
      "Spiritual Products",
      "Reiki Products",
      "Guru Matha",
      "Blessed Crystals",
      "Crystal Jewellery",
      "Holistic Healing",
      "Positive Energy"
    ],
    "significantLink": [
      "https://www.omsritara.in/",
      "https://www.omsritara.in/about",
      "https://www.omsritara.in/courses",
      "https://www.omsritara.in/contact"
    ],
    "mentions": [
      {
        "@type": "Person",
        "name": "Guru Matha"
      },
      {
        "@type": "Organization",
        "name": "Anandat Bhavati Private Limited"
      },
      {
        "@type": "Thing",
        "name": "Spiritually Energized Healing Crystals"
      },
      {
        "@type": "Thing",
        "name": "Reiki Tools"
      },
      {
        "@type": "Thing",
        "name": "Spiritual Products"
      }
    ],
    "potentialAction": [
      {
        "@type": "ViewAction",
        "target": "https://www.omsritara.in/shop",
        "name": "Browse Spiritual Products"
      },
      {
        "@type": "BuyAction",
        "target": "https://www.omsritara.in/shop",
        "name": "Buy Spiritually Energized Products"
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.omsritara.in/shop/#breadcrumb",
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
        "name": "Shop",
        "item": "https://www.omsritara.in/shop"
      }
    ]
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.omsritara.in/shop/#itemlist",
    "name": "Om Sritara Spiritual Product Categories",
    "description": "Browse spiritually energized healing crystals, crystal jewellery, Reiki tools, meditation accessories, sacred spiritual products and holistic wellness collections. Every product is spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha.",
    "numberOfItems": 16,
    "itemListOrder": "https://schema.org/ItemListOrderAscending",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Crystal Rings",
        "url": "https://www.omsritara.in/categories/rings"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Crystal Bowls & Plates",
        "url": "https://www.omsritara.in/categories/crystal-bowls-and-plates"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Crystal Bracelets",
        "url": "https://www.omsritara.in/categories/bracelets"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Crystal Earrings",
        "url": "https://www.omsritara.in/categories/earrings"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Healing Malas",
        "url": "https://www.omsritara.in/categories/mala"
      },
      {
        "@type": "ListItem",
        "position": 6,
        "name": "Crystal Pendants",
        "url": "https://www.omsritara.in/categories/pendants"
      },
      {
        "@type": "ListItem",
        "position": 7,
        "name": "Spiritual Statues",
        "url": "https://www.omsritara.in/categories/spiritual-statues"
      },
      {
        "@type": "ListItem",
        "position": 8,
        "name": "Spiritual Cards",
        "url": "https://www.omsritara.in/categories/spiritual-cards"
      },
      {
        "@type": "ListItem",
        "position": 9,
        "name": "Pendulums",
        "url": "https://www.omsritara.in/categories/pendulums"
      },
      {
        "@type": "ListItem",
        "position": 10,
        "name": "Crystal Pyramids",
        "url": "https://www.omsritara.in/categories/pyramid"
      },
      {
        "@type": "ListItem",
        "position": 11,
        "name": "Angels",
        "url": "https://www.omsritara.in/categories/angels"
      },
      {
        "@type": "ListItem",
        "position": 12,
        "name": "Sangu",
        "url": "https://www.omsritara.in/categories/sangu"
      },
      {
        "@type": "ListItem",
        "position": 13,
        "name": "Coins & Cubes",
        "url": "https://www.omsritara.in/categories/coins-and-cubes"
      },
      {
        "@type": "ListItem",
        "position": 14,
        "name": "Healing Stones",
        "url": "https://www.omsritara.in/categories/healing-stones"
      },
      {
        "@type": "ListItem",
        "position": 15,
        "name": "Yantras & Chakra Products",
        "url": "https://www.omsritara.in/categories/yanthirams-and-chakra"
      },
      {
        "@type": "ListItem",
        "position": 16,
        "name": "Healing Sticks & Crystal Towers",
        "url": "https://www.omsritara.in/categories/healing-sticks-and-towers"
      }
    ]
  };

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": "https://www.omsritara.in/shop/#catalog",
    "name": "Om Sritara Spiritually Energized Spiritual Products",
    "description": "Explore Om Sritara's complete collection of spiritually energized healing crystals, crystal jewellery, Reiki tools, meditation accessories, sacred spiritual products and holistic wellness items. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha.",
    "provider": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "itemListElement": [
      {
        "@type": "OfferCatalog",
        "name": "Healing Crystal Jewellery",
        "url": "https://www.omsritara.in/categories/bracelets"
      },
      {
        "@type": "OfferCatalog",
        "name": "Healing Crystals & Stones",
        "url": "https://www.omsritara.in/categories/healing-stones"
      },
      {
        "@type": "OfferCatalog",
        "name": "Crystal Rings",
        "url": "https://www.omsritara.in/categories/rings"
      },
      {
        "@type": "OfferCatalog",
        "name": "Crystal Pendants",
        "url": "https://www.omsritara.in/categories/pendants"
      },
      {
        "@type": "OfferCatalog",
        "name": "Healing Malas & Rudraksha",
        "url": "https://www.omsritara.in/categories/mala"
      },
      {
        "@type": "OfferCatalog",
        "name": "Pendulums",
        "url": "https://www.omsritara.in/categories/pendulums"
      },
      {
        "@type": "OfferCatalog",
        "name": "Crystal Pyramids",
        "url": "https://www.omsritara.in/categories/pyramid"
      },
      {
        "@type": "OfferCatalog",
        "name": "Yantras & Chakra Products",
        "url": "https://www.omsritara.in/categories/yanthirams-and-chakra"
      },
      {
        "@type": "OfferCatalog",
        "name": "Spiritual Statues",
        "url": "https://www.omsritara.in/categories/spiritual-statues"
      },
      {
        "@type": "OfferCatalog",
        "name": "Angels",
        "url": "https://www.omsritara.in/categories/angels"
      },
      {
        "@type": "OfferCatalog",
        "name": "Reiki Healing Tools",
        "url": "https://www.omsritara.in/shop"
      },
      {
        "@type": "OfferCatalog",
        "name": "Meditation Accessories",
        "url": "https://www.omsritara.in/shop"
      }
    ]
  };

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    "@id": "https://www.omsritara.in/shop/#products",
    "name": "Om Sritara Spiritually Energized Spiritual Products",
    "alternateName": [
      "Healing Crystal Collection",
      "Spiritual Products Collection",
      "Spiritually Energized Products",
      "Reiki Healing Products"
    ],
    "url": "https://www.omsritara.in/shop",
    "image": "https://www.omsritara.in/images/shop-banner.jpg",
    "description": "Explore Om Sritara's complete collection of spiritually energized healing crystals, crystal bracelets, crystal rings, crystal pendants, Rudraksha malas, pendulums, healing stones, pyramids, yantras, angels, spiritual statues, meditation accessories, Reiki tools and holistic wellness products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha before reaching customers.",
    "brand": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "manufacturer": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "provider": {
      "@id": "https://www.omsritara.in/#organization"
    },
    "category": [
      "Healing Crystals",
      "Crystal Jewellery",
      "Spiritual Products",
      "Meditation Accessories",
      "Reiki Tools",
      "Holistic Wellness Products"
    ],
    "keywords": [
      "Healing Crystals",
      "Spiritually Energized Products",
      "Crystal Bracelets",
      "Crystal Rings",
      "Crystal Pendants",
      "Healing Stones",
      "Rudraksha Mala",
      "Healing Mala",
      "Pendulums",
      "Crystal Pyramids",
      "Yantras",
      "Angels",
      "Spiritual Statues",
      "Crystal Bowls",
      "Crystal Plates",
      "Coins",
      "Healing Sticks",
      "Crystal Towers",
      "Meditation Accessories",
      "Reiki Tools",
      "Guru Matha",
      "Crystal Shop India"
    ],
    "audience": {
      "@type": "Audience",
      "audienceType": [
        "Spiritual Seekers",
        "Meditation Practitioners",
        "Reiki Practitioners",
        "Energy Healers",
        "Yoga Practitioners",
        "Holistic Wellness Enthusiasts",
        "Students",
        "Beginners"
      ]
    },
    "hasPart": [
      { "@type": "ProductCollection", "name": "Crystal Bracelets" },
      { "@type": "ProductCollection", "name": "Crystal Rings" },
      { "@type": "ProductCollection", "name": "Crystal Pendants" },
      { "@type": "ProductCollection", "name": "Healing Stones" },
      { "@type": "ProductCollection", "name": "Healing Malas" },
      { "@type": "ProductCollection", "name": "Rudraksha Malas" },
      { "@type": "ProductCollection", "name": "Pendulums" },
      { "@type": "ProductCollection", "name": "Crystal Pyramids" },
      { "@type": "ProductCollection", "name": "Crystal Bowls & Plates" },
      { "@type": "ProductCollection", "name": "Spiritual Statues" },
      { "@type": "ProductCollection", "name": "Spiritual Cards" },
      { "@type": "ProductCollection", "name": "Angels" },
      { "@type": "ProductCollection", "name": "Yantras & Chakra Products" },
      { "@type": "ProductCollection", "name": "Healing Sticks & Crystal Towers" },
      { "@type": "ProductCollection", "name": "Coins & Cubes" },
      { "@type": "ProductCollection", "name": "Reiki Healing Tools" }
    ],
    "additionalProperty": [
      {
        "@type": "PropertyValue",
        "name": "Product Authenticity",
        "value": "100% authentic, ethically sourced and carefully selected."
      },
      {
        "@type": "PropertyValue",
        "name": "Spiritual Preparation",
        "value": "Every product is spiritually cleansed, energized through sacred rituals and personally energized and blessed by Guru Matha before reaching customers."
      },
      {
        "@type": "PropertyValue",
        "name": "Benefits",
        "value": "Supports healing, protection, abundance, prosperity, emotional balance, meditation, chakra alignment, confidence, peace, positive energy and spiritual growth."
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
      "name": "Browse Spiritually Energized Spiritual Products"
    }
  };

  const schemas = [
    webpageSchema,
    webpageSchema,
    breadcrumbSchema,
    collectionSchema,
    itemListSchema,
    offerCatalogSchema,
    productCollectionSchema
  ];

  return (
    <Head>
      {/* Primary Meta Tags */}
      <title>Buy Spiritually Energized Healing Crystals | Om Sritara</title>
      <meta
        name="description"
        content="Shop spiritually energized healing crystals, crystal jewellery, Reiki tools, Rudraksha malas, pendulums, yantras and authentic spiritual products personally blessed by Guru Matha."
      />
      <meta
        name="keywords"
        content="Om Sritara, Spiritually Energized Healing Crystals, Healing Crystals Online, Crystal Shop India, Spiritual Products, Crystal Bracelets, Crystal Rings, Crystal Pendants, Healing Stones, Reiki Tools, Reiki Products, Spiritual Store Chennai, Natural Healing Crystals, Ethically Sourced Crystals, Guru Matha, Blessed Spiritual Products, Energized Crystals, Crystal Jewellery, Rudraksha Mala, Healing Mala, Pendulums, Yantras, Pyramids, Spiritual Statues, Angels, Healing Sticks, Crystal Bowls, Feng Shui Products, Meditation Accessories, Holistic Wellness Products, Chakra Healing Products, Positive Energy Products, Protection Crystals, Prosperity Crystals, Love Crystals, Spiritual Gifts India"
      />

      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      <meta name="author" content="Om Sritara" />
      <meta name="publisher" content="Anandat Bhavati Private Limited" />
      <meta http-equiv="content-language" content="en-IN" />
      <meta name="theme-color" content="#a5291b" />

      {/* Canonical */}
      <link rel="canonical" href="https://www.omsritara.in/shop/" />

      <meta property="og:type" content="website" />
      <meta property="og:title" content="Buy Spiritually Energized Healing Crystals & Spiritual Products | Om Sritara" />
      <meta property="og:description" content="Discover spiritually energized healing crystals, Reiki tools, crystal jewellery, Rudraksha malas and authentic spiritual products. Every product is personally energized and blessed by Guru Matha." />
      <meta property="og:url" content="https://www.omsritara.in/shop" />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:image:alt" content="Om Sritara Spiritually Energized Healing Crystals & Spiritual Products" />
      <meta property="og:site_name" content="Om Sritara" />
      <meta property="og:locale" content="en_IN" />


      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Buy Spiritually Energized Healing Crystals & Spiritual Products | Om Sritara" />
      <meta name="twitter:description" content="Shop spiritually energized healing crystals, Reiki tools, crystal jewellery, Rudraksha malas and blessed spiritual products from Om Sritara." />
      <meta name="twitter:image" content={finalOgImage} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(schemas)
        }}
      />

    </Head>
  );
}

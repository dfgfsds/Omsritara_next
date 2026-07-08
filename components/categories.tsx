'use client';

import { useCategories } from '@/context/CategoriesContext';
import { slugConvert } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head';
import logo from '@/public/logo.png';

export default function CategoriesPage() {


  const { categories }: any = useCategories();


  // Dynamic OG Image Logic (first category image or fallback)
  const dynamicOgImage =
    categories?.data?.[0]?.image ||
    "https://omsritara.in/assets/images/og-category.jpg";

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": "https://www.omsritara.in/categories/#collectionpage",
    "url": "https://www.omsritara.in/categories",
    "name": "Spiritually Energized Spiritual Product Categories | Om Sritara",
    "headline": "Explore Healing Crystals, Crystal Jewellery, Reiki Tools & Spiritual Product Categories",
    "description": "Browse Om Sritara's complete collection of spiritually energized healing crystals, crystal bracelets, rings, pendants, Rudraksha malas, pendulums, healing stones, yantras, pyramids, spiritual statues, Reiki tools and holistic wellness products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha before reaching customers.",
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
      "@id": "https://www.omsritara.in/images/categories-banner.jpg"
    },
    "breadcrumb": {
      "@id": "https://www.omsritara.in/categories/#breadcrumb"
    },
    "inLanguage": [
      "en",
      "ta"
    ],
    "keywords": [
      "Spiritually Energized Products",
      "Healing Crystals",
      "Crystal Bracelets",
      "Crystal Rings",
      "Crystal Pendants",
      "Healing Stones",
      "Rudraksha Mala",
      "Pendulums",
      "Yantras",
      "Reiki Tools",
      "Spiritual Products",
      "Guru Matha"
    ],
    "mainEntity": {
      "@type": "ItemList",
      "name": "Om Sritara Spiritual Product Categories",
      "numberOfItems": 16
    },
    "hasPart": [
      {
        "@id": "https://www.omsritara.in/#products"
      }
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
        "Meditation Practitioners",
        "Reiki Practitioners",
        "Energy Healers",
        "Holistic Wellness Enthusiasts",
        "Beginners"
      ]
    },
    "specialty": [
      "Healing Crystals",
      "Spiritually Energized Products",
      "Crystal Healing",
      "Reiki Tools",
      "Holistic Wellness",
      "Spiritual Products"
    ]
  }

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://www.omsritara.in/categories/#webpage",
    "url": "https://www.omsritara.in/categories",
    "name": "Explore Spiritually Energized Product Categories | Om Sritara",
    "headline": "Browse Authentic Spiritual Product Categories",
    "description": "Discover spiritually energized healing crystals, crystal jewellery, Reiki tools, healing stones, pendulums, yantras, pyramids, spiritual statues, meditation accessories and holistic wellness products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha.",
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
      "@id": "https://www.omsritara.in/images/categories-banner.jpg",
      "url": "https://www.omsritara.in/images/categories-banner.jpg"
    },
    "breadcrumb": {
      "@id": "https://www.omsritara.in/categories/#breadcrumb"
    },
    "mainEntity": {
      "@id": "https://www.omsritara.in/#products"
    },
    "inLanguage": [
      "en",
      "ta"
    ],
    "keywords": [
      "Spiritually Energized Products",
      "Healing Crystals",
      "Crystal Categories",
      "Crystal Jewellery",
      "Spiritual Products",
      "Reiki Tools",
      "Guru Matha",
      "Blessed Spiritual Products",
      "Holistic Healing",
      "Crystal Shop India"
    ],
    "specialty": [
      "Healing Crystals",
      "Spiritually Energized Products",
      "Crystal Jewellery",
      "Reiki Healing Tools",
      "Holistic Wellness",
      "Spiritual Healing"
    ],
    "significantLink": [
      "https://www.omsritara.in/",
      "https://www.omsritara.in/shop",
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
        "target": "https://www.omsritara.in/categories",
        "name": "Browse Product Categories"
      },
      {
        "@type": "ViewAction",
        "target": "https://www.omsritara.in/shop",
        "name": "Shop Spiritually Energized Products"
      }
    ]
  }

  const breadScrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": "https://www.omsritara.in/categories/#breadcrumb",
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
        "name": "Product Categories",
        "item": "https://www.omsritara.in/categories"
      }
    ]
  }

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": "https://www.omsritara.in/categories/#itemlist",
    "name": "Om Sritara Spiritually Energized Product Categories",
    "description": "Browse Om Sritara's spiritually energized healing crystal and spiritual product categories. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha.",
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
  }

  const offerCatalogSchema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    "@id": "https://www.omsritara.in/categories/#catalog",
    "name": "Om Sritara Spiritually Energized Product Categories",
    "description": "Explore Om Sritara's complete collection of spiritually energized healing crystals, crystal jewellery, Reiki tools, meditation accessories and authentic spiritual products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha.",
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
        "name": "Healing Stones",
        "url": "https://www.omsritara.in/categories/healing-stones"
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
        "name": "Spiritual Cards",
        "url": "https://www.omsritara.in/categories/spiritual-cards"
      },
      {
        "@type": "OfferCatalog",
        "name": "Angels",
        "url": "https://www.omsritara.in/categories/angels"
      },
      {
        "@type": "OfferCatalog",
        "name": "Crystal Bowls & Plates",
        "url": "https://www.omsritara.in/categories/crystal-bowls-and-plates"
      },
      {
        "@type": "OfferCatalog",
        "name": "Coins & Cubes",
        "url": "https://www.omsritara.in/categories/coins-and-cubes"
      },
      {
        "@type": "OfferCatalog",
        "name": "Healing Sticks & Crystal Towers",
        "url": "https://www.omsritara.in/categories/healing-sticks-and-towers"
      },
      {
        "@type": "OfferCatalog",
        "name": "Reiki Healing Tools",
        "url": "https://www.omsritara.in/shop"
      },
      {
        "@type": "OfferCatalog",
        "name": "Meditation & Holistic Wellness Products",
        "url": "https://www.omsritara.in/shop"
      }
    ]
  }

  const productCollectionSchema = {
    "@context": "https://schema.org",
    "@type": "ProductCollection",
    "@id": "https://www.omsritara.in/categories/#products",
    "name": "Om Sritara Spiritually Energized Spiritual Product Categories",
    "alternateName": [
      "Healing Crystal Categories",
      "Spiritual Product Categories",
      "Reiki Product Categories",
      "Holistic Wellness Product Categories"
    ],
    "url": "https://www.omsritara.in/categories",
    "image": "https://www.omsritara.in/images/categories-banner.jpg",
    "description": "Browse Om Sritara's complete collection of spiritually energized healing crystal categories, crystal jewellery, Reiki tools, Rudraksha malas, pendulums, yantras, pyramids, healing stones, meditation accessories, and authentic spiritual products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha before reaching customers.",
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
      {
        "@type": "ProductCollection",
        "name": "Crystal Rings",
        "url": "https://www.omsritara.in/categories/rings"
      },
      {
        "@type": "ProductCollection",
        "name": "Crystal Bowls & Plates",
        "url": "https://www.omsritara.in/categories/crystal-bowls-and-plates"
      },
      {
        "@type": "ProductCollection",
        "name": "Crystal Bracelets",
        "url": "https://www.omsritara.in/categories/bracelets"
      },
      {
        "@type": "ProductCollection",
        "name": "Crystal Earrings",
        "url": "https://www.omsritara.in/categories/earrings"
      },
      {
        "@type": "ProductCollection",
        "name": "Healing Malas",
        "url": "https://www.omsritara.in/categories/mala"
      },
      {
        "@type": "ProductCollection",
        "name": "Crystal Pendants",
        "url": "https://www.omsritara.in/categories/pendants"
      },
      {
        "@type": "ProductCollection",
        "name": "Spiritual Statues",
        "url": "https://www.omsritara.in/categories/spiritual-statues"
      },
      {
        "@type": "ProductCollection",
        "name": "Spiritual Cards",
        "url": "https://www.omsritara.in/categories/spiritual-cards"
      },
      {
        "@type": "ProductCollection",
        "name": "Pendulums",
        "url": "https://www.omsritara.in/categories/pendulums"
      },
      {
        "@type": "ProductCollection",
        "name": "Crystal Pyramids",
        "url": "https://www.omsritara.in/categories/pyramid"
      },
      {
        "@type": "ProductCollection",
        "name": "Angels",
        "url": "https://www.omsritara.in/categories/angels"
      },
      {
        "@type": "ProductCollection",
        "name": "Sangu",
        "url": "https://www.omsritara.in/categories/sangu"
      },
      {
        "@type": "ProductCollection",
        "name": "Coins & Cubes",
        "url": "https://www.omsritara.in/categories/coins-and-cubes"
      },
      {
        "@type": "ProductCollection",
        "name": "Healing Stones",
        "url": "https://www.omsritara.in/categories/healing-stones"
      },
      {
        "@type": "ProductCollection",
        "name": "Yantras & Chakra Products",
        "url": "https://www.omsritara.in/categories/yanthirams-and-chakra"
      },
      {
        "@type": "ProductCollection",
        "name": "Healing Sticks & Crystal Towers",
        "url": "https://www.omsritara.in/categories/healing-sticks-and-towers"
      }
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
        "value": "Every product is spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha before reaching customers."
      },
      {
        "@type": "PropertyValue",
        "name": "Benefits",
        "value": "Supports healing, protection, prosperity, abundance, confidence, emotional balance, meditation, chakra alignment, positive energy and spiritual growth."
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
    "isRelatedTo": {
      "@id": "https://www.omsritara.in/#services"
    },
    "potentialAction": {
      "@type": "ViewAction",
      "target": "https://www.omsritara.in/categories",
      "name": "Browse Spiritual Product Categories"
    }
  }


  const schemas = [
    collectionPageSchema,
    webPageSchema,
    breadScrumbSchema,
    itemListSchema,
    offerCatalogSchema,
    productCollectionSchema
  ];

  return (
    <>
      <Head>
        <title>Spiritually Energized Product Categories | Om Sritara</title>

        <meta
          name="description"
          content="Explore spiritually energized healing crystals, crystal jewellery, Reiki tools and authentic spiritual product categories. Every product is personally energized and blessed by Guru Matha."
        />
        <meta
          name="keywords"
          content="Om Sritara, Spiritually Energized Products, Spiritual Product Categories, Healing Crystals, Crystal Categories, Crystal Bracelets, Crystal Rings, Crystal Pendants, Healing Stones, Crystal Jewellery, Natural Healing Crystals, Reiki Products, Reiki Tools, Rudraksha Mala, Healing Mala, Pendulums, Yantras, Crystal Pyramids, Spiritual Statues, Angels, Crystal Bowls, Healing Sticks, Crystal Towers, Meditation Accessories, Holistic Wellness Products, Chakra Healing Products, Protection Crystals, Abundance Crystals, Love Crystals, Guru Matha, Blessed Spiritual Products, Ethically Sourced Crystals, Crystal Shop India, Spiritual Store Chennai"
        />
        {/* Robots */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* Author */}
        <meta name="author" content="Om Sritara" />

        {/* Publisher */}
        <meta name="publisher" content="Anandat Bhavati Private Limited" />

        {/* Language */}
        <meta http-equiv="content-language" content="en-IN" />

        {/* Theme Color */}
        <meta name="theme-color" content="#a5291b" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.omsritara.in/categories" />

        {/* Open Graph Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Spiritually Energized Product Categories | Om Sritara" />
        <meta property="og:description" content="Browse spiritually energized healing crystals, Reiki tools, crystal jewellery, healing stones and authentic spiritual product categories. Every product is personally energized and blessed by Guru Matha." />
        <meta property="og:url" content="https://www.omsritara.in/categories" />
        <meta property="og:image" content={dynamicOgImage} />
        <meta property="og:image:alt" content="Om Sritara Spiritually Energized Spiritual Product Categories" />
        <meta property="og:site_name" content="Om Sritara" />
        <meta property="og:locale" content="en_IN" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Explore Spiritually Energized Product Categories | Om Sritara" />
        <meta name="twitter:description" content="Discover healing crystals, Reiki tools, crystal jewellery and authentic spiritual products. Every product is spiritually energized and personally blessed by Guru Matha." />
        <meta name="twitter:image" content={dynamicOgImage} />
        <meta name="twitter:image:alt" content="Om Sritara Spiritually Energized Product Categories" />
        <meta name="twitter:site" content="@omsritara" />


        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemas)
          }}
        />
      </Head>

      <div className="bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-10 text-center sm:mb-12">
            <h1 className="mt-3 mb-4 text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-5xl">
              Explore Spiritually Energized Healing Crystals & Spiritual Product Categories | Om Sritara
            </h1>

            <p className="mx-auto max-w-6xl text-sm leading-7 text-muted-foreground sm:text-base md:text-lg lg:text-xl">
              Browse Om Sritara's complete collection of spiritually energized healing crystals, crystal bracelets, rings, pendants, Rudraksha malas, pendulums, yantras, pyramids, Reiki tools, spiritual statues, and holistic wellness products. Every product is ethically sourced, spiritually cleansed, energized through sacred rituals, and personally energized and blessed by Guru Matha before reaching you. Find the perfect spiritual product category to support your healing, protection, abundance, meditation, and spiritual growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {categories?.data?.map((category: any) => (
              <Link
                href={`/categories/${slugConvert(category?.name)}`}
                key={category?.id}
                className="relative group overflow-hidden rounded-md shadow hover:shadow-lg transition"
              >
                {/* Background Image */}
                <div className="aspect-[4/3] w-full overflow-hidden">
                  {category?.image && (
                    <Image
                      src={category?.image || 'https://semantic-ui.com/images/wireframe/image.png'}
                      alt={category?.name || 'Category'}
                      className="h-full w-full object-cover  transition-transform duration-500"
                      width={300}
                      height={288}
                    />
                  )}

                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />

                {/* Text */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold uppercase tracking-wide text-center px-4">
                    {category?.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

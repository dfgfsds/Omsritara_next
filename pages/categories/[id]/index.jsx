import Head from "next/head";
import { useRouter } from "next/router";
import CategoriesBasedProduct from '@/components/CategoriesBasedProduct';
import categories from "../../../pages/data/categories.json";

export default function CategoriesProduct() {
    const router = useRouter();
    const { id } = router.query;

    if (!id) return null;

    const category = categories.find(
        (cat) => cat.slug === id
    );

    if (!category) return null;

    const url = `https://www.omsritara.in/categories/${category.slug}`;
    return <>

        {/* ================= META TAGS ================= */}
        <Head>
            <title>{category.seo_title}</title>
            <meta
                name="description"
                content={category.seo_description}
            />

            <meta
                name="keywords"
                content={category.seo_keywords}
            />

            {/* ✅ CANONICAL */}
            <link
                rel="canonical"
                href={`https://www.omsritara.in/categories/${category.slug}`}
            />

            {/* Open Graph */}
            <meta property="og:title" content={category.seo_title} />
            <meta property="og:description" content={category.seo_description} />
            <meta property="og:image" content={category.banner_image} />
            <meta property="og:url" content={url} />
            <meta property="og:type" content="website" />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={category.seo_title} />
            <meta name="twitter:description" content={category.seo_description} />
            <meta name="twitter:image" content={category.banner_image} />

            {/* ================= SCHEMA ================= */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify([
                        {
                            "@context": "https://schema.org",
                            "@type": "BreadcrumbList",
                            "itemListElement": [
                                {
                                    "@type": "ListItem",
                                    "position": 1,
                                    "name": "Home",
                                    "item": "https://www.omsritara.in"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 2,
                                    "name": "Categories",
                                    "item": "https://www.omsritara.in/categories"
                                },
                                {
                                    "@type": "ListItem",
                                    "position": 3,
                                    "name": category.name,
                                    "item": url
                                }
                            ]
                        },
                        {
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": category.name,
                            "description": category.seo_description,
                            "url": url,
                            "isPartOf": {
                                "@type": "WebSite",
                                "name": "Om SriTara",
                                "url": "https://www.omsritara.in"
                            }
                        }
                    ])
                }}
            />
        </Head>

        <CategoriesBasedProduct />;
    </>

}

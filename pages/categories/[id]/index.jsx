import Head from "next/head";
import CategoriesBasedProduct from "@/components/CategoriesBasedProduct";
import categories from "../../../pages/data/categories.json";

export async function getStaticProps({ params }) {
    const category = categories.find(
        (cat) => cat.slug === params.id
    );

    if (!category) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            category,
        },
    };
}

export async function getStaticPaths() {
    return {
        paths: categories.map((cat) => ({
            params: {
                id: cat.slug,
            },
        })),
        fallback: false,
    };
}

export default function CategoriesProduct({ category }) {
    const url = `https://www.omsritara.in/categories/${category.slug}`;

    return (
        <>
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

                <meta
                    name="robots"
                    content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
                />

                <link rel="canonical" href={url} />

                <link
                    rel="image_src"
                    href={category.category_image}
                />

                {/* Open Graph */}
                <meta property="og:title" content={category.seo_title} />
                <meta property="og:description" content={category.seo_description} />
                <meta property="og:image" content={category.category_image} />
                <meta property="og:url" content={url} />
                <meta property="og:type" content="website" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={category.seo_title} />
                <meta name="twitter:description" content={category.seo_description} />
                <meta name="twitter:image" content={category.category_image} />

                {/* Schema */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@type": "CollectionPage",
                            "name": category.schema?.name,
                            "description": category.schema?.description,
                            "url": url,
                            "image": category.category_image,
                            "mainEntity": {
                                "@type": "ItemList",
                                "name": category.schema?.itemListName,
                                "itemListOrder": "https://schema.org/ItemListOrderAscending",
                                "itemListElement":
                                    category.schema?.items?.map((item, index) => ({
                                        "@type": "ListItem",
                                        "position": index + 1,
                                        "name": item,
                                    })) || [],
                            },
                        }),
                    }}
                />
            </Head>

            {category.pageTitle && (
                <h1 className="text-3xl font-bold text-center mt-2">
                    {category.pageTitle}
                </h1>
            )}

            <CategoriesBasedProduct />
        </>
    );
}
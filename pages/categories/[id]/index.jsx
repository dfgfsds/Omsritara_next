import Head from "next/head";
import CategoriesBasedProduct from "@/components/CategoriesBasedProduct";
import categories from "../../../pages/data/categories.json";

export async function getStaticProps({ params }) {
    let category = categories.find(
        (cat) => cat.slug === params.id
    );

    if (!category) {
        const formattedTitle = params.id
            ? params.id
                .split("-")
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                .join(" ")
            : "Category";

        category = {
            name: params.id,
            slug: params.id,
            seo_title: `${formattedTitle} | Omsritara`,
            seo_description: `Explore authentic ${formattedTitle} collection at Omsritara. Spiritually energized products with online delivery across India.`,
            seo_keywords: `${formattedTitle}, spiritual products, Omsritara`,
            banner_image: "https://www.omsritara.in/banner2.jpg",
            category_image: "https://www.omsritara.in/banner2.jpg",
            pageTitle: formattedTitle,
            schema: {
                name: `${formattedTitle} Collection`,
                description: `Explore authentic ${formattedTitle} collection at Omsritara.`,
                itemListName: `${formattedTitle} Collection`,
                items: [formattedTitle],
            },
        };
    }

    return {
        props: {
            category,
        },
        revalidate: 60,
    };
}

export async function getStaticPaths() {
    return {
        paths: categories.map((cat) => ({
            params: {
                id: cat.slug,
            },
        })),
        fallback: "blocking",
    };
}

export default function CategoriesProduct({ category }) {
    const url = `https://www.omsritara.in/categories/${category.slug}`;
    const isRudraksha = category?.slug === "rudraksha";

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
                    content={category.robots || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"}
                />

                <link rel="canonical" href={category.canonical_url || url} />

                <link
                    rel="image_src"
                    href={category.image_src || category.category_image}
                />

                {/* Open Graph */}
                <meta property="og:type" content={category.og_type || "website"} />
                {category.og_site_name && (
                    <meta property="og:site_name" content={category.og_site_name} />
                )}
                <meta property="og:title" content={category.og_title || category.seo_title} />
                <meta property="og:description" content={category.og_description || category.seo_description} />
                <meta property="og:image" content={category.og_image || category.category_image} />
                {category.og_image_alt && (
                    <meta property="og:image:alt" content={category.og_image_alt} />
                )}
                <meta property="og:url" content={category.og_url || url} />
                {category.og_locale && (
                    <meta property="og:locale" content={category.og_locale} />
                )}

                {/* Twitter */}
                <meta name="twitter:card" content={category.twitter_card || "summary_large_image"} />
                <meta name="twitter:title" content={category.twitter_title || category.seo_title} />
                <meta name="twitter:description" content={category.twitter_description || category.seo_description} />
                <meta name="twitter:image" content={category.twitter_image || category.category_image} />
                {category.twitter_image_alt && (
                    <meta name="twitter:image:alt" content={category.twitter_image_alt} />
                )}

                {/* Schema */}
                {category.schemas && Array.isArray(category.schemas) ? (
                    category.schemas.map((sch, idx) => (
                        <script
                            key={idx}
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{
                                __html: JSON.stringify(sch),
                            }}
                        />
                    ))
                ) : (
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
                )}

                {/* Meta Pixel Code for Rudraksha Category */}
                {isRudraksha && (
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                !function(f,b,e,v,n,t,s)
                                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                                n.queue=[];t=b.createElement(e);t.async=!0;
                                t.src=v;s=b.getElementsByTagName(e)[0];
                                s.parentNode.insertBefore(t,s)}(window, document,'script',
                                'https://connect.facebook.net/en_US/fbevents.js');
                                fbq('init', '1240531971583656');
                                fbq('track', 'PageView');
                            `,
                        }}
                    />
                )}
            </Head>

            {isRudraksha && (
                <noscript>
                    <img
                        height="1"
                        width="1"
                        style={{ display: "none" }}
                        src="https://www.facebook.com/tr?id=1240531971583656&ev=PageView&noscript=1"
                        alt=""
                    />
                </noscript>
            )}



            <CategoriesBasedProduct hideDescription={!!category?.content_html} />
            <div className="max-w-6xl mx-auto px-4 md:px-6 py-8 mt-6 mb-12 border-t border-gray-100">
                {category.pageTitle && (
                    <h1 className="text-3xl font-bold text-center mt-2">
                        {category.pageTitle}
                    </h1>
                )}

                {category.content_html && (
                    <section className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100">
                        <div
                            className="quill-content"
                            dangerouslySetInnerHTML={{ __html: category.content_html }}
                        />
                    </section>
                )}
            </div>
        </>
    );
}
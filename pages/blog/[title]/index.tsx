import { useState, useEffect } from "react";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import axios from "axios";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/router";
import Head from "next/head";
import type { GetStaticPaths, GetStaticProps } from "next";
import { slugify, slugConvert } from "@/lib/utils";

interface Blog {
    id: number;
    title: string;
    description: string;
    created_at: string;
    banner_url: string;
    content: string;
    meta_title?: string;
    meta_description?: string;
    canonical_tag?: string;
    robots_tag?: string;
    url_description?: string;
    og_tags?: string | any;
    twitter_tags?: string | any;
    image_src_tags?: string | any;
    schema?: string | any;
    url_slug?: string;
}

export default function SingleBlogPage({ blog }: { blog: Blog | null }) {
    const router = useRouter();
    const [currentBlog, setCurrentBlog] = useState<Blog | null>(blog);

    useEffect(() => {
        if (blog) {
            setCurrentBlog(blog);
        } else {
            const rawSlug = router.query.title as string;
            if (rawSlug) {
                const fetchBlog = async () => {
                    try {
                        const rawEnv = process.env.NEXT_PUBLIC_API_BASE_URL;
                        const isEnvValid = rawEnv && !rawEnv.includes("justvy.in");
                        const apiBase = (isEnvValid ? rawEnv : null) || baseUrl || "https://ecomapi.ftdigitalsolutions.org";
                        const res = await axios.get(`${apiBase}/blog/?vendor_id=63`);
                        const blogs: Blog[] = res.data?.blogs || [];
                        const target = decodeURIComponent(rawSlug).trim().toLowerCase();
                        const matched = blogs.find((item: Blog) => {
                            const matchId = String(item.id) === target;
                            const matchUrlSlug = item.url_slug && item.url_slug.trim().toLowerCase() === target;
                            const matchSlugify = item.title && slugify(item.title).toLowerCase() === target;
                            const matchSlugConvert = item.title && slugConvert(item.title).toLowerCase() === target;
                            const matchNormalized = item.title && slugify(item.title).replace(/--+/g, "-").toLowerCase() === target.replace(/--+/g, "-");
                            return matchId || matchUrlSlug || matchSlugify || matchSlugConvert || matchNormalized;
                        });
                        if (matched) {
                            setCurrentBlog(matched);
                        }
                    } catch (e) {
                        console.error("Client fallback single blog fetch error:", e);
                    }
                };
                fetchBlog();
            }
        }
    }, [blog, router.query.title]);

    if (router.isFallback) {
        return (
            <div className="max-w-4xl mx-auto py-20 text-center">
                <p className="text-gray-500">Loading blog...</p>
            </div>
        );
    }

    if (!currentBlog) {
        return (
            <div className="max-w-4xl mx-auto py-20 text-center">
                <Head>
                    <title>Blog Not Found | Omsritara</title>
                    <meta
                        name="description"
                        content="Sorry, the blog you’re looking for doesn’t exist. Explore more inspiring stories on Omsritara."
                    />
                </Head>

                <h2 className="text-2xl font-bold">Blog not found</h2>
                <p className="text-gray-500 mt-2">
                    Sorry, the blog you’re looking for doesn’t exist.
                </p>
            </div>
        );
    }

    const currentSlug = currentBlog.url_slug || slugify(currentBlog.title || "");
    const canonicalUrl = currentBlog.canonical_tag || `https://www.omsritara.in/blog/${currentSlug}`;

    const imageSrc =
        typeof currentBlog.image_src_tags === "string" && currentBlog.image_src_tags.trim().length > 0
            ? currentBlog.image_src_tags
            : currentBlog.banner_url || "https://www.omsritara.in/images/blog-banner.jpg";

    const metaTitle =
        (typeof currentBlog.meta_title === "string" && currentBlog.meta_title.trim().length > 0)
            ? currentBlog.meta_title
            : `${currentBlog.title} | Omsritara Blog`;

    const cleanContentSnippet = currentBlog.content ? currentBlog.content.replace(/<[^>]*>/g, "").slice(0, 160) : "";
    const metaDescription =
        (typeof currentBlog.meta_description === "string" && currentBlog.meta_description.trim().length > 0)
            ? currentBlog.meta_description
            : currentBlog.description?.slice(0, 160) || cleanContentSnippet;

    const hasCustomSchema =
        currentBlog.schema &&
        (typeof currentBlog.schema === "string"
            ? currentBlog.schema.trim().length > 0 && currentBlog.schema.trim() !== "{}"
            : Object.keys(currentBlog.schema).length > 0);

    const defaultSchema = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": currentBlog.title,
        "description": metaDescription,
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": canonicalUrl
        },
        "author": {
            "@type": "Organization",
            "name": "Omsritara"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Omsritara",
            "logo": {
                "@type": "ImageObject",
                "url": "https://www.omsritara.in/logo.png"
            }
        },
        "image": imageSrc,
        "url": canonicalUrl,
        "datePublished": currentBlog.created_at
    };

    return (
        <div className="max-w-4xl mx-auto py-12 px-4">
            {/* ✅ Dynamic SEO Meta Tags */}
            <Head>
                <title>{metaTitle}</title>
                <meta name="description" content={metaDescription} />
                <meta name="robots" content={currentBlog.robots_tag || "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"} />
                {currentBlog.url_description && <meta name="url_description" content={currentBlog.url_description} />}

                <meta property="og:title" content={metaTitle} />
                <meta property="og:description" content={metaDescription} />
                <meta property="og:image" content={imageSrc} />
                <meta property="og:type" content="article" />
                <meta property="og:site_name" content="omsritara" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={metaTitle} />
                <meta name="twitter:description" content={metaDescription} />
                <meta name="twitter:image" content={imageSrc} />

                <link rel="canonical" href={canonicalUrl} />
                <link rel="image_src" href={imageSrc} />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: hasCustomSchema
                            ? (typeof currentBlog.schema === "string" ? currentBlog.schema : JSON.stringify(currentBlog.schema))
                            : JSON.stringify(defaultSchema)
                    }}
                />
            </Head>

            {/* ✅ Back Button */}
            <button
                onClick={() => router.back()}
                className="flex items-center text-gray-700 hover:text-black mb-6"
            >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back
            </button>

            {/* Blog Image */}
            {currentBlog.banner_url && (
                <div className="relative w-full h-96 rounded-lg overflow-hidden mb-8">
                    <Image
                        src={currentBlog.banner_url}
                        alt={currentBlog.title}
                        height={500}
                        width={800}
                        className="object-cover"
                    />
                </div>
            )}

            {/* Blog Title */}
            <h1 className="text-3xl font-bold mb-4">{currentBlog.title}</h1>

            {/* Blog Date */}
            <p className="text-gray-500 text-sm mb-8">
                {new Date(currentBlog.created_at).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                })}
            </p>

            {/* Blog Content */}
            <div dangerouslySetInnerHTML={{ __html: currentBlog?.content || "" }} className="quill-content" />
        </div>
    );
}

// ✅ SSG Paths: Pre-renders all blog pages at build time
export const getStaticPaths: GetStaticPaths = async () => {
    try {
        const vendorId = 63;
        const rawEnv = process.env.NEXT_PUBLIC_API_BASE_URL;
        const isEnvValid = rawEnv && !rawEnv.includes("justvy.in");
        const apiBase = (isEnvValid ? rawEnv : null) || baseUrl || "https://ecomapi.ftdigitalsolutions.org";

        const headers = {
            Origin: process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in",
            Referer: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in"}/`,
            Accept: "application/json",
        };

        const res = await axios.get(
            `${apiBase}/blog/?vendor_id=${vendorId}`,
            { headers }
        );

        const blogs: Blog[] = res.data?.blogs || [];
        const paths: { params: { title: string } }[] = [];
        const seenSlugs = new Set<string>();

        blogs.forEach((item) => {
            if (item.url_slug && item.url_slug.trim()) {
                const slug = item.url_slug.trim();
                if (!seenSlugs.has(slug)) {
                    seenSlugs.add(slug);
                    paths.push({ params: { title: slug } });
                }
            }
            if (item.title && item.title.trim()) {
                const slug = slugify(item.title);
                if (slug && !seenSlugs.has(slug)) {
                    seenSlugs.add(slug);
                    paths.push({ params: { title: slug } });
                }
                const slug2 = slugConvert(item.title);
                if (slug2 && !seenSlugs.has(slug2)) {
                    seenSlugs.add(slug2);
                    paths.push({ params: { title: slug2 } });
                }
            }
        });

        return {
            paths,
            fallback: "blocking",
        };
    } catch (error) {
        console.error("SSG getStaticPaths Blog fetch error:", error);
        return {
            paths: [],
            fallback: "blocking",
        };
    }
};

// ✅ SSG Data Fetching with Incremental Static Regeneration (ISR)
export const getStaticProps: GetStaticProps = async (context) => {
    const rawTitle = context.params?.title;

    if (!rawTitle || typeof rawTitle !== "string") {
        return {
            notFound: true,
            revalidate: 60,
        };
    }

    const titleParam = decodeURIComponent(rawTitle).trim().toLowerCase();

    try {
        const vendorId = 63;
        const rawEnv = process.env.NEXT_PUBLIC_API_BASE_URL;
        const isEnvValid = rawEnv && !rawEnv.includes("justvy.in");
        const apiBase = (isEnvValid ? rawEnv : null) || baseUrl || "https://ecomapi.ftdigitalsolutions.org";

        const headers = {
            Origin: process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in",
            Referer: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in"}/`,
            Accept: "application/json",
        };

        const res = await axios.get(
            `${apiBase}/blog/?vendor_id=${vendorId}`,
            { headers }
        );

        const blogs: Blog[] = res.data?.blogs || [];
        const matched = blogs.find((item: Blog) => {
            const matchId = String(item.id) === titleParam;
            const matchUrlSlug = item.url_slug && item.url_slug.trim().toLowerCase() === titleParam;
            const matchSlugify = item.title && slugify(item.title).toLowerCase() === titleParam;
            const matchSlugConvert = item.title && slugConvert(item.title).toLowerCase() === titleParam;
            const matchNormalized = item.title && slugify(item.title).replace(/--+/g, "-").toLowerCase() === titleParam.replace(/--+/g, "-");
            return matchId || matchUrlSlug || matchSlugify || matchSlugConvert || matchNormalized;
        });

        if (!matched) {
            return {
                notFound: true,
                revalidate: 60,
            };
        }

        return {
            props: {
                blog: matched,
            },
            revalidate: 60,
        };
    } catch (error) {
        console.error("SSG getStaticProps Blog fetch error:", error);
        return {
            notFound: true,
            revalidate: 60,
        };
    }
};

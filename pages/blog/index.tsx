import Head from "next/head";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import axios from "axios";
import BlogAllPages from "@/components/BlogAllPages";

export default function BlogPage({ blogs }: { blogs: any[] }) {
    return (
        <>
            <Head>
                {/* SEO Meta Tags */}
                <title>
                    Spiritual Blog | Healing, Astrology & Divine Insights – Om Sritara
                </title>

                <meta
                    name="description"
                    content="Read Om Sritara’s spiritual blog for insights on healing crystals, astrology, mantras, divine practices and positive living."
                />

                {/* Canonical URL */}
                <link
                    rel="canonical"
                    href="https://www.omsritara.in/blog"
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

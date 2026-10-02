// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        unoptimized: true,
        domains: [

            "www.reikicrystalproducts.com",
            "ecomapi.ftdigitalsolutions.org",
            "cdn.shopify.com",
            "semantic-ui.com",
            "cdn-icons-png.flaticon.com",

        ],
    },
    async rewrites() {
        return [
            {
                source: "/robots.txt",
                destination: "/api/robots",
            },
            {
                source: "/sitemap.xml",
                destination: "/api/sitemap",
            },
        ];
    },

    async redirects() {
        return [
            {
                source: "/shopByIntention/:name",
                destination: "/shopByIntention",
                permanent: true,
            },
            {
                source: "/connect",
                destination: "/connect/ta",
                permanent: true,
            },
            {
                source: "/blog/:title",
                destination: "/blog",
                permanent: true,
            },
            {
                source: "/blog/the-confidence-stone-how-a-carnelian-ring-uplifts-your-mood",
                destination: "/blog",
                permanent: true,
            },
            {
                source: "/shopByIntention/Feng Shui",
                destination: "/shopByIntention",
                permanent: true,
            },
            {
                source: "/categories/terms-conditions",
                destination: "/categories",
                permanent: true,
            }

        ];
    },
};

module.exports = nextConfig;

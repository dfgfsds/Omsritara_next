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
                source: "/shopByIntention/Feng Shui",
                destination: "/shopByIntention",
                permanent: true,
            },
            {
                source: "/categories/terms-conditions",
                destination: "/categories",
                permanent: true,
            },
            {
                source: "/index.html",
                destination: "/",
                permanent: true,
            },
            {
                source: "/categories/cancellation-policy",
                destination: "/cancellation-policy",
                permanent: true,
            },
            {
                source: "/categories/432",
                destination: "/categories",
                permanent: true,
            },
            {
                source: "/egyptian-cartouche-course",
                destination: "/courses/egyptian-cartouche-course",
                permanent: true,
            },
            {
                source: "/contactUs",
                destination: "/contact-us",
                permanent: true,
            },
            {
                source: "/akashic-records-course",
                destination: "/courses/akashic-records-course",
                permanent: true,
            },
            {
                source: "/akashic-records-course",
                destination: "/courses/akashic-records-course",
                permanent: true,
            },
            {
                source: "/gemstones/november",
                destination: "/gemstones/stone/yellow-topaz",
                permanent: true,
            },
        ];
    },
};

module.exports = nextConfig;

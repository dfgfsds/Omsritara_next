// pages/sitemap.xml.js
import ApiUrls from "../api-endpoints/ApiUrls";
import axios from "axios";

export default function Sitemap() {
  return null;
}

export async function getServerSideProps({ res }) {
  const lastmod = new Date().toISOString();

  const urls = [
    // Main Pages
    { loc: "/", priority: "1.00", changefreq: "daily" },
    { loc: "/shop", priority: "0.90", changefreq: "daily" },
    { loc: "/categories", priority: "0.90", changefreq: "weekly" },
    { loc: "/shopByIntention", priority: "0.90", changefreq: "weekly" },
    { loc: "/connect/en", priority: "0.90", changefreq: "weekly" },
    { loc: "/connect/ta", priority: "0.90", changefreq: "weekly" },
    { loc: "/contact-us", priority: "0.80", changefreq: "monthly" },
    { loc: "/blog", priority: "0.90", changefreq: "daily" },
    { loc: "/about", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses", priority: "0.90", changefreq: "weekly" },
    { loc: "/combo-offers", priority: "0.80", changefreq: "weekly" },
    { loc: "/combo-offers-love", priority: "0.80", changefreq: "weekly" },

    // SEO Team Pages
    { loc: "/wishlist", priority: "0.60", changefreq: "weekly" },

    // Policies
    { loc: "/shipping-policy", priority: "0.30", changefreq: "yearly" },
    { loc: "/refund-policy", priority: "0.30", changefreq: "yearly" },
    { loc: "/terms-conditions", priority: "0.30", changefreq: "yearly" },
    { loc: "/privacy-policy", priority: "0.30", changefreq: "yearly" },
    { loc: "/cancellation-policy", priority: "0.30", changefreq: "yearly" },

    // Categories (Fetched dynamically)

    // Gemstones
    { loc: "/gemstones/mesham", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/rishabam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/mithunam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/kadagam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/simmam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/kanni", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/thulam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/viruchigam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/dhanusu", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/magaram", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/kumbam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/meenam", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/sun-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/moon-chandra-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/mars-mangal-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/mercury-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/jupiter-guru-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/venus-shukra-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/saturn-shani-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/rahu-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/ketu-gemstones", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/january-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/february-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/march-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/april-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/may-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/june-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/july-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/august-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/september-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/october-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/november-birthstone", priority: "0.80", changefreq: "weekly" },
    { loc: "/gemstones/december-birthstone", priority: "0.80", changefreq: "weekly" },

    // Shop By Intention
    { loc: "/shopByIntention/Love", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Spiritual", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Education", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Peace", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Confidence", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Money", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Business%20Growth", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Healing", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Health", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Clarity", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Protection", priority: "0.80", changefreq: "weekly" },
    { loc: "/shopByIntention/Feng%20Shui", priority: "0.80", changefreq: "weekly" },

    // Blog Pages (Fetched dynamically)

    { loc: "/courses/reiki-level-1", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/reiki-level-2-3-4", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/lama-fera-healing", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/amadeus-healing-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/akashic-records-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/sujok-therapy-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/humkara-with-haleem-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/kwan-yin-healing-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/egyptian-cartouche-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/pancha-pakshi-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/shamanism-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/switch-words-angel-codes-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/angel-reiki-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/shamballa-reiki-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/angel-and-archangel-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/green-tara-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/goddess-fortuna-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/basic-numerology-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/chakras-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/crystals-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/pendulum-dowsing-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/hooponopono-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/quantum-healing-course", priority: "0.80", changefreq: "monthly" },
    { loc: "/courses/thanthrigam-course", priority: "0.80", changefreq: "monthly" },
  ];

  const apiHeaders = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)',
    'Referer': 'https://www.omsritara.in/',
    'Origin': 'https://www.omsritara.in'
  };

  let productUrls = [];
  try {
    const response = await axios.get(`${ApiUrls.product}?vendor_id=63`, { headers: apiHeaders });
    const products = response.data?.data || response.data || [];

    // In case products is not an array, default to empty array
    const productArray = Array.isArray(products) ? products : [];

    productUrls = productArray.map((product) => {
      const name = product.name || "";
      const slug = name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      return { loc: `/shop/${slug}`, priority: "0.80", changefreq: "weekly" };
    });
  } catch (error) {
    console.error("Failed to fetch products for sitemap:", error.message);
  }

  let categoryUrls = [];
  try {
    const response = await axios.get(`${ApiUrls.categories}/63`, { headers: apiHeaders });
    const categories = response.data?.data || response.data || [];
    const categoryArray = Array.isArray(categories) ? categories : [];

    categoryUrls = categoryArray.map((category) => {
      const name = category.name || "";
      const slug = name
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      return { loc: `/categories/${slug}`, priority: "0.80", changefreq: "weekly" };
    });
  } catch (error) {
    console.error("Failed to fetch categories for sitemap:", error.message);
  }

  let blogUrls = [];
  try {
    const response = await axios.get(`${ApiUrls.baseUrl}/blog/?vendor_id=63`, { headers: apiHeaders });
    const blogs = response.data?.blogs || [];
    const blogArray = Array.isArray(blogs) ? blogs : [];

    blogUrls = blogArray.map((blog) => {
      const title = blog.title || "";
      const slug = title
        .toLowerCase()
        .trim()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]+/g, "");

      return { loc: `/blog/${slug}`, priority: "0.70", changefreq: "monthly" };
    });
  } catch (error) {
    console.error("Failed to fetch blogs for sitemap:", error.message);
  }

  const allUrls = [...urls, ...productUrls, ...categoryUrls, ...blogUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${allUrls
      .map(
        ({ loc, priority, changefreq }) => `
  <url>
    <loc>https://www.omsritara.in${loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
      )
      .join("")}

</urlset>`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}
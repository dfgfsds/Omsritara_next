// pages/sitemap.xml.js

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

    // Categories
    { loc: "/categories/bracelet", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/mala", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/spiritual-statues", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/rings", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/earrings", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/pendants", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/pendulums", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/healing-stones", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/coins-and-cubes", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/sangu", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/angels", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/pyramid", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/crystal-bowls-and-plates", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/yanthirams-and-chakra", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/healing-sticks-and-towers", priority: "0.80", changefreq: "weekly" },
    { loc: "/categories/spiritual-cards", priority: "0.80", changefreq: "weekly" },

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

    // Blog Pages (SEO Team)
    {
      loc: "/blog/why-you-should-keep-a-rose-quartz-pyramid-in-your-living-space",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/amazonite-chip-bracelet-meaning-healing-properties-benefits",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/daily-rituals-with-a-clear-quartz-angel-to-attract-positivity",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/black-tourmaline-mala-a-powerful-tool-for-stress-relief",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/seven-chakra-pendant-for-stress-relief-and-emotional-balance",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/how-selenite-plate-balances-energy-and-promotes-mental-clarity",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/daily-rituals-with-carnelian-chip-mala-for-energy-balance",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/how-to-choose-genuine-dyed-sandstone-chip-mala-for-maximum-benefits",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/the-confidence-stone-how-a-carnelian-ring-uplifts-your-mood",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/why-om-sri-taras-amethyst-pendulum-is-perfect-for-energy-healing",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/manifesting-with-energy-how-to-use-a-7-chakra-pendulum-for-transformation",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/pyrite-bitcoin-a-fusion-of-crystal-energy-and-financial-symbolism",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/where-to-buy-genuine-ganesh-face-sangu-online-in-india",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/howlite-bracelet-for-sleep-can-it-help-you-rest-better",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/where-to-buy-a-genuine-money-magnet-bracelet-online",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/unlock-abundance-the-power-of-money-symbol-cards-in-manifestation",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/why-the-vishnu-chakra-is-essential-for-balancing-energies-in-your-space",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/top-reasons-to-keep-a-pyrite-plate-on-your-office-desk-for-focus-and-confidence",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/best-time-to-wear-your-7-chakra-bracelet-for-positive-energy",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/citrine-bracelet-styling-tips-wear-it-with-confidence-and-intention",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/can-a-green-aventurine-bracelet-really-attract-wealth-and-luck",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/cat-oval-pendant-for-wealth-luck-protection",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/top-reasons-to-add-an-aquamarine-mala-to-your-crystal-collection",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/unlocking-love-energy-through-relationship-healing-cards",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/how-to-use-the-switch-word-crystal-coin-for-wealth-and-prosperity",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/power-of-large-gomathi-chakra-vastu-balance-and-wealth-energy",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/door-mantra-card-a-simple-way-to-maintain-a-positive-aura-at-home",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/pyrite-lakshmi-plate-attract-wealth-and-divine-prosperity-daily",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/how-the-pointed-healing-stick-boosts-meditation-and-energy-healing",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/how-to-use-an-amethyst-angel-for-meditation-and-energy-cleansing",
      priority: "0.70",
      changefreq: "monthly",
    },
    {
      loc: "/blog/why-every-home-and-business-needs-a-lakshmi-yantram-frame",
      priority: "0.70",
      changefreq: "monthly",
    },
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

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset
xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">

${urls
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
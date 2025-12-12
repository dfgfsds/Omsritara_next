import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Certificates from "@/components/Certificates";
import FeaturedCategories from "@/components/FeaturedCategories";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import Bracelets from "@/components/SpecialPackages";
import Testimonials from "@/components/Testimonials";
import { baseUrl } from "@/api-endpoints/ApiUrls";
import axios from "axios";
import FAQSection from "@/components/FAQ";
import Head from "next/head";


export default function Home({ blogs }: { blogs: any[] }) {

  return (
    <>
      <Head>
        <title>Buy Healing Crystals Online in India - Omsritara</title>
        <meta
          name="description"
          content="Shop healing crystals, Reiki crystal products & raw stones online in India. Omsritara – your trusted healing crystals shop online."
        />

      </Head>
      <div>

        <HeroSection />
        <FeaturedCategories />
        <NewArrivals />
        <Bracelets />
        <AboutSection />
        {/* <BrandStorySection/> */}
       
        <BlogSection blogs={blogs} />
        <Certificates />
        <Testimonials />
        <FAQSection />
      </div>
    </>

  );
}

// ✅ Server-Side Rendering
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

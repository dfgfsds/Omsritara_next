

import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import Certificates from "@/components/Certificates";
import FeaturedCategories from "@/components/FeaturedCategories";
import HeroSection from "@/components/HeroSection";
import NewArrivals from "@/components/NewArrivals";
import Bracelets from "@/components/SpecialPackages";
import Testimonials from "@/components/Testimonials";
import FAQSection from "@/components/FAQ";

import axios from "axios";
import HomeIndex from "@/components/homeIndex";

export default function Home({
  blogs,
  banners,
}: {
  blogs: any[];
  banners: any[];
}) {
  return (
    <>

      <HomeIndex />
      <HeroSection banners={banners} />

      <FeaturedCategories />
      <NewArrivals />
      {/* <Bracelets /> */}
      <AboutSection />
      <BlogSection blogs={blogs} />
      <Certificates />
      <Testimonials />
      <FAQSection />
    </>
  );
}

// ✅ SERVER SIDE
export async function getServerSideProps() {
  try {
    const vendorId = 63;

    const [blogRes, bannerRes] = await Promise.all([
      axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/blog/?vendor_id=${vendorId}`
      ),
      axios.get(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/banners/?vendorId=${vendorId}`
      ),
    ]);

    return {
      props: {
        blogs: blogRes.data?.blogs || [],
        banners: bannerRes.data?.banners || [],
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        blogs: [],
        banners: [],
      },
    };
  }
}
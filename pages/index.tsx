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
import { baseUrl } from "@/api-endpoints/ApiUrls";

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
    const rawEnv = process.env.NEXT_PUBLIC_API_BASE_URL;
    const isEnvValid = rawEnv && !rawEnv.includes("justvy.in");
    const apiBase = (isEnvValid ? rawEnv : null) || baseUrl || "https://ecomapi.ftdigitalsolutions.org";

    const headers = {
      Origin: process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in",
      Referer: `${process.env.NEXT_PUBLIC_FRONTEND_URL || "https://omsritara.in"}/`,
      Accept: "application/json",
    };

    let blogs: any[] = [];
    let banners: any[] = [];

    const [blogResult, bannerResult] = await Promise.allSettled([
      axios.get(`${apiBase}/blog/?vendor_id=${vendorId}`, { headers }),
      axios.get(`${apiBase}/banners/?vendorId=${vendorId}`, { headers }),
    ]);

    if (blogResult.status === "fulfilled") {
      blogs = blogResult.value.data?.blogs || [];
    } else {
      console.error("Home blog fetch error:", blogResult.reason?.message);
    }

    if (bannerResult.status === "fulfilled") {
      banners = bannerResult.value.data?.banners || [];
    } else {
      console.error("Home banner fetch error:", bannerResult.reason?.message);
    }

    return {
      props: {
        blogs,
        banners,
      },
    };
  } catch (error) {
    console.error("Home getServerSideProps error:", error);
    return {
      props: {
        blogs: [],
        banners: [],
      },
    };
  }
}
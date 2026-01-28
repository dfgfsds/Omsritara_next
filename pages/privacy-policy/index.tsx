"use client";
import { usePolicy } from "@/context/PolicyContext";
import Head from "next/head";

function PrivacyPilicy(){
  const { policy,isLoading }: any = usePolicy();

  if (isLoading) {
    return (
      <div className="bg-white p-5 shadow-md rounded-lg lg:p-20 animate-pulse">
        <div className="h-8 bg-gray-300 rounded w-1/2 mb-6"></div>

        <div className="space-y-4">
          {[...Array(4)].map((_, index) => (
            <div key={index} className="h-4 bg-gray-200 rounded w-full"></div>
          ))}
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
          <div className="h-4 bg-gray-200 rounded w-2/4"></div>
        </div>
      </div>
    );
  }
  
  return (
    <>
    <Head>
        {/* SEO Meta Tags */}
        <title>Privacy Policy | Om Sritara – Data Protection & Security</title>
        <meta
          name="description"
          content="Read Om Sritara’s privacy policy to know how we collect, use and protect your personal information."
        />

        {/* Canonical URL */}
        <link
          rel="canonical"
          href="https://www.omsritara.in/privacy-policy"
        />
      </Head>

    <div className="bg-white p-5 shadow-md rounded-lg lg:p-20">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Privacy Policy</h2>
      <div className="text-gray-600" dangerouslySetInnerHTML={{ __html: policy?.data?.privacy_policy }} />
        
    </div>
    </>
  );
}

export default PrivacyPilicy;
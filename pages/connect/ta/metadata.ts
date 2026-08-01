import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://omsritara.in"),
  title: "OmSritara Tamil | Reiki Healing, Crystal Healing & Spiritual Courses Chennai",
  description: "Connect with OmSritara Tamil for Reiki Healing, Meditation, Spiritual Courses, Healing Crystals, WhatsApp support and our spiritual centre in Chennai.",
  keywords: [
    "OmSritara Tamil",
    "Reiki Healing Chennai",
    "Crystal Healing Chennai",
    "Reiki Course Tamil",
    "Reiki Classes Chennai",
    "Reiki Master Chennai",
    "Spiritual Healing Tamil",
    "Crystal Therapy Chennai",
    "Meditation Chennai",
    "Healing Crystals Chennai",
    "Spiritual Products Chennai",
    "Energy Healing Chennai",
    "Chakra Healing Chennai",
    "Holistic Wellness Chennai",
    "Tamil Reiki Course",
    "Tamil Spiritual Community",
    "Tamil Meditation",
    "Best Reiki Centre Chennai",
    "Spiritual Courses Chennai",
    "OmSritara Connect Tamil"
  ],
  alternates: {
    canonical: "https://omsritara.in/connect/ta",
    languages: {
      en: "https://omsritara.in/connect/en",
      ta: "https://omsritara.in/connect/ta",
    },
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "OmSritara Tamil | Reiki Healing & Spiritual Wellness Chennai",
    description: "Official OmSritara Tamil page for Reiki Healing, Crystal Healing, Spiritual Courses, Meditation and Healing Products.",
    url: "https://omsritara.in/connect/ta",
    siteName: "OmSritara",
    locale: "ta_IN",
    type: "website",
    images: [
      {
        url: "/images/og/omsritara-connect-tamil.jpg",
        width: 1200,
        height: 630,
        alt: "OmSritara Tamil Connect",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OmSritara Tamil | Reiki Healing & Crystal Healing",
    description: "Follow OmSritara Tamil for Reiki, Crystal Healing, Spiritual Courses and Wellness.",
    images: ["/images/og/omsritara-connect-tamil.jpg"],
  },
  category: "Spiritual Wellness",
};

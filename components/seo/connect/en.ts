import { Metadata } from "next";

export const metadata: Metadata = {
    metadataBase: new URL("https://omsritara.in"),

    title:
        "OmSritara English | Reiki Healing, Crystal Healing & Spiritual Courses Chennai",

    description:
        "Connect with OmSritara English for Reiki Healing, Meditation, Spiritual Courses, Healing Crystals, WhatsApp support and our spiritual centre in Chennai.",

    keywords: [
        "OmSritara English",
        "Reiki Healing Chennai",
        "Crystal Healing Chennai",
        "Reiki Course English",
        "Reiki Classes Chennai",
        "Reiki Master Chennai",
        "Spiritual Healing",
        "Crystal Therapy Chennai",
        "Meditation Chennai",
        "Healing Crystals Chennai",
        "Spiritual Products Chennai",
        "Energy Healing Chennai",
        "Chakra Healing Chennai",
        "Holistic Wellness Chennai",
        "English Reiki Course",
        "Global Spiritual Community",
        "Meditation Classes Chennai",
        "Best Reiki Centre Chennai",
        "Spiritual Courses Chennai",
        "OmSritara English Connect"
    ],

    alternates: {
        canonical: "https://omsritara.in/connect/en",
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
        title:
            "OmSritara English | Reiki Healing & Spiritual Wellness Chennai",

        description:
            "Official OmSritara English page for Reiki Healing, Crystal Healing, Spiritual Courses, Meditation and Healing Products.",

        url: "https://omsritara.in/connect/en",

        siteName: "OmSritara",

        locale: "en_IN",

        type: "website",

        images: [
            {
                url: "/images/og/omsritara-connect-english.jpg",
                width: 1200,
                height: 630,
                alt: "OmSritara English Connect",
            },
        ],
    },

    twitter: {
        card: "summary_large_image",

        title:
            "OmSritara English | Reiki Healing & Crystal Healing",

        description:
            "Follow OmSritara English for Reiki, Crystal Healing, Spiritual Courses and Wellness.",

        images: ["/images/og/omsritara-connect-english.jpg"],
    },

    category: "Spiritual Wellness",
};

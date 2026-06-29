export const generateFaqSchema = (faq: any[]) => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: {
            "@type": "Answer",
            text: item.answer,
        },
    })),
});

export const generateCourseSchema = (course: any) => ({
    "@context": "https://schema.org",
    "@type": "Course",
    name: course.en.name,
    description: course.en.description,
    provider: {
        "@type": "Organization",
        name: "Omsritara",
        sameAs: "https://omsritara.com",
    },
    educationalLevel: "Beginner",
    inLanguage: ["English", "Tamil"],
    courseMode: ["Online", "Offline"],
    offers: {
        "@type": "Offer",
        price: course.en.offer_price.replace(/[₹,]/g, ""),
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
    },
});

export const generateBreadcrumbSchema = (
    courseName: string,
    slug: string
) => ({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
        {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://omsritara.com",
        },
        {
            "@type": "ListItem",
            position: 2,
            name: "Courses",
            item: "https://omsritara.com/courses",
        },
        {
            "@type": "ListItem",
            position: 3,
            name: courseName,
            item: `https://omsritara.com/courses/${slug}`,
        },
    ],
});
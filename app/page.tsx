import type { Metadata } from "next";
import Script from "next/script";
import Approach from "@/components/Approach/Approach";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Insights from "@/components/Insights/Insights";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhatIBring from "@/components/WhatIBring/WhatIBring";
import { getAllArticles } from "@/lib/articles";
import { buildHomePageStructuredData } from "@/lib/structured-data";

const DESCRIPTION =
    "Ship design systems teams love. I architect UI platforms, uplift engineering culture, and deliver accessible, high-performance products.";

export const metadata: Metadata = {
    description: DESCRIPTION,
    alternates: { canonical: "/" },
    openGraph: {
        title: "Lead Frontend Engineer & Design Systems Specialist | Remote UK",
        description: DESCRIPTION,
        url: "/",
        type: "website",
        images: [{ url: "/opengraph-image" }],
        siteName: "Lapidist",
    },
    twitter: {
        card: "summary_large_image",
        title: "Lead Frontend Engineer & Design Systems Specialist | Remote UK",
        description: DESCRIPTION,
        images: ["/twitter-image"],
    },
};

export default async function Page() {
    const allArticles = await getAllArticles();
    const articles = allArticles.slice(0, 3);
    const datePublished =
        allArticles[allArticles.length - 1]?.date ||
        new Date().toISOString().split("T")[0];
    const structuredData = buildHomePageStructuredData(datePublished);
    return (
        <>
            <Script
                id="structured-data"
                type="application/ld+json"
                strategy="beforeInteractive"
            >
                {JSON.stringify(structuredData)}
            </Script>
            <Hero />
            <TrustedBy />
            <WhatIBring />
            <Approach />
            <Services />
            <Testimonials />
            <Insights articles={articles} />
            <Contact />
            <Footer />
        </>
    );
}

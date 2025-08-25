import Script from "next/script";
import Approach from "@/components/Approach/Approach";
import Hero from "@/components/Hero/Hero";
import Insights from "@/components/Insights/Insights";
import Layout from "@/components/Layout/Layout";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhatIBring from "@/components/WhatIBring/WhatIBring";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata } from "@/lib/metadata";
import { buildHomePageStructuredData } from "@/lib/structured-data";

const DESCRIPTION =
    "Ship design systems teams love. I architect UI platforms, uplift engineering culture, and deliver accessible, high-performance products.";

export const metadata = buildMetadata({
    description: DESCRIPTION,
    canonical: "/",
});

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
            <Layout gap="var(--space-scale-400)">
                <Approach />
                <WhatIBring />
            </Layout>
            <Services />
            <Testimonials />
            <Insights articles={articles} />
        </>
    );
}

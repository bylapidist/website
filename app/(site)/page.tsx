import Script from "next/script";
import {
    Approach,
    Hero,
    Insights,
    Section,
    Services,
    Testimonials,
    TrustedBy,
    WhatIBring,
} from "@/components";
import { buildHomePageStructuredData, buildMetadata } from "@/utils";
import { getAllArticles } from "@/utils/articles";

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
            <Section as="div" container={false} gap="var(--space-scale-400)">
                <Approach />
                <WhatIBring />
            </Section>
            <Services />
            <Testimonials />
            <Insights articles={articles} />
        </>
    );
}

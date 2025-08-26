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
import { getAllArticles } from "@/lib/articles";
import { buildMetadata } from "@/utils";

const DESCRIPTION =
    "Ship design systems teams love. I architect UI platforms, uplift engineering culture, and deliver accessible, high-performance products.";
const OG_IMAGE = "/opengraph-image";
const TWITTER_IMAGE = "/twitter-image";

export const metadata = buildMetadata({
    description: DESCRIPTION,
    canonical: "/",
    openGraph: { images: [{ url: OG_IMAGE }] },
    twitter: { images: [TWITTER_IMAGE] },
});

export default async function Page() {
    const allArticles = await getAllArticles();
    const articles = allArticles.slice(0, 3);
    return (
        <>
            <Hero />
            <TrustedBy />
            <Section as="div" container={false} gap="var(--space-scale-400)">
                <WhatIBring />
                <Approach />
            </Section>
            <Services />
            <Testimonials />
            <Insights articles={articles} />
        </>
    );
}

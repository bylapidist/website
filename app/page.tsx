import Approach from "@/components/Approach/Approach";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Insights from "@/components/Insights/Insights";
import Pledge from "@/components/Pledge/Pledge";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhatIBring from "@/components/WhatIBring/WhatIBring";
import { getAllArticles } from "@/lib/articles";
import { buildHomePageStructuredData } from "@/lib/structured-data";

export default async function Page() {
    const allArticles = await getAllArticles();
    const articles = allArticles.slice(0, 3);
    const datePublished =
        allArticles[allArticles.length - 1]?.date ||
        new Date().toISOString().split("T")[0];
    const structuredData = buildHomePageStructuredData(datePublished);
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <Hero />
            <TrustedBy />
            <WhatIBring />
            <Approach />
            <Pledge />
            <Services />
            <Testimonials />
            <Insights articles={articles} />
            <Contact />
            <Footer />
        </>
    );
}

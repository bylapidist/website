import Approach from "@/components/Approach/Approach";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Insights from "@/components/Insights/Insights";
import Pledge from "@/components/Pledge/Pledge";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhatIBring from "@/components/WhatIBring/WhatIBring";
import { buildStructuredData } from "./structuredData";

export default function Page() {
    const structuredData = buildStructuredData();
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
            <CaseStudies />
            <Testimonials />
            <Insights />
            <Contact />
            <Footer />
        </>
    );
}

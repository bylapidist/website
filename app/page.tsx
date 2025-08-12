import Approach from "@/components/Approach/Approach";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Pledge from "@/components/Pledge/Pledge";
import Services from "@/components/Services/Services";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhatIBring from "@/components/WhatIBring/WhatIBring";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Testimonials from "@/components/Testimonials/Testimonials";
import Insights from "@/components/Insights/Insights";
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
            <Services />
            <Approach />
            <Pledge />
            <CaseStudies />
            <Testimonials />
            <Insights />
            <Contact />
            <Footer />
        </>
    );
}

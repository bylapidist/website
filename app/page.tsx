import Approach from "@/components/Approach/Approach";
import CaseExample from "@/components/CaseExample/CaseExample";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Pledge from "@/components/Pledge/Pledge";
import Services from "@/components/Services/Services";
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
            <WhatIBring />
            <Services />
            <Approach />
            <Pledge />
            <CaseExample />
            <Contact />
            <Footer />
        </>
    );
}

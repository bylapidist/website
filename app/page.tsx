import dynamic from "next/dynamic";

import Hero from "@/components/Hero/Hero";
const Stats = dynamic(() => import("@/components/Stats/Stats"));
const ProblemToSolution = dynamic(
    () => import("@/components/ProblemToSolution/ProblemToSolution"),
);
const Services = dynamic(() => import("@/components/Services/Services"));
const Approach = dynamic(() => import("@/components/Approach/Approach"));
const Pledge = dynamic(() => import("@/components/Pledge/Pledge"));
const CaseExample = dynamic(
    () => import("@/components/CaseExample/CaseExample"),
);
const Contact = dynamic(() => import("@/components/Contact/Contact"));
import Footer from "@/components/Footer/Footer";

import { buildStructuredData } from "@/lib/structuredData";

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
            <Stats />
            <ProblemToSolution />
            <Services />
            <Approach />
            <Pledge />
            <CaseExample />
            <Contact />
            <Footer />
        </>
    );
}

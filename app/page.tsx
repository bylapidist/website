import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Stats from "@/components/Stats/Stats";
import ProblemToSolution from "@/components/ProblemToSolution/ProblemToSolution";
import Services from "@/components/Services/Services";
import Approach from "@/components/Approach/Approach";
import Pledge from "@/components/Pledge/Pledge";
import CaseExample from "@/components/CaseExample/CaseExample";
import Contact from "@/components/Contact/Contact";
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

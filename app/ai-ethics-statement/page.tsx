import Contact from "@/components/Contact/Contact";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import Heading from "@/components/Heading/Heading";
import { buildMetadata } from "@/lib/metadata";

export const metadata = buildMetadata({
    title: "AI Ethics Statement",
    description: "How I use AI responsibly in my work.",
    canonical: "/ai-ethics-statement",
});

export default function AIEthicsStatementPage() {
    return (
        <>
            <Container as="section">
                <Heading level={1}>AI Ethics Statement</Heading>
                <p>
                    I use artificial intelligence to edit articles and generate
                    code throughout this site. The following principles guide
                    that work:
                </p>
                <ul>
                    <li>Transparency about when AI is involved.</li>
                    <li>
                        Accountability for reviewing and validating all
                        AI-generated content.
                    </li>
                    <li>Fairness and avoidance of biased outcomes.</li>
                    <li>
                        Respect for privacy and protection of sensitive data.
                    </li>
                    <li>
                        Commitment to accuracy, safety, and human oversight.
                    </li>
                </ul>
                <p>
                    These principles align with broader professional ethical
                    standards for computing practitioners.
                </p>
            </Container>
            <Contact />
            <Footer />
        </>
    );
}

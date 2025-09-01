import "server-only";
import { Section } from "@/components";
import { buildMetadata } from "@/utils";

export const metadata = buildMetadata({
    title: "AI Ethics Statement",
    description: "How I use AI responsibly in my work.",
    canonical: "/ai-ethics-statement",
});

export default function AIEthicsStatementPage() {
    return (
        <>
            <Section heading="AI Ethics Statement" headingLevel={1}>
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
            </Section>
        </>
    );
}

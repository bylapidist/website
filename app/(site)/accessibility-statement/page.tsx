import { Heading, Section } from "@/components";
import { buildMetadata } from "@/utils";

export const metadata = buildMetadata({
    title: "Accessibility Statement",
    description: "Commitment to an accessible web experience.",
    canonical: "/accessibility-statement",
});

export default function AccessibilityStatementPage() {
    return (
        <>
            <Section heading="Accessibility Statement" headingLevel={1}>
                <p>
                    I strive to make this website accessible to everyone. If you
                    encounter any accessibility barriers or have suggestions,
                    please get in touch so I can improve the experience.
                </p>
                <Heading level={2}>Standards</Heading>
                <p>
                    This site aims to conform to the Web Content Accessibility
                    Guidelines (WCAG) 2.1 Level AA. Pages are regularly reviewed
                    to maintain compliance as content evolves.
                </p>
                <Heading level={2}>High Contrast</Heading>
                <p>
                    Design and layout are checked with high-contrast modes to
                    ensure text remains legible and interactive elements are
                    clearly distinguishable.
                </p>
                <Heading level={2}>Images</Heading>
                <p>
                    All meaningful images include descriptive alternative text.
                    Decorative images are either hidden from assistive
                    technology or omitted entirely.
                </p>
            </Section>
        </>
    );
}

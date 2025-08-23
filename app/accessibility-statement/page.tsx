import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";

export const metadata: Metadata = {
    title: "Accessibility Statement",
    description: "Commitment to an accessible web experience.",
    alternates: { canonical: "/accessibility-statement" },
};

export default function AccessibilityStatementPage() {
    return (
        <>
            <Container as="section">
                <h1>Accessibility Statement</h1>
                <p>
                    I strive to make this website accessible to everyone. If you
                    encounter any accessibility barriers or have suggestions,
                    please get in touch so I can improve the experience.
                </p>
                <h2>Standards</h2>
                <p>
                    This site aims to conform to the Web Content Accessibility
                    Guidelines (WCAG) 2.1 Level AA. Pages are regularly reviewed
                    to maintain compliance as content evolves.
                </p>
                <h2>High Contrast</h2>
                <p>
                    Design and layout are checked with high-contrast modes to
                    ensure text remains legible and interactive elements are
                    clearly distinguishable.
                </p>
                <h2>Images</h2>
                <p>
                    All meaningful images include descriptive alternative text.
                    Decorative images are either hidden from assistive
                    technology or omitted entirely.
                </p>
            </Container>
            <Contact />
            <Footer />
        </>
    );
}

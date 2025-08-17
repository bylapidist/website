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
            </Container>
            <Contact />
            <Footer />
        </>
    );
}

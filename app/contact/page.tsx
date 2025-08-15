import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import { seo } from "@/lib/seo";

export const metadata = seo({
    title: "Contact",
    description:
        "Get in touch for Principal Frontend and design systems leadership.",
    canonical: "/contact",
});

export default function ContactPage() {
    return (
        <>
            <Section heading="Contact" headingLevel={1}>
                <p>
                    Ready to build production-grade design systems? Email
                    <a href="mailto:hello@lapidist.net"> hello@lapidist.net</a>.
                </p>
            </Section>
            <Footer />
        </>
    );
}

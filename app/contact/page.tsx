import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Contact",
    description: "Reach out about frontend leadership or design systems work.",
    url: "/contact",
});

export default function ContactPage() {
    return (
        <>
            <Contact />
            <Footer />
        </>
    );
}

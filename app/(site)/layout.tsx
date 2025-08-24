import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
            <Contact />
            <Footer />
        </>
    );
}

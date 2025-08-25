import { Contact, Footer } from "@/components";

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

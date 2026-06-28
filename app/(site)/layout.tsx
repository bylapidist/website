import "server-only";
import { Footer } from "@/components";
import ScrollRevealObserver from "@/components/ScrollReveal/ScrollRevealObserver";

export default function SiteLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <ScrollRevealObserver />
            {children}
            <Footer />
        </>
    );
}

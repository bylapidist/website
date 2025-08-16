import Link from "next/link";
import Section from "@/components/Section/Section";

export default function NotFound() {
    return (
        <Section heading="Page not found" headingLevel={1}>
            <p>
                Sorry, we couldn&apos;t find the page you&apos;re looking for.
            </p>
            <p>
                <Link href="/">Return home</Link>
            </p>
        </Section>
    );
}

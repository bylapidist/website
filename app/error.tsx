"use client";

import Link from "next/link";
import Section from "@/components/Section/Section";

export default function Error() {
    return (
        <Section heading="Something went wrong" headingLevel={1}>
            <p>Sorry, an unexpected error occurred.</p>
            <p>
                <Link href="/">Return home</Link>
            </p>
        </Section>
    );
}

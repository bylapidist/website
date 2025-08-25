import type { Metadata } from "next";

interface BuildMetadataOptions {
    /** Optional page title */
    title?: string;
    /** Page description */
    description: string;
    /** Canonical URL path, e.g. "/about" */
    canonical: string;
    /** Additional OpenGraph fields */
    openGraph?: Metadata["openGraph"];
    /** Additional Twitter fields */
    twitter?: Metadata["twitter"];
    /** Other metadata fields */
    [key: string]: unknown;
}

export function buildMetadata({
    title,
    description,
    canonical,
    openGraph,
    twitter,
    ...rest
}: BuildMetadataOptions): Metadata {
    return {
        ...(title && { title }),
        description,
        alternates: { canonical },
        openGraph: {
            ...(title && { title }),
            description,
            url: canonical,
            type: "website",
            ...openGraph,
        },
        twitter: {
            card: "summary_large_image",
            ...(title && { title }),
            description,
            ...twitter,
        },
        ...rest,
    };
}

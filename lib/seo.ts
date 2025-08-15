import type { Metadata } from "next";

interface Options {
    title: string;
    description: string;
    canonical: string;
    type?: "website" | "article";
}

export function seo({
    title,
    description,
    canonical,
    type = "website",
}: Options): Metadata {
    return {
        title,
        description,
        alternates: { canonical },
        openGraph: {
            title,
            description,
            url: canonical,
            type,
            images: [{ url: "/opengraph-image" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/twitter-image"],
        },
    };
}

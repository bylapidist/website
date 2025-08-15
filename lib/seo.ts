import type { Metadata } from "next";

interface Options {
    title: string;
    description: string;
    url: string;
    type?: "website" | "article";
    publishedTime?: string;
}

export function buildMetadata({
    title,
    description,
    url,
    type = "website",
    publishedTime,
}: Options): Metadata {
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type,
            ...(publishedTime ? { publishedTime } : {}),
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

import type { Metadata } from "next";

const SITE_NAME = "Lapidist";
const DEFAULT_OG_IMAGE = "/opengraph-image";
const DEFAULT_TWITTER_IMAGE = "/twitter-image";

type OpenGraph = NonNullable<Metadata["openGraph"]>;
type Twitter = NonNullable<Metadata["twitter"]>;

export interface BuildMetadataOptions {
    title?: string;
    description: string;
    canonical: string;
    openGraph?: Partial<OpenGraph>;
    twitter?: Partial<Twitter>;
}

export function buildMetadata({
    title,
    description,
    canonical,
    openGraph,
    twitter,
}: BuildMetadataOptions): Metadata {
    const og: OpenGraph = {
        title,
        description,
        url: canonical,
        type: "website",
        images: [{ url: DEFAULT_OG_IMAGE }],
        siteName: SITE_NAME,
        ...openGraph,
    };

    const tw: Twitter = {
        card: "summary_large_image",
        title,
        description,
        images: [DEFAULT_TWITTER_IMAGE],
        ...twitter,
    };

    return {
        ...(title && { title }),
        description,
        alternates: { canonical },
        openGraph: og,
        twitter: tw,
    };
}

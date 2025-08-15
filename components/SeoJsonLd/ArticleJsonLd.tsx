import React from "react";

interface Props {
    title: string;
    datePublished: string;
    url: string;
}

export default function ArticleJsonLd({ title, datePublished, url }: Props) {
    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: { "@id": "https://lapidist.net/", name: "Home" },
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        item: {
                            "@id": "https://lapidist.net/articles",
                            name: "Articles",
                        },
                    },
                    {
                        "@type": "ListItem",
                        position: 3,
                        item: {
                            "@id": `https://lapidist.net${url}`,
                            name: title,
                        },
                    },
                ],
            },
            {
                "@type": "Article",
                headline: title,
                datePublished,
                author: { "@type": "Person", name: "Brett Dorrans" },
                publisher: { "@type": "Organization", name: "Lapidist" },
                mainEntityOfPage: { "@id": `https://lapidist.net${url}` },
            },
        ],
    } as const;

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}

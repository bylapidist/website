const BASE = "https://lapidist.net";

const PERSON = {
    "@type": "Person",
    "@id": `${BASE}#person`,
    name: "Brett Dorrans",
    url: `${BASE}/`,
    address: {
        "@type": "PostalAddress",
        addressLocality: "Glasgow",
        addressCountry: "GB",
    },
    areaServed: ["United Kingdom", "Remote"],
    knowsAbout: [
        "frontend",
        "design systems",
        "accessibility",
        "performance",
        "governance",
    ],
    sameAs: [
        "https://linkedin.com/in/brettdorrans",
        "https://github.com/brettdorrans",
        "https://github.com/bylapidist",
    ],
} as const;

const ORGANIZATION = {
    "@type": "Organization",
    "@id": `${BASE}#org`,
    name: "Lapidist",
    url: `${BASE}/`,
    founder: { "@id": `${BASE}#person` },
} as const;

export function buildHomePageStructuredData(datePublished: string) {
    const dateModified = new Date().toISOString().split("T")[0];
    return {
        "@context": "https://schema.org",
        "@graph": [
            PERSON,
            ORGANIZATION,
            {
                "@type": "WebSite",
                "@id": `${BASE}#website`,
                url: `${BASE}/`,
                name: "Lapidist",
                publisher: { "@id": `${BASE}#org` },
                potentialAction: { "@id": `${BASE}#search` },
            },
            {
                "@type": "SearchAction",
                "@id": `${BASE}#search`,
                target: `${BASE}/?s={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
            {
                "@type": "WebPage",
                "@id": `${BASE}/#webpage`,
                url: `${BASE}/`,
                name: "Lapidist",
                isPartOf: { "@id": `${BASE}#website` },
                inLanguage: "en-GB",
                datePublished,
                dateModified,
                breadcrumb: { "@id": `${BASE}/#breadcrumb` },
                potentialAction: { "@id": `${BASE}#search` },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${BASE}/#breadcrumb`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: { "@id": `${BASE}/`, name: "Home" },
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": `${BASE}#design-system-consulting`,
                name: "Design System Consulting",
                description:
                    "Strategy and implementation support for design systems.",
                provider: { "@id": `${BASE}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": "Service",
                "@id": `${BASE}#accessibility-auditing`,
                name: "Accessibility Auditing",
                description: "WCAG reviews and inclusive design guidance.",
                provider: { "@id": `${BASE}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": "Service",
                "@id": `${BASE}#frontend-engineering`,
                name: "Frontend Engineering",
                description: "Accessible and performant user interfaces.",
                provider: { "@id": `${BASE}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": "FAQPage",
                mainEntity: [
                    {
                        "@type": "Question",
                        name: "Do you work remotely?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes. Projects run across the UK or remote.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "How long does a bootstrap take?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Typically two to three sprints.",
                        },
                    },
                    {
                        "@type": "Question",
                        name: "Are you taking on new projects?",
                        acceptedAnswer: {
                            "@type": "Answer",
                            text: "Yes, I am available for new roles or contract projects. Get in touch.",
                        },
                    },
                ],
            },
        ],
    } as const;
}

export function buildArticleStructuredData(
    meta: { title: string; description: string; date: string },
    year: string,
    slug: string,
    wordCount: number,
) {
    return {
        "@context": "https://schema.org",
        "@graph": [
            PERSON,
            ORGANIZATION,
            {
                "@type": "Article",
                headline: meta.title,
                description: meta.description,
                datePublished: meta.date,
                author: { "@id": PERSON["@id"] },
                publisher: { "@id": ORGANIZATION["@id"] },
                wordCount,
                url: `${BASE}/${year}/${slug}`,
            },
        ],
    } as const;
}

export { BASE as baseUrl, PERSON as person, ORGANIZATION as organization };

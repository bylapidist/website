const BASE = "https://lapidist.net";

const PERSON = {
    "@type": "Person",
    "@id": `${BASE}#person`,
    name: "Brett Dorrans",
    url: `${BASE}/`,
    jobTitle: "Principal Frontend Engineer",
    image: `${BASE}/opengraph-image`,
    contactPoint: {
        "@type": "ContactPoint",
        contactType: "enquiries",
        email: "hello@lapidist.net",
    },
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
                "@type": ["Service", "ProfessionalService"],
                "@id": `${BASE}#design-system-bootstrap`,
                name: "Design System Bootstrap",
                description:
                    "Launch a production-ready design system in weeks – boosting velocity, cutting rework, and improving accessibility from day one.",
                provider: { "@id": `${BASE}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": ["Service", "ProfessionalService"],
                "@id": `${BASE}#system-audit-roadmap`,
                name: "System Audit & Roadmap",
                description:
                    "Turn existing assets into a strategic UI architecture roadmap that reduces churn and flags risk early.",
                provider: { "@id": `${BASE}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": ["Service", "ProfessionalService"],
                "@id": `${BASE}#hands-on-build`,
                name: "Hands-on Build",
                description:
                    "Ship resilient foundations without diverting your team so releases stay on schedule.",
                provider: { "@id": `${BASE}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": ["Service", "ProfessionalService"],
                "@id": `${BASE}#consulting-team-uplift`,
                name: "Consulting & Team Uplift",
                description:
                    "Raise team capability with ongoing mentorship that lifts quality and autonomy.",
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
                url: `${BASE}/articles/${year}/${slug}`,
            },
        ],
    } as const;
}

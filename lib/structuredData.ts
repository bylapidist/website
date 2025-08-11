export function buildStructuredData() {
    const base = "https://lapidist.net";
    return {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${base}#person`,
                name: "Brett Dorrans",
                url: `${base}/`,
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
            },
            {
                "@type": "Organization",
                "@id": `${base}#org`,
                name: "Lapidist",
                url: `${base}/`,
                founder: { "@id": `${base}#person` },
            },
            {
                "@type": "WebSite",
                "@id": `${base}#website`,
                url: `${base}/`,
                name: "Lapidist",
                publisher: { "@id": `${base}#org` },
            },
            {
                "@type": "Service",
                serviceType: "Design System Consulting",
                provider: { "@id": `${base}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": "Service",
                serviceType: "Accessibility Auditing",
                provider: { "@id": `${base}#person` },
                areaServed: ["United Kingdom", "Remote"],
                offers: {
                    "@type": "AggregateOffer",
                    priceCurrency: "GBP",
                    priceRange: "£££",
                },
            },
            {
                "@type": "Service",
                serviceType: "Frontend Engineering",
                provider: { "@id": `${base}#person` },
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
                            text: "Yes, I available for new roles or contract projects. Get in touch.",
                        },
                    },
                ],
            },
        ],
    } as const;
}

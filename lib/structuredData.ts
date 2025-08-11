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
                "@type": "Service",
                serviceType: "Design System Consulting",
                provider: { "@id": `${base}#person` },
                areaServed: "United Kingdom, Remote",
            },
            {
                "@type": "Service",
                serviceType: "Accessibility Auditing",
                provider: { "@id": `${base}#person` },
                areaServed: "United Kingdom, Remote",
            },
            {
                "@type": "Service",
                serviceType: "Frontend Engineering",
                provider: { "@id": `${base}#person` },
                areaServed: "United Kingdom, Remote",
            },
        ],
    } as const;
}

import React from "react";

export default function SeoJsonLd() {
    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": "https://lapidist.net#person",
                name: "Brett Dorrans",
                jobTitle:
                    "Principal Frontend Engineer & Design Systems Specialist",
                url: "https://lapidist.net/",
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Glasgow",
                    addressCountry: "GB",
                },
                areaServed: ["United Kingdom", "Remote"],
            },
            {
                "@type": "ProfessionalService",
                "@id": "https://lapidist.net#service",
                serviceType:
                    "Frontend engineering leadership and design system consulting",
                provider: { "@id": "https://lapidist.net#person" },
                areaServed: ["United Kingdom", "Remote"],
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

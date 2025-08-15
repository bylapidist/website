import React from "react";

export default function SeoJsonLd() {
    const base = "https://lapidist.net";
    const data = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Person",
                "@id": `${base}#person`,
                name: "Brett Dorrans",
                jobTitle: "Principal Frontend Engineer",
                url: `${base}/`,
                address: {
                    "@type": "PostalAddress",
                    addressLocality: "Glasgow",
                    addressCountry: "GB",
                },
            },
            {
                "@type": "ProfessionalService",
                "@id": `${base}#services`,
                name: "Frontend & Design Systems Leadership",
                areaServed: ["United Kingdom", "Remote"],
                provider: { "@id": `${base}#person` },
                serviceType: [
                    "Design systems",
                    "Accessibility",
                    "UI platforms",
                ],
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

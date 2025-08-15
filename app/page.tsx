import Approach from "@/components/Approach/Approach";
import CaseStudies from "@/components/CaseStudies/CaseStudies";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Hero from "@/components/Hero/Hero";
import Insights from "@/components/Insights/Insights";
import Pledge from "@/components/Pledge/Pledge";
import Services from "@/components/Services/Services";
import Testimonials from "@/components/Testimonials/Testimonials";
import TrustedBy from "@/components/TrustedBy/TrustedBy";
import WhatIBring from "@/components/WhatIBring/WhatIBring";
import { getAllArticles } from "@/lib/articles";

function buildStructuredData() {
    const base = "https://lapidist.net";
    const datePublished = "2020-01-05";
    const dateModified = new Date().toISOString().split("T")[0];
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
                    "API design",
                    "data modelling",
                    "Node.js",
                    "CI/CD",
                    "Docker",
                    "AWS",
                    "payments",
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
                potentialAction: { "@id": `${base}#search` },
            },
            {
                "@type": "SearchAction",
                "@id": `${base}#search`,
                target: `${base}/?s={search_term_string}`,
                "query-input": "required name=search_term_string",
            },
            {
                "@type": "WebPage",
                "@id": `${base}/#webpage`,
                url: `${base}/`,
                name: "Lapidist",
                isPartOf: { "@id": `${base}#website` },
                inLanguage: "en-GB",
                datePublished,
                dateModified,
                breadcrumb: { "@id": `${base}/#breadcrumb` },
                potentialAction: { "@id": `${base}#search` },
            },
            {
                "@type": "BreadcrumbList",
                "@id": `${base}/#breadcrumb`,
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: { "@id": `${base}/`, name: "Home" },
                    },
                ],
            },
            {
                "@type": "Service",
                "@id": `${base}#design-system-bootstrap`,
                name: "Design System Bootstrap & Governance",
                description:
                    "Tokens, components, and contribution rules that keep products consistent.",
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
                "@id": `${base}#frontend-platform-modernisation`,
                name: "Frontend Platform & DX Modernisation",
                description:
                    "Build tooling, testing, and workflow improvements that lift delivery.",
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
                "@id": `${base}#full-stack-foundations`,
                name: "Full-stack Foundations",
                description:
                    "API contracts, data models, auth, and CI/CD to support product delivery.",
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
                            text: "Yes, I am available for new roles or contract projects. Get in touch.",
                        },
                    },
                ],
            },
        ],
    } as const;
}

export default async function Page() {
    const articles = (await getAllArticles()).slice(0, 3);
    const structuredData = buildStructuredData();
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <Hero />
            <TrustedBy />
            <WhatIBring />
            <Approach />
            <Pledge />
            <Services />
            <CaseStudies />
            <Testimonials />
            <Insights articles={articles} />
            <Contact />
            <Footer />
        </>
    );
}

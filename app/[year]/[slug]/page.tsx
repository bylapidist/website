import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import { getAllArticles, getArticle } from "@/lib/articles";
import { seo } from "@/lib/seo";
import styles from "./page.module.scss";

export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map(({ year, slug }) => ({ year, slug }));
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}) {
    const { year, slug } = await params;
    const { meta, content } = await getArticle(year, slug);
    const url = `/${year}/${slug}`;
    const jsonLd = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Article",
                headline: meta.title,
                description: meta.description,
                author: { "@type": "Person", name: "Brett Dorrans" },
                datePublished: meta.date,
                url,
            },
            {
                "@type": "BreadcrumbList",
                itemListElement: [
                    {
                        "@type": "ListItem",
                        position: 1,
                        item: { "@id": "/articles", name: "Articles" },
                    },
                    {
                        "@type": "ListItem",
                        position: 2,
                        item: { "@id": url, name: meta.title },
                    },
                ],
            },
        ],
    };
    return (
        <>
            <Section heading={meta.title} headingLevel={1}>
                <article className={styles.article}>
                    {meta.description && (
                        <p className={styles.description}>{meta.description}</p>
                    )}
                    {content}
                </article>
            </Section>
            <Contact />
            <Footer />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}): Promise<Metadata> {
    const { year, slug } = await params;
    const { meta } = await getArticle(year, slug);
    const url = `/${year}/${slug}`;
    return seo({
        title: meta.title,
        description: meta.description,
        canonical: url,
        type: "article",
    });
}

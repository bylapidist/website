import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import SocialShare from "@/components/SocialShare/SocialShare";
import { getAllArticles, getArticle } from "@/lib/articles";
import { buildArticleStructuredData } from "@/lib/structured-data";
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
    const { meta, content, wordCount } = await getArticle(year, slug);
    const structuredData = buildArticleStructuredData(
        meta,
        year,
        slug,
        wordCount,
    );
    const baseUrl = "https://lapidist.net";
    const url = `${baseUrl}/${year}/${slug}/`;
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData),
                }}
            />
            <Section heading={meta.title} headingLevel={1}>
                <article className={styles.article}>
                    {meta.description && (
                        <p className={styles.description}>{meta.description}</p>
                    )}
                    {content}
                    <SocialShare url={url} title={meta.title} />
                </article>
            </Section>
            <Contact />
            <Footer />
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
    const base = "https://lapidist.net";
    const url = `${base}/${year}/${slug}/`;
    return {
        title: meta.title,
        description: meta.description,
        alternates: { canonical: url },
        openGraph: {
            title: meta.title,
            description: meta.description,
            url,
            type: "article",
            publishedTime: meta.date,
            images: [{ url: "/opengraph-image" }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: ["/twitter-image"],
        },
    };
}

import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import TableOfContents from "@/components/TableOfContents/TableOfContents";
import { getAllArticles, getArticle } from "@/lib/articles";
import { formatDate } from "@/lib/date";
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
    const { meta, content, wordCount, headings } = await getArticle(year, slug);
    const structuredData = buildArticleStructuredData(
        meta,
        year,
        slug,
        wordCount,
    );
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
                    {meta.summary && (
                        <p className={styles.summary}>{meta.summary}</p>
                    )}
                    <p className={styles.meta}>
                        {formatDate(meta.date)}
                        {meta.tags.length > 0 || meta.readingTime ? " · " : ""}
                        {meta.tags.join(", ")}
                        {meta.tags.length > 0 && meta.readingTime ? " · " : ""}
                        {meta.readingTime}
                    </p>
                    {headings.length > 0 && (
                        <TableOfContents headings={headings} />
                    )}
                    {content}
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
    const url = `${base}/articles/${year}/${slug}/`;
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
            images: meta.image ? [{ url: meta.image }] : undefined,
            authors: meta.author.url ? [meta.author.url] : undefined,
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: meta.image ? [meta.image] : undefined,
        },
    };
}

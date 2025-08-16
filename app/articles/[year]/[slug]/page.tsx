import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
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
                    {(meta.tags.length > 0 || meta.readingTime) && (
                        <p className={styles.meta}>
                            {meta.tags.join(", ")}
                            {meta.tags.length > 0 && meta.readingTime
                                ? " · "
                                : ""}
                            {meta.readingTime}
                        </p>
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

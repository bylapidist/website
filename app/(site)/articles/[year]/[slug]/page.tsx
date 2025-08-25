import clsx from "clsx";
import Link from "next/link";
import Script from "next/script";
import { AudioPlayer, Section, TableOfContents } from "@/components";
import {
    buildArticleStructuredData,
    buildMetadata,
    formatDate,
    getAllArticles,
    getArticle,
} from "@/utils";
import styles from "./page.module.scss";

export const dynamicParams = false;

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
            <Script
                id="structured-data"
                type="application/ld+json"
                strategy="beforeInteractive"
            >
                {JSON.stringify(structuredData)}
            </Script>
            <Section heading={meta.title} headingLevel={1}>
                <article className={clsx(styles.article, "prose", "flow")}>
                    {meta.summary && (
                        <p className={clsx(styles.summary, "text-lead")}>
                            {meta.summary}
                        </p>
                    )}
                    <p className={clsx(styles.meta, "text-small")}>
                        {formatDate(meta.date)}
                        {meta.tags.length > 0 || meta.readingTime ? " · " : ""}
                        {meta.tags.join(", ")}
                        {meta.tags.length > 0 && meta.readingTime ? " · " : ""}
                        {meta.readingTime}
                    </p>
                    {meta.audio && (
                        <AudioPlayer
                            src={meta.audio}
                            title="Listen to this article"
                        />
                    )}
                    {headings.length > 0 && (
                        <TableOfContents headings={headings} />
                    )}
                    {content}
                </article>
                <p className={clsx(styles.return, "text-small")}>
                    <Link href="/articles">Return to articles</Link>
                </p>
            </Section>
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}) {
    const { year, slug } = await params;
    const { meta } = await getArticle(year, slug);
    const canonical = `/articles/${year}/${slug}`;
    const ogImage = `/articles/${year}/${slug}/opengraph-image`;
    const twitterImage = `/articles/${year}/${slug}/twitter-image`;
    return buildMetadata({
        title: meta.title,
        description: meta.description,
        canonical,
        openGraph: {
            type: "article",
            publishedTime: meta.date,
            images: [{ url: ogImage }],
            authors: meta.author.url ? [meta.author.url] : undefined,
        },
        twitter: {
            images: [twitterImage],
        },
    });
}

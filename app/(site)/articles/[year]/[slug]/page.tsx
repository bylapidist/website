import "server-only";
import clsx from "clsx";
import Link from "next/link";
import { AudioPlayer, TableOfContents } from "@/components";
import { getAllArticles, getArticle } from "@/lib/articles";
import { buildArticleStructuredData, buildMetadata, formatDate } from "@/utils";
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
    const { meta, content, headings, wordCount } = await getArticle(year, slug);
    return (
        <>
            <script
                id="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(
                        buildArticleStructuredData(meta, year, slug, wordCount),
                    ),
                }}
            />
            <article className={styles.articlePage}>
                <Link href="/articles" className={styles.backLink}>
                    ← All writing
                </Link>
                <header className={styles.articleHeader}>
                    <p className={styles.meta}>
                        {formatDate(meta.date)}
                        {meta.tags.length > 0 || meta.readingTime ? " · " : ""}
                        {meta.tags.join(", ")}
                        {meta.tags.length > 0 && meta.readingTime ? " · " : ""}
                        {meta.readingTime}
                    </p>
                    <h1 className={styles.articleHeading}>{meta.title}</h1>
                </header>
                <div className={clsx(styles.articleBody, "prose", "flow")}>
                    {meta.summary && (
                        <p className={clsx(styles.summary, "text-lead")}>
                            {meta.summary}
                        </p>
                    )}
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
                </div>
            </article>
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
    const ogImage = `/opengraph-image`;
    const twitterImage = `${canonical}/twitter-image`;
    return buildMetadata({
        title: meta.title,
        description: meta.description,
        canonical,
        openGraph: {
            type: "article",
            publishedTime: meta.date,
            images: [{ url: meta.image || ogImage }],
            authors: meta.author.url ? [meta.author.url] : undefined,
        },
        twitter: {
            images: [meta.image || twitterImage],
        },
    });
}

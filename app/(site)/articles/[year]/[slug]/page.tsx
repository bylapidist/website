import "server-only";
import clsx from "clsx";
import Link from "next/link";
import { AudioPlayer, Section, TableOfContents } from "@/components";
import { getAllArticles, getArticle } from "@/lib/articles";
import { buildMetadata, formatDate } from "@/utils";
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
    const { meta, content, headings } = await getArticle(year, slug);
    return (
        <>
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

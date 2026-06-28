import "server-only";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata, formatDate } from "@/utils";
import styles from "./page.module.scss";

const DESCRIPTION =
    "Essays on systems, craft, and the frontend work that doesn't show up in a screenshot.";

export const metadata = buildMetadata({
    title: "Writing",
    description: DESCRIPTION,
    canonical: "/articles",
    openGraph: { images: [{ url: "/opengraph-image" }] },
    twitter: { images: ["/twitter-image"] },
});

export default async function ArticlesPage() {
    const articles = await getAllArticles();
    return (
        <div className={styles.page}>
            <div data-reveal className={styles.pageHeader}>
                <p className={styles.eyebrow}>Writing</p>
                <h1 className={styles.pageTitle}>{DESCRIPTION}</h1>
            </div>
            <ul className={styles.articleList}>
                {articles.map(
                    ({
                        year,
                        slug,
                        title,
                        description,
                        date,
                        tags,
                        readingTime,
                    }) => (
                        <li key={`${year}-${slug}`} data-reveal>
                            <Link
                                href={`/articles/${year}/${slug}`}
                                className={styles.articleLink}
                            >
                                <p className={styles.articleDate}>
                                    {formatDate(date)}
                                </p>
                                <h2 className={styles.articleTitle}>{title}</h2>
                                <p className={styles.articleDesc}>
                                    {description}
                                </p>
                                <p className={styles.articleMeta}>
                                    {tags.join(", ")}
                                    {tags.length > 0 && readingTime
                                        ? " · "
                                        : ""}
                                    {readingTime}
                                </p>
                            </Link>
                        </li>
                    ),
                )}
            </ul>
            <p className={styles.statement}>
                Some articles are edited with AI assistance; see my{" "}
                <Link href="/ai-ethics-statement">AI Ethics Statement</Link> for
                details.
            </p>
        </div>
    );
}

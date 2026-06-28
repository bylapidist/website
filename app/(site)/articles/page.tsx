import "server-only";
import Link from "next/link";
import { getAllArticles } from "@/lib/articles";
import { buildMetadata, formatDate } from "@/utils";
import styles from "./page.module.scss";

const TITLE = "Essays on systems, tokens, and craft.";
const DESCRIPTION =
    "Notes on building interfaces that stay coherent — design systems, frontend architecture, and the tooling that holds them together.";

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
                <h1 className={styles.pageTitle}>{TITLE}</h1>
                <p className={styles.pageDesc}>{DESCRIPTION}</p>
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
                                <h2 className={styles.articleTitle}>{title}</h2>
                                <p className={styles.articleDesc}>
                                    {description}
                                </p>
                                <p className={styles.articleMeta}>
                                    {formatDate(date)}
                                    {tags.length > 0 || readingTime
                                        ? " · "
                                        : ""}
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

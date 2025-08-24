import Link from "next/link";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import { getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/date";
import { buildMetadata } from "@/lib/metadata";
import { Variant } from "@/types";
import styles from "./page.module.scss";

export const metadata = buildMetadata({
    title: "Articles",
    description:
        "Articles and insights on front-end engineering and design systems.",
    canonical: "/articles",
});

export default async function ArticlesPage() {
    const articles = await getAllArticles();
    return (
        <>
            <Section
                heading={
                    <>
                        <span>Articles</span>
                        <a href="/rss.xml">RSS feed</a>
                    </>
                }
                headingClassName={styles.heading}
                headingLevel={1}
            >
                <div className={styles.cards}>
                    {articles.map(
                        ({
                            year,
                            slug,
                            title,
                            summary,
                            date,
                            tags,
                            readingTime,
                        }) => (
                            <Card
                                key={`${year}-${slug}`}
                                as={Link}
                                href={`/articles/${year}/${slug}`}
                                heading={title}
                                headingLevel={2}
                                variant={Variant.Link}
                            >
                                <p className={styles.summary}>{summary}</p>
                                <p className={styles.meta}>
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
                            </Card>
                        ),
                    )}
                </div>
            </Section>
        </>
    );
}

import Link from "next/link";
import Card from "@/components/Card/Card";
import Layout from "@/components/Layout/Layout";
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
                <Layout>
                    <p>
                        I occasionally publish articles on topics I find
                        interesting. I aim to keep everything accurate. If you
                        notice a mistake, please{" "}
                        <Link href="#contact">let me know</Link>.
                    </p>
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
                    <p className={styles.statement}>
                        Some articles are edited with AI; see my{" "}
                        <Link href="/ai-ethics-statement">
                            AI Ethics Statement
                        </Link>{" "}
                        for details.
                    </p>
                </Layout>
            </Section>
        </>
    );
}

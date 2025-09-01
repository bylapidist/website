import "server-only";
import Link from "next/link";
import { Card, Section } from "@/components";
import { getAllArticles } from "@/lib/articles";
import { Variant } from "@/types";
import { buildMetadata, formatDate } from "@/utils";
import styles from "./page.module.scss";

const DESCRIPTION =
    "Explore detailed tutorials, opinions, and case studies on front-end engineering, design systems, accessibility, performance, and modern web development practices.";
const OG_IMAGE = "/opengraph-image";
const TWITTER_IMAGE = "/twitter-image";

export const metadata = buildMetadata({
    title: "Articles",
    description: DESCRIPTION,
    canonical: "/articles",
    openGraph: { images: [{ url: OG_IMAGE }] },
    twitter: { images: [TWITTER_IMAGE] },
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
                <p>
                    I occasionally publish articles on topics I find
                    interesting. I aim to keep everything accurate. If you
                    notice a mistake, please{" "}
                    <Link href="#contact">let me know.</Link>
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
                                {tags.length > 0 || readingTime ? " · " : ""}
                                {tags.join(", ")}
                                {tags.length > 0 && readingTime ? " · " : ""}
                                {readingTime}
                            </p>
                        </Card>
                    ),
                )}
                <p className={styles.statement}>
                    Some articles are edited with AI; see my{" "}
                    <Link href="/ai-ethics-statement">AI Ethics Statement</Link>{" "}
                    for details.
                </p>
            </Section>
        </>
    );
}

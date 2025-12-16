import "server-only";
import { Button, Card, Section } from "@/components";
import { Variant } from "@/types";
import { formatDate } from "@/utils";
import styles from "./Insights.module.scss";

type Article = {
    year: string;
    slug: string;
    title: string;
    summary: string;
    date: string;
    tags: string[];
    readingTime: string;
};

export default function Insights({ articles }: { articles: Article[] }) {
    return (
        <Section
            id="insights"
            heading="Recent articles"
            className={styles.insights}
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
                            href={`/articles/${year}/${slug}`}
                            heading={title}
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
            </div>
            <div className={styles.cta}>
                <Button href="/articles" variant={Variant.Secondary}>
                    View all articles
                </Button>
            </div>
        </Section>
    );
}

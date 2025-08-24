import Link from "next/link";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import { formatDate } from "@/lib/date";
import { Variant } from "@/packages/types";
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
                            as={Link}
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

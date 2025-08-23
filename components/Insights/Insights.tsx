import Link from "next/link";
import Button from "@/components/Button/Button";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import { formatDate } from "@/lib/date";
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
                        <Link
                            key={`${year}-${slug}`}
                            href={`/articles/${year}/${slug}`}
                            className={styles.cardLink}
                        >
                            <Card heading={title}>
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
                        </Link>
                    ),
                )}
            </div>
            <div className={styles.cta}>
                <Button href="/articles" variant="secondary">
                    View all articles
                </Button>
            </div>
        </Section>
    );
}

import Link from "next/link";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Insights.module.scss";

type Article = {
    year: string;
    slug: string;
    title: string;
    summary: string;
    tags: string[];
    readingTime: string;
};

export default function Insights({ articles }: { articles: Article[] }) {
    return (
        <Section
            id="insights"
            heading="Recent work & insights"
            className={styles.insights}
        >
            <div className={styles.cards}>
                {articles.map(
                    ({ year, slug, title, summary, tags, readingTime }) => (
                        <Link key={`${year}-${slug}`} href={`/${year}/${slug}`}>
                            <Card title={title}>
                                <p>{summary}</p>
                                {(tags.length > 0 || readingTime) && (
                                    <p>
                                        {tags.join(", ")}
                                        {tags.length > 0 && readingTime
                                            ? " · "
                                            : ""}
                                        {readingTime}
                                    </p>
                                )}
                            </Card>
                        </Link>
                    ),
                )}
            </div>
        </Section>
    );
}

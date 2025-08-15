import Link from "next/link";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import styles from "./Insights.module.scss";

type Article = {
    year: string;
    slug: string;
    title: string;
    description: string;
};

export default function Insights({ articles }: { articles: Article[] }) {
    return (
        <Section
            id="insights"
            heading="Recent work & insights"
            className={styles.insights}
        >
            <p className={styles.tagline}>
                Articles on frontend platforms, API design, and design systems.
            </p>
            <div className={styles.cards}>
                {articles.map(({ year, slug, title, description }) => (
                    <Link key={`${year}-${slug}`} href={`/${year}/${slug}`}>
                        <Card title={title}>
                            <p>{description}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </Section>
    );
}

import Link from "next/link";
import Card from "@/components/Card/Card";
import Section from "@/components/Section/Section";
import { getAllArticles } from "@/lib/articles";
import styles from "./Insights.module.scss";

export default async function Insights() {
    const articles = (await getAllArticles()).slice(0, 3);
    return (
        <Section
            id="insights"
            heading="Recent work & insights"
            className={styles.insights}
        >
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

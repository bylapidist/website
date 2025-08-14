import Link from "next/link";
import Card from "@/components/Card/Card";
import Container from "@/components/Container/Container";
import { getAllArticles } from "@/lib/articles";
import styles from "./page.module.scss";

export default async function ArticlesPage() {
    const articles = await getAllArticles();
    return (
        <Container as="section">
            <h1>Articles</h1>
            <div className={styles.cards}>
                {articles.map(({ year, slug, title, description }) => (
                    <Link key={`${year}-${slug}`} href={`/${year}/${slug}`}>
                        <Card title={title} headingLevel="h2">
                            <p>{description}</p>
                        </Card>
                    </Link>
                ))}
            </div>
        </Container>
    );
}

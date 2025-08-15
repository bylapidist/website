import Link from "next/link";
import Card from "@/components/Card/Card";
import Contact from "@/components/Contact/Contact";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import { getAllArticles } from "@/lib/articles";
import { seo } from "@/lib/seo";
import styles from "./page.module.scss";

export const metadata = seo({
    title: "Articles",
    description:
        "Articles on design systems governance, enterprise frontend architecture, accessibility, performance, and UI platforms.",
    canonical: "/articles",
});

export default async function ArticlesPage() {
    const articles = await getAllArticles();
    return (
        <>
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
            <Contact />
            <Footer />
        </>
    );
}

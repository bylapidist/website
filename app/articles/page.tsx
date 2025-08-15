import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card/Card";
import Contact from "@/components/Contact/Contact";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import { getAllArticles } from "@/lib/articles";
import styles from "./page.module.scss";

export const metadata: Metadata = {
    title: "Articles",
    description:
        "Articles and insights on front-end engineering and design systems.",
    alternates: { canonical: "/articles" },
    openGraph: {
        title: "Articles",
        description:
            "Articles and insights on front-end engineering and design systems.",
        url: "/articles",
        type: "website",
        images: [{ url: "/opengraph-image" }],
    },
    twitter: {
        card: "summary_large_image",
        title: "Articles",
        description:
            "Articles and insights on front-end engineering and design systems.",
        images: ["/twitter-image"],
    },
};

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

import type { Metadata } from "next";
import Link from "next/link";
import Card from "@/components/Card/Card";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import { getAllArticles } from "@/lib/articles";
import { formatDate } from "@/lib/date";
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
        siteName: "Lapidist",
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
                            >
                                <Card title={title} headingLevel="h2">
                                    <p>{summary}</p>
                                    <p>
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
            </Section>
            <Contact />
            <Footer />
        </>
    );
}

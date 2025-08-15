import type { Metadata } from "next";
import Section from "@/components/Section/Section";
import { getAllArticles, getArticle } from "@/lib/articles";
import styles from "./page.module.scss";

export async function generateStaticParams() {
    const articles = await getAllArticles();
    return articles.map(({ year, slug }) => ({ year, slug }));
}

export default async function ArticlePage({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}) {
    const { year, slug } = await params;
    const { meta, content } = await getArticle(year, slug);
    return (
        <Section heading={meta.title} headingLevel={1}>
            <article className={styles.article}>
                {meta.description && (
                    <p className={styles.description}>{meta.description}</p>
                )}
                {content}
            </article>
        </Section>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}): Promise<Metadata> {
    const { year, slug } = await params;
    const { meta } = await getArticle(year, slug);
    const url = `https://lapidist.net/${year}/${slug}`;
    return {
        title: meta.title,
        description: meta.description,
        openGraph: {
            title: meta.title,
            description: meta.description,
            url,
            siteName: "Brett Dorrans",
            type: "article",
            publishedTime: meta.date,
            images: [{ url: "/opengraph-image" }],
        },
        twitter: {
            card: "summary_large_image",
            title: meta.title,
            description: meta.description,
            images: ["/twitter-image"],
        },
        alternates: { canonical: url },
    };
}

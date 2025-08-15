import type { Metadata } from "next";
import Contact from "@/components/Contact/Contact";
import Footer from "@/components/Footer/Footer";
import Section from "@/components/Section/Section";
import ArticleJsonLd from "@/components/SeoJsonLd/ArticleJsonLd";
import { getAllArticles, getArticle } from "@/lib/articles";
import { buildMetadata } from "@/lib/seo";
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
    const url = `/${year}/${slug}`;
    return (
        <>
            <ArticleJsonLd
                title={meta.title}
                datePublished={meta.date}
                url={url}
            />
            <Section heading={meta.title} headingLevel={1}>
                <article className={styles.article}>
                    {meta.description && (
                        <p className={styles.description}>{meta.description}</p>
                    )}
                    {content}
                </article>
            </Section>
            <Contact />
            <Footer />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}): Promise<Metadata> {
    const { year, slug } = await params;
    const { meta } = await getArticle(year, slug);
    const url = `/${year}/${slug}`;
    return buildMetadata({
        title: meta.title,
        description: meta.description,
        url,
        type: "article",
        publishedTime: meta.date,
    });
}

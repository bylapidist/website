import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Card from "@/components/Card/Card";
import Contact from "@/components/Contact/Contact";
import Container from "@/components/Container/Container";
import Footer from "@/components/Footer/Footer";
import { getAllArticles } from "@/lib/articles";
import styles from "../../page.module.scss";

const POSTS_PER_PAGE = 10;

export async function generateStaticParams() {
    const articles = await getAllArticles();
    const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE);
    return Array.from({ length: totalPages }, (_, i) => ({
        page: String(i + 1),
    }));
}

export default async function ArticlesPage({
    params,
}: {
    params: Promise<{ page: string }>;
}) {
    const { page } = await params;
    const pageNumber = Number(page);
    const articles = await getAllArticles();
    const totalPages = Math.ceil(articles.length / POSTS_PER_PAGE);
    const start = (pageNumber - 1) * POSTS_PER_PAGE;
    const pageArticles = articles.slice(start, start + POSTS_PER_PAGE);
    if (pageArticles.length === 0) {
        notFound();
    }
    const prevPage = pageNumber - 1;
    const nextPage = pageNumber + 1;
    const prevHref =
        prevPage === 1 ? "/articles" : `/articles/page/${String(prevPage)}`;
    return (
        <>
            <Container as="section">
                <h1>Articles</h1>
                <div className={styles.cards}>
                    {pageArticles.map(({ year, slug, title, description }) => (
                        <Link key={`${year}-${slug}`} href={`/${year}/${slug}`}>
                            <Card title={title} headingLevel="h2">
                                <p>{description}</p>
                            </Card>
                        </Link>
                    ))}
                </div>
                <nav className={styles.pagination}>
                    {pageNumber > 1 && <Link href={prevHref}>Previous</Link>}
                    {pageNumber < totalPages && (
                        <Link href={`/articles/page/${String(nextPage)}`}>
                            Next
                        </Link>
                    )}
                </nav>
            </Container>
            <Contact />
            <Footer />
        </>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ page: string }>;
}): Promise<Metadata> {
    const { page } = await params;
    const pageNumber = Number(page);
    const title =
        pageNumber > 1 ? `Articles - Page ${String(pageNumber)}` : "Articles";
    const description =
        "Articles and insights on front-end engineering and design systems.";
    const url =
        pageNumber > 1 ? `/articles/page/${String(pageNumber)}` : "/articles";
    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            title,
            description,
            url,
            type: "website",
            images: [{ url: "/opengraph-image" }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: ["/twitter-image"],
        },
    };
}

import Container from "@/components/Container/Container";
import { getAllArticles, getArticle } from "@/lib/articles";

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
        <Container as="article">
            <h1>{meta.title}</h1>
            {content}
        </Container>
    );
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ year: string; slug: string }>;
}) {
    const { year, slug } = await params;
    const { meta } = await getArticle(year, slug);
    return { title: meta.title, description: meta.description };
}

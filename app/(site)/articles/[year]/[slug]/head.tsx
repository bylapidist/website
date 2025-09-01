import "server-only";
import { getArticle } from "@/lib/articles";
import { buildArticleStructuredData } from "@/utils";

export default async function Head({
    params,
}: {
    params: { year: string; slug: string };
}) {
    const { year, slug } = params;
    const { meta, wordCount } = await getArticle(year, slug);
    const structuredData = buildArticleStructuredData(
        meta,
        year,
        slug,
        wordCount,
    );
    return (
        <script
            id="structured-data"
            type="application/ld+json"
            dangerouslySetInnerHTML={{
                __html: JSON.stringify(structuredData),
            }}
        />
    );
}

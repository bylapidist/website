import { getAllArticles } from "@/lib/articles";
import { buildHomePageStructuredData } from "@/utils";

export default async function Head() {
    const allArticles = await getAllArticles();
    const datePublished =
        allArticles[allArticles.length - 1]?.date ||
        new Date().toISOString().split("T")[0];
    const structuredData = buildHomePageStructuredData(datePublished);
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

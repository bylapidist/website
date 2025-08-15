import type { MetadataRoute } from "next";
import { getAllArticles } from "@/lib/articles";

export const dynamic = "force-static";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const articles = await getAllArticles();
    const articleEntries = articles.map(({ year, slug, date }) => ({
        url: `https://lapidist.net/${year}/${slug}/`,
        lastModified: new Date(date),
    }));
    return [
        {
            url: "https://lapidist.net/",
            lastModified: new Date(),
        },
        {
            url: "https://lapidist.net/articles/",
            lastModified: new Date(),
        },
        ...articleEntries,
    ];
}

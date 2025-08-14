import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://lapidist.net";

export const dynamic = "force-static";

function escapeHtml(str: string) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

export async function GET() {
    const articles = await getAllArticles();
    const items = articles
        .map(
            ({ title, description, year, slug, date }) =>
                `\n        <item>\n            <title>${escapeHtml(title)}</title>\n            <description>${escapeHtml(description)}</description>\n            <link>${BASE_URL}/${year}/${slug}/</link>\n            <guid>${BASE_URL}/${year}/${slug}/</guid>\n            <pubDate>${new Date(date).toUTCString()}</pubDate>\n        </item>`,
        )
        .join("");

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n    <channel>\n        <title>Lapidist Articles</title>\n        <link>${BASE_URL}</link>\n        <description>Articles from Lapidist</description>${items}\n    </channel>\n</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    });
}

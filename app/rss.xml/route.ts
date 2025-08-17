import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://lapidist.net";
const SITE_TITLE =
    "Brett Dorrans – Lead Frontend Engineer & Design Systems Specialist";
const SITE_DESCRIPTION =
    "Ship design systems teams love. I help product orgs ship consistent UI faster — with governance, performance and accessibility built in.";

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
                `\n        <item>\n            <title>${escapeHtml(title)}</title>\n            <description>${escapeHtml(description)}</description>\n            <link>${BASE_URL}/articles/${year}/${slug}/</link>\n            <guid>${BASE_URL}/articles/${year}/${slug}/</guid>\n            <pubDate>${new Date(date).toUTCString()}</pubDate>\n        </item>`,
        )
        .join("");

    const lastBuildDate =
        articles.length > 0
            ? new Date(articles[0].date).toUTCString()
            : new Date().toUTCString();

    const rss = `<?xml version="1.0" encoding="UTF-8" ?>\n<rss version="2.0">\n    <channel>\n        <title>${escapeHtml(SITE_TITLE)}</title>\n        <link>${BASE_URL}</link>\n        <description>${escapeHtml(SITE_DESCRIPTION)}</description>\n        <language>en-GB</language>\n        <lastBuildDate>${lastBuildDate}</lastBuildDate>\n        <image>\n            <url>${BASE_URL}/opengraph-image</url>\n            <title>${escapeHtml(SITE_TITLE)}</title>\n            <link>${BASE_URL}</link>\n        </image>${items}\n    </channel>\n</rss>`;

    return new Response(rss, {
        headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
        },
    });
}

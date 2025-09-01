import "server-only";
import { Feed } from "feed";
import { getAllArticles } from "@/lib/articles";

const BASE_URL = "https://lapidist.net";
const SITE_TITLE =
    "Brett Dorrans – Lead Frontend Engineer & Design Systems Specialist";
const SITE_DESCRIPTION =
    "Ship design systems teams love. I help product orgs ship consistent UI faster — with governance, performance and accessibility built in.";

export const dynamic = "force-static";

export async function GET() {
    const articles = await getAllArticles();

    const feed = new Feed({
        title: SITE_TITLE,
        description: SITE_DESCRIPTION,
        id: BASE_URL,
        link: BASE_URL,
        language: "en-GB",
        image: `${BASE_URL}/opengraph-image`,
        copyright: `${String(new Date().getFullYear())} Brett Dorrans`,
        updated: articles.length > 0 ? new Date(articles[0].date) : new Date(),
    });

    articles.forEach(({ title, description, year, slug, date, author }) => {
        feed.addItem({
            title,
            id: `${BASE_URL}/articles/${year}/${slug}/`,
            link: `${BASE_URL}/articles/${year}/${slug}/`,
            description,
            author: author.name
                ? [{ name: author.name, link: author.url }]
                : undefined,
            date: new Date(date),
        });
    });

    return new Response(feed.atom1(), {
        headers: {
            "Content-Type": "application/atom+xml; charset=utf-8",
        },
    });
}

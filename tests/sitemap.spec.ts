import { expect, test } from "@playwright/test";

test("sitemap URLs match canonical URLs", async ({ request }) => {
    const articlePaths = [
        "/articles/2025/what-recovering-from-a-stroke-at-34-taught-me/",
        "/articles/2025/scaling-react-typescript-and-api-contracts-in-regulated-saas/",
    ];

    const sitemapResponse = await request.get("/sitemap.xml");
    expect(sitemapResponse.ok()).toBeTruthy();
    const xml = await sitemapResponse.text();

    for (const articlePath of articlePaths) {
        const articleUrl = `https://lapidist.net${articlePath}`;
        expect(xml).toContain(articleUrl);

        const articleResponse = await request.get(articlePath);
        expect(articleResponse.ok()).toBeTruthy();
        const html = await articleResponse.text();
        const canonicalMatch = html.match(
            /<link rel="canonical" href="([^"]+)"/,
        );
        expect(canonicalMatch?.[1]).toBe(articleUrl);
    }
});

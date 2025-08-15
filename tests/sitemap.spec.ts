import { expect, test } from "@playwright/test";

test("sitemap URLs match canonical URLs", async ({ request }) => {
    const articlePath = "/2025/on-freedom-curiosity-and-happiness/";
    const articleUrl = `https://lapidist.net${articlePath}`;

    const sitemapResponse = await request.get("/sitemap.xml");
    expect(sitemapResponse.ok()).toBeTruthy();
    const xml = await sitemapResponse.text();
    expect(xml).toContain(articleUrl);

    const articleResponse = await request.get(articlePath);
    expect(articleResponse.ok()).toBeTruthy();
    const html = await articleResponse.text();
    const canonicalMatch = html.match(/<link rel="canonical" href="([^"]+)"/);
    expect(canonicalMatch?.[1]).toBe(articleUrl);
});

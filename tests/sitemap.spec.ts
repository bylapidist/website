import { expect, test } from "@playwright/test";

test("sitemap includes articles", async ({ request }) => {
    const response = await request.get("/sitemap.xml");
    expect(response.ok()).toBeTruthy();
    const xml = await response.text();
    expect(xml).toContain(
        "https://lapidist.net/2025/on-freedom-curiosity-and-happiness",
    );
});

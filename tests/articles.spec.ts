import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("articles index is accessible", async ({ page }) => {
    await page.goto("/articles");
    await expect(page.locator("h1")).toContainText("Articles");
    const rssLink = page.getByRole("link", { name: "RSS feed" });
    await expect(rssLink).toHaveAttribute("href", "/rss.xml");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("article page is accessible", async ({ page }) => {
    await page.goto(
        "/articles/2025/what-recovering-from-a-stroke-at-34-taught-me",
    );
    await expect(page.locator("article")).toBeVisible();
    await expect(
        page.locator('nav[aria-labelledby="toc-heading"]'),
    ).toBeVisible();
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("table of contents toggles", async ({ page }) => {
    await page.goto(
        "/articles/2025/what-recovering-from-a-stroke-at-34-taught-me",
    );
    const toggle = page.getByRole("button", {
        name: "Collapse table of contents",
    });
    const list = page.locator('nav[aria-labelledby="toc-heading"] ol');
    await expect(toggle).toHaveAttribute("aria-expanded", "true");
    await expect(list).toBeVisible();
    await toggle.click();
    const collapsed = page.getByRole("button", {
        name: "Expand table of contents",
    });
    await expect(collapsed).toHaveAttribute("aria-expanded", "false");
    await expect(list).toBeHidden();
});

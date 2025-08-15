import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("articles index is accessible", async ({ page }) => {
    await page.goto("/articles");
    await expect(page.locator("h1")).toContainText("Articles");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("article page is accessible", async ({ page }) => {
    await page.goto("/2025/on-freedom-curiosity-and-happiness");
    await expect(page.locator("article")).toBeVisible();
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("articles page has social metadata", async ({ page }) => {
    await page.goto("/articles");
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
        "content",
        "website",
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image",
    );
});

test("article page has social metadata", async ({ page }) => {
    await page.goto("/2025/on-freedom-curiosity-and-happiness");
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute(
        "content",
        "article",
    );
    await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image",
    );
});

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
    await page.goto(
        "/articles/2025/what-recovering-from-a-stroke-at-36-taught-me",
    );
    await expect(page.locator("article")).toBeVisible();
    await expect(
        page.locator('nav[aria-label="Table of contents"]'),
    ).toBeVisible();
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

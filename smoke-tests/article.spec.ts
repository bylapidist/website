import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("article page is accessible", async ({ page }) => {
    await page.goto(
        "/articles/2025/what-recovering-from-a-stroke-at-34-taught-me",
        { waitUntil: "networkidle" },
    );
    await expect(page.locator("article")).toBeVisible();
    await expect(
        page.locator('nav[aria-labelledby="toc-heading"]'),
    ).toBeVisible();
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

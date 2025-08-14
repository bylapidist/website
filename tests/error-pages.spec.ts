import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("404 page has no accessibility violations", async ({ page }) => {
    await page.goto("/non-existent");
    await expect(page.locator("h1")).toContainText("Page not found");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

test("500 page has no accessibility violations", async ({ page }) => {
    await page.goto("/force-error");
    await expect(page.locator("h1")).toContainText("Something went wrong");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

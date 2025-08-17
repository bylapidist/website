import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("error page has no accessibility violations", async ({ page }) => {
    await page.goto("/non-existent");
    await expect(page.locator("h1")).toContainText("Page not found");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .exclude('[role="alert"]')
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

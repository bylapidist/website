import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("404 page is accessible", async ({ page }) => {
    await page.goto("/non-existent", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Page not found");
    const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("articles index is accessible", async ({ page }) => {
    await page.goto("/articles", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("Essays on systems");
const accessibilityScanResults = await new AxeBuilder({ page })
        .include("main")
        .analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
});

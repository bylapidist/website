import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("home renders with basic a11y and performance", async ({ page }) => {
    await page.goto("/", { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toContainText("design systems");
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
    const nav = await page.evaluate(
        () =>
            performance.getEntriesByType(
                "navigation",
            )[0] as PerformanceNavigationTiming,
    );
    expect(nav.responseEnd).toBeLessThan(4000);
});

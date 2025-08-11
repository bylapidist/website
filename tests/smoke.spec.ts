import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home renders with basic a11y and performance", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("design systems");
    await expect(page.locator("footer")).toContainText(
        "Company number SC549211",
    );
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    expect(accessibilityScanResults.violations).toEqual([]);
    const nav = await page.evaluate(
        () =>
            performance.getEntriesByType(
                "navigation",
            )[0] as PerformanceNavigationTiming,
    );
    expect(nav.responseEnd).toBeLessThan(2000);
});

import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home renders with basic a11y and performance", async ({ page }) => {
    await page.goto("/");
    await expect(page.locator("h1")).toContainText("design systems");
    await expect(
        page.getByRole("heading", { level: 2, name: "Signature services" }),
    ).toBeVisible();
    await expect(page.locator("body")).toContainText("Company number SC549211");
    const stats = page.locator("section[aria-labelledby='stats-heading'] dl");
    await expect(stats).toHaveCount(3);
    await expect(stats.first().locator("dt")).toHaveText("15+ years");
    await expect(stats.first().locator("dd")).toHaveText(
        "engineering expertise",
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

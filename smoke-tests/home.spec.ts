import AxeBuilder from "@axe-core/playwright";
import { expect, test } from "@playwright/test";

test("home page is accessible", async ({ page }, testInfo) => {
    await page.goto("/", { waitUntil: "networkidle" });

    // wait for the theme class to be applied to the root element to avoid
    // transient colour variable mismatches that can cause Axe to report
    // contrast violations in CI
    const theme = testInfo.project.name;
    await page.waitForFunction(
        (expected) => document.documentElement.classList.contains(expected),
        theme,
    );

    await expect(page.locator("h1")).toContainText("scalable UI");
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

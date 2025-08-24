import { expect, test } from "@playwright/test";

test.describe("Icon component", () => {
    test("handles title and decorative props", async ({ page }) => {
        await page.goto("/icon-test");
        const large = page.locator("[data-testid='large']");
        await expect(large).toBeVisible();
        await expect(large).toHaveAttribute("data-size", "lg");
        await expect(large).toHaveCSS("width", "24px");
        await expect(large).toHaveCSS("height", "24px");
        const decorative = page.locator("[data-testid='decorative']");
        await expect(decorative).toHaveAttribute("aria-hidden", "true");
    });
});

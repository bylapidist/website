import { expect, test } from "@playwright/test";

test.describe("Heading component", () => {
    test("renders levels and attributes", async ({ page }) => {
        await page.goto("/heading-test");
        await expect(page.locator("h3")).toHaveText("Test");
        const divHeading = page.locator("[data-testid='div-heading']");
        await expect(divHeading).toHaveAttribute("role", "heading");
        await expect(divHeading).toHaveAttribute("aria-level", "2");
        const hidden = page.locator("[data-testid='hidden']");
        await expect(hidden).toHaveClass(/visually-hidden/);
        await expect(page.locator("section h2")).toHaveText("Section heading");
        await expect(page.locator("article h4")).toHaveText("Card heading");
    });
});

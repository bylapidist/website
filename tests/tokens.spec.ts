import { expect, test } from "@playwright/test";

// Verify token catalogue renders variable names and values

test.describe("Tokens catalogue", () => {
    test("shows colour and icon token values", async ({ page }) => {
        await page.goto("/tokens-test");
        const colour = page
            .locator("li")
            .filter({ hasText: "--colour-primary" });
        await expect(colour.locator("code").nth(1)).toHaveText(
            "oklch(40% 0.17 289.41deg)",
        );
        const icon = page.locator("li").filter({ hasText: "--size-icon-md" });
        await expect(icon.locator("code").nth(1)).toHaveText("1.25rem");
        await expect(icon.locator("svg")).toHaveCSS("width", "20px");
    });
});

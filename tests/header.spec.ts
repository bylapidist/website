import { expect, test } from "@playwright/test";

test("header menu toggles", async ({ page }) => {
    await page.goto("/");
    const menuToggle = page.getByLabel("Toggle navigation menu");
    await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    await menuToggle.click();
    await expect(menuToggle).toHaveAttribute("aria-expanded", "true");
    const menu = page.locator('nav[aria-label="Site"]');
    await expect(menu).toBeVisible();
    await menuToggle.click();
    await expect(menuToggle).toHaveAttribute("aria-expanded", "false");
    await expect(menu).not.toBeVisible();
});

test("theme toggle updates aria-pressed", async ({ page }) => {
    await page.goto("/");
    await page.waitForLoadState("networkidle");
    const toggle = page.getByRole("button", {
        name: /Switch to (dark|light) theme/,
    });
    const initial = await toggle.getAttribute("aria-pressed");
    await toggle.click();
    await expect(
        page.getByRole("button", { name: /Switch to (dark|light) theme/ }),
    ).toHaveAttribute("aria-pressed", initial === "true" ? "false" : "true");
});

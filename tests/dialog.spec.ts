import { expect, test } from "@playwright/test";

test.describe("Dialog", () => {
    test("traps focus and closes on escape", async ({ page }) => {
        await page.goto("/dialog-test");
        await page.getByTestId("open").click();
        const dialog = page.getByRole("dialog");
        await expect(dialog).toBeVisible();
        await expect(page.getByTestId("close")).toBeFocused();
        await page.keyboard.press("Tab");
        await expect(page.getByTestId("confirm")).toBeFocused();
        await page.keyboard.press("Tab");
        await expect(page.getByTestId("close")).toBeFocused();
        await page.keyboard.press("Escape");
        await expect(dialog).toBeHidden();
    });
});

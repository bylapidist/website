import { expect, test } from "@playwright/test";

test.describe("useDisclosure", () => {
    test("toggles panel and sets aria attributes", async ({ page }) => {
        await page.goto("/disclosure-test");
        const trigger = page.getByTestId("trigger");
        const panel = page.getByTestId("panel");
        await expect(trigger).toHaveAttribute("aria-expanded", "false");
        await expect(panel).toBeHidden();
        await trigger.click();
        await expect(trigger).toHaveAttribute("aria-expanded", "true");
        await expect(panel).toBeVisible();
    });
});

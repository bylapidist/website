import { expect, test } from "@playwright/test";

test("choice inputs toggle", async ({ page }) => {
    await page.goto("/form-choice-test");

    const checkbox = page.getByTestId("checkbox");
    await checkbox.click();
    await expect(checkbox).toBeChecked();

    const radioB = page.getByTestId("radio-b");
    await radioB.check();
    await expect(radioB).toBeChecked();

    const switchInput = page.getByTestId("switch");
    await switchInput.click();
    await expect(switchInput).toBeChecked();
    await expect(switchInput).toHaveAttribute("role", "switch");
});

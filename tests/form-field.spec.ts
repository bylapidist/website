import { expect, test } from "@playwright/test";

test("form field wires label, description and error", async ({ page }) => {
    await page.goto("/form-field-test");

    const input = page.getByTestId("field");
    await page.locator("label", { hasText: "Username" }).click();
    await expect(input).toBeFocused();

    const describedby = await input.getAttribute("aria-describedby");
    const ids = describedby?.split(" ") ?? [];
    expect(ids).toHaveLength(2);
    await expect(page.locator(`#${ids[0]}`)).toHaveText("Enter your username");
    await expect(page.locator(`#${ids[1]}`)).toHaveText("Required");
    await expect(input).toHaveAttribute("aria-invalid", "true");
});

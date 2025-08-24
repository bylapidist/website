import { expect, test } from "@playwright/test";

test("text inputs link labels and errors", async ({ page }) => {
    await page.goto("/form-text-test");

    await page.getByText("Name").click();
    await expect(page.getByTestId("input")).toBeFocused();

    await expect(page.getByTestId("invalid")).toHaveAttribute(
        "aria-invalid",
        "true",
    );
    await expect(page.getByTestId("invalid")).toHaveAttribute(
        "aria-describedby",
        "error-msg",
    );
});

import { expect, test } from "@playwright/test";

test("disabled link button prevents navigation", async ({ page }) => {
    await page.goto("/disabled-link-test");

    const link = page.getByTestId("link");
    await expect(link).toHaveAttribute("aria-disabled", "true");
    await expect(link).toHaveAttribute("tabindex", "-1");

    const before = page.url();
    await link.click({ noWaitAfter: true, force: true });
    await expect(page).toHaveURL(before);
});

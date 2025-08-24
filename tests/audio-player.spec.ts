import { expect, test } from "@playwright/test";

const pagePath = "/audio-player-test";

test("slider exposes aria values", async ({ page }) => {
    await page.goto(pagePath);
    const slider = page.getByRole("slider", { name: "Audio progress" });
    await expect(slider).toHaveAttribute("aria-valuemin", "0");
    await expect(slider).toHaveAttribute("aria-valuemax", /\d+/);
    await expect(slider).toHaveAttribute("aria-valuenow", /\d+(\.\d+)?/);
});

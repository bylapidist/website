import { expect, test } from "@playwright/test";

const pagePath = "/layout-test";

test("stack applies gap token", async ({ page }) => {
    await page.goto(pagePath);
    const stack = page.locator("[data-testid=stack]");
    await expect(stack).toHaveAttribute(
        "style",
        /--stack-gap:\s*var\(--space-s\)/,
    );
});

test("grid displays grid", async ({ page }) => {
    await page.goto(pagePath);
    const grid = page.locator("[data-testid=grid]");
    await expect(grid).toHaveCSS("display", "grid");
});

test("card grid has margin", async ({ page }) => {
    await page.goto(pagePath);
    const cardGrid = page.locator("[data-testid=card-grid]");
    const margin = await cardGrid.evaluate(
        (el) => getComputedStyle(el).marginBlockStart,
    );
    expect(margin).not.toBe("0px");
});

test("button group centers content", async ({ page }) => {
    await page.goto(pagePath);
    const group = page.locator("[data-testid=button-group]");
    await expect(group).toHaveCSS("justify-content", "center");
});

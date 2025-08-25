import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "@/components";

test("disabled link button prevents navigation", async () => {
    render(
        <Button href="/about" disabled data-testid="link">
            Disabled link
        </Button>,
    );
    const user = userEvent.setup();
    const link = screen.getByTestId("link");
    expect(link).toHaveAttribute("aria-disabled", "true");
    expect(link).toHaveAttribute("tabindex", "-1");
    await user.click(link);
    expect(window.location.pathname).toBe("/");
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Dialog from "@/components/Dialog/Dialog";

test("traps focus and closes on escape", async () => {
    const handleClose = vi.fn();
    const user = userEvent.setup();
    render(
        <Dialog open onClose={handleClose} aria-labelledby="title">
            <h2 id="title">Test dialog</h2>
            <button data-testid="close" onClick={handleClose}>
                Close
            </button>
            <button data-testid="confirm">Confirm</button>
        </Dialog>,
    );
    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeVisible();
    const close = screen.getByTestId("close");
    expect(close).toHaveFocus();
    await user.tab();
    expect(screen.getByTestId("confirm")).toHaveFocus();
    await user.tab();
    expect(close).toHaveFocus();
    await user.keyboard("{Escape}");
    expect(handleClose).toHaveBeenCalled();
});

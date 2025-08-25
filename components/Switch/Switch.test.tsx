import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "@/components/Switch/Switch";

test("switch toggles", async () => {
    render(<Switch data-testid="switch" />);
    const user = userEvent.setup();
    const switchInput = screen.getByTestId("switch");
    expect(switchInput).not.toBeChecked();
    await user.click(switchInput);
    expect(switchInput).toBeChecked();
    expect(switchInput).toHaveAttribute("role", "switch");
});

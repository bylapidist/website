import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "@/components/Checkbox/Checkbox";

test("checkbox toggles", async () => {
    render(<Checkbox data-testid="checkbox" />);
    const user = userEvent.setup();
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).not.toBeChecked();
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
});

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from "@/components/Radio/Radio";

test("radio toggles", async () => {
    render(<Radio name="group" value="b" data-testid="radio" />);
    const user = userEvent.setup();
    const radio = screen.getByTestId("radio");
    expect(radio).not.toBeChecked();
    await user.click(radio);
    expect(radio).toBeChecked();
});

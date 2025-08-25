import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Radio from "@/components/Radio/Radio";

test("radio button toggles", async () => {
    render(<Radio name="group" value="b" data-testid="radio" />);
    const user = userEvent.setup();
    const radio = screen.getByTestId("radio");
    await user.click(radio);
    expect(radio).toBeChecked();
});

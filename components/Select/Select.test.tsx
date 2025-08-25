import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Select from "@/components/Select/Select";

test("links labels to select", async () => {
    render(
        <form>
            <label htmlFor="choice">Choice</label>
            <Select id="choice" data-testid="select">
                <option value="1">One</option>
            </Select>
        </form>,
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Choice"));
    expect(screen.getByTestId("select")).toHaveFocus();
});

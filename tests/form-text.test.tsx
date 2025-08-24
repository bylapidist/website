import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "@/components/Input/Input";
import Select from "@/components/Select/Select";
import Textarea from "@/components/Textarea/Textarea";

test("text inputs link labels and errors", async () => {
    render(
        <form>
            <label htmlFor="name">Name</label>
            <Input id="name" data-testid="input" />

            <label htmlFor="bio">Bio</label>
            <Textarea id="bio" data-testid="textarea" />

            <label htmlFor="choice">Choice</label>
            <Select id="choice" data-testid="select">
                <option value="1">One</option>
            </Select>

            <label htmlFor="error">Error</label>
            <Input
                id="error"
                data-testid="invalid"
                invalid
                aria-describedby="error-msg"
            />
            <p id="error-msg">Required</p>
        </form>,
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Name"));
    expect(screen.getByTestId("input")).toHaveFocus();
    const invalid = screen.getByTestId("invalid");
    expect(invalid).toHaveAttribute("aria-invalid", "true");
    expect(invalid).toHaveAttribute("aria-describedby", "error-msg");
});

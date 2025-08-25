import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Textarea from "@/components/Textarea/Textarea";

test("textarea links label", async () => {
    render(
        <form>
            <label htmlFor="bio">Bio</label>
            <Textarea id="bio" data-testid="textarea" />
        </form>,
    );
    const user = userEvent.setup();
    await user.click(screen.getByText("Bio"));
    expect(screen.getByTestId("textarea")).toHaveFocus();
});

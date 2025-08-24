import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Checkbox from "@/components/Checkbox/Checkbox";
import Radio from "@/components/Radio/Radio";
import Switch from "@/components/Switch/Switch";

test("choice inputs toggle", async () => {
    render(
        <div>
            <Checkbox data-testid="checkbox" />
            <Radio name="group" value="b" data-testid="radio-b" />
            <Switch data-testid="switch" />
        </div>,
    );
    const user = userEvent.setup();
    const checkbox = screen.getByTestId("checkbox");
    await user.click(checkbox);
    expect(checkbox).toBeChecked();
    const radioB = screen.getByTestId("radio-b");
    await user.click(radioB);
    expect(radioB).toBeChecked();
    const switchInput = screen.getByTestId("switch");
    await user.click(switchInput);
    expect(switchInput).toBeChecked();
    expect(switchInput).toHaveAttribute("role", "switch");
});

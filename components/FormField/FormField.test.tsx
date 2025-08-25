import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import FormField from "@/components/FormField/FormField";
import Input from "@/components/Input/Input";

test("form field wires label, description and error", async () => {
    render(
        <FormField
            label="Username"
            description="Enter your username"
            error="Required"
        >
            <Input data-testid="field" />
        </FormField>,
    );
    const user = userEvent.setup();
    const input = screen.getByTestId("field");
    await user.click(screen.getByText("Username"));
    expect(input).toHaveFocus();
    const describedby = input.getAttribute("aria-describedby");
    const ids = describedby ? describedby.split(" ") : [];
    expect(ids).toHaveLength(2);
    expect(document.getElementById(ids[0])).toHaveTextContent(
        "Enter your username",
    );
    expect(document.getElementById(ids[1])).toHaveTextContent("Required");
    expect(input).toHaveAttribute("aria-invalid", "true");
});

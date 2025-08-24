import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useDisclosure } from "@/hooks/useDisclosure";

function Disclosure() {
    const { isOpen, open } = useDisclosure();
    return (
        <div>
            <button data-testid="trigger" aria-expanded={isOpen} onClick={open}>
                Toggle
            </button>
            <div data-testid="panel" hidden={!isOpen}>
                Panel
            </div>
        </div>
    );
}

test("toggles panel and sets aria attributes", async () => {
    const user = userEvent.setup();
    render(<Disclosure />);
    const trigger = screen.getByTestId("trigger");
    const panel = screen.getByTestId("panel");
    expect(trigger).toHaveAttribute("aria-expanded", "false");
    expect(panel).not.toBeVisible();
    await user.click(trigger);
    expect(trigger).toHaveAttribute("aria-expanded", "true");
    expect(panel).toBeVisible();
});

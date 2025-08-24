import { render, screen } from "@testing-library/react";
import Icon from "@/components/Icon/Icon";
import { Size } from "@/packages/types/props";

test("handles title and decorative props", () => {
    render(
        <div>
            <Icon name="sun" size={Size.LG} data-testid="large" />
            <Icon name="sun" decorative data-testid="decorative" />
        </div>,
    );
    const large = screen.getByTestId("large");
    expect(large).toHaveAttribute("data-size", "lg");
    const decorative = screen.getByTestId("decorative");
    expect(decorative).toHaveAttribute("aria-hidden", "true");
});

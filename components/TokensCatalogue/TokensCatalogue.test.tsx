import { render, screen } from "@testing-library/react";
import TokensCatalogue from "@/components/TokensCatalogue/TokensCatalogue";

test("shows colour and icon token values", () => {
    render(<TokensCatalogue />);
    const colour = screen.getByText("--colour-primary").parentElement;
    if (!colour) throw new Error("colour parent missing");
    expect(colour.querySelectorAll("code")[1]).toHaveTextContent(
        "oklch(40% 0.17 289.41deg)",
    );
    const icon = screen.getByText("--size-icon-md").parentElement;
    if (!icon) throw new Error("icon parent missing");
    expect(icon.querySelectorAll("code")[1]).toHaveTextContent("1.25rem");
});

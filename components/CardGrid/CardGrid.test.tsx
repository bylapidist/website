import { render, screen } from "@testing-library/react";
import CardGrid from "@/components/CardGrid/CardGrid";

test("card grid renders children", () => {
    render(
        <CardGrid data-testid="card-grid">
            <div>One</div>
            <div>Two</div>
        </CardGrid>,
    );
    expect(screen.getByTestId("card-grid").children.length).toBe(2);
});

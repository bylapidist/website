import { render, screen } from "@testing-library/react";
import Grid from "@/components/Grid/Grid";

test("grid renders", () => {
    render(
        <Grid data-testid="grid">
            <div>One</div>
            <div>Two</div>
        </Grid>,
    );
    expect(screen.getByTestId("grid")).toBeInTheDocument();
});

import { render, screen } from "@testing-library/react";
import Button from "@/components/Button/Button";
import CardGrid from "@/components/CardGrid/CardGrid";
import Grid from "@/components/Grid/Grid";
import Stack from "@/components/Stack/Stack";

test("stack applies gap token", () => {
    render(
        <Stack data-testid="stack" gap="var(--space-s)">
            <div>One</div>
            <div>Two</div>
        </Stack>,
    );
    expect(screen.getByTestId("stack").getAttribute("style")).toContain(
        "--stack-gap: var(--space-s)",
    );
});

test("grid renders", () => {
    render(
        <Grid data-testid="grid">
            <div>One</div>
            <div>Two</div>
        </Grid>,
    );
    expect(screen.getByTestId("grid")).toBeInTheDocument();
});

test("card grid renders children", () => {
    render(
        <CardGrid data-testid="card-grid">
            <div>One</div>
            <div>Two</div>
        </CardGrid>,
    );
    expect(screen.getByTestId("card-grid").children.length).toBe(2);
});

test("horizontal stack wraps buttons", () => {
    render(
        <Stack data-testid="button-group" orientation="horizontal">
            <Button>A</Button>
            <Button>B</Button>
        </Stack>,
    );
    expect(screen.getByTestId("button-group").children.length).toBe(2);
});

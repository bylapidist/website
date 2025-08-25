import { render, screen } from "@testing-library/react";
import { Button, Section } from "@/components";

test("stack layout applies gap token", () => {
    render(
        <Section
            data-testid="stack"
            gap="var(--space-scale-075)"
            container={false}
        >
            <div>One</div>
            <div>Two</div>
        </Section>,
    );
    expect(screen.getByTestId("stack").getAttribute("style")).toContain(
        "--stack-gap: var(--space-scale-075)",
    );
});

test("horizontal stack wraps buttons", () => {
    render(
        <Section
            data-testid="button-group"
            orientation="horizontal"
            container={false}
        >
            <Button>A</Button>
            <Button>B</Button>
        </Section>,
    );
    expect(screen.getByTestId("button-group").children.length).toBe(2);
});

test("grid layout applies gap token", () => {
    render(
        <Section
            data-testid="grid"
            layout="grid"
            gap="var(--space-scale-075)"
            container={false}
        >
            <div>One</div>
            <div>Two</div>
        </Section>,
    );
    expect(screen.getByTestId("grid").getAttribute("style")).toContain(
        "--grid-gap: var(--space-scale-075)",
    );
});

test("card layout sets default gap", () => {
    render(
        <Section data-testid="card" layout="card" container={false}>
            <div>One</div>
            <div>Two</div>
        </Section>,
    );
    expect(screen.getByTestId("card").getAttribute("style")).toContain(
        "--grid-gap: var(--space-scale-200)",
    );
});

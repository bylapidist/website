import { render, screen } from "@testing-library/react";
import Button from "@/components/Button/Button";
import Layout from "@/components/Layout/Layout";

test("stack layout applies gap token", () => {
    render(
        <Layout data-testid="stack" gap="var(--space-scale-075)">
            <div>One</div>
            <div>Two</div>
        </Layout>,
    );
    expect(screen.getByTestId("stack").getAttribute("style")).toContain(
        "--stack-gap: var(--space-scale-075)",
    );
});

test("horizontal stack wraps buttons", () => {
    render(
        <Layout data-testid="button-group" orientation="horizontal">
            <Button>A</Button>
            <Button>B</Button>
        </Layout>,
    );
    expect(screen.getByTestId("button-group").children.length).toBe(2);
});

test("grid layout applies gap token", () => {
    render(
        <Layout data-testid="grid" layout="grid" gap="var(--space-scale-075)">
            <div>One</div>
            <div>Two</div>
        </Layout>,
    );
    expect(screen.getByTestId("grid").getAttribute("style")).toContain(
        "--grid-gap: var(--space-scale-075)",
    );
});

test("card layout sets default gap", () => {
    render(
        <Layout data-testid="card" layout="card">
            <div>One</div>
            <div>Two</div>
        </Layout>,
    );
    expect(screen.getByTestId("card").getAttribute("style")).toContain(
        "--grid-gap: var(--space-scale-200)",
    );
});

import { render, screen } from "@testing-library/react";
import Heading from "@/components/Heading/Heading";

test("renders levels and attributes", () => {
    render(
        <div>
            <Heading level={3}>Test</Heading>
            <Heading as="div" level={2} data-testid="div-heading">
                Div heading
            </Heading>
            <Heading level={2} visuallyHidden data-testid="hidden">
                Hidden
            </Heading>
            <section>
                <Heading level={2}>Section heading</Heading>
            </section>
            <article>
                <Heading level={4}>Card heading</Heading>
            </article>
        </div>,
    );
    expect(screen.getByRole("heading", { level: 3 })).toHaveTextContent("Test");
    const divHeading = screen.getByTestId("div-heading");
    expect(divHeading).toHaveAttribute("role", "heading");
    expect(divHeading).toHaveAttribute("aria-level", "2");
    expect(screen.getByTestId("hidden")).toHaveClass("visually-hidden");
    expect(
        screen.getByRole("heading", { level: 2, name: "Section heading" }),
    ).toBeInTheDocument();
    expect(
        screen.getByRole("heading", { level: 4, name: "Card heading" }),
    ).toBeInTheDocument();
});

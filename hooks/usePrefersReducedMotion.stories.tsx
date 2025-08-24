import type { Meta, StoryObj } from "@storybook/nextjs";
import { usePrefersReducedMotion } from "./usePrefersReducedMotion";

const meta: Meta = {
    title: "Hooks/usePrefersReducedMotion",
};

export default meta;

type Story = StoryObj;

export const Default: Story = {
    render: () => {
        const prefersReducedMotion = usePrefersReducedMotion();
        return (
            <div>
                Prefers reduced motion: {prefersReducedMotion ? "yes" : "no"}
            </div>
        );
    },
};

import type { Meta, StoryObj } from "@storybook/nextjs";
import Stack from "./Stack";

const meta = {
    title: "Components/Stack",
    component: Stack,
    args: {
        children: [<div key="1">One</div>, <div key="2">Two</div>],
        gap: "var(--space-s)",
        orientation: "vertical",
    },
    argTypes: {
        orientation: {
            control: { type: "radio" },
            options: ["vertical", "horizontal"],
        },
    },
} satisfies Meta<typeof Stack>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Horizontal: Story = {
    args: { orientation: "horizontal" },
};

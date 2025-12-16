import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Heading from "./Heading";

const meta = {
    title: "Components/Heading",
    component: Heading,
    args: {
        children: "Heading text",
        level: 1,
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LevelTwo: Story = {
    args: { level: 2 },
};

export const AsSpan: Story = {
    args: { as: "span", level: 3 },
};

export const VisuallyHidden: Story = {
    args: { visuallyHidden: true },
};

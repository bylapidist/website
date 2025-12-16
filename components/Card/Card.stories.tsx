import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { sizeArg } from "@/.storybook/args";
import { Size } from "@/types";
import Card from "./Card";

const meta = {
    title: "Components/Card",
    component: Card,
    args: {
        heading: "Card heading",
        children: "Card content",
    },
    argTypes: {
        size: sizeArg,
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Highlighted: Story = {
    args: { highlight: true },
};

export const Large: Story = {
    args: { size: Size.LG },
};

export const LargeHighlighted: Story = {
    args: { size: Size.LG, highlight: true },
};

export const HeadingLevel4: Story = {
    args: { headingLevel: 4 },
};

export const HeadingLevel4Highlighted: Story = {
    args: { headingLevel: 4, highlight: true },
};

export const LargeHeadingLevel4: Story = {
    args: { size: Size.LG, headingLevel: 4 },
};

export const LargeHeadingLevel4Highlighted: Story = {
    args: { size: Size.LG, headingLevel: 4, highlight: true },
};

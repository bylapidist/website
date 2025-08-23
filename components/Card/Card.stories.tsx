import type { Meta, StoryObj } from "@storybook/nextjs";
import Card from "./Card";

const meta = {
    title: "Components/Card",
    component: Card,
    args: {
        heading: "Card heading",
        children: "Card content",
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Highlighted: Story = {
    args: { highlight: true },
};

export const Large: Story = {
    args: { size: "lg" },
};

export const LargeHighlighted: Story = {
    args: { size: "lg", highlight: true },
};

export const HeadingLevel4: Story = {
    args: { headingLevel: 4 },
};

export const HeadingLevel4Highlighted: Story = {
    args: { headingLevel: 4, highlight: true },
};

export const LargeHeadingLevel4: Story = {
    args: { size: "lg", headingLevel: 4 },
};

export const LargeHeadingLevel4Highlighted: Story = {
    args: { size: "lg", headingLevel: 4, highlight: true },
};

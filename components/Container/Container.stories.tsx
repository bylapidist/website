import type { Meta, StoryObj } from "@storybook/nextjs";
import Container from "./Container";

const meta = {
    title: "Components/Container",
    component: Container,
    args: {
        children: "Container content",
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args: { size: "s" },
};

export const Large: Story = {
    args: { size: "l" },
};

export const Article: Story = {
    args: { as: "article" },
};

export const Page: Story = {
    args: { cq: "page" },
};

export const SmallPage: Story = {
    args: { size: "s", cq: "page" },
};

export const LargePage: Story = {
    args: { size: "l", cq: "page" },
};

import type { Meta, StoryObj } from "@storybook/nextjs";
import { Size } from "@/lib/enums";
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
    args: { size: Size.Sm },
};

export const Large: Story = {
    args: { size: Size.Lg },
};

export const Article: Story = {
    args: { as: "article" },
};

export const Page: Story = {
    args: { cq: "page" },
};

export const SmallPage: Story = {
    args: { size: Size.Sm, cq: "page" },
};

export const LargePage: Story = {
    args: { size: Size.Lg, cq: "page" },
};

import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg } from "@/.storybook/args";
import { Size } from "@/types";
import Container from "./Container";

const meta = {
    title: "Components/Container",
    component: Container,
    args: {
        children: "Container content",
    },
    argTypes: {
        size: sizeArg,
    },
} satisfies Meta<typeof Container>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args: { size: Size.SM },
};

export const Large: Story = {
    args: { size: Size.LG },
};

export const Article: Story = {
    args: { as: "article" },
};

export const Page: Story = {
    args: { cq: "page" },
};

export const SmallPage: Story = {
    args: { size: Size.SM, cq: "page" },
};

export const LargePage: Story = {
    args: { size: Size.LG, cq: "page" },
};

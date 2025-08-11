import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "./Button";

const meta = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Click me",
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
    args: { variant: "secondary" },
};

export const Ghost: Story = {
    args: { variant: "ghost" },
};

export const Large: Story = {
    args: { size: "lg" },
};

export const Loading: Story = {
    args: { loading: true },
};

export const AsLink: Story = {
    args: { href: "#" },
};

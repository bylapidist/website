import { useEffect, useRef } from "react";
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

export const WithRef: Story = {
    render: function WithRefStory(args) {
        const ref = useRef<HTMLButtonElement>(null);

        useEffect(() => {
            ref.current?.focus();
        }, []);

        return <Button ref={ref} {...args} />;
    },
};

export const AsLinkWithRef: Story = {
    args: { href: "#" },
    render: function AsLinkWithRefStory(args) {
        const ref = useRef<HTMLAnchorElement>(null);

        useEffect(() => {
            ref.current?.focus();
        }, []);

        return <Button ref={ref} {...args} />;
    },
};

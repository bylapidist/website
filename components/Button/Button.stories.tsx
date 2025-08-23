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

export const Large: Story = {
    args: { size: "lg" },
};

export const SecondaryLarge: Story = {
    args: { variant: "secondary", size: "lg" },
};

export const AsLink: Story = {
    args: { href: "#" },
};

export const FullWidth: Story = {
    args: { fullWidth: true },
};

export const Disabled: Story = {
    args: { disabled: true },
};

export const DisabledLink: Story = {
    args: { href: "#", disabled: true },
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

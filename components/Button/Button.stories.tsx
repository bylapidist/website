import { useEffect, useRef } from "react";
import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg, variantArg } from "@/.storybook/args";
import { Size, Variant } from "@/types";
import Button from "./Button";

const meta = {
    title: "Components/Button",
    component: Button,
    args: {
        children: "Click me",
        size: Size.MD,
        variant: Variant.Primary,
    },
    argTypes: {
        size: sizeArg,
        variant: variantArg,
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Secondary: Story = {
    args: { variant: Variant.Secondary },
};

export const Large: Story = {
    args: { size: Size.LG },
};

export const SecondaryLarge: Story = {
    args: { variant: Variant.Secondary, size: Size.LG },
};

export const AsLink: Story = {
    args: { href: "#" },
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

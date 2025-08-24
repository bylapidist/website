import type { Meta, StoryObj } from "@storybook/nextjs";
import Label from "./Label";

const meta: Meta<typeof Label> = {
    title: "Components/Label",
    component: Label,
    args: {
        children: "Label",
    },
};
export default meta;

type Story = StoryObj<typeof Label>;

export const Default: Story = {};

export const Invalid: Story = {
    args: { invalid: true },
};

export const Required: Story = {
    args: { required: true },
};

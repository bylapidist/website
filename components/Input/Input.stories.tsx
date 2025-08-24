import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg, variantArg } from "@/.storybook/args";
import { Size, Variant } from "@/types";
import Input from "./Input";

const meta: Meta<typeof Input> = {
    title: "Components/Input",
    component: Input,
    args: {
        size: Size.MD,
        variant: Variant.Primary,
        placeholder: "Type here",
    },
    argTypes: {
        size: sizeArg,
        variant: variantArg,
    },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Invalid: Story = {
    args: { invalid: true, placeholder: "Invalid" },
};

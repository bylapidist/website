import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg, variantArg } from "@/.storybook/args";
import { Size, Variant } from "@/types";
import Textarea from "./Textarea";

const meta: Meta<typeof Textarea> = {
    title: "Components/Textarea",
    component: Textarea,
    args: {
        size: Size.MD,
        variant: Variant.Primary,
        placeholder: "Enter text",
    },
    argTypes: {
        size: sizeArg,
        variant: variantArg,
    },
};
export default meta;

type Story = StoryObj<typeof Textarea>;

export const Default: Story = {};

export const Invalid: Story = {
    args: { invalid: true, placeholder: "Invalid" },
};

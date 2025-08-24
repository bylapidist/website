import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg, variantArg } from "@/components/story-utils/args";
import { Size, Variant } from "@/types";
import Checkbox from "./Checkbox";

const meta: Meta<typeof Checkbox> = {
    title: "Components/Checkbox",
    component: Checkbox,
    args: {
        size: Size.MD,
        variant: Variant.Primary,
    },
    argTypes: {
        size: sizeArg,
        variant: variantArg,
    },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};

export const Checked: Story = {
    args: { defaultChecked: true },
};

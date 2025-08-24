import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg, variantArg } from "@/components/story-utils/args";
import { Size, Variant } from "@/packages/types";
import Switch from "./Switch";

const meta: Meta<typeof Switch> = {
    title: "Components/Switch",
    component: Switch,
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

type Story = StoryObj<typeof Switch>;

export const Default: Story = {};

export const Checked: Story = {
    args: { defaultChecked: true },
};

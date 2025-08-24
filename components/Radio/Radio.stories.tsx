import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg, variantArg } from "@/.storybook/args";
import { Size, Variant } from "@/types";
import Radio from "./Radio";

const meta: Meta<typeof Radio> = {
    title: "Components/Radio",
    component: Radio,
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

type Story = StoryObj<typeof Radio>;

export const Default: Story = {
    args: { name: "group" },
};

export const Checked: Story = {
    args: { name: "group", defaultChecked: true },
};

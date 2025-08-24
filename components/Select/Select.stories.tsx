import type { Meta, StoryObj } from "@storybook/nextjs";
import { sizeArg, variantArg } from "@/components/story-utils/args";
import { Size, Variant } from "@/packages/types";
import Select from "./Select";

const meta: Meta<typeof Select> = {
    title: "Components/Select",
    component: Select,
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

type Story = StoryObj<typeof Select>;

export const Default: Story = {
    render: (args) => (
        <Select {...args}>
            <option>One</option>
            <option>Two</option>
        </Select>
    ),
};

export const Invalid: Story = {
    render: (args) => (
        <Select {...args} invalid>
            <option>One</option>
        </Select>
    ),
};

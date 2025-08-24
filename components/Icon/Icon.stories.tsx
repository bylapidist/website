import type { Meta, StoryObj } from "@storybook/nextjs";
import { Size } from "@/packages/types/props";
import Icon from "./Icon";
import { icons } from "./icons";

const meta = {
    title: "Components/Icon",
    component: Icon,
    args: {
        name: "sun",
        size: Size.MD,
    },
    argTypes: {
        name: {
            control: { type: "select" },
            options: Object.keys(icons),
        },
        size: {
            control: { type: "select" },
            options: Object.values(Size),
        },
    },
} satisfies Meta<typeof Icon>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

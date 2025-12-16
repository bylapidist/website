import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { sizeArg } from "@/.storybook/args";
import { Size } from "@/types/props";
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
        size: sizeArg,
    },
} satisfies Meta<typeof Icon>;

export default meta;

export type Story = StoryObj<typeof meta>;

export const Default: Story = {};

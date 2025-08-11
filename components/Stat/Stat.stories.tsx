import type { Meta, StoryObj } from "@storybook/nextjs";
import Stat from "./Stat";

const meta = {
    title: "Components/Stat",
    component: Stat,
    args: {
        value: "100",
        label: "Items",
    },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithSuffix: Story = {
    args: { suffix: "%" },
};

export const Large: Story = {
    args: { size: "lg" },
};

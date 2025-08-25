import type { Meta, StoryObj } from "@storybook/nextjs";
import Background from "./Background";

const meta = {
    title: "Components/Background",
    component: Background,
} satisfies Meta<typeof Background>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

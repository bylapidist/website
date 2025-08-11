import type { Meta, StoryObj } from "@storybook/nextjs";
import Stats from "./Stats";

const meta = {
    title: "Components/Stats",
    component: Stats,
} satisfies Meta<typeof Stats>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

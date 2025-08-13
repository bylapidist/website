import type { Meta, StoryObj } from "@storybook/nextjs";
import Insights from "./Insights";

const meta = {
    title: "Components/Insights",
    component: Insights,
} satisfies Meta<typeof Insights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

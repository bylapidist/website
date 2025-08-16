import type { Meta, StoryObj } from "@storybook/nextjs";
import Pledge from "./Pledge";

const meta = {
    title: "Components/Pledge",
    component: Pledge,
} satisfies Meta<typeof Pledge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

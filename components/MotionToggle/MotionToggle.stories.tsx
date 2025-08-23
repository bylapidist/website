import type { Meta, StoryObj } from "@storybook/nextjs";
import MotionToggle from "./MotionToggle";

const meta = {
    title: "Components/MotionToggle",
    component: MotionToggle,
} satisfies Meta<typeof MotionToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

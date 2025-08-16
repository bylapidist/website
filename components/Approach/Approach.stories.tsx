import type { Meta, StoryObj } from "@storybook/nextjs";
import Approach from "./Approach";

const meta = {
    title: "Components/Approach",
    component: Approach,
} satisfies Meta<typeof Approach>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

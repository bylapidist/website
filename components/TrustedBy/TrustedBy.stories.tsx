import type { Meta, StoryObj } from "@storybook/nextjs";
import TrustedBy from "./TrustedBy";

const meta = {
    title: "Components/TrustedBy",
    component: TrustedBy,
} satisfies Meta<typeof TrustedBy>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/nextjs";
import Hero from "./Hero";

const meta = {
    title: "Components/Hero",
    component: Hero,
} satisfies Meta<typeof Hero>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

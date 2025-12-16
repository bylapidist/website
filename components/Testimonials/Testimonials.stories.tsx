import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Testimonials from "./Testimonials";

const meta = {
    title: "Components/Testimonials",
    component: Testimonials,
} satisfies Meta<typeof Testimonials>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import Contact from "./Contact";

const meta = {
    title: "Components/Contact",
    component: Contact,
} satisfies Meta<typeof Contact>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

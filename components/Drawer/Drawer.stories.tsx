import type { Meta, StoryObj } from "@storybook/nextjs";
import Drawer from "./Drawer";

const meta = {
    title: "Components/Drawer",
    component: Drawer,
} satisfies Meta<typeof Drawer>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

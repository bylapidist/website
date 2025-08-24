import type { Meta, StoryObj } from "@storybook/nextjs";
import Menu from "./Menu";

const meta = {
    title: "Components/Menu",
    component: Menu,
} satisfies Meta<typeof Menu>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

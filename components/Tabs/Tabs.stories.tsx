import type { Meta, StoryObj } from "@storybook/nextjs";
import Tabs from "./Tabs";

const meta = {
    title: "Components/Tabs",
    component: Tabs,
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

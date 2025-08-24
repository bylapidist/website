import type { Meta, StoryObj } from "@storybook/nextjs";
import Toast from "./Toast";

const meta = {
    title: "Components/Toast",
    component: Toast,
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

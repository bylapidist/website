import type { Meta, StoryObj } from "@storybook/nextjs";
import Pagination from "./Pagination";

const meta = {
    title: "Components/Pagination",
    component: Pagination,
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

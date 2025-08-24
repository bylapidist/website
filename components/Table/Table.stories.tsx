import type { Meta, StoryObj } from "@storybook/nextjs";
import Table from "./Table";

const meta = {
    title: "Components/Table",
    component: Table,
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

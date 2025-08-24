import type { Meta, StoryObj } from "@storybook/nextjs";
import Breadcrumbs from "./Breadcrumbs";

const meta = {
    title: "Components/Breadcrumbs",
    component: Breadcrumbs,
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

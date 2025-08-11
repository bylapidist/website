import type { Meta, StoryObj } from "@storybook/nextjs";
import Services from "./Services";

const meta = {
    title: "Components/Services",
    component: Services,
} satisfies Meta<typeof Services>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

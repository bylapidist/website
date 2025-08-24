import type { Meta, StoryObj } from "@storybook/nextjs";
import DatePicker from "./DatePicker";

const meta = {
    title: "Components/DatePicker",
    component: DatePicker,
} satisfies Meta<typeof DatePicker>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

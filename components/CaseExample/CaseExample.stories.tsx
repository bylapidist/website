import type { Meta, StoryObj } from "@storybook/nextjs";
import CaseExample from "./CaseExample";

const meta = {
    title: "Components/CaseExample",
    component: CaseExample,
} satisfies Meta<typeof CaseExample>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

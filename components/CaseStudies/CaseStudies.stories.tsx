import type { Meta, StoryObj } from "@storybook/nextjs";
import CaseStudies from "./CaseStudies";

const meta = {
    title: "Components/CaseStudies",
    component: CaseStudies,
} satisfies Meta<typeof CaseStudies>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

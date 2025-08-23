import type { Meta, StoryObj } from "@storybook/nextjs";
import Approach, { Step } from "./Approach";

const meta = {
    title: "Components/Approach",
    component: Approach,
    argTypes: {
        steps: { control: "object" },
    },
    parameters: {
        layout: "fullscreen",
    },
} satisfies Meta<typeof Approach>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

const altSteps: Step[] = [
    {
        title: "Discover",
        description: "understand team goals and technical landscape.",
    },
    {
        title: "Design",
        description: "prototype flows and validate with stakeholders.",
    },
    {
        title: "Deliver",
        description: "ship polished, accessible interfaces at speed.",
    },
];

export const CustomSteps: Story = {
    args: {
        steps: altSteps,
    },
};

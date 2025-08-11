import type { Meta, StoryObj } from "@storybook/nextjs";
import ProblemToSolution from "./ProblemToSolution";

const meta = {
    title: "Components/ProblemToSolution",
    component: ProblemToSolution,
} satisfies Meta<typeof ProblemToSolution>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

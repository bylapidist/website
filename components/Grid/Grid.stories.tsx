import type { Meta, StoryObj } from "@storybook/nextjs";
import Grid from "./Grid";

const meta = {
    title: "Components/Grid",
    component: Grid,
    args: {
        children: [<div key="1">One</div>, <div key="2">Two</div>],
        gap: "var(--space-s)",
    },
} satisfies Meta<typeof Grid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

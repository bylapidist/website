import type { Meta, StoryObj } from "@storybook/nextjs";
import CardGrid from "./CardGrid";

const meta = {
    title: "Components/CardGrid",
    component: CardGrid,
    args: {
        children: [<div key="1">One</div>, <div key="2">Two</div>],
    },
} satisfies Meta<typeof CardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

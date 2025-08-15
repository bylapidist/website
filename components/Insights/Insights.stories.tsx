import type { Meta, StoryObj } from "@storybook/nextjs";
import Insights from "./Insights";

const meta = {
    title: "Components/Insights",
    component: Insights,
} satisfies Meta<typeof Insights>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        articles: [
            {
                year: "2023",
                slug: "example-post",
                title: "Example Post",
                description: "An example article used for Storybook.",
            },
            {
                year: "2022",
                slug: "another-post",
                title: "Another Post",
                description: "Another article demonstrating the layout.",
            },
            {
                year: "2021",
                slug: "third-post",
                title: "Third Post",
                description: "Yet another example article.",
            },
        ],
    },
};

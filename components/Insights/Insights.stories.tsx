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
                summary: "An example article used for Storybook.",
                date: "2023-01-01",
                tags: ["example", "storybook"],
                readingTime: "1 min read",
            },
            {
                year: "2022",
                slug: "another-post",
                title: "Another Post",
                summary: "Another article demonstrating the layout.",
                date: "2022-01-01",
                tags: ["demo"],
                readingTime: "2 min read",
            },
            {
                year: "2021",
                slug: "third-post",
                title: "Third Post",
                summary: "Yet another example article.",
                date: "2021-01-01",
                tags: [],
                readingTime: "3 min read",
            },
        ],
    },
};

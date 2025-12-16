import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import TableOfContents, {
    type TableOfContentsHeading,
} from "./TableOfContents";

const sampleHeadings: TableOfContentsHeading[] = [
    { id: "section-1", text: "Section 1", level: 2 },
    { id: "subsection-1-1", text: "Subsection 1.1", level: 3 },
    { id: "section-2", text: "Section 2", level: 2 },
];

const meta = {
    title: "Components/TableOfContents",
    component: TableOfContents,
    args: {
        headings: sampleHeadings,
    },
} satisfies Meta<typeof TableOfContents>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/nextjs";
import VisuallyHidden from "./VisuallyHidden";

const meta = {
    title: "Components/VisuallyHidden",
    component: VisuallyHidden,
    args: {
        children: "Hidden text",
    },
} satisfies Meta<typeof VisuallyHidden>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    render: (args) => (
        <p>
            Visible text <VisuallyHidden {...args} /> more visible text
        </p>
    ),
};

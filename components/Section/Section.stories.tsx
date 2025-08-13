import type { Meta, StoryObj } from "@storybook/nextjs";
import Section from "./Section";

const meta = {
    title: "Components/Section",
    component: Section,
    args: {
        heading: "Section heading",
        children: "Section content",
    },
} satisfies Meta<typeof Section>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Small: Story = {
    args: { containerSize: "s" },
};

export const Large: Story = {
    args: { containerSize: "l" },
};

export const HeadingLevel3: Story = {
    args: { headingLevel: 3 },
};

export const SmallHeadingLevel3: Story = {
    args: { containerSize: "s", headingLevel: 3 },
};

export const LargeHeadingLevel3: Story = {
    args: { containerSize: "l", headingLevel: 3 },
};

export const WithoutHeading: Story = {
    args: { heading: undefined },
};

export const ContentVisibilityOff: Story = {
    args: { contentVisibility: false },
};

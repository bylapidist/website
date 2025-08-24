import type { Meta, StoryObj } from "@storybook/nextjs";
import { Size } from "@/packages/types";
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

export const SmallHeadingLevel1: Story = {
    args: { containerSize: Size.SM, headingLevel: 1 },
};

export const HeadingLevel1: Story = {
    args: { headingLevel: 1 },
};

export const LargeHeadingLevel1: Story = {
    args: { containerSize: Size.LG, headingLevel: 1 },
};

export const SmallHeadingLevel2: Story = {
    args: { containerSize: Size.SM, headingLevel: 2 },
};

export const LargeHeadingLevel2: Story = {
    args: { containerSize: Size.LG, headingLevel: 2 },
};

export const HeadingLevel3: Story = {
    args: { headingLevel: 3 },
};

export const SmallHeadingLevel3: Story = {
    args: { containerSize: Size.SM, headingLevel: 3 },
};

export const LargeHeadingLevel3: Story = {
    args: { containerSize: Size.LG, headingLevel: 3 },
};

export const HeadingLevel4: Story = {
    args: { headingLevel: 4 },
};

export const SmallHeadingLevel4: Story = {
    args: { containerSize: Size.SM, headingLevel: 4 },
};

export const LargeHeadingLevel4: Story = {
    args: { containerSize: Size.LG, headingLevel: 4 },
};

export const HeadingLevel5: Story = {
    args: { headingLevel: 5 },
};

export const SmallHeadingLevel5: Story = {
    args: { containerSize: Size.SM, headingLevel: 5 },
};

export const LargeHeadingLevel5: Story = {
    args: { containerSize: Size.LG, headingLevel: 5 },
};

export const HeadingLevel6: Story = {
    args: { headingLevel: 6 },
};

export const SmallHeadingLevel6: Story = {
    args: { containerSize: Size.SM, headingLevel: 6 },
};

export const LargeHeadingLevel6: Story = {
    args: { containerSize: Size.LG, headingLevel: 6 },
};

export const WithoutHeading: Story = {
    args: { heading: undefined },
};

export const ContentVisibilityOn: Story = {
    args: { contentVisibility: true },
};

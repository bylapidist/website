import type { Meta, StoryObj } from "@storybook/nextjs";
import Accordion from "./Accordion";

const meta = {
    title: "Components/Accordion",
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

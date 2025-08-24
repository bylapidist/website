import type { Meta, StoryObj } from "@storybook/nextjs";
import Carousel from "./Carousel";

const meta = {
    title: "Components/Carousel",
    component: Carousel,
} satisfies Meta<typeof Carousel>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Playground: Story = {};

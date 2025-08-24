import type { Meta, StoryObj } from "@storybook/nextjs";
import TokensCatalogue from "./TokensCatalogue";

const meta = {
    title: "Docs/TokensCatalogue",
    component: TokensCatalogue,
} satisfies Meta<typeof TokensCatalogue>;

export default meta;

export const Overview: StoryObj<typeof meta> = {};

import type { Meta, StoryObj } from "@storybook/nextjs";
import WhatIBring from "./WhatIBring";

const meta = {
    title: "Components/WhatIBring",
    component: WhatIBring,
} satisfies Meta<typeof WhatIBring>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/nextjs";
import Button from "../Button/Button";
import ButtonGroup from "./ButtonGroup";

const meta = {
    title: "Components/ButtonGroup",
    component: ButtonGroup,
    args: {
        children: [<Button key="a">A</Button>, <Button key="b">B</Button>],
    },
} satisfies Meta<typeof ButtonGroup>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

import type { Meta, StoryObj } from "@storybook/nextjs";
import { BookCallButton, DownloadDeckButton } from "./Cta";

const meta = {
    title: "Components/Cta",
    component: BookCallButton,
} satisfies Meta<typeof BookCallButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BookCallPrimary: Story = {};

export const BookCallSecondary: Story = {
    args: { variant: "secondary" },
};

export const BookCallGhost: Story = {
    args: { variant: "ghost" },
};

export const DownloadDeckSecondary: Story = {
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckPrimary: Story = {
    args: { variant: "primary" },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckGhost: Story = {
    args: { variant: "ghost" },
    render: (args) => <DownloadDeckButton {...args} />,
};

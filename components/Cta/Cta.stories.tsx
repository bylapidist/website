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

export const BookCallLarge: Story = {
    args: { size: "lg" },
};

export const BookCallLoading: Story = {
    args: { loading: true },
};

export const BookCallLargeLoading: Story = {
    args: { size: "lg", loading: true },
};

export const BookCallSecondaryLarge: Story = {
    args: { variant: "secondary", size: "lg" },
};

export const BookCallSecondaryLoading: Story = {
    args: { variant: "secondary", loading: true },
};

export const BookCallSecondaryLargeLoading: Story = {
    args: { variant: "secondary", size: "lg", loading: true },
};

export const BookCallGhostLarge: Story = {
    args: { variant: "ghost", size: "lg" },
};

export const BookCallGhostLoading: Story = {
    args: { variant: "ghost", loading: true },
};

export const BookCallGhostLargeLoading: Story = {
    args: { variant: "ghost", size: "lg", loading: true },
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

export const DownloadDeckLarge: Story = {
    args: { size: "lg" },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckLoading: Story = {
    args: { loading: true },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckLargeLoading: Story = {
    args: { size: "lg", loading: true },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckPrimaryLarge: Story = {
    args: { variant: "primary", size: "lg" },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckPrimaryLoading: Story = {
    args: { variant: "primary", loading: true },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckPrimaryLargeLoading: Story = {
    args: { variant: "primary", size: "lg", loading: true },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckGhostLarge: Story = {
    args: { variant: "ghost", size: "lg" },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckGhostLoading: Story = {
    args: { variant: "ghost", loading: true },
    render: (args) => <DownloadDeckButton {...args} />,
};

export const DownloadDeckGhostLargeLoading: Story = {
    args: { variant: "ghost", size: "lg", loading: true },
    render: (args) => <DownloadDeckButton {...args} />,
};

import type { Meta, StoryObj } from "@storybook/nextjs";
import AudioPlayer from "./AudioPlayer";

const meta = {
    title: "Components/AudioPlayer",
    component: AudioPlayer,
    parameters: {
        a11y: { disable: false },
    },
} satisfies Meta<typeof AudioPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        src: "/audio/sample.mp3",
        title: "Sample audio",
    },
};

export const Loading: Story = {
    args: {
        src: "/audio/sample.mp3",
        title: "Sample audio",
    },
};

export const Error: Story = {
    args: {
        src: "/audio/missing.mp3",
        title: "Broken audio",
    },
};

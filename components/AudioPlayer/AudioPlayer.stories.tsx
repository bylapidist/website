import type { Meta, StoryObj } from "@storybook/nextjs";
import AudioPlayer from "./AudioPlayer";

const meta = {
    title: "Components/AudioPlayer",
    component: AudioPlayer,
    args: {
        src: "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3",
        label: "Audio: listen to this article",
    },
} satisfies Meta<typeof AudioPlayer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

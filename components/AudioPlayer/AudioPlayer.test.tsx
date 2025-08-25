import { act, render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { AudioPlayer } from "@/components";

const callbacks: Record<string, (() => void) | undefined> = {};

vi.mock("wavesurfer.js", () => ({
    default: {
        create: () => ({
            on: (event: string, cb: () => void) => {
                callbacks[event] = cb;
            },
            getDuration: () => 10,
            getCurrentTime: () => 1,
            setTime: vi.fn(),
            isPlaying: () => false,
            playPause: vi.fn(),
            destroy: vi.fn(),
        }),
    },
}));

test("slider exposes aria values", () => {
    render(<AudioPlayer src="/audio/test.mp3" />);
    act(() => {
        callbacks.ready?.();
        callbacks.timeupdate?.();
    });
    const slider = screen.getByRole("slider", { name: "Audio progress" });
    expect(slider).toHaveAttribute("aria-valuemin", "0");
    expect(slider).toHaveAttribute("aria-valuemax", "10");
    expect(slider).toHaveAttribute("aria-valuenow", "1");
});

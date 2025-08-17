"use client";

import { useEffect, useRef, useState, type ChangeEvent } from "react";
import clsx from "clsx";
import { Howl } from "howler";
import Button from "@/components/Button/Button";
import styles from "./AudioPlayer.module.scss";

export type AudioPlayerProps = {
    src: string;
    label?: string;
    className?: string;
};

export default function AudioPlayer({
    src,
    label = "Audio: listen to this article",
    className,
}: AudioPlayerProps) {
    const soundRef = useRef<Howl | null>(null);
    const [playing, setPlaying] = useState(false);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const sound = new Howl({ src: [src], html5: true });
        soundRef.current = sound;

        const updateProgress = () => {
            const s = soundRef.current;
            if (!s) return;
            const duration = s.duration();
            const seek = s.seek();
            setProgress(duration ? seek / duration : 0);
            if (s.playing()) {
                requestAnimationFrame(updateProgress);
            }
        };

        const handlePlay = () => {
            setPlaying(true);
            requestAnimationFrame(updateProgress);
        };
        const handlePause = () => {
            setPlaying(false);
        };
        const handleEnd = () => {
            setPlaying(false);
            setProgress(1);
        };

        sound.on("play", handlePlay);
        sound.on("pause", handlePause);
        sound.on("end", handleEnd);

        return () => {
            sound.off("play", handlePlay);
            sound.off("pause", handlePause);
            sound.off("end", handleEnd);
            sound.unload();
        };
    }, [src]);

    function togglePlayback() {
        const sound = soundRef.current;
        if (!sound) return;
        if (sound.playing()) {
            sound.pause();
        } else {
            sound.play();
        }
    }

    function handleSeek(e: ChangeEvent<HTMLInputElement>) {
        const sound = soundRef.current;
        if (!sound) return;
        const value = Number(e.target.value);
        const duration = sound.duration();
        sound.seek((value / 100) * duration);
        setProgress(value / 100);
    }

    return (
        <div className={clsx(styles.player, className)}>
            <div className={styles.controls}>
                <Button
                    onClick={togglePlayback}
                    aria-label={playing ? "Pause audio" : "Play audio"}
                >
                    {playing ? "Pause" : "Play"}
                </Button>
                <input
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    value={Math.round(progress * 100)}
                    onChange={handleSeek}
                    aria-label="Seek audio"
                    className={styles.slider}
                />
            </div>
            <span className={styles.label}>{label}</span>
        </div>
    );
}

"use client";

import { useEffect, useRef, useState } from "react";
import type WaveSurfer from "wavesurfer.js";
import Button from "@/components/Button/Button";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./AudioPlayer.module.scss";

type Props = {
    src: string;
    title?: string;
    showWaveform?: boolean;
};

export default function AudioPlayer({
    src,
    title,
    showWaveform = false,
}: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const waveSurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const label = title ? `Audio player for ${title}` : "Audio player";

    useEffect(() => {
        if (showWaveform && typeof window !== "undefined") {
            let cancelled = false;
            void import("wavesurfer.js").then(
                (module: typeof import("wavesurfer.js")) => {
                    if (cancelled || !waveformRef.current) return;
                    const ws = module.default.create({
                        container: waveformRef.current,
                        waveColor: "var(--surface-level-2)",
                        progressColor: "var(--colour-primary)",
                        cursorWidth: 0,
                        url: src,
                    });
                    waveSurferRef.current = ws;
                    ws.on("ready", () => {
                        setDuration(ws.getDuration());
                        setLoading(false);
                    });
                    ws.on("play", () => {
                        setIsPlaying(true);
                    });
                    ws.on("pause", () => {
                        setIsPlaying(false);
                    });
                    ws.on("timeupdate", () => {
                        setCurrentTime(ws.getCurrentTime());
                    });
                    ws.on("error", () => {
                        setError(true);
                        setLoading(false);
                    });
                    ws.on("finish", () => {
                        setIsPlaying(false);
                    });
                },
            );
            return () => {
                cancelled = true;
                waveSurferRef.current?.destroy();
                waveSurferRef.current = null;
            };
        }

        const audio = audioRef.current;
        if (!audio) return;
        const audioEl = audio;

        function onLoadedMetadata() {
            setDuration(audioEl.duration);
            setLoading(false);
        }
        function onTimeUpdate() {
            setCurrentTime(audioEl.currentTime);
        }
        function onEnded() {
            setIsPlaying(false);
        }
        function onError() {
            setError(true);
            setLoading(false);
        }

        audioEl.addEventListener("loadedmetadata", onLoadedMetadata);
        audioEl.addEventListener("timeupdate", onTimeUpdate);
        audioEl.addEventListener("ended", onEnded);
        audioEl.addEventListener("error", onError);

        return () => {
            audioEl.removeEventListener("loadedmetadata", onLoadedMetadata);
            audioEl.removeEventListener("timeupdate", onTimeUpdate);
            audioEl.removeEventListener("ended", onEnded);
            audioEl.removeEventListener("error", onError);
        };
    }, [src, showWaveform]);

    useEffect(() => {
        if (!title) return;
        if (typeof navigator === "undefined" || !("mediaSession" in navigator))
            return;
        navigator.mediaSession.metadata = new MediaMetadata({ title });
    }, [title]);

    function togglePlay() {
        if (showWaveform && waveSurferRef.current) {
            waveSurferRef.current.playPause();
            setIsPlaying(waveSurferRef.current.isPlaying());
        } else if (audioRef.current) {
            if (audioRef.current.paused) {
                void audioRef.current.play();
                setIsPlaying(true);
            } else {
                audioRef.current.pause();
                setIsPlaying(false);
            }
        }
    }

    function seek(value: number) {
        if (showWaveform && waveSurferRef.current) {
            waveSurferRef.current.setTime(value);
        } else if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
        setCurrentTime(value);
    }

    function handleSliderChange(e: React.ChangeEvent<HTMLInputElement>) {
        seek(Number(e.target.value));
    }

    const format = (t: number) => {
        const minutes = Math.floor(t / 60)
            .toString()
            .padStart(2, "0");
        const seconds = Math.floor(t % 60)
            .toString()
            .padStart(2, "0");
        return `${minutes}:${seconds}`;
    };

    if (error) {
        return (
            <div className={styles.player} role="region" aria-label={label}>
                <p role="alert">Audio failed to load.</p>
                <noscript>
                    <audio controls src={src}>
                        <track
                            kind="captions"
                            src={src.replace(/\.[^/.]+$/, ".vtt")}
                            label="Captions"
                        />
                    </audio>
                </noscript>
            </div>
        );
    }

    return (
        <div className={styles.player} role="region" aria-label={label}>
            {!showWaveform && (
                <audio
                    ref={audioRef}
                    src={src}
                    preload="metadata"
                    className={styles.native}
                    aria-hidden="true"
                >
                    <track
                        kind="captions"
                        src={src.replace(/\.[^/.]+$/, ".vtt")}
                        label="Captions"
                    />
                </audio>
            )}
            {showWaveform && (
                <div ref={waveformRef} className={styles.waveform} />
            )}
            {loading ? (
                <p>Loading audio…</p>
            ) : (
                <div className={styles.controls}>
                    <Button
                        onClick={togglePlay}
                        aria-pressed={isPlaying}
                        className={styles.play}
                        variant="secondary"
                    >
                        {isPlaying ? (
                            <PauseIcon className={styles.icon} />
                        ) : (
                            <PlayIcon className={styles.icon} />
                        )}
                        <VisuallyHidden>
                            {isPlaying ? "Pause audio" : "Play audio"}
                        </VisuallyHidden>
                    </Button>
                    <input
                        type="range"
                        min={0}
                        max={duration}
                        step={0.1}
                        value={currentTime}
                        onChange={handleSliderChange}
                        className={styles.slider}
                        aria-label="Audio progress"
                    />
                    <span className={styles.time}>
                        <VisuallyHidden>Elapsed time:</VisuallyHidden>
                        {format(currentTime)} /
                        <VisuallyHidden>Total time:</VisuallyHidden>
                        {format(duration)}
                    </span>
                </div>
            )}
            <noscript>
                <audio controls src={src}>
                    <track
                        kind="captions"
                        src={src.replace(/\.[^/.]+$/, ".vtt")}
                        label="Captions"
                    />
                </audio>
            </noscript>
        </div>
    );
}

function PlayIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function PauseIcon(props: React.SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
        </svg>
    );
}

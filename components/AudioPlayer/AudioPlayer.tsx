"use client";

import {
    ChangeEvent,
    SVGProps,
    useEffect,
    useId,
    useRef,
    useState,
} from "react";
import clsx from "clsx";
import WaveSurfer from "wavesurfer.js";
import Button from "@/components/Button/Button";
import VisuallyHidden from "@/components/VisuallyHidden/VisuallyHidden";
import styles from "./AudioPlayer.module.scss";

type Props = {
    src: string;
    title?: string;
};

export default function AudioPlayer({ src, title }: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const waveformRef = useRef<HTMLDivElement | null>(null);
    const waveSurferRef = useRef<WaveSurfer | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const titleId = useId();

    const label = title ? `Audio player for ${title}` : "Audio player";

    useEffect(() => {
        if (!waveformRef.current) return;
        const ws = WaveSurfer.create({
            container: waveformRef.current,
            waveColor: "#4d4d4d",
            progressColor: "#87a8ff",
            height: 32,
            barWidth: 2,
            barGap: 1,
            barRadius: 2,
            url: src,
        });
        waveSurferRef.current = ws;

        ws.on("ready", () => {
            setDuration(ws.getDuration());
        });
        ws.on("redrawcomplete", () => {
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

        const audio = audioRef.current;
        if (!audio) return;
        const audioEl = audio;

        function onLoadedMetadata() {
            setDuration(audioEl.duration);
            if (!waveSurferRef.current) {
                setLoading(false);
            }
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
            waveSurferRef.current?.destroy();
            waveSurferRef.current = null;
        };
    }, [src]);

    useEffect(() => {
        if (!title) return;
        if (typeof navigator === "undefined" || !("mediaSession" in navigator))
            return;
        navigator.mediaSession.metadata = new MediaMetadata({ title });
    }, [title]);

    function togglePlay() {
        if (waveSurferRef.current) {
            void waveSurferRef.current.playPause();
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
        if (waveSurferRef.current) {
            waveSurferRef.current.setTime(value);
        } else if (audioRef.current) {
            audioRef.current.currentTime = value;
        }
        setCurrentTime(value);
    }

    function handleSliderChange(e: ChangeEvent<HTMLInputElement>) {
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

    if (error) return;

    const loadingClasses = clsx(styles.loading, { [styles.loaded]: !loading });

    return (
        <div
            className={styles.player}
            role="region"
            aria-labelledby={title ? titleId : undefined}
            aria-label={!title ? label : undefined}
        >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <audio
                ref={audioRef}
                src={src}
                preload="metadata"
                className={styles.native}
                aria-hidden="true"
            />
            {title && <h2 id={titleId}>{title}</h2>}
            <div className={styles.waveformWrapper}>
                <div ref={waveformRef} className={styles.waveform} />
                <div className={loadingClasses} />
            </div>
            <div className={styles.controls}>
                <Button
                    onClick={togglePlay}
                    aria-pressed={isPlaying}
                    className={styles.play}
                    variant="secondary"
                    disabled={loading}
                    size="sm"
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
                    {format(currentTime)} /{" "}
                    <VisuallyHidden>Total time:</VisuallyHidden>
                    {format(duration)}
                </span>
            </div>
        </div>
    );
}

function PlayIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M8 5v14l11-7z" />
        </svg>
    );
}

function PauseIcon(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path d="M6 5h4v14H6zm8 0h4v14h-4z" />
        </svg>
    );
}

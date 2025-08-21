declare module "wavesurfer.js" {
    export interface WaveSurferOptions {
        container: HTMLElement;
        waveColor: string;
        progressColor: string;
        cursorWidth: number;
        url: string;
    }

    export default class WaveSurfer {
        static create(options: WaveSurferOptions): WaveSurfer;
        on(event: string, callback: () => void): void;
        destroy(): void;
        getDuration(): number;
        getCurrentTime(): number;
        isPlaying(): boolean;
        playPause(): void;
        setTime(time: number): void;
    }
}

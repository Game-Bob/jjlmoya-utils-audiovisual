export interface VideoItem {
    id: string;
    file: File;
    url: string;
    name: string;
    duration: number;
    width: number;
    height: number;
}

export function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

export function formatTime(seconds: number): string {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes().toString().padStart(2, "0");
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    const ms = Math.floor(date.getUTCMilliseconds()).toString().padStart(3, "0");
    return `${mm}:${ss}.${ms}`;
}

export function getVideoMetadata(file: File): Promise<{ duration: number; width: number; height: number }> {
    return new Promise((resolve, reject) => {
        const video = document.createElement("video");
        video.preload = "metadata";
        video.muted = true;
        video.playsInline = true;
        const url = URL.createObjectURL(file);
        video.src = url;
        video.onloadedmetadata = () => {
            resolve({
                duration: video.duration,
                width: video.videoWidth,
                height: video.videoHeight
            });
            URL.revokeObjectURL(url);
        };
        video.onerror = () => {
            reject(new Error("Failed to load video metadata"));
            URL.revokeObjectURL(url);
        };
    });
}

export interface MergeOptions {
    width: number;
    height: number;
    fps: number;
}

export class VideoMergerEngine {
    private items: VideoItem[] = [];
    private videoElement: HTMLVideoElement;
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D | null = null;
    private audioContext: AudioContext | null = null;
    private audioDestination: MediaStreamAudioDestinationNode | null = null;
    private mediaRecorder: MediaRecorder | null = null;
    private recordedChunks: Blob[] = [];
    private animationFrameId: number | null = null;
    private isMergingState = false;

    constructor() {
        this.videoElement = document.createElement("video");
        this.videoElement.muted = false;
        this.videoElement.playsInline = true;
        this.canvas = document.createElement("canvas");
    }

    public setItems(items: VideoItem[]) {
        this.items = items;
    }

    public isMerging(): boolean {
        return this.isMergingState;
    }

    public async merge(
        options: MergeOptions,
        onProgress: (progress: number, currentVideoName: string, index: number) => void
    ): Promise<Blob> {
        if (this.items.length === 0) {
            throw new Error("No videos to merge");
        }

        this.isMergingState = true;
        this.recordedChunks = [];
        
        const { width, height, fps } = options;
        this.canvas.width = width;
        this.canvas.height = height;
        this.ctx = this.canvas.getContext("2d");

        if (!this.ctx) {
            this.isMergingState = false;
            throw new Error("Could not initialize canvas context");
        }

        const WebkitAudioContext = (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
        this.audioContext = new (window.AudioContext || WebkitAudioContext)();
        this.audioDestination = this.audioContext.createMediaStreamDestination();
        
        const audioSource = this.audioContext.createMediaElementSource(this.videoElement);
        audioSource.connect(this.audioDestination);

        const videoStream = this.canvas.captureStream(fps);
        const audioStream = this.audioDestination.stream;

        const mergedStream = new MediaStream([
            ...videoStream.getVideoTracks(),
            ...audioStream.getAudioTracks()
        ]);

        let mimeType = "video/webm;codecs=vp9,opus";
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = "video/webm;codecs=vp8,opus";
        }
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = "video/webm";
        }
        if (!MediaRecorder.isTypeSupported(mimeType)) {
            mimeType = "";
        }

        this.mediaRecorder = mimeType 
            ? new MediaRecorder(mergedStream, { mimeType }) 
            : new MediaRecorder(mergedStream);

        this.mediaRecorder.ondataavailable = (event) => {
            if (event.data && event.data.size > 0) {
                this.recordedChunks.push(event.data);
            }
        };

        return new Promise<Blob>(async (resolve, reject) => {
            if (!this.mediaRecorder) return reject(new Error("MediaRecorder not initialized"));

            this.mediaRecorder.onstop = () => {
                this.cleanup();
                const blob = new Blob(this.recordedChunks, { type: "video/webm" });
                resolve(blob);
            };

            this.mediaRecorder.onerror = (e) => {
                this.cleanup();
                reject(e);
            };

            this.mediaRecorder.start();

            for (let i = 0; i < this.items.length; i++) {
                const currentItem = this.items[i];
                if (!currentItem) continue;
                try {
                    await this.playAndRecordItem(currentItem, (prog, name) => {
                        onProgress(prog, name, i);
                    });
                } catch (err) {
                    this.mediaRecorder.stop();
                    return reject(err);
                }
            }

            this.mediaRecorder.stop();
        });
    }

    private playAndRecordItem(
        item: VideoItem,
        onProgress: (progress: number, currentVideoName: string) => void
    ): Promise<void> {
        return new Promise<void>((resolve, reject) => {
            this.videoElement.src = item.url;
            this.videoElement.load();

            const onCanPlay = () => {
                this.videoElement.play().catch(reject);
                this.drawLoop({
                    item,
                    onProgress,
                    onDone: resolve
                });
                this.videoElement.removeEventListener("canplaythrough", onCanPlay);
            };

            this.videoElement.addEventListener("canplaythrough", onCanPlay);
            this.videoElement.onerror = () => {
                this.videoElement.removeEventListener("canplaythrough", onCanPlay);
                reject(new Error(`Error playing video: ${item.name}`));
            };
        });
    }

    private drawLoop(options: {
        item: VideoItem;
        onProgress: (progress: number, currentVideoName: string) => void;
        onDone: () => void;
    }) {
        const { item, onProgress, onDone } = options;
        const render = () => {
            if (!this.ctx || this.videoElement.paused || this.videoElement.ended) {
                if (this.videoElement.ended) {
                    onDone();
                }
                return;
            }

            this.ctx.fillStyle = "#000000";
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

            const vWidth = this.videoElement.videoWidth;
            const vHeight = this.videoElement.videoHeight;
            const targetRatio = this.canvas.width / this.canvas.height;
            const videoRatio = vWidth / vHeight;

            let drawWidth = this.canvas.width;
            let drawHeight = this.canvas.height;
            let offsetX = 0;
            let offsetY = 0;

            if (videoRatio > targetRatio) {
                drawHeight = this.canvas.width / videoRatio;
                offsetY = (this.canvas.height - drawHeight) / 2;
            } else {
                drawWidth = this.canvas.height * videoRatio;
                offsetX = (this.canvas.width - drawWidth) / 2;
            }

            this.ctx.drawImage(this.videoElement, offsetX, offsetY, drawWidth, drawHeight);

            const progress = Math.min(100, (this.videoElement.currentTime / item.duration) * 100);
            onProgress(progress, item.name);

            this.animationFrameId = requestAnimationFrame(render);
        };

        this.animationFrameId = requestAnimationFrame(render);

        const onEnded = () => {
            if (this.animationFrameId) {
                cancelAnimationFrame(this.animationFrameId);
            }
            this.videoElement.removeEventListener("ended", onEnded);
            onDone();
        };

        this.videoElement.addEventListener("ended", onEnded);
    }

    private cleanup() {
        this.isMergingState = false;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.videoElement.pause();
        this.videoElement.src = "";
        
        if (this.audioContext) {
            this.audioContext.close().catch(() => {});
        }
    }
}

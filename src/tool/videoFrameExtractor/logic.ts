export interface CapturedFrame {
    id: string;
    url: string;
    timestamp: number;
}

export function formatTime(seconds: number): string {
    const date = new Date(seconds * 1000);
    const mm = date.getUTCMinutes().toString().padStart(2, "0");
    const ss = date.getUTCSeconds().toString().padStart(2, "0");
    const ms = Math.floor(date.getUTCMilliseconds()).toString().padStart(3, "0");
    return `${mm}:${ss}.${ms}`;
}

export function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

export function captureFrameFromVideo(video: HTMLVideoElement): CapturedFrame | null {
    if (!video.videoWidth || !video.videoHeight) return null;

    const canvas = document.createElement("canvas");
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    const ctx = canvas.getContext("2d");

    if (!ctx) return null;

    ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
    const url = canvas.toDataURL("image/webp", 1.0);
    
    return {
        id: generateId(),
        url,
        timestamp: video.currentTime
    };
}

export async function captureFrameAtTime(video: HTMLVideoElement, time: number): Promise<CapturedFrame | null> {
    return new Promise((resolve) => {
        const onSeeked = () => {
            const frame = captureFrameFromVideo(video);
            video.removeEventListener("seeked", onSeeked);
            resolve(frame);
        };
        video.addEventListener("seeked", onSeeked);
        video.currentTime = time;
    });
}

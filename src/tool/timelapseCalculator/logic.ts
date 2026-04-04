export const RAW_SIZE_MB = 25;
export const GB_CONVERSION = 1024;

export interface TimelapseResult {
    interval: number;
    totalFrames: number;
    storageGB: number;
    speedFactor: number;
    shutterSpeed: number;
}

export const calculateTimelapse = (
    eventDurationSecs: number,
    videoTargetSecs: number,
    fps: number
): TimelapseResult => {
    const totalFrames = videoTargetSecs * fps;
    const interval =
        totalFrames > 0 && eventDurationSecs > 0 ? eventDurationSecs / totalFrames : 0;

    const rawSizeGB = (totalFrames * RAW_SIZE_MB) / GB_CONVERSION;
    const speedFactor = videoTargetSecs > 0 ? eventDurationSecs / videoTargetSecs : 0;

    const shutterSpeed = interval / 2;

    return {
        interval,
        totalFrames: Math.floor(totalFrames),
        storageGB: rawSizeGB,
        speedFactor,
        shutterSpeed,
    };
};

export const formatTime = (seconds: number): string => {
    const h = Math.floor(seconds / 3600)
        .toString()
        .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
        .toString()
        .padStart(2, "0");
    const s = Math.floor(seconds % 60)
        .toString()
        .padStart(2, "0");
    return h === "00" ? `${m}:${s}` : `${h}:${m}:${s}`;
};

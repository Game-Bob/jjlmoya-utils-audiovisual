export interface SrtItem {
    id: string;
    start: number;
    end: number;
    text: string;
}

export function parseSRT(data: string): SrtItem[] {
    const cleanData = data.replace(/\r/g, "");
    const parts = cleanData.split("\n\n");

    return parts
        .map((part) => {
            const lines = part.trim().split("\n");
            if (lines.length < 3) return null;

            const id = lines[0];
            const timeLine = lines[1];
            if (!timeLine || !timeLine.includes("-->")) return null;

            const timeParts = timeLine.split(" --> ");
            const start = timeParts[0];
            const end = timeParts[1];
            if (!start || !end) return null;

            const text = lines.slice(2).join("\n");

            return {
                id,
                start: timeMs(start),
                end: timeMs(end),
                text,
            };
        })
        .filter((x): x is SrtItem => x !== null);
}

export function timeMs(timeStr: string): number {
    const parts = timeStr.split(",");
    const hms = parts[0];
    const ms = parts[1] || "0";
    
    if (!hms) return 0;
    
    const hmsParts = hms.split(":");
    const h = Number(hmsParts[0] || 0);
    const m = Number(hmsParts[1] || 0);
    const s = Number(hmsParts[2] || 0);
    
    return h * 3600000 + m * 60000 + s * 1000 + Number(ms);
}

export function msToTime(duration: number): string {
    if (duration < 0) return "00:00:00,000";

    const h = Math.floor(duration / 3600000);
    const m = Math.floor((duration % 3600000) / 60000);
    const s = Math.floor((duration % 60000) / 1000);
    const ms = Math.floor(duration % 1000);

    const hh = h.toString().padStart(2, "0");
    const mm = m.toString().padStart(2, "0");
    const ss = s.toString().padStart(2, "0");
    const msStr = ms.toString().padStart(3, "0");

    return `${hh}:${mm}:${ss},${msStr}`;
}

export function generateSRT(items: SrtItem[]): string {
    return items
        .map((item, index) => {
            return `${index + 1}\n${msToTime(item.start)} --> ${msToTime(item.end)}\n${item.text}`;
        })
        .join("\n\n");
}

export function shiftSubtitles(items: SrtItem[], offsetMs: number): SrtItem[] {
    return items.map((item) => {
        let newStart = item.start + offsetMs;
        let newEnd = item.end + offsetMs;

        if (newStart < 0) newStart = 0;
        if (newEnd < 0) newEnd = 0;

        return {
            ...item,
            start: newStart,
            end: newEnd,
        };
    });
}

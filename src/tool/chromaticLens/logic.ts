export type RGB = [number, number, number];

export interface ColorSwatch {
    rgb: RGB;
    hex: string;
}

function rgbToHex(r: number, g: number, b: number): string {
    return (
        "#" +
        [r, g, b]
            .map((x) => {
                const hex = x.toString(16);
                return hex.length === 1 ? "0" + hex : hex;
            })
            .join("")
    ).toUpperCase();
}

function findBucketRanges(bucket: RGB[]): { ranges: [number, number, number]; channel: 0 | 1 | 2 } {
    let minR = 255, maxR = 0, minG = 255, maxG = 0, minB = 255, maxB = 0;
    for (const p of bucket) {
        minR = Math.min(minR, p[0]); maxR = Math.max(maxR, p[0]);
        minG = Math.min(minG, p[1]); maxG = Math.max(maxG, p[1]);
        minB = Math.min(minB, p[2]); maxB = Math.max(maxB, p[2]);
    }
    const rangeR = maxR - minR, rangeG = maxG - minG, rangeB = maxB - minB;
    const ranges = [rangeR, rangeG, rangeB] as const;
    const maxIdx = ranges.indexOf(Math.max(...ranges)) as 0 | 1 | 2;
    return { ranges, channel: maxIdx };
}

function samplePixels(imageData: Uint8ClampedArray): RGB[] {
    const pixels: RGB[] = [];
    const skip = imageData.length > 500000 ? 40 : 4;
    for (let i = 0; i < imageData.length; i += skip) {
        const r = imageData[i], g = imageData[i + 1], b = imageData[i + 2], a = imageData[i + 3];
        if (typeof r === 'number' && typeof g === 'number' && typeof b === 'number' && typeof a === 'number' && a >= 128) {
            pixels.push([r, g, b]);
        }
    }
    return pixels;
}

function quantizeBuckets(buckets: RGB[][], colorCount: number): void {
    while (buckets.length < colorCount) {
        let maxRange = -1, splitIndex = -1, bestChannel: 0 | 1 | 2 = 0;
        for (let i = 0; i < buckets.length; i++) {
            const bucket = buckets[i];
            if (!bucket?.length) continue;
            const { channel } = findBucketRanges(bucket);
            const maxDimension = Math.max(...findBucketRanges(bucket).ranges);
            if (maxDimension > maxRange) {
                maxRange = maxDimension; splitIndex = i; bestChannel = channel;
            }
        }
        if (splitIndex === -1) break;
        const bucketToSplit = buckets[splitIndex];
        if (!bucketToSplit) break;
        bucketToSplit.sort((a, b) => (a[bestChannel] ?? 0) - (b[bestChannel] ?? 0));
        const mid = Math.floor(bucketToSplit.length / 2);
        buckets.splice(splitIndex, 1, bucketToSplit.slice(0, mid), bucketToSplit.slice(mid));
    }
}

function bucketToSwatch(bucket: RGB[]): ColorSwatch {
    let r = 0, g = 0, b = 0;
    for (const p of bucket) {
        r += p[0]; g += p[1]; b += p[2];
    }
    const count = bucket.length || 1;
    return {
        rgb: [Math.round(r / count), Math.round(g / count), Math.round(b / count)],
        hex: rgbToHex(Math.round(r / count), Math.round(g / count), Math.round(b / count)),
    };
}

export function extractPalette(
    imageData: Uint8ClampedArray,
    colorCount: number = 5
): ColorSwatch[] {
    const pixels = samplePixels(imageData);
    if (!pixels.length) return [];
    const buckets: RGB[][] = [pixels];
    quantizeBuckets(buckets, colorCount);
    return buckets.map(bucketToSwatch);
}

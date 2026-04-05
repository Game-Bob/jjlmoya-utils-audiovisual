export interface CollageImageData {
    src: string;
    width: number;
    height: number;
    name: string;
}

export interface CollageLayout {
    id: string;
    imagesCount: number;
    canvasWidth: number;
    canvasHeight: number;
    getPositions: (width: number, height: number, gap: number) => Array<[number, number, number, number]>;
}

export const COLLAGE_LAYOUTS: CollageLayout[] = [
    {
        id: "2x1",
        imagesCount: 2,
        canvasWidth: 800,
        canvasHeight: 400,
        getPositions: (w, h, g) => {
            const cellW = (w - g * 3) / 2;
            const cellH = h - g * 2;
            return [
                [g, g, cellW, cellH],
                [g * 2 + cellW, g, cellW, cellH]
            ];
        }
    },
    {
        id: "1x2",
        imagesCount: 2,
        canvasWidth: 400,
        canvasHeight: 800,
        getPositions: (w, h, g) => {
            const cellW = w - g * 2;
            const cellH = (h - g * 3) / 2;
            return [
                [g, g, cellW, cellH],
                [g, g * 2 + cellH, cellW, cellH]
            ];
        }
    },
    {
        id: "2x2",
        imagesCount: 4,
        canvasWidth: 800,
        canvasHeight: 800,
        getPositions: (w, _h, g) => {
            const cellSize = (w - g * 3) / 2;
            return [
                [g, g, cellSize, cellSize],
                [g * 2 + cellSize, g, cellSize, cellSize],
                [g, g * 2 + cellSize, cellSize, cellSize],
                [g * 2 + cellSize, g * 2 + cellSize, cellSize, cellSize]
            ];
        }
    },
    {
        id: "3x3",
        imagesCount: 9,
        canvasWidth: 900,
        canvasHeight: 900,
        getPositions: (w, _h, g) => {
            const cellSize = (w - g * 4) / 3;
            const pos: Array<[number, number, number, number]> = [];
            for (let r = 0; r < 3; r++) {
                for (let c = 0; c < 3; c++) {
                    pos.push([g * (c + 1) + cellSize * c, g * (r + 1) + cellSize * r, cellSize, cellSize]);
                }
            }
            return pos;
        }
    }
];

export async function drawCollage(
    canvas: HTMLCanvasElement,
    images: CollageImageData[],
    layoutId: string,
    borderWidth: number,
    borderColor: string,
    bgColor: string
): Promise<void> {
    const layout = COLLAGE_LAYOUTS.find(l => l.id === layoutId);
    if (!layout) throw new Error("Layout not found");

    const ctx = canvas.getContext("2d");
    if (!ctx) throw new Error("Canvas context not available");

    canvas.width = layout.canvasWidth;
    canvas.height = layout.canvasHeight;
    ctx.fillStyle = bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    const positions = layout.getPositions(canvas.width, canvas.height, borderWidth);
    const imagesToUse = images.slice(0, positions.length);

    for (let i = 0; i < imagesToUse.length; i++) {
        const pos = positions[i];
        if (!pos) continue;
        const [x, y, w, h] = pos;
        await drawImageOnCanvas(ctx, imagesToUse[i].src, x, y, w, h);

        if (borderWidth > 0) {
            ctx.strokeStyle = borderColor;
            ctx.lineWidth = borderWidth;
            ctx.strokeRect(x - borderWidth / 2, y - borderWidth / 2, w + borderWidth, h + borderWidth);
        }
    }
}

async function drawImageOnCanvas(
    ctx: CanvasRenderingContext2D,
    src: string,
    x: number,
    y: number,
    w: number,
    h: number
): Promise<void> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, x, y, w, h);
            resolve();
        };
        img.onerror = () => reject(new Error("Failed to draw image"));
        img.src = src;
    });
}

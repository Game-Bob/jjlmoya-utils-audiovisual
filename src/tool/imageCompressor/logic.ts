export interface CompressorSettings {
    quality: number;
    width: number | null;
    convertToWebp: boolean;
}

export interface CompressedImage {
    id: string;
    originalName: string;
    originalSize: number;
    newSize: number;
    originalWidth: number;
    originalHeight: number;
    newWidth: number;
    newHeight: number;
    dataUrl: string;
    format: string;
}

export function formatBytes(bytes: number): string {
    if (bytes === 0) return "0 B";
    const k = 1024;
    const sizes = ["B", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + " " + (sizes[i] || "B");
}

export function generateId(): string {
    return Math.random().toString(36).substring(2, 9);
}

function processCompressedImage(file: File, img: HTMLImageElement, settings: CompressorSettings, canvas: HTMLCanvasElement): CompressedImage {
    const ctx = canvas.getContext("2d")!;
    let targetW = img.naturalWidth, targetH = img.naturalHeight;
    if (settings.width && settings.width < img.naturalWidth) {
        targetW = settings.width;
        targetH = Math.round((img.naturalHeight / img.naturalWidth) * targetW);
    }
    canvas.width = targetW;
    canvas.height = targetH;
    ctx.drawImage(img, 0, 0, targetW, targetH);
    const format = settings.convertToWebp ? "image/webp" : (file.type || "image/jpeg");
    const dataUrl = canvas.toDataURL(format, settings.quality / 100);
    const newSize = Math.round((dataUrl.split(',')[1]?.length || 0) * 0.75);
    return {
        id: generateId(),
        originalName: file.name,
        originalSize: file.size,
        newSize,
        originalWidth: img.naturalWidth,
        originalHeight: img.naturalHeight,
        newWidth: targetW,
        newHeight: targetH,
        dataUrl,
        format
    };
}

export async function compressImage(file: File, settings: CompressorSettings): Promise<CompressedImage> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                if (!canvas.getContext("2d")) return reject("Canvas context not available");
                try {
                    resolve(processCompressedImage(file, img, settings, canvas));
                } catch (err) {
                    reject(err);
                }
            };
            img.onerror = () => reject("Failed to load image");
            img.src = e.target?.result as string;
        };
        reader.onerror = () => reject("Failed to read file");
        reader.readAsDataURL(file);
    });
}

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

export async function compressImage(
    file: File,
    settings: CompressorSettings
): Promise<CompressedImage> {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const img = new Image();
            img.onload = () => {
                const canvas = document.createElement("canvas");
                const ctx = canvas.getContext("2d");
                if (!ctx) return reject("Canvas context not available");

                let targetW = img.naturalWidth;
                let targetH = img.naturalHeight;

                if (settings.width && settings.width < img.naturalWidth) {
                    targetW = settings.width;
                    targetH = Math.round((img.naturalHeight / img.naturalWidth) * targetW);
                }

                canvas.width = targetW;
                canvas.height = targetH;
                ctx.drawImage(img, 0, 0, targetW, targetH);

                let format = settings.convertToWebp ? "image/webp" : (file.type || "image/jpeg");
                if (format === "image/png" && !settings.convertToWebp) {
                   // Fallback for PNG if not converting: it won't compress much with quality slider
                   // usually users want webp for compression
                }

                const quality = settings.quality / 100;
                const dataUrl = canvas.toDataURL(format, quality);

                // Estimate size from dataUrl
                const head = dataUrl.split(',')[0] || '';
                const base64Length = dataUrl.length - head.length - 1;
                const newSize = Math.round((base64Length * 3) / 4);

                resolve({
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
                });
            };
            img.onerror = () => reject("Failed to load image");
            img.src = e.target?.result as string;
        };
        reader.onerror = () => reject("Failed to read file");
        reader.readAsDataURL(file);
    });
}

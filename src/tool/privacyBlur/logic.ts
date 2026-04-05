export interface Layer {
    id: number;
    type: "pixel" | "blur" | "solid";
    x: number;
    y: number;
    w: number;
    h: number;
    intensity: number;
}

export type ToolType = "pixel" | "blur" | "solid";

interface FaceDetection {
    box: { x: number; y: number; width: number; height: number };
}

declare const faceapi: {
    loadTinyFaceDetectorModel: (path: string) => Promise<void>;
    TinyFaceDetectorOptions: (opts: { inputSize: number; scoreThreshold: number }) => object;
    detectAllFaces: (img: HTMLImageElement, detector: object) => Promise<FaceDetection[]>;
};

export class PrivacyBlurEngine {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private image: HTMLImageElement | null = null;
    private layers: Layer[] = [];

    private isDragging = false;
    private startX = 0;
    private startY = 0;
    private currentSelection: { x: number; y: number; w: number; h: number } | null = null;
    private tool: ToolType = "pixel";
    private intensity = 10;
    private isFaceApiLoaded = false;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = this.canvas.getContext("2d", { willReadFrequently: true })!;
    }

    public setImage(img: HTMLImageElement) {
        this.image = img;
        this.layers = [];
        this.canvas.width = img.naturalWidth;
        this.canvas.height = img.naturalHeight;
        this.redraw();
    }

    public setTool(tool: ToolType) {
        this.tool = tool;
    }

    public setIntensity(val: number) {
        this.intensity = val;
        if (this.layers.length > 0) {
            const last = this.layers[this.layers.length - 1];
            if (last) {
                last.intensity = this.intensity;
                this.redraw();
            }
        }
    }

    public updateLastLayerTool(tool: ToolType) {
        this.tool = tool;
        if (this.layers.length > 0) {
            const last = this.layers[this.layers.length - 1];
            if (last) {
                last.type = tool;
                this.redraw();
            }
        }
    }

    public undo(): boolean {
        if (this.layers.length === 0) return false;
        this.layers.pop();
        this.redraw();
        return this.layers.length > 0;
    }

    public getCanvasData(): string {
        return this.canvas.toDataURL("image/webp", 0.9);
    }

    public hasLayers(): boolean {
        return this.layers.length > 0;
    }

    public async detectFaces(onLoading: (text: string) => void): Promise<boolean> {
        if (!this.image) return false;

        try {
            if (typeof faceapi === "undefined") {
                throw new Error("FaceAPI not loaded");
            }

            if (!this.isFaceApiLoaded) {
                onLoading("Descargando modelos...");
                await faceapi.loadTinyFaceDetectorModel(
                    "https://justadudewhohacks.github.io/face-api.js/models"
                );
                this.isFaceApiLoaded = true;
            }

            onLoading("Analizando...");

            const detections = await faceapi.detectAllFaces(
                this.image,
                new faceapi.TinyFaceDetectorOptions({ inputSize: 608, scoreThreshold: 0.4 })
            );

            if (detections.length === 0) {
                return false;
            } else {
                detections.forEach((d: FaceDetection) => {
                    const { x, y, width, height } = d.box;
                    const pad = width * 0.15;
                    this.layers.push({
                        id: Date.now() + Math.random(),
                        type: this.tool,
                        x: x - pad,
                        y: y - pad * 1.5,
                        w: width + pad * 2,
                        h: height + pad * 2,
                        intensity: this.intensity,
                    });
                });
                this.redraw();
                return true;
            }
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    public startDragging(clientX: number, clientY: number) {
        if (!this.image) return;
        this.isDragging = true;
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;

        this.startX = (clientX - rect.left) * scaleX;
        this.startY = (clientY - rect.top) * scaleY;
        this.currentSelection = { x: this.startX, y: this.startY, w: 0, h: 0 };
    }

    public updateDragging(clientX: number, clientY: number) {
        if (!this.isDragging || !this.image) return;
        const rect = this.canvas.getBoundingClientRect();
        const scaleX = this.canvas.width / rect.width;
        const scaleY = this.canvas.height / rect.height;

        const currentX = (clientX - rect.left) * scaleX;
        const currentY = (clientY - rect.top) * scaleY;

        this.currentSelection = {
            x: Math.min(this.startX, currentX),
            y: Math.min(this.startY, currentY),
            w: Math.abs(currentX - this.startX),
            h: Math.abs(currentY - this.startY)
        };
        this.redraw();
    }

    public endDragging(): boolean {
        if (!this.isDragging || !this.currentSelection) return false;
        this.isDragging = false;
        const { w, h } = this.currentSelection;

        if (w > 5 && h > 5) {
            this.layers.push({
                id: Date.now(),
                type: this.tool,
                x: this.currentSelection.x,
                y: this.currentSelection.y,
                w,
                h,
                intensity: this.intensity,
            });
            this.currentSelection = null;
            this.redraw();
            return true;
        }

        this.currentSelection = null;
        this.redraw();
        return false;
    }

    public cancelDragging() {
        this.isDragging = false;
        this.currentSelection = null;
        this.redraw();
    }

    private redraw() {
        if (!this.image) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.filter = "none";
        this.ctx.drawImage(this.image, 0, 0);

        this.layers.forEach((layer) => this.applyLayer(layer));

        if (this.currentSelection) {
            this.ctx.strokeStyle = "rgba(255, 255, 255, 0.8)";
            this.ctx.lineWidth = 2;
            this.ctx.strokeRect(this.currentSelection.x, this.currentSelection.y, this.currentSelection.w, this.currentSelection.h);
        }
    }

    private applyLayer(layer: Layer) {
        if (!this.image) return;
        if (layer.type === "solid") {
            this.ctx.fillStyle = "#000000";
            this.ctx.fillRect(layer.x, layer.y, layer.w, layer.h);
        } else if (layer.type === "blur") {
            this.ctx.save();
            this.ctx.beginPath();
            this.ctx.rect(layer.x, layer.y, layer.w, layer.h);
            this.ctx.clip();
            this.ctx.filter = `blur(${layer.intensity * 2}px)`;
            this.ctx.drawImage(this.image, 0, 0);
            this.ctx.restore();
            this.ctx.filter = "none";
        } else if (layer.type === "pixel") {
            const size = Math.max(2, layer.intensity);
            const w = Math.floor(layer.w);
            const h = Math.floor(layer.h);

            const scaledW = w / size;
            const scaledH = h / size;

            this.ctx.imageSmoothingEnabled = false;
            const tempCanvas = document.createElement("canvas");
            tempCanvas.width = scaledW;
            tempCanvas.height = scaledH;
            const tCtx = tempCanvas.getContext("2d")!;
            tCtx.imageSmoothingEnabled = false;

            tCtx.drawImage(this.image, layer.x, layer.y, w, h, 0, 0, scaledW, scaledH);
            this.ctx.drawImage(tempCanvas, 0, 0, scaledW, scaledH, layer.x, layer.y, w, h);
            this.ctx.imageSmoothingEnabled = true;
        }
    }
}

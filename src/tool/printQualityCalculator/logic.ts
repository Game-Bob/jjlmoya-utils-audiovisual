export interface PrintSize {
    cmW: number;
    cmH: number;
    inW: number;
    inH: number;
}

export interface PaperFormat {
    name: string;
    w: number;
    h: number;
}

export const PAPER_FORMATS: PaperFormat[] = [
    { name: "A6 (Postal)", w: 10.5, h: 14.8 },
    { name: "A5 (Cuartilla)", w: 14.8, h: 21.0 },
    { name: "A4 (Folio)", w: 21.0, h: 29.7 },
    { name: "A3 (Doble Folio)", w: 29.7, h: 42.0 },
    { name: "A2 (Poster Pequeño)", w: 42.0, h: 59.4 },
    { name: "A1 (Poster Grande)", w: 59.4, h: 84.1 },
    { name: "A0 (Plano)", w: 84.1, h: 118.9 },
];

export function calculatePrintSize(width: number, height: number, dpi: number): PrintSize {
    const inW = width / dpi;
    const inH = height / dpi;
    
    return {
        inW,
        inH,
        cmW: inW * 2.54,
        cmH: inH * 2.54
    };
}

export function getQualityLevel(dpi: number): 'excellent' | 'good' | 'fair' | 'poor' {
    if (dpi >= 300) return 'excellent';
    if (dpi >= 150) return 'good';
    if (dpi >= 72) return 'fair';
    return 'poor';
}

export function checkFormatSupport(imgW: number, imgH: number, paper: PaperFormat): { supported: boolean; percentage: number } {
    const imgMin = Math.min(imgW, imgH);
    const imgMax = Math.max(imgW, imgH);
    const paperMin = Math.min(paper.w, paper.h);
    const paperMax = Math.max(paper.w, paper.h);

    const supported = imgMin >= paperMin - 0.1 && imgMax >= paperMax - 0.1;
    const percentage = Math.min(imgMin / paperMin, imgMax / paperMax) * 100;

    return { supported, percentage };
}

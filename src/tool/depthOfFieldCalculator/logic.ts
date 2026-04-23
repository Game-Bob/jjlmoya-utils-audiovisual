
export interface SensorPreset {
    key: string;
    label: string;
    shortLabel: string;
    coc: number;
}

export const SENSOR_PRESETS: SensorPreset[] = [
    { key: 'ff',         label: 'Full Frame (35mm)',   shortLabel: 'FF',    coc: 0.030 },
    { key: 'apsc-canon', label: 'APS-C Canon',          shortLabel: 'APS-C', coc: 0.019 },
    { key: 'apsc',       label: 'APS-C Nikon / Sony',   shortLabel: 'APS-N', coc: 0.020 },
    { key: 'mft',        label: 'Micro Four Thirds',     shortLabel: 'MFT',   coc: 0.015 },
    { key: '1inch',      label: '1" Sensor',             shortLabel: '1"',    coc: 0.011 },
    { key: 'phone',      label: 'Smartphone',            shortLabel: 'Phone', coc: 0.006 },
];

export const QUICK_SENSOR_KEYS = ['ff', 'apsc-canon', 'mft', 'phone'];

export const F_STOPS: number[] = [
    1.0, 1.1, 1.2, 1.4, 1.6, 1.8,
    2.0, 2.2, 2.5, 2.8, 3.2, 3.5,
    4.0, 4.5, 5.0, 5.6, 6.3, 7.1,
    8.0, 9.0, 10, 11, 13, 14, 16, 18, 20, 22,
];

export interface DoFResult {
    hyperfocal: number;
    nearLimit: number;
    farLimit: number;
    totalDoF: number;
    isInfinite: boolean;
    hasError: boolean;
    errorCode: 'BELOW_FOCAL' | null;
}

export function calculateDoF(
    subjectMetres: number,
    focalMm: number,
    aperture: number,
    cocMm: number,
): DoFResult {
    const fM = focalMm / 1000;
    const cM = cocMm / 1000;

    if (subjectMetres <= fM) {
        return { hyperfocal: 0, nearLimit: 0, farLimit: 0, totalDoF: 0, isInfinite: false, hasError: true, errorCode: 'BELOW_FOCAL' };
    }

    const H = (fM * fM) / (aperture * cM) + fM;
    const nearLimit = (subjectMetres * (H - fM)) / (H + subjectMetres - 2 * fM);
    const isInfinite = subjectMetres >= H;
    const farLimit = isInfinite ? Infinity : (subjectMetres * (H - fM)) / (H - subjectMetres);
    const totalDoF = isInfinite ? Infinity : farLimit - nearLimit;

    return { hyperfocal: H, nearLimit, farLimit, totalDoF, isInfinite, hasError: false, errorCode: null };
}

const LOG_FOCAL_MIN = Math.log(8);
const LOG_FOCAL_MAX = Math.log(800);
const LOG_SUBJECT_MIN = Math.log(0.5);
const LOG_SUBJECT_MAX = Math.log(200);

export function sliderToFocal(index: number, steps: number): number {
    const t = index / (steps - 1);
    return Math.round(Math.exp(LOG_FOCAL_MIN + t * (LOG_FOCAL_MAX - LOG_FOCAL_MIN)));
}

export function focalToSlider(focal: number, steps: number): number {
    const t = (Math.log(focal) - LOG_FOCAL_MIN) / (LOG_FOCAL_MAX - LOG_FOCAL_MIN);
    return Math.round(t * (steps - 1));
}

export function sliderToSubject(index: number, steps: number): number {
    const t = index / (steps - 1);
    return Math.exp(LOG_SUBJECT_MIN + t * (LOG_SUBJECT_MAX - LOG_SUBJECT_MIN));
}

export function subjectToSlider(subject: number, steps: number): number {
    const t = (Math.log(subject) - LOG_SUBJECT_MIN) / (LOG_SUBJECT_MAX - LOG_SUBJECT_MIN);
    return Math.round(t * (steps - 1));
}

export function formatDistance(metres: number, useFeet: boolean): string {
    if (!isFinite(metres)) return '∞';
    const value = useFeet ? metres * 3.28084 : metres;
    const unit = useFeet ? 'ft' : 'm';
    if (value >= 1000) return `${(value / 1000).toFixed(1)} km`;
    if (value < 1) return `${(value * 100).toFixed(0)} cm`;
    return value >= 10 ? `${value.toFixed(1)} ${unit}` : `${value.toFixed(2)} ${unit}`;
}

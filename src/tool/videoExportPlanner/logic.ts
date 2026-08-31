export type ResolutionId = '480' | '720' | '1080' | '1440' | '2160';
export type CodecId = 'h264' | 'h265' | 'av1';
export type PresetId = 'youtube' | 'social' | 'master';

export interface ExportInputs {
  resolution: ResolutionId;
  frameRate: number;
  codec: CodecId;
  durationMinutes: number;
  videoBitrateMbps: number;
  audioBitrateKbps: number;
  overheadPercent: number;
}

export interface ResolutionSpec { id: ResolutionId; width: number; height: number; }
export interface CodecPlan { codec: CodecId; suggestedVideoBitrateMbps: number; estimatedFileSizeBytes: number; }
export interface ExportResult {
  durationSeconds: number;
  totalDataRateMbps: number;
  videoBytes: number;
  audioBytes: number;
  overheadBytes: number;
  fileSizeBytes: number;
  referenceVideoBitrateMbps: number;
  codecPlans: CodecPlan[];
}

const RESOLUTIONS: ResolutionSpec[] = [
  { id: '480', width: 854, height: 480 },
  { id: '720', width: 1280, height: 720 },
  { id: '1080', width: 1920, height: 1080 },
  { id: '1440', width: 2560, height: 1440 },
  { id: '2160', width: 3840, height: 2160 },
];

const H264_REFERENCE_MBPS: Record<ResolutionId, number> = { '480': 2.5, '720': 5, '1080': 8, '1440': 16, '2160': 40 };
const CODEC_FACTORS: Record<CodecId, number> = { h264: 1, h265: 0.7, av1: 0.6 };

export const DEFAULT_INPUTS: ExportInputs = {
  resolution: '1080', frameRate: 30, codec: 'h264', durationMinutes: 10,
  videoBitrateMbps: 8, audioBitrateKbps: 384, overheadPercent: 4,
};

export const RESOLUTION_IDS = RESOLUTIONS.map(({ id }) => id);
export const CODEC_IDS: CodecId[] = ['h264', 'h265', 'av1'];

function finiteOr(value: number, fallback: number): number { return Number.isFinite(value) ? value : fallback; }
function clamp(value: number, minimum: number, maximum: number): number { return Math.min(Math.max(value, minimum), maximum); }

function safeInputs(inputs: ExportInputs): ExportInputs {
  return {
    resolution: RESOLUTION_IDS.includes(inputs.resolution) ? inputs.resolution : DEFAULT_INPUTS.resolution,
    frameRate: clamp(finiteOr(inputs.frameRate, DEFAULT_INPUTS.frameRate), 1, 240),
    codec: CODEC_IDS.includes(inputs.codec) ? inputs.codec : DEFAULT_INPUTS.codec,
    durationMinutes: clamp(finiteOr(inputs.durationMinutes, 0), 0, 1440),
    videoBitrateMbps: clamp(finiteOr(inputs.videoBitrateMbps, 0), 0, 1000),
    audioBitrateKbps: clamp(finiteOr(inputs.audioBitrateKbps, 0), 0, 2000),
    overheadPercent: clamp(finiteOr(inputs.overheadPercent, 0), 0, 50),
  };
}

export function getResolutionSpec(id: ResolutionId): ResolutionSpec {
  return RESOLUTIONS.find((resolution) => resolution.id === id) ?? (RESOLUTIONS[2] as ResolutionSpec);
}

export function getReferenceVideoBitrate(inputs: Pick<ExportInputs, 'resolution' | 'frameRate'>): number {
  const base = H264_REFERENCE_MBPS[inputs.resolution] ?? H264_REFERENCE_MBPS['1080'];
  return inputs.frameRate >= 48 ? base * 1.5 : base;
}

export function getPresetInputs(preset: PresetId): ExportInputs {
  if (preset === 'social') return { ...DEFAULT_INPUTS, frameRate: 60, codec: 'h265', videoBitrateMbps: 6 };
  if (preset === 'master') return { ...DEFAULT_INPUTS, resolution: '2160', videoBitrateMbps: 40, audioBitrateKbps: 512, overheadPercent: 6 };
  return { ...DEFAULT_INPUTS };
}

function estimateBytes(durationSeconds: number, videoBitrateMbps: number, audioBitrateKbps: number, overheadPercent: number): number {
  const streamBits = durationSeconds * ((videoBitrateMbps * 1_000_000) + (audioBitrateKbps * 1_000));
  return (streamBits / 8) * (1 + (overheadPercent / 100));
}

export function calculateExport(inputs: ExportInputs): ExportResult {
  const safe = safeInputs(inputs);
  const durationSeconds = safe.durationMinutes * 60;
  const streamBytes = estimateBytes(durationSeconds, safe.videoBitrateMbps, safe.audioBitrateKbps, 0);
  const videoBytes = durationSeconds * safe.videoBitrateMbps * 1_000_000 / 8;
  const audioBytes = durationSeconds * safe.audioBitrateKbps * 1_000 / 8;
  const overheadBytes = streamBytes * safe.overheadPercent / 100;
  const reference = getReferenceVideoBitrate(safe);
  const codecPlans = CODEC_IDS.map((codec) => {
    const suggestedVideoBitrateMbps = reference * CODEC_FACTORS[codec];
    return { codec, suggestedVideoBitrateMbps, estimatedFileSizeBytes: estimateBytes(durationSeconds, suggestedVideoBitrateMbps, safe.audioBitrateKbps, safe.overheadPercent) };
  });
  return {
    durationSeconds, totalDataRateMbps: safe.videoBitrateMbps + safe.audioBitrateKbps / 1000,
    videoBytes, audioBytes, overheadBytes, fileSizeBytes: videoBytes + audioBytes + overheadBytes,
    referenceVideoBitrateMbps: reference, codecPlans,
  };
}

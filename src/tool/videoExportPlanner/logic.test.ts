import { describe, expect, it } from 'vitest';
import { calculateExport, DEFAULT_INPUTS, getPresetInputs, getReferenceVideoBitrate } from './logic';

describe('video export planner logic', () => {
  it('estimates stream size with overhead', () => {
    const result = calculateExport(DEFAULT_INPUTS);
    expect(result.durationSeconds).toBe(600);
    expect(result.totalDataRateMbps).toBeCloseTo(8.384, 3);
    expect(result.videoBytes).toBe(600_000_000);
    expect(result.audioBytes).toBe(28_800_000);
    expect(result.fileSizeBytes).toBeCloseTo(653_952_000, 0);
  });

  it('raises the reference rate for high frame rate material', () => {
    expect(getReferenceVideoBitrate({ resolution: '1080', frameRate: 30 })).toBe(8);
    expect(getReferenceVideoBitrate({ resolution: '1080', frameRate: 60 })).toBe(12);
  });

  it('compares codec starting points', () => {
    const result = calculateExport({ ...DEFAULT_INPUTS, codec: 'av1' });
    expect(result.codecPlans.map((plan) => plan.codec)).toEqual(['h264', 'h265', 'av1']);
    expect(result.codecPlans[1]?.suggestedVideoBitrateMbps).toBeCloseTo(5.6, 5);
    expect(result.codecPlans[2]?.estimatedFileSizeBytes).toBeLessThan(result.codecPlans[0]?.estimatedFileSizeBytes ?? Infinity);
  });

  it('returns useful presets', () => {
    expect(getPresetInputs('social')).toMatchObject({ resolution: '1080', frameRate: 60, codec: 'h265' });
    expect(getPresetInputs('master')).toMatchObject({ resolution: '2160', videoBitrateMbps: 40 });
  });

  it('clamps invalid numeric values', () => {
    const result = calculateExport({ ...DEFAULT_INPUTS, durationMinutes: -4, videoBitrateMbps: Number.NaN, overheadPercent: 99 });
    expect(result.durationSeconds).toBe(0);
    expect(result.fileSizeBytes).toBe(0);
    expect(result.codecPlans.every((plan) => plan.estimatedFileSizeBytes === 0)).toBe(true);
  });
});

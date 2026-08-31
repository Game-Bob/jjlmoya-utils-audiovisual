export type ReverbTarget = 'speech' | 'podcast' | 'vocals' | 'acoustic' | 'orchestral' | 'ambient';

export interface ReverbInputs {
  volumeM3: number;
  absorptionSabins: number;
  bpm: number;
  target: ReverbTarget;
}

export interface ReverbTargetProfile {
  min: number;
  max: number;
}

export interface ReverbResult {
  rt60: number;
  targetMin: number;
  targetMax: number;
  targetMid: number;
  preDelayMs: number;
  targetAbsorptionSabins: number;
  absorptionDeltaSabins: number;
  status: 'too-dry' | 'on-target' | 'too-wet';
}

export const TARGET_PROFILES: Record<ReverbTarget, ReverbTargetProfile> = {
  speech: { min: 0.4, max: 0.8 },
  podcast: { min: 0.35, max: 0.75 },
  vocals: { min: 0.8, max: 1.4 },
  acoustic: { min: 1, max: 1.6 },
  orchestral: { min: 1.6, max: 2.2 },
  ambient: { min: 2, max: 3 },
};

export function calculateReverb(inputs: ReverbInputs): ReverbResult {
  const { volumeM3, absorptionSabins, bpm, target } = inputs;
  const profile = TARGET_PROFILES[target];
  const rt60 = 0.1611 * volumeM3 / absorptionSabins;
  const targetMid = (profile.min + profile.max) / 2;
  const targetAbsorptionSabins = 0.1611 * volumeM3 / targetMid;
  const preDelayMs = Math.min(80, Math.max(15, 60000 / bpm / 8));

  let status: ReverbResult['status'] = 'on-target';
  if (rt60 < profile.min) status = 'too-dry';
  if (rt60 > profile.max) status = 'too-wet';

  return {
    rt60,
    targetMin: profile.min,
    targetMax: profile.max,
    targetMid,
    preDelayMs,
    targetAbsorptionSabins,
    absorptionDeltaSabins: targetAbsorptionSabins - absorptionSabins,
    status,
  };
}

export function formatNumber(value: number, maximumFractionDigits = 2): string {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits }).format(value);
}

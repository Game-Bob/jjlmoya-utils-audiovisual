export interface ExposureSetting {
  iso: number;
  aperture: number;
  shutter: number;
}

export type StepMode = 'full' | 'half' | 'third';
export type LockMode = 'iso' | 'aperture' | 'shutter';

export const ISO_VALUES_FULL = [50, 100, 200, 400, 800, 1600, 3200, 6400, 12800, 25600, 51200];
export const ISO_VALUES_THIRD = [
  50, 64, 80, 100, 125, 160, 200, 250, 320, 400, 500, 640, 800, 1000, 1250, 1600, 2000, 2500, 3200, 4000, 5000, 6400, 8000, 10000, 12800, 16000, 20000, 25600, 32000, 40000, 51200
];

export const APERTURE_VALUES_FULL = [1.0, 1.4, 2.0, 2.8, 4.0, 5.6, 8.0, 11, 16, 22, 32];
export const APERTURE_VALUES_THIRD = [
  1.0, 1.1, 1.2, 1.4, 1.6, 1.8, 2.0, 2.2, 2.5, 2.8, 3.2, 3.5, 4.0, 4.5, 5.0, 5.6, 6.3, 7.1, 8.0, 9.0, 10, 11, 13, 14, 16, 18, 20, 22, 25, 29, 32
];

export const SHUTTER_VALUES_FULL = [
  1 / 8000, 1 / 4000, 1 / 2000, 1 / 1000, 1 / 500, 1 / 250, 1 / 125, 1 / 60, 1 / 30, 1 / 15, 1 / 8, 1 / 4, 1 / 2, 1, 2, 4, 8, 15, 30
];
export const SHUTTER_VALUES_THIRD = [
  1 / 8000, 1 / 6400, 1 / 5000, 1 / 4000, 1 / 3200, 1 / 2500, 1 / 2000, 1 / 1600, 1 / 1250, 1 / 1000, 1 / 800, 1 / 640, 1 / 500, 1 / 400, 1 / 320, 1 / 250, 1 / 200, 1 / 160, 1 / 125, 1 / 100, 1 / 80, 1 / 60, 1 / 50, 1 / 40, 1 / 30, 1 / 25, 1 / 20, 1 / 15, 1 / 13, 1 / 10, 1 / 8, 1 / 6, 1 / 5, 1 / 4, 0.3, 0.4, 1 / 2, 0.6, 0.8, 1, 1.3, 1.6, 2, 2.5, 3.2, 4, 5, 6, 8, 10, 13, 15, 20, 25, 30
];

export function calculateEV(iso: number, aperture: number, shutter: number): number {
  if (iso <= 0 || aperture <= 0 || shutter <= 0) {
    return 0;
  }
  let nominalShutter = shutter;
  if (shutter === 1 / 125) {
    nominalShutter = 1 / 128;
  } else if (shutter === 1 / 1000) {
    nominalShutter = 1 / 1024;
  } else if (shutter === 1 / 500) {
    nominalShutter = 1 / 512;
  } else if (shutter === 1 / 250) {
    nominalShutter = 1 / 256;
  }

  let nominalAperture = aperture;
  if (aperture === 2.8) {
    nominalAperture = Math.sqrt(8);
  } else if (aperture === 5.6) {
    nominalAperture = Math.sqrt(32);
  } else if (aperture === 11) {
    nominalAperture = Math.sqrt(128);
  } else if (aperture === 22) {
    nominalAperture = Math.sqrt(512);
  }

  const evAtIso = Math.log2((nominalAperture * nominalAperture) / nominalShutter);
  const isoOffset = Math.log2(iso / 100);
  return Math.round(evAtIso - isoOffset);
}

export function findClosestValue(val: number, list: number[]): number {
  let closest = list[0];
  let minDiff = Math.abs(val - closest);
  for (let i = 1; i < list.length; i++) {
    const diff = Math.abs(val - list[i]);
    if (diff < minDiff) {
      minDiff = diff;
      closest = list[i];
    }
  }
  return closest;
}

export function formatShutter(shutter: number): string {
  if (shutter < 1) {
    const denom = Math.round(1 / shutter);
    return `1/${denom}s`;
  }
  return `${shutter}s`;
}

export function calculateEquivalentAperture(targetEV: number, iso: number, shutter: number): number {
  const isoOffset = Math.log2(iso / 100);
  const evAtIso = targetEV + isoOffset;
  const apertureSq = Math.pow(2, evAtIso) * shutter;
  const rawAperture = Math.sqrt(Math.max(0.1, apertureSq));
  return findClosestValue(rawAperture, APERTURE_VALUES_THIRD);
}

export function calculateEquivalentShutter(targetEV: number, iso: number, aperture: number): number {
  const isoOffset = Math.log2(iso / 100);
  const evAtIso = targetEV + isoOffset;
  const rawShutter = (aperture * aperture) / Math.pow(2, evAtIso);
  return findClosestValue(rawShutter, SHUTTER_VALUES_THIRD);
}

export function calculateEquivalentISO(targetEV: number, aperture: number, shutter: number): number {
  const evAtIso = Math.log2((aperture * aperture) / shutter);
  const rawISO = 100 * Math.pow(2, evAtIso - targetEV);
  return findClosestValue(rawISO, ISO_VALUES_THIRD);
}

export function getDepthOfFieldEffect(aperture: number): string {
  if (aperture <= 2.0) {
    return 'Shallow DOF / Soft Background Bokeh';
  }
  if (aperture <= 5.6) {
    return 'Moderate DOF / Isolated Subject';
  }
  if (aperture <= 11) {
    return 'Deep DOF / Sharp Landscape & Group';
  }
  return 'Very Deep DOF / Potential Diffraction';
}

export function getMotionEffect(shutter: number): string {
  if (shutter <= 1 / 1000) {
    return 'Freeze Fast Action (Sports / Birds)';
  }
  if (shutter <= 1 / 250) {
    return 'Freeze Crisp Everyday Motion';
  }
  if (shutter <= 1 / 30) {
    return 'Slight Motion Blur (Panning / Handheld Limit)';
  }
  return 'Heavy Motion Blur (Tripod Required / Water Motion)';
}

export function getNoiseEffect(iso: number): string {
  if (iso <= 200) {
    return 'Pristine Image Quality / Maximum Dynamic Range';
  }
  if (iso <= 800) {
    return 'Clean Detail / Negligible Noise';
  }
  if (iso <= 3200) {
    return 'Moderate Grain / Fine Low-Light Performance';
  }
  return 'Prominent Noise & Grain / Reduced Contrast';
}

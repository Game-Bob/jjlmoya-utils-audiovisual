export type DevelopmentMode = 'normal' | 'minus' | 'plus';

export interface ZoneData {
  index: number;
  roman: string;
  name: string;
  description: string;
  luminancePercent: number;
}

export interface ZoneState {
  measuredZone: number;
  targetZone: number;
  development: DevelopmentMode;
}

export interface ZoneResult {
  measured: ZoneData;
  target: ZoneData;
  exposureShiftStops: number;
  tonalDistanceStops: number;
  luminancePercent: number;
  stopsFromMiddle: number;
  recommendedDevelopment: DevelopmentMode;
  exposureDirection: 'increase' | 'decrease' | 'hold';
  developmentFit: 'protect-highlights' | 'open-shadows' | 'balanced';
}

export const ZONES: readonly ZoneData[] = [
  { index: 0, roman: '0', name: 'Pure black', description: 'Maximum black with no visible texture.', luminancePercent: 0.6 },
  { index: 1, roman: 'I', name: 'Near black', description: 'First separation from black, with almost no texture.', luminancePercent: 1.1 },
  { index: 2, roman: 'II', name: 'Deep shadow', description: 'First hint of texture in the darkest important shadow.', luminancePercent: 2.3 },
  { index: 3, roman: 'III', name: 'Textured shadow', description: 'Useful shadow texture and a common placement anchor.', luminancePercent: 4.5 },
  { index: 4, roman: 'IV', name: 'Dark midtone', description: 'Open shadow and dark foliage with clear form.', luminancePercent: 9 },
  { index: 5, roman: 'V', name: 'Middle gray', description: "The meter's neutral reference point.", luminancePercent: 18 },
  { index: 6, roman: 'VI', name: 'Light midtone', description: 'Light skin, weathered stone, and bright foliage.', luminancePercent: 36 },
  { index: 7, roman: 'VII', name: 'Textured highlight', description: 'Bright texture that should remain printable or readable.', luminancePercent: 72 },
  { index: 8, roman: 'VIII', name: 'Luminous highlight', description: 'Very bright tone with little remaining texture.', luminancePercent: 100 },
  { index: 9, roman: 'IX', name: 'Near white', description: 'Almost white, with only a trace of separation.', luminancePercent: 100 },
];

const clampZone = (value: number): number => Math.min(9, Math.max(0, Math.round(value)));

const getDevelopmentRecommendation = (zone: number): DevelopmentMode => {
  if (zone >= 7) return 'minus';
  if (zone <= 3) return 'plus';
  return 'normal';
};

const getDevelopmentFit = (mode: DevelopmentMode, zone: number): ZoneResult['developmentFit'] => {
  if (mode === 'minus' || zone >= 7) return 'protect-highlights';
  if (mode === 'plus' || zone <= 3) return 'open-shadows';
  return 'balanced';
};

const getExposureDirection = (stops: number): ZoneResult['exposureDirection'] => {
  if (stops > 0) return 'increase';
  if (stops < 0) return 'decrease';
  return 'hold';
};

export const getZone = (index: number): ZoneData => ZONES[clampZone(index)] ?? (ZONES[5] as ZoneData);

export const formatStops = (stops: number): string => {
  if (stops === 0) return '0 stops';
  const sign = stops > 0 ? '+' : '';
  return `${sign}${stops} ${Math.abs(stops) === 1 ? 'stop' : 'stops'}`;
};

export const calculateZoneResult = (state: ZoneState): ZoneResult => {
  const measured = getZone(state.measuredZone);
  const target = getZone(state.targetZone);
  const exposureShiftStops = target.index - 5;
  const tonalDistanceStops = target.index - measured.index;
  const recommendedDevelopment = getDevelopmentRecommendation(target.index);
  const developmentFit = getDevelopmentFit(state.development, target.index);

  return {
    measured,
    target,
    exposureShiftStops,
    tonalDistanceStops,
    luminancePercent: target.luminancePercent,
    stopsFromMiddle: target.index - 5,
    recommendedDevelopment,
    exposureDirection: getExposureDirection(exposureShiftStops),
    developmentFit,
  };
};

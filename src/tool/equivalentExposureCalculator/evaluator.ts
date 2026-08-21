export interface EvaluatorResult {
  evLabel: string;
  lightingDescription: string;
  badgeClass: string;
}

export function evaluateExposureValue(ev: number): EvaluatorResult {
  if (ev <= 0) {
    return {
      evLabel: `EV ${ev}`,
      lightingDescription: 'Starlight / Extreme Dark Night',
      badgeClass: 'ev-dark',
    };
  }
  if (ev <= 5) {
    return {
      evLabel: `EV ${ev}`,
      lightingDescription: 'Dim Indoor Light / Night Street',
      badgeClass: 'ev-low',
    };
  }
  if (ev <= 10) {
    return {
      evLabel: `EV ${ev}`,
      lightingDescription: 'Deep Shade / Well-lit Indoors',
      badgeClass: 'ev-medium',
    };
  }
  if (ev <= 14) {
    return {
      evLabel: `EV ${ev}`,
      lightingDescription: 'Overcast Day / Open Shade Outdoors',
      badgeClass: 'ev-high',
    };
  }
  return {
    evLabel: `EV ${ev}`,
    lightingDescription: 'Bright Sunny Day / Direct Daylight',
    badgeClass: 'ev-sunny',
  };
}

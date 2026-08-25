export interface AdamsZoneSystemUI {
  faqTitle: string;
  bibliographyTitle: string;
  orientationTitle: string;
  orientationText: string;
  measuredToneLabel: string;
  targetPlacementLabel: string;
  developmentLabel: string;
  normalDevelopment: string;
  minusDevelopment: string;
  plusDevelopment: string;
  presetsLabel: string;
  presetShadow: string;
  presetSkin: string;
  presetSnow: string;
  presetNight: string;
  zoneStripLabel: string;
  meterBaselineLabel: string;
  selectedToneLabel: string;
  placementResultLabel: string;
  exposureShiftLabel: string;
  tonalDistanceLabel: string;
  luminanceLabel: string;
  stopsFromMiddleLabel: string;
  developmentAdviceLabel: string;
  techniqueLabel: string;
  resetLabel: string;
  meterAssumption: string;
  zonePrefix: string;
  zoneNames: string;
  zoneDescriptions: string;
  increaseExposure: string;
  decreaseExposure: string;
  holdExposure: string;
  protectHighlights: string;
  openShadows: string;
  balancedPlacement: string;
  normalAdvice: string;
  minusAdvice: string;
  plusAdvice: string;
  [key: string]: string;
}

import type { ToolLocaleContent } from '../../types';

export type AdamsZoneSystemLocaleContent = ToolLocaleContent<AdamsZoneSystemUI>;

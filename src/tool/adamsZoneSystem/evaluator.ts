import type { AdamsZoneSystemUI } from './ui';
import type { ZoneResult } from './logic';

export interface ZoneEvaluation {
  badge: string;
  summary: string;
  technique: string;
}

const getBadge = (result: ZoneResult, ui: AdamsZoneSystemUI): string => {
  if (result.developmentFit === 'protect-highlights') return ui.protectHighlights;
  if (result.developmentFit === 'open-shadows') return ui.openShadows;
  return ui.balancedPlacement;
};

const getSummary = (result: ZoneResult, ui: AdamsZoneSystemUI): string => {
  if (result.exposureDirection === 'increase') return ui.increaseExposure;
  if (result.exposureDirection === 'decrease') return ui.decreaseExposure;
  return ui.holdExposure;
};

const getTechnique = (result: ZoneResult, ui: AdamsZoneSystemUI): string => {
  if (result.recommendedDevelopment === 'minus') return ui.minusAdvice;
  if (result.recommendedDevelopment === 'plus') return ui.plusAdvice;
  return ui.normalAdvice;
};

export const evaluateZoneResult = (result: ZoneResult, ui: AdamsZoneSystemUI): ZoneEvaluation => {
  return { badge: getBadge(result, ui), summary: getSummary(result, ui), technique: getTechnique(result, ui) };
};

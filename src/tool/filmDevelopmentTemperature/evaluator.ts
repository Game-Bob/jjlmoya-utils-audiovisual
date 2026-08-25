import type { DevelopmentResult } from './logic';
import type { FilmDevelopmentTemperatureUI } from './ui';

export const getStatusLabel = (result: DevelopmentResult, ui: FilmDevelopmentTemperatureUI): string => {
  if (result.status === 'cool') return ui.statusCool;
  if (result.status === 'warm') return ui.statusWarm;
  return ui.statusSteady;
};

export const getStatusTone = (result: DevelopmentResult): string => `status-${result.status}`;

export const getResultWarning = (result: DevelopmentResult, ui: FilmDevelopmentTemperatureUI): string => {
  if (result.isShort) return ui.warningShortTime;
  if (result.temperatureC <= 15 || result.temperatureC >= 25) return ui.warningOutOfRange;
  return ui.guideNotice;
};

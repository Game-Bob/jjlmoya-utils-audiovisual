import type { ToolDefinition, AudiovisualToolEntry } from '../../types';
import { audioDelayDistanceCalculator } from './entry';
export * from './entry';

export const AUDIO_DELAY_DISTANCE_CALCULATOR_TOOL: ToolDefinition = {
  entry: audioDelayDistanceCalculator as unknown as AudiovisualToolEntry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

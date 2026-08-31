import type { ToolDefinition, AudiovisualToolEntry } from '../../types';
import { reverbDecayTimeCalculator } from './entry';

export * from './entry';

export const REVERB_DECAY_TIME_CALCULATOR_TOOL: ToolDefinition = {
  entry: reverbDecayTimeCalculator as unknown as AudiovisualToolEntry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

import type { ToolDefinition, AudiovisualToolEntry } from '../../types';
import { equivalentExposureCalculator } from './entry';
export * from './entry';

export const EQUIVALENT_EXPOSURE_CALCULATOR_TOOL: ToolDefinition = {
  entry: equivalentExposureCalculator as unknown as AudiovisualToolEntry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

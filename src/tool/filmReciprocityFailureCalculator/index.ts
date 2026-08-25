import type { AudiovisualToolEntry, ToolDefinition } from '../../types';
import { filmReciprocityFailureCalculator } from './entry';

export * from './entry';

export const FILM_RECIPROCITY_FAILURE_CALCULATOR_TOOL: ToolDefinition = {
  entry: filmReciprocityFailureCalculator as unknown as AudiovisualToolEntry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

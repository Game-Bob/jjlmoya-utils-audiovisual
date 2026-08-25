import type { AudiovisualToolEntry, ToolDefinition } from '../../types';
import { filmDevelopmentTemperature } from './entry';

export * from './entry';

export const FILM_DEVELOPMENT_TEMPERATURE_TOOL: ToolDefinition = {
  entry: filmDevelopmentTemperature as unknown as AudiovisualToolEntry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};

import type { AudiovisualToolEntry, ToolDefinition } from '../../types';
import { adamsZoneSystem } from './entry';

export * from './entry';

export const ADAMS_ZONE_SYSTEM_TOOL: ToolDefinition = {
  entry: adamsZoneSystem as unknown as AudiovisualToolEntry,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};


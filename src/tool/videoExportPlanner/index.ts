import type { AudiovisualToolEntry, ToolDefinition } from '../../types';
import { videoExportPlanner } from './entry';

export * from './entry';

export const VIDEO_EXPORT_PLANNER_TOOL: ToolDefinition = {
  entry: videoExportPlanner as unknown as AudiovisualToolEntry,
  Component: () => import('./component.astro'), SEOComponent: () => import('./seo.astro'), BibliographyComponent: () => import('./bibliography.astro'),
};

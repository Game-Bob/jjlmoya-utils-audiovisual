import type { AudiovisualToolEntry, ToolDefinition } from '../../types';
import { videoMerger } from './entry';

export * from './entry';

export const VIDEO_MERGER_TOOL: ToolDefinition = {
    entry: videoMerger as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

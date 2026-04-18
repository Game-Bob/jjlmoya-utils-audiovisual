import { tvDistance } from './entry';
export * from './entry';
export const TV_DISTANCE_TOOL: ToolDefinition = {
    entry: tvDistance as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

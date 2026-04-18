import { chromaticLens } from './entry';
export * from './entry';
export const CHROMATIC_LENS_TOOL: ToolDefinition = {
    entry: chromaticLens as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

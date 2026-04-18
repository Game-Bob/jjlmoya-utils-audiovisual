import { collageMaker } from './entry';
export * from './entry';
export const COLLAGE_MAKER_TOOL: ToolDefinition = {
    entry: collageMaker as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

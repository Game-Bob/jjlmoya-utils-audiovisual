export * from './entry';
export const SUBTITLE_SYNC_TOOL: ToolDefinition = {
    entry: subtitleSync as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

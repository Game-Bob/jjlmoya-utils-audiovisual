export * from './entry';
export const EXIF_CLEANER_TOOL: ToolDefinition = {
    entry: exifCleaner as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

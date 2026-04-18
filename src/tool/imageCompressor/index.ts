export * from './entry';
export const IMAGE_COMPRESSOR_TOOL: ToolDefinition = {
    entry: imageCompressor as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

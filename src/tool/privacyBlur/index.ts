export * from './entry';
export const PRIVACY_BLUR_TOOL: ToolDefinition = {
    entry: privacyBlur as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

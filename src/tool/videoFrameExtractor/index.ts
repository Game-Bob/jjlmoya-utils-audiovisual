import { videoFrameExtractor } from './entry';
export * from './entry';
export const VIDEO_FRAME_EXTRACTOR_TOOL: ToolDefinition = {
    entry: videoFrameExtractor as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

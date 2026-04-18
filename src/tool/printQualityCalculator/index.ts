import { printQualityCalculator } from './entry';
export * from './entry';
export const PRINT_QUALITY_CALCULATOR_TOOL: ToolDefinition = {
    entry: printQualityCalculator as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

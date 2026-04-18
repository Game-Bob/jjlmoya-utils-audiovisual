import { timelapseCalculator } from './entry';
export * from './entry';
export const TIMELAPSE_CALCULATOR_TOOL: ToolDefinition = {
    entry: timelapseCalculator as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

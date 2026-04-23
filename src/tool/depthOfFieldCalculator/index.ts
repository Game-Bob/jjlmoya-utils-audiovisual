import type { ToolDefinition, AudiovisualToolEntry } from '../../types';
import { depthOfFieldCalculator } from './entry';
export * from './entry';

export const DEPTH_OF_FIELD_CALCULATOR_TOOL: ToolDefinition = {
    entry: depthOfFieldCalculator as unknown as AudiovisualToolEntry,
    Component: () => import('./component.astro'),
    SEOComponent: () => import('./seo.astro'),
    BibliographyComponent: () => import('./bibliography.astro'),
};

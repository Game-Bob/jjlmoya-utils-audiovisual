import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ChromaticLens from './component.astro';
import ChromaticLensSEO from './seo.astro';
import ChromaticLensBibliography from './bibliography.astro';

export interface ChromaticLensUI {
    dropTitle: string;
    dropSubtitle: string;
    processingLabel: string;
    paletteTitle: string;
    copyLabel: string;
    copiedLabel: string;
    colorCountLabel: string;
    [key: string]: string;
}

export type ChromaticLensLocaleContent = ToolLocaleContent<ChromaticLensUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const chromaticLens: AudiovisualToolEntry<ChromaticLensUI> = {
    id: 'lente-cromatica',
    icons: {
        bg: 'mdi:palette-swatch',
        fg: 'mdi:eye-outline',
    },
    i18n: {
        es: async () => es as unknown as ChromaticLensLocaleContent,
        en: async () => en as unknown as ChromaticLensLocaleContent,
        fr: async () => fr as unknown as ChromaticLensLocaleContent,
    },
};

export { ChromaticLens, ChromaticLensSEO, ChromaticLensBibliography };

export const CHROMATIC_LENS_TOOL: ToolDefinition = {
    entry: chromaticLens as unknown as AudiovisualToolEntry,
    Component: ChromaticLens,
    SEOComponent: ChromaticLensSEO,
    BibliographyComponent: ChromaticLensBibliography,
};

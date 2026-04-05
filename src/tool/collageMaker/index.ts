import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CollageMaker from './component.astro';
import CollageMakerSEO from './seo.astro';
import CollageMakerBibliography from './bibliography.astro';

export interface CollageMakerUI {
    dropTitle: string;
    dropSub: string;
    dropLink: string;
    imgsLoaded: string;
    layoutLabel: string;
    settingsLabel: string;
    borderLabel: string;
    borderColorLabel: string;
    bgColorLabel: string;
    downloadBtn: string;
    previewTitle: string;
    needsImgs: string;
    errorMin: string;
    errorMax: string;
    errorLoad: string;
    [key: string]: string;
}

export type CollageMakerLocaleContent = ToolLocaleContent<CollageMakerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const collageMaker: AudiovisualToolEntry<CollageMakerUI> = {
    id: 'creador-collage-fotos',
    icons: {
        bg: 'mdi:collage',
        fg: 'mdi:palette-outline',
    },
    i18n: {
        es: async () => es as unknown as CollageMakerLocaleContent,
        en: async () => en as unknown as CollageMakerLocaleContent,
        fr: async () => fr as unknown as CollageMakerLocaleContent,
    },
};

export { CollageMaker, CollageMakerSEO, CollageMakerBibliography };

export const COLLAGE_MAKER_TOOL: ToolDefinition = {
    entry: collageMaker as unknown as AudiovisualToolEntry,
    Component: CollageMaker,
    SEOComponent: CollageMakerSEO,
    BibliographyComponent: CollageMakerBibliography,
};

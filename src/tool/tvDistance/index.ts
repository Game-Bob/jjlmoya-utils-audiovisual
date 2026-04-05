import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TvDistance from './component.astro';
import TvDistanceSEO from './seo.astro';
import TvDistanceBibliography from './bibliography.astro';

export interface TvDistanceUI {
    specTitle: string;
    diagonalLabel: string;
    resolutionLabel: string;
    thxRecommendation: string;
    thxDescription: string;
    simulationBadge: string;
    tvWidthLabel: string;
    userLocationLabel: string;
    minLimitLabel: string;
    optimalLimitLabel: string;
    maxLimitLabel: string;
    unitMeters: string;
    unitCm: string;
    [key: string]: string;
}

export type TvDistanceLocaleContent = ToolLocaleContent<TvDistanceUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const tvDistance: AudiovisualToolEntry<TvDistanceUI> = {
    id: 'distancia-tv',
    icons: {
        bg: 'mdi:television',
        fg: 'mdi:ruler',
    },
    i18n: {
        es: async () => es as unknown as TvDistanceLocaleContent,
        en: async () => en as unknown as TvDistanceLocaleContent,
        fr: async () => fr as unknown as TvDistanceLocaleContent,
    },
};

export { TvDistance, TvDistanceSEO, TvDistanceBibliography };

export const TV_DISTANCE_TOOL: ToolDefinition = {
    entry: tvDistance as unknown as AudiovisualToolEntry,
    Component: TvDistance,
    SEOComponent: TvDistanceSEO,
    BibliographyComponent: TvDistanceBibliography,
};

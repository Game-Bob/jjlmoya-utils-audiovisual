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

export const tvDistance: AudiovisualToolEntry<TvDistanceUI> = {
    id: 'distancia-tv',
    icons: {
        bg: 'mdi:television',
        fg: 'mdi:ruler',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as TvDistanceLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as TvDistanceLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as TvDistanceLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as TvDistanceLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as TvDistanceLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as TvDistanceLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as TvDistanceLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as TvDistanceLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as TvDistanceLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as TvDistanceLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as TvDistanceLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as TvDistanceLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as TvDistanceLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as TvDistanceLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as TvDistanceLocaleContent,
    },
};

export { TvDistance, TvDistanceSEO, TvDistanceBibliography };

export const TV_DISTANCE_TOOL: ToolDefinition = {
    entry: tvDistance as unknown as AudiovisualToolEntry,
    Component: TvDistance,
    SEOComponent: TvDistanceSEO,
    BibliographyComponent: TvDistanceBibliography,
};

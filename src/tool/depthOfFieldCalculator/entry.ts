import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface DepthOfFieldUI {
    title: string;
    paramsTitle: string;
    sensorLabel: string;
    moreLabel: string;
    apertureLabel: string;
    focalLabel: string;
    distanceLabel: string;
    metersLabel: string;
    feetLabel: string;
    resultsTitle: string;
    totalDofLabel: string;
    infiniteLabel: string;
    nearLimitLabel: string;
    farLimitLabel: string;
    hyperfocalLabel: string;
    cocLabel: string;
    cocUnit: string;
    showDetailsLabel: string;
    hideDetailsLabel: string;
    errorBelowFocal: string;
    [key: string]: string;
}

export type DepthOfFieldLocaleContent = ToolLocaleContent<DepthOfFieldUI>;

export const depthOfFieldCalculator: AudiovisualToolEntry<DepthOfFieldUI> = {
    id: 'depth-of-field-calculator',
    icons: {
        bg: 'mdi:lens',
        fg: 'mdi:image-filter-center-focus',
    },
    i18n: {
        de: async () => (await import('./i18n/de')).content as unknown as DepthOfFieldLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as DepthOfFieldLocaleContent,
        es: async () => (await import('./i18n/es')).content as unknown as DepthOfFieldLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as DepthOfFieldLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as DepthOfFieldLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as DepthOfFieldLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as DepthOfFieldLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as DepthOfFieldLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as DepthOfFieldLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as DepthOfFieldLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as DepthOfFieldLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as DepthOfFieldLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as DepthOfFieldLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as DepthOfFieldLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as DepthOfFieldLocaleContent,
    },
};

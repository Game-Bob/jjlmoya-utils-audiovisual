import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface PrintQualityCalculatorUI {
    dropTitle: string;
    dropSubtitle: string;
    resultsTitle: string;
    dpiDensityLabel: string;
    dpiPointsLabel: string;
    maxPrintTitle: string;
    standardFormatsTitle: string;
    formatColumn: string;
    measureColumn: string;
    supportColumn: string;
    qualityExcellent: string;
    qualityGood: string;
    qualityFair: string;
    qualityPoor: string;
    qualityExcellentDesc: string;
    qualityGoodDesc: string;
    qualityFairDesc: string;
    qualityPoorDesc: string;
    unitCm: string;
    unitInches: string;
    dpiScreenLabel: string;
    dpiNewspaperLabel: string;
    dpiPrintLabel: string;
    dpiFineArtLabel: string;
    formatPostal: string;
    formatQuartilla: string;
    formatFolio: string;
    formatDoubleFolio: string;
    formatSmallPoster: string;
    formatLargePoster: string;
    formatPlane: string;
    supportedText: string;
    notSupportedPrefix: string;
    invalidImageError: string;
    [key: string]: string;
}

export type PrintQualityCalculatorLocaleContent = ToolLocaleContent<PrintQualityCalculatorUI>;

export const printQualityCalculator: AudiovisualToolEntry<PrintQualityCalculatorUI> = {
    id: 'calidad-impresion',
    icons: {
        bg: 'mdi:printer',
        fg: 'mdi:ruler-square',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as PrintQualityCalculatorLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as PrintQualityCalculatorLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as PrintQualityCalculatorLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as PrintQualityCalculatorLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as PrintQualityCalculatorLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as PrintQualityCalculatorLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as PrintQualityCalculatorLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as PrintQualityCalculatorLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as PrintQualityCalculatorLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as PrintQualityCalculatorLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as PrintQualityCalculatorLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as PrintQualityCalculatorLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as PrintQualityCalculatorLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as PrintQualityCalculatorLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as PrintQualityCalculatorLocaleContent,
    },
};

export { bibliography } from './bibliography';

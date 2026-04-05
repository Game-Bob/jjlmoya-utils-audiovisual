import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PrintQualityCalculator from './component.astro';
import PrintQualityCalculatorSEO from './seo.astro';
import PrintQualityCalculatorBibliography from './bibliography.astro';

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
    [key: string]: string;
}

export type PrintQualityCalculatorLocaleContent = ToolLocaleContent<PrintQualityCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const printQualityCalculator: AudiovisualToolEntry<PrintQualityCalculatorUI> = {
    id: 'calidad-impresion',
    icons: {
        bg: 'mdi:printer',
        fg: 'mdi:ruler-square',
    },
    i18n: {
        es: async () => es as unknown as PrintQualityCalculatorLocaleContent,
        en: async () => en as unknown as PrintQualityCalculatorLocaleContent,
        fr: async () => fr as unknown as PrintQualityCalculatorLocaleContent,
    },
};

export { PrintQualityCalculator, PrintQualityCalculatorSEO, PrintQualityCalculatorBibliography };

export const PRINT_QUALITY_CALCULATOR_TOOL: ToolDefinition = {
    entry: printQualityCalculator as unknown as AudiovisualToolEntry,
    Component: PrintQualityCalculator,
    SEOComponent: PrintQualityCalculatorSEO,
    BibliographyComponent: PrintQualityCalculatorBibliography,
};

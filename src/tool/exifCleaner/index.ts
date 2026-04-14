import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ExifCleaner from './component.astro';
import ExifCleanerSEO from './seo.astro';
import ExifCleanerBibliography from './bibliography.astro';

export interface ExifCleanerUI {
    dropTitle: string;
    dropSubtitle: string;
    dropLocalInfo: string;
    selectButton: string;
    processingText: string;
    analysisCompleted: string;
    downloadButton: string;
    resetButton: string;
    privacyRiskTitle: string;
    gpsLabel: string;
    gpsDetected: string;
    gpsNotFound: string;
    cameraLabel: string;
    softwareLabel: string;
    dateLabel: string;
    otherTechnicalDetails: string;
    noMetadataFound: string;
    alreadyCleanInfo: string;
    previewLabel: string;
    faqTitle: string;
    bibliographyTitle: string;
    [key: string]: string;
}

export type ExifCleanerLocaleContent = ToolLocaleContent<ExifCleanerUI>;

export const exifCleaner: AudiovisualToolEntry<ExifCleanerUI> = {
    id: 'limpiador-exif',
    icons: {
        bg: 'mdi:camera-off',
        fg: 'mdi:shield-check',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as ExifCleanerLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as ExifCleanerLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as ExifCleanerLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as ExifCleanerLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as ExifCleanerLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as ExifCleanerLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as ExifCleanerLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as ExifCleanerLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as ExifCleanerLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as ExifCleanerLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as ExifCleanerLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as ExifCleanerLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as ExifCleanerLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as ExifCleanerLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as ExifCleanerLocaleContent,
    },
};

export { ExifCleaner, ExifCleanerSEO, ExifCleanerBibliography };

export const EXIF_CLEANER_TOOL: ToolDefinition = {
    entry: exifCleaner as unknown as AudiovisualToolEntry,
    Component: ExifCleaner,
    SEOComponent: ExifCleanerSEO,
    BibliographyComponent: ExifCleanerBibliography,
};

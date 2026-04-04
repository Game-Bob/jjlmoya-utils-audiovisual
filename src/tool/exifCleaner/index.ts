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

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const exifCleaner: AudiovisualToolEntry<ExifCleanerUI> = {
    id: 'exif-cleaner',
    icons: {
        bg: 'mdi:camera-off',
        fg: 'mdi:shield-check',
    },
    i18n: {
        es: async () => es as unknown as ExifCleanerLocaleContent,
        en: async () => en as unknown as ExifCleanerLocaleContent,
        fr: async () => fr as unknown as ExifCleanerLocaleContent,
    },
};

export { ExifCleaner, ExifCleanerSEO, ExifCleanerBibliography };

export const EXIF_CLEANER_TOOL: ToolDefinition = {
    entry: exifCleaner as unknown as AudiovisualToolEntry,
    Component: ExifCleaner,
    SEOComponent: ExifCleanerSEO,
    BibliographyComponent: ExifCleanerBibliography,
};

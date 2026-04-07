import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import ImageCompressor from './component.astro';
import ImageCompressorSEO from './seo.astro';
import ImageCompressorBibliography from './bibliography.astro';

export interface ImageCompressorUI {
    dropTitle: string;
    dropSubtitle: string;
    settingsTitle: string;
    qualityLabel: string;
    widthLabel: string;
    convertToWebpLabel: string;
    compressionLabel: string;
    compressBtn: string;
    processingLabel: string;
    resultsTitle: string;
    originalSizeLabel: string;
    newSizeLabel: string;
    reductionLabel: string;
    downloadBtn: string;
    addMoreBtn: string;
    browseFilesBtn: string;
    processedFilesTitle: string;
    downloadAllBtn: string;
    adjustThisImage: string;
    downloadTitle: string;
    maxWidthLabel: string;
    closeBtn: string;
    totalSavingsLabel: string;
    noSavings: string;
    [key: string]: string;
}

export type ImageCompressorLocaleContent = ToolLocaleContent<ImageCompressorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const imageCompressor: AudiovisualToolEntry<ImageCompressorUI> = {
    id: 'compresor-imagenes',
    icons: {
        bg: 'mdi:image-size-select-small',
        fg: 'mdi:file-image-outline',
    },
    i18n: {
        es: async () => es as unknown as ImageCompressorLocaleContent,
        en: async () => en as unknown as ImageCompressorLocaleContent,
        fr: async () => fr as unknown as ImageCompressorLocaleContent,
    },
};

export { ImageCompressor, ImageCompressorSEO, ImageCompressorBibliography };

export const IMAGE_COMPRESSOR_TOOL: ToolDefinition = {
    entry: imageCompressor as unknown as AudiovisualToolEntry,
    Component: ImageCompressor,
    SEOComponent: ImageCompressorSEO,
    BibliographyComponent: ImageCompressorBibliography,
};

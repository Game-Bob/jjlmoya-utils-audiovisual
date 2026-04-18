import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

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

export const imageCompressor: AudiovisualToolEntry<ImageCompressorUI> = {
    id: 'compresor-imagenes',
    icons: {
        bg: 'mdi:image-size-select-small',
        fg: 'mdi:file-image-outline',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as ImageCompressorLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as ImageCompressorLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as ImageCompressorLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as ImageCompressorLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as ImageCompressorLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as ImageCompressorLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as ImageCompressorLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as ImageCompressorLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as ImageCompressorLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as ImageCompressorLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as ImageCompressorLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as ImageCompressorLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as ImageCompressorLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as ImageCompressorLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as ImageCompressorLocaleContent,
    },
};

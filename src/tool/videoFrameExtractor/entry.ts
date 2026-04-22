import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface VideoFrameExtractorUI {
    uploadTitle: string;
    uploadFormats: string;
    privacyNote: string;
    playLabel: string;
    pauseLabel: string;
    captureBtn: string;
    prevFrame: string;
    nextFrame: string;
    batchTitle: string;
    batchEvery: string;
    batchStart: string;
    batchProcessing: string;
    galleryTitle: string;
    galleryEmpty: string;
    downloadAll: string;
    downloadHD: string;
    resetBtn: string;
    [key: string]: string;
}

export type VideoFrameExtractorLocaleContent = ToolLocaleContent<VideoFrameExtractorUI>;

export const videoFrameExtractor: AudiovisualToolEntry<VideoFrameExtractorUI> = {
    id: 'extractor-fotogramas-video',
    icons: {
        bg: 'mdi:video-vintage',
        fg: 'mdi:camera-plus',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as VideoFrameExtractorLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as VideoFrameExtractorLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as VideoFrameExtractorLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as VideoFrameExtractorLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as VideoFrameExtractorLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as VideoFrameExtractorLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as VideoFrameExtractorLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as VideoFrameExtractorLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as VideoFrameExtractorLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as VideoFrameExtractorLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as VideoFrameExtractorLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as VideoFrameExtractorLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as VideoFrameExtractorLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as VideoFrameExtractorLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as VideoFrameExtractorLocaleContent,
    },
};

export { bibliography } from './bibliography';

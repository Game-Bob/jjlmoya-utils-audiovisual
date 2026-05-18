import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface VideoMergerUI {
    uploadTitle: string;
    uploadFormats: string;
    privacyNote: string;
    addMoreBtn: string;
    mergeBtn: string;
    mergingStatus: string;
    downloadBtn: string;
    resetBtn: string;
    emptyList: string;
    listTitle: string;
    optionsTitle: string;
    optionResolution: string;
    optionFps: string;
    optionsQualityNote: string;
    faqTitle: string;
    bibliographyTitle: string;
    resolutionWarning: string;
    [key: string]: string;
}

export type VideoMergerLocaleContent = ToolLocaleContent<VideoMergerUI>;

export const videoMerger: AudiovisualToolEntry<VideoMergerUI> = {
    id: 'online-video-merger',
    icons: {
        bg: 'mdi:video-vintage',
        fg: 'mdi:video-plus',
    },
    i18n: {
        de: async () => (await import('./i18n/de')).content as unknown as VideoMergerLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as VideoMergerLocaleContent,
        es: async () => (await import('./i18n/es')).content as unknown as VideoMergerLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as VideoMergerLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as VideoMergerLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as VideoMergerLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as VideoMergerLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as VideoMergerLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as VideoMergerLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as VideoMergerLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as VideoMergerLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as VideoMergerLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as VideoMergerLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as VideoMergerLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as VideoMergerLocaleContent,
    },
};

export { bibliography } from './bibliography';

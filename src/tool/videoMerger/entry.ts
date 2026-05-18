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
        es: async () => (await import('./i18n/es')).content as unknown as VideoMergerLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as VideoMergerLocaleContent,
    },
};

export { bibliography } from './bibliography';

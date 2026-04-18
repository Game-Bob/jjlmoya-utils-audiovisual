import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface PrivacyBlurUI {
    toolPixel: string;
    toolBlur: string;
    toolSolid: string;
    intensityLabel: string;
    undoButton: string;
    downloadButton: string;
    dropTitle: string;
    dropSubtitle: string;
    privacySecureLabel: string;
    offlineLabel: string;
    autoDetectFaces: string;
    loadingModels: string;
    noFacesDetected: string;
    [key: string]: string;
}

export type PrivacyBlurLocaleContent = ToolLocaleContent<PrivacyBlurUI>;

export const privacyBlur: AudiovisualToolEntry<PrivacyBlurUI> = {
    id: 'editor-privacidad',
    icons: {
        bg: 'mdi:eye-off',
        fg: 'mdi:blur',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as PrivacyBlurLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as PrivacyBlurLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as PrivacyBlurLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as PrivacyBlurLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as PrivacyBlurLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as PrivacyBlurLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as PrivacyBlurLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as PrivacyBlurLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as PrivacyBlurLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as PrivacyBlurLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as PrivacyBlurLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as PrivacyBlurLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as PrivacyBlurLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as PrivacyBlurLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as PrivacyBlurLocaleContent,
    },
};

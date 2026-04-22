import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface CollageMakerUI {
    dropTitle: string;
    dropSub: string;
    dropLink: string;
    imgsLoaded: string;
    layoutLabel: string;
    settingsLabel: string;
    borderLabel: string;
    borderColorLabel: string;
    bgColorLabel: string;
    downloadBtn: string;
    previewTitle: string;
    needsImgs: string;
    errorMin: string;
    errorMax: string;
    errorLoad: string;
    [key: string]: string;
}

export type CollageMakerLocaleContent = ToolLocaleContent<CollageMakerUI>;


export const collageMaker: AudiovisualToolEntry<CollageMakerUI> = {
    id: 'creador-collage-fotos',
    icons: {
        bg: 'mdi:collage',
        fg: 'mdi:palette-outline',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as CollageMakerLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as CollageMakerLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as CollageMakerLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as CollageMakerLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as CollageMakerLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as CollageMakerLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as CollageMakerLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as CollageMakerLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as CollageMakerLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as CollageMakerLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as CollageMakerLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as CollageMakerLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as CollageMakerLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as CollageMakerLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as CollageMakerLocaleContent,
    },
};

export { bibliography } from './bibliography';

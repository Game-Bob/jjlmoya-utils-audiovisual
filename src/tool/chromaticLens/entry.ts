import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface ChromaticLensUI {
    dropTitle: string;
    dropSubtitle: string;
    processingLabel: string;
    paletteTitle: string;
    copyLabel: string;
    copiedLabel: string;
    colorCountLabel: string;
    [key: string]: string;
}

export type ChromaticLensLocaleContent = ToolLocaleContent<ChromaticLensUI>;

export const chromaticLens: AudiovisualToolEntry<ChromaticLensUI> = {
    id: 'lente-cromatica',
    icons: {
        bg: 'mdi:palette-swatch',
        fg: 'mdi:eye-outline',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as ChromaticLensLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as ChromaticLensLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as ChromaticLensLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as ChromaticLensLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as ChromaticLensLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as ChromaticLensLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as ChromaticLensLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as ChromaticLensLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as ChromaticLensLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as ChromaticLensLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as ChromaticLensLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as ChromaticLensLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as ChromaticLensLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as ChromaticLensLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as ChromaticLensLocaleContent,
    },
};

export { bibliography } from './bibliography';

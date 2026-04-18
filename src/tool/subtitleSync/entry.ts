import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface SubtitleSyncUI {
    dropTitle: string;
    dropSubtitle: string;
    adjustTitle: string;
    offsetLabel: string;
    offsetHelp: string;
    linesStat: string;
    firstStat: string;
    lastStat: string;
    originalLabel: string;
    resultLabel: string;
    downloadButton: string;
    previewBadge: string;
    unitSeconds: string;
    [key: string]: string;
}

export type SubtitleSyncLocaleContent = ToolLocaleContent<SubtitleSyncUI>;

export const subtitleSync: AudiovisualToolEntry<SubtitleSyncUI> = {
    id: 'sincronizar-subtitulos',
    icons: {
        bg: 'mdi:movie-open-edit-outline',
        fg: 'mdi:clock-time-four-outline',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as SubtitleSyncLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as SubtitleSyncLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as SubtitleSyncLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as SubtitleSyncLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as SubtitleSyncLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as SubtitleSyncLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as SubtitleSyncLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as SubtitleSyncLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as SubtitleSyncLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as SubtitleSyncLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as SubtitleSyncLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as SubtitleSyncLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as SubtitleSyncLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as SubtitleSyncLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as SubtitleSyncLocaleContent,
    },
};

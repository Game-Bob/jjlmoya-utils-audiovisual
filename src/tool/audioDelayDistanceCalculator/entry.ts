import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';
import type { AudioDelayUI } from './ui';

export type { AudioDelayUI } from './ui';
export type AudioDelayLocaleContent = ToolLocaleContent<AudioDelayUI>;

export const audioDelayDistanceCalculator: AudiovisualToolEntry<AudioDelayUI> = {
  id: 'audio-delay-distance-calculator',
  icons: {
    bg: 'mdi:speaker',
    fg: 'mdi:timer-outline',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content as unknown as AudioDelayLocaleContent,
    en: async () => (await import('./i18n/en')).content as unknown as AudioDelayLocaleContent,
    es: async () => (await import('./i18n/es')).content as unknown as AudioDelayLocaleContent,
    fr: async () => (await import('./i18n/fr')).content as unknown as AudioDelayLocaleContent,
    id: async () => (await import('./i18n/id')).content as unknown as AudioDelayLocaleContent,
    it: async () => (await import('./i18n/it')).content as unknown as AudioDelayLocaleContent,
    ja: async () => (await import('./i18n/ja')).content as unknown as AudioDelayLocaleContent,
    ko: async () => (await import('./i18n/ko')).content as unknown as AudioDelayLocaleContent,
    nl: async () => (await import('./i18n/nl')).content as unknown as AudioDelayLocaleContent,
    pl: async () => (await import('./i18n/pl')).content as unknown as AudioDelayLocaleContent,
    pt: async () => (await import('./i18n/pt')).content as unknown as AudioDelayLocaleContent,
    ru: async () => (await import('./i18n/ru')).content as unknown as AudioDelayLocaleContent,
    sv: async () => (await import('./i18n/sv')).content as unknown as AudioDelayLocaleContent,
    tr: async () => (await import('./i18n/tr')).content as unknown as AudioDelayLocaleContent,
    zh: async () => (await import('./i18n/zh')).content as unknown as AudioDelayLocaleContent,
  },
};

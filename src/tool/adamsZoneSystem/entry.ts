import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';
import type { AdamsZoneSystemUI } from './ui';

export type { AdamsZoneSystemUI } from './ui';
export type AdamsZoneSystemLocaleContent = ToolLocaleContent<AdamsZoneSystemUI>;

export const adamsZoneSystem: AudiovisualToolEntry<AdamsZoneSystemUI> = {
  id: 'adams-zone-system',
  icons: {
    bg: 'mdi:camera-iris',
    fg: 'mdi:chart-bell-curve-cumulative',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content as AdamsZoneSystemLocaleContent,
    en: async () => (await import('./i18n/en')).content as AdamsZoneSystemLocaleContent,
    es: async () => (await import('./i18n/es')).content as AdamsZoneSystemLocaleContent,
    fr: async () => (await import('./i18n/fr')).content as AdamsZoneSystemLocaleContent,
    id: async () => (await import('./i18n/id')).content as AdamsZoneSystemLocaleContent,
    it: async () => (await import('./i18n/it')).content as AdamsZoneSystemLocaleContent,
    ja: async () => (await import('./i18n/ja')).content as AdamsZoneSystemLocaleContent,
    ko: async () => (await import('./i18n/ko')).content as AdamsZoneSystemLocaleContent,
    nl: async () => (await import('./i18n/nl')).content as AdamsZoneSystemLocaleContent,
    pl: async () => (await import('./i18n/pl')).content as AdamsZoneSystemLocaleContent,
    pt: async () => (await import('./i18n/pt')).content as AdamsZoneSystemLocaleContent,
    ru: async () => (await import('./i18n/ru')).content as AdamsZoneSystemLocaleContent,
    sv: async () => (await import('./i18n/sv')).content as AdamsZoneSystemLocaleContent,
    tr: async () => (await import('./i18n/tr')).content as AdamsZoneSystemLocaleContent,
    zh: async () => (await import('./i18n/zh')).content as AdamsZoneSystemLocaleContent,
  },
};

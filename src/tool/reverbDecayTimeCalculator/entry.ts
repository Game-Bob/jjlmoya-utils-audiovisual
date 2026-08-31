import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';
import type { ReverbDecayUI } from './ui';

export type { ReverbDecayUI } from './ui';
export type ReverbDecayLocaleContent = ToolLocaleContent<ReverbDecayUI>;

export const reverbDecayTimeCalculator: AudiovisualToolEntry<ReverbDecayUI> = {
  id: 'reverb-decay-time-calculator',
  icons: { bg: 'mdi:waveform', fg: 'mdi:timer-sand' },
  i18n: {
    de: async () => (await import('./i18n/de')).content as ReverbDecayLocaleContent,
    en: async () => (await import('./i18n/en')).content as ReverbDecayLocaleContent,
    es: async () => (await import('./i18n/es')).content as ReverbDecayLocaleContent,
    fr: async () => (await import('./i18n/fr')).content as ReverbDecayLocaleContent,
    id: async () => (await import('./i18n/id')).content as ReverbDecayLocaleContent,
    it: async () => (await import('./i18n/it')).content as ReverbDecayLocaleContent,
    ja: async () => (await import('./i18n/ja')).content as ReverbDecayLocaleContent,
    ko: async () => (await import('./i18n/ko')).content as ReverbDecayLocaleContent,
    nl: async () => (await import('./i18n/nl')).content as ReverbDecayLocaleContent,
    pl: async () => (await import('./i18n/pl')).content as ReverbDecayLocaleContent,
    pt: async () => (await import('./i18n/pt')).content as ReverbDecayLocaleContent,
    ru: async () => (await import('./i18n/ru')).content as ReverbDecayLocaleContent,
    sv: async () => (await import('./i18n/sv')).content as ReverbDecayLocaleContent,
    tr: async () => (await import('./i18n/tr')).content as ReverbDecayLocaleContent,
    zh: async () => (await import('./i18n/zh')).content as ReverbDecayLocaleContent,
  },
};

import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';
import type { EquivalentExposureUI } from './ui';

export type { EquivalentExposureUI } from './ui';
export type EquivalentExposureLocaleContent = ToolLocaleContent<EquivalentExposureUI>;

export const equivalentExposureCalculator: AudiovisualToolEntry<EquivalentExposureUI> = {
  id: 'equivalent-exposure-calculator',
  icons: {
    bg: 'mdi:camera-iris',
    fg: 'mdi:camera-metering-center',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content as unknown as EquivalentExposureLocaleContent,
    en: async () => (await import('./i18n/en')).content as unknown as EquivalentExposureLocaleContent,
    es: async () => (await import('./i18n/es')).content as unknown as EquivalentExposureLocaleContent,
    fr: async () => (await import('./i18n/fr')).content as unknown as EquivalentExposureLocaleContent,
    id: async () => (await import('./i18n/id')).content as unknown as EquivalentExposureLocaleContent,
    it: async () => (await import('./i18n/it')).content as unknown as EquivalentExposureLocaleContent,
    ja: async () => (await import('./i18n/ja')).content as unknown as EquivalentExposureLocaleContent,
    ko: async () => (await import('./i18n/ko')).content as unknown as EquivalentExposureLocaleContent,
    nl: async () => (await import('./i18n/nl')).content as unknown as EquivalentExposureLocaleContent,
    pl: async () => (await import('./i18n/pl')).content as unknown as EquivalentExposureLocaleContent,
    pt: async () => (await import('./i18n/pt')).content as unknown as EquivalentExposureLocaleContent,
    ru: async () => (await import('./i18n/ru')).content as unknown as EquivalentExposureLocaleContent,
    sv: async () => (await import('./i18n/sv')).content as unknown as EquivalentExposureLocaleContent,
    tr: async () => (await import('./i18n/tr')).content as unknown as EquivalentExposureLocaleContent,
    zh: async () => (await import('./i18n/zh')).content as unknown as EquivalentExposureLocaleContent,
  },
};

import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';
import type { FilmReciprocityFailureCalculatorUI } from './ui';

export type { FilmReciprocityFailureCalculatorUI } from './ui';
export type FilmReciprocityFailureCalculatorLocaleContent = ToolLocaleContent<FilmReciprocityFailureCalculatorUI>;

export const filmReciprocityFailureCalculator: AudiovisualToolEntry<FilmReciprocityFailureCalculatorUI> = {
  id: 'film-reciprocity-failure-calculator',
  icons: {
    bg: 'mdi:camera-iris',
    fg: 'mdi:filmstrip',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content as FilmReciprocityFailureCalculatorLocaleContent,
    en: async () => (await import('./i18n/en')).content as FilmReciprocityFailureCalculatorLocaleContent,
    es: async () => (await import('./i18n/es')).content as FilmReciprocityFailureCalculatorLocaleContent,
    fr: async () => (await import('./i18n/fr')).content as FilmReciprocityFailureCalculatorLocaleContent,
    'id': async () => (await import('./i18n/id')).content as FilmReciprocityFailureCalculatorLocaleContent,
    it: async () => (await import('./i18n/it')).content as FilmReciprocityFailureCalculatorLocaleContent,
    ja: async () => (await import('./i18n/ja')).content as FilmReciprocityFailureCalculatorLocaleContent,
    ko: async () => (await import('./i18n/ko')).content as FilmReciprocityFailureCalculatorLocaleContent,
    nl: async () => (await import('./i18n/nl')).content as FilmReciprocityFailureCalculatorLocaleContent,
    pl: async () => (await import('./i18n/pl')).content as FilmReciprocityFailureCalculatorLocaleContent,
    pt: async () => (await import('./i18n/pt')).content as FilmReciprocityFailureCalculatorLocaleContent,
    ru: async () => (await import('./i18n/ru')).content as FilmReciprocityFailureCalculatorLocaleContent,
    sv: async () => (await import('./i18n/sv')).content as FilmReciprocityFailureCalculatorLocaleContent,
    tr: async () => (await import('./i18n/tr')).content as FilmReciprocityFailureCalculatorLocaleContent,
    zh: async () => (await import('./i18n/zh')).content as FilmReciprocityFailureCalculatorLocaleContent,
  },
};

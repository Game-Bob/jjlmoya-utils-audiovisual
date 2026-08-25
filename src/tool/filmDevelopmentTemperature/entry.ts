import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';
import type { FilmDevelopmentTemperatureUI } from './ui';

export type { FilmDevelopmentTemperatureUI } from './ui';
export type FilmDevelopmentTemperatureLocaleContent = ToolLocaleContent<FilmDevelopmentTemperatureUI>;

export const filmDevelopmentTemperature: AudiovisualToolEntry<FilmDevelopmentTemperatureUI> = {
  id: 'film-development-temperature',
  icons: {
    bg: 'mdi:camera-iris',
    fg: 'mdi:thermometer-lines',
  },
  i18n: {
    de: async () => (await import('./i18n/de')).content as FilmDevelopmentTemperatureLocaleContent,
    en: async () => (await import('./i18n/en')).content as FilmDevelopmentTemperatureLocaleContent,
    es: async () => (await import('./i18n/es')).content as FilmDevelopmentTemperatureLocaleContent,
    fr: async () => (await import('./i18n/fr')).content as FilmDevelopmentTemperatureLocaleContent,
    'id': async () => (await import('./i18n/id')).content as FilmDevelopmentTemperatureLocaleContent,
    it: async () => (await import('./i18n/it')).content as FilmDevelopmentTemperatureLocaleContent,
    ja: async () => (await import('./i18n/ja')).content as FilmDevelopmentTemperatureLocaleContent,
    ko: async () => (await import('./i18n/ko')).content as FilmDevelopmentTemperatureLocaleContent,
    nl: async () => (await import('./i18n/nl')).content as FilmDevelopmentTemperatureLocaleContent,
    pl: async () => (await import('./i18n/pl')).content as FilmDevelopmentTemperatureLocaleContent,
    pt: async () => (await import('./i18n/pt')).content as FilmDevelopmentTemperatureLocaleContent,
    ru: async () => (await import('./i18n/ru')).content as FilmDevelopmentTemperatureLocaleContent,
    sv: async () => (await import('./i18n/sv')).content as FilmDevelopmentTemperatureLocaleContent,
    tr: async () => (await import('./i18n/tr')).content as FilmDevelopmentTemperatureLocaleContent,
    zh: async () => (await import('./i18n/zh')).content as FilmDevelopmentTemperatureLocaleContent,
  },
};

import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';
import type { VideoExportPlannerUI } from './ui';

export type { VideoExportPlannerUI } from './ui';
export type VideoExportPlannerLocaleContent = ToolLocaleContent<VideoExportPlannerUI>;

export const videoExportPlanner: AudiovisualToolEntry<VideoExportPlannerUI> = {
  id: 'video-export-bitrate-planner',
  icons: { bg: 'mdi:filmstrip', fg: 'mdi:chart-timeline-variant' },
  i18n: {
    es: async () => (await import('./i18n/es')).content as VideoExportPlannerLocaleContent,
    en: async () => (await import('./i18n/en')).content as VideoExportPlannerLocaleContent,
    fr: async () => (await import('./i18n/fr')).content as VideoExportPlannerLocaleContent,
    de: async () => (await import('./i18n/de')).content as VideoExportPlannerLocaleContent,
    it: async () => (await import('./i18n/it')).content as VideoExportPlannerLocaleContent,
    pt: async () => (await import('./i18n/pt')).content as VideoExportPlannerLocaleContent,
    id: async () => (await import('./i18n/id')).content as VideoExportPlannerLocaleContent,
    ja: async () => (await import('./i18n/ja')).content as VideoExportPlannerLocaleContent,
    ko: async () => (await import('./i18n/ko')).content as VideoExportPlannerLocaleContent,
    nl: async () => (await import('./i18n/nl')).content as VideoExportPlannerLocaleContent,
    pl: async () => (await import('./i18n/pl')).content as VideoExportPlannerLocaleContent,
    ru: async () => (await import('./i18n/ru')).content as VideoExportPlannerLocaleContent,
    sv: async () => (await import('./i18n/sv')).content as VideoExportPlannerLocaleContent,
    tr: async () => (await import('./i18n/tr')).content as VideoExportPlannerLocaleContent,
    zh: async () => (await import('./i18n/zh')).content as VideoExportPlannerLocaleContent,
  },
};

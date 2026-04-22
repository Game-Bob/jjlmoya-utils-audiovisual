import type { AudiovisualToolEntry, ToolLocaleContent } from '../../types';

export interface TimelapseUI {
    title: string;
    paramsTitle: string;
    eventDuration: string;
    hours: string;
    minutes: string;
    videoDuration: string;
    seconds: string;
    fps: string;
    resultsTitle: string;
    intervalLabel: string;
    secondsUnit: string;
    totalPhotos: string;
    speed: string;
    shutterSpeed: string;
    storage: string;
    rule180Info: string;
    [key: string]: string;
}

export type TimelapseLocaleContent = ToolLocaleContent<TimelapseUI>;

export const timelapseCalculator: AudiovisualToolEntry<TimelapseUI> = {
    id: 'calculadora-timelapse',
    icons: {
        bg: 'mdi:camera-timer',
        fg: 'mdi:clock-fast',
    },
    i18n: {
        es: async () => (await import('./i18n/es')).content as unknown as TimelapseLocaleContent,
        en: async () => (await import('./i18n/en')).content as unknown as TimelapseLocaleContent,
        fr: async () => (await import('./i18n/fr')).content as unknown as TimelapseLocaleContent,
        de: async () => (await import('./i18n/de')).content as unknown as TimelapseLocaleContent,
        it: async () => (await import('./i18n/it')).content as unknown as TimelapseLocaleContent,
        pt: async () => (await import('./i18n/pt')).content as unknown as TimelapseLocaleContent,
        id: async () => (await import('./i18n/id')).content as unknown as TimelapseLocaleContent,
        ja: async () => (await import('./i18n/ja')).content as unknown as TimelapseLocaleContent,
        ko: async () => (await import('./i18n/ko')).content as unknown as TimelapseLocaleContent,
        nl: async () => (await import('./i18n/nl')).content as unknown as TimelapseLocaleContent,
        pl: async () => (await import('./i18n/pl')).content as unknown as TimelapseLocaleContent,
        ru: async () => (await import('./i18n/ru')).content as unknown as TimelapseLocaleContent,
        sv: async () => (await import('./i18n/sv')).content as unknown as TimelapseLocaleContent,
        tr: async () => (await import('./i18n/tr')).content as unknown as TimelapseLocaleContent,
        zh: async () => (await import('./i18n/zh')).content as unknown as TimelapseLocaleContent,
    },
};

export { bibliography } from './bibliography';

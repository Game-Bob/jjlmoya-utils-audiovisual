import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import TimelapseCalculator from './component.astro';
import TimelapseSEO from './seo.astro';
import TimelapseBibliography from './bibliography.astro';

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

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const timelapseCalculator: AudiovisualToolEntry<TimelapseUI> = {
    id: 'timelapse-calculator',
    icons: {
        bg: 'mdi:camera-timer',
        fg: 'mdi:clock-fast',
    },
    i18n: {
        es: async () => es as unknown as TimelapseLocaleContent,
        en: async () => en as unknown as TimelapseLocaleContent,
        fr: async () => fr as unknown as TimelapseLocaleContent,
    },
};

export { TimelapseCalculator, TimelapseSEO, TimelapseBibliography };

export const TIMELAPSE_CALCULATOR_TOOL: ToolDefinition = {
    entry: timelapseCalculator as unknown as AudiovisualToolEntry,
    Component: TimelapseCalculator,
    SEOComponent: TimelapseSEO,
    BibliographyComponent: TimelapseBibliography,
};

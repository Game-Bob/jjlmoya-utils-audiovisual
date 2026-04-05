import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import SubtitleSync from './component.astro';
import SubtitleSyncSEO from './seo.astro';
import SubtitleSyncBibliography from './bibliography.astro';

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

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const subtitleSync: AudiovisualToolEntry<SubtitleSyncUI> = {
    id: 'sincronizar-subtitulos',
    icons: {
        bg: 'mdi:movie-open-edit-outline',
        fg: 'mdi:clock-time-four-outline',
    },
    i18n: {
        es: async () => es as unknown as SubtitleSyncLocaleContent,
        en: async () => en as unknown as SubtitleSyncLocaleContent,
        fr: async () => fr as unknown as SubtitleSyncLocaleContent,
    },
};

export { SubtitleSync, SubtitleSyncSEO, SubtitleSyncBibliography };

export const SUBTITLE_SYNC_TOOL: ToolDefinition = {
    entry: subtitleSync as unknown as AudiovisualToolEntry,
    Component: SubtitleSync,
    SEOComponent: SubtitleSyncSEO,
    BibliographyComponent: SubtitleSyncBibliography,
};

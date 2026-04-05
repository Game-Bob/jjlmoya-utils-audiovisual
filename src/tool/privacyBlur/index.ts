import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import PrivacyBlur from './component.astro';
import PrivacyBlurSEO from './seo.astro';
import PrivacyBlurBibliography from './bibliography.astro';

export interface PrivacyBlurUI {
    toolPixel: string;
    toolBlur: string;
    toolSolid: string;
    intensityLabel: string;
    undoButton: string;
    downloadButton: string;
    dropTitle: string;
    dropSubtitle: string;
    privacySecureLabel: string;
    offlineLabel: string;
    autoDetectFaces: string;
    loadingModels: string;
    noFacesDetected: string;
    [key: string]: string;
}

export type PrivacyBlurLocaleContent = ToolLocaleContent<PrivacyBlurUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const privacyBlur: AudiovisualToolEntry<PrivacyBlurUI> = {
    id: 'editor-privacidad',
    icons: {
        bg: 'mdi:eye-off',
        fg: 'mdi:blur',
    },
    i18n: {
        es: async () => es as unknown as PrivacyBlurLocaleContent,
        en: async () => en as unknown as PrivacyBlurLocaleContent,
        fr: async () => fr as unknown as PrivacyBlurLocaleContent,
    },
};

export { PrivacyBlur, PrivacyBlurSEO, PrivacyBlurBibliography };

export const PRIVACY_BLUR_TOOL: ToolDefinition = {
    entry: privacyBlur as unknown as AudiovisualToolEntry,
    Component: PrivacyBlur,
    SEOComponent: PrivacyBlurSEO,
    BibliographyComponent: PrivacyBlurBibliography,
};

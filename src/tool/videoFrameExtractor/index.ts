import type { AudiovisualToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import VideoFrameExtractor from './component.astro';
import VideoFrameExtractorSEO from './seo.astro';
import VideoFrameExtractorBibliography from './bibliography.astro';

export interface VideoFrameExtractorUI {
    uploadTitle: string;
    uploadFormats: string;
    privacyNote: string;
    playLabel: string;
    pauseLabel: string;
    captureBtn: string;
    prevFrame: string;
    nextFrame: string;
    batchTitle: string;
    batchEvery: string;
    batchStart: string;
    batchProcessing: string;
    galleryTitle: string;
    galleryEmpty: string;
    downloadAll: string;
    downloadHD: string;
    resetBtn: string;
    [key: string]: string;
}

export type VideoFrameExtractorLocaleContent = ToolLocaleContent<VideoFrameExtractorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const videoFrameExtractor: AudiovisualToolEntry<VideoFrameExtractorUI> = {
    id: 'extractor-frames-video',
    icons: {
        bg: 'mdi:video-vintage',
        fg: 'mdi:camera-plus',
    },
    i18n: {
        es: async () => es as unknown as VideoFrameExtractorLocaleContent,
        en: async () => en as unknown as VideoFrameExtractorLocaleContent,
        fr: async () => fr as unknown as VideoFrameExtractorLocaleContent,
    },
};

export { VideoFrameExtractor, VideoFrameExtractorSEO, VideoFrameExtractorBibliography };

export const VIDEO_FRAME_EXTRACTOR_TOOL: ToolDefinition = {
    entry: videoFrameExtractor as unknown as AudiovisualToolEntry,
    Component: VideoFrameExtractor,
    SEOComponent: VideoFrameExtractorSEO,
    BibliographyComponent: VideoFrameExtractorBibliography,
};

import type { AudiovisualCategoryEntry, AudiovisualToolEntry } from '../types';
import { timelapseCalculator } from '../tool/timelapseCalculator/index';
import { exifCleaner } from '../tool/exifCleaner/index';
import { subtitleSync } from '../tool/subtitleSync/index';
import { privacyBlur } from '../tool/privacyBlur/index';
import { chromaticLens } from '../tool/chromaticLens/index';
import { printQualityCalculator } from '../tool/printQualityCalculator/index';
import { tvDistance } from '../tool/tvDistance/index';
import { imageCompressor } from '../tool/imageCompressor/index';
import { collageMaker } from '../tool/collageMaker/index';
import { videoFrameExtractor } from '../tool/videoFrameExtractor/index';
import { depthOfFieldCalculator } from '../tool/depthOfFieldCalculator/index';

export const audiovisualCategory: AudiovisualCategoryEntry = {
  icon: 'mdi:camera-iris',
  tools: [
    timelapseCalculator as AudiovisualToolEntry,
    exifCleaner as AudiovisualToolEntry,
    subtitleSync as AudiovisualToolEntry,
    privacyBlur as AudiovisualToolEntry,
    chromaticLens as AudiovisualToolEntry,
    printQualityCalculator as AudiovisualToolEntry,
    tvDistance as AudiovisualToolEntry,
    imageCompressor as AudiovisualToolEntry,
    collageMaker as AudiovisualToolEntry,
    videoFrameExtractor as AudiovisualToolEntry,
    depthOfFieldCalculator as AudiovisualToolEntry,
  ],
  i18n: {
    es: async () => (await import('./i18n/es')).content,
    en: async () => (await import('./i18n/en')).content,
    fr: async () => (await import('./i18n/fr')).content,
    de: async () => (await import('./i18n/de')).content,
    it: async () => (await import('./i18n/it')).content,
    pt: async () => (await import('./i18n/pt')).content,
    id: async () => (await import('./i18n/id')).content,
    ja: async () => (await import('./i18n/ja')).content,
    ko: async () => (await import('./i18n/ko')).content,
    nl: async () => (await import('./i18n/nl')).content,
    pl: async () => (await import('./i18n/pl')).content,
    ru: async () => (await import('./i18n/ru')).content,
    sv: async () => (await import('./i18n/sv')).content,
    tr: async () => (await import('./i18n/tr')).content,
    zh: async () => (await import('./i18n/zh')).content,
  },
};

export const toolsCategory = audiovisualCategory;

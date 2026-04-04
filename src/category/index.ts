import type { AudiovisualCategoryEntry, AudiovisualToolEntry } from '../types';
import { timelapseCalculator } from '../tool/timelapseCalculator/index';
import { exifCleaner } from '../tool/exifCleaner/index';

export const audiovisualCategory: AudiovisualCategoryEntry = {
  icon: 'mdi:camera-iris',
  tools: [
    timelapseCalculator as AudiovisualToolEntry,
    exifCleaner as AudiovisualToolEntry,
  ],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};


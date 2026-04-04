import type { ToolDefinition } from './types';
import { TIMELAPSE_CALCULATOR_TOOL } from './tool/timelapseCalculator';
import { EXIF_CLEANER_TOOL } from './tool/exifCleaner';

export const ALL_TOOLS: ToolDefinition[] = [
  TIMELAPSE_CALCULATOR_TOOL,
  EXIF_CLEANER_TOOL,
];


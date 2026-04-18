export { ALL_ENTRIES } from './entries';
import type { ToolDefinition } from './types';
import { TIMELAPSE_CALCULATOR_TOOL } from './tool/timelapseCalculator';
import { EXIF_CLEANER_TOOL } from './tool/exifCleaner';
import { SUBTITLE_SYNC_TOOL } from './tool/subtitleSync';
import { PRIVACY_BLUR_TOOL } from './tool/privacyBlur';
import { CHROMATIC_LENS_TOOL } from './tool/chromaticLens';
import { PRINT_QUALITY_CALCULATOR_TOOL } from './tool/printQualityCalculator';
import { TV_DISTANCE_TOOL } from './tool/tvDistance';
import { IMAGE_COMPRESSOR_TOOL } from './tool/imageCompressor';
import { COLLAGE_MAKER_TOOL } from './tool/collageMaker';
import { VIDEO_FRAME_EXTRACTOR_TOOL } from './tool/videoFrameExtractor';

export const ALL_TOOLS: ToolDefinition[] = [
  TIMELAPSE_CALCULATOR_TOOL,
  EXIF_CLEANER_TOOL,
  SUBTITLE_SYNC_TOOL,
  PRIVACY_BLUR_TOOL,
  CHROMATIC_LENS_TOOL,
  PRINT_QUALITY_CALCULATOR_TOOL,
  TV_DISTANCE_TOOL,
  IMAGE_COMPRESSOR_TOOL,
  COLLAGE_MAKER_TOOL,
  VIDEO_FRAME_EXTRACTOR_TOOL,
];



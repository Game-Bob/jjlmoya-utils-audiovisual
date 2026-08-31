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
import { DEPTH_OF_FIELD_CALCULATOR_TOOL } from './tool/depthOfFieldCalculator';
import { VIDEO_MERGER_TOOL } from './tool/videoMerger';
import { AUDIO_DELAY_DISTANCE_CALCULATOR_TOOL } from './tool/audioDelayDistanceCalculator';
import { EQUIVALENT_EXPOSURE_CALCULATOR_TOOL } from './tool/equivalentExposureCalculator';
import { ADAMS_ZONE_SYSTEM_TOOL } from './tool/adamsZoneSystem';
import { FILM_DEVELOPMENT_TEMPERATURE_TOOL } from './tool/filmDevelopmentTemperature';
import { FILM_RECIPROCITY_FAILURE_CALCULATOR_TOOL } from './tool/filmReciprocityFailureCalculator';
import { REVERB_DECAY_TIME_CALCULATOR_TOOL } from './tool/reverbDecayTimeCalculator';

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
  DEPTH_OF_FIELD_CALCULATOR_TOOL,
  VIDEO_MERGER_TOOL,
  AUDIO_DELAY_DISTANCE_CALCULATOR_TOOL,
  EQUIVALENT_EXPOSURE_CALCULATOR_TOOL,
  ADAMS_ZONE_SYSTEM_TOOL,
  FILM_DEVELOPMENT_TEMPERATURE_TOOL,
  FILM_RECIPROCITY_FAILURE_CALCULATOR_TOOL,
  REVERB_DECAY_TIME_CALCULATOR_TOOL,
];

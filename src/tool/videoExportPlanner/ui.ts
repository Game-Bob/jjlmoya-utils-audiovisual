export interface VideoExportPlannerUI extends Record<string, string> {
  workflowHint: string;
  presetLabel: string;
  presetYoutube: string;
  presetSocial: string;
  presetMaster: string;
  sourceSettingsTitle: string;
  resolutionLabel: string;
  frameRateLabel: string;
  codecLabel: string;
  durationLabel: string;
  minutesUnit: string;
  videoBitrateLabel: string;
  audioBitrateLabel: string;
  overheadLabel: string;
  selectedOutputTitle: string;
  estimatedFileSizeLabel: string;
  totalDataRateLabel: string;
  videoDataLabel: string;
  audioDataLabel: string;
  containerOverheadLabel: string;
  dataReelLabel: string;
  comparisonTitle: string;
  codecColumn: string;
  suggestedVideoColumn: string;
  estimatedSizeColumn: string;
  planningNote: string;
  statusReady: string;
  statusCheck: string;
  warningDuration: string;
  warningVideoBitrate: string;
  warningAudioBitrate: string;
  warningOverhead: string;
  resolution480: string;
  resolution720: string;
  resolution1080: string;
  resolution1440: string;
  resolution2160: string;
  codecH264: string;
  codecH265: string;
  codecAv1: string;
  faqTitle: string;
  bibliographyTitle: string;
}

export const DEFAULT_UI_EN: VideoExportPlannerUI = {
  workflowHint: 'Set the picture, soundtrack and duration. The reel below turns those choices into an export estimate you can take into your encoder.',
  presetLabel: 'Start with a delivery preset',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Social 1080p 60',
  presetMaster: '4K handoff',
  sourceSettingsTitle: 'Export settings',
  resolutionLabel: 'Frame size',
  frameRateLabel: 'Frame rate',
  codecLabel: 'Video codec',
  durationLabel: 'Program duration',
  minutesUnit: 'minutes',
  videoBitrateLabel: 'Video bitrate',
  audioBitrateLabel: 'Audio bitrate',
  overheadLabel: 'Container overhead',
  selectedOutputTitle: 'Selected export',
  estimatedFileSizeLabel: 'Estimated file size',
  totalDataRateLabel: 'Total data rate',
  videoDataLabel: 'Video stream',
  audioDataLabel: 'Audio stream',
  containerOverheadLabel: 'Container overhead',
  dataReelLabel: 'A data reel showing the selected export over time',
  comparisonTitle: 'Codec starting points',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Suggested video rate',
  estimatedSizeColumn: 'Estimated size',
  planningNote: 'Codec rows are planning heuristics, not a promise of equal quality. VBR complexity, platform recompression and the chosen encoder can change the final result.',
  statusReady: 'Ready to estimate',
  statusCheck: 'Check the highlighted assumptions',
  warningDuration: 'Add a duration greater than zero to estimate the file.',
  warningVideoBitrate: 'The video bitrate is unusually low for this frame size and frame rate. Check for visible compression before delivery.',
  warningAudioBitrate: 'The audio bitrate is above a common delivery range. Confirm that the extra size is intentional.',
  warningOverhead: 'Container overhead is high for a planning estimate. Verify the muxer and metadata before reserving storage.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Video export planner questions',
  bibliographyTitle: 'Sources',
};

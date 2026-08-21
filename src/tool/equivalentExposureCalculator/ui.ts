export interface EquivalentExposureUI {
  title: string;
  subtitle: string;
  baseSettingsTitle: string;
  targetSettingsTitle: string;
  lockModeLabel: string;
  isoLabel: string;
  apertureLabel: string;
  shutterLabel: string;
  lockIsoOption: string;
  lockApertureOption: string;
  lockShutterOption: string;
  presetsTitle: string;
  presetSunny16: string;
  presetOvercast: string;
  presetIndoor: string;
  presetNight: string;
  targetEvLabel: string;
}

export const DEFAULT_UI_EN: EquivalentExposureUI = {
  title: 'Equivalent Exposure Calculator',
  subtitle: 'Calculate equivalent camera exposure settings across Aperture, Shutter Speed, and ISO to maintain consistent EV with creative control.',
  baseSettingsTitle: 'Base Exposure Setting',
  targetSettingsTitle: 'Target Equivalent Setting',
  lockModeLabel: 'Calculate Automatically',
  isoLabel: 'ISO Sensitivity',
  apertureLabel: 'Aperture (f-stop)',
  shutterLabel: 'Shutter Speed',
  lockIsoOption: 'Calculate ISO (Keep Aperture & Shutter)',
  lockApertureOption: 'Calculate Aperture (Keep ISO & Shutter)',
  lockShutterOption: 'Calculate Shutter (Keep ISO & Aperture)',
  presetsTitle: 'Quick Presets',
  presetSunny16: 'Sunny 16 (Daylight)',
  presetOvercast: 'Overcast Day',
  presetIndoor: 'Indoor Ambient Light',
  presetNight: 'Night Street Photography',
  targetEvLabel: 'Target EV',
};

export interface AudioDelayUI {
  title: string;
  subtitle: string;
  unitSystemLabel: string;
  unitMetric: string;
  unitImperial: string;
  distanceLabel: string;
  temperatureLabel: string;
  humidityLabel: string;
  sampleRateLabel: string;
  presetsTitle: string;
  presetSummerFestival: string;
  presetIndoorConcert: string;
  presetTheater: string;
  presetWinterOutdoor: string;
  resultDelayMs: string;
  resultSamples: string;
  resultSpeed: string;
  resultSplLoss: string;
  phaseStatusLabel: string;
  statusDirectZone: string;
  statusHaasZone: string;
  statusEchoZone: string;
  statusExtremeZone: string;
  advicePhaseAligned: string;
  adviceMinorHaas: string;
  adviceHaasDelayNeeded: string;
  adviceCriticalDelayNeeded: string;
  unitMeters: string;
  unitFeet: string;
  unitCelsius: string;
  unitFahrenheit: string;
  mainSpeakerLabel: string;
  delaySpeakerLabel: string;
  audienceLabel: string;
  haasZoneLegend: string;
}

export const DEFAULT_UI_EN: AudioDelayUI = {
  title: 'Audio Delay by Distance and Temperature Calculator',
  subtitle: 'Calculate sound propagation delay, acoustic phase offset, sample count, and SPL attenuation for PA delay towers.',
  unitSystemLabel: 'Unit System',
  unitMetric: 'Metric (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Distance to Delay Speaker',
  temperatureLabel: 'Ambient Air Temperature',
  humidityLabel: 'Relative Humidity',
  sampleRateLabel: 'Console Sample Rate',
  presetsTitle: 'Quick Scene Presets',
  presetSummerFestival: 'Summer Festival (35°C, 40m)',
  presetIndoorConcert: 'Indoor Hall (20°C, 25m)',
  presetTheater: 'Acoustic Theater (22°C, 15m)',
  presetWinterOutdoor: 'Winter Open Air (5°C, 50m)',
  resultDelayMs: 'Delay Time',
  resultSamples: 'Digital Samples',
  resultSpeed: 'Speed of Sound',
  resultSplLoss: 'SPL Loss',
  phaseStatusLabel: 'Acoustic Phase Alignment Status',
  statusDirectZone: 'Direct Wavefront Sync',
  statusHaasZone: 'Haas Precedence Zone',
  statusEchoZone: 'Perceptible Echo Zone',
  statusExtremeZone: 'Severe Delay Drift',
  advicePhaseAligned: 'Signals are acoustically synchronous within 5ms. Minimal delay processing required.',
  adviceMinorHaas: 'Sound arrives within Haas zone (5-35ms). Natural localization remains at main stage.',
  adviceHaasDelayNeeded: 'Delay tower requires exact time offset to prevent distinct echo perception.',
  adviceCriticalDelayNeeded: 'High delay offset. Apply precise sample delay to avoid complete comb filtering.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Main Stage PA',
  delaySpeakerLabel: 'Delay Tower',
  audienceLabel: 'Audience Zone',
  haasZoneLegend: 'Haas Zone (5-35ms)',
};

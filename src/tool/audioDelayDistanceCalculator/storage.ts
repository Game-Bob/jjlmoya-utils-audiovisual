export interface StoredAudioDelayConfig {
  distanceMeters: number;
  temperatureCelsius: number;
  sampleRateHz: number;
  humidityPercent: number;
  unitDistance: 'm' | 'ft';
  unitTemp: 'C' | 'F';
}

const STORAGE_KEY = 'audio_delay_distance_config_v1';

export function loadAudioDelayState(): StoredAudioDelayConfig | null {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) return null;
    return JSON.parse(data) as StoredAudioDelayConfig;
  } catch {
    return null;
  }
}

export function saveAudioDelayState(config: StoredAudioDelayConfig): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(config));
  } catch {}
}

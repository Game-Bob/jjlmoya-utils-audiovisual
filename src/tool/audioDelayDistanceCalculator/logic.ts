export interface AudioDelayParams {
  distanceMeters: number;
  temperatureCelsius: number;
  sampleRateHz: number;
  humidityPercent?: number;
}

export interface AudioDelayResults {
  speedOfSoundMs: number;
  delayMs: number;
  samples: number;
  splLossDb: number;
}

export function calculateSpeedOfSound(temperatureCelsius: number, humidityPercent = 50): number {
  const speedDry = 331.3 * Math.sqrt(1 + temperatureCelsius / 273.15);
  const humidityFactor = 1 + 0.0015 * (Math.max(0, Math.min(100, humidityPercent)) / 100);
  const speed = speedDry * humidityFactor;
  return Math.round(speed * 100) / 100;
}

export function calculateDelayTimeMs(distanceMeters: number, speedOfSoundMs: number): number {
  if (speedOfSoundMs <= 0 || distanceMeters < 0) return 0;
  const delayMs = (distanceMeters / speedOfSoundMs) * 1000;
  return Math.round(delayMs * 100) / 100;
}

export function calculateAudioSamples(delayMs: number, sampleRateHz: number): number {
  if (delayMs < 0 || sampleRateHz <= 0) return 0;
  return Math.round((delayMs / 1000) * sampleRateHz);
}

export function calculateSplLossDb(distanceMeters: number): number {
  if (distanceMeters <= 1) return 0;
  const loss = 20 * Math.log10(distanceMeters);
  return Math.round(loss * 10) / 10;
}

export function celsiusToFahrenheit(c: number): number {
  return Math.round(((c * 9) / 5 + 32) * 10) / 10;
}

export function fahrenheitToCelsius(f: number): number {
  return Math.round((((f - 32) * 5) / 9) * 10) / 10;
}

export function metersToFeet(m: number): number {
  return Math.round(m * 3.28084 * 10) / 10;
}

export function feetToMeters(ft: number): number {
  return Math.round((ft / 3.28084) * 10) / 10;
}

export function computeAudioDelay(params: AudioDelayParams): AudioDelayResults {
  const speed = calculateSpeedOfSound(params.temperatureCelsius, params.humidityPercent ?? 50);
  const delayMs = calculateDelayTimeMs(params.distanceMeters, speed);
  const samples = calculateAudioSamples(delayMs, params.sampleRateHz);
  const splLossDb = calculateSplLossDb(params.distanceMeters);

  return {
    speedOfSoundMs: speed,
    delayMs,
    samples,
    splLossDb,
  };
}

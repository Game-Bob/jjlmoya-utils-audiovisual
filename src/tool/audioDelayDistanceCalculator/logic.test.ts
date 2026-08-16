import { describe, it, expect } from 'vitest';
import {
  calculateSpeedOfSound,
  calculateDelayTimeMs,
  calculateAudioSamples,
  calculateSplLossDb,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  metersToFeet,
  feetToMeters,
  computeAudioDelay,
} from './logic';

describe('Audio Delay Logic', () => {
  it('calculates speed of sound accurately at 20C', () => {
    const speed = calculateSpeedOfSound(20);
    expect(speed).toBeCloseTo(343.2, 0);
  });

  it('calculates delay time in ms correctly for 34.3m at ~343m/s', () => {
    const speed = 343.2;
    const delay = calculateDelayTimeMs(34.32, speed);
    expect(delay).toBeCloseTo(100, 0);
  });

  it('calculates audio samples for 100ms at 48000Hz', () => {
    const samples = calculateAudioSamples(100, 48000);
    expect(samples).toBe(4800);
  });

  it('calculates SPL attenuation loss at 10m', () => {
    const loss = calculateSplLossDb(10);
    expect(loss).toBe(20);
  });

  it('converts temperature and distance units correctly', () => {
    expect(celsiusToFahrenheit(20)).toBe(68);
    expect(fahrenheitToCelsius(68)).toBe(20);
    expect(metersToFeet(10)).toBe(32.8);
    expect(feetToMeters(32.8)).toBe(10);
  });

  it('computes full audio delay calculation', () => {
    const result = computeAudioDelay({
      distanceMeters: 20,
      temperatureCelsius: 20,
      sampleRateHz: 48000,
    });
    expect(result.speedOfSoundMs).toBeCloseTo(343.2, 0);
    expect(result.delayMs).toBeGreaterThan(0);
    expect(result.samples).toBeGreaterThan(0);
    expect(result.splLossDb).toBeGreaterThan(0);
  });
});

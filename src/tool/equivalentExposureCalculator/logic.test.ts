import { describe, it, expect } from 'vitest';
import {
  calculateEV,
  calculateEquivalentAperture,
  calculateEquivalentShutter,
  calculateEquivalentISO,
  formatShutter,
  getDepthOfFieldEffect,
  getMotionEffect,
  getNoiseEffect,
  findClosestValue,
} from './logic';

describe('Equivalent Exposure Logic', () => {
  it('calculates standard EV at ISO 100 correctly', () => {
    expect(calculateEV(100, 8, 1 / 125)).toBe(13);
    expect(calculateEV(100, 2.8, 1 / 1000)).toBe(13);
  });

  it('calculates EV shift with ISO correctly', () => {
    expect(calculateEV(400, 8, 1 / 125)).toBe(11);
    expect(calculateEV(400, 16, 1 / 125)).toBe(13);
  });

  it('calculates equivalent aperture correctly', () => {
    const ev = calculateEV(100, 8, 1 / 125);
    const equivAperture = calculateEquivalentAperture(ev, 100, 1 / 500);
    expect(equivAperture).toBe(4);
  });

  it('calculates equivalent shutter correctly', () => {
    const ev = calculateEV(100, 8, 1 / 125);
    const equivShutter = calculateEquivalentShutter(ev, 100, 4);
    expect(formatShutter(equivShutter)).toBe('1/500s');
  });

  it('calculates equivalent ISO correctly', () => {
    const ev = calculateEV(100, 8, 1 / 125);
    const equivISO = calculateEquivalentISO(ev, 11, 1 / 250);
    expect(equivISO).toBe(400);
  });

  it('formats shutter speed correctly', () => {
    expect(formatShutter(1 / 250)).toBe('1/250s');
    expect(formatShutter(2)).toBe('2s');
  });

  it('evaluates creative effects appropriately', () => {
    expect(getDepthOfFieldEffect(1.4)).toContain('Shallow');
    expect(getMotionEffect(1 / 2000)).toContain('Freeze');
    expect(getNoiseEffect(100)).toContain('Pristine');
  });

  it('finds closest value safely', () => {
    expect(findClosestValue(105, [100, 200, 400])).toBe(100);
  });
});

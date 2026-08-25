import { describe, expect, it } from 'vitest';
import { adjustDevelopmentTime, calculateDevelopment, getEntriesForDeveloper, getEntriesForFilm, getEntry, roundToQuarterMinute, toCelsius, toFahrenheit } from './logic';

describe('film development temperature logic', () => {
  it('keeps the documented base time at 20 °C', () => {
    expect(adjustDevelopmentTime(9, 20)).toBe(9);
  });

  it('shortens time as temperature rises and lengthens it as temperature falls', () => {
    expect(adjustDevelopmentTime(10, 23)).toBe(7.25);
    expect(adjustDevelopmentTime(10, 17)).toBe(13.25);
  });

  it('rounds to practical quarter minute increments', () => {
    expect(roundToQuarterMinute(4.37)).toBe(4.25);
    expect(roundToQuarterMinute(4.39)).toBe(4.5);
  });

  it('converts display units without changing the physical temperature', () => {
    expect(toFahrenheit(20)).toBe(68);
    expect(toCelsius(68)).toBe(20);
  });

  it('filters the documented table without inventing combinations', () => {
    expect(getEntriesForFilm('FP4 Plus').length).toBeGreaterThan(1);
    expect(getEntriesForDeveloper('FP4 Plus', 'ILFOTEC DD-X')).toEqual([getEntry('fp4-ddx-1-4')]);
  });

  it('creates a bounded reference band around the current temperature', () => {
    const result = calculateDevelopment({ entryId: 'hp5-ddx-1-4', temperatureC: 20 });
    expect(result.rows.map((row) => row.temperatureC)).toEqual([15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]);
    expect(result.rows.find((row) => row.isCurrent)?.minutes).toBe(9);
  });

  it('flags short development times', () => {
    expect(calculateDevelopment({ entryId: 'fp4-ilfosol-1-9', temperatureC: 20 }).isShort).toBe(true);
  });
});

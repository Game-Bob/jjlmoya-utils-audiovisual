import { describe, expect, it } from 'vitest';
import { calculateZoneResult, formatStops, getZone } from './logic';

describe('Adams Zone System logic', () => {
  it('returns the zone data for a bounded index', () => {
    expect(getZone(3).name).toBe('Textured shadow');
    expect(getZone(-2).index).toBe(0);
    expect(getZone(99).index).toBe(9);
  });

  it('calculates meter compensation from middle gray', () => {
    const result = calculateZoneResult({ measuredZone: 3, targetZone: 7, development: 'normal' });
    expect(result.exposureShiftStops).toBe(2);
    expect(result.tonalDistanceStops).toBe(4);
    expect(result.exposureDirection).toBe('increase');
    expect(result.recommendedDevelopment).toBe('minus');
  });

  it('identifies a shadow placement and a neutral placement', () => {
    const shadow = calculateZoneResult({ measuredZone: 2, targetZone: 2, development: 'plus' });
    const neutral = calculateZoneResult({ measuredZone: 5, targetZone: 5, development: 'normal' });
    expect(shadow.developmentFit).toBe('open-shadows');
    expect(shadow.exposureDirection).toBe('decrease');
    expect(neutral.exposureDirection).toBe('hold');
    expect(neutral.developmentFit).toBe('balanced');
  });

  it('formats positive, negative, and zero stop changes', () => {
    expect(formatStops(2)).toBe('+2 stops');
    expect(formatStops(-1)).toBe('-1 stop');
    expect(formatStops(0)).toBe('0 stops');
  });
});


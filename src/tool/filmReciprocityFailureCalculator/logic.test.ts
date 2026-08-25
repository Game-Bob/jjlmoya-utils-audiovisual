import { describe, expect, it } from 'vitest';
import { calculateReciprocity, findFilmProfile } from './logic';

describe('film reciprocity failure logic', () => {
  it('leaves one second or less unchanged', () => {
    expect(calculateReciprocity({ meteredSeconds: 1, factor: 1.31 })).toMatchObject({ correctedSeconds: 1, addedSeconds: 0, needsCorrection: false });
  });

  it('applies the manufacturer power equation', () => {
    const result = calculateReciprocity({ meteredSeconds: 10, factor: 1.31 });
    expect(result.correctedSeconds).toBeCloseTo(20.417, 2);
    expect(result.correctionStops).toBeCloseTo(1.03, 2);
    expect(result.displaySeconds).toBe(20);
  });

  it('clamps invalid input to a usable exposure', () => {
    expect(calculateReciprocity({ meteredSeconds: -4, factor: 0.2 }).meteredSeconds).toBe(0.1);
    expect(calculateReciprocity({ meteredSeconds: 4, factor: 0.2 }).factor).toBe(1);
  });

  it('falls back to the HP5 Plus profile', () => {
    expect(findFilmProfile('missing').id).toBe('hp5-plus');
  });
});

import { describe, expect, it } from 'vitest';
import { calculateReverb } from './logic';

describe('reverb decay time calculation', () => {
  it('calculates Sabine RT60 from volume and equivalent absorption', () => {
    const result = calculateReverb({ volumeM3: 120, absorptionSabins: 24, bpm: 120, target: 'vocals' });
    expect(result.rt60).toBeCloseTo(0.8055, 4);
  });

  it('suggests a quarter of an eighth-note beat within musical limits', () => {
    const result = calculateReverb({ volumeM3: 120, absorptionSabins: 24, bpm: 120, target: 'vocals' });
    expect(result.preDelayMs).toBeCloseTo(62.5, 4);
  });

  it('reports whether the decay is below, inside or above the target window', () => {
    expect(calculateReverb({ volumeM3: 100, absorptionSabins: 100, bpm: 100, target: 'speech' }).status).toBe('too-dry');
    expect(calculateReverb({ volumeM3: 100, absorptionSabins: 21, bpm: 100, target: 'speech' }).status).toBe('on-target');
    expect(calculateReverb({ volumeM3: 100, absorptionSabins: 1, bpm: 100, target: 'speech' }).status).toBe('too-wet');
  });

  it('calculates the absorption needed for the middle of the target window', () => {
    const result = calculateReverb({ volumeM3: 120, absorptionSabins: 24, bpm: 120, target: 'vocals' });
    expect(result.targetAbsorptionSabins).toBeCloseTo(17.5745455, 5);
    expect(result.absorptionDeltaSabins).toBeCloseTo(-6.4254545, 5);
  });
});

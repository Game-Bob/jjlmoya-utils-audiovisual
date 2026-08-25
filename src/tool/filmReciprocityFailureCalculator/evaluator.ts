import type { ReciprocityResult } from './logic';

export type ExposureState = 'neutral' | 'correct' | 'long';

export interface ExposureEvaluation {
  state: ExposureState;
  badge: string;
}

export function evaluateExposure(result: ReciprocityResult, labels: Record<ExposureState, string>): ExposureEvaluation {
  if (!result.needsCorrection) return { state: 'neutral', badge: labels.neutral };
  if (result.meteredSeconds >= 60) return { state: 'long', badge: labels.long };
  return { state: 'correct', badge: labels.correct };
}

export interface DelayEvaluation {
  statusKey: 'directZone' | 'haasZone' | 'echoZone' | 'extremeZone';
  phaseAdviceKey: 'phaseAligned' | 'minorHaas' | 'haasDelayNeeded' | 'criticalDelayNeeded';
  severity: 'info' | 'success' | 'warning' | 'error';
}

export function evaluateAudioDelay(delayMs: number): DelayEvaluation {
  if (delayMs <= 5) {
    return {
      statusKey: 'directZone',
      phaseAdviceKey: 'phaseAligned',
      severity: 'success',
    };
  }
  if (delayMs <= 35) {
    return {
      statusKey: 'haasZone',
      phaseAdviceKey: 'minorHaas',
      severity: 'info',
    };
  }
  if (delayMs <= 100) {
    return {
      statusKey: 'echoZone',
      phaseAdviceKey: 'haasDelayNeeded',
      severity: 'warning',
    };
  }
  return {
    statusKey: 'extremeZone',
    phaseAdviceKey: 'criticalDelayNeeded',
    severity: 'error',
  };
}

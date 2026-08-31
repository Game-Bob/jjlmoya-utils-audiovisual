export interface ReverbDecayUI {
  title: string;
  subtitle: string;
  volumeLabel: string;
  absorptionLabel: string;
  bpmLabel: string;
  targetLabel: string;
  volumeHint: string;
  absorptionHint: string;
  bpmHint: string;
  targetSpeech: string;
  targetPodcast: string;
  targetVocals: string;
  targetAcoustic: string;
  targetOrchestral: string;
  targetAmbient: string;
  resultRt60: string;
  resultTarget: string;
  resultPreDelay: string;
  resultAbsorption: string;
  resultReading: string;
  statusTooDry: string;
  statusOnTarget: string;
  statusTooWet: string;
  adviceTooDry: string;
  adviceOnTarget: string;
  adviceTooWet: string;
  curveTitle: string;
  curveDrop: string;
  curveSeconds: string;
  formulaLabel: string;
  assumptionLabel: string;
  targetRangeTemplate: string;
  resetLabel: string;
  unitVolume: string;
  unitSabins: string;
  unitVolumeImperial: string;
  unitSabinsImperial: string;
  unitSystemLabel: string;
  unitMetric: string;
  unitImperial: string;
  unitBpm: string;
  unitSeconds: string;
  unitMilliseconds: string;
}

export const DEFAULT_UI_EN: ReverbDecayUI = {
  title: 'Reverb Decay Time Calculator',
  subtitle: 'Shape the room tail before you reach for a reverb plugin.',
  volumeLabel: 'Room volume',
  absorptionLabel: 'Estimated equivalent absorption',
  bpmLabel: 'Tempo',
  targetLabel: 'Content target',
  volumeHint: 'Enclosed air volume, not floor area.',
  absorptionHint: 'Total absorption in square-metre sabins.',
  bpmHint: 'Used to place a musical pre-delay.',
  targetSpeech: 'Speech and dialogue',
  targetPodcast: 'Podcast and voiceover',
  targetVocals: 'Lead vocals',
  targetAcoustic: 'Acoustic music',
  targetOrchestral: 'Orchestral music',
  targetAmbient: 'Ambient wash',
  resultRt60: 'Estimated RT60',
  resultTarget: 'Working window',
  resultPreDelay: 'Suggested pre-delay',
  resultAbsorption: 'Absorption for target',
  resultReading: 'Reading',
  statusTooDry: 'Short tail',
  statusOnTarget: 'Inside target',
  statusTooWet: 'Long tail',
  adviceTooDry: 'The room will clear before the selected target. Add less absorption or let the effect provide the missing tail.',
  adviceOnTarget: 'The estimated tail sits inside the selected working window. Listen for clarity at the intended distance before committing.',
  adviceTooWet: 'The room will ring beyond the selected target. More absorption, a shorter decay, or a lower send can bring definition back.',
  curveTitle: 'The room tail',
  curveDrop: '60 dB drop',
  curveSeconds: 'seconds',
  formulaLabel: 'Sabine estimate: RT60 = 0.1611 × volume ÷ absorption.',
  assumptionLabel: 'A planning estimate, not a measured room response. Absorption changes with frequency, placement and occupancy.',
  targetRangeTemplate: 'Working window: __MIN__ to __MAX__ s',
  resetLabel: 'Reset example',
  unitVolume: 'm³',
  unitSabins: 'm² sabin',
  unitVolumeImperial: 'ft³',
  unitSabinsImperial: 'ft² sabin',
  unitSystemLabel: 'Measurement system',
  unitMetric: 'Metric',
  unitImperial: 'Imperial',
  unitBpm: 'BPM',
  unitSeconds: 's',
  unitMilliseconds: 'ms',
};

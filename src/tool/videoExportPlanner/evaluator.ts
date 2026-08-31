import type { ExportInputs, ExportResult } from './logic';

export interface ExportEvaluation { tone: 'ready' | 'check'; warnings: string[]; }

export function evaluateExport(inputs: ExportInputs, result: ExportResult, messages: Record<string, string>): ExportEvaluation {
  const warnings: string[] = [];
  if (inputs.durationMinutes <= 0) warnings.push(messages.warningDuration);
  if (inputs.videoBitrateMbps > 0 && inputs.videoBitrateMbps < result.referenceVideoBitrateMbps * 0.5) warnings.push(messages.warningVideoBitrate);
  if (inputs.audioBitrateKbps > 512) warnings.push(messages.warningAudioBitrate);
  if (inputs.overheadPercent > 15) warnings.push(messages.warningOverhead);
  return { tone: warnings.length > 0 ? 'check' : 'ready', warnings };
}

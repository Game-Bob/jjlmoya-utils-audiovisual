import type { AudioDelayResults } from './logic';
import type { DelayEvaluation } from './evaluator';
import type { AudioDelayUI } from './ui';

export function updateResultCard(el: HTMLElement | null, text: string): void {
  if (el) el.textContent = text;
}

export function updateStatusBadge(
  badgeEl: HTMLElement | null,
  text: string,
  severity: string,
): void {
  if (!badgeEl) return;
  badgeEl.textContent = text;
  badgeEl.setAttribute('class', `audio-delay-distance-calculator-badge audio-delay-distance-calculator-badge-${severity}`);
}

export function updateSvgStage(
  svgEl: SVGSVGElement | null,
  results: AudioDelayResults,
  _ui: AudioDelayUI,
): void {
  if (!svgEl) return;
  const distanceRatio = Math.min(1, Math.max(0.1, results.delayMs / 150));
  const wavePosition = 120 + distanceRatio * 320;
  
  const wave1 = svgEl.querySelector('.audio-delay-distance-calculator-wave-1');
  const wave2 = svgEl.querySelector('.audio-delay-distance-calculator-wave-2');
  const wave3 = svgEl.querySelector('.audio-delay-distance-calculator-wave-3');
  
  if (wave1) wave1.setAttribute('r', String(Math.round(50 + distanceRatio * 70)));
  if (wave2) wave2.setAttribute('r', String(Math.round(100 + distanceRatio * 130)));
  if (wave3) wave3.setAttribute('r', String(Math.round(150 + distanceRatio * 190)));

  const delaySpeaker = svgEl.querySelector('.audio-delay-distance-calculator-delay-spk');
  if (delaySpeaker) {
    delaySpeaker.setAttribute('transform', `translate(${Math.round(wavePosition)}, 0)`);
  }
}

export function renderAudioDelayOutput(
  container: HTMLElement,
  results: AudioDelayResults,
  evaluation: DelayEvaluation,
  ui: AudioDelayUI,
): void {
  const delayMsEl = container.querySelector<HTMLElement>('#audio-delay-val-ms');
  const samplesEl = container.querySelector<HTMLElement>('#audio-delay-val-samples');
  const speedEl = container.querySelector<HTMLElement>('#audio-delay-val-speed');
  const splEl = container.querySelector<HTMLElement>('#audio-delay-val-spl');
  const badgeEl = container.querySelector<HTMLElement>('#audio-delay-status-badge');
  const adviceEl = container.querySelector<HTMLElement>('#audio-delay-advice-text');

  const unitSamplesLabel = ui.resultSamples ? ui.resultSamples.toLowerCase() : 'samples';

  updateResultCard(delayMsEl, `${results.delayMs} ms`);
  updateResultCard(samplesEl, `${results.samples.toLocaleString()} ${unitSamplesLabel}`);
  updateResultCard(speedEl, `${results.speedOfSoundMs} m/s`);
  updateResultCard(splEl, `-${results.splLossDb} dB`);

  const statusText = ui[evaluation.statusKey as keyof AudioDelayUI] || 'Direct Wavefront Sync';
  const adviceText = ui[evaluation.phaseAdviceKey as keyof AudioDelayUI] || 'Signals are acoustically synchronous within 5ms. Minimal delay processing required.';
  
  updateStatusBadge(badgeEl, statusText, evaluation.severity);
  updateResultCard(adviceEl, adviceText);
}

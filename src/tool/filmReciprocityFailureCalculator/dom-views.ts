import type { FilmProfile, ReciprocityResult } from './logic';
import type { ExposureEvaluation } from './evaluator';

export function formatDuration(seconds: number): string {
  if (seconds < 60) return `${trimNumber(seconds)} s`;
  const minutes = Math.floor(seconds / 60);
  const remainder = Math.round(seconds % 60);
  if (remainder === 0) return `${minutes} min`;
  return `${minutes} min ${remainder} s`;
}

export function trimNumber(value: number): string {
  return value.toFixed(1).replace(/\.0$/, '');
}

export function renderFilmOptions(options: HTMLElement, films: FilmProfile[], selectedId: string): void {
  options.innerHTML = films.map((film) => (
    `<button class="film-option${film.id === selectedId ? ' is-selected' : ''}" type="button" role="option" aria-selected="${film.id === selectedId}" data-film-id="${film.id}"><strong>${film.name}</strong><small>ISO ${film.iso} · P ${film.factor.toFixed(2)}</small></button>`
  )).join('');
}

export function renderResult(view: HTMLElement, result: ReciprocityResult, evaluation: ExposureEvaluation, ui: Record<string, string>): void {
  const corrected = formatDuration(result.displaySeconds);
  const added = formatDuration(Math.max(0, Math.round(result.addedSeconds)));
  const stops = `${result.correctionStops.toFixed(2)} stops`;
  view.querySelector<HTMLElement>('[data-corrected-time]')!.textContent = corrected;
  view.querySelector<HTMLElement>('[data-added-time]')!.textContent = result.needsCorrection ? `+ ${added}` : '0 s';
  view.querySelector<HTMLElement>('[data-correction-stops]')!.textContent = result.needsCorrection ? stops : '0 stops';
  view.querySelector<HTMLElement>('[data-factor]')!.textContent = `P ${result.factor.toFixed(2)}`;
  const badge = view.querySelector<HTMLElement>('[data-state-badge]')!;
  badge.textContent = evaluation.badge;
  badge.dataset.state = evaluation.state;
  view.querySelector<HTMLElement>('[data-meter-time]')!.textContent = formatDuration(result.meteredSeconds);
  view.querySelector<HTMLElement>('[data-film-time]')!.textContent = corrected;
  view.querySelector<HTMLElement>('[data-result-note]')!.textContent = result.needsCorrection ? ui.correctionNeeded : ui.noCorrection;
}

export function renderExposureScene(scene: SVGSVGElement, result: ReciprocityResult, ui: Record<string, string>): void {
  const width = 720;
  const height = 220;
  const meterWidth = 160;
  const correctedWidth = Math.min(470, Math.max(170, meterWidth * Math.sqrt(result.correctedSeconds / result.meteredSeconds)));
  const filmX = 210;
  const meterX = 28;
  const filmEnd = filmX + correctedWidth;
  scene.innerHTML = `<title>${ui.exposurePathLabel}</title><desc>${ui.exposurePathText}</desc><rect class="scene-paper" x="0" y="0" width="${width}" height="${height}" rx="18"/><path class="scene-line" d="M${meterX} 122 C170 122 172 82 ${filmX} 82 S430 46 ${filmEnd} 82"/><rect class="scene-meter" x="${meterX}" y="92" width="${meterWidth}" height="60" rx="8"/><rect class="scene-film" x="${filmX}" y="52" width="${correctedWidth}" height="60" rx="8"/><path class="scene-perfs" d="${perforations(filmX, filmEnd)}"/><circle class="scene-dot scene-dot-meter" cx="${meterX + meterWidth / 2}" cy="122" r="7"/><circle class="scene-dot scene-dot-film" cx="${filmX + correctedWidth - 24}" cy="82" r="7"/><text class="scene-label" x="${meterX}" y="181">${ui.meterTimeLabel}</text><text class="scene-label scene-label-film" x="${filmX}" y="37">${ui.filmTimeLabel}</text>`;
}

function perforations(start: number, end: number): string {
  const holes: string[] = [];
  for (let x = start + 14; x < end - 8; x += 28) holes.push(`M${x} 61 h10 v8 h-10 z M${x} 95 h10 v8 h-10 z`);
  return holes.join(' ');
}

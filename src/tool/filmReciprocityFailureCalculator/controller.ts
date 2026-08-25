import { evaluateExposure } from './evaluator';
import { renderExposureScene, renderFilmOptions, renderResult } from './dom-views';
import { calculateReciprocity, DEFAULT_FILM_ID, DEFAULT_METERED_SECONDS, FILM_PROFILES, findFilmProfile } from './logic';
import { readStoredState, writeStoredState } from './storage';

interface ControllerUI extends Record<string, string> {
  noCorrection: string;
  correctionNeeded: string;
  longExposure: string;
}

export function mountFilmReciprocityTool(root: HTMLElement, ui: ControllerUI): void {
  const stored = readStoredState({ filmId: DEFAULT_FILM_ID, meteredSeconds: DEFAULT_METERED_SECONDS });
  const options = root.querySelector<HTMLElement>('[data-film-options]')!;
  const timeInput = root.querySelector<HTMLInputElement>('[data-metered-input]')!;
  const timeRange = root.querySelector<HTMLInputElement>('[data-metered-range]')!;
  const presetButtons = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-preset]'));
  const resetButton = root.querySelector<HTMLButtonElement>('[data-reset]')!;
  let filmId = stored.filmId;
  let meteredSeconds = stored.meteredSeconds;

  renderFilmOptions(options, FILM_PROFILES, filmId);
  timeInput.value = String(meteredSeconds);
  timeRange.value = String(Math.min(300, Math.max(1, meteredSeconds)));
  update();

  options.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const option = target.closest<HTMLButtonElement>('[data-film-id]');
    if (!option) return;
    filmId = option.dataset.filmId ?? DEFAULT_FILM_ID;
    renderFilmOptions(options, FILM_PROFILES, filmId);
    update();
  });
  timeInput.addEventListener('input', () => {
    meteredSeconds = Number(timeInput.value) || 0.1;
    timeRange.value = String(Math.min(300, Math.max(1, meteredSeconds)));
    update();
  });
  timeRange.addEventListener('input', () => {
    meteredSeconds = Number(timeRange.value) || 1;
    timeInput.value = String(meteredSeconds);
    update();
  });
  presetButtons.forEach((button) => button.addEventListener('click', () => {
    meteredSeconds = Number(button.dataset.preset) || DEFAULT_METERED_SECONDS;
    timeInput.value = String(meteredSeconds);
    timeRange.value = String(Math.min(300, Math.max(1, meteredSeconds)));
    update();
  }));
  resetButton.addEventListener('click', () => {
    filmId = DEFAULT_FILM_ID;
    meteredSeconds = DEFAULT_METERED_SECONDS;
    timeInput.value = String(meteredSeconds);
    timeRange.value = String(meteredSeconds);
    renderFilmOptions(options, FILM_PROFILES, filmId);
    update();
  });

  function update(): void {
    const film = findFilmProfile(filmId);
    const result = calculateReciprocity({ meteredSeconds, factor: film.factor });
    const evaluation = evaluateExposure(result, { neutral: ui.noCorrection, correct: ui.correctionNeeded, long: ui.longExposure });
    renderResult(root, result, evaluation, ui);
    renderExposureScene(root.querySelector<SVGSVGElement>('[data-exposure-scene]')!, result, ui);
    writeStoredState({ filmId, meteredSeconds });
  }
}

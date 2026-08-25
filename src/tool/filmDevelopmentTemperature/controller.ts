import { calculateDevelopment, DEVELOPMENT_ENTRIES, getEntriesForDeveloper, getEntriesForFilm, getEntry, getTemperatureBounds, toCelsius, toFahrenheit, type CalculatorState, type UnitSystem } from './logic';
import { renderResult, renderSelectOptions } from './dom-views';
import { clearState, loadState, saveState } from './storage';
import type { FilmDevelopmentTemperatureUI } from './ui';

interface SelectParts {
  root: HTMLElement;
  trigger: HTMLButtonElement;
  menu: HTMLElement;
  label: HTMLElement;
}

const getParts = (root: HTMLElement, name: string): SelectParts => ({
  root: root.querySelector<HTMLElement>(`[data-select="${name}"]`) as HTMLElement,
  trigger: root.querySelector<HTMLButtonElement>(`[data-select-trigger="${name}"]`) as HTMLButtonElement,
  menu: root.querySelector<HTMLElement>(`[data-select-menu="${name}"]`) as HTMLElement,
  label: root.querySelector<HTMLElement>(`[data-select-label="${name}"]`) as HTMLElement,
});

const setSelectValue = (parts: SelectParts, value: string): void => {
  parts.label.textContent = value;
  parts.root.dataset.value = value;
  parts.menu.querySelectorAll('[role="option"]').forEach((option) => option.setAttribute('aria-selected', String(option.getAttribute('data-value') === value)));
};

const closeSelect = (parts: SelectParts): void => {
  parts.menu.hidden = true;
  parts.trigger.setAttribute('aria-expanded', 'false');
  parts.root.classList.remove('is-open');
};

const openSelect = (parts: SelectParts): void => {
  parts.menu.hidden = false;
  parts.trigger.setAttribute('aria-expanded', 'true');
  parts.root.classList.add('is-open');
};

const bindSelect = (parts: SelectParts, onChange: (value: string) => void): void => {
  parts.trigger.addEventListener('click', () => {
    if (parts.menu.hidden) openSelect(parts);
    else closeSelect(parts);
  });
  parts.trigger.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (parts.menu.hidden) openSelect(parts);
      else closeSelect(parts);
    }
    if (event.key === 'Escape') closeSelect(parts);
  });
  parts.menu.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const option = target.closest<HTMLElement>('[role="option"]');
    if (!option?.dataset.value) return;
    setSelectValue(parts, option.dataset.value);
    closeSelect(parts);
    onChange(option.dataset.value);
  });
};

const closeAllSelects = (selects: SelectParts[]): void => selects.forEach(closeSelect);

export const mountFilmDevelopmentTemperature = (root: HTMLElement, ui: FilmDevelopmentTemperatureUI): void => {
  const film = getParts(root, 'film');
  const developer = getParts(root, 'developer');
  const dilution = getParts(root, 'dilution');
  const temperatureInput = root.querySelector<HTMLInputElement>('[data-temperature-input]');
  const temperatureRange = root.querySelector<HTMLInputElement>('[data-temperature-range]');
  const reset = root.querySelector<HTMLButtonElement>('[data-reset]');
  const unitButtons = [...root.querySelectorAll<HTMLButtonElement>('[data-unit]')];
  const selects = [film, developer, dilution];
  const saved = loadState();
  const savedEntryExists = saved ? DEVELOPMENT_ENTRIES.some((entry) => entry.id === saved.entryId) : false;
  let state: CalculatorState = saved && savedEntryExists ? saved : { entryId: DEVELOPMENT_ENTRIES[0].id, temperatureC: 20 };
  let unitSystem: UnitSystem = saved?.unitSystem === 'imperial' ? 'imperial' : 'metric';

  const sync = (): void => {
    const result = calculateDevelopment(state);
    const bounds = getTemperatureBounds(unitSystem);
    const displayTemperature = unitSystem === 'imperial' ? toFahrenheit(result.temperatureC) : result.temperatureC;
    if (temperatureInput) {
      temperatureInput.min = String(bounds.min);
      temperatureInput.max = String(bounds.max);
      temperatureInput.step = String(bounds.step);
      temperatureInput.value = String(Number.isInteger(displayTemperature) ? displayTemperature : displayTemperature.toFixed(1));
    }
    if (temperatureRange) {
      temperatureRange.min = String(bounds.min);
      temperatureRange.max = String(bounds.max);
      temperatureRange.step = String(bounds.step);
      temperatureRange.value = String(displayTemperature);
    }
    root.dataset.unitSystem = unitSystem;
    unitButtons.forEach((button) => button.setAttribute('aria-pressed', String(button.dataset.unit === unitSystem)));
    setSelectValue(film, result.entry.film);
    setSelectValue(developer, result.entry.developer);
    setSelectValue(dilution, result.entry.dilution);
    renderResult(root, result, ui, unitSystem);
    saveState({ ...state, unitSystem });
  };

  const setEntry = (entryId: string): void => {
    state = { ...state, entryId };
    const entry = getEntry(entryId);
    developer.menu.innerHTML = renderSelectOptions(getEntriesForFilm(entry.film), 'developer');
    dilution.menu.innerHTML = renderSelectOptions(getEntriesForDeveloper(entry.film, entry.developer), 'dilution');
    sync();
  };

  film.menu.innerHTML = renderSelectOptions(DEVELOPMENT_ENTRIES, 'film');
  bindSelect(film, (value) => {
    const entry = getEntriesForFilm(value)[0];
    if (entry) setEntry(entry.id);
  });
  bindSelect(developer, (value) => {
    const entry = getEntriesForDeveloper(film.root.dataset.value ?? 'HP5 Plus', value)[0];
    if (entry) setEntry(entry.id);
  });
  bindSelect(dilution, (value) => {
    const entry = getEntriesForDeveloper(film.root.dataset.value ?? 'HP5 Plus', developer.root.dataset.value ?? '').find((candidate) => candidate.dilution === value);
    if (entry) setEntry(entry.id);
  });
  document.addEventListener('click', (event) => {
    const target = event.target;
    if (!(target instanceof Node)) return;
    if (selects.some((select) => select.root.contains(target))) return;
    closeAllSelects(selects);
  });
  const updateTemperature = (value: string): void => {
    const displayTemperature = Number(value);
    if (!Number.isFinite(displayTemperature)) return;
    const temperatureC = unitSystem === 'imperial' ? toCelsius(displayTemperature) : displayTemperature;
    state = { ...state, temperatureC: Math.min(25, Math.max(15, temperatureC)) };
    sync();
  };
  temperatureInput?.addEventListener('input', () => updateTemperature(temperatureInput.value));
  temperatureRange?.addEventListener('input', () => updateTemperature(temperatureRange.value));
  unitButtons.forEach((button) => button.addEventListener('click', () => {
    const requestedUnit = button.dataset.unit;
    if (requestedUnit !== 'metric' && requestedUnit !== 'imperial') return;
    unitSystem = requestedUnit;
    sync();
  }));
  reset?.addEventListener('click', () => {
    clearState();
    state = { entryId: DEVELOPMENT_ENTRIES[0].id, temperatureC: 20 };
    const entry = getEntry(state.entryId);
    developer.menu.innerHTML = renderSelectOptions(getEntriesForFilm(entry.film), 'developer');
    dilution.menu.innerHTML = renderSelectOptions(getEntriesForDeveloper(entry.film, entry.developer), 'dilution');
    sync();
  });
  const entry = getEntry(state.entryId);
  developer.menu.innerHTML = renderSelectOptions(getEntriesForFilm(entry.film), 'developer');
  dilution.menu.innerHTML = renderSelectOptions(getEntriesForDeveloper(entry.film, entry.developer), 'dilution');
  sync();
};

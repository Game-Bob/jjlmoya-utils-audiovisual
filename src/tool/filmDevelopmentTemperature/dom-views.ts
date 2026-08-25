import { getTemperatureUnit, toFahrenheit, type DevelopmentResult, type DevelopmentEntry, type UnitSystem } from './logic';
import type { FilmDevelopmentTemperatureUI } from './ui';
import { getResultWarning, getStatusLabel, getStatusTone } from './evaluator';

export const formatMinutes = (minutes: number, ui: FilmDevelopmentTemperatureUI): string => {
  const totalSeconds = Math.round(minutes * 60);
  const wholeMinutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;
  return `${wholeMinutes} ${ui.minutesLabel} ${String(seconds).padStart(2, '0')} ${ui.secondsLabel}`;
};

const formatTemperature = (temperatureC: number, unitSystem: UnitSystem): string => {
  const value = unitSystem === 'imperial' ? toFahrenheit(temperatureC) : temperatureC;
  return `${Number.isInteger(value) ? value : value.toFixed(1)} ${getTemperatureUnit(unitSystem)}`;
};

const formatDifference = (differenceC: number, unitSystem: UnitSystem): string => {
  if (differenceC === 0) return formatTemperature(20, unitSystem);
  const difference = unitSystem === 'imperial' ? differenceC * 1.8 : differenceC;
  return `${difference > 0 ? '+' : ''}${Number.isInteger(difference) ? difference : difference.toFixed(1)} ${getTemperatureUnit(unitSystem)}`;
};

export const renderSelectOptions = (entries: readonly DevelopmentEntry[], key: 'film' | 'developer' | 'dilution'): string => {
  const values = [...new Set(entries.map((entry) => entry[key]))];
  return values.map((value) => `<button type="button" role="option" data-value="${value}" class="film-dev-option">${value}</button>`).join('');
};

export const renderTemperatureRows = (result: DevelopmentResult, ui: FilmDevelopmentTemperatureUI, unitSystem: UnitSystem = 'metric'): string => result.rows.map((row) => `<tr class="${row.isCurrent ? 'is-current' : ''}"><th scope="row">${formatTemperature(row.temperatureC, unitSystem)}</th><td>${formatMinutes(row.minutes, ui)}</td><td>${formatDifference(row.differenceC, unitSystem)}${row.isCurrent ? ` <span class="row-marker">${ui.currentRow}</span>` : ''}</td></tr>`).join('');

const renderBadgesAndNotes = (root: HTMLElement, result: DevelopmentResult, ui: FilmDevelopmentTemperatureUI, unitSystem: UnitSystem = 'metric'): void => {
  const time = root.querySelector<HTMLElement>('[data-current-time]');
  const baseTime = root.querySelector<HTMLElement>('[data-base-time]');
  const baseTimeLabel = root.querySelector<HTMLElement>('[data-base-time-label]');
  const helpTexts = root.querySelectorAll<HTMLElement>('[data-temperature-help]');
  const badge = root.querySelector<HTMLElement>('[data-temperature-badge]');
  const warning = root.querySelector<HTMLElement>('[data-warning]');

  if (time) time.textContent = formatMinutes(result.adjustedMinutes, ui);
  if (baseTime) baseTime.textContent = formatMinutes(result.entry.baseMinutes, ui);
  if (baseTimeLabel) {
    baseTimeLabel.textContent = unitSystem === 'imperial'
      ? ui.baseTimeLabel.replace(/20\s*°C/g, '68 °F')
      : ui.baseTimeLabel;
  }
  helpTexts.forEach((el) => {
    el.textContent = unitSystem === 'imperial'
      ? ui.temperatureHelp.replace(/20\s*°C/g, '68 °F')
      : ui.temperatureHelp;
  });
  if (badge) {
    badge.textContent = getStatusLabel(result, ui);
    badge.className = `temperature-badge ${getStatusTone(result)}`;
  }
  if (warning) {
    warning.textContent = getResultWarning(result, ui);
    warning.className = `result-note ${result.isShort ? 'is-warning' : ''}`;
  }
};

export const renderResult = (root: HTMLElement, result: DevelopmentResult, ui: FilmDevelopmentTemperatureUI, unitSystem: UnitSystem = 'metric'): void => {
  renderBadgesAndNotes(root, result, ui, unitSystem);
  const rows = root.querySelector<HTMLElement>('[data-temperature-rows]');
  const source = root.querySelector<HTMLElement>('[data-source]');
  const ei = root.querySelector<HTMLElement>('[data-ei]');
  const temperatureOutput = root.querySelector<HTMLOutputElement>('[data-temperature-output]');
  const temperatureHeading = root.querySelector<HTMLElement>('[data-temperature-heading]');
  const differenceHeading = root.querySelector<HTMLElement>('[data-difference-heading]');
  const stage = root.querySelector<HTMLElement>('[data-darkroom-stage]');

  if (rows) rows.innerHTML = renderTemperatureRows(result, ui, unitSystem);
  if (source) source.textContent = `${result.entry.film} · ${result.entry.developer} ${result.entry.dilution}`;
  if (ei) ei.textContent = result.entry.ei;
  if (temperatureOutput) temperatureOutput.value = formatTemperature(result.temperatureC, unitSystem);
  if (temperatureHeading) temperatureHeading.textContent = `${ui.tableTemperature} ${getTemperatureUnit(unitSystem)}`;
  if (differenceHeading) {
    differenceHeading.textContent = unitSystem === 'imperial'
      ? ui.tableDifference.replace(/20\s*°C/g, '68 °F')
      : ui.tableDifference;
  }
  if (stage) {
    stage.dataset.temperatureState = result.status;
    stage.style.setProperty('--n-temp-progress', `${((result.temperatureC - 15) / 10) * 100}%`);
    stage.style.setProperty('--n-time-progress', `${Math.min(100, (result.adjustedMinutes / 20) * 100)}%`);
  }
};

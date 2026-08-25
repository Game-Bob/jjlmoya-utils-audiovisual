import { calculateZoneResult, formatStops, ZONES, type ZoneState } from './logic';
import { evaluateZoneResult } from './evaluator';
import type { AdamsZoneSystemUI } from './ui';

const select = <T extends Element>(root: HTMLElement, selector: string): T | null => root.querySelector<T>(selector);

const zoneClass = (index: number): string => `azs-zone-${index}`;

export const renderZoneStrip = (root: HTMLElement, ui: AdamsZoneSystemUI, state: ZoneState): void => {
  const strip = select<HTMLElement>(root, '[data-azs-zone-strip]');
  if (!strip) return;
  strip.replaceChildren(...ZONES.map((zone) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `azs-zone-chip ${zoneClass(zone.index)}`;
    button.dataset.azsZone = String(zone.index);
    button.setAttribute('aria-pressed', String(zone.index === state.targetZone));
    button.innerHTML = `<span class="azs-zone-roman">${ui.zonePrefix} ${zone.roman}</span><span class="azs-zone-name">${zone.name}</span>`;
    return button;
  }));
};

export const renderExposureLadder = (root: HTMLElement, state: ZoneState): void => {
  const ladder = select<HTMLElement>(root, '[data-azs-exposure-ladder]');
  if (!ladder) return;
  ladder.replaceChildren(...ZONES.map((zone) => {
    const cell = document.createElement('span');
    cell.className = `azs-ladder-cell ${zoneClass(zone.index)}`;
    if (zone.index === state.measuredZone) cell.classList.add('is-measured');
    if (zone.index === state.targetZone) cell.classList.add('is-target');
    cell.textContent = zone.roman;
    cell.title = zone.name;
    return cell;
  }));
};

export const renderResult = (root: HTMLElement, ui: AdamsZoneSystemUI, state: ZoneState): void => {
  const result = calculateZoneResult(state);
  const evaluation = evaluateZoneResult(result, ui);
  const setText = (selector: string, value: string): void => {
    const node = select<HTMLElement>(root, selector);
    if (node) node.textContent = value;
  };
  const setAllText = (selector: string, value: string): void => {
    root.querySelectorAll<HTMLElement>(selector).forEach((node) => {
      node.textContent = value;
    });
  };
  setText('[data-azs-measured-name]', `${ui.zonePrefix} ${result.measured.roman} ${result.measured.name}`);
  setText('[data-azs-measured-description]', result.measured.description);
  setAllText('[data-azs-target-name]', `${ui.zonePrefix} ${result.target.roman} ${result.target.name}`);
  setText('[data-azs-target-description]', result.target.description);
  setText('[data-azs-exposure-shift]', formatStops(result.exposureShiftStops));
  setText('[data-azs-tonal-distance]', formatStops(result.tonalDistanceStops));
  setText('[data-azs-luminance]', `${result.luminancePercent}%`);
  setText('[data-azs-middle-distance]', formatStops(result.stopsFromMiddle));
  setText('[data-azs-badge]', evaluation.badge);
  setText('[data-azs-summary]', evaluation.summary);
  setText('[data-azs-technique]', evaluation.technique);
  const marker = select<HTMLElement>(root, '[data-azs-target-marker]');
  if (marker) marker.style.left = `${(result.target.index / 9) * 100}%`;
  const measuredMarker = select<HTMLElement>(root, '[data-azs-measured-marker]');
  if (measuredMarker) measuredMarker.style.left = `${(result.measured.index / 9) * 100}%`;
  const targetCard = select<HTMLElement>(root, '[data-azs-target-card]');
  if (targetCard) targetCard.className = `azs-target-card ${zoneClass(result.target.index)}`;
};

export const renderPresetState = (root: HTMLElement, state: ZoneState): void => {
  root.querySelectorAll<HTMLElement>('[data-azs-preset]').forEach((button) => {
    const active = button.dataset.azsPreset === `${state.measuredZone}-${state.targetZone}-${state.development}`;
    button.classList.toggle('is-active', active);
  });
};

export const renderControlState = (root: HTMLElement, state: ZoneState): void => {
  root.querySelectorAll<HTMLElement>('[data-azs-measured-zone]').forEach((button) => {
    const active = Number(button.dataset.azsMeasuredZone) === state.measuredZone;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
  root.querySelectorAll<HTMLElement>('[data-azs-development]').forEach((button) => {
    const active = button.dataset.azsDevelopment === state.development;
    button.classList.toggle('is-active', active);
    button.setAttribute('aria-pressed', String(active));
  });
};

export const renderAll = (root: HTMLElement, ui: AdamsZoneSystemUI, state: ZoneState): void => {
  renderZoneStrip(root, ui, state);
  renderExposureLadder(root, state);
  renderResult(root, ui, state);
  renderPresetState(root, state);
  renderControlState(root, state);
};

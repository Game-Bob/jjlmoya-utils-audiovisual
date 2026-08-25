import { renderAll } from './dom-views';
import { getDefaultState, loadState, saveState } from './storage';
import type { DevelopmentMode, ZoneState } from './logic';
import type { AdamsZoneSystemUI } from './ui';

interface Preset {
  measuredZone: number;
  targetZone: number;
  development: DevelopmentMode;
}

const PRESETS: Record<string, Preset> = {
  '3-3-normal': { measuredZone: 3, targetZone: 3, development: 'normal' },
  '5-6-normal': { measuredZone: 5, targetZone: 6, development: 'normal' },
  '5-7-minus': { measuredZone: 5, targetZone: 7, development: 'minus' },
  '2-3-plus': { measuredZone: 2, targetZone: 3, development: 'plus' },
};

const isDevelopment = (value: string | undefined): value is DevelopmentMode => value === 'normal' || value === 'minus' || value === 'plus';

export const mountAdamsZoneSystem = (root: HTMLElement, ui: AdamsZoneSystemUI): void => {
  let state: ZoneState = loadState();
  const update = (next: ZoneState): void => {
    state = next;
    saveState(state);
    renderAll(root, ui, state);
  };

  root.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const zoneButton = target.closest<HTMLElement>('[data-azs-zone]');
    if (zoneButton) {
      update({ ...state, targetZone: Number(zoneButton.dataset.azsZone) });
      return;
    }
    const measuredButton = target.closest<HTMLElement>('[data-azs-measured-zone]');
    if (measuredButton) {
      update({ ...state, measuredZone: Number(measuredButton.dataset.azsMeasuredZone) });
      return;
    }
    const developmentButton = target.closest<HTMLElement>('[data-azs-development]');
    if (developmentButton && isDevelopment(developmentButton.dataset.azsDevelopment)) {
      update({ ...state, development: developmentButton.dataset.azsDevelopment });
      return;
    }
    const presetButton = target.closest<HTMLElement>('[data-azs-preset]');
    if (presetButton) {
      const preset = PRESETS[presetButton.dataset.azsPreset ?? ''];
      if (preset) update({ ...preset });
      return;
    }
    if (target.closest('[data-azs-reset]')) update(getDefaultState());
  });

  renderAll(root, ui, state);
};

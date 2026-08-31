import { calculateReverb, formatNumber, type ReverbTarget } from './logic';

type UnitSystem = 'metric' | 'imperial';

const CUBIC_METRES_TO_CUBIC_FEET = 35.3146667;
const SQUARE_METRES_TO_SQUARE_FEET = 10.7639104;

function query<T extends Element>(root: HTMLElement, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing reverb calculator element: ${selector}`);
  return element;
}

function setText(root: HTMLElement, selector: string, value: string): void {
  query<HTMLElement>(root, selector).textContent = value;
}

function updateCurve(root: HTMLElement, rt60: number, targetMin: number, targetMax: number): void {
  const path = query<SVGPathElement>(root, '[data-decay-path]');
  const band = query<SVGRectElement>(root, '[data-target-band]');
  const maxSeconds = Math.max(3.5, Math.min(7, Math.ceil(Math.max(rt60, targetMax) * 1.2 * 2) / 2));
  const width = 620;
  const top = 16;
  const bottom = 176;
  const plotHeight = bottom - top;
  const points: string[] = [];
  for (let step = 0; step <= 60; step += 1) {
    const seconds = maxSeconds * step / 60;
    const db = Math.max(-60, -60 * seconds / rt60);
    const x = 10 + (width - 20) * seconds / maxSeconds;
    const y = top + plotHeight * (-db / 60);
    points.push(`${step === 0 ? 'M' : 'L'}${x.toFixed(2)} ${y.toFixed(2)}`);
  }
  path.setAttribute('d', points.join(' '));
  const bandStart = 10 + (width - 20) * targetMin / maxSeconds;
  const bandEnd = 10 + (width - 20) * targetMax / maxSeconds;
  band.setAttribute('x', bandStart.toFixed(2));
  band.setAttribute('width', Math.max(8, bandEnd - bandStart).toFixed(2));
  band.setAttribute('y', String(top));
  band.setAttribute('height', String(bottom - top));
  setText(root, '[data-chart-max]', `${formatNumber(maxSeconds, 1)} s`);
}

export function mountReverbDecayCalculator(root: HTMLElement): void {
  const form = query<HTMLFormElement>(root, '[data-reverb-form]');
  const volumeInput = query<HTMLInputElement>(root, '[name="volume"]');
  const absorptionInput = query<HTMLInputElement>(root, '[name="absorption"]');
  const bpmInput = query<HTMLInputElement>(root, '[name="bpm"]');
  const targetInput = query<HTMLInputElement>(root, '[data-target-value]');
  const targetTrigger = query<HTMLButtonElement>(root, '[data-target-trigger]');
  const targetLabel = query<HTMLElement>(root, '[data-target-label]');
  const targetMenu = query<HTMLElement>(root, '[data-target-menu]');
  const targetOptions = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-target-option]'));
  const unitOptions = Array.from(root.querySelectorAll<HTMLButtonElement>('[data-unit-option]'));
  const volumeUnit = query<HTMLElement>(root, '[data-volume-unit]');
  const absorptionUnit = query<HTMLElement>(root, '[data-absorption-unit]');
  const status = query<HTMLElement>(root, '[data-status]');
  const statusDot = query<HTMLElement>(root, '[data-status-dot]');
  const advice = query<HTMLElement>(root, '[data-advice]');
  const reset = query<HTMLButtonElement>(root, '[data-reset]');
  let unitSystem: UnitSystem = 'metric';

  const formatInputValue = (value: number): string => String(Number(value.toFixed(2)));

  const closeTargetMenu = (): void => {
    targetMenu.hidden = true;
    targetTrigger.setAttribute('aria-expanded', 'false');
  };

  const openTargetMenu = (): void => {
    targetMenu.hidden = false;
    targetTrigger.setAttribute('aria-expanded', 'true');
  };

  const updateUnitLabels = (): void => {
    const imperial = unitSystem === 'imperial';
    volumeUnit.textContent = imperial ? root.dataset.unitVolumeImperial : root.dataset.unitVolumeMetric;
    absorptionUnit.textContent = imperial ? root.dataset.unitSabinsImperial : root.dataset.unitSabinsMetric;
    unitOptions.forEach((button) => {
      button.setAttribute('aria-pressed', String(button.dataset.unitOption === unitSystem));
    });
  };

  const setUnitSystem = (next: UnitSystem): void => {
    if (next === unitSystem) return;
    const volume = Number(volumeInput.value);
    const absorption = Number(absorptionInput.value);
    const volumeFactor = next === 'imperial' ? CUBIC_METRES_TO_CUBIC_FEET : 1 / CUBIC_METRES_TO_CUBIC_FEET;
    const absorptionFactor = next === 'imperial' ? SQUARE_METRES_TO_SQUARE_FEET : 1 / SQUARE_METRES_TO_SQUARE_FEET;
    if (Number.isFinite(volume) && volume > 0) volumeInput.value = formatInputValue(volume * volumeFactor);
    if (Number.isFinite(absorption) && absorption > 0) absorptionInput.value = formatInputValue(absorption * absorptionFactor);
    unitSystem = next;
    updateUnitLabels();
    render();
  };

  const render = (): void => {
    const result = calculateReverb({
      volumeM3: unitSystem === 'imperial' ? Number(volumeInput.value) / CUBIC_METRES_TO_CUBIC_FEET : Number(volumeInput.value),
      absorptionSabins: unitSystem === 'imperial' ? Number(absorptionInput.value) / SQUARE_METRES_TO_SQUARE_FEET : Number(absorptionInput.value),
      bpm: Number(bpmInput.value),
      target: targetInput.value as ReverbTarget,
    });
    setText(root, '[data-result-rt60]', `${formatNumber(result.rt60, 2)} s`);
    setText(root, '[data-result-target]', `${formatNumber(result.targetMin, 2)} to ${formatNumber(result.targetMax, 2)} s`);
    setText(root, '[data-result-predelay]', `${formatNumber(result.preDelayMs, 0)} ms`);
    const absorptionUnitText = unitSystem === 'imperial' ? root.dataset.unitSabinsImperial : root.dataset.unitSabinsMetric;
    setText(root, '[data-result-absorption]', `${formatNumber(result.targetAbsorptionSabins, 1)} ${absorptionUnitText}`);
    setText(root, '[data-result-reading]', root.dataset[`reading${result.status.replace('-', '')}`] ?? '');
    const statusText = root.dataset[`status${result.status.replace('-', '')}`] ?? '';
    const adviceText = root.dataset[`advice${result.status.replace('-', '')}`] ?? '';
    status.textContent = statusText;
    statusDot.className = `reverb-status-dot ${result.status}`;
    advice.textContent = adviceText;
    setText(root, '[data-target-range]', (root.dataset.targetRangeTemplate ?? '').replace('__MIN__', formatNumber(result.targetMin, 2)).replace('__MAX__', formatNumber(result.targetMax, 2)));
    root.dataset.state = result.status;
    updateCurve(root, result.rt60, result.targetMin, result.targetMax);
  };

  form.addEventListener('input', render);
  form.addEventListener('change', render);
  unitOptions.forEach((button) => {
    button.addEventListener('click', () => setUnitSystem(button.dataset.unitOption as UnitSystem));
  });
  targetTrigger.addEventListener('click', () => {
    if (targetMenu.hidden) openTargetMenu();
    else closeTargetMenu();
  });
  targetTrigger.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowDown') {
      event.preventDefault();
      openTargetMenu();
      targetOptions[0]?.focus();
    }
  });
  targetOptions.forEach((option, index) => {
    option.addEventListener('click', () => {
      targetInput.value = option.dataset.targetOption ?? 'vocals';
      targetLabel.textContent = option.textContent;
      targetOptions.forEach((item) => item.setAttribute('aria-selected', String(item === option)));
      closeTargetMenu();
      render();
    });
    option.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        closeTargetMenu();
        targetTrigger.focus();
      } else if (event.key === 'ArrowDown') {
        event.preventDefault();
        targetOptions[(index + 1) % targetOptions.length]?.focus();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        targetOptions[(index - 1 + targetOptions.length) % targetOptions.length]?.focus();
      }
    });
  });
  form.addEventListener('click', (event) => {
    if (!(event.target instanceof Node) || !targetMenu.parentElement?.contains(event.target)) closeTargetMenu();
  });
  reset.addEventListener('click', () => {
    form.reset();
    unitSystem = 'metric';
    updateUnitLabels();
    targetInput.value = 'vocals';
    targetLabel.textContent = targetOptions.find((option) => option.dataset.targetOption === 'vocals')?.textContent ?? '';
    targetOptions.forEach((option) => option.setAttribute('aria-selected', String(option.dataset.targetOption === 'vocals')));
    closeTargetMenu();
    render();
  });
  root.dataset.unitVolumeMetric = volumeUnit.textContent ?? '';
  root.dataset.unitSabinsMetric = absorptionUnit.textContent ?? '';
  root.dataset.unitVolumeImperial = root.dataset.unitVolumeImperial ?? 'ft³';
  root.dataset.unitSabinsImperial = root.dataset.unitSabinsImperial ?? 'ft² sabin';
  updateUnitLabels();
  render();
}

import {
  calculateEV,
  calculateEquivalentAperture,
  calculateEquivalentShutter,
  calculateEquivalentISO,
  findClosestValue,
  APERTURE_VALUES_THIRD,
  SHUTTER_VALUES_THIRD,
  ISO_VALUES_THIRD,
  formatShutter,
} from './logic';
import { renderTriangleSVG } from './dom-views';
import { saveState, loadState } from './storage';
import { evaluateExposureValue } from './evaluator';

export function initEquivalentExposureController(root: HTMLElement): void {
  const baseIsoSelect = root.querySelector('#custom-select-base-iso') as HTMLElement;
  const baseApertureSelect = root.querySelector('#custom-select-base-aperture') as HTMLElement;
  const baseShutterSelect = root.querySelector('#custom-select-base-shutter') as HTMLElement;
  
  const targetIsoSelect = root.querySelector('#custom-select-target-iso') as HTMLElement;
  const targetApertureSelect = root.querySelector('#custom-select-target-aperture') as HTMLElement;
  const targetShutterSelect = root.querySelector('#custom-select-target-shutter') as HTMLElement;
  
  const lockModeSelect = root.querySelector('#custom-select-lock-mode') as HTMLElement;
  
  const baseEvValueEl = root.querySelector('#base-ev-value') as HTMLElement;
  const baseEvBadgeEl = root.querySelector('#base-ev-badge') as HTMLElement;
  const svgContainerEl = root.querySelector('#svg-container') as HTMLElement;
  const presetBtns = root.querySelectorAll('.equivalent-exposure-calculator-preset-chip');

  const customSelects = [
    baseIsoSelect,
    baseApertureSelect,
    baseShutterSelect,
    targetIsoSelect,
    targetApertureSelect,
    targetShutterSelect,
    lockModeSelect,
  ];

  function getCustomSelectValue(el: HTMLElement): string {
    return el.getAttribute('data-value') || '';
  }

  function setCustomSelectValue(el: HTMLElement, val: string | number, labelText?: string): void {
    const strVal = String(val);
    el.setAttribute('data-value', strVal);
    const triggerText = el.querySelector('.equivalent-exposure-calculator-select-value') as HTMLElement;
    if (triggerText) {
      if (labelText) {
        triggerText.textContent = labelText;
      } else if (el === baseIsoSelect || el === targetIsoSelect) {
        triggerText.textContent = `ISO ${strVal}`;
      } else if (el === baseApertureSelect || el === targetApertureSelect) {
        triggerText.textContent = `f/${strVal}`;
      } else if (el === baseShutterSelect || el === targetShutterSelect) {
        triggerText.textContent = formatShutter(Number(strVal));
      }
    }

    const options = el.querySelectorAll('.equivalent-exposure-calculator-custom-select-option');
    options.forEach((opt) => {
      if (opt.getAttribute('data-value') === strVal) {
        opt.classList.add('equivalent-exposure-calculator-selected');
        opt.setAttribute('aria-selected', 'true');
      } else {
        opt.classList.remove('equivalent-exposure-calculator-selected');
        opt.setAttribute('aria-selected', 'false');
      }
    });
  }

  function setDisabled(el: HTMLElement, disabled: boolean): void {
    if (disabled) {
      el.classList.add('equivalent-exposure-calculator-disabled');
    } else {
      el.classList.remove('equivalent-exposure-calculator-disabled');
    }
  }

  const state = loadState();
  if (baseIsoSelect && state.baseIso) setCustomSelectValue(baseIsoSelect, state.baseIso);
  if (baseApertureSelect && state.baseAperture) setCustomSelectValue(baseApertureSelect, state.baseAperture);
  if (baseShutterSelect && state.baseShutter) setCustomSelectValue(baseShutterSelect, state.baseShutter);

  function updatePresetHighlights(iso: number, aperture: number, shutter: number): void {
    presetBtns.forEach((btn) => {
      const pIso = Number(btn.getAttribute('data-iso'));
      const pAp = Number(btn.getAttribute('data-aperture'));
      const pSh = Number(btn.getAttribute('data-shutter'));
      
      const isMatch = pIso === iso && pAp === aperture && Math.abs(pSh - shutter) < 0.001;
      if (isMatch) {
        btn.classList.add('equivalent-exposure-calculator-preset-active');
      } else {
        btn.classList.remove('equivalent-exposure-calculator-preset-active');
      }
    });
  }

  function update(): void {
    const baseIso = Number(getCustomSelectValue(baseIsoSelect));
    const baseAperture = Number(getCustomSelectValue(baseApertureSelect));
    const baseShutter = Number(getCustomSelectValue(baseShutterSelect));
    
    const ev = calculateEV(baseIso, baseAperture, baseShutter);
    const evalResult = evaluateExposureValue(ev);
    
    if (baseEvValueEl) baseEvValueEl.textContent = `EV ${ev}`;
    if (baseEvBadgeEl) {
      baseEvBadgeEl.textContent = evalResult.lightingDescription;
      baseEvBadgeEl.className = `equivalent-exposure-calculator-badge ${evalResult.badgeClass}`;
    }

    const lockMode = getCustomSelectValue(lockModeSelect) || 'iso';

    if (lockMode === 'shutter') {
      setDisabled(targetShutterSelect, true);
      setDisabled(targetIsoSelect, false);
      setDisabled(targetApertureSelect, false);
      const tIso = Number(getCustomSelectValue(targetIsoSelect));
      const tAp = Number(getCustomSelectValue(targetApertureSelect));
      const eqShutter = calculateEquivalentShutter(ev, tIso, tAp);
      setCustomSelectValue(targetShutterSelect, eqShutter);
    } else if (lockMode === 'aperture') {
      setDisabled(targetApertureSelect, true);
      setDisabled(targetIsoSelect, false);
      setDisabled(targetShutterSelect, false);
      const tIso = Number(getCustomSelectValue(targetIsoSelect));
      const tSh = Number(getCustomSelectValue(targetShutterSelect));
      const eqAperture = calculateEquivalentAperture(ev, tIso, tSh);
      setCustomSelectValue(targetApertureSelect, eqAperture);
    } else {
      setDisabled(targetIsoSelect, true);
      setDisabled(targetApertureSelect, false);
      setDisabled(targetShutterSelect, false);
      const tAp = Number(getCustomSelectValue(targetApertureSelect));
      const tSh = Number(getCustomSelectValue(targetShutterSelect));
      const eqIso = calculateEquivalentISO(ev, tAp, tSh);
      setCustomSelectValue(targetIsoSelect, eqIso);
    }

    const currentIso = Number(getCustomSelectValue(targetIsoSelect));
    const currentAp = Number(getCustomSelectValue(targetApertureSelect));
    const currentSh = Number(getCustomSelectValue(targetShutterSelect));

    if (svgContainerEl) {
      svgContainerEl.innerHTML = renderTriangleSVG({
        iso: currentIso,
        aperture: currentAp,
        shutter: currentSh,
        ev,
      });
    }

    updatePresetHighlights(baseIso, baseAperture, baseShutter);

    saveState({
      baseIso,
      baseAperture,
      baseShutter,
      lockMode: lockMode as 'iso' | 'aperture' | 'shutter',
      targetIso: currentIso,
      targetAperture: currentAp,
      targetShutter: currentSh,
    });
  }

  customSelects.forEach((selectEl) => {
    if (!selectEl) return;
    const trigger = selectEl.querySelector('.equivalent-exposure-calculator-custom-select-trigger') as HTMLElement;
    const options = selectEl.querySelectorAll('.equivalent-exposure-calculator-custom-select-option');

    if (trigger) {
      trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        if (selectEl.classList.contains('equivalent-exposure-calculator-disabled')) return;
        const isOpen = selectEl.classList.contains('equivalent-exposure-calculator-open');
        
        customSelects.forEach((other) => other?.classList.remove('equivalent-exposure-calculator-open'));
        if (!isOpen) {
          selectEl.classList.add('equivalent-exposure-calculator-open');
        }
      });
    }

    options.forEach((option) => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const val = option.getAttribute('data-value');
        if (val) {
          setCustomSelectValue(selectEl, val, option.textContent || '');
          selectEl.classList.remove('equivalent-exposure-calculator-open');
          update();
        }
      });
    });
  });

  document.addEventListener('click', () => {
    customSelects.forEach((selectEl) => {
      selectEl?.classList.remove('equivalent-exposure-calculator-open');
    });
  });

  presetBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const iso = Number(btn.getAttribute('data-iso'));
      const ap = Number(btn.getAttribute('data-aperture'));
      const sh = Number(btn.getAttribute('data-shutter'));
      
      if (iso && baseIsoSelect) {
        setCustomSelectValue(baseIsoSelect, findClosestValue(iso, ISO_VALUES_THIRD));
      }
      if (ap && baseApertureSelect) {
        setCustomSelectValue(baseApertureSelect, findClosestValue(ap, APERTURE_VALUES_THIRD));
      }
      if (sh && baseShutterSelect) {
        setCustomSelectValue(baseShutterSelect, findClosestValue(sh, SHUTTER_VALUES_THIRD));
      }
      update();
    });
  });

  update();
}

import { computeAudioDelay, celsiusToFahrenheit, fahrenheitToCelsius, metersToFeet, feetToMeters } from './logic';
import { evaluateAudioDelay } from './evaluator';
import { renderAudioDelayOutput, updateSvgStage } from './dom-views';
import { loadAudioDelayState, saveAudioDelayState } from './storage';
import type { AudioDelayUI } from './ui';

export class AudioDelayController {
  private container: HTMLElement;
  private ui: AudioDelayUI;
  private distanceMeters = 25;
  private temperatureC = 20;
  private humidityPercent = 50;
  private sampleRateHz = 48000;
  private unitSystem: 'metric' | 'imperial' = 'metric';

  constructor(container: HTMLElement) {
    this.container = container;
    const rawUi = container.dataset.i18n;
    this.ui = rawUi ? JSON.parse(rawUi) : {};
    this.restoreState();
    this.bindEvents();
    this.recalculate();
  }

  private restoreState(): void {
    const saved = loadAudioDelayState();
    if (!saved) return;
    this.distanceMeters = saved.distanceMeters ?? 25;
    this.temperatureC = saved.temperatureCelsius ?? 20;
    this.humidityPercent = saved.humidityPercent ?? 50;
    this.sampleRateHz = saved.sampleRateHz ?? 48000;
    this.unitSystem = saved.unitDistance === 'ft' ? 'imperial' : 'metric';
    this.syncInputValues();
  }

  private getDisplayDistance(): number {
    return this.unitSystem === 'imperial' ? metersToFeet(this.distanceMeters) : this.distanceMeters;
  }

  private getDisplayTemp(): number {
    return this.unitSystem === 'imperial' ? celsiusToFahrenheit(this.temperatureC) : this.temperatureC;
  }

  private syncInputValues(): void {
    const distNum = this.container.querySelector<HTMLInputElement>('#audio-delay-distance');
    const distSlider = this.container.querySelector<HTMLInputElement>('#audio-delay-distance-slider');
    const distBadge = this.container.querySelector<HTMLElement>('#audio-delay-distance-display');

    const tempNum = this.container.querySelector<HTMLInputElement>('#audio-delay-temperature');
    const tempSlider = this.container.querySelector<HTMLInputElement>('#audio-delay-temperature-slider');
    const tempBadge = this.container.querySelector<HTMLElement>('#audio-delay-temp-display');

    const humSlider = this.container.querySelector<HTMLInputElement>('#audio-delay-humidity');
    const humBadge = this.container.querySelector<HTMLElement>('#audio-delay-humidity-val');

    const dispDist = this.getDisplayDistance();
    const dispTemp = this.getDisplayTemp();
    const distUnitStr = this.unitSystem === 'imperial' ? 'ft' : 'm';
    const tempUnitStr = this.unitSystem === 'imperial' ? '°F' : '°C';

    if (distNum) distNum.value = String(dispDist);
    if (distSlider) distSlider.value = String(dispDist);
    if (distBadge) distBadge.textContent = `${dispDist} ${distUnitStr}`;

    if (tempNum) tempNum.value = String(dispTemp);
    if (tempSlider) tempSlider.value = String(dispTemp);
    if (tempBadge) tempBadge.textContent = `${dispTemp} ${tempUnitStr}`;

    if (humSlider) humSlider.value = String(this.humidityPercent);
    if (humBadge) humBadge.textContent = `${this.humidityPercent}%`;

    this.updateMasterButtons();
  }

  private bindEvents(): void {
    const distNum = this.container.querySelector<HTMLInputElement>('#audio-delay-distance');
    const distSlider = this.container.querySelector<HTMLInputElement>('#audio-delay-distance-slider');
    const tempNum = this.container.querySelector<HTMLInputElement>('#audio-delay-temperature');
    const tempSlider = this.container.querySelector<HTMLInputElement>('#audio-delay-temperature-slider');
    const humSlider = this.container.querySelector<HTMLInputElement>('#audio-delay-humidity');

    const handleDistChange = (val: number) => {
      this.distanceMeters = this.unitSystem === 'imperial' ? feetToMeters(val) : val;
      this.syncInputValues();
      this.recalculate();
    };

    const handleTempChange = (val: number) => {
      this.temperatureC = this.unitSystem === 'imperial' ? fahrenheitToCelsius(val) : val;
      this.syncInputValues();
      this.recalculate();
    };

    distNum?.addEventListener('input', (e) => handleDistChange(parseFloat((e.target as HTMLInputElement).value) || 0));
    distSlider?.addEventListener('input', (e) => handleDistChange(parseFloat((e.target as HTMLInputElement).value) || 0));
    tempNum?.addEventListener('input', (e) => handleTempChange(parseFloat((e.target as HTMLInputElement).value) || 0));
    tempSlider?.addEventListener('input', (e) => handleTempChange(parseFloat((e.target as HTMLInputElement).value) || 0));

    humSlider?.addEventListener('input', (e) => {
      this.humidityPercent = parseInt((e.target as HTMLInputElement).value, 10) || 50;
      this.syncInputValues();
      this.recalculate();
    });

    this.bindMasterUnitButtons();
    this.bindCustomSelect();
    this.bindPresets();
  }

  private bindMasterUnitButtons(): void {
    const metricBtn = this.container.querySelector('#audio-delay-unit-metric');
    const imperialBtn = this.container.querySelector('#audio-delay-unit-imperial');

    metricBtn?.addEventListener('click', () => this.switchUnitSystem('metric'));
    imperialBtn?.addEventListener('click', () => this.switchUnitSystem('imperial'));
  }

  private switchUnitSystem(sys: 'metric' | 'imperial'): void {
    if (this.unitSystem === sys) return;
    this.unitSystem = sys;
    this.syncInputValues();
    this.recalculate();
  }

  private updateMasterButtons(): void {
    const buttons = this.container.querySelectorAll('.audio-delay-distance-calculator-master-btn');
    buttons.forEach((btn) => {
      if (btn.getAttribute('data-system') === this.unitSystem) {
        btn.classList.add('audio-delay-distance-calculator-btn-active');
      } else {
        btn.classList.remove('audio-delay-distance-calculator-btn-active');
      }
    });
  }

  private bindCustomSelect(): void {
    const trigger = this.container.querySelector<HTMLElement>('.audio-delay-distance-calculator-custom-select-trigger');
    const menu = this.container.querySelector<HTMLElement>('.audio-delay-distance-calculator-custom-select-menu');
    const options = this.container.querySelectorAll<HTMLElement>('.audio-delay-distance-calculator-custom-select-option');

    const toggleMenu = () => {
      const isOpen = menu?.classList.contains('audio-delay-distance-calculator-open');
      menu?.classList.toggle('audio-delay-distance-calculator-open');
      trigger?.setAttribute('aria-expanded', String(!isOpen));
    };

    trigger?.addEventListener('click', toggleMenu);
    trigger?.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });

    options.forEach((opt) => {
      opt.addEventListener('click', () => {
        const sr = parseInt(opt.getAttribute('data-value') || '48000', 10);
        this.sampleRateHz = sr;
        const triggerText = trigger?.querySelector('.audio-delay-distance-calculator-select-value');
        if (triggerText) triggerText.textContent = opt.textContent;
        options.forEach((o) => {
          o.classList.remove('audio-delay-distance-calculator-selected');
          o.setAttribute('aria-selected', 'false');
        });
        opt.classList.add('audio-delay-distance-calculator-selected');
        opt.setAttribute('aria-selected', 'true');
        menu?.classList.remove('audio-delay-distance-calculator-open');
        trigger?.setAttribute('aria-expanded', 'false');
        this.recalculate();
      });
    });

    document.addEventListener('click', (e) => {
      if (!this.container.contains(e.target as Node)) {
        menu?.classList.remove('audio-delay-distance-calculator-open');
        trigger?.setAttribute('aria-expanded', 'false');
      }
    });
  }

  private bindPresets(): void {
    const presetBtns = this.container.querySelectorAll('.audio-delay-distance-calculator-preset-chip');
    presetBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        const dist = parseFloat(btn.getAttribute('data-dist') || '25');
        const temp = parseFloat(btn.getAttribute('data-temp') || '20');
        this.distanceMeters = dist;
        this.temperatureC = temp;
        this.syncInputValues();
        this.recalculate();
      });
    });
  }

  private recalculate(): void {
    const results = computeAudioDelay({
      distanceMeters: this.distanceMeters,
      temperatureCelsius: this.temperatureC,
      humidityPercent: this.humidityPercent,
      sampleRateHz: this.sampleRateHz,
    });
    const evaluation = evaluateAudioDelay(results.delayMs);
    renderAudioDelayOutput(this.container, results, evaluation, this.ui);
    const svg = this.container.querySelector<SVGSVGElement>('#audio-delay-stage-svg');
    updateSvgStage(svg, results, this.ui);
    saveAudioDelayState({
      distanceMeters: this.distanceMeters,
      temperatureCelsius: this.temperatureC,
      humidityPercent: this.humidityPercent,
      sampleRateHz: this.sampleRateHz,
      unitDistance: this.unitSystem === 'imperial' ? 'ft' : 'm',
      unitTemp: this.unitSystem === 'imperial' ? 'F' : 'C',
    });
  }
}

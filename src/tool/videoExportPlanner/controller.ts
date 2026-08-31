import { calculateExport, DEFAULT_INPUTS, getPresetInputs, type CodecId, type ExportInputs, type PresetId } from './logic';
import { evaluateExport } from './evaluator';
import { formatFileSize, formatNumber, renderComparison, renderScene } from './dom-views';
import { loadExportInputs, saveExportInputs } from './storage';

interface Config { ui: Record<string, string>; defaults: ExportInputs; }
interface PlannerRoot extends HTMLElement { querySelector<T extends Element>(selectors: string): T | null; }

function readConfig(root: PlannerRoot): Config {
  const script = root.querySelector<HTMLScriptElement>('[data-video-export-config]');
  return script ? JSON.parse(script.textContent ?? '{}') as Config : { ui: {}, defaults: DEFAULT_INPUTS };
}

function readNumber(root: PlannerRoot, name: string): number { return Number(root.querySelector<HTMLInputElement>(`[data-input="${name}"]`)?.value ?? 0); }

function readInputs(root: PlannerRoot): ExportInputs {
  return {
    resolution: root.querySelector<HTMLInputElement>('[data-select-input="resolution"]')?.value as ExportInputs['resolution'],
    frameRate: Number(root.querySelector<HTMLInputElement>('[data-select-input="frameRate"]')?.value ?? 30),
    codec: root.querySelector<HTMLInputElement>('[data-select-input="codec"]')?.value as CodecId,
    durationMinutes: readNumber(root, 'durationMinutes'), videoBitrateMbps: readNumber(root, 'videoBitrateMbps'),
    audioBitrateKbps: readNumber(root, 'audioBitrateKbps'), overheadPercent: readNumber(root, 'overheadPercent'),
  };
}

function updateSelect(root: PlannerRoot, name: string, value: string): void {
  const input = root.querySelector<HTMLInputElement>(`[data-select-input="${name}"]`);
  const label = root.querySelector<HTMLElement>(`[data-select-label="${name}"]`);
  const option = root.querySelector<HTMLElement>(`[data-select-option="${name}"][data-value="${value}"]`);
  if (!input || !label || !option) return;
  input.value = value;
  label.textContent = option.textContent;
  root.querySelectorAll(`[data-select-option="${name}"]`).forEach((item) => item.setAttribute('aria-selected', String(item === option)));
}

function setInputs(root: PlannerRoot, inputs: ExportInputs): void {
  updateSelect(root, 'resolution', inputs.resolution);
  updateSelect(root, 'frameRate', String(inputs.frameRate));
  updateSelect(root, 'codec', inputs.codec);
  Object.entries(inputs).forEach(([name, value]) => {
    const input = root.querySelector<HTMLInputElement>(`[data-input="${name}"]`);
    if (input) input.value = String(value);
  });
}

function closeSelect(root: PlannerRoot, select: HTMLElement): void {
  const menu = select.querySelector<HTMLElement>('[data-select-menu]');
  const trigger = select.querySelector<HTMLButtonElement>('[data-select-trigger]');
  if (!menu || !trigger) return;
  menu.hidden = true;
  trigger.setAttribute('aria-expanded', 'false');
  select.classList.remove('is-open');
}

function setupSelects(root: PlannerRoot, onChange: () => void): void {
  root.querySelectorAll<HTMLElement>('[data-custom-select]').forEach((select) => {
    const trigger = select.querySelector<HTMLButtonElement>('[data-select-trigger]');
    const menu = select.querySelector<HTMLElement>('[data-select-menu]');
    if (!trigger || !menu) return;
    trigger.addEventListener('click', () => {
      const open = menu.hidden;
      root.querySelectorAll<HTMLElement>('[data-custom-select]').forEach((item) => closeSelect(root, item));
      menu.hidden = !open;
      trigger.setAttribute('aria-expanded', String(open));
      select.classList.toggle('is-open', open);
    });
    select.querySelectorAll<HTMLButtonElement>('[data-select-option]').forEach((option) => option.addEventListener('click', () => {
      updateSelect(root, option.dataset.selectOption ?? '', option.dataset.value ?? '');
      closeSelect(root, select);
      onChange();
    }));
  });
  document.addEventListener('click', (event) => {
    if (!(event.target instanceof Node) || root.contains(event.target)) return;
    root.querySelectorAll<HTMLElement>('[data-custom-select]').forEach((select) => closeSelect(root, select));
  });
}

function render(root: PlannerRoot, ui: Record<string, string>): void {
  const inputs = readInputs(root);
  const result = calculateExport(inputs);
  const evaluation = evaluateExport(inputs, result, ui);
  const output = (name: string) => root.querySelector<HTMLElement>(`[data-output="${name}"]`);
  const values: Record<string, string> = {
    fileSize: formatFileSize(result.fileSizeBytes), dataRate: `${formatNumber(result.totalDataRateMbps, 2)} Mbps`,
    videoBytes: formatFileSize(result.videoBytes), audioBytes: formatFileSize(result.audioBytes), overheadBytes: formatFileSize(result.overheadBytes),
  };
  Object.entries(values).forEach(([name, value]) => { const target = output(name); if (target) target.textContent = value; });
  const status = output('status');
  if (status) { status.textContent = evaluation.tone === 'ready' ? ui.statusReady : ui.statusCheck; status.dataset.tone = evaluation.tone; }
  const warning = output('warning');
  if (warning) { warning.textContent = evaluation.warnings.join(' '); warning.hidden = evaluation.warnings.length === 0; }
  const scene = root.querySelector<SVGSVGElement>('[data-output="scene"]');
  if (scene) renderScene(scene, result);
  const comparison = output('comparison');
  if (comparison) renderComparison(comparison, result, { h264: ui.codecH264, h265: ui.codecH265, av1: ui.codecAv1 });
  saveExportInputs(inputs);
}

function setupPresets(root: PlannerRoot, onChange: () => void): void {
  root.querySelectorAll<HTMLButtonElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => {
    setInputs(root, getPresetInputs(button.dataset.preset as PresetId));
    root.querySelectorAll('[data-preset]').forEach((item) => item.setAttribute('aria-pressed', String(item === button)));
    onChange();
  }));
}

export function initVideoExportPlanner(): void {
  document.querySelectorAll<PlannerRoot>('[data-video-export-planner]').forEach((root) => {
    const config = readConfig(root);
    setInputs(root, { ...config.defaults, ...loadExportInputs() });
    const refresh = () => render(root, config.ui);
    setupSelects(root, refresh);
    setupPresets(root, refresh);
    root.querySelectorAll<HTMLInputElement>('[data-input]').forEach((input) => input.addEventListener('input', refresh));
    refresh();
  });
}

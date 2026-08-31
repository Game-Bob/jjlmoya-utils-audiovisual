import type { ExportInputs } from './logic';

const STORAGE_KEY = 'jjlmoya-video-export-planner';

export function loadExportInputs(): Partial<ExportInputs> {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed: unknown = JSON.parse(raw);
    return parsed && typeof parsed === 'object' ? parsed as Partial<ExportInputs> : {};
  } catch {
    return {};
  }
}

export function saveExportInputs(inputs: ExportInputs): void {
  try { window.localStorage.setItem(STORAGE_KEY, JSON.stringify(inputs)); } catch {}
}

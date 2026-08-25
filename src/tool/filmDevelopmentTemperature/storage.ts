import type { CalculatorState, UnitSystem } from './logic';

const STORAGE_KEY = 'film-development-temperature-state-v1';

export const loadState = (): CalculatorState | null => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (!saved) return null;
    const parsed = JSON.parse(saved) as Partial<CalculatorState>;
    if (typeof parsed.entryId !== 'string' || typeof parsed.temperatureC !== 'number') return null;
    const unitSystem: UnitSystem = parsed.unitSystem === 'imperial' ? 'imperial' : 'metric';
    return { entryId: parsed.entryId, temperatureC: parsed.temperatureC, unitSystem };
  } catch {
    return null;
  }
};

export const saveState = (state: CalculatorState): void => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
};

export const clearState = (): void => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {}
};

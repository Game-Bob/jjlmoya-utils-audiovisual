export interface StorageState {
  baseIso: number;
  baseAperture: number;
  baseShutter: number;
  stepMode: 'full' | 'half' | 'third';
  lockMode: 'iso' | 'aperture' | 'shutter';
  targetIso: number;
  targetAperture: number;
  targetShutter: number;
}

const STORAGE_KEY = 'jjlmoya_equivalent_exposure_state';

const DEFAULT_STATE: StorageState = {
  baseIso: 100,
  baseAperture: 8.0,
  baseShutter: 1 / 125,
  stepMode: 'third',
  lockMode: 'iso',
  targetIso: 100,
  targetAperture: 4.0,
  targetShutter: 1 / 500,
};

export function loadState(): StorageState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_STATE;
    const parsed = JSON.parse(raw);
    return { ...DEFAULT_STATE, ...parsed };
  } catch {
    return DEFAULT_STATE;
  }
}

export function saveState(state: Partial<StorageState>): void {
  try {
    const current = loadState();
    const updated = { ...current, ...state };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch {}
}

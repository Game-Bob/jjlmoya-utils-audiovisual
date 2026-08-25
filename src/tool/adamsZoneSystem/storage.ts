import type { DevelopmentMode, ZoneState } from './logic';

const STORAGE_KEY = 'jjlmoya-adams-zone-system';
const DEFAULT_STATE: ZoneState = { measuredZone: 3, targetZone: 3, development: 'normal' };

const isDevelopmentMode = (value: unknown): value is DevelopmentMode => value === 'normal' || value === 'minus' || value === 'plus';

const isZoneState = (value: unknown): value is ZoneState => {
  if (!value || typeof value !== 'object') return false;
  const candidate = value as Record<string, unknown>;
  return typeof candidate.measuredZone === 'number'
    && typeof candidate.targetZone === 'number'
    && isDevelopmentMode(candidate.development);
};

export const getDefaultState = (): ZoneState => ({ ...DEFAULT_STATE });

export const loadState = (): ZoneState => {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return getDefaultState();
    const parsed: unknown = JSON.parse(raw);
    return isZoneState(parsed) ? parsed : getDefaultState();
  } catch {
    return getDefaultState();
  }
};

export const saveState = (state: ZoneState): void => {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
};


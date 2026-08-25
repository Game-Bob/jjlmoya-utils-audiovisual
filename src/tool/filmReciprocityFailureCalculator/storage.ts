const STORAGE_KEY = 'film-reciprocity-failure-calculator';

export interface FilmReciprocityState {
  filmId: string;
  meteredSeconds: number;
}

export function readStoredState(fallback: FilmReciprocityState): FilmReciprocityState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return fallback;
    const parsed = JSON.parse(raw) as Partial<FilmReciprocityState>;
    if (typeof parsed.filmId !== 'string' || typeof parsed.meteredSeconds !== 'number') return fallback;
    return { filmId: parsed.filmId, meteredSeconds: parsed.meteredSeconds };
  } catch {
    return fallback;
  }
}

export function writeStoredState(state: FilmReciprocityState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

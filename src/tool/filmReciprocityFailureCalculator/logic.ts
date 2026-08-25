export interface FilmProfile {
  id: string;
  name: string;
  factor: number;
  iso: number;
}

export interface ReciprocityInput {
  meteredSeconds: number;
  factor: number;
}

export interface ReciprocityResult {
  meteredSeconds: number;
  correctedSeconds: number;
  displaySeconds: number;
  addedSeconds: number;
  correctionStops: number;
  factor: number;
  needsCorrection: boolean;
}

export const FILM_PROFILES: FilmProfile[] = [
  { id: 'sfx', name: 'ILFORD SFX 200', factor: 1.43, iso: 200 },
  { id: 'pan-f-plus', name: 'ILFORD PAN F+', factor: 1.33, iso: 50 },
  { id: 'delta-100', name: 'ILFORD DELTA 100', factor: 1.26, iso: 100 },
  { id: 'delta-400', name: 'ILFORD DELTA 400', factor: 1.41, iso: 400 },
  { id: 'delta-3200', name: 'ILFORD DELTA 3200', factor: 1.33, iso: 3200 },
  { id: 'fp4-plus', name: 'ILFORD FP4+', factor: 1.26, iso: 125 },
  { id: 'hp5-plus', name: 'ILFORD HP5+', factor: 1.31, iso: 400 },
  { id: 'xp2', name: 'ILFORD XP2', factor: 1.31, iso: 400 },
  { id: 'ortho-plus', name: 'ILFORD ORTHO+', factor: 1.25, iso: 80 },
  { id: 'kentmere-100', name: 'KENTMERE 100', factor: 1.26, iso: 100 },
  { id: 'kentmere-400', name: 'KENTMERE 400', factor: 1.30, iso: 400 },
];

export const DEFAULT_FILM_ID = 'hp5-plus';
export const DEFAULT_METERED_SECONDS = 10;

export function findFilmProfile(id: string): FilmProfile {
  return FILM_PROFILES.find((film) => film.id === id) ?? FILM_PROFILES[6];
}

export function calculateReciprocity(input: ReciprocityInput): ReciprocityResult {
  const meteredSeconds = Math.max(0.1, input.meteredSeconds);
  const factor = Math.max(1, input.factor);
  const needsCorrection = meteredSeconds > 1;
  const correctedSeconds = needsCorrection ? meteredSeconds ** factor : meteredSeconds;
  const addedSeconds = correctedSeconds - meteredSeconds;
  const correctionStops = Math.log2(correctedSeconds / meteredSeconds);
  const displaySeconds = roundDisplaySeconds(correctedSeconds);

  return {
    meteredSeconds,
    correctedSeconds,
    displaySeconds,
    addedSeconds,
    correctionStops,
    factor,
    needsCorrection,
  };
}

function roundDisplaySeconds(seconds: number): number {
  if (seconds < 10) return Math.round(seconds * 10) / 10;
  if (seconds < 60) return Math.round(seconds);
  return Math.round(seconds);
}

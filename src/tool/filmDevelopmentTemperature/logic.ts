export interface DevelopmentEntry {
  id: string;
  film: string;
  developer: string;
  dilution: string;
  ei: string;
  baseMinutes: number;
}

export interface CalculatorState {
  entryId: string;
  temperatureC: number;
  unitSystem?: UnitSystem;
}

export type UnitSystem = 'metric' | 'imperial';

export interface TemperatureRow {
  temperatureC: number;
  minutes: number;
  differenceC: number;
  isCurrent: boolean;
  isShort: boolean;
}

export interface DevelopmentResult {
  entry: DevelopmentEntry;
  temperatureC: number;
  adjustedMinutes: number;
  temperatureDifferenceC: number;
  rows: TemperatureRow[];
  isShort: boolean;
  status: 'cool' | 'steady' | 'warm';
}

export const MIN_TEMPERATURE_C = 15;
export const MAX_TEMPERATURE_C = 25;
export const REFERENCE_TEMPERATURE_C = 20;

export const toFahrenheit = (temperatureC: number): number => (temperatureC * 9) / 5 + 32;

export const toCelsius = (temperatureF: number): number => ((temperatureF - 32) * 5) / 9;

export const getTemperatureUnit = (unitSystem: UnitSystem): string => unitSystem === 'imperial' ? '°F' : '°C';

export const getTemperatureBounds = (unitSystem: UnitSystem): { min: number; max: number; step: number } => unitSystem === 'imperial'
  ? { min: 59, max: 77, step: 1 }
  : { min: 15, max: 25, step: 0.5 };

export const DEVELOPMENT_ENTRIES: readonly [DevelopmentEntry, ...DevelopmentEntry[]] = [
  { id: 'hp5-ddx-1-4', film: 'HP5 Plus', developer: 'ILFOTEC DD-X', dilution: '1+4', ei: 'EI 400/27', baseMinutes: 9 },
  { id: 'hp5-ilfosol-1-14', film: 'HP5 Plus', developer: 'ILFOSOL 3', dilution: '1+14', ei: 'EI 400/27', baseMinutes: 11 },
  { id: 'hp5-hc-1-31', film: 'HP5 Plus', developer: 'ILFOTEC HC', dilution: '1+31', ei: 'EI 400/27', baseMinutes: 6.5 },
  { id: 'hp5-lc29-1-29', film: 'HP5 Plus', developer: 'ILFOTEC LC29', dilution: '1+29', ei: 'EI 400/27', baseMinutes: 9 },
  { id: 'hp5-id11-stock', film: 'HP5 Plus', developer: 'ID-11', dilution: 'Stock', ei: 'EI 400/27', baseMinutes: 7.5 },
  { id: 'hp5-id11-1-1', film: 'HP5 Plus', developer: 'ID-11', dilution: '1+1', ei: 'EI 400/27', baseMinutes: 13 },
  { id: 'hp5-microphen-stock', film: 'HP5 Plus', developer: 'MICROPHEN', dilution: 'Stock', ei: 'EI 400/27', baseMinutes: 6.5 },
  { id: 'fp4-ddx-1-4', film: 'FP4 Plus', developer: 'ILFOTEC DD-X', dilution: '1+4', ei: 'EI 125/22', baseMinutes: 10 },
  { id: 'fp4-ilfosol-1-9', film: 'FP4 Plus', developer: 'ILFOSOL 3', dilution: '1+9', ei: 'EI 125/22', baseMinutes: 4.25 },
  { id: 'fp4-ilfosol-1-14', film: 'FP4 Plus', developer: 'ILFOSOL 3', dilution: '1+14', ei: 'EI 125/22', baseMinutes: 7.5 },
  { id: 'fp4-hc-1-31', film: 'FP4 Plus', developer: 'ILFOTEC HC', dilution: '1+31', ei: 'EI 125/22', baseMinutes: 8 },
  { id: 'fp4-lc29-1-29', film: 'FP4 Plus', developer: 'ILFOTEC LC29', dilution: '1+29', ei: 'EI 125/22', baseMinutes: 12 },
  { id: 'fp4-id11-stock', film: 'FP4 Plus', developer: 'ID-11', dilution: 'Stock', ei: 'EI 125/22', baseMinutes: 8.5 },
  { id: 'fp4-id11-1-1', film: 'FP4 Plus', developer: 'ID-11', dilution: '1+1', ei: 'EI 125/22', baseMinutes: 11 },
  { id: 'fp4-microphen-stock', film: 'FP4 Plus', developer: 'MICROPHEN', dilution: 'Stock', ei: 'EI 125/22', baseMinutes: 8 },
  { id: 'delta100-ddx-1-4', film: 'DELTA 100 Professional', developer: 'ILFOTEC DD-X', dilution: '1+4', ei: 'EI 100/21', baseMinutes: 10.5 },
  { id: 'delta100-ilfosol-1-9', film: 'DELTA 100 Professional', developer: 'ILFOSOL 3', dilution: '1+9', ei: 'EI 100/21', baseMinutes: 5 },
  { id: 'delta100-hc-1-31', film: 'DELTA 100 Professional', developer: 'ILFOTEC HC', dilution: '1+31', ei: 'EI 100/21', baseMinutes: 6 },
  { id: 'delta100-lc29-1-29', film: 'DELTA 100 Professional', developer: 'ILFOTEC LC29', dilution: '1+29', ei: 'EI 100/21', baseMinutes: 7.5 },
  { id: 'delta100-id11-stock', film: 'DELTA 100 Professional', developer: 'ID-11', dilution: 'Stock', ei: 'EI 100/21', baseMinutes: 8.5 },
  { id: 'delta100-id11-1-1', film: 'DELTA 100 Professional', developer: 'ID-11', dilution: '1+1', ei: 'EI 100/21', baseMinutes: 11 },
  { id: 'delta100-microphen-stock', film: 'DELTA 100 Professional', developer: 'MICROPHEN', dilution: 'Stock', ei: 'EI 100/21', baseMinutes: 6.5 },
  { id: 'delta100-perceptol-stock', film: 'DELTA 100 Professional', developer: 'PERCEPTOL', dilution: 'Stock', ei: 'EI 100/21', baseMinutes: 15 },
];

export const FILM_NAMES = [...new Set(DEVELOPMENT_ENTRIES.map((entry) => entry.film))];

export const getEntry = (entryId: string): DevelopmentEntry => DEVELOPMENT_ENTRIES.find((entry) => entry.id === entryId) ?? DEVELOPMENT_ENTRIES[0];

export const getEntriesForFilm = (film: string): DevelopmentEntry[] => DEVELOPMENT_ENTRIES.filter((entry) => entry.film === film);

export const getEntriesForDeveloper = (film: string, developer: string): DevelopmentEntry[] => getEntriesForFilm(film).filter((entry) => entry.developer === developer);

export const roundToQuarterMinute = (minutes: number): number => Math.round(minutes * 4) / 4;

export const adjustDevelopmentTime = (baseMinutes: number, temperatureC: number): number => {
  const difference = temperatureC - REFERENCE_TEMPERATURE_C;
  const factor = difference >= 0 ? Math.pow(0.9, difference) : Math.pow(1.1, Math.abs(difference));
  return roundToQuarterMinute(Math.max(0.25, baseMinutes * factor));
};

const clampTemperature = (temperatureC: number): number => Math.min(MAX_TEMPERATURE_C, Math.max(MIN_TEMPERATURE_C, temperatureC));

const getTemperatureRows = (temperatureC: number, baseMinutes: number): TemperatureRow[] => {
  const current = clampTemperature(temperatureC);
  const temperatures = Array.from({ length: 11 }, (_, index) => clampTemperature(current - 5 + index));
  return [...new Set(temperatures)].map((rowTemperature) => ({
    temperatureC: rowTemperature,
    minutes: adjustDevelopmentTime(baseMinutes, rowTemperature),
    differenceC: rowTemperature - REFERENCE_TEMPERATURE_C,
    isCurrent: rowTemperature === current,
    isShort: adjustDevelopmentTime(baseMinutes, rowTemperature) < 5,
  }));
};

const getStatus = (temperatureC: number): DevelopmentResult['status'] => {
  if (temperatureC < 19) return 'cool';
  if (temperatureC > 21) return 'warm';
  return 'steady';
};

export const calculateDevelopment = (state: CalculatorState): DevelopmentResult => {
  const entry = getEntry(state.entryId);
  const temperatureC = clampTemperature(state.temperatureC);
  const adjustedMinutes = adjustDevelopmentTime(entry.baseMinutes, temperatureC);
  return {
    entry,
    temperatureC,
    adjustedMinutes,
    temperatureDifferenceC: temperatureC - REFERENCE_TEMPERATURE_C,
    rows: getTemperatureRows(temperatureC, entry.baseMinutes),
    isShort: adjustedMinutes < 5,
    status: getStatus(temperatureC),
  };
};

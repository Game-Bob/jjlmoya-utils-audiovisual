import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulator-opoznienia-audio-odleglosc-temperatura';
const title = 'Kalkulator Opóźnienia Audio według Odległości i Temperatury';
const description = 'Oblicz czas opóźnienia akustycznego, prędkość dźwięku w powietrzu, przesunięcie fazowe, liczbę próbek cyfrowych i spadek SPL dla wież opóźniających PA.';

const ui: AudioDelayUI = {
  title: 'Kalkulator Opóźnienia Audio według Odległości i Temperatury',
  subtitle: 'Oblicz czas opóźnienia rozchodzenia się dźwięku, przesunięcie fazy akustycznej, liczbę próbek i tłumienie SPL dla głośników opóźniających PA.',
  unitSystemLabel: 'Jednostki',
  unitMetric: 'Metryczne (m, °C)',
  unitImperial: 'Imperialne (ft, °F)',
  distanceLabel: 'Odległość do Głośnika Opóźniającego',
  temperatureLabel: 'Temperatura Powietrza Otoczenia',
  humidityLabel: 'Wilgotność Względna',
  sampleRateLabel: 'Częstotliwość Probkowania Konsolety',
  presetsTitle: 'Szybkie Ustawienia Scenariuszy',
  presetSummerFestival: 'Festiwal Letni (35°C, 40m)',
  presetIndoorConcert: 'Koncert w Hali (20°C, 25m)',
  presetTheater: 'Teatr Akustyczny (22°C, 15m)',
  presetWinterOutdoor: 'Impreza Plenerowa Zimą (5°C, 50m)',
  resultDelayMs: 'Czas Opóźnienia',
  resultSamples: 'Próbki Cyfrowe',
  resultSpeed: 'Prędkość Dźwięku',
  resultSplLoss: 'Tłumienie SPL',
  phaseStatusLabel: 'Stan Wyrównania Fazy Akustycznej',
  statusDirectZone: 'Synchroniczna Faza Bezpośrednia',
  statusHaasZone: 'Strefa Efektu Haasa',
  statusEchoZone: 'Strefa Odczuwalnego Echa',
  statusExtremeZone: 'Krytyczne Przesunięcie Opóźnienia',
  advicePhaseAligned: 'Sygnały są akustycznie zsynchronizowane w granicach 5ms. Wymagane minimalne opóźnienie.',
  adviceMinorHaas: 'Dźwięk dociera w strefie Haasa (5-35ms). Naturalna lokalizacja pozostaje na scenie głównej.',
  adviceHaasDelayNeeded: 'Wieża opóźniająca wymaga dokładnego przesunięcia czasowego, aby zapobiec powstawaniu echa.',
  adviceCriticalDelayNeeded: 'Duże przesunięcie opóźnienia. Zastosuj precyzyjne opóźnienie próbek, aby uniknąć filtrowania grzebieniowego.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Główne PA',
  delaySpeakerLabel: 'Wieża Opóźniająca',
  audienceLabel: 'Strefa Widowni',
  haasZoneLegend: 'Strefa Haasa (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Dlaczego temperatura powietrza jest ważna przy obliczaniu opóźnienia audio?',
    answer: 'Prędkość dźwięku w powietrzu zależy bezpośrednio od temperatury. W 0 stopniach Celsjusza dźwięk porusza się z prędkością 331.3 metra na sekundę, podczas gdy w 30 stopniach Celsjusza przyspiesza do około 349 metrów na sekundę.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Zmierz Odległość Fizyczną',
    text: 'Zmierz fizyczną odległość między głównym PA a wieżą opóźniającą za pomocą dalmierza laserowego.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funkcje Wyrównania Opóźnienia Akustycznego',
    items: [
      'Precyzyjne obliczanie prędkości dźwięku na podstawie temperatury i wilgotności',
      'Natychmiastowe przeliczanie na próbki cyfrowe konsolety',
      'Ocena strefy efektu Haasa i wyrównania fazowego',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<AudioDelayUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulator-opoznienia-audio-odleglosc-temperatura';
const title = 'Kalkulator Opóźnienia Audio według Odległości i Temperatury';
const description = 'Oblicz czas opóźnienia akustycznego, prędkość dźwięku w powietrzu, przesunięcie fazowe, próbki cyfrowe oraz spadek SPL dla kolumn opóźniających PA.';

const ui: AudioDelayUI = {
  title: 'Kalkulator Opóźnienia Audio według Odległości i Temperatury',
  subtitle: 'Oblicz czas opóźnienia propagacji dźwięku, przesunięcie fazowe, liczbę próbek oraz tłumienie SPL dla strefowych głośników opóźniających PA.',
  unitSystemLabel: 'System Jednostek',
  unitMetric: 'Metryczny (m, °C)',
  unitImperial: 'Imperialny (ft, °F)',
  distanceLabel: 'Odległość do Głośnika Opóźniającego',
  temperatureLabel: 'Temperatura Powietrza Otoczenia',
  humidityLabel: 'Wilgotność Względna',
  sampleRateLabel: 'Częstotliwość Próbkowania Konsolety',
  presetsTitle: 'Szybkie Nastawy Scenariuszy',
  presetSummerFestival: 'Festiwal Letni (35°C, 40m)',
  presetIndoorConcert: 'Koncert Halowy (20°C, 25m)',
  presetTheater: 'Teatr Akustyczny (22°C, 15m)',
  presetWinterOutdoor: 'Wydarzenie Zimowe (5°C, 50m)',
  resultDelayMs: 'Czas Opóźnienia',
  resultSamples: 'Próbki Cyfrowe',
  resultSpeed: 'Prędkość Dźwięku',
  resultSplLoss: 'Tłumienie SPL',
  phaseStatusLabel: 'Stan Wyrównania Fazy Akustycznej',
  statusDirectZone: 'Synchroniczny Front Fali Bezpośredniej',
  statusHaasZone: 'Strefa Precedencji Haasa',
  statusEchoZone: 'Strefa Wyczuwalnego Echa',
  statusExtremeZone: 'Krytyczne Przesunięcie Opóźnienia',
  advicePhaseAligned: 'Sygnały są zsynchronizowane akustycznie w granicach 5ms. Wymagane minimalne przetwarzanie opóźnienia.',
  adviceMinorHaas: 'Dźwięk dociera w strefie Haasa (5-35ms). Naturalna lokalizacja pozostaje na scenie głównej.',
  adviceHaasDelayNeeded: 'Kolumna opóźniająca wymaga dokładnego przesunięcia czasowego, aby zapobiec odrębnemu echu.',
  adviceCriticalDelayNeeded: 'Duże przesunięcie opóźnienia. Zastosuj precyzyjne opóźnienie próbkowe w celu uniknięcia filtracji grzebieniowej.',
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
    answer: 'Prędkość dźwięku w powietrzu zależy bezpośrednio od temperatury. Przy 0 stopniach Celsjusza dźwięk rozchodzi się z prędkością 331.3 m/s, podczas gdy przy 30 stopniach rośnie do około 349 m/s.',
  },
  {
    question: 'Czym jest Efekt Haasa w nagłośnieniu koncertowym?',
    answer: 'Efekt Haasa (zjawisko pierwszeństwa) mówi, że słuch ludzki lokalizuje źródło dźwięku w kierunku sygnału, który dociera jako pierwszy, jeśli sygnały wtórne przybywają w ciągu 5 do 35 milisekund.',
  },
  {
    question: 'Jak przeliczyć czas opóźnienia na próbki miksera cyfrowego?',
    answer: 'Pomnóż czas opóźnienia w sekundach przez częstotliwość próbkowania konsolety. Na przykład 50 milisekund przy 48 kHz to 0.05 pomnożone przez 48000, co daje dokładnie 2400 próbek.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Zmierz Odległość Fizyczną',
    text: 'Zmień odległość fizyczną między głównym systemem PA a wieżą opóźniającą za pomocą dalmierza laserowego.',
  },
  {
    name: 'Sprawdź Temperaturę Otoczenia',
    text: 'Wprowadź aktualną temperaturę powietrza w miejscu wydarzenia, aby wyznaczyć dokładną prędkość dźwięku.',
  },
  {
    name: 'Wybierz Częstotliwość Próbkowania',
    text: 'Ustaw częstotliwość próbkowania miksera cyfrowego na 44.1 kHz, 48 kHz, 96 kHz lub 192 kHz.',
  },
  {
    name: 'Zastosuj Obliczone Opóźnienie',
    text: 'Wprowadź czas opóźnienia w milisekundach lub próbkach do procesora głośnikowego.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Cechy Wyrównania Opóźnienia Akustycznego',
    items: [
      'Precyzyjne obliczanie prędkości dźwięku na podstawie temperatury i wilgotności',
      'Natychmiastowa konwersja na próbki cyfrowe (44.1k, 48k, 96k, 192k)',
      'Ocena strefy efektu Haasa i wyrównania fazowego',
      'Szacowanie tłumienia poziomu ciśnienia akustycznego SPL w decybelach',
    ],
  },
  { type: 'title', text: 'Propagacja Dźwięku i Termodynamika Atmosferyczna', level: 2 },
  {
    type: 'paragraph',
    html: 'Dźwięk rozchodzi się w powietrzu jako mechaniczna fala ciśnienia. Jego prędkość zależy głównie od temperatury powietrza, obliczanej ze wzoru <code>c = 331.3 * sqrt(1 + T / 273.15)</code>.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Prędkość Dźwięku przy 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Okno Precedencji Haasa', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Precyzja Próbek Miksera', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Wyrównanie Fazy Akustycznej i Zapobieganie Filtracji Grzebieniowej', level: 3 },
  {
    type: 'paragraph',
    html: 'Gdy dwa głośniki oddalone od siebie emitują ten sam sygnał bez korekcji czasowej, ich fronty fal nakładają się z różnicami fazowymi, powodując filtrację grzebieniową.',
  },
  {
    type: 'list',
    items: [
      '<strong>Korekcja Czasowa:</strong> Opóźnia dodatkowe wieże, aby zgrać je z głównym systemem PA.',
      '<strong>Zapobieganie Filtracji Grzebieniowej:</strong> Eliminuje znikanie częstotliwości w pasmie słyszalnym.',
      '<strong>Lokalizacja Haasa:</strong> Utrzymuje wrażenie źródła dźwięku na scenie głównej.',
      '<strong>Precyzja Próbkowa:</strong> Dostarcza dokładną liczbę próbek cyfrowych dla matryc wyjściowych.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Wyrównanie Bezpośrednie PA',
        description: 'Opóźnienie fizyczne równe czasowi przelotu dźwięku',
        icon: 'mdi:target',
        points: ['Doskonała koherencja fazowa', 'Idealne dla głośników dogłaśniających', 'Zero filtracji grzebieniowej'],
      },
      {
        title: 'Wyrównanie z Przesunięciem Haasa',
        description: 'Opóźnienie fizyczne plus 5 do 15ms offsetu precedencji',
        icon: 'mdi:music-clef-treble',
        points: ['Naturalna lokalizacja na scenie', 'Lepsza zrozumiałość mowy', 'Idealne dla wież opóźniających'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Scenariusz Nagłośnienia', 'Odległość (m)', 'Temp (°C)', 'Czas Opóźnienia (ms)', 'Próbki (48kHz)'],
    rows: [
      ['Dogłośnienie Balkonu w Teatrze', '15 m', '22 °C', '43.5 ms', '2 090 próbek'],
      ['Koncert w Hali Widowiskowej', '25 m', '20 °C', '72.8 ms', '3 494 próbki'],
      ['Scena Główna Festiwalu', '40 m', '35 °C', '113.6 ms', '5 453 próbki'],
      ['Zimowa Impreza Plenerowa', '50 m', '5 °C', '149.5 ms', '7 176 próbek'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Sub-milisekundowa dokładność próbkowa dla mikserów cyfrowych',
        con: 'Wymaga dokładnego pomiaru odległości fizycznej',
      },
      {
        pro: 'Uwzględnia temperaturę otoczenia i wilgotność względną',
        con: 'Zmienne wiatry w plenerze wymagają ciągłego monitorowania',
      },
    ],
    proTitle: 'Zalety',
    conTitle: 'Wskazówki',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Efekt Haasa',
        definition: 'Zjawisko psychofizyczne, w którym słuch lokalizuje dźwięk w kierunku pierwszego sygnału w 5-35 ms.',
      },
      {
        term: 'Filtracja Grzebieniowa',
        definition: 'Zniekształcenie charakterystyki częstotliwościowej wynikające z dodania sygnału z jego wersją opóźnioną.',
      },
      {
        term: 'Częstotliwość Próbkowania',
        definition: 'Liczba próbek audio przetwarzanych w ciągu sekundy przez cyfrową konsoletę lub procesor DSP.',
      },
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

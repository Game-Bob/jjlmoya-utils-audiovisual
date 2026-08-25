import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'kalkulator-efektu-schwarzschilda-fotografia-analogowa';
const title = 'Kalkulator Efektu Schwarzschilda (Własność Wzajemności Filmu)';
const description = 'Koryguj długie czasy naświetlania w fotografii analogowej z oficjalnymi współczynnikami ILFORD i KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Pytania dotyczące efektu Schwarzschilda',
  bibliographyTitle: 'Źródła',
  studyLabel: 'Analiza długich czasów naświetlania',
  studyTitle: 'Daj emulsji odpowiednią ilość czasu',
  studyText: 'Światłomierz mierzy natężenie światła w danej chwili. Emulsja fotograficzna przy długich czasach potrzebuje go więcej do uzyskania tej samej gęstości.',
  filmLabel: 'Wybierz błonę fotograficzną',
  filmHint: 'Użyj oficjalnego współczynnika opublikowanego dla filmu ILFORD lub KENTMERE.',
  measuredTimeLabel: 'Wpisz czas ze światłomierza',
  measuredTimeHint: 'Korekcja ma zastosowanie dla czasów powyżej 1 sekundy.',
  secondsUnit: 'sekundy',
  filmMenuLabel: 'Menu wyboru błony',
  presetsLabel: 'Szybkie ustawienia w terenie',
  presetShort: 'Próg korekcji',
  presetNight: 'Ulica nocą',
  presetDeepNight: 'Głęboka noc',
  resultLabel: 'Skorygowany czas naświetlania',
  correctedTimeLabel: 'Zalecany czas końcowy',
  addedTimeLabel: 'Dodatkowy czas',
  correctionStopsLabel: 'Korekcja w stopniach przysłony (EV)',
  correctionFactorLabel: 'Współczynnik filmu',
  noCorrection: 'Korekcja nie jest wymagana',
  correctionNeeded: 'Korekcja efektu Schwarzschilda aktywna',
  longExposure: 'Zakres długich naświetlań',
  meterTimeLabel: 'Czas ze światłomierza',
  filmTimeLabel: 'Czas skorygowany',
  exposurePathLabel: 'Wizualny przebieg naświetlania',
  exposurePathText: 'Pasek filmu wydłuża się od zmierzonego czasu początkowego do wartości skorygowanej.',
  formulaLabel: 'Wzór obliczeniowy',
  formulaText: 'Skorygowany czas = czas zmierzony podniesiony do potęgi współczynnika filmu.',
  manufacturerNote: 'Współczynniki pochodzą z dokumentacji technicznej HARMAN. Traktuj wynik jako sprawdzony punkt wyjścia.',
  resetLabel: 'Zresetuj obliczenia',
  invalidTime: 'Wpisz czas większy niż zero.',
  sourceLabel: 'Uwaga producenta',
};

const faq: FAQItem[] = [
  {
    question: 'Czym jest efekt Schwarzschilda (niedowład wzajemności) w fotografii?',
    answer: 'Efekt Schwarzschilda to spadek rzeczywistej czułości błony fotograficznej przy długich czasach naświetlania. To samo światło dostarczane przez dłuższy czas daje mniejszą gęstość obrazu niż wynika z pomiaru światłomierza.',
  },
  {
    question: 'Jak kalkulator oblicza skorygowany czas naświetlania?',
    answer: 'Wykorzystuje wzór HARMAN: czas skorygowany (Tc) równa się czasowi zmierzonemu (Tm) podniesionemu do potęgi współczynnika P. Czasy do 1 sekundy nie ulegają zmianie.',
  },
  {
    question: 'Dlaczego każdy film ma inny współczynnik korekcji?',
    answer: 'Wydajność tworzenia zarodków utajonych zależy od budowy emulsji. HARMAN publikuje osobny współczynnik dla każdego filmu (HP5+, FP4+, DELTA, KENTMERE).',
  },
  {
    question: 'Czy obliczony czas gwarantuje idealny negatyw?',
    answer: 'Nie. Przy bardzo długich czasach na wynik wpływa także dokładność światłomierza, kontrast sceny i proces wywoływania. Używaj wyniku jako punku wyjścia i wykonuj bracketing.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Wybierz film', text: 'Wskaż używany film czarno-biały, aby zastosować jego oficjalny współczynnik.' },
  { name: 'Podaj czas ze światłomierza', text: 'Wpisz zmierzony czas w sekundach lub użyj gotowego szablonu.' },
  { name: 'Odczytaj skorygowany czas', text: 'Ustaw migawkę aparatu na wyliczony czas końcowy.' },
  { name: 'Wykonaj bracketing', text: 'W trudnych warunkach nocnych wykonaj dodatkowe ujęcia z lekko zmienionym czasem.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Udokumentowana korekcja długich naświetlań',
    items: [
      'Stosuje oficjalny współczynnik dla 11 filmów czarno-białych ILFORD i KENTMERE',
      'Porównuje pomiar światłomierza z rzeczywistym czasem wymaganym przez emulsję',
      'Pokazuje dodatkowe sekundy, korekcję w EV oraz wizualny przebieg naświetlania',
      'Oferuje 3 wygodne szablony ułatwiające pracę podczas zdjęć nocnych',
    ],
  },
  { type: 'title', text: 'Dlaczego długie naświetlanie wymaga korekcji wzajemności', level: 2 },
  {
    type: 'paragraph',
    html: 'Przy standardowych czasach naświetlania obowiązuje prawo wzajemności (ekspozycja = natężenie światła x czas). Przy długich czasach wydajność fotochemiczna emulsji spada. Światłomierz podaje czas poprawny fizycznie, lecz zbyt krótki chemicznie.',
  },
  { type: 'title', text: 'Wzór producenta leżący u podstaw obliczeń', level: 2 },
  {
    type: 'table',
    headers: ['Film', 'Oficjalny współczynnik', 'Przykład dla 10 sekund'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 sekundy'],
      ['ILFORD FP4+', '1.26', '18.2 sekundy'],
      ['ILFORD SFX 200', '1.43', '26.9 sekundy'],
      ['KENTMERE 400', '1.30', '20.0 sekund'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Kalkulator stosuje wzór Tc = Tm<sup>P</sup>, gdzie Tm oznacza czas zmierzony w sekundach, Tc czas skorygowany, a P współczynnik opublikowany przez HARMAN. Dla czasów do 1 sekundy korekcja nie jest wymagana.',
  },
  {
    type: 'tip',
    title: 'Traktuj wyliczenie jako punkt wyjścia',
    html: 'Długie ekspozycje zależą od wielu czynników. Błędy pomiaru, kontrast kadr oraz parametry wywoływania mają duży wpływ na negatyw. Przy ważnych ujęciach wykonaj bracketing.',
  },
  { type: 'title', text: 'Kiedy stosować korekcję efektu Schwarzschilda', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Stosuj oficjalne dane:</strong> Dopasuj używany film do specyfikacji producenta.',
      '<strong>Zachowaj stały proces:</strong> Wywoływacz, temperatura i mieszanie wpływają na gęstość negatywu.',
      '<strong>Rób bracketing:</strong> Im dłuższy czas naświetlania, tym bardziej pomocne są ujęcia próbne.',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'pl',
};

export const content: ToolLocaleContent<FilmReciprocityFailureCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};

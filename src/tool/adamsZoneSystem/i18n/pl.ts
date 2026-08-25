import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'wizualizator-systemu-strefowego-ansela-adamsa-strefy-naswietlania';
const title = 'Wizualizator Systemu Strefowego Ansela Adamsa Strefy Naswietlania';
const description = 'Odkryj Strefy od 0 do IX, umiesc zmierzony ton z dokladnymi zmianami przysłony i polacz decyzje o naswietlaniu z wywoływaniem normalnym, N minus i N plus.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Pytania o System Strefowy',
  bibliographyTitle: 'Źródła',
  orientationTitle: 'Usytuowanie strefy',
  orientationText: 'Wybierz ton zmierzony w scenie, wskaż strefę docelową i użyj korekty w stopniach przysłony jako instrukcji naświetlania. Wskazówka wywoływania pomaga chronić światła lub otwierać cienie.',
  measuredToneLabel: 'Ton zmierzony w scenie',
  targetPlacementLabel: 'Umieść ten ton w',
  developmentLabel: 'Zamiar wywoływania',
  normalDevelopment: 'Normalne',
  minusDevelopment: 'N minus',
  plusDevelopment: 'N plus',
  presetsLabel: 'Rozpocznij od notatki z terenu',
  presetShadow: 'Cień z fakturą',
  presetSkin: 'Jasna skóra',
  presetSnow: 'Śnieg w słońcu',
  presetNight: 'Cień nocny',
  zoneStripLabel: 'Pasek stref od czerni do bieli',
  meterBaselineLabel: 'Punkt odniesienia światłomierza: Strefa V',
  selectedToneLabel: 'Zmierzony ton',
  placementResultLabel: 'Wynik usytuowania',
  exposureShiftLabel: 'Przesunięcie naświetlania względem średniej szarości',
  tonalDistanceLabel: 'Odległość od zmierzonego tonu',
  luminanceLabel: 'Względna luminancja',
  stopsFromMiddleLabel: 'Stopnie od Strefy V',
  developmentAdviceLabel: 'Ocena negatywu',
  techniqueLabel: 'Wskazówka dla ciemni',
  resetLabel: 'Zresetuj przykład',
  meterAssumption: 'Światłomierz światła odbitego przypisuje każdy pomiar do średniej szarości Strefy V, o ile nie zastosujesz kompensacji.',
  zonePrefix: 'Strefa',
  zoneNames: 'Czysta czerń|Prawie czerń|Głęboki cień|Cień z fakturą|Ciemny półton|Średnia szarość|Jasny półton|Światła z fakturą|Jasne światła|Prawie biel',
  zoneDescriptions: 'Maksymalna czerń bez widocznej faktury.|Pierwsze odróżnienie od czerni bez wyraźnej faktury.|Pierwszy ślad faktury w ważnym ciemnym cieniu.|Użyteczna faktura cieni i klasyczny punkt usytuowania.|Otwarty cień i ciemne liście z wyraźnym kształtem.|Neutralny punkt odniesienia światłomierza.|Jasna skóra, zwietrzały kamień i jasne liście.|Jasna faktura gwarantująca czytelność na odbitce.|Bardzo jasny ton z minimalnymi resztkami faktury.|Prawie czysta biel jedynie ze śladem rozróżnienia.',
  increaseExposure: 'Zwiększ naświetlanie o podaną liczbę stopni, aby przenieść pomiar do wybranej strefy.',
  decreaseExposure: 'Zmniejsz naświetlanie o podaną liczbę stopni, aby utrzymać pomiar w wybranej strefie.',
  holdExposure: 'Pozostaw odczyt światłomierza bez zmian, ponieważ celem jest Strefa V.',
  protectHighlights: 'Kontrola świateł',
  openShadows: 'Rozdzielenie cieni',
  balancedPlacement: 'Zrównoważone usytuowanie',
  normalAdvice: 'Normalne wywoływanie utrzymuje kontrast sceny w pobliżu zmierzonego zakresu.',
  minusAdvice: 'Wywoływanie N minus zmniejsza kontrast sceny o wysokiej rozpiętości i pozwala zachować czytelność świateł.',
  plusAdvice: 'Wywoływanie N plus zwiększa kontrast sceny o niskiej rozpiętości i zapewnia lepsze rozdzielenie cieni.',
};

const faq: FAQItem[] = [
  {
    question: 'Co mierzy System Strefowy?',
    answer: 'System Strefowy to metoda wizualizacji i kontroli rozpiętości tonalnej fotografii od głębokiej czerni po jasną biel. Łączy zmierzoną jasność z wybraną strefą docelową i procesem wywoływania.',
  },
  {
    question: 'Dlaczego światłomierz rozpoczyna od Strefy V?',
    answer: 'Światłomierz światła odbitego jest skalibrowany tak, aby traktować średni odczyt jako średnią szarość. Aby utrzymać cień jako ciemny lub światło jako jasne, należy zastosować odpowiednią korektę.',
  },
  {
    question: 'Ile stopni przysłony dzieli poszczególne strefy?',
    answer: 'Sąsiednie pełne strefy dzieli dokładnie jeden stopień przysłony. Przejście ze Strefy V do Strefy VII wymaga zwiększenia naświetlania o dwa stopnie.',
  },
  {
    question: 'Co oznaczają N minus oraz N plus?',
    answer: 'To korekty czasu wywoływania służące do zarządzania kontrastem. N minus skraca czas wywoływania przy zbyt kontrastowych scenach, a N plus go wydłuża przy scenach płaskich.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Wybierz zmierzony ton', text: 'Wskaż strefę, która najlepiej opisuje pomierzony element sceny.' },
  { name: 'Wybierz strefę docelową', text: 'Dotknij strefy, w której dany ton powinien pojawić się na odbitce.' },
  { name: 'Zastosuj zmianę naświetlania', text: 'Wykorzystaj różnicę stopni przysłony do korekty parametrów ekspozycji.' },
  { name: 'Dopasuj wywoływanie', text: 'Użyj wskazówki wywoływania jako wytycznej dla czasu obróbki w ciemni.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Praktyczny przewodnik po Systemie Strefowym',
    items: [
      'Analizuj każdy ton od Strefy 0 do Strefy IX na czytelnym pasku tonalnym',
      'Przeliczaj planowane usytuowanie na dokładną korektę stopni przysłony od Strefy V',
      'Porównuj zmierzoną jasność z oczekiwanym odwzorowaniem na gotowej odbitce',
      'Stosuj N minus, wywoływanie normalne i N plus jako świadome narzędzia kontroli kontrastu',
    ],
  },
  { type: 'title', text: 'Jak działa System Strefowy Ansela Adamsa', level: 2 },
  {
    type: 'paragraph',
    html: 'System Strefowy dzieli ciągły zakres jasności sceny na dziesięć stref referencyjnych. Strefa V odpowiada średniej szarości światłomierza.',
  },
  { type: 'title', text: 'Odczytywanie ekspozycji z paska stref', level: 2 },
  {
    type: 'table',
    headers: ['Usytuowanie', 'Efekt wizualny', 'Korekta światłomierza'],
    rows: [
      ['Strefa II', 'Głęboki cień z ledwo widoczną fakturą', 'Zmniejszyć naświetlanie o 3 stopnie od Strefy V'],
      ['Strefa III', 'Ważna faktura cieni', 'Zmniejszyć naświetlanie o 2 stopnie od Strefy V'],
      ['Strefa V', 'Neutralna średnia szarość', 'Pozostawić odczyt światłomierza bez zmian'],
      ['Strefa VI', 'Jasny półton, np. jasna skóra', 'Zwiększyć naświetlanie o 1 stopień od Strefy V'],
      ['Strefa VII', 'Jasna faktura warta zachowania', 'Zwiększyć naświetlanie o 2 stopnie od Strefy V'],
    ],
  },
  {
    type: 'tip',
    title: 'Świadome usytuowanie stref w plenerze',
    html: 'Nie traktuj odczytu światłomierza jako nakazu sprowadzania wszystkiego do szarości. Wybierz najważniejszy ton i umieść go celowo.',
  },
  { type: 'title', text: 'Wpływ wywoływania na kontrast negatywu', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Wywoływanie normalne:</strong> Utrzymuje kontrast sceny w standardowych granicach negatywu.',
      '<strong>Wywoływanie N minus:</strong> Kompresuje wysoki kontrast sceny, zapobiegając utracie świateł.',
      '<strong>Wywoływanie N plus:</strong> Rozszerza niski kontrast sceny dla lepszego rozdzielenia cieni.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Strefa', definition: 'Praktyczny zakres tonalny oddalony od sąsiedniego o jeden stopień przysłony.' },
      { term: 'Usytuowanie', definition: 'Świadome przypisanie zmierzonego tonu obiektu do wybranej strefy docelowej.' },
      { term: 'Średnia szarość', definition: 'Punkt odniesienia Strefy V stosowany w kalibracji światłomierzy.' },
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

export const content: ToolLocaleContent<AdamsZoneSystemUI> = {
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

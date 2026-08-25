import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Pytania dotyczące temperatury wywoływania filmu',
  bibliographyTitle: 'Główne źródła',
  chooseDocumentedCombination: 'Wybierz udokumentowane połączenie filmu i wywoływacza',
  filmLabel: 'Błona fotograficzna',
  developerLabel: 'Wywoływacz',
  dilutionLabel: 'Rozcieńczenie',
  temperatureLabel: 'Temperatura wywoływacza',
  temperatureHelp: 'Wprowadź zmierzoną temperaturę wywoływacza w koreksie. Przewodnik bazuje na czasie wzorcowym przy 20 °C.',
  unitSwitchLabel: 'Jednostka temperatury',
  metricLabel: 'Metryczna °C',
  imperialLabel: 'Imperialna °F',
  currentReadingLabel: 'Pomiar z ciemni',
  baseTimeLabel: 'Przy 20 °C',
  adjustedTimeLabel: 'Skorygowany czas początkowy',
  temperatureGuideLabel: 'Tabela korekty temperatury',
  temperatureGuideHelp: 'Praktyczny przewodnik wokół zmierzonej temperatury. Wyróżniony wiersz odpowiada Twojemu pomiarowi.',
  sourceLabel: 'Potwierdzone połączenie',
  eiLabel: 'Ustawienie czułości EI',
  statusCool: 'Chłodniejszy kąpiel',
  statusSteady: 'Blisko standardu',
  statusWarm: 'Cieplejsza kąpiel',
  warningShortTime: 'Czas poniżej 5 minut zwiększa ryzyko nierównomiernego wywołania. Wybierz udokumentowane parametry lub wydłuż czas po własnych próbach.',
  warningOutOfRange: 'To wartość na skraju zalecanego zakresu. Utrzymuj stabilną temperaturę wywoływacza i sprawdź kartę charakterystyki producenta.',
  guideNotice: 'To punkt wyjścia, a nie gwarancja. Mieszanie, koreks, docelowy kontrast i Twój własny proces wpływają na wynik.',
  resetLabel: 'Przywróć pierwszy udokumentowany wiersz',
  minutesLabel: 'min',
  secondsLabel: 'sek',
  currentBadge: 'Aktualny',
  belowFiveMinutes: 'Poniżej 5 minut',
  tableTemperature: 'Temperatura',
  tableTime: 'Czas orientacyjny',
  tableDifference: 'Różnica od 20 °C',
  currentRow: 'Aktualny',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Kalkulator Czasu Wywoływania Filmu Wg Temperatury',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Dostosuj czas wywoływania czarno-białego filmu fotograficznego do zmierzonej temperatury wywoływacza.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Jaka temperatura jest bazą dla wyliczeń kalkulatora?', acceptedAnswer: { '@type': 'Answer', text: 'Każda zebrana w tabeli kombinacja startuje od oficjalnego czasu producenta podanego dla 20 °C i przelicza go dla aktualnej temperatury.' } },
    { '@type': 'Question', name: 'Czy wyliczone czasy dają 100% gwarancji sukcesu?', acceptedAnswer: { '@type': 'Answer', text: 'Nie. Służą jako praktyczny punkt wyjścia. Sposób mieszania, budowa koreksu, zużycie chemii i oczekiwany kontrast modyfikują efekt.' } },
    { '@type': 'Question', name: 'Dlaczego pojawia się ostrzeżenie przy czasach poniżej 5 minut?', acceptedAnswer: { '@type': 'Answer', text: 'Bardzo krótkie czasy wywoływania zostawiają mało czasu na wlewanie i wylewanie chemii, co sprzyja powstawaniu plam i nierówności.' } },
    { '@type': 'Question', name: 'Co zrobić, gdy mojego filmu lub wywoływacza nie ma na liście?', acceptedAnswer: { '@type': 'Answer', text: 'Skorzystaj z oficjalnej karty technicznej producenta filmu lub sprawdzonej tabeli wywoływania. Narzędzie nie tworzy niesprawdzonych czasów.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Jak przeliczyć czas wywoływania filmu w zależności od temperatury',
  step: [
    { '@type': 'HowToStep', name: 'Wybierz film', text: 'Wskaż typ filmu czarno-białego załadowanego do koreksu.' },
    { '@type': 'HowToStep', name: 'Dopasuj wywoływacz i rozcieńczenie', text: 'Wybierz oficjalny wywoływacz oraz stężenie zgodne z tabelą.' },
    { '@type': 'HowToStep', name: 'Zmierz temperaturę', text: 'Zmierz i wpisz rzeczywistą temperaturę roztworu roboczego przed rozpoczęciem.' },
    { '@type': 'HowToStep', name: 'Zastosuj przeliczony czas', text: 'Użyj wyliczonego czasu jako orientacyjnego punktu wyjścia w pracy w ciemni.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'kalkulator-czasu-wywolywania-filmu-temperatura',
  title: 'Kalkulator Czasu Wywoływania Filmu Wg Temperatury',
  description: 'Dostosuj czas wywoływania czarno-białego filmu fotograficznego do zmierzonej temperatury wywoływacza z czytelną tabelą korekty.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Jak korygować czas wywoływania filmu przy zmianach temperatury' },
    { type: 'paragraph', html: 'Wybierz dokładne połączenie filmu, wywoływacza oraz rozcieńczenia z udokumentowanej tabeli, a następnie podaj zmierzoną temperaturę roztworu roboczego. Kalkulator bierze za podstawę czas fabryczny dla 20 °C i wylicza czas skorygowany.' },
    { type: 'title', level: 3, text: 'Traktuj wynik jako sprawdzony punkt startowy' },
    { type: 'paragraph', html: 'Temperatura bezpośrednio zmienia aktywność chemiczną: cieplejszy wywoływacz wymaga krótszego czasu, podczas gdy zimniejszy roztwór wymusza dłuższe wywoływanie. Tabela pomocnicza ilustruje dynamikę zmian czasu wokół Twojego pomiaru.' },
    { type: 'tip', title: 'Dbaj o powtarzalność procesu w ciemni', html: 'Nie traktuj wyliczonego czasu jako absolutnej reguły. Częstotliwość mieszania koreksem, świeżość chemii oraz Twoje preferencje co do kontrastu negatywu mają kluczowe znaczenie.' },
    { type: 'title', level: 3, text: 'Dlaczego warto opierać się wyłącznie na udokumentowanych zestawieniach' },
    { type: 'list', items: ['Zestawienie filmu i wywoływacza decyduje o ziarnistości, ostrości krawędziowej oraz realnej czułości.', 'Rozcieńczenie zmienia szybkość wyczerpywania się chemii i nie może być zgadywane z innych proporcji.', 'Czasy poniżej 5 minut wymagają szczególnej uwagi ze względu na czas potrzebny na napełnienie i opróżnienie koreksu.'] },
  ],
  faq: [
    { question: 'Jaka temperatura jest bazą dla wyliczeń kalkulatora?', answer: 'Każda zebrana w tabeli kombinacja startuje od oficjalnego czasu producenta podanego dla 20 °C i przelicza go dla aktualnej temperatury.' },
    { question: 'Czy wyliczone czasy dają 100% gwarancji sukcesu?', answer: 'Nie. Służą jako praktyczny punkt wyjścia. Sposób mieszania, budowa koreksu, zużycie chemii i oczekiwany kontrast modyfikują efekt.' },
    { question: 'Dlaczego pojawia się ostrzeżenie przy czasach poniżej 5 minut?', answer: 'Bardzo krótkie czasy wywoływania zostawiają mało czasu na wlewanie i wylewanie chemii, co sprzyja powstawaniu plam i nierówności.' },
    { question: 'Co zrobić, gdy mojego filmu lub wywoływacza nie ma na liście?', answer: 'Skorzystaj z oficjalnej karty technicznej producenta filmu lub sprawdzonej tabeli wywoływania. Narzędzie nie tworzy niesprawdzonych czasów.' },
  ],
  bibliography,
  howTo: [
    { name: 'Wybierz film', text: 'Wskaż typ filmu czarno-białego załadowanego do koreksu.' },
    { name: 'Dopasuj wywoływacz i rozcieńczenie', text: 'Wybierz oficjalny wywoływacz oraz stężenie zgodne z tabelą.' },
    { name: 'Zmierz temperaturę', text: 'Zmierz i wpisz rzeczywistą temperaturę roztworu roboczego przed rozpoczęciem.' },
    { name: 'Zastosuj przeliczony czas', text: 'Użyj wyliczonego czasu jako orientacyjnego punktu wyjścia w pracy w ciemni.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};

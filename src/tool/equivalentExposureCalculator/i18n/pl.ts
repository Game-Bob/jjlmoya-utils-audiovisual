import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'kalkulator-ekwiwalentu-ekspozycji';
const title = 'Kalkulator Ekwiwalentu Ekspozycji Trójkąt Ekspozycji';
const description = 'Oblicz ekwiwalentne ustawienia przysłony, czasu naświetlania i ISO, aby utrzymać stałą wartość EV.';

const ui: EquivalentExposureUI = {
  "title": "Kalkulator Ekwiwalentu Ekspozycji",
  "subtitle": "Oblicz wzajemne parametry przysłony, czasu naświetlania i ISO, aby zachować stałą wartość ekspozycji.",
  "baseSettingsTitle": "Podstawowe Ustawienia Ekspozycji",
  "targetSettingsTitle": "Docelowe Ustawienia Ekwiwalentne",
  "lockModeLabel": "Oblicz Automatycznie",
  "isoLabel": "Czułość ISO",
  "apertureLabel": "Przysłona (f-stop)",
  "shutterLabel": "Czas Naświetlania",
  "lockIsoOption": "Oblicz ISO (Zachowaj Przysłonę i Czas)",
  "lockApertureOption": "Oblicz Przysłonę (Zachowaj ISO i Czas)",
  "lockShutterOption": "Oblicz Czas (Zachowaj ISO i Przysłonę)",
  "presetsTitle": "Szybkie Ustawienia",
  "presetSunny16": "Reguła Słoneczne 16",
  "presetOvercast": "Pochmurny Dzień",
  "presetIndoor": "Światło Wnętrza",
  "presetNight": "Fotografia Nocna",
  "targetEvLabel": "Docelowe EV"
};

const faq: FAQItem[] = [
  {
    "question": "Czym jest Wartość Ekspozycji (EV)?",
    "answer": "EV to skala logarytmiczna łącząca przysłonę i czas naświetlania przy ISO 100. Wzór to EV = log2(N^2 / t)."
  },
  {
    "question": "Jak ekwiwalentne ekspozycje utrzymują jasność obrazu?",
    "answer": "Kompensując stopnie przysłony między ISO, czasem i przysłoną, ilość światła schwytana przez matrycę pozostaje stała."
  },
  {
    "question": "Czym jest reguła Słoneczne 16?",
    "answer": "W słoneczny dzień przy f/16 właściwy czas naświetlania jest odwrotnością ISO (np. ISO 100 wymaga 1/100s)."
  },
  {
    "question": "Jak przysłona wpływa na głębię ostrości?",
    "answer": "Otwarcie przysłony zmniejsza głębię ostrości, izolując obiekt miękkim rozmyciem tła."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Wybierz Ustawienia Bazowe",
    "text": "Wybierz podstawowe wartości ISO, przysłony i czasu."
  },
  {
    "name": "Wybierz Tryb Obliczeń",
    "text": "Zaznacz zmienną do automatycznego obliczenia."
  },
  {
    "name": "Dostosuj Parametry",
    "text": "Zmieniaj wartości docelowe, aby natychmiast zobaczyć wzajemność."
  },
  {
    "name": "Oceń Efekty",
    "text": "Sprawdź wykres wektorowy pod kątem głębi ostrości i szumu."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funkcje Wzajemności Ekspozycji',
    items: [
      "Dokładne obliczenia co 1/3 EV dla ISO, Przysłony i Czasu",
      "Interaktywny wizualizator Trójkąta Ekspozycji w SVG",
      "Informacja zwrotna o głębi ostrości, rozmyciu i szumach",
      "Szybkie ustawienia dla Słoneczne 16, Zachmurzenia i Nocy"
    ],
  },
  { type: 'title', text: 'Zrozumieć Trójkąt Ekspozycji', level: 2 },
  {
    type: 'paragraph',
    html: 'Ekspozycja w fotografii jest kształtowana przez ciągłą zależność pomiędzy otworem przysłony obiektywu, czasem naświetlania migawki oraz czułością ISO matrycy. Każda zmiana wprowadzona w jednym z tych parametrów wymaga odpowiedniego przeliczenia i kompensacji wzajemnej na pozostałych wartościach.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Światło Słoneczne Bazowe (Słoneczne 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Precyzja do 1/3 Stopnia', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Standardowy Stosunek Ostrości', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Cel Twórczy', level: 3 },
  {
    type: 'table',
    headers: [
      "Cel Twórczy",
      "Korekta Przysłony",
      "Korekta Czasu",
      "Korekta ISO",
      "Konsekwencja Wizualna"
    ],
    rows: [
      [
        "Zamrożenie Ruchu",
        "Otwórz (f/2.8)",
        "Szybciej (1/1000s)",
        "Zachowaj stałe",
        "Mniejsza głębia ostrości"
      ],
      [
        "Ostrość Krajobrazu",
        "Zamknij (f/11)",
        "Wolniej (1/30s)",
        "Zachowaj stałe",
        "Wymagany statyw"
      ],
      [
        "Słabe Światło z Ręki",
        "Maks. otwarcie (f/1.4)",
        "Limit z ręki (1/60s)",
        "Zwiększ (ISO 3200)",
        "Większy szum matrycy"
      ],
      [
        "Jakość Studyjna",
        "Optymalna (f/8)",
        "Synchro z Błyskiem (1/200s)",
        "Baza ISO 100",
        "Maksymalna dynamika"
      ]
    ],
  },
  { type: 'title', text: 'Twórczy Wpływ Ustawień Ekwiwalentnych', level: 3 },
  {
    type: 'paragraph',
    html: 'Chociaż ekwiwalentne ustawienia ekspozycji dostarczają dokładnie tę samą całkowitą ilość światła na matrycę aparatu, ostateczny charakter wizualny oraz plastyka zdjęcia różnią się znacząco w zależności od wybranych parametrów:',
  },
  {
    type: 'list',
    items: [
      "<strong>Przysłona:</strong> Kontroluje głębię ostrości oraz stopień rozmycia tła. Duże otwory przysłony tworzą miękki bokeh.",
      "<strong>Czas naświetlania:</strong> Kontroluje zamrożenie szybkiego ruchu w kadrze lub rejestrację efektownego rozmycia dynamiki.",
      "<strong>ISO:</strong> Wzmacnia sygnał elektryczny matrycy przy słabym oświetleniu kosztem pojawienia się cyfrowego szumu."
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Ustawienie Rozmytego Tła',
        description: 'Duża przysłona do portretów',
        icon: 'mdi:account-box-outline',
        points: [
          "Przysłona f/1.4 do f/2.8",
          "Szybki czas",
          "Miękkie bokeh"
        ],
      },
      {
        title: 'Ustawienie Głębokiego Krajobrazu',
        description: 'Mała przysłona dla pełnej ostrości',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Optimum f/8 do f/11",
          "Długi czas na statywie",
          "Maksymalna rozdzielczość"
        ],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Dokładność co 1/3 stopnia zgodna z pokrętłami aparatu',
        con: 'Nie uwzględnia efektu Schwarzschilda ani T stopów',
      },
      {
        pro: 'Wizualizacja SVG na żywo ze stanem ostrości',
        con: 'Wymaga ręcznej korekty współczynnika kadru',
      },
    ],
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "Wartość Ekspozycji (EV)",
        "definition": "Skala logarytmiczna łącząca przysłonę i czas."
      },
      {
        "term": "Prawo Wzajemności",
        "definition": "Zasada proporcjonalności ekspozycji do natężenia i czasu."
      },
      {
        "term": "Stopień Ekspozycji (Stop)",
        "definition": "Względna jednostka oznaczająca podwojenie lub zmniejszenie o połowę światła."
      }
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'kalkulator-jakosci-druku-piksele-na-cm-dpi';
const title = 'Kalkulator Jakości Druku: Piksele na CM i DPI';
const description = 'Oblicz maksymalny rozmiar wydruku swoich zdjęć na podstawie ich rozdzielczości. Konwertuj piksele na centymetry i cale, aby zapewnić profesjonalny druk.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analizuj Rozdzielczość",
    dropSubtitle: "Przeciągnij obraz, aby obliczyć jego rozmiar wydruku.",
    resultsTitle: "Specyfikacja Pliku",
    dpiDensityLabel: "Żądana Gęstość Druku (DPI)",
    dpiPointsLabel: "punktów na cal",
    maxPrintTitle: "Maksymalny Rozmiar Wydruku",
    standardFormatsTitle: "Obsługiwane Formaty Standardowe",
    formatColumn: "Format",
    measureColumn: "Wymiary",
    supportColumn: "Obsługiwany?",
    qualityExcellent: "Doskonała Jakość",
    qualityGood: "Dobra Jakość",
    qualityFair: "Jakość Ekranowa",
    qualityPoor: "Nieodpowiednia",
    qualityExcellentDesc: "Idealna do magazynów o sztuce, albumów fotograficznych i oglądania z bliska.",
    qualityGoodDesc: "Wystarczająca dla plakatów i oglądania ze średniej odległości.",
    qualityFairDesc: "Odpowiednia do wyświetlania cyfrowego lub odległych billboardów.",
    qualityPoorDesc: "Obraz będzie wyglądał na rozpikselowany. Druk nie jest zalecany.",
    unitCm: "cm",
    unitInches: "cali",
    dpiScreenLabel: "Ekran",
    dpiNewspaperLabel: "Gazeta",
    dpiPrintLabel: "Druk",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Pocztówka",
    formatQuartilla: "Ćwiartka",
    formatFolio: "Folio",
    formatDoubleFolio: "Podwójne Folio",
    formatSmallPoster: "Mały Plakat",
    formatLargePoster: "Duży Plakat",
    formatPlane: "Plan",
    supportedText: "Tak (Pokryty)",
    notSupportedPrefix: "Nie (",
    invalidImageError: "Wybierz prawidłowy obraz",
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Co to jest DPI i dlaczego ma znaczenie?",
        answer: "DPI (Dots Per Inch) wskazuje, ile punktów atramentu drukarka umieści na jednym calu bieżącym. Im wyższe DPI, tym ostrzejszy obraz, ale tym mniejszy całkowity rozmiar fizyczny, który pokryją Twoje piksele.",
    },
    {
        question: "Jakie jest idealne DPI do drukowania zdjęcia?",
        answer: "Standardem przemysłowym dla doskonałej jakości fotograficznej jest 300 DPI. W przypadku dużych wydruków, które będą oglądane z daleka, 150 DPI może wystarczyć.",
    },
    {
        question: "Czy mogę zwiększyć DPI mojego obrazu bez utraty jakości?",
        answer: "Nie. Zwiększenie DPI bez zmiany liczby pikseli po prostu zmniejsza rozmiar wydruku. Jeśli „wymyślisz” piksele za pomocą oprogramowania (upscaling), obraz może wyglądać na rozmyty.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Prześlij obraz",
        text: "Prześlij zdjęcie, które chcesz wydrukować, aby poznać jego wymiary w pikselach.",
    },
    {
        name: "Dostosuj DPI",
        text: "Przesuń suwak, aby zobaczyć, jak zmienia się końcowy rozmiar w zależności od gęstości punktów (od 72 do 600 DPI).",
    },
    {
        name: "Zweryfikuj format",
        text: "Sprawdź tabelę formatów standardowych (A4, A3 itp.), aby zobaczyć, czy Twoja rozdzielczość pokrywa żądany arkusz papieru.",
    },
    {
        name: "Potwierdź jakość",
        text: "Upewnij się, że wskaźnik pokazuje „Doskonała Jakość” przed wysłaniem do druku.",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesjonalne Obliczanie Rozdzielczości Druku',
        items: [
            'Dokładna konwersja pikseli na centymetry i cale',
            'Obliczanie maksymalnego rozmiaru na podstawie żądanego DPI',
            'Kompatybilność z formatami standardowymi (A4, A3 itp.)',
            'Przewodnik po 4 poziomach jakości: od Doskonałej do Nieodpowiedniej'
        ]
    },
    { type: 'title', text: 'Kompletny Przewodnik po Jakości Druku i DPI', level: 2 },
    { type: 'paragraph', html: 'Czy zdarzyło Ci się wydrukować zdjęcie, które okazało się rozmyte lub rozpikselowane? Sekret tkwi w matematycznej zależności między <strong>Pikselami</strong> a <strong>DPI</strong> (Dots Per Inch). To narzędzie oblicza dokładny maksymalny rozmiar, w jakim możesz wydrukować swoje obrazy bez utraty profesjonalnej jakości.' },

    { type: 'stats', items: [
        { value: '300', label: 'Profesjonalny Standard DPI', icon: 'mdi:target' },
        { value: '100%', label: 'Precyzyjne Obliczenia', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Obsługiwane Formaty', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Zrozumienie DPI: Piksele vs Punkty', level: 3 },
    { type: 'paragraph', html: 'Częstym błędem jest myślenie, że DPI i piksele to to samo. Tak nie jest. Piksele znajdują się W Twoim pliku cyfrowym. DPI to sposób, w jaki drukarka zamienia je na atrament na papierze.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Ile punktów atramentu drukarka umieszcza na calu bieżącym (2,54 cm).',
        '<strong>Piksele:</strong> Małe kwadraty danych w Twoim pliku cyfrowym. Zdjęcie o wymiarach 3000x2000 pikseli ma stałą ilość informacji, niezależnie od DPI.',
        '<strong>Wzór:</strong> Rozmiar wydruku (cale) = Piksele / DPI. Przykład: 3000 pikseli / 300 DPI = 10 cali (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Objaśnienie Poziomów Jakości DPI', level: 3 },
    { type: 'table', headers: ['DPI', 'Jakość Wizualna', 'Zastosowania', 'Odległość Oglądania'], rows: [
        ['600+ DPI', 'Doskonała (Idealna)', 'Albumy o sztuce, luksusowe magazyny, fotografia artystyczna', 'Mniej niż 10 cm'],
        ['300-400 DPI', 'Doskonała (Profesjonalna)', 'Fotografia, książki, katalogi firmowe', '20-30 cm (do ręki)'],
        ['150-200 DPI', 'Dobra (Druk Web)', 'Plakaty, kalendarze, średni dystans', '1-2 metry'],
        ['72-100 DPI', 'Ekranowa (Dopuszczalna)', 'Billboardy, odległe banery', '5+ metrów'],
        ['10-30 DPI', 'Niska (Nieodpowiednia)', 'Gigantyczne billboardy, bardzo duży dystans', '50+ metrów']
    ] },

    { type: 'card', title: 'Złota Zasada 300 DPI', html: 'W przypadku fotograficznego i profesjonalnego druku redakcyjnego standardem przemysłowym jest <strong>300 DPI</strong>. Gwarantuje to, że ludzkie oko z normalnej odległości (20-30 cm) nie dostrzeże pojedynczych punktów atramentu. Przy wartościach niższych niż 300 DPI siatka pikseli staje się widoczna.' },

    { type: 'comparative', items: [
        {
            title: 'Fotografia do Ręki (Zdjęcia 10x15)',
            description: 'Obowiązkowe 300 DPI - oglądane z bliska',
            icon: 'mdi:image',
            points: [
                'Przy 3000x2000 pikseli = maksymalnie 10x6,7 cala',
                'Gwarantowana doskonała jakość',
                'Standard dla albumów i prezentów'
            ]
        },
        {
            title: 'Plakat Ścienny A3 (30x42 cm)',
            description: '150 DPI wystarczy - oglądany z dystansu',
            icon: 'mdi:wall-fire',
            points: [
                'Oglądany z 1-2 metrów',
                'Wymagane mniej pikseli',
                'Oszczędność na jakości aparatu'
            ],
            highlight: true
        },
        {
            title: 'Billboard (200x300 cm)',
            description: '15-30 DPI - oglądany z wielu metrów',
            icon: 'mdi:sign',
            points: [
                'Obserwowany z odległości ponad 20 metrów',
                'Nawet niska rozdzielczość wygląda dobrze',
                'Optymalizacja dużych plików'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Przygotowanie Plików do Profesjonalnego Druku', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Drukarki używają atramentu (CMYK), ekrany używają światła (RGB). Konwertuj, aby uniknąć niespodzianek kolorystycznych.',
            con: 'Kolory mogą ulec zmianie podczas konwersji - sprawdź najpierw podgląd'
        },
        {
            pro: 'Spady (Bleed): Dodaj 3mm zapasu z każdej strony, jeśli obraz ma dochodzić do krawędzi papieru',
            con: 'Bez spadów krawędzie po docięciu mogą pozostać białe'
        },
        {
            pro: 'Upscaling NIE działa: Zwiększanie liczby pikseli w Photoshopie dodaje fałszywe informacje (wygładzanie)',
            con: 'Jeśli chcesz drukować w dużym formacie, potrzebujesz oryginalnego zdjęcia w wysokiej rozdzielczości'
        },
        {
            pro: 'Formaty: TIFF bez kompresji lub wysokiej jakości JPEG dla zdjęć; wektorowe (AI, EPS) dla logo',
            con: 'Format PNG domyślnie nie obsługuje CMYK w większości drukarń'
        }
    ], proTitle: 'Rekomendacje', conTitle: 'Przeciwwskazania' },

    { type: 'diagnostic', variant: 'warning', title: 'Częsty Błąd: Mit Upscalingu', icon: 'mdi:alert', badge: 'Krytyczne', html: '<strong>NIE zwiększaj DPI w Photoshopie bez zmiany liczby pikseli.</strong> Zwiększenie z 72 DPI do 300 DPI po prostu zmniejsza fizyczny rozmiar wydruku. Jeśli „dodasz piksele” poprzez interpolację (upscaling), obraz będzie wyglądał na wygładzony lub rozmyty. Potrzebujesz PRAWDZIWYCH pikseli ze źródła.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Miara rozdzielczości druku: ile punktów atramentu przypada na cal bieżący (2,54 cm). 300 DPI = 300x300 = 90 000 punktów na cal kwadratowy.'
        },
        {
            term: 'CMYK',
            definition: 'Przestrzeń barwna druku: Cyan, Magenta, Yellow, blacK. Oparta na modelu subtraktywnym. Różni się od RGB (model addytywny ekranów).'
        },
        {
            term: 'Spady (Bleed)',
            definition: 'Dodatkowy obszar (zazwyczaj 3mm), który jest drukowany, a następnie odcinany. Zapewnia, że obraz dochodzi do krawędzi bez białych marginesów.'
        },
        {
            term: 'Rozdzielczość Natywna',
            definition: 'PRAWDZIWE piksele uchwycone przez aparat, bez manipulacji. Zwiększenie DPI bez zmiany liczby pikseli nie generuje „rozdzielczości natywnej”.'
        },
        {
            term: 'Interpolacja (Upscaling)',
            definition: 'Algorytm, który wymyśla nowe piksele na podstawie istniejących. Przydatny przy niewielkim powiększaniu, ale traci ostrość przy dużych powiększeniach.'
        }
    ] },

    { type: 'message', title: 'Techniczna Precyzja dla Profesjonalnych Rezultatów', ariaLabel: 'Informacje o obliczeniach druku', html: 'Nasz kalkulator konwertuje piksele na centymetry, uwzględniając międzynarodowe standardy (ISO 216 dla papieru). To nie tylko kalkulator: to Twój walidator tego, czy to zdjęcie pasuje do danego rozmiaru wydruku przy zachowaniu profesjonalnej jakości.' },

    { type: 'title', text: 'Podsumowanie: Drukuj bez Niespodzianek', level: 3 },
    { type: 'paragraph', html: 'Różnica między pięknym wydrukiem a rozczarowującym polega na znajomości zależności między pikselami a DPI. Użyj tego kalkulatora, aby zweryfikować swoje pliki PRZED udaniem się do drukarni. W ten sposób unikniesz niepotrzebnych wydatków i frustrujących rezultatów.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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

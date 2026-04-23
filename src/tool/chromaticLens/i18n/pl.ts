import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-ekstrakcja-palety-kolorow-online';
const title = 'Chromatic Lens: Ekstrakcja Palety Kolorów Online';
const description = 'Wyodrębnij profesjonalne palety kolorów z dowolnego obrazu za darmo. Zidentyfikuj dominujące kolory w swoich zdjęciach za pomocą algorytmów matematycznych.';

const ui: ChromaticLensUI = {
    dropTitle: "Analizuj Kolory",
    dropSubtitle: "Przeciągnij obraz, aby wyodrębnić jego chromatyczne DNA.",
    processingLabel: "Wyodrębnianie palety...",
    paletteTitle: "Wyodrębniona Paleta",
    copyLabel: "Kopiuj HEX",
    copiedLabel: "Skopiowano!",
    colorCountLabel: "Liczba kolorów",
    changeImage: "Zmień obraz",
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Jak działa ekstrakcja kolorów?",
        answer: "Używamy algorytmu 'Median Cut', który grupuje piksele obrazu według ich bliskości w przestrzeni kolorów RGB, aby znaleźć najbardziej reprezentatywne tony.",
    },
    {
        question: "Czy mogę kopiować kolory do mojego edytora graficznego?",
        answer: "Tak, klikając na każdy kolor, kod HEX zostanie automatycznie skopiowany do schowka, gotowy do wklejenia w Photoshopie, Figmie lub CSS.",
    },
    {
        question: "Jakie typy obrazów mogę analizować?",
        answer: "Dowolny plik JPG, PNG lub WebP. Przetwarzanie odbywa się lokalnie, więc duże obrazy zostaną przeanalizowane szybko, bez zużywania danych sieciowych.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Prześlij obraz",
        text: "Prześlij zdjęcie, z którego chcesz wyodrębnić chromatyczną inspirację.",
    },
    {
        name: "Dostosuj precyzję",
        text: "Wybierz, ile dominujących kolorów ma zidentyfikować narzędzie (od 3 do 12).",
    },
    {
        name: "Przeanalizuj wynik",
        text: "Paleta pojawi się natychmiast wraz z odpowiednimi kodami szesnastkowymi.",
    },
    {
        name: "Kopiuj i używaj",
        text: "Kliknij na odcienie, aby je zapisać i zastosować w swoim projekcie projektowym.",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Inteligentna Ekstrakcja Palety Kolorów',
        items: [
            'Profesjonalny algorytm Median Cut do analizy kolorów',
            'Wyodrębnij 3-12 dominujących kolorów z dowolnego obrazu',
            'Kody HEX kopiowalne bezpośrednio do schowka',
            'Przetwarzanie w 100% lokalne - idealne dla kreatywnych'
        ]
    },
    { type: 'title', text: 'Ekstrakcja Palety Kolorów: Nauka i Projektowanie', level: 2 },
    { type: 'paragraph', html: 'Czy kiedykolwiek zastanawiałeś się, dlaczego kadr filmowy wydaje się tak harmonijny? To nie przypadek; to teoria koloru w działaniu. Chromatic Lens pozwala wyodrębnić tę harmonię bezpośrednio z piksela, przekształcając ją w kody HEX gotowe do użycia w Twoich projektach projektowych.' },

    { type: 'stats', items: [
        { value: 'Natychmiast', label: 'Analiza Koloru', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Lokalna Prywatność', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Precyzyjna Przestrzeń Barw', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'Wyjaśnienie Algorytmu Median Cut', level: 3 },
    { type: 'paragraph', html: 'Inteligentna ekstrakcja palety nie jest prostym losowym próbkowaniem pikseli. Wykorzystuje algorytm Median Cut, technikę rekurencyjnego partycjonowania, która zapewnia wierne odwzorowanie:' },
    { type: 'list', items: [
        '<strong>Podział Rekurencyjny:</strong> „Kostka kolorów” RGB obrazu jest rekurencyjnie dzielona na mniejsze pudełka.',
        '<strong>Równowaga Objętości:</strong> Każda partycja dąży do pogrupowania pikseli z tej samej przestrzeni barw o podobnych objętościach.',
        '<strong>Średnia Ważona:</strong> Wynikowy kolor każdego pudełka jest średnią wszystkich pikseli, które zawiera.',
        '<strong>Wierne Odwzorowanie:</strong> Dominujące kolory odzwierciedlają rzeczywistą atmosferę wizualną obrazu, a nie prostą próbkę.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Kreatywny Przepływ Pracy', html: 'Idealny dla programistów stron internetowych, projektantów UX/UI, artystów cyfrowych i kreatywnych osób, które chcą natychmiast uchwycić wizualną esencję zdjęcia, filmu lub odniesienia wizualnego, aby zastosować je w swoich interfejsach, ilustracjach lub paletach marki.' },

    { type: 'title', text: 'Przypadki Użycia w Projektowaniu Cyfrowym', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Projektanci UX/UI',
            description: 'Wyodrębniaj palety z obrazów hero, aby tworzyć spójne interfejsy',
            icon: 'mdi:palette',
            points: [
                'Harmonijne kolory tła',
                'Przyciski i elementy pomocnicze',
                'Automatycznie obliczony kontrast'
            ]
        },
        {
            title: 'Programiści Web',
            description: 'Twórz arkusze stylów CSS bezpośrednio z odniesień wizualnych',
            icon: 'mdi:code-braces',
            points: [
                'Kopiuj HEX bezpośrednio do CSS',
                'Zmienne kolorystyczne w SCSS/CSS',
                'Spójne motywy bez wcześniejszego projektu'
            ],
            highlight: true
        },
        {
            title: 'Artyści Cyfrowi i Ilustratorzy',
            description: 'Uchwyć chromatyczne odniesienia z filmów, natury lub sztuki',
            icon: 'mdi:brush',
            points: [
                'Palety referencyjne z arcydzieł',
                'Filmowe studia kolorystyczne',
                'Natychmiastowa inspiracja wizualna'
            ]
        },
        {
            title: 'Specjaliści ds. Brandingu',
            description: 'Twórz tożsamości wizualne w oparciu o zdjęcia przewodnie',
            icon: 'mdi:tag-multiple',
            points: [
                'Wyodrębnij kolory marki z obrazów',
                'Twórz profesjonalne przewodniki chromatyczne',
                'Zapewnij spójność wizualną'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Stosowana Teoria Koloru', level: 3 },
    { type: 'table', headers: ['Koncepcja Koloru', 'Definicja', 'Zastosowanie Praktyczne'], rows: [
        ['Harmonia Chromatyczna', 'Kombinacja kolorów, która jest wizualnie zrównoważona', 'Spójna tożsamość wizualna w UI'],
        ['Kontrast', 'Różnica jasności między kolorami', 'Czytelność i hierarchia wizualna'],
        ['Nasycenie', 'Intensywność koloru tonu', 'Profesjonalizm (niskie) vs Energia (wysokie)'],
        ['Temperatura Koloru', 'Ciepłe kolory (czerwienie) vs chłodne kolory (niebieskie)', 'Psychologia emocjonalna projektowania'],
        ['Paleta Monochromatyczna', 'Wariacje pojedynczego tonu', 'Elegancja i minimalizm']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Matematyczna precyzja ekstrakcji - to nie jest przybliżony wybór wizualny',
            con: 'Słabo widoczne kolory mogą zostać uwzględnione, jeśli mają wiele pikseli'
        },
        {
            pro: 'Natychmiastowe kopiowanie do schowka - idealna integracja z przepływem pracy',
            con: 'Wymaga nowoczesnej przeglądarki kompatybilnej z Canvas API'
        },
        {
            pro: 'Całkowita prywatność - 100% lokalna analiza bez przesyłania danych',
            con: 'Historia poprzednich analiz nie jest zapisywana'
        },
        {
            pro: 'Kompatybilny z dowolnym formatem obrazu cyfrowego',
            con: 'Ostateczne kolory zależą od kompresji i jakości obrazu'
        }
    ], proTitle: 'Zalety', conTitle: 'Ograniczenia' },

    { type: 'diagnostic', variant: 'success', title: 'Realistyczne Odwzorowanie Kolorów', icon: 'mdi:check-circle-outline', badge: 'Zaawansowany Algorytm', html: 'W przeciwieństwie do narzędzi, które po prostu próbkują losowe piksele, nasz system wykorzystuje algorytm Median Cut, który waży całkowitą liczbę pikseli każdego tonu, zapewniając, że wynikowa paleta wiernie odzwierciedla wizualną atmosferę i psychologię kolorów oryginalnego obrazu.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Algorytm kwantyzacji kolorów, który rekurencyjnie dzieli przestrzeń RGB na pudełka, zapewniając jednolity rozkład. Historycznie stosowany w technologii GIF i kolorów indeksowanych.'
        },
        {
            term: 'Przestrzeń Barw RGB',
            definition: 'Model kolorów oparty na czerwieni, zieleni i niebieskim. Każdy kolor reprezentowany jest jako kombinacja tych trzech wartości (0-255). Standard na ekranach cyfrowych i w Internecie.'
        },
        {
            term: 'Kod HEX',
          definition: '6-cyfrowy zapis szesnastkowy (#RRGGBB) reprezentujący kolor w Internecie: #FF0000 (czerwony), #00FF00 (zielony), #0000FF (niebieski). Uniwersalny w CSS, Figmie i środowisku Adobe.'
        },
        {
            term: 'Nasycenie Koloru',
            definition: 'Intensywność lub czystość koloru. Wysokie nasycenie = żywy kolor; niskie nasycenie = kolor szarawy. Wpływa na emocjonalny odbiór projektu.'
        },
        {
            term: 'Harmonia Chromatyczna',
            definition: 'Dobór i kombinacja kolorów dająca wizualnie przyjemny efekt. Może być monochromatyczna, dopełniająca, analogiczna lub triadyczna.'
        }
    ] },

    { type: 'message', title: 'Profesjonalna Analiza Chromatyczna', ariaLabel: 'Informacje techniczne o analizie kolorów', html: 'Chromatic Lens zamienia ręczną analizę wizualną w algorytmiczną precyzję. Nie tylko wyodrębnia kolory: uchwyci emocjonalną i wizualną esencję dowolnego obrazu, umieszczając ją bezpośrednio w schowku jako gotowe do użycia kody HEX. Pełna prywatność, brak limitów objętości analiz.' },

    { type: 'title', text: 'Projektowanie z Wizualnej Inspiracji', level: 3 },
    { type: 'paragraph', html: 'Najlepsza paleta kolorów to taka, która oddaje wizualną intencję Twojego punktu odniesienia. Chromatic Lens automatyzuje to, co kiedyś było procesem ręcznym: obserwację, analizę, notowanie. Teraz po prostu przeciągnij obraz i uzyskaj profesjonalne kody HEX w ciągu kilku sekund.' }
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

export const content: ChromaticLensLocaleContent = {
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

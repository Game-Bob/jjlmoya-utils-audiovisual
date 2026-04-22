import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'usuwanie-metadanych-exif-usun-gps-prywatnosc-zdjec';
const title = 'Usuwanie Metadanych EXIF: Usuń GPS i ukryte dane ze zdjęć';
const description = 'Darmowe narzędzie online do usuwania metadanych EXIF, współrzędnych GPS i specyfikacji aparatu z Twoich zdjęć przed udostępnieniem. 100% prywatności: działa bez przesyłania zdjęć do internetu.';

const ui: ExifCleanerUI = {
    dropTitle: "Przeciągnij zdjęcie tutaj",
    dropSubtitle: "Usuń metadane GPS, model aparatu i ukryte ustawienia.",
    dropLocalInfo: "Przetwarzanie w 100% lokalne. Nic nie jest przesyłane do chmury.",
    selectButton: "Wybierz zdjęcie",
    processingText: "Usuwanie metadanych...",
    analysisCompleted: "Analiza zakończona",
    downloadButton: "Pobierz czyste zdjęcie",
    resetButton: "Oczyść inne zdjęcie",
    privacyRiskTitle: "WYKRYTE ZAGROŻENIA PRYWATNOŚCI:",
    gpsLabel: "GPS:",
    gpsDetected: "WYKRYTO",
    gpsNotFound: "NIE ZNALEZIONO",
    cameraLabel: "APARAT:",
    softwareLabel: "OPROGRAMOWANIE:",
    dateLabel: "DATA:",
    otherTechnicalDetails: "INNE SZCZEGÓŁY TECHNICZNE",
    noMetadataFound: "Nie znaleziono czytelnych metadanych EXIF.",
    alreadyCleanInfo: "Zdjęcie może być już czyste.",
    previewLabel: "Podgląd",
    faqTitle: "Często zadawane pytania o prywatność zdjęć": "Zasoby i dokumentacja techniczna EXIF",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Co to są metadane EXIF?",
        answer: "EXIF (Exchangeable Image File Format) to ukryte informacje, które Twój aparat lub telefon zapisuje w każdym zdjęciu. Zawierają one dokładną datę, model urządzenia, ustawienia fotografowania (ISO, przysłona), a co najważniejsze, współrzędne GPS miejsca, w którym wykonano zdjęcie.",
    },
    {
        question: "Czy korzystanie z tego narzędzia online jest bezpieczne?",
        answer: "Tak, ponieważ przetwarzanie odbywa się w 100% lokalnie w Twojej przeglądarce. Twoje zdjęcia nigdy nie są przesyłane na żaden serwer; czyszczenie odbywa się bezpośrednio w pamięci Twojego urządzenia, co gwarantuje całkowitą prywatność.",
    },
    {
        question: "Jakie konkretnie dane usuwa to narzędzie?",
        answer: "Usuwa wszystkie tagi EXIF (GPS, marka aparatu, numer seryjny), IPTC (prawa autorskie, autor) oraz XMP (historia edycji). Twoje zdjęcie staje się „czyste”, zachowując jedynie wizualne piksele.",
    },
    {
        question: "Czy zdjęcie traci na jakości podczas usuwania metadanych?",
        answer: "Nie. Usuwamy jedynie techniczny „nagłówek” danych pliku. Dane obrazu (piksele) pozostają identyczne, więc jakość wizualna nie zmienia się w ogóle.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Wybierz zdjęcia",
        text: "Przeciągnij zdjęcia lub wybierz je ze swojego eksploratora plików. Możesz przetwarzać kilka jednocześnie.",
    },
    {
        name: "Przeanalizuj bieżące dane",
        text: "Narzędzie pokaże Ci, jakie wrażliwe informacje wykryło (np. „Wykryto współrzędne GPS”).",
    },
    {
        name: "Przetwórz i oczyść",
        text: "Kliknij przycisk oczyszczania, aby natychmiast usunąć wszystkie tagi metadanych.",
    },
    {
        name: "Pobierz bezpieczne zdjęcia",
        text: "Zapisz nowe wersje swoich zdjęć, teraz zanonimizowane i gotowe do bezpiecznego udostępnienia w mediach społecznościowych.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Usuwanie Metadanych EXIF: Chroń swoją prywatność',
        items: [
            'Natychmiast usuwaj współrzędne GPS i lokalizację ze swoich zdjęć',
            'Usuwaj model aparatu, numer seryjny i informacje techniczne',
            'Przetwarzanie w 100% oparte na przeglądarce – Twoje zdjęcia nigdy nie opuszczają urządzenia',
            'Zachowuje jakość wizualną – usuwane są tylko ukryte dane'
        ]
    },
    { type: 'title', text: 'Kompletny przewodnik po prywatności i metadanych EXIF w fotografii cyfrowej', level: 2 },
    { type: 'paragraph', html: 'Czy kiedykolwiek zastanawiałeś się, jak wiele danych osobowych udostępniasz, przesyłając zdjęcie do mediów społecznościowych? Metadane EXIF są jak <strong>niewidzialny odcisk palca</strong>, który może ujawnić wszystko – od dokładnej lokalizacji Twojego domu po cenę Twojego sprzętu fotograficznego. Ten przewodnik wyjaśnia, jak skutecznie chronić swoją prywatność.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Prywatność - Przetwarzanie Lokalne', icon: 'mdi:shield-check' },
        { value: '0%', label: 'Dane przechowywane na serwerach', icon: 'mdi:database' },
        { value: 'Natychmiast', label: 'Usuwanie Metadanych', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Jakie informacje są ukryte w Twoich zdjęciach?', level: 3 },
    { type: 'paragraph', html: 'Ponad 90% zdjęć cyfrowych zawiera wrażliwe informacje, które mogą zagrażać Twojemu bezpieczeństwu. Oto wszystkie dane, które mogą zostać ujawnione:' },
    { type: 'list', items: [
        '<strong>Współrzędne GPS:</strong> Dokładna szerokość i długość geograficzna miejsca wykonania zdjęcia (adres domowy, miejsce pracy, często odwiedzane miejsca).',
        '<strong>Identyfikacja sprzętu:</strong> Marka, model i numer seryjny aparatu lub smartfona (cenne informacje).',
        '<strong>Ustawienia techniczne:</strong> ISO, przysłona (f/), czas naświetlania i ogniskowa (umożliwia identyfikację konkretnego sprzętu).',
        '<strong>Dokładna data i godzina:</strong> Pełna oś czasu Twoich codziennych aktywności.',
        '<strong>Historia edycji:</strong> Użyte oprogramowanie, programy do edycji i data ostatniej modyfikacji.',
        '<strong>Dane o prawach autorskich:</strong> Fotograf, prawa autorskie i notatki osobiste.'
    ] },

    { type: 'title', text: 'Realne zagrożenia bezpieczeństwa: Przypadki użycia', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Profesjonalni fotografowie',
            description: 'Ryzyko kradzieży drogiego sprzętu zidentyfikowanego po numerze seryjnym',
            icon: 'mdi:camera',
            points: [
                'Złodzieje szukają fotografów z wartościowym sprzętem',
                'GPS identyfikuje adres domowy właściciela',
                'Numer seryjny ułatwia odsprzedaż w dark webie'
            ]
        },
        {
            title: 'Rodzice i Influencerzy',
            description: 'Ekstremalne niebezpieczeństwo: lokalizacja dzieci w czasie rzeczywistym',
            icon: 'mdi:alert',
            points: [
                'Predatorzy śledzą lokalizacje za pomocą OSINT',
                'Predatorzy mogą zidentyfikować codzienne rutyny',
                'Ryzyko nękania i fizycznego śledzenia'
            ],
            highlight: true
        },
        {
            title: 'Użytkownicy mediów społecznościowych',
            description: 'Ujawnienie prywatności osobistej i zawodowej',
            icon: 'mdi:share-variant',
            points: [
                'Postowanie z biura ujawnia lokalizację miejsca pracy',
                'Geolokalizacja pozwala na wywnioskowanie przybliżonych zarobków',
                'Publiczne dane umożliwiają ukierunkowane profilowanie'
            ]
        },
        {
            title: 'Podróżnicy i Nomadowie',
            description: 'Niebezpieczeństwo kradzieży w niezamieszkanych domach',
            icon: 'mdi:map',
            points: [
                'Opublikowany GPS wskazuje pusty dom podczas podróży',
                'Dane o sprzęcie przyciągają przestępców',
                'Historie podróży ujawniają harmonogramy i wzorce'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Jak działa to narzędzie', level: 3 },
    { type: 'list', items: [
        '<strong>1. Wybierz zdjęcia:</strong> Przeciągnij zdjęcia lub użyj selektora. Możesz przetwarzać kilka jednocześnie.',
        '<strong>2. Automatyczna analiza:</strong> Narzędzie wykrywa i pokazuje wszystkie obecne metadane (GPS, model aparatu, data itp.).',
        '<strong>3. Natychmiastowe czyszczenie:</strong> Jednym kliknięciem usuwa 100% szkodliwych metadanych.',
        '<strong>4. Bezpieczne pobieranie:</strong> Otrzymaj zanonimizowane zdjęcia gotowe do udostępnienia w sieciach bez ryzyka.',
        '<strong>5. Bez pozostałości:</strong> Czyste zdjęcie zachowuje całą swoją oryginalną jakość wizualną.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Technologia prywatności', icon: 'mdi:shield-check', html: 'To narzędzie wykorzystuje <strong>Canvas API przeglądarki</strong> do tworzenia czystej kopii obrazu piksel po pikselu, co gwarantuje, że:<br><br>- Żadne dane nie są wysyłane na serwery<br>- Twoje zdjęcie nigdy nie opuszcza Twojego urządzenia<br>- Przetwarzanie jest w 100% anonimowe i bezpieczne<br>- Możesz go używać nawet bez połączenia z internetem (po początkowym załadowaniu)' },

    { type: 'title', text: 'Jakie konkretnie dane są usuwane?', level: 3 },
    { type: 'table', headers: ['Typ metadanych', 'Przykłady', 'Ryzyko'], rows: [
        ['EXIF (Wymienne)', 'GPS, ISO, Przysłona, Czas otwarcia migawki, Model aparatu', 'KRYTYCZNE'],
        ['IPTC (Publikacja)', 'Prawa autorskie, Autor, Słowa kluczowe, Lokalizacja sceny', 'WYSOKIE'],
        ['XMP (XML)', 'Historia edycji, użyte oprogramowanie, dokonane zmiany', 'ŚREDNIE'],
        ['Podstawowe dane pliku', 'Data utworzenia, dokładna godzina, urządzenie', 'WYSOKIE']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Całkowita prywatność - przetwarzanie w 100% w przeglądarce',
            con: 'Wymaga nowoczesnej przeglądarki z obsługą JavaScript'
        },
        {
            pro: 'Natychmiastowe - czyszczenie zdjęcia trwa mniej niż 1 sekundę',
            con: 'Przetwarzanie dużych zdjęć może być wolne na starszych urządzeniach'
        },
        {
            pro: 'Zero utraty jakości - usuwa tylko dane techniczne, nie piksele',
            con: 'Nie edytuje obrazu (kadrowanie, obracanie itp.)'
        },
        {
            pro: 'Całkowicie za darmo bez limitów - przetwarzaj nieograniczoną liczbę zdjęć',
            con: 'Brak wsparenia premium czy przechowywania w chmurze'
        }
    ], proTitle: 'Kluczowe zalety', conTitle: 'Ograniczenia' },

    { type: 'tip', title: 'Wskazówka dotycząca bezpieczeństwa cyfrowego', html: '<strong>Oczyść swoje zdjęcia PRZED opublikowaniem</strong> w jakiejkolwiek sieci społecznościowej. Nawet jeśli usuniesz post, metadane mogły zostać zaindeksowane przez wyszukiwarki lub archiwa. Lepiej zapobiegać niż leczyć. Niech stanie się to Twoim nawykiem: <br><br><em>Zdjęcie → Oczyść EXIF → Opublikuj</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Realne ryzyko braku oczyszczania', icon: 'mdi:alert-circle', badge: 'Krytyczne bezpieczeństwo', html: '<strong>Udokumentowane przypadki:</strong><br>- Rodzice publikujący zdjęcia dzieci - predatorzy śledzili GPS<br>- Podróżujący fotografowie - domy okradzione, gdy ich nie było<br>- Influencerzy - miejsca zamieszkania zidentyfikowane przez obsesyjnych fanów<br><br>To nie paranoja: to podstawowa higiena cyfrowa w 2026 roku.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Standard przechowujący metadane techniczne w plikach obrazów: GPS, dane aparatu, ustawienia ekspozycji. Obecny w ok. 90% zdjęć cyfrowych bez wiedzy użytkownika.'
        },
        {
            term: 'Współrzędne GPS',
            definition: 'Dokładna szerokość i długość geograficzna miejsca wykonania zdjęcia. W połączeniu z mediami społecznościowymi umożliwia fizyczne śledzenie osób.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Czytelne metadane publikacji: prawa autorskie, autor, słowa kluczowe, opis. Standard w fotografii profesjonalnej.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Format XML rejestrujący historię edycji w programach takich jak Lightroom czy Photoshop. Może ujawnić wszystkie dokonane zmiany.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Technika zbierania publicznych informacji (media społecznościowe, metadane, rejestry) w celu profilowania osób bez ich wiedzy.'
        },
        {
            term: 'Anonimizacja cyfrowa',
            definition: 'Proces usuwania lub maskowania informacji umożliwiających identyfikację: lokalizacji, urządzenia, wzorców zachowań. Niezbędny dla prywatności online.'
        }
    ] },

    { type: 'message', title: 'Twoja prywatność to Twoja odpowiedzialność', ariaLabel: 'Informacje o prywatności i prawach do danych', html: 'Nie przechowujemy, nie przetwarzamy ani nie udostępniamy Twoich zdjęć. <strong>Masz pełną kontrolę.</strong> Wszystkie operacje odbywają się wyłącznie w Twojej przeglądarce. Po zamknięciu tej karty nie pozostaje żaden ślad Twojej aktywności. Tak chroni się prywatność w internecie: narzędzia, które szanują Twoje dane.' },

    { type: 'title', text: 'Podsumowanie: Udostępniaj bez śladów', level: 3 },
    { type: 'paragraph', html: 'Ochrona Twojej cyfrowej tożsamości zaczyna się od małych detali. Oczyszczanie zdjęć przed publikacją to <strong>niezbędny nawyk higieny cyfrowej</strong> w 2026 roku. Chroni nie tylko Twoją lokalizację: chroni Twoją rodzinę, Twój majątek i Twoją prywatność zawodową. Pozornie niewinne zdjęcie może ujawnić o Tobie więcej, niż mogłeś sobie wyobrazić.' }
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

export const content: ExifCleanerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Często Zadawane Pytania",
    faq: "Referencje",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

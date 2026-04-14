import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'kompresor-obrazow-online-zmniejsz-rozmiar-pliku-bez-utraty-jakosci';
const title = 'Kompresor Obrazów Online: Zmniejsz wagę bez utraty jakości';
const description = 'Optymalizuj i kompresuj swoje zdjęcia JPG, PNG i WebP za darmo. Zmniejsz rozmiar plików, aby lokalnie przyspieszyć ładowanie Twojej strony internetowej.';

const ui: ImageCompressorUI = {
    dropTitle: "Optymalizuj Obrazy",
    dropSubtitle: "Przeciągnij zdjęcia, aby natychmiast zmniejszyć ich wagę.",
    settingsTitle: "Ustawienia Kompresji",
    qualityLabel: "Jakość Wizualna",
    widthLabel: "Maksymalna Szerokość (Piksele)",
    convertToWebpLabel: "Konwertuj na WebP",
    compressionLabel: "Kompresja",
    compressBtn: "Kompresuj Obraz",
    processingLabel: "Przetwarzanie...",
    resultsTitle: "Zoptymalizowane Obrazy",
    originalSizeLabel: "Oryginalny Rozmiar",
    newSizeLabel: "Nowy Rozmiar",
    reductionLabel: "Oszczędność",
    downloadBtn: "Pobierz",
    addMoreBtn: "Dodaj więcej",
    browseFilesBtn: "Przeglądaj pliki",
    processedFilesTitle: "Przetworzone Pliki",
    downloadAllBtn: "Pobierz Wszystkie",
    adjustThisImage: "Dostosuj ten obraz",
    downloadTitle: "Pobierz",
    maxWidthLabel: "Maks. szerokość (px)",
    closeBtn: "Zamknij",
    totalSavingsLabel: "Całkowita oszczędność",
    noSavings: "Brak oszczędności netto",
    faqTitle: "Często Zadawane Pytania",
    bibliographyTitle: "Referencje"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Jak działa kompresja bezstratna?",
        answer: "Używamy algorytmów, które usuwają niepotrzebne metadane i optymalizują kodowanie pikseli. Przy wyborze formatu WebP stosowana jest bardziej zaawansowana technologia kompresji niż w tradycyjnych formatach.",
    },
    {
        question: "Czy moje obrazy są przesyłane na jakikolwiek serwer?",
        answer: "Nie. Całe przetwarzanie odbywa się w 100% w Twojej przeglądarce (Client-Side). Twoje zdjęcia nigdy nie opuszczają Twojego komputera, co gwarantuje całkowitą prywatność.",
    },
    {
        question: "Dlaczego warto konwertować na WebP?",
        answer: "WebP to nowoczesny standardowy format dla internetu. Oferuje wyższą jakość niż JPG i PNG przy wadze mniejszej nawet o 30%, co przyspiesza czas ładowania strony.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Prześlij obraz",
        text: "Prześlij plik, który chcesz skompresować (JPG, PNG lub WebP).",
    },
    {
        name: "Dostosuj jakość",
        text: "Użyj suwaka, aby znaleźć idealną równowagę między rozmiarem pliku a jakością wizualną (zalecane: 75 85%).",
    },
    {
        name: "Zmień rozmiar (opcjonalnie)",
        text: "Jeśli obraz jest bardzo duży, możesz określić maksymalną szerokość, aby zmniejszyć jego rozdzielczość.",
    },
    {
        name: "Pobierz wynik",
        text: "Naciśnij przycisk pobierania, aby otrzymać zoptymalizowany obraz gotowy do użycia.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: Format obrazu dla sieci",
        url: "https://developers.google.com/speed/webp",
    },
    {
        name: "Znaczenie optymalizacji obrazów dla SEO",
        url: "https://developers.google.com/search/docs/appearance/google-images",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesjonalna Optymalizacja Obrazów Web',
        items: [
            'Inteligentna kompresja JPG, PNG i WebP',
            'Zmniejsz wagę o 50-80% zachowując jakość wizualną',
            '100% lokalne przetwarzanie - gwarancja prywatności',
            'Popraw Core Web Vitals i pozycjonowanie SEO'
        ]
    },
    { type: 'title', text: 'Optymalizacja Obrazów: Szybkość sieci i Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'W erze cyfrowej natychmiastowości wolna strona internetowa traci użytkowników. Niezoptymalizowane obrazy stanowią 60-70% całkowitej wagi strony internetowej. Ich optymalizacja to pierwszy krok do poprawy metryk Google (LCP, CLS) i Twojego pozycjonowania w wynikach wyszukiwania.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Typowa Redukcja Wagi', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Lokalna Prywatność', icon: 'mdi:lock' },
        { value: '+30%', label: 'Szybciej niż JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Objaśnienie Formatów Kompresji', level: 3 },
    { type: 'table', headers: ['Format', 'Kompresja', 'Zastosowania', 'Kompatybilność'], rows: [
        ['JPEG', 'Stratna 50-90%', 'Zdjęcia z aparatu, treści redakcyjne', 'Uniwersalna (100%)'],
        ['PNG', 'Bezstratna 30-50%', 'Grafiki, logo, przezroczystości', 'Uniwersalna (100%)'],
        ['WebP', 'Stratna/Bezstratna 25-35% więcej', 'Nowoczesna sieć, sieci społecznościowe', '95% nowoczesnych przeglądarek'],
        ['AVIF', 'Stratna/Bezstratna 20% poprawy', 'Sieć nowej generacji', 'Tylko nowe przeglądarki']
    ] },

    { type: 'card', title: 'Dlaczego WebP to Przyszłość', html: 'Google opracowało format WebP specjalnie dla sieci. Oferuje on lepszą kompresję niż JPEG i PNG, zachowując lub poprawiając jakość wizualną. Jest o 25-35% mniejszy niż odpowiedniki JPEG. Nowoczesne przeglądarki wspierają go w 95%.' },

    { type: 'title', text: 'Kompresja Stratna vs Bezstratna', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Kompresja Stratna (Lossy)',
            description: 'JPG, WebP - Usuwa niedostrzegalne informacje wizualne',
            icon: 'mdi:compress',
            points: [
                'Redukuje 70-90% oryginalnej wagi',
                'Niedostrzegalna dla ludzkiego oka, jeśli jakość jest utrzymana powyżej 75%',
                'Idealna dla realistycznej fotografii',
                'Niezalecana dla logo lub ostrego tekstu'
            ],
            highlight: true
        },
        {
            title: 'Kompresja Bezstratna (Lossless)',
            description: 'PNG, WebP lossless - Zachowuje 100% danych wizualnych',
            icon: 'mdi:shield',
            points: [
                'Redukuje 20-50% wagi',
                'Doskonała jakość, brak degradacji',
                'Idealna dla grafik, logo, przezroczystości',
                'Pliki cięższe niż w kompresji stratnej'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Wpływ na SEO i Konwersję', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google karze wolne strony. Zoptymalizowane obrazy bezpośrednio poprawiają wskaźnik LCP (Largest Contentful Paint).',
        '<strong>Współczynnik Odrzuceń:</strong> Każda sekunda opóźnienia = 7% więcej odrzuceń. Szybsze obrazy = mniej użytkowników, którzy opuszczają stronę.',
        '<strong>Ranking wyszukiwania:</strong> Szybkość jest czynnikiem rankingowym. Optymalizacja obrazów zwiększa pozycjonowanie.',
        '<strong>Konwersja:</strong> Szybszy czas ładowania = więcej konwersji. Badania pokazują wzrost konwersji o 10% dzięki optymalizacji.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Całkowita prywatność: 100% lokalnego przetwarzania, brak serwerów w chmurze',
            con: 'Wymaga przeglądarki z obsługą Canvas API (jest to standard)'
        },
        {
            pro: 'WebP jest o 25-35% mniejszy niż JPEG przy tej samej jakości',
            con: 'Stare wersje Safari i IE nie obsługują WebP (dostępny jest fallback)'
        },
        {
            pro: 'Natychmiastowe przetwarzanie wielu obrazów',
            con: 'Bardzo duże obrazy (>50MB) mogą wymagać oczekiwania'
        },
        {
            pro: 'Opcjonalna zmiana rozmiaru: zmniejsza zarówno rozdzielczość, jak i kompresję',
            con: 'Zmiana rozmiaru powoduje utratę informacji - lepiej optymalizować rozdzielczość u źródła'
        }
    ], proTitle: 'Zalety', conTitle: 'Ograniczenia' },

    { type: 'diagnostic', variant: 'warning', title: 'Uwaga: Nadmierna Kompresja Pogarsza Jakość', icon: 'mdi:alert', badge: 'Jakość', html: 'Utrzymuj jakość powyżej 75% dla fotografii i powyżej 85% dla treści redakcyjnych. Poniżej tych wartości artefakty kompresji (plamy, bandowanie) stają się widoczne. Obraz, który wygląda dobrze jako miniatura, może wyglądać źle w powiększeniu.' },

    { type: 'glossary', items: [
        {
            term: 'Kompresja Stratna (Lossy)',
            definition: 'Usuwa dane wizualne, które ludzkie oko postrzega jako „szum”. Idealna dla fotografii. JPEG, stratny WebP, HEIC są kompresjami stratnymi.'
        },
        {
            term: 'Kompresja Bezstratna (Lossless)',
            definition: 'Zmniejsza rozmiar bez utraty informacji wizualnych. PNG i bezstratny WebP. Idealna dla grafik, logo, przezroczystości.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Wskaźniki doświadczenia użytkownika: LCP (szybkość ładowania), FID (opóźnienie interakcji), CLS (stabilność wizualna). Wpływają na pozycjonowanie SEO.'
        },
        {
            term: 'WebP',
            definition: 'Format opracowany przez Google. O 25-35% mniejszy niż JPEG. Obsługiwany przez 95% nowoczesnych przeglądarek (wszystkie poza IE).'
        },
        {
            term: 'Artefakty Kompresji',
            definition: 'Wady wizualne spowodowane nadmierną kompresją: plamy, bandowanie kolorów, rozmyte krawędzie. Niedostrzegalne przy jakości powyżej 75%.'
        }
    ] },

    { type: 'message', title: 'Profesjonalna Optymalizacja Internetowa', ariaLabel: 'Informacja o optymalizacji obrazów dla SEO', html: 'To nie jest techniczna fanaberia: kompresja obrazów to bezpośrednia inwestycja w doświadczenie użytkownika i ranking Google. Każdy kilobajt liczy się na urządzeniach mobilnych. Nasze narzędzie zamienia to, co kiedyś wymagało profesjonalnego oprogramowania ($$$), w darmowy proces zajmujący 3 kliknięcia.' },

    { type: 'title', text: 'Przygotowany na Nowoczesną Sieć', level: 3 },
    { type: 'paragraph', html: 'Korzystaj z inteligentnej kompresji i formatu WebP, aby Twoja obecność online była szybka, responsywna i konkurencyjna w wyszukiwaniu. Profesjonalna jakość, minimalna waga, błyskawiczne ładowanie.' }
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

export const content: ImageCompressorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Często Zadawane Pytania",
    faq,
    bibliographyTitle: "Referencje",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'synchonizacja-napisow-srt-online-regulacja-czasu-za-darmo';
const title = 'Synchronizacja napisów SRT online: Reguluj czas za darmo';
const description = 'Narzędzie online do przyspieszania lub opóźniania napisów SRT. Łatwo koryguj przesunięcie czasowe i natychmiast pobierz zsynchronizowany plik.';

const ui: SubtitleSyncUI = {
    dropTitle: "Przeciągnij plik .SRT tutaj",
    dropSubtitle: "lub kliknij, aby przeglądać",
    adjustTitle: "Adjust Time",
    offsetLabel: "Przesunięcie (sekundy)",
    offsetHelp: "Użyj wartości ujemnych, aby przyspieszyć (np. -1.5) i dodatnich, aby opóźnić.",
    linesStat: "Linie",
    firstStat: "Pierwszy napis",
    lastStat: "Ostatni napis",
    originalLabel: "ORYGINAŁ",
    resultLabel: "WYNIK",
    downloadButton: "Pobierz poprawione",
    previewBadge: "PODGLĄD",
    unitSeconds: "sek"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Jak mogę zsynchronizować napisy, jeśli dźwięk jest wcześniej?",
        answer: "Jeśli dźwięk pojawia się przed tekstem, musisz opóźnić napisy. Wprowadź wartość dodatnią w kalkulatorze (np. 2.0, aby opóźnić je o 2 sekundy).",
    },
    {
        question: "Jakie formaty plików akceptuje to narzędzie?",
        answer: "Obecnie narzędzie jest zoptymalizowane pod kątem plików .SRT (SubRip), który jest najczęstszym standardem w odtwarzaczach wideo i platformach streamingowych.",
    },
    {
        question: "Czy przesyłanie moich plików z napisami jest bezpieczne?",
        answer: "Tak, ponieważ przetwarzanie odbywa się w 100% lokalnie na Twoim urządzeniu. Twoje pliki nie są wysyłane na żaden serwer; synchronizacja odbywa się bezpośrednio w przeglądarce.",
    },
    {
        question: "Czy mogę zsynchronizować tylko część pliku?",
        answer: "Nie, to narzędzie stosuje stałe przesunięcie do całego pliku. Jeśli przesunięcie jest progresywne, możesz potrzebować bardziej zaawansowanej edycji.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Prześlij plik SRT",
        text: "Przeciągnij plik napisów, który chcesz poprawić, do obszaru przesyłania.",
    },
    {
        name: "Zidentyfikuj przesunięcie",
        text: "Zmierz, jak duże opóźnienie lub przyspieszenie mają napisy względem dźwięku w Twoim odtwarzaczu.",
    },
    {
        name: "Dostosuj przesunięcie",
        text: "Wprowadź dodatnie (opóźnienie) lub ujemne (przyspieszenie) sekundy w panelu sterowania.",
    },
    {
        name: "Pobierz plik",
        text: "Sprawdź w podglądzie, czy czasy są poprawne i kliknij Pobierz, aby otrzymać nowy plik SRT.",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesjonalna synchronizacja napisów',
        items: [
            'Natychmiastowa korekta przesunięć dźwięk-napisy',
            'Obsługa standardowych plików SRT (SubRip)',
            'Przetwarzanie w 100% lokalne - maksymalna prywatność',
            'Bez instalacji, bez subskrypcji, całkowicie za darmo'
        ]
    },
    { type: 'title', text: 'Perfekcyjna synchronizacja napisów SRT', level: 2 },
    { type: 'paragraph', html: 'Nie ma nic bardziej frustrującego dla widza niż oglądanie dialogów, które nie pasują do głosów. Przesunięcie napisów występuje zazwyczaj z powodu różnic między wersjami wideo: zmian w liczbie klatek na sekundę, cięć reklamowych, intro produkcyjnych lub zmian w kompresji. Dzięki temu narzędziu naprawisz problem w kilka sekund.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Przetwarzanie lokalne', icon: 'mdi:shield' },
        { value: 'Milisekundy', label: 'Precyzja', icon: 'mdi:clock-outline' },
        { value: 'Dowolny', label: 'BRAK limitu pliku', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Przyspieszenie vs Opóźnienie: Praktyczny przewodnik', level: 3 },
    { type: 'paragraph', html: 'Pierwszym krokiem jest poprawne zidentyfikowanie typu przesunięcia. Oto logika:' },
    { type: 'list', items: [
        '<strong>Opóźnienie (Wartość dodatnia):</strong> Gdy widzisz tekst pojawiający się PRZED dźwiękiem. Napisy są za wcześnie. Przykład: +2.0 sekundy.',
        '<strong>Przyspieszenie (Wartość ujemna):</strong> Gdy widzisz tekst pojawiający się PO dźwięku. Napisy są spóźnione. Przykład: -2.0 sekundy.',
        '<strong>Przetestuj i dostosuj:</strong> Zacznij od małych skoków (0.5s) i użyj podglądu do weryfikacji.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Prywatność na profesjonalnym poziomie', html: 'Przetwarzając plik za pomocą JavaScript po stronie klienta, gwarantujemy, że treść Twoich napisów nigdy nie opuści Twojego komputera. Niezbędne dla tłumaczy i profesjonalistów obsługujących materiały poufne lub objęte umową NDA.' },

    { type: 'title', text: 'Typowe przypadki użycia', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Tłumacze i twórcy napisów',
            description: 'Synchronizuj tłumaczenia po pracy z wieloma wersjami wideo',
            icon: 'mdi:translate',
            points: [
                'Pliki SRT z różnych źródeł',
                'Wersjonowanie treści (kinowa vs streamingowa)',
                'Szybka dostawa bez zmiany narzędzi'
            ]
        },
        {
            title: 'Twórcy treści',
            description: 'Odzyskaj napisy, gdy wideo zostało przetworzone z inną liczbą klatek na sekundę',
            icon: 'mdi:video',
            points: [
                'Ponowne użycie istniejących napisów',
                'Zmiany formatu (720p na 1080p)',
                'Unikaj ręcznego dostosowywania czasu dla ponad 1000 linii'
            ],
            highlight: true
        },
        {
            title: 'Użytkownicy domowi',
            description: 'Popraw pobrane napisy, które nie pasują idealnie',
            icon: 'mdi:account',
            points: [
                'Ogólne niesynchronizowane napisy',
                'Filmy z różnych regionów (PAL vs NTSC)',
                'Streaming z edytowanymi wersjami'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Dlaczego napisy tracą synchronizację', level: 3 },
    { type: 'table', headers: ['Częsta przyczyna', 'Opis techniczny', 'Rozwiązanie'], rows: [
        ['Różnica w Framerate', '23.976 fps vs 25 fps - skumulowana różnica', 'Regulacja pojedynczego przesunięcia (to narzędzie)'],
        ['Edycja', 'Cięcia reklamowe lub usunięta/dodana treść', 'Ręczne obliczenia + synchronizacja'],
        ['Wersja regionalna', 'PAL (25 fps Europa) vs NTSC (29.97 fps USA)', 'Proste matematyczne przesunięcie'],
        ['Zmiana rozdzielczości', 'Ponowne kodowanie z inna prędkością przetwarzania', 'Ponowne przeliczenie oryginalnego pliku']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Ograniczenia techniczne do rozważenia', icon: 'mdi:information', badge: 'Ważne', html: 'To narzędzie stosuje <strong>stałe</strong> przesunięcie do całego pliku. Jeśli przesunięcie jest <strong>progresywne</strong> (zaczyna się dobrze, ale stopniowo traci synchronizację), wskazuje to na trwałą różnicę w liczbie klatek na sekundę. W takim przypadku plik oryginalny wymaga ponownego przetworzenia w profesjonalnym oprogramowaniu do edycji.' },

    { type: 'proscons', items: [
        {
            pro: 'Ekstremalna szybkość - przetwarza duże pliki w milisekundach',
            con: 'Reguluje tylko stałe przesunięcie, a nie progresywne'
        },
        {
            pro: 'Całkowita prywatność - treść nigdy nie opuszcza przeglądarki',
            con: 'Wymaga nowoczesnej przeglądarki z włączonym JavaScriptem'
        },
        {
            pro: 'Uniwersalny format - działa z każdym standardowym SRT',
            con: 'Nie obsługuje innych formatów (ASS, VTT, SCC itp.)'
        },
        {
            pro: 'Całkowicie za darmo, bez reklam, bez śledzenia',
            con: 'Brak historii zmian lub wersjonowania'
        }
    ], proTitle: 'Zalety', conTitle: 'Ograniczenia' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Najbardziej uniwersalny format napisów: plik tekstowy z numerami sekwencji, czasami (gg:mm:ss,mmm) i tekstem. Standard de facto w odtwarzaczach i platformach.'
        },
        {
            term: 'Przesunięcie (Offset)',
            definition: 'Stała ilość czasu dodawana lub odejmowana od wszystkich czasów w pliku. Mogą to być sekundy dodatnie (opóźnienie) lub ujemne (przyspieszenie).'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Klatki na sekundę. 24p (kino), 25p (PAL/Europa), 29.97p (NTSC/USA), 60p (płynne wideo). Różnice powodują skumulowane przesunięcia.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Regionalne standardy telewizyjne: PAL (25 kl./s) w Europie; NTSC (29.97 kl./s) w USA. Ok. 4% różnicy w prędkości.'
        },
        {
            term: 'Przesunięcie progresywne',
            definition: 'Gdy synchronizacja zaczyna się poprawnie, ale stopniowo kończy się brakiem synchronizacji. Wskazuje na różnicę w framerate, wymaga ponownego przetwarzania.'
        }
    ] },

    { type: 'message', title: 'Profesjonalna edycja z pełną kontrolą', ariaLabel: 'Informacje techniczne o synchronizacji', html: 'Nasze podejście jest proste, ale potężne: pojedyncze przesunięcie, stosowane natychmiast, przetwarzane w 100% w Twojej przeglądarce. Bez chmury, bez przechowywania, bez śledzenia. Po prostu prześlij, dostosuj, pobierz. Pełna kontrola nad Twoimi treściami.' },

    { type: 'title', text: 'Podsumowanie: Filmy bez zakłóceń', level: 3 },
    { type: 'paragraph', html: 'Idealna synchronizacja napisów jest kluczowa dla wysokiej jakości wrażeń audiowizualnych. Dzięki temu narzędziu przekształcisz frustrujące doświadczenie w idealny wieczór filmowy, bez potrzeby korzystania z drogiego lub skomplikowanego oprogramowania.' }
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

export const content: SubtitleSyncLocaleContent = {
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

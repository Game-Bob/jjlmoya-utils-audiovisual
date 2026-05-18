import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'lacz-filmy-online';
const title = 'Łącz Filmy Online: Połącz wiele wideo szybko i za darmo';
const description = 'Połącz i scal wiele filmów w jeden, całkowicie za darmo, online i lokalnie. Bez znaków wodnych, bez przesyłania, w 100% prywatnie w Twojej przeglądarce.';

const ui: VideoMergerUI = {
    uploadTitle: "Prześlij pliki wideo",
    uploadFormats: "Przeciągnij i upuść filmy lub kliknij, aby je wybrać",
    privacyNote: "Twoje filmy są przetwarzane w 100% lokalnie. Nic nie jest przesyłane do internetu.",
    addMoreBtn: "Dodaj więcej filmów",
    mergeBtn: "Połącz filmy teraz",
    mergingStatus: "Łączenie filmów...",
    downloadBtn: "Pobierz połączone wideo",
    resetBtn: "Zacznij od nowa",
    emptyList: "Przeciągnij lub wybierz filmy, aby rozpocząć łączenie.",
    listTitle: "Kolejność filmów do połączenia",
    optionsTitle: "Ustawienia wyjściowe",
    optionResolution: "Rozdzielczość",
    optionFps: "Klatki na sekundę (FPS)",
    optionsQualityNote: "Rozdzielczość końcowa zostanie dostosowana z zachowaniem oryginalnych proporcji w formacie letterbox, jeśli filmy mają różne wymiary.",
    faqTitle: "Często Zadawane Pytania (FAQ) o łączeniu filmów",
    bibliographyTitle: "Bibliografia i Referencje",
    resolutionWarning: "Uwaga: Niektóre filmy mają różne rozdzielczości i zostaną automatycznie dostosowane."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Czy przesyłanie moich filmów do tego narzędzia jest bezpieczne?",
        answer: "Tak, to całkowicie bezpieczne. Narzędzie działa w 100% lokalnie w Twojej przeglądarce. Twoje wideo nigdy nie jest wysyłane do internetu ani zapisywane na żadnym serwerze.",
    },
    {
        question: "Co się stanie, jeśli moje filmy mają różne wymiary?",
        answer: "Nasze narzędzie automatycznie przeskalowuje filmy, aby dopasować je do wybranej rozdzielczości wyjściowej. W przypadku proporcji, które nie pasują do siebie dokładnie, zostaną dodane czarne marginesy (letterboxing), aby zachować oryginalne proporcje.",
    },
    {
        question: "Czy dźwięk z filmów jest zachowany podczas łączenia?",
        answer: "Tak. Ścieżki audio z każdego wideo są przechwytywane i miksowane sekwencyjnie w idealnej synchronizacji z każdym fragmentem obrazu.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Wybierz lub przeciągnij filmy",
        text: "Załaduj wszystkie pliki wideo, które chcesz połączyć, bezpośrednio z komputera lub telefonu komórkowego.",
    },
    {
        name: "Ustal kolejność",
        text: "Uporządkuj przesłane filmy za pomocą przycisków w górę i w dół na liście, aby zdecydować o kolejności odtwarzania.",
    },
    {
        name: "Dostosuj opcje",
        text: "Wybierz rozdzielczość wyjściową oraz liczbę klatek na sekundę (FPS) połączonego wideo.",
    },
    {
        name: "Połącz i wyeksportuj",
        text: "Naciśnij przycisk łączenia. Poczekaj na zakończenie przetwarzania w czasie rzeczywistym i pobierz wynikowy plik.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesjonalne, W 100% Lokalne Łączenie Filmów',
        items: [
            'Przetwarzanie w czasie rzeczywistym bezpośrednio w przeglądarce',
            'Obsługa wielu filmów o różnych rozmiarach i formatach (MP4, WEBM, MOV)',
            'Wybór rozdzielczości wyjściowej (720p, 1080p, 2K, 4K)',
            'Ścieżki audio połączone idealnie sekwencyjnie'
        ]
    },
    { type: 'title', text: 'Łącz Filmy Online Za Darmo: Bezgraniczna Prostota i Prywatność', level: 2 },
    { type: 'paragraph', html: 'Zastanawiasz się, <strong>jak połączyć dwa filmy w jeden</strong> bez komplikacji? Nie musisz już pobierać ciężkich programów ani płatnych aplikacji. Nasze narzędzie do <strong>łączenia filmów online za darmo</strong> pozwala Ci na scalenie i połączenie wszystkich potrzebnych klipów w kilka sekund. Działając w 100% lokalnie, nie musisz przesyłać plików na żaden serwer, co gwarantuje absolutną prywatność i pozwala <strong>łączyć duże pliki wideo</strong> bez czasu oczekiwania na przesłanie.' },
    
    { type: 'title', text: 'Łącz Wideo Bez Znaku Wodnego', level: 3 },
    { type: 'paragraph', html: 'Jedną z największych wad innych aplikacji jest to, że niszczą Twoje treści. Z nami możesz <strong>połączyć wideo online bez znaku wodnego</strong>. Pobrany plik będzie dokładnie Twoim dziełem, czystym, profesjonalnym i gotowym do udostępnienia na YouTube, Instagram, TikTok lub do użytku prywatnego.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Prywatne i Lokalne', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Brak Przesyłania Danych', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Maksymalna Rozdzielczość', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Częste Przypadki Użycia', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Media Społecznościowe',
            description: 'Szybkie łączenie relacji, TikToków lub rolek w jeden film',
            icon: 'mdi:instagram',
            points: [
                'Połącz małe klipy nagrane telefonem komórkowym',
                'Przygotuj treści sekwencyjne na Instagram lub YouTube',
                'Łączenie bez irytujących znaków wodnych'
            ]
        },
        {
            title: 'Prezentacje',
            description: 'Połącz wprowadzenia i nagrania demonstracyjne',
            icon: 'mdi:presentation',
            points: [
                'Połącz animowane intro z resztą prezentacji',
                'Połącz krótkie dema oprogramowania',
                'Czysty eksport w standardowym formacie MP4/WEBM'
            ],
            highlight: true
        },
        {
            title: 'Kompilacje Rodzinne',
            description: 'Połącz wiele filmów z wakacji lub uroczystości',
            icon: 'mdi:home-heart',
            points: [
                'Utwórz jeden film ze wszystkimi momentami imprezy',
                'Grupuj wspomnienia z podróży chronologicznie',
                'Łatwe do udostępnienia w jednym pliku'
            ]
        },
        {
            title: 'Filmy Edukacyjne',
            description: 'Połącz krótkie rozdziały szkoleniowe lub lekcje',
            icon: 'mdi:school',
            points: [
                'Grupuj małe niezależne samouczki',
                'Dodaj klip końcowy do swoich lekcji',
                'Zbuduj strukturę kursu w profesjonalny sposób'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Najlepsza Aplikacja do Łączenia Filmów z Przeglądarki', level: 2 },
    { type: 'paragraph', html: 'To nie jest kolejna zwykła strona internetowa; to prawdziwa <strong>aplikacja do łączenia filmów</strong>, która działa bezpośrednio w przeglądarce dzięki nowoczesnym API wideo HTML5. Możesz <strong>łączyć filmy MP4</strong>, WEBM i inne, mieszać rozdzielczości (nasz system automatycznie stosuje letterboxing, jeśli wymiary się różnią) i wybierać liczbę klatek na sekundę (FPS) dla końcowego eksportu.' },

    { type: 'title', text: 'Porównanie Metod Łączenia', level: 3 },
    { type: 'table', headers: ['Cechy', 'Nasze Lokalne Narzędzie', 'Klasyczne Konwertery Online', 'Profesjonalne Edytory'], rows: [
        ['Prywatność', 'Pełna (Przetwarzanie na urządzeniu)', 'Niska (Wymaga wgrania plików na serwer)', 'Pełna (Zainstalowane na urządzeniu)'],
        ['Zużycie Sieci', 'Zerowe (Brak gigabajtów danych)', 'Bardzo wysokie (Przesyłanie i pobieranie)', 'Zerowe'],
        ['Znak Wodny', 'NIE (W 100% czyste)', 'Tak (W wersjach darmowych)', 'NIE (Jeśli kupisz licencję)'],
        ['Cena', '100% Za darmo', 'Za darmo z limitami lub subskrypcja', 'Zwykle drogie'],
        ['Krzywa Uczenia', 'Bardzo niska (Przeciągnij, ułóż, połącz)', 'Niska', 'Bardzo wysoka (Wymaga szkolenia)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Gwarantowana prywatność: Maksymalne bezpieczeństwo, pliki nie opuszczają urządzenia',
            con: 'Szybkość łączenia dużych filmów zależy od pamięci RAM i procesora Twojego komputera'
        },
        {
            pro: 'Profesjonalne rezultaty: W 100% darmowe, bez rejestracji i bez znaków wodnych',
            con: 'Przy łączeniu wideo o różnych wymiarach (pionowo vs poziomo), zostaną dodane czarne marginesy'
        },
        {
            pro: 'Wszechstronność: Szybki eksport z wydajnym kodowaniem dla internetu i mediów społecznościowych',
            con: 'Nie pozwala na dodawanie złożonych przejść 3D ani kinowych efektów wizualnych między klipami'
        }
    ], title: 'Zalety i Kwestie do Rozważenia' },

    { type: 'title', text: 'Zacznij Łączyć Swoje Filmy Już Dziś', level: 2 },
    { type: 'paragraph', html: 'Nie ma już wymówek dla posiadania setek niezorganizowanych fragmentów wideo. Załaduj swoje pliki, ułóż je w odpowiedniej kolejności i naciśnij przycisk. Odkryj najszybszy, najbezpieczniejszy i najbardziej prywatny sposób na <strong>łączenie filmów online</strong>.' }
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

export const content: VideoMergerLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'ekstrakcja-klatek-wideo-online-przechwytywanie-stills-hd';
const title = 'Ekstrakcja klatek wideo: Przechwytywanie obrazów HD';
const description = 'Wyodrębniaj poszczególne obrazy z filmów z precyzją co do klatki. Przechwytuj idealne momenty w HD lokalnie i za darmo.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Prześlij plik wideo",
    uploadFormats: "MP4, WebM, MOV lub MKV (Maks. 500MB)",
    privacyNote: "Wideo nie jest przesyłane do Internetu, jest przetwarzane w Twojej przeglądarce.",
    playLabel: "Odtwórz",
    pauseLabel: "Pauza",
    captureBtn: "Przechwyć klatkę",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Automatyczna ekstrakcja",
    batchEvery: "Co",
    batchStart: "Rozpocznij sekwencję",
    batchProcessing: "Wyodrębnianie...",
    galleryTitle: "Przechwycone klatki",
    galleryEmpty: "Przechwycone obrazy pojawią się tutaj.",
    downloadAll: "Pobierz wszystko",
    downloadHD: "Pobierz obraz HD",
    resetBtn: "Prześlij inne wideo"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Czy mogę wyodrębniać klatki z długich filmów?",
        answer: "Tak, o ile Twoja przeglądarka ma wystarczającą ilość pamięci RAM, aby załadować wideo. Zalecamy pliki do 500 MB dla optymalnej wydajności.",
    },
    {
        question: "W jakiej rozdzielczości są zapisywane obrazy?",
        answer: "Zrzuty są wykonywane w natywnej rozdzielczości oryginalnego wideo. Jeśli Twój film ma jakość 4K, otrzymasz wysokiej jakości obraz 4K.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Prześlij swoje wideo",
        text: "Wybierz plik wideo ze swojego urządzenia. Nie będziemy go przesyłać na żaden serwer.",
    },
    {
        name: "Przejdź do dokładnego momentu",
        text: "Użyj paska osi czasu lub przycisków ±1 klatka dla chirurgicznej precyzji.",
    },
    {
        name: "Przechwyć klatkę",
        text: "Naciśnij przycisk przechwytywania, aby zapisać dany moment w galerii poniżej.",
    },
    {
        name: "Pobierz w wysokiej jakości",
        text: "Pobierz pojedyncze zrzuty lub całą sesję w zoptymalizowanym formacie WebP.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesjonalna ekstrakcja klatek wideo',
        items: [
            'Precyzja co do jednej klatki (±1 klatka) dla idealnego ujęcia',
            'Obsługa MP4, WebM, MOV, MKV do 500MB',
            'Zachowanie natywnej rozdzielczości wideo (SD, HD, 4K)',
            'Automatyczna ekstrakcja seryjna w niestandardowych odstępach'
        ]
    },
    { type: 'title', text: 'Ekstrakcja klatek: Zamrażanie czasu w wideo', level: 2 },
    { type: 'paragraph', html: 'Czasami obraz jest wart więcej niż tysiąc słów. Nasze narzędzie wykorzystuje lokalną moc przeglądarki do precyzyjnego wyodrębniania klatek bez potrzeby posiadania profesjonalnego oprogramowania.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Precyzja klatki', icon: 'mdi:target' },
        { value: '100%', label: 'Natywna rozdzielczość', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Obsługiwane pliki', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Profesjonalne zastosowania', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Kino i fotografia',
            description: 'Przechwytywanie klatek jako referencja wizualna lub kompozycja',
            icon: 'mdi:film',
            points: [
                'Ekstrakcja fotosów do marketingu filmowego',
                'Referencje do kompozycji scen',
                'Analiza klatka po klatce'
            ]
        },
        {
            title: 'Content cyfrowy',
            description: 'Tworzenie miniatur i okładek do mediów społecznościowych',
            icon: 'mdi:youtube',
            points: [
                'Miniatury YouTube w wysokiej rozdzielczości',
                'Okładki do mediów społecznościowych',
                'Obrazy do prezentacji'
            ],
            highlight: true
        },
        {
            title: 'Dokumentacja techniczna',
            description: 'Wyodrębnianie klatek z samouczków i demonstracji',
            icon: 'mdi:book-open',
            points: [
                'Zrzuty ekranu z filmów instruktażowych',
                'Wizualna dokumentacja krok po kroku',
                'Analiza ruchu w czasie rzeczywistym'
            ]
        },
        {
            title: 'Sport i akcja',
            description: 'Przechwytywanie precyzyjnego momentu maksymalnej akcji',
            icon: 'mdi:dumbbell',
            points: [
                'Analiza techniki sportowej klatka po klatce',
                'Przechwytywanie heroicznych momentów',
                'Studium ruchu'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Obsługiwane formaty wideo', level: 3 },
    { type: 'table', headers: ['Format', 'Rozszerzenie', 'Kompatybilność', 'Uwagi'], rows: [
        ['MPEG-4', 'MP4', 'Uniwersalna (100%)', 'Najlepsza kompresja, powszechnie używany'],
        ['WebM', 'WebM', 'Nowoczesne przeglądarki', 'Doskonała kompresja, mniejszy rozmiar'],
        ['QuickTime', 'MOV', 'Safari, niektóre odtwarzacze', 'Standard Apple'],
        ['Matroska', 'MKV', 'Nowoczesne przeglądarki', 'Elastyczny kontener']
    ] },

    { type: 'card', title: 'Precyzja co do klatki', html: 'Przesunięcie o jedną klatkę do przodu lub do tyłu (±1 klatka) jest kluczowe dla uchwycenia idealnego momentu: skoku, uśmiechu, gestu. Nasze narzędzie zapewnia milimetrową kontrolę.' },

    { type: 'proscons', items: [
        {
            pro: 'Całkowita prywatność: wideo jest przetwarzane w 100% lokalnie w przeglądarce',
            con: 'Ograniczone do dostępnego rozmiaru pamięci RAM (~500MB zalecane)'
        },
        {
            pro: 'Zachowanie natywnej rozdzielczości: SD, HD, 4K bez rekompresji',
            con: 'Wymaga nowoczesnej przeglądarki z obsługą HTML5 Video'
        },
        {
            pro: 'Automatyczna ekstrakcja seryjna w odstępach',
            con: 'Do zaawansowanej edycji wymagany jest edytor wideo'
        },
        {
            pro: 'Eksport klatek w zoptymalizowanym WebP lub PNG',
            con: 'Jedna klatka na raz (brak eksportu zautomatyzowanych sekwencji GIF)'
        }
    ], proTitle: 'Zalety', conTitle: 'Ograniczenia' },

    { type: 'diagnostic', variant: 'info', title: 'Rozdzielczość i liczba klatek', icon: 'mdi:information', badge: 'Techniczne', html: 'Ostateczna rozdzielczość klatki zależy od oryginalnego wideo. Zachowujemy natywne informacje bez upscalingu.' },

    { type: 'glossary', items: [
        {
            term: 'Klatka',
            definition: 'Pojedynczy obraz w sekwencji wideo. Film 24 kl./s zawiera 24 klatki na sekundę.'
        },
        {
            term: 'FPS (Frames Per Second)',
            definition: 'Klatki na sekundę. Określa płynność ruchu.'
        },
        {
            term: 'Kodek wideo',
            definition: 'Algorytm kompresji: H.264, VP9, HEVC. Określa rozmiar i jakość pliku.'
        },
        {
            term: 'Bitrate',
            definition: 'Ilość danych przetwarzanych na sekundę. Wyższy bitrate = wyższa jakość.'
        },
        {
            term: 'Rozdzielczość wideo',
            definition: 'Wymiary w pikselach: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Profesjonalna ekstrakcja klatek', ariaLabel: 'Informacje techniczne o ekstrakcji wideo', html: 'Nie potrzebujesz skomplikowanych konwerterów. Idealna klatka to tylko 3 kliknięcia: prześlij wideo, nawiguj, przechwyć.' },

    { type: 'title', text: 'Zamrażanie momentów wideo', level: 3 },
    { type: 'paragraph', html: 'Każde wideo zawiera setki klatek. Użyj tego narzędzia, aby wyodrębnić te idealne momenty bez utraty jakości.' }
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

export const content: VideoFrameExtractorLocaleContent = {
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

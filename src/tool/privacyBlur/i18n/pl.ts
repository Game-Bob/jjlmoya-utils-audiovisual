import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'edytor-prywatnosci-online-pikseluj-rozmyj-twarze-zdjecia';
const title = 'Edytor Prywatności Online: Pikselowanie i ukrywanie twarzy na zdjęciach';
const description = 'Chroń swoją tożsamość, cenzurując wrażliwe obszary swoich zdjęć. Pikseluj twarze, rozmywaj dokumenty lub zakrywaj prywatne informacje w 100% lokalnie.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pikseluj",
    toolBlur: "Rozmyj",
    toolSolid: "Zakryj",
    intensityLabel: "Intensywność",
    undoButton: "Cofnij",
    downloadButton: "Zapisz",
    dropTitle: "Edytor Prywatności",
    dropSubtitle: "Przeciągnij obraz tutaj lub kliknij, aby rozpocząć",
    privacySecureLabel: "100% Lokalnie",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto Wykrywanie",
    loadingModels: "Ładowanie modeli...",
    noFacesDetected: "Nie wykryto twarzy automatycznie.",
    faqTitle: "Często Zadawane Pytania": "Referencje"
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Czy moje zdjęcia są przesyłane na jakikolwiek serwer?",
        answer: "Nie. Edytor prywatności działa całkowicie w Twojej przeglądarce. Piksele są modyfikowane lokalnie i nic nie jest wysyłane poza Twoje urządzenie.",
    },
    {
        question: "Jak działa automatyczne wykrywanie twarzy?",
        answer: "Używamy lekkiej sieci neuronowej (TinyFaceDetector), która działa w Twojej przeglądarce, aby identyfikować cechy twarzy bez potrzeby połączenia zewnętrznego.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Prześlij zdjęcie",
        text: "Przeciągnij lub wybierz obraz zawierający wrażliwe informacje, które chcesz ukryć.",
    },
    {
        name: "Wybierz narzędzie",
        text: "Wybierz między pikselowaniem, rozmyciem a pełnym zakryciem, w zależności od potrzebnego poziomu prywatności.",
    },
    {
        name: "Zaznacz obszar",
        text: "Kliknij i przeciągnij nad strefą, którą chcesz chronić (twarze, tablice rejestracyjne, nazwiska itp.).",
    },
    {
        name: "Zapisz wynik",
        text: "Pobierz przetworzony obraz z pewnością, że oryginalne dane są niedostępne.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Edytor Prywatności: Pikseluj, Rozmywaj i Ukrywaj',
        items: [
            'Trzy narzędzia edycji: Pikselowanie, Rozmycie, Pełne Zakrycie',
            'Automatyczne wykrywanie twarzy za pomocą AI (TinyFaceDetector)',
            'Przetwarzanie w 100% lokalne - Twoje zdjęcia nigdy nie opuszczają przeglądarki',
            'Brak znaków wodnych, brak limitów, całkowicie za darmo'
        ]
    },
    { type: 'title', text: 'Prywatność Cyfrowa: Jak Chronić Dane Wizualne', level: 2 },
    { type: 'paragraph', html: 'W dobie mediów społecznościowych udostępnianie zdjęć bez kontroli może narazić wrażliwe dane osobowe. Nasze narzędzie pozwala ukryć krytyczne informacje (twarze, tablice rejestracyjne, nazwiska, adresy) przed przesłaniem ich do Internetu, zapewniając, że Twoja prywatność pozostaje pod pełną kontrolą.' },

    { type: 'stats', items: [
        { value: '3', label: 'Metody ukrywania', icon: 'mdi:tools' },
        { value: '100%', label: 'Prywatność lokalna', icon: 'mdi:shield-check' },
        { value: 'AI', label: 'Wykrywanie twarzy', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Objaśnienie trzech metod ukrywania', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pikselowanie',
            description: 'Dzieli obszar na kwadraty, niemożliwe do rozpoznania',
            icon: 'mdi:blur',
            points: [
                'Maksymalne nieodwracalne zaciemnienie',
                'Bezpieczniejsze przed rozpoznawaniem twarzy',
                'Widoczne, jasne jest, że coś zostało ukryte',
                'Idealne: twarze na publicznych zdjęciach'
            ]
        },
        {
            title: 'Rozmycie (Blur)',
            description: 'Wygładzanie gaussowskie - bardziej naturalny wygląd',
            icon: 'mdi:blur-off',
            points: [
                'Bardziej elegancki wygląd wizualny',
                'Zachowuje pewną spójność tonacji',
                'Matematycznie odwracalne (teoretycznie)',
                'Idealne: mniej wrażliwe informacje'
            ],
            highlight: true
        },
        {
            title: 'Zakrycie (Solid)',
            description: 'Nieprzezroczysty blok koloru - maksymalna prywatność',
            icon: 'mdi:rectangle',
            points: [
                'Widoczne, oczywiste ukrycie',
                'Maksymalne bezpieczeństwo prawne/prywatność',
                'Zmienia kompozycję wizualną',
                'Idealne: dokumenty, dane wrażliwe'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Automatyczne wykrywanie twarzy za pomocą AI', level: 3 },
    { type: 'paragraph', html: 'Nasze narzędzie wykorzystuje TinyFaceDetector, kompaktową sieć neuronową, która działa bezpośrednio w przeglądarce, aby automatycznie identyfikować twarze:' },
    { type: 'list', items: [
        '<strong>100% Lokalnie:</strong> Model AI działa na Twoim GPU/CPU, a nie na zdalnych serwerach.',
        '<strong>Brak Internetu:</strong> Po wstępnym pobraniu działa całkowicie offline.',
        '<strong>Prywatność Gwarantowana:</strong> Nikt nie widzi twarzy: ani Google, ani OpenAI, ani my.',
        '<strong>Automatyka jednym kliknięciem:</strong> Wykrywa twarze i pozwala ukryć je jednym kliknięciem.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Przetwarzając obrazy przy użyciu lokalnego GPU i CPU Twojej przeglądarki, gwarantujemy, że oryginalne zdjęcia nigdy nie opuszczają Twojego urządzenia. Nawet jeśli zmienisz zdanie, nic nie zostało przesłane. To najwyższy standard prywatności cyfrowej.' },

    { type: 'title', text: 'Przypadki użycia prywatności', level: 3 },
    { type: 'table', headers: ['Informacje wrażliwe', 'Zalecana metoda', 'Pilność'], rows: [
        ['Twarze osób', 'Pikselowanie lub Rozmycie', 'Krytyczna'],
        ['Tablice rejestracyjne', 'Pikselowanie (nieodwracalne)', 'Krytyczna'],
        ['Dokumenty tożsamości', 'Zakrycie lub Pikselowanie', 'Krytyczna'],
        ['Pisane nazwiska/adresy', 'Zakrycie lub Pikselowanie', 'Wysoka'],
        ['Numery telefonów', 'Pikselowanie lub Zakrycie', 'Wysoka'],
        ['Informacje medyczne', 'Zakrycie', 'Krytyczna'],
        ['Widoczne sygnały WiFi', 'Pikselowanie', 'Średnia']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Całkowita prywatność: przetwarzanie w 100% lokalne, brak serwerów, brak przechowywania',
            con: 'Wymaga nowoczesnej przeglądarki z obsługą Canvas i WebGL'
        },
        {
            pro: 'Automatyczne wykrywanie twarzy oszczędza czas manualny',
            con: 'AI nie jest idealna - twarze z profilu lub częściowe mogą nie zostać wykryte'
        },
        {
            pro: 'Trzy metody pozwalają wybrać między bezpieczeństwem a estetyką',
            con: 'Brak zaawansowanych opcji (inteligentne zniekształcenie, wypełnianie kontekstowe)'
        },
        {
            pro: 'Całkowicie za darmo, bez reklam, bez limitów',
            con: 'Nie jest odpowiednikiem profesjonalnego oprogramowania jak Photoshop'
        }
    ], proTitle: 'Zalety', conTitle: 'Ograniczenia' },

    { type: 'diagnostic', variant: 'warning', title: 'Ostrzeżenie: Rozmycie NIE jest w 100% bezpieczne', icon: 'mdi:alert', badge: 'Bezpieczeństwo', html: 'Rozmycie gaussowskie jest matematycznie odwracalne za pomocą zaawansowanych algorytmów odwrotnych. Jeśli informacje są KRYTYCZNE (dokumenty prawne, tożsamość), użyj <strong>Pikselowania lub Zakrycia</strong>. Rozmycie jest estetycznie lepsze, ale mniej bezpieczne.' },

    { type: 'glossary', items: [
        {
            term: 'Pikselowanie',
            definition: 'Zmniejszenie rozdzielczości poprzez podział obszaru na jednolite bloki kolorów. Nieodwracalne. Maksymalne bezpieczeństwo przed rozpoznawaniem twarzy AI.'
        },
        {
            term: 'Rozmycie Gaussowskie',
            definition: 'Matematyczne wygładzanie oparte na rozkładzie normalnym. Teoretycznie odwracalne poprzez dekonwolucję, ale w praktyce bardzo trudne.'
        },
        {
            term: 'Zakrycie (Solid)',
            definition: 'Nieprzezroczysty blok jednolitego koloru. Maksymalne bezpieczeństwo, maksymalna prywatność prawna, mniej estetyczna wizualnie.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Lekka splotowa sieć neuronowa (CNN) do wykrywania twarzy. Działa lokalnie w przeglądarce bez potrzeby zewnętrznego serwera.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Podejście polegające na integrowaniu prywatności już od etapu projektowania systemu, a nie dodawaniu jej później. Nasze lokalne podejście to właśnie Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Prywatność w Twoich rękach', ariaLabel: 'Informacje o ochronie prywatności', html: 'Nie przechowujemy ani nie przetwarzamy Twoich zdjęć na zdalnych serwerach. Brak ciasteczek śledzących. Brak historii edycji. Nie wiemy, co ukrywasz, ponieważ nigdy nie widzimy Twoich zdjęć. Pełna kontrola, pełna prywatność, pełna wolność.' },

    { type: 'title', text: 'Udostępniaj bezpiecznie w mediach społecznościowych', level: 3 },
    { type: 'paragraph', html: 'Przed opublikowaniem jakiegokolwiek zdjęcia w Internecie zadaj sobie pytanie: czy są tam informacje, których wolałbym nie upubliczniać? Twarze dzieci, tablice rejestracyjne, adresy, numery dokumentów. 2-minutowa sesja prywatności teraz pozwala uniknąć problemów na lata.' }
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

export const content: PrivacyBlurLocaleContent = {
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

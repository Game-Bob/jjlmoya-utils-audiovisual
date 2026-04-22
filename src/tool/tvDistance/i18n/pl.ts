import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'kalkulator-odleglosci-od-tv-thx-4k-optymalny-ekran';
const title = 'Kalkulator odległości od TV: Optymalny ekran THX i 4K';
const description = 'Oblicz idealną odległość do oglądania telewizji na podstawie jej rozmiaru i rozdzielczości. Zoptymalizuj swoje kino domowe zgodnie ze standardami THX i SMPTE.';

const ui: TvDistanceUI = {
    specTitle: "Specyfikacje",
    diagonalLabel: "Rozmiar przekątnej",
    resolutionLabel: "Rozdzielczość",
    thxRecommendation: "Rekomendacja THX",
    thxDescription: "THX zaleca odległość, która pokrywa 40-stopniowy kąt widzenia, zapewniając immersyjne wrażenia kinowe.",
    simulationBadge: "Symulacja w czasie rzeczywistym",
    tvWidthLabel: "cm szerokości",
    userLocationLabel: "Twoja lokalizacja",
    minLimitLabel: "Minimalna granica",
    optimalLimitLabel: "Optymalna odległość",
    maxLimitLabel: "Maksymalna granica",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Dlaczego rozdzielczość ma znaczenie przy obliczaniu odległości?",
        answer: "Przy wyższych rozdzielczościach (takich jak 4K lub 8K), piksele są mniejsze. Pozwala to siedzieć bliżej bez dostrzegania siatki pikseli, co zwiększa immersję.",
    },
    {
        question: "Co to jest 40-stopniowy kąt widzenia?",
        answer: "Jest to standard zalecany przez THX, aby ekran zajmował dużą część Twojego widzenia obwodowego, podobnie jak w profesjonalnej sali kinowej.",
    },
    {
        question: "Czy mogę siedzieć dalej niż jest to zalecane?",
        answer: "Tak, ale stracisz korzyść z wysokiej rozdzielczości. Jeśli usiądziesz za daleko od telewizora 4K, Twoje oko nie będzie w stanie rozróżnić dodatkowych szczegółów i zobaczysz obraz tak, jakby to był 1080p.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Podaj cale",
        text: "Przesuń suwak, aby wybrać rozmiar swojego obecnego telewizora lub tego, który planujesz kupić.",
    },
    {
        name: "Wybierz rozdzielczość",
        text: "Wybierz między 1080p, 4K lub 8K, aby dostosować limity ostrości wzroku.",
    },
    {
        name: "Wizualizuj symulację",
        text: "Obserwuj na diagramie, jak zmienia się zależność rozmiaru między Tobą a ekranem.",
    },
    {
        name: "Ustaw sofę",
        text: "Umieść swoje siedzenie w zakresie 'Optymalna odległość', aby maksymalnie zwiększyć immersję kinową.",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Optymalna odległość od TV według rozdzielczości i rozmiaru',
        items: [
            'Standardy THX (40°) dla immersyjnych wrażeń kinowych',
            'Obliczenia dla 1080p, 4K i 8K z maksymalną precyzją',
            'Wizualna symulacja Twojej konfiguracji w czasie rzeczywistym',
            'Unikaj zmęczenia oczu i maksymalizuj immersję w treściach'
        ]
    },
    { type: 'title', text: 'Nauka o immersji: Optymalna odległość od TV', level: 2 },
    { type: 'paragraph', html: 'Nie chodzi tylko o wygodę, ale o ludzką fizjologię wzroku. Oko ma limit ostrości; jeśli usiądziesz za daleko od ekranu 4K, marnujesz pieniądze na piksele, których Twój wzrok nie jest w stanie wykorzystać. Jeśli usiądziesz za blisko, spowoduje to zmęczenie oczu.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Idealny kąt THX', icon: 'mdi:eye' },
        { value: '100%', label: 'Wykorzystane piksele', icon: 'mdi:video-high-definition' },
        { value: 'Zero', label: 'Zmęczenie wzroku', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Dwa profesjonalne standardy: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'W branży audiowizualnej istnieją dwa główne organy, które definiują sposób optymalizacji wrażeń z oglądania:' },
    { type: 'comparative', items: [
        {
            title: 'Standard THX',
            description: 'Kąt widzenia 40° - Bardziej immersyjny',
            icon: 'mdi:filmstrip',
            points: [
                'Ekran zajmuje większą część widzenia obwodowego',
                'Immersyjne wrażenia kinowe',
                'Idealny do filmów akcji i sportu na żywo',
                'Wymaga więcej miejsca w pokoju'
            ],
            highlight: true
        },
        {
            title: 'Standard SMPTE',
            description: 'Kąt widzenia 30° - Bardziej zrelaksowany',
            icon: 'mdi:television',
            points: [
                'Bardziej komfortowa odległość siedzenia',
                'Konserwatywna rekomendacja profesjonalna',
                'Idealny do różnorodnych treści (wiadomości, seriale)',
                'Lepszy do mniejszych pomieszczeń'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Jak rozdzielczość zmienia równanie', level: 3 },
    { type: 'table', headers: ['Rozdzielczość', 'Rozmiar TV 55"', 'Odległość minimalna (brak widocznych pikseli)', 'Optymalna odległość THX'], rows: [
        ['1080p (Full HD)', '55 cali', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 cali', '1.2 m', '1.5 m'],
        ['8K', '55 cali', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Jak widzisz, wyższa rozdzielczość pozwala siedzieć bliżej bez dostrzegania struktury pikseli. Telewizor 4K można docenić z odległości 1.2 metra; 1080p wymaga co najmniej 2 metrów.' },

    { type: 'card', title: 'Granica ostrości wzroku człowieka', html: 'Ludzkie oko ma limitowaną zdolność rozdzielczą. Powyżej pewnej odległości nie można odróżnić więcej szczegółów, nawet jeśli ekran ma 8K. Nasze obliczenia pozycjonują Cię dokładnie w "strefie optymalnej".' },

    { type: 'diagnostic', variant: 'info', title: 'Zmęczenie oczu a odległość', icon: 'mdi:information', badge: 'Zdrowie wzroku', html: 'Zbyt mała odległość powoduje zmęczenie, ponieważ oczy muszą stale dostosowywać się do ekstremalnych kątów. Zbyt duża odległość powoduje wysiłek przy rozróżnianiu szczegółów. Nasz kalkulator pozycjonuje Cię w "sweet spot" (40° dla THX).' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° tworzy prawdziwą immersję - jak w profesjonalnej sali kinowej',
            con: 'Wymaga więcej dostępnego miejsca w pokoju'
        },
        {
            pro: '4K pozwala siedzieć bliżej niż 1080p - przydatne w małych przestrzeniach',
            con: 'Musisz być w minimalnej odległości, aby wykorzystać dodatkowe piksele'
        },
        {
            pro: 'Unikaj zmęczenia oczu, ustawiając się poprawnie od samego początku',
            con: 'Większość domowych salonów NIE przestrzega tych standardów'
        },
        {
            pro: 'Możesz sprawdzić, czy Twój obecny telewizor jest dobrze ustawiony',
            con: 'Jeśli jest źle, wymaga to przestawienia mebli'
        }
    ], proTitle: 'Zalety', conTitle: 'Ograniczenia' },

    { type: 'glossary', items: [
        {
            term: 'Kąt widzenia (w stopniach)',
            definition: 'Kąt wizualny, który ekran pokrywa z Twojej pozycji. 40° = bardzo immersyjny; 20° = tło (brak immersji).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Certyfikacja jakości audiowizualnej stworzona przez Lucasfilm. Definiuje standardy dla kin i kina domowego. 40° to ich główna rekomendacja.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Organizacja standardów technicznych dla filmu i wideo. Zaleca 30° jako konserwatywną odległość profesjonalną.'
        },
        {
            term: 'Ostrość wzroku człowieka',
            definition: 'Zdolność oka do rozróżniania drobnych szczegółów. Pojedynczy piksel jest niedostrzegalny powyżej pewnej odległości.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Rozdzielczość ~3840x2160 pikseli. 4 razy więcej pikseli niż 1080p.'
        }
    ] },

    { type: 'message', title: 'Profesjonalna optymalizacja pokoju audiowizualnego', ariaLabel: 'Informacje o standardach ustawienia TV', html: 'Profesjonalne kina wydają miliony, aby zapewnić idealną odległość, kąt i oświetlenie. Nasz kalkulator przenosi te same zasady do Twojego domu.' },

    { type: 'title', text: 'Skonfiguruj swoje kino domowe profesjonalnie', level: 3 },
    { type: 'paragraph', html: 'Odległość jest RÓWNIE ważna jak rozmiar ekranu i rozdzielczość. Przestrzegaj tych standardów, aby przekształcić swój salon w autentyczną salę kinową.' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Często zadawane pytania o odległość od TV',
    bibliography: 'Profesjonalne standardy ustawienia telewizora',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

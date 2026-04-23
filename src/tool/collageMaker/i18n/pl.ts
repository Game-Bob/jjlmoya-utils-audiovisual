import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'darmowy-edytor-kolazy-zdjec-online-profesjonalne-kompozycje';
const title = 'Edytor Kolaży Online: Projektuj profesjonalne kompozycje';
const description = 'Twórz kolaże zdjęć za darmo w kilka sekund. Wybieraj spośród wielu układów, dostosowuj ramki i pobieraj w wysokiej jakości bez znaków wodnych.';

const ui: CollageMakerUI = {
    dropTitle: "Przeciągnij obrazy tutaj",
    dropSub: "lub {link} - min. 2, maks. 9",
    dropLink: "wybierz pliki",
    imgsLoaded: "Załadowane obrazy",
    layoutLabel: "Układ",
    settingsLabel: "Ustawienia",
    borderLabel: "Ramka",
    borderColorLabel: "Kolor ramki",
    bgColorLabel: "Tło",
    downloadBtn: "Pobierz",
    previewTitle: "Podgląd",
    needsImgs: "Potrzebujesz jeszcze {n} obrazów",
    errorMin: "Potrzebujesz co najmniej 2 obrazów",
    errorMax: "Dozwolone maksymalnie 9 obrazów",
    errorLoad: "Błąd podczas ładowania obrazów",
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Jak mogę zmienić kolejność zdjęć?",
        answer: "Zdjęcia są umieszczane w kolażu zgodnie z kolejnością, w jakiej pojawiają się na liście załadowanych obrazów. Możesz usunąć zdjęcie i przesłać je ponownie, aby dostosować jego pozycję.",
    },
    {
        question: "W jakim formacie wyjściowym jest kolaż?",
        answer: "Kolaż jest pobierany w formacie WebP o wysokiej rozdzielczości, idealnym do udostępniania w sieciach społecznościowych bez utraty ostrości.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Prześlij swoje zdjęcia",
        text: "Wybierz od 2 do 9 obrazów ze swojego eksploratora plików.",
    },
    {
        name: "Wybierz układ",
        text: "Wybierz siatkę, która najlepiej pasuje do liczby przesłanych zdjęć.",
    },
    {
        name: "Dostosuj styl",
        text: "Dostosuj grubość i kolor ramki, aby nadać kolażowi profesjonalne wykończenie.",
    },
    {
        name: "Pobierz i udostępnij",
        text: "Naciśnij przycisk tworzenia i natychmiast pobierz swoją końcową kompozycję.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Profesjonalny Edytor Kolaży Online',
        items: [
            'Wiele układów i predefiniowanych siatek',
            'Personalizacja ramek i kolorów tła',
            'Rozdzielczość 1200px idealna dla mediów społecznościowych',
            'Błyskawiczne przetwarzanie bez limitów użytkowania'
        ]
    },
    { type: 'title', text: 'Projektowanie Kolażu: Kompozycje, które opowiadają historie', level: 2 },
    { type: 'paragraph', html: 'Kolaż to coś więcej niż mieszanka zdjęć; to wizualna narracja, która komunikuje emocje i kontekst. Nasze narzędzie pozwala tworzyć profesjonalne kompozycje geometryczne dla Instagrama, Facebooka, Pinteresta czy projektów osobistych bez potrzeby używania Photoshopa czy drogiego oprogramowania.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Zdjęć na kolaż', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'Rozdzielczość HD', icon: 'mdi:video-high-definition' },
        { value: 'Natychmiast', label: 'Generowanie', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Kompozycja Wizualna: Zasady Projektowania', level: 3 },
    { type: 'paragraph', html: 'Kompozycja to sztuka organizowania elementów wizualnych w sposób, który prowadzi wzrok widza i komunikuje intencję. Dobry kolaż równoważy:' },
    { type: 'list', items: [
        '<strong>Równowagę:</strong> Wizualne rozłożenie ciężaru (jasne vs ciemne obrazy, duże vs małe).',
        '<strong>Przepływ Wizualny:</strong> Wzrok powinien naturalnie poruszać się po kompozycji, bez martwych punktów.',
        '<strong>Kontrast:</strong> Zmiany koloru, rozmiaru i kształtu, które przyciągają uwagę.',
        '<strong>Jedność:</strong> Spójność tematyczna – obrazy muszą „mówić razem” o tej samej historii.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Inteligentne i adaptacyjne projekty', html: 'Nasz system automatycznie oblicza optymalny rozkład przestrzeni na podstawie liczby zdjęć. 2 zdjęcia = siatka symetryczna; 5 zdjęć = zrównoważony rozkład asymetryczny. Każda siatka jest zaprojektowana tak, aby zmaksymalizować wpływ wizualny.' },

    { type: 'comparative', items: [
        {
            title: 'Dla mediów społecznościowych',
            description: 'Instagram, TikTok, Facebook – formaty kwadratowe',
            icon: 'mdi:share-all',
            points: [
                '1200px to idealna rozdzielczość dla feedu na Instagramie',
                'Format kwadratowy zapobiega przycinaniu podczas publikacji',
                'Możliwość dostosowania ramek dla celów brandingowych'
            ],
            highlight: true
        },
        {
            title: 'Dla portfolio',
            description: 'Wizualne prezentacje dla fotografów i projektantów',
            icon: 'mdi:briefcase-outline',
            points: [
                'Pokaż wiele kątów projektu',
                'Spójna narracja wizualna',
                'Profesjonalny druk cyfrowy'
            ]
        },
        {
            title: 'Dla prezentów osobistych',
            description: 'Wydruki, ramki i albumy cyfrowe',
            icon: 'mdi:gift-outline',
            points: [
                'Wspomnienia z wydarzeń (śluby, podróże)',
                'Wysoka rozdzielczość gotowa do druku',
                'Natychmiastowy projekt bez wysiłku manualnego'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Personalizacja: Ramki i Kolory', level: 3 },
    { type: 'table', headers: ['Element', 'Efekt Wizualny', 'Rekomendacja'], rows: [
        ['Biała ramka', 'Czysta, minimalistyczna, nowoczesna', 'Media społecznościowe, portfolio cyfrowe'],
        ['Czarna ramka', 'Dramatyczna, profesjonalna, artystyczna', 'Fotografia artystyczna, moda, luksus'],
        ['Ramka neutralna (szara)', 'Wszechstronna, akademicka, korporacyjna', 'Biznes, edukacja, neutralność'],
        ['Bez ramki', 'Fuzja, ciągłość, imersja', 'Jednolite tło, płynne zdjęcia']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Profesjonalne predefiniowane projekty – nie wymaga wiedzy o kompozycji',
            con: 'Opcje ograniczone do ustalonych siatek'
        },
        {
            pro: 'Rozdzielczość 1200px gotowa dla mediów społecznościowych bez skalowania',
            con: 'Mniejsza swoboda niż w Photoshopie'
        },
        {
            pro: '100% lokalne przetwarzanie – prywatność, szybkość, brak limitów',
            con: 'Wymaga nowoczesnej przeglądarki'
        },
        {
            pro: 'Całkowicie za darmo, bez znaków wodnych, bez reklam',
            con: 'Brak opcji indywidualnej edycji (przycinanie, obracanie)'
        }
    ], proTitle: 'Zalety', conTitle: 'Ograniczenia' },

    { type: 'diagnostic', variant: 'success', title: 'Gotowy dla mediów społecznościowych', icon: 'mdi:check-circle-outline', badge: 'Zoptymalizowany', html: '1200x1200px to idealna rozdzielczość dla Instagrama. Obsługuje dowolne proporcje obrazu, ale kwadratowy format wyjściowy maksymalizuje wpływ na feed, eliminuje automatyczne przycinanie i wygląda równie dobrze na komputerze, tablecie i telefonie.' },

    { type: 'glossary', items: [
        {
            term: 'Kompozycja Wizualna',
            definition: 'Sztuka organizowania elementów (kolor, kształt, przestrzeń), aby prowadzić wzrok widza i komunikować intencję emocjonalną.'
        },
        {
            term: 'Zasada trójpodziału',
            definition: 'Zasada kompozycji: dzieli obraz na 9 równych obszarów (3x3). Umieść obiekty na liniach przecięcia, aby uzyskać maksymalny wpływ.'
        },
        {
            term: 'Siatka symetryczna',
            definition: 'Równe podziały przestrzeni. Uspokajająca, uporządkowana. Idealna dla par zdjęć lub liczb parzystych.'
        },
        {
            term: 'Siatka asymetryczna',
            definition: 'Nierówne podziały. Dynamiczna, interesująca, wizualna. Idealna dla 5+ zdjęć o różnych rozmiarach.'
        },
        {
            term: 'Równowaga wizualna',
            definition: 'Percepcyjna równowaga ciężaru wizualnego. Jasny + ciemny obraz = równowaga; duży + mały = równowaga.'
        }
    ] },

    { type: 'message', title: 'Natychmiastowa Narracja Wizualna', ariaLabel: 'Informacje o kompozycji i kolażach', html: 'Każdy kolaż opowiada historię. Nasz automatyczny projektant dba o to, aby Twoje wizualne historie były zrównoważone, profesjonalne i gotowe na świat – bez konieczności czekania na pracę grafika.' },

    { type: 'title', text: 'Twórz, Udostępniaj, Inspiruj', level: 3 },
    { type: 'paragraph', html: 'Dobrze zrobiony kolaż to różnica między postem, o którym szybko się zapomina, a takim, który obserwujący zapamiętają i udostępnią. Wykorzystaj inteligentną kompozycję w swoich wizualnych historiach, aby wywrzeć wrażenie.' }
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

export const content: CollageMakerLocaleContent = {
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

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'kalkulator-timelapse-hyperlapse-idealne-interwaly';
const title = 'Kalkulator Timelapse i Hyperlapse: Idealne Interwały';
const description = 'Oblicz dokładny interwał między zdjęciami, całkowity czas trwania i potrzebne miejsce na dysku dla Twoich filmów poklatkowych.';

const ui: TimelapseUI = {
    title: "Kalkulator Timelapse",
    paramsTitle: "Parametry",
    eventDuration: "Jak długo trwa prawdziwe wydarzenie?",
    hours: "Godziny",
    minutes: "Minuty",
    videoDuration: "Jak długi ma być wynikowy film?",
    seconds: "Czas trwania (sek)",
    fps: "FPS",
    resultsTitle: "Wyniki",
    intervalLabel: "Ustaw interwałometr na:",
    secondsUnit: "sekund",
    totalPhotos: "Liczba zdjęć",
    speed: "Prędkość",
    shutterSpeed: "Czas naświetlania",
    storage: "Rozmiar (RAW)",
    rule180Info: "Zasada 180° sugeruje czas naświetlania równy połowie interwału dla uzyskania naturalnego rozmycia ruchu.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Jak wybrać odpowiedni interwał dla mojego timelapse?",
        answer: "Zależy to od prędkości ruchu, który filmujesz. Dla szybkich chmur użyj 2-3 sekund. Dla ruchu słońca lub gwiazd - 15-30 sekund. Dla rosnących roślin lub budowy - 5-15 minut.",
    },
    {
        question: "Ile zdjęć potrzebuję na jednominutowy film?",
        answer: "Standardowe wideo ma 24 lub 30 klatek na sekundę (fps). Dla minuty filmu przy 24fps potrzebujesz dokładnie 1440 zdjęć (60 sekund * 24 zdjęcia/sekundę).",
    },
    {
        question: "Co to jest 'Flicker' i jak go uniknąć?",
        answer: "To irytujące migotanie spowodowane małymi różnicami w ekspozycji między zdjęciami. Aby go uniknąć, zawsze używaj trybu manualnego (M), stałego balansu bieli i obiektywów z manualnym pierścieniem przysłony.",
    },
    {
        question: "Dlaczego czas naświetlania jest ważny?",
        answer: "Aby ruch wyglądał płynnie (zasada 180°), czas naświetlania powinien wynosić około połowy interwału. Na przykład, jeśli interwał wynosi 2 sekundy, spróbuj fotografować z czasem 1 sekundy.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Określ czas trwania filmu",
        text: "Wskaż, ile sekund lub minut ma trwać wynikowe wideo (np. 10 sekund na Instagram).",
    },
    {
        name: "Wybierz klatkaż (FPS)",
        text: "Wybierz płynność filmu: 24 (kino), 30 (internet) lub 60 (płynne zwolnione tempo).",
    },
    {
        name: "Dostosuj interwał fotografowania",
        text: "Skonfiguruj, co ile sekund aparat ma robić zdjęcie, zależnie od prędkości sceny.",
    },
    {
        name: "Sprawdź miejsce na karcie",
        text: "Kalkulator powie Ci, ile gigabajtów zajmie sesja. Upewnij się, że masz wystarczająco dużo miejsca.",
    },
];

const bibliography: TimelapseLocaleContent['bibliography'] = [
    {
        name: "Timescapes Forum - Digital Timelapse Acquisition & Processing",
        url: "https://timescapes.org/phpBB3/viewforum.php?f=4",
    },
    {
        name: "Magic Lantern - Auto ETTR & Bulb Ramping Algorithms",
        url: "https://wiki.magiclantern.fm/ettr",
    },
    {
        name: "LRTimelapse - Visual Deflicker & Holy Grail Workflow",
        url: "https://lrtimelapse.com/tutorial/advanced/",
    },
    {
        name: "PhotoPills - Advanced Timelapse Calculator & NPF Rule",
        url: "https://www.photopills.com/calculators/timelapse",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Ostateczny przewodnik po interwałach do Timelapse i Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'Różnica między amatorskim przyspieszonym filmem a <strong>kinowym timelapse</strong> matematycznie sprowadza się do jednego czynnika: <strong>interwału</strong>. Ten kalkulator pozwala precyzyjnie zaplanować sesję.' },
    
    { type: 'title', text: 'Tabela zalecanych interwałów (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Skorzystaj z tej tabeli, aby ustawić interwałometr zależnie od fotografowanego tematu.' },
    { type: 'table', headers: ['Temat / Scena', 'Sugerowany interwał', 'Czas trwania (minimum)'], rows: [
        ['Szybkie chmury / Burze', '1 - 2 sekundy', '20 - 30 min'],
        ['Ruch miejski / Ludzie (rozmycie)', '0.5 - 2 sekundy', '15 - 20 min'],
        ['Zachód / Wschód słońca (Holy Grail)', '5 - 10 sekund', '1.5 - 2.5 godz'],
        ['Wolne chmury / Cienie', '10 - 15 sekund', '2 - 3 godz'],
        ['Gwiazdy / Droga Mleczna (Astro)', '15 - 30 sekund*', '3 - 5 godz'],
        ['Budowa / Rosnące rośliny', '5 - 15 minut', 'Dni / Tygodnie']
    ]},
    { type: 'tip', title: 'Uwaga dla Astro', html: 'Interwał jest zazwyczaj narzucony przez czas ekspozycji (zasada 500) + 1-2 sekundy bufora na zapis na kartę.' },

    { type: 'title', text: 'Zasada 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Częstym błędem w timelapse jest uzyskanie "szarpanego" efektu. Aby uzyskać płynny wygląd, potrzebujesz <strong>rozmycia ruchu</strong>.' },
    { type: 'card', title: 'Zasada', icon: 'mdi:information', html: 'Czas naświetlania powinien wynosić połowę interwału. <br /><br /> <em>Przykład:</em> Jeśli robisz zdjęcie co <strong>4 sekundy</strong>, ekspozycja powinna trwać <strong>2 sekundy</strong>.' },

    { type: 'title', text: 'Flicker i manualna przysłona', level: 3 },
    { type: 'paragraph', html: '"Flicker" to irytujące migotanie spowodowane mikro-wahaniami otwarcia przysłony między klatkami.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Lekko odkręć obiektyw w lustrzankach, aby przerwać styk elektroniczny i zablokować przysłonę mechanicznie.',
        '<strong>Wszystko Manualnie:</strong> ISO, Balans bieli i Ostrość muszą być stałe.',
        '<strong>Rób zdjęcia w RAW:</strong> Niezbędne do korekcji ekspozycji i koloru w postprodukcji.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Technika zaawansowana: "Holy Grail"', icon: 'mdi:crown', badge: 'Technika Pro', html: '"Holy Grail" (Święty Graal) to płynne przejście z dnia do nocy (lub odwrotnie). To najtrudniejsze wyzwanie techniczne.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Ekspozycja płynna', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strategia', value: 'Interwał nocny', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Podsumowanie: Zen prostej mechaniki', level: 3 },
    { type: 'paragraph', html: 'Mistrzostwo w timelapse zaczyna się od zrozumienia matematyki Twojego interwałometru.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Często zadawane pytania o produkcję Timelapse',
    bibliography,
    bibliographyTitle: 'Teoria i zasoby Timelapse',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

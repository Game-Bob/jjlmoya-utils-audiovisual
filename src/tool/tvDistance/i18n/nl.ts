import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-kijkafstand-calculator-thx-4k-optimaal-scherm';
const title = 'TV Kijkafstand Calculator: THX en 4K Optimaal Scherm';
const description = 'Bereken de ideale afstand om televisie te kijken op basis van grootte en resolutie. Optimaliseer je Home Cinema met THX en SMPTE standaarden.';

const ui: TvDistanceUI = {
    specTitle: "Specificaties",
    diagonalLabel: "Diagonale Afmeting",
    resolutionLabel: "Resolutie",
    thxRecommendation: "THX Aanbeveling",
    thxDescription: "THX adviseert een afstand die een kijkhoek van 40 graden beslaat voor een meeslepende bioscoopervaring.",
    simulationBadge: "Real-Time Simulatie",
    tvWidthLabel: "cm breed",
    userLocationLabel: "Jouw Locatie",
    minLimitLabel: "Minimale Limiet",
    optimalLimitLabel: "Optimale Afstand",
    maxLimitLabel: "Maximale Limiet",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Waarom is resolutie belangrijk bij het berekenen van de afstand?",
        answer: "Bij hogere resoluties (zoals 4K of 8K) zijn pixels kleiner. Hierdoor kun je dichterbij zitten zonder de pixelstructuur te zien, wat de immersie vergroot.",
    },
    {
        question: "Wat is de 40-graden kijkhoek?",
        answer: "Dit is de standaard aanbevolen door THX zodat het scherm een groot deel van je perifere zicht beslaat, vergelijkbaar met de ervaring in een professionele bioscoopzaal.",
    },
    {
        question: "Kan ik verder weg zitten dan aanbevolen?",
        answer: "Ja, maar dan verlies je het voordeel van hoge resoluties. Als je te ver van een 4K TV zit, kan je oog de extra details niet onderscheiden en zie je het alsof het 1080p is.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Geef inch-maat op",
        text: "Verplaats de schuifregelaar om de grootte van je huidige televisie of de gewenste nieuwe TV te selecteren.",
    },
    {
        name: "Selecteer resolutie",
        text: "Kies tussen 1080p, 4K of 8K om de limieten van de visuele scherpte aan te passen.",
    },
    {
        name: "Bekijk simulatie",
        text: "Bekijk in het diagram hoe de grootteverhouding tussen jou en het scherm verandert.",
    },
    {
        name: "Pas je bank aan",
        text: "Plaats je zitplek binnen het bereik 'Optimale Afstand' voor maximale bioscoopervaring.",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Optimale TV Afstand per Resolutie en Grootte',
        items: [
            'THX standaarden (40°) voor meeslepende bioscoopervaring',
            'Berekeningen voor 1080p, 4K en 8K met maximale precisie',
            'Real-time visuele simulatie van je setup',
            'Voorkom vermoeide ogen en maximaliseer immersie'
        ]
    },
    { type: 'title', text: 'Wetenschap van Immersie: Optimale TV Afstand', level: 2 },
    { type: 'paragraph', html: 'Het gaat niet alleen om comfort, maar om menselijke fysiologie. Het oog heeft een limiet voor visuele scherpte; als je te ver van een 4K scherm zit, verspil je geld aan pixels die je visie niet kan benutten. Zit je te dichtbij, dan veroorzaakt dat vermoeide ogen.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Ideale THX Hoek', icon: 'mdi:eye' },
        { value: '100%', label: 'Benutte Pixels', icon: 'mdi:video-high-definition' },
        { value: 'Nul', label: 'Visuele Vermoeidheid', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Twee Professionele Standaarden: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Er zijn twee belangrijke autoriteiten in de audiovisuele industrie die definiëren hoe je jouw kijkervaring kunt optimaliseren:' },
    { type: 'comparative', items: [
        {
            title: 'THX Standaard',
            description: '40° kijkhoek - Meeslepender',
            icon: 'mdi:filmstrip',
            points: [
                'Scherm beslaat meer van je perifere zicht',
                'Meeslepende bioscoopervaring',
                'Ideaal voor actiefilms en live sport',
                'Vereist meer ruimte in de kamer'
            ],
            highlight: true
        },
        {
            title: 'SMPTE Standaard',
            description: '30° kijkhoek - Ontspannender',
            icon: 'mdi:television',
            points: [
                'Comfortabelere zitafstand',
                'Conservatieve professionele aanbeveling',
                'Ideaal voor diverse content (nieuws, series)',
                'Beter voor kleinere kamers'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Hoe Resolutie de Vergelijking Verandert', level: 3 },
    { type: 'table', headers: ['Resolutie', '55" TV Formaat', 'Minimale Afstand (geen pixels zichtbaar)', 'Optimale THX Afstand'], rows: [
        ['1080p (Full HD)', '55 inch', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 inch', '1.2 m', '1.5 m'],
        ['8K', '55 inch', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Zoals je ziet, staat een hogere resolutie toe om dichterbij te zitten zonder de pixelstructuur te zien. Een 4K TV kan worden gewaardeerd vanaf 1.2 meter; 1080p heeft minimaal 2 meter nodig.' },

    { type: 'card', title: 'De Limiet van Visuele Scherpte', html: 'Het menselijk oog heeft een resolutielimiet. Vanaf een bepaalde afstand kun je geen extra details meer onderscheiden, zelfs als het scherm 8K is. Onze berekeningen plaatsen je precies in de "optimale zone".' },

    { type: 'diagnostic', variant: 'info', title: 'Vermoeide Ogen en Afstand', icon: 'mdi:information', badge: 'Visuele Gezondheid', html: 'Te dichtbij zijn veroorzaakt vermoeidheid omdat je ogen zich constant moeten aanpassen aan extreme hoeken. Te ver weg zijn veroorzaakt inspanning om details te onderscheiden. Onze calculator plaatst je in de "sweet spot" (40° voor THX).' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° creëert echte bioscoopimmersie - zoals een professionele zaal',
            con: 'Vereist meer beschikbare ruimte in de kamer'
        },
        {
            pro: '4K staat dichterbij zitten toe dan 1080p - handig in kleine ruimtes',
            con: 'Je moet op de minimale afstand zitten om extra pixels te benutten'
        },
        {
            pro: 'Voorkom vermoeide ogen door jezelf direct correct te positioneren',
            con: 'De meeste huiskamers volgen deze standaarden NIET'
        },
        {
            pro: 'Controleer of je huidige TV goed is opgesteld',
            con: 'Indien fout, vereist het verplaatsen van meubels'
        }
    ], proTitle: 'Voordelen', conTitle: 'Beperkingen' },

    { type: 'glossary', items: [
        {
            term: 'Kijkhoek (in graden)',
            definition: 'De visuele hoek die het scherm beslaat vanaf jouw positie. 40° = zeer meeslepend; 20° = achtergrondcontent (niet meeslepend).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Audiovisuele kwaliteitscertificering opgericht door Lucasfilm. Definieert standaarden voor bioscopen en home theaters. 40° is de primaire aanbeveling.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Technische standaardenorganisatie voor film en video. Adviseert 30° als conservatieve professionele afstand.'
        },
        {
            term: 'Visuele Scherpte',
            definition: 'Het vermogen van het oog om fijne details te onderscheiden. Een individuele pixel is onwaarneembaar voorbij een bepaalde afstand.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Resolutie van ~3840x2160 pixels. 4 keer meer pixels dan 1080p.'
        }
    ] },

    { type: 'message', title: 'Professionele Optimalisatie van Audiovisuele Ruimte', ariaLabel: 'Informatie over TV-setup standaarden', html: 'Professionele bioscopen besteden miljoenen om ervoor te zorgen dat afstand, hoek en belichting perfect zijn. Onze calculator brengt diezelfde principes naar jouw huis.' },

    { type: 'title', text: 'Stel je Home Cinema Professioneel op', level: 3 },
    { type: 'paragraph', html: 'Afstand is NET ZO belangrijk als schermgrootte en resolutie. Volg deze standaarden om je woonkamer te transformeren in een authentieke bioscoopzaal.' }
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
    inLanguage: 'nl',
};

export const content: TvDistanceLocaleContent = {
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

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'gratis-fotocollage-maker-online-professionella-kompositioner';
const title = 'Online Fotocollage: Skapa professionella kompositioner';
const description = 'Skapa fotocollage gratis på några sekunder. Välj mellan flera layouter, justera ramar och ladda ner i hög kvalitet utan vattenstämplar.';

const ui: CollageMakerUI = {
    dropTitle: "Dra bilder hit",
    dropSub: "eller {link} - min. 2, max. 9",
    dropLink: "välj filer",
    imgsLoaded: "Laddade bilder",
    layoutLabel: "Layout",
    settingsLabel: "Inställningar",
    borderLabel: "Ram",
    borderColorLabel: "Ramfärg",
    bgColorLabel: "Bakgrund",
    downloadBtn: "Ladda ner",
    previewTitle: "Förhandsvisning",
    needsImgs: "Du behöver {n} bilder till",
    errorMin: "Du behöver minst 2 bilder",
    errorMax: "Maximalt 9 bilder tillåtna",
    errorLoad: "Fel vid laddning av bilder",
    faqTitle: "Vanliga frågor",
    bibliographyTitle: "Referenser"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Hur kan jag ändra ordningen på bilderna?",
        answer: "Bilderna placeras i collaget i den ordning de visas i listan över laddade bilder. Du kan ta bort en bild och ladda upp den igen för att justera dess position.",
    },
    {
        question: "Vilket utdataformat har collaget?",
        answer: "Collaget laddas ner i WebP-format med hög upplösning, idealiskt för delning på sociala nätverk utan att förlora skärpa.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Ladda upp dina foton",
        text: "Välj mellan 2 och 9 bilder från din filutforskare.",
    },
    {
        name: "Välj en layout",
        text: "Välj det rutnät som bäst passar antalet bilder du har laddat upp.",
    },
    {
        name: "Anpassa stilen",
        text: "Justera ramens tjocklek och färg för att ge collaget en professionell finish.",
    },
    {
        name: "Ladda ner och dela",
        text: "Tryck på skapa knappen och ladda omedelbart ner din färdiga komposition.",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "Fotografisk komposition: Konsten att skapa collage",
        url: "https://sv.wikipedia.org/wiki/Collage",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionell online fotocollage maker',
        items: [
            'Flera layouter och fördefinierade rutnät',
            'Anpassning av ramar och bakgrundsfärger',
            '1200px hög upplösning redo för sociala nätverk',
            'Omedelbar bearbetning utan användningsbegränsningar'
        ]
    },
    { type: 'title', text: 'Collagedesign: Kompositioner som berättar historier', level: 2 },
    { type: 'paragraph', html: 'Ett collage är mer än bara en blandning av foton; det är en visuell berättelse som kommunicerar känslor och sammanhang. Vårt verktyg låter dig skapa professionella geometriska kompositioner för Instagram, Facebook, Pinterest eller personliga projekt utan behov av Photoshop eller dyr programvara.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Bilder per collage', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD-upplösning', icon: 'mdi:video-high-definition' },
        { value: 'Omedelbar', label: 'Generering', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Visuell komposition: Designprinciper', level: 3 },
    { type: 'paragraph', html: 'Komposition är konsten att organisera visuella element på ett sätt som vägleder betraktarens öga och kommunicerar en avsikt. Ett bra collage balanserar:' },
    { type: 'list', items: [
        '<strong>Balans:</strong> Visuell fördelning av vikt (ljusa vs mörka bilder, stora vs små).',
        '<strong>Visuellt flöde:</strong> Ögat bör röra sig naturligt genom kompositionen utan döda punkter.',
        '<strong>Kontrast:</strong> Variationer i färg, storlek och form som fångar uppmärksamheten.',
        '<strong>Enhet:</strong> Tematisk koherens – bilderna måste \"tala tillsammans\" om samma berättelse.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Smarta och adaptiva designer', html: 'Vårt system beräknar automatiskt den optimala rumsfördelningen baserat på antalet foton. 2 bilder = symmetriskt rutnät; 5 bilder = balanserad asymmetrisk fördelning. Varje rutnät är utformat för att maximera den visuella effekten.' },

    { type: 'comparative', items: [
        {
            title: 'För sociala nätverk',
            description: 'Instagram, TikTok, Facebook - kvadratiska format',
            icon: 'mdi:share-all',
            points: [
                '1200px är perfekt för Instagrams flöde',
                'Kvadratiskt format undviker beskärning vid publicering',
                'Anpassningsbara ramar för varumärkesprofilering'
            ],
            highlight: true
        },
        {
            title: 'För portföljer',
            description: 'Visuella skyltfönster för fotografer och designers',
            icon: 'mdi:briefcase-outline',
            points: [
                'Visa flera vinklar av ett projekt',
                'Sammanhängande visuell berättelse',
                'Professionell digital bokutskrift'
            ]
        },
        {
            title: 'För personliga presenter',
            description: 'Utskrifter, ramar och digitala album',
            icon: 'mdi:gift-outline',
            points: [
                'Evenemangsminnen (bröllop, resor)',
                'Hög upplösning redo för utskrift',
                'Omedelbar design utan manuell ansträngning'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Anpassning: Ramar och färger', level: 3 },
    { type: 'table', headers: ['Element', 'Visuell effekt', 'Rekommendation'], rows: [
        ['Vit ram', 'Ren, minimalistisk, modern', 'Sociala nätverk, digitala portföljer'],
        ['Svart ram', 'Dramatisk, professionell, artistisk', 'Konstfotografering, mode, lyx'],
        ['Neutral ram (grå)', 'Mångsidig, akademisk, företagsproffsig', 'Affärer, utbildning, neutralitet'],
        ['Ingen ram', 'Fusion, kontinuitet, uppslukande', 'Enhetlig bakgrund, flödande foton']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Professionella fördefinierade designer – inga förkunskaper i komposition krävs',
            con: 'Alternativen är begränsade till förutbestämda rutnät'
        },
        {
            pro: '1200px upplösning redo för sociala nätverk utan omskalning',
            con: 'Inte lika anpassningsbart som Photoshop'
        },
        {
            pro: '100% lokal bearbetning – integritet, snabbhet, inga gränser',
            con: 'Kräver en modern webbläsare'
        },
        {
            pro: 'Helt gratis, inga vattenstämplar, ingen reklam',
            con: 'Inga individuella redigeringsalternativ (beskärning, rotation)'
        }
    ], proTitle: 'Fördelar', conTitle: 'Begränsningar' },

    { type: 'diagnostic', variant: 'success', title: 'Redo för sociala nätverk', icon: 'mdi:check-circle-outline', badge: 'Optimerad', html: '1200x1200px är den idealiska upplösningen för Instagram. Den stöder alla bildförhållanden, men den kvadratiska utmatningen maximerar flödets effekt, eliminerar automatisk beskärning och ser lika bra ut på stationära datorer, surfplattor och mobiler.' },

    { type: 'glossary', items: [
        {
            term: 'Visuell komposition',
            definition: 'Konsten att organisera element (färg, form, rum) för att vägleda betraktarens öga och kommunicera en känslomässig avsikt.'
        },
        {
            term: 'Tredjeregeln',
            definition: 'Kompositionsprincip: delar upp bilden i 9 lika stora områden (3x3). Placera motiv på skärningslinjer för maximal effekt.'
        },
        {
            term: 'Symmetriskt rutnät',
            definition: 'Lika rumsfördelningar. Lugnande, ordnat. Idealiskt för bildpar eller jämna antal.'
        },
        {
            term: 'Asymmetriskt rutnät',
            definition: 'Oregelbundna fördelningar. Dynamiskt, intressant, visuellt. Idealiskt för 5+ bilder med varierad storlek.'
        },
        {
            term: 'Visuell balans',
            definition: 'Perceptuell jämvikt av visuell vikt. Ljus + mörk bild = balans; stor + liten = balans.'
        }
    ] },

    { type: 'message', title: 'Omedelbar visuell berättelse', ariaLabel: 'Information om komposition och collage', html: 'Varje collage berättar en historia. Vår automatiska designer ser till att dina visuella berättelser är balanserade, professionella och redo för världen. Utan att behöva vänta på en grafisk formgivare.' },

    { type: 'title', text: 'Skapa, dela, inspirera', level: 3 },
    { type: 'paragraph', html: 'Ett välidjort collage är skillnaden mellan ett inlägg man glömmer och ett som dina följare minns och delar. Använd smart komposition för att dina visuella berättelser ska få genomslag.' }
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
    inLanguage: 'sv',
};

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Vanliga frågor",
    faq,
    bibliographyTitle: "Referenser",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

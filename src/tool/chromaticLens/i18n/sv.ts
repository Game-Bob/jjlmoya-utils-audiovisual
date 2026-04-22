import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-extrahera-fargpalett-online';
const title = 'Chromatic Lens: Extrahera färgpalett online';
const description = 'Extrahera professionella färgpaletter från valfri bild helt gratis. Identifiera dominanta färger i dina foton med hjälp av matematiska algoritmer.';

const ui: ChromaticLensUI = {
    dropTitle: "Analysera färger",
    dropSubtitle: "Dra en bild hit för att extrahera dess kromatiska DNA.",
    processingLabel: "Extraherar palett...",
    paletteTitle: "Extraherad palett",
    copyLabel: "Kopiera HEX",
    copiedLabel: "Kopierad!",
    colorCountLabel: "Antal färger",
    changeImage: "Byt bild",
    faqTitle: "Vanliga frågor om färgextraktion": "Resurser och teknisk dokumentation"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Hur fungerar färgextraktion?",
        answer: "Vi använder 'Median Cut'-algoritmen, som grupperar bildpixlar baserat på deras närhet i RGB-färgrymden för att hitta de mest representativa tonerna.",
    },
    {
        question: "Kan jag kopiera färger till mitt designprogram?",
        answer: "Ja, genom att klicka på varje färg kopieras HEX-koden automatiskt till ditt urklipp, redo att klistras in i Photoshop, Figma eller CSS.",
    },
    {
        question: "Vilka typer av bilder kan jag analysera?",
        answer: "Alla JPG-, PNG- eller WebP-filer. Bearbetningen sker lokalt, så stora bilder analyseras snabbt utan att förbruka nätverksdata.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Ladda upp bilden",
        text: "Ladda upp fotografiet som du vill extrahera kromatisk inspiration ifrån.",
    },
    {
        name: "Justera precision",
        text: "Välj hur många dominanta färger du vill att verktyget ska identifiera (från 3 till 12).",
    },
    {
        name: "Analysera resultatet",
        text: "Paletten visas omedelbart tillsammans med motsvarande hexadecimala koder.",
    },
    {
        name: "Kopiera och använd",
        text: "Klicka på tonerna för att spara dem och använda dem i ditt designprojekt.",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Intelligent extraktion av färgpaletter',
        items: [
            'Professionell Median Cut-algoritm för färganalys',
            'Extrahera 3-12 dominanta färger från valfri bild',
            'HEX-koder som kan kopieras direkt till urklipp',
            '100% lokal bearbetning - perfekt för kreatörer'
        ]
    },
    { type: 'title', text: 'Färgpalettsextraktion: Vetenskap och design', level: 2 },
    { type: 'paragraph', html: 'Har du någonsin undrat varför ett filmfoto känns så harmoniskt? Det är ingen slump; det är färglära i praktiken. Chromatic Lens låter dig extrahera den harmonin direkt från pixeln och omvandla den till HEX-koder som kan användas i dina designprojekt.' },

    { type: 'stats', items: [
        { value: 'Omedelbar', label: 'Färganalys', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Lokal integritet', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Exakt färgrymd', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'Median Cut algoritmen förklarad', level: 3 },
    { type: 'paragraph', html: 'Intelligent palettextraktion är inte en enkel slumpmässig sampling av pixlar. Den använder Median Cut-algoritmen, en rekursiv partitioneringsteknik som säkerställer en trogen representation:' },
    { type: 'list', items: [
        '<strong>Rekursiv uppdelning:</strong> Bildens RGB-\"färgkub\" delas rekursivt upp i mindre boxar.',
        '<strong>Volymbolans:</strong> Varje partition strävar efter att gruppera pixlar från samma färgrymd med liknande volymer.',
        '<strong>Viktat medelvärde:</strong> Den resulterande färgen i varje box är genomsnittet av alla pixlar den innehåller.',
        '<strong>Trogen representation:</strong> De dominanta färgerna återspeglar bildens verkliga visuella atmosfär, inte bara ett enkelt stickprov.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Kreativt arbetsflöde', html: 'Idealisk för webbutvecklare, UX/UI-designers, digitala konstnärer och kreatörer som vill fånga den visuella essensen i ett fotografi, en film eller en visuell referens för att använda i sina gränssnitt, illustrationer eller varumärkespaletter.' },

    { type: 'title', text: 'Användningsområden inom digital design', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UI designers',
            description: 'Extrahera paletter från hero-bilder för att skapa enhetliga gränssnitt',
            icon: 'mdi:palette',
            points: [
                'Harmoniska bakgrundsfärger',
                'Knappar och sekundära element',
                'Automatiskt beräknad kontrast'
            ]
        },
        {
            title: 'Webbutvecklare',
            description: 'Skapa CSS-stylesheets direkt från visuella referenser',
            icon: 'mdi:code-braces',
            points: [
                'Kopiera HEX direkt till CSS',
                'Färgvariabler i SCSS/CSS',
                'Enhetliga teman utan föregående design'
            ],
            highlight: true
        },
        {
            title: 'Digitala konstnärer och illustratörer',
            description: 'Fånga kromatiska referenser från film, natur eller konst',
            icon: 'mdi:brush',
            points: [
                'Referenspaletter från mästerverk',
                'Cinematiska färgstudier',
                'Omedelbar visuell inspiration'
            ]
        },
        {
            title: 'Varumärkesspecialister',
            description: 'Utveckla visuella identiteter baserat på guidefotografier',
            icon: 'mdi:tag-multiple',
            points: [
                'Extrahera varumärkesfärger från bilder',
                'Skapa professionella kromatiska guider',
                'Säkerställ visuell konsistens'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Tillämpad färglära', level: 3 },
    { type: 'table', headers: ['Färgkoncept', 'Definition', 'Praktisk tillämpning'], rows: [
        ['Kromatisk harmoni', 'Färgkombination som är visuellt balanserad', 'Enhetlig visuell identitet i UI'],
        ['Kontrast', 'Skillnad i ljusstyrka mellan färger', 'Läsbarhet och visuell hierarki'],
        ['Mättnad', 'Färgintensitet hos en ton', 'Professionalism (låg) mot energi (hög)'],
        ['Färgtemperatur', 'Varma färger (röda) mot kalla färger (blå)', 'Känslomässig psykologi i design'],
        ['Monokromatisk palett', 'Variationer av en enda ton', 'Elegans och minimalism']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Matematisk precision i extraktionen - inte ett ungefärligt visuellt val',
            con: 'Knappt synliga färger kan inkluderas om de består av många pixlar'
        },
        {
            pro: 'Omedelbar kopiering till urklipp - perfekt integration med arbetsflödet',
            con: 'Kräver en modern webbläsare som är kompatibel med Canvas API'
        },
        {
            pro: 'Total integritet - 100% lokal analys utan att data skickas iväg',
            con: 'Ingen historik över tidigare analyser sparas'
        },
        {
            pro: 'Kompatibel med alla digitala bildformat',
            con: 'Slutgiltiga färger beror på bildkompression och kvalitet'
        }
    ], proTitle: 'Fördelar', conTitle: 'Begränsningar' },

    { type: 'diagnostic', variant: 'success', title: 'Realistisk färgåtergivning', icon: 'mdi:check-circle-outline', badge: 'Avancerad algoritm', html: 'Till skillnad från verktyg som bara samplar slumpmässiga pixlar använder vårt system Median Cut-algoritmen som väger in hela pixelantalet för varje ton, vilket säkerställer att den resulterande paletten troget återspeglar den visuella atmosfären och färgpsykologin i originalbilden.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Kvantiseringsalgoritm för färger som rekursivt delar upp RGB-rymden i boxar, vilket säkerställer en enhetlig fördelning. Har historiskt använts i GIF och indexerad färgteknik.'
        },
        {
            term: 'RGB-färgrymd',
            definition: 'Färgmodell baserad på rött, grönt och blått. Varje färg representeras som en kombination av dessa tre värden (0-255). Standard på digitala skärmar och webben.'
        },
        {
            term: 'HEX-kod',
          definition: '6-siffrig hexadecimal notation (#RRGGBB) som representerar färg på webben: #FF0000 (röd), #00FF00 (grön), #0000FF (blå). Universell i CSS, Figma och Adobe.'
        },
        {
            term: 'Färgmättnad',
            definition: 'Intensitet eller renhet hos en färg. Hög mättnad = livfull färg; låg mättnad = gråaktig färg. Påverkar den känslomässiga uppfattningen av designen.'
        },
        {
            term: 'Kromatisk harmoni',
            definition: 'Urval och kombination av färger som resulterar i ett visuellt tilltalande resultat. Det kan vara monokromatiskt, komplementärt, analogt eller triadiskt.'
        }
    ] },

    { type: 'message', title: 'Professionell kromatisk analys', ariaLabel: 'Teknisk information om färganalys', html: 'Chromatic Lens förvandlar manuell visuell analys till algoritmisk precision. Verktyget extraherar inte bara färger: det fångar den känslomässiga och visuella essensen i alla bilder och lägger den direkt i ditt urklipp som färdiga HEX-koder. Total integritet, inga begränsningar i produktivitet.' },

    { type: 'title', text: 'Design utifrån visuell inspiration', level: 3 },
    { type: 'paragraph', html: 'Den bästa färgpaletten är den som fångar den visuella intentionen i din referens. Chromatic Lens automatiserar det som tidigare var en manuell process: observera, analysera, anteckna. Nu behöver du bara dra en bild och få professionella HEX-koder på några sekunder.' }
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

export const content: ChromaticLensLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Vanliga frågor",
    faq: "Referenser",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

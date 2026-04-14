import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'utskriftskvalitet-kalkylator-pixlar-till-cm-dpi';
const title = 'Utskriftskvalitet Kalkylator: Pixlar till CM och DPI';
const description = 'Beräkna den maximala utskriftsstorleken för dina foton baserat på deras upplösning. Konvertera pixlar till centimeter och tum för att säkerställa professionell utskrift.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analysera Upplösning",
    dropSubtitle: "Dra din bild hit för att beräkna dess utskriftsstorlek.",
    resultsTitle: "Filspecifikationer",
    dpiDensityLabel: "Önskad Utskriftstäthet (DPI)",
    dpiPointsLabel: "punkter per tum",
    maxPrintTitle: "Maximal Utskriftsstorlek",
    standardFormatsTitle: "Standardformat som Stöds",
    formatColumn: "Format",
    measureColumn: "Mått",
    supportColumn: "Stöds?",
    qualityExcellent: "Utmärkt Kvalitet",
    qualityGood: "God Kvalitet",
    qualityFair: "Skärmkvalitet",
    qualityPoor: "Inte Lämplig",
    qualityExcellentDesc: "Idealisk för konsttidskrifter, fotoböcker och betraktning på nära håll.",
    qualityGoodDesc: "Tillräcklig för affischer och betraktning på medellångt avstånd.",
    qualityFairDesc: "Lämplig för digital visning eller fjärran reklampelare.",
    qualityPoorDesc: "Bilden kommer att se pixlig ut. Utskrift rekommenderas inte.",
    unitCm: "cm",
    unitInches: "tum",
    dpiScreenLabel: "Skärm",
    dpiNewspaperLabel: "Tidning",
    dpiPrintLabel: "Utskrift",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Vykort",
    formatQuartilla: "Kvartett",
    formatFolio: "Folio",
    formatDoubleFolio: "Dubbel Folio",
    formatSmallPoster: "Liten Affisch",
    formatLargePoster: "Stor Affisch",
    formatPlane: "Ritning",
    supportedText: "Ja (Täcks)",
    notSupportedPrefix: "Nej (",
    invalidImageError: "Välj en giltig bild",
    faqTitle: "Vanliga Frågor",
    bibliographyTitle: "Referenser"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Vad är DPI och varför spelar det roll?",
        answer: "DPI (Dots Per Inch) anger hur många bläckpunkter skrivaren placerar på en linjär tum. Ju högre DPI, desto skarpare bild, men desto mindre blir den totala fysiska storleken som dina pixlar täcker.",
    },
    {
        question: "Vad är den ideala DPI:n för att skriva ut ett foto?",
        answer: "Industristandarden är 300 DPI för utmärkt fotografisk kvalitet. För stora utskrifter som ska ses på avstånd kan 150 DPI räcka.",
    },
    {
        question: "Kan jag öka DPI:n på min bild utan att förlora kvalitet?",
        answer: "Nej. Att öka DPI:n utan att ändra pixlarna minskar helt enkelt storleken på utskriften. Om du 'uppfinner' pixlar med programvara (upscaling) kan bilden se suddig ut.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Ladda upp din bild",
        text: "Ladda upp fotografiet du vill skriva ut för att få veta dess dimensioner i pixlar.",
    },
    {
        name: "Justera DPI",
        text: "Dra i reglaget för att se hur den slutliga storleken ändras beroende på punkttätheten (72 till 600 DPI).",
    },
    {
        name: "Verifiera format",
        text: "Kontrollera tabellen för standardformat (A4, A3, etc.) för att se om din upplösning täcker det önskade papperet.",
    },
    {
        name: "Bekräfta kvalitet",
        text: "Se till att indikatorn markerar 'Utmärkt Kvalitet' innan du skickar till tryck.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "Internationella pappersstorlekar (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Guide för bildupplösning - Adobe",
        url: "https://www.adobe.com/se/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionell Beräkning av Utskriftsupplösning',
        items: [
            'Konvertera pixlar till centimeter och tum noggrant',
            'Beräkna maximal storlek baserat på önskad DPI',
            'Kompatibilitet med standardformat (A4, A3, etc.)',
            'Guide till 4 kvalitetsnivåer: Utmärkt till Inte Lämplig'
        ]
    },
    { type: 'title', text: 'Den Definitiva Guiden till Utskriftskvalitet och DPI', level: 2 },
    { type: 'paragraph', html: 'Har du någonsin skrivit ut ett foto och det blev suddigt eller pixligt? Hemligheten ligger i det matematiska förhållandet mellan <strong>Pixlar</strong> och <strong>DPI</strong> (Dots Per Inch). Detta verktyg beräknar den exakta maximala storleken du kan skriva ut dina bilder i utan att förlora professionell kvalitet.' },

    { type: 'stats', items: [
        { value: '300', label: 'Professionell Standard DPI', icon: 'mdi:target' },
        { value: '100%', label: 'Exakta Beräkningar', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Format som Stöds', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Förstå DPI: Pixlar vs Punkter', level: 3 },
    { type: 'paragraph', html: 'Den vanliga förvirringen är att tro att DPI och pixlar är samma sak. Det är de inte. Pixlar finns INUTI din digitala fil. DPI är hur skrivaren konverterar dem till bläck på papper.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Hur många bläckpunkter skrivaren placerar på en linjär tum (2,54 cm).',
        '<strong>Pixlar:</strong> Små datarutor i din digitala fil. Ett foto på 3000x2000 pixlar har konstant information, oavsett DPI.',
        '<strong>Formeln:</strong> Utskriftsstorlek (tum) = Pixlar / DPI. Exempel: 3000 pixlar / 300 DPI = 10 tum (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'DPI kvalitetsnivåer Förklarade', level: 3 },
    { type: 'table', headers: ['DPI', 'Visuell Kvalitet', 'Användningsfall', 'Betraktningsavstånd'], rows: [
        ['600+ DPI', 'Utmärkt (Perfekt)', 'Konstböcker, lyxtidskrifter, fine art-fotografi', 'Mindre än 10 cm'],
        ['300-400 DPI', 'Utmärkt (Professionell)', 'Fotografi, böcker, företagskataloger', '20-30 cm (hand)'],
        ['150-200 DPI', 'God (Webbutskrift)', 'Affischer, kalendrar, medelstort avstånd', '1-2 meter'],
        ['72-100 DPI', 'Skärm (Godtagbar)', 'Reklampelare, fjärran banderoller', '5+ meter'],
        ['10-30 DPI', 'Låg (Inte lämplig)', 'Jättelika reklampelare, extremt långt avstånd', '50+ meter']
    ] },

    { type: 'card', title: 'Gyllene Regeln om 300 DPI', html: 'För fotografiskt och professionellt redaktionellt tryck är industristandarden <strong>300 DPI</strong>. Detta säkerställer att det mänskliga ögat på normalt avstånd (20-30 cm) inte uppfattar enskilda bläckpunkter. Vid mindre än 300 DPI blir ett pixelrutnät synligt.' },

    { type: 'comparative', items: [
        {
            title: 'Handhållet Foto (10x15 Foton)',
            description: '300 DPI obligatoriskt - betraktas på nära håll',
            icon: 'mdi:image',
            points: [
                'Vid 3000x2000 pixlar = maximalt 10x6,7 tum',
                'Garanterad utmärkt kvalitet',
                'Standard för album och presenter'
            ]
        },
        {
            title: 'Väggaffisch A3 (30x42 cm)',
            description: '150 DPI räcker - betraktas på avstånd',
            icon: 'mdi:wall-fire',
            points: [
                'Sett från 1-2 meter',
                'Färre pixlar behövs',
                'Spara på kamerakvalitet'
            ],
            highlight: true
        },
        {
            title: 'Reklampelare (200x300 cm)',
            description: '15-30 DPI - betraktas från många meters håll',
            icon: 'mdi:sign',
            points: [
                'Observeras på 20+ meters avstånd',
                'Även låg upplösning ser bra ut',
                'Optimera stora filer'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Förbereda Filer för Professionell Utskrift', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Skrivare använder bläck (CMYK), skärmar använder ljus (RGB). Konvertera för att undvika färgöverraskningar.',
            con: 'Färger kan ändras vid konvertering - kontrollera förhandsgranskningen först'
        },
        {
            pro: 'Utfall (Bleed): Lägg till 3 mm extra per sida om bilden ska nå papperskanten',
            con: 'Utan utfall kan skurna kanter förbli vita'
        },
        {
            pro: 'Uppskalning fungerar INTE: Att öka pixlar i Photoshop lägger till falsk information (utjämning)',
            con: 'Om du vill skriva ut stort behöver du en originalbild med hög upplösning'
        },
        {
            pro: 'Format: TIFF utan komprimering eller högkvalitativ JPEG för foton; vektor (AI, EPS) för logotyper',
            con: 'PNG stöder inte CMYK infödd i de flesta tryckerier'
        }
    ], proTitle: 'Rekommendationer', conTitle: 'Kontraindikationer' },

    { type: 'diagnostic', variant: 'warning', title: 'Vanligt Fel: Myten om Uppskalning', icon: 'mdi:alert', badge: 'Kritiskt', html: '<strong>Öka INTE DPI i Photoshop utan att ändra pixlarna.</strong> Att öka från 72 DPI till 300 DPI minskar helt enkelt den fysiska utskriftsstorleken. Om du \"lägger till pixlar\" genom interpolering (uppskalning) kommer bilden att se utjämnad eller suddig ut. Du behöver RIKTIGA pixlar från källan.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Mått på utskriftsupplösning: hur många bläckpunkter per linjär tum (2,54 cm). 300 DPI = 300x300 = 90 000 punkter per kvadrattum.'
        },
        {
            term: 'CMYK',
            definition: 'Utskriftsfärgrymd: Cyan, Magenta, Yellow, blacK. Baserad på subtraktivt bläck. Skiljer sig från RGB (additivt ljus på skärmar).'
        },
        {
            term: 'Utfall (Bleed)',
            definition: 'Extra område (vanligtvis 3 mm) som skrivs ut och sedan skärs bort. Säkerställer att bilden når kanten utan att lämna vita marginaler.'
        },
        {
            term: 'Ursprunglig Upplösning',
            definition: 'RIKTIGA pixlar som fångats av kameran, utan manipulation. Att öka DPI utan att ändra pixlar genererar inte \"ursprunglig upplösning\".'
        },
        {
            term: 'Interpolering (Uppskalning)',
            definition: 'Algoritm som uppfinner nya pixlar baserat på befintliga. Användbart för små ökningar, men förlorar skärpa vid stora förstoringar.'
        }
    ] },

    { type: 'message', title: 'Teknisk Precision för Professionella Resultat', ariaLabel: 'Information om utskriftsberäkningar', html: 'Vår kalkylator konverterar pixlar till centimeter med hänsyn till internationella standarder (ISO 216 för papper). Det är inte bara en kalkylator: det är din validerare för om det fotot passar den utskriftsstorleken med bibehållen professionell kvalitet.' },

    { type: 'title', text: 'Slutsats: Skriv ut utan Överraskningar', level: 3 },
    { type: 'paragraph', html: 'Skillnaden mellan en vacker utskrift och en besvikelse är att känna till förhållandet mellan pixlar och DPI. Använd denna kalkylator för att validera dina filer INNAN du går till tryckeriet. På så sätt undviker du onödiga utgifter och frustrerande resultat.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Vanliga Frågor",
    faq,
    bibliographyTitle: "Referenser",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

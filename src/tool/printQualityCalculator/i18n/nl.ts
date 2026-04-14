import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'drukkwaliteit-calculator-pixels-naar-cm-dpi';
const title = 'Drukkwaliteit Calculator: Pixels naar CM en DPI';
const description = 'Bereken de maximale afdrukgrootte van je foto\'s op basis van hun resolutie. Converteer pixels naar centimeters en inches om professioneel drukwerk te garanderen.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analyseer Resolutie",
    dropSubtitle: "Sleep je afbeelding hierheen om de afdrukgrootte te berekenen.",
    resultsTitle: "Bestandsspecificaties",
    dpiDensityLabel: "Gewenste Afdrukdichtheid (DPI)",
    dpiPointsLabel: "punten per inch",
    maxPrintTitle: "Maximale Afdrukgrootte",
    standardFormatsTitle: "Ondersteunde Standaardformaten",
    formatColumn: "Formaat",
    measureColumn: "Afmetingen",
    supportColumn: "Ondersteund?",
    qualityExcellent: "Uitstekende Kwaliteit",
    qualityGood: "Goede Kwaliteit",
    qualityFair: "Schermkwaliteit",
    qualityPoor: "Niet Geschikt",
    qualityExcellentDesc: "Ideaal for kunsttijdschriften, fotoboeken en close-up weergave.",
    qualityGoodDesc: "Voldoende voor posters en weergave op middellange afstand.",
    qualityFairDesc: "Geschikt voor digitale weergave of verre reclameborden.",
    qualityPoorDesc: "De afbeelding zal er gepixeld uitzien. Afdrukken wordt niet aanbevolen.",
    unitCm: "cm",
    unitInches: "in",
    dpiScreenLabel: "Scherm",
    dpiNewspaperLabel: "Krant",
    dpiPrintLabel: "Drukwerk",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Briefkaart",
    formatQuartilla: "Kwartijn",
    formatFolio: "Folio",
    formatDoubleFolio: "Dubbel Folio",
    formatSmallPoster: "Kleine Poster",
    formatLargePoster: "Grote Poster",
    formatPlane: "Plattegrond",
    supportedText: "Ja (Gedekt)",
    notSupportedPrefix: "Nee (",
    invalidImageError: "Selecteer een geldige afbeelding",
    faqTitle: "Veelgestelde Vragen",
    bibliographyTitle: "Referenties"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Wat is DPI en waarom is het belangrijk?",
        answer: "DPI (Dots Per Inch) geeft aan hoeveel inktpunten de printer op een lineaire inch zet. Hoe hoger de DPI, hoe scherper de afbeelding, maar hoe kleiner de totale fysieke grootte die je pixels zullen beslaan.",
    },
    {
        question: "Wat is de ideale DPI voor het afdrukken van een foto?",
        answer: "De industriestandaard is 300 DPI voor een uitstekende fotografische kwaliteit. Voor grote afdrukken die van veraf bekeken worden, kan 150 DPI voldoende zijn.",
    },
    {
        question: "Kan ik de DPI van mijn afbeelding verhogen zonder kwaliteitsverlies?",
        answer: "Nee. Het verhogen van de DPI zonder de pixels te veranderen, verkleint simpelweg de grootte van de afdruk. Als je pixels 'verzint' met software (upscaling), kan de afbeelding er wazig uitzien.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Upload je afbeelding",
        text: "Upload de foto die je wilt afdrukken om de afmetingen in pixels te weten te komen.",
    },
    {
        name: "Pas DPI aan",
        text: "Verschuif de balk om te zien hoe de uiteindelijke grootte verandert op basis van de puntdichtheid (72 tot 600 DPI).",
    },
    {
        name: "Controleer formaat",
        text: "Bekijk de tabel met standaardformaten (A4, A3, etc.) om te zien of je resolutie het gewenste papier dekt.",
    },
    {
        name: "Bevestig kwaliteit",
        text: "Zorg ervoor dat de indicator 'Uitstekende Kwaliteit' aangeeft voordat je naar de drukker gaat.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "Internationale Papierformaten (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Afbeeldingsresolutie gids - Adobe",
        url: "https://www.adobe.com/nl/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionele Berekening van Afdrukresolutie',
        items: [
            'Pixels nauwkeurig omzetten naar centimeters en inches',
            'Maximale grootte berekenen op basis van gewenste DPI',
            'Compatibiliteit met standaardformaten (A4, A3, etc.)',
            'Gids voor 4 kwaliteitsniveaus: van Uitstekend tot Niet Geschikt'
        ]
    },
    { type: 'title', text: 'Definitieve Gids voor Afdrukkwaliteit en DPI', level: 2 },
    { type: 'paragraph', html: 'Heb je wel eens een foto afgedrukt die er wazig of gepixeld uitkwam? Het geheim zit in de wiskundige relatie tussen <strong>Pixels</strong> en <strong>DPI</strong> (Dots Per Inch). Deze tool berekent de exacte maximale grootte waarop je je afbeeldingen kunt afdrukken zonder professionele kwaliteit te verliezen.' },

    { type: 'stats', items: [
        { value: '300', label: 'Professionele Standaard DPI', icon: 'mdi:target' },
        { value: '100%', label: 'Nauwkeurige Berekeningen', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Ondersteunde Formaten', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'DPI Begrijpen: Pixels vs Punten', level: 3 },
    { type: 'paragraph', html: 'Een veelvoorkomende verwarring is de gedachte dat DPI en pixels hetzelfde zijn. Dat zijn ze niet. Pixels zitten IN je digitale bestand. DPI is hoe de printer ze omzet in inkt op papier.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Hoeveel inktpunten de printer op een lineaire inch (2,54 cm) plaatst.',
        '<strong>Pixels:</strong> Kleine gegevensvierkantjes in je digitale bestand. Een foto van 3000x2000 pixels bevat constante informatie, ongeacht de DPI.',
        '<strong>De Formule:</strong> Afdrukgrootte (inches) = Pixels / DPI. Voorbeeld: 3000 pixels / 300 DPI = 10 inches (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Uitleg van DPI kwaliteitsniveaus', level: 3 },
    { type: 'table', headers: ['DPI', 'Visuele Kwaliteit', 'Gebruikssituaties', 'Kijkafstand'], rows: [
        ['600+ DPI', 'Uitstekend (Perfect)', 'Kunstboeken, luxe tijdschriften, fijne fotografie', 'Minder dan 10 cm'],
        ['300-400 DPI', 'Uitstekend (Professioneel)', 'Fotografie, boeken, catalogi', '20-30 cm (hand)'],
        ['150-200 DPI', 'Goed (Web Druk)', 'Posters, kalenders, gemiddelde weergave', '1-2 meter'],
        ['72-100 DPI', 'Scherm (Redelijk)', 'Reclameborden, verre banners', '5+ meter'],
        ['10-30 DPI', 'Laag (Niet Geschikt)', 'Gigantische reclameborden, extreem verre weergave', '50+ meter']
    ] },

    { type: 'card', title: 'De Gouden Regel van 300 DPI', html: 'Voor fotografisch en professioneel redactioneel drukwerk is de industriestandaard <strong>300 DPI</strong>. Dit zorgt ervoor dat het menselijk oog op normale afstand (20-30 cm) geen individuele inktpunten waarneemt. Bij minder dan 300 DPI wordt een pixelraster zichtbaar.' },

    { type: 'comparative', items: [
        {
            title: 'Handfotografie (10x15 Foto\'s)',
            description: '300 DPI verplicht - van dichtbij bekeken',
            icon: 'mdi:image',
            points: [
                'Bij 3000x2000 pixels = maximaal 10x6,7 inches',
                'Gegarandeerd uitstekende kwaliteit',
                'Standaard voor albums en geschenken'
            ]
        },
        {
            title: 'Muurposter A3 (30x42 cm)',
            description: '150 DPI genoeg - van afstand bekeken',
            icon: 'mdi:wall-fire',
            points: [
                'Bekeken vanaf 1-2 meter',
                'Minder pixels nodig',
                'Bespaar op camerakwaliteit'
            ],
            highlight: true
        },
        {
            title: 'Reclamebord (200x300 cm)',
            description: '15-30 DPI - van vele meters bekeken',
            icon: 'mdi:sign',
            points: [
                'Geobserveerd op 20+ meter afstand',
                'Zelfs lage resolutie ziet er goed uit',
                'Optimaliseer grote bestanden'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Bestanden Voorbereiden voor Professioneel Drukwerk', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Printers gebruiken inkt (CMYK), schermen gebruiken licht (RGB). Converteer om kleurverrassingen te voorkomen.',
            con: 'Kleuren kunnen veranderen bij het converteren - bekijk eerst de preview'
        },
        {
            pro: 'Afloop (Bleed): Voeg 3mm extra toe per zijde als de afbeelding tot de papierrand moet lopen',
            con: 'Zonder afloop kunnen snijranden wit blijven'
        },
        {
            pro: 'Upscaling werkt NIET: Pixels vergroten in Photoshop voegt valse informatie toe (gladmaken)',
            con: 'Als je groot wilt afdrukken, heb je de originele foto in hoge resolutie nodig'
        },
        {
            pro: 'Formaten: TIFF zonder compressie of hoge kwaliteit JPEG voor foto\'s; vector (AI, EPS) voor logo\'s',
            con: 'PNG ondersteunt CMYK niet standaard in de meeste drukkerijen'
        }
    ], proTitle: 'Aanbevelingen', conTitle: 'Contra-indicaties' },

    { type: 'diagnostic', variant: 'warning', title: 'Veelgemaakte Fout: De Mythe van Upscaling', icon: 'mdi:alert', badge: 'Kritiek', html: '<strong>Verhoog de DPI NIET in Photoshop zonder de pixels te veranderen.</strong> Verhoging van 72 DPI naar 300 DPI verkleint simpelweg de fysieke afdrukgrootte. Als je pixels \'toevoegt\' via interpolatie (upscaling), ziet de afbeelding er gladgetrokken of wazig uit. Je hebt ECHTE pixels van de bron nodig.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Maat voor afdrukresolutie: hoeveel inktpunten per lineaire inch (2,54 cm). 300 DPI = 300x300 = 90.000 punten per vierkante inch.'
        },
        {
            term: 'CMYK',
            definition: 'Drukkerijkleurruimte: Cyaan, Magenta, Geel, Zwart (Key). Gebaseerd op subtractieve inkt. Anders dan RGB (additief licht van schermen).'
        },
        {
            term: 'Afloop (Bleed)',
            definition: 'Extra gebied (meestal 3mm) dat wordt afgedrukt en daarna schoongesneden. Zorgt ervoor dat de afbeelding tot de rand loopt zonder witte marges.'
        },
        {
            term: 'Native Resolutie',
            definition: 'ECHTE pixels vastgelegd door de camera, zonder manipulatie. DPI verhogen zonder pixels te veranderen genereert geen \"native resolutie\".'
        },
        {
            term: 'Interpolatie (Upscaling)',
            definition: 'Algoritme dat nieuwe pixels verzint op basis van bestaande pixels. Nuttig voor kleine vergrotingen, maar verliest scherpte bij grote vergrotingen.'
        }
    ] },

    { type: 'message', title: 'Technische Precisie voor Professionele Resultaten', ariaLabel: 'Informatie over afdrukberekeningen', html: 'Onze calculator zet pixels om naar centimeters rekening houdend met internationale standaarden (ISO 216 voor papier). Het is niet zomaar een rekenmachine: het is je validator of die foto past bij die afdrukgrootte met behoud van professionele kwaliteit.' },

    { type: 'title', text: 'Conclusie: Afdrukken Zonder Verrassingen', level: 3 },
    { type: 'paragraph', html: 'Het verschil tussen een mooie afdruk en een teleurstellende afdruk is het kennen van de relatie tussen pixels and DPI. Gebruik deze calculator om je bestanden te valideren VOORDAT je naar de drukker gaat. Zo voorkom je onnodige kosten en frustrerende resultaten.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Veelgestelde Vragen",
    faq,
    bibliographyTitle: "Referenties",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

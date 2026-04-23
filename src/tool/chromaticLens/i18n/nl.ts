import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-kleurenpalet-extractie-online';
const title = 'Chromatic Lens: Online Kleurenpalet Extractie';
const description = 'Extraheer gratis professionele kleurenpaletten uit elke afbeelding. Identificeer dominante kleuren in uw foto\'s met behulp van mathematische algoritmen.';

const ui: ChromaticLensUI = {
    dropTitle: "Kleuren Analyseren",
    dropSubtitle: "Sleep een afbeelding om het chromatische DNA te extraheren.",
    processingLabel: "Palet extraheren...",
    paletteTitle: "Geëxtraheerd Palet",
    copyLabel: "HEX Kopiëren",
    copiedLabel: "Gekopieerd!",
    colorCountLabel: "Aantal kleuren",
    changeImage: "Afbeelding wijzigen",
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Hoe werkt kleurextractie?",
        answer: "We gebruiken het 'Median Cut' algoritme, dat afbeeldingspixels groepeert op basis van hun nabijheid in de RGB-kleurruimte om de meest representatieve tonen te vinden.",
    },
    {
        question: "Kan ik kleuren naar mijn ontwerpeditor kopiëren?",
        answer: "Ja, door op elke kleur te klikken, wordt de HEX-code automatisch naar uw klembord gekopieerd, klaar om in Photoshop, Figma of CSS te worden geplakt.",
    },
    {
        question: "Welke soorten afbeeldingen kan ik analyseren?",
        answer: "Elk JPG-, PNG- of WebP-bestand. De verwerking is lokaal, dus grote afbeeldingen worden snel geanalyseerd zonder netwerkdata te verbruiken.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Upload de afbeelding",
        text: "Upload de foto waaruit u chromatische inspiratie wilt extraheren.",
    },
    {
        name: "Pas precisie aan",
        text: "Selecteer hoeveel dominante kleuren u wilt dat de tool identificeert (van 3 tot 12).",
    },
    {
        name: "Analyseer het resultaat",
        text: "Het palet verschijnt onmiddellijk met de bijbehorende hexadecimale codes.",
    },
    {
        name: "Kopieer en gebruik",
        text: "Klik op de tonen om ze op te slaan en toe te passen in uw ontwerpproject.",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Intelligente Kleurenpalet Extractie',
        items: [
            'Professioneel Median Cut algoritme voor kleuranalyse',
            'Extraheer 3-12 dominante kleuren uit elke afbeelding',
            'HEX-codes direct kopieerbaar naar het klembord',
            '100% lokale verwerking - ideaal voor creatievelingen'
        ]
    },
    { type: 'title', text: 'Kleurenpalet Extractie: Wetenschap en Ontwerp', level: 2 },
    { type: 'paragraph', html: 'Heeft u zich ooit afgevraagd waarom een filmfoto zo harmonieus aanvoelt? Dat is geen toeval; het is kleurentheorie in actie. Chromatic Lens stelt u in staat om die harmonie direct uit de pixel te extraheren en te transformeren naar HEX-codes die bruikbaar zijn in uw ontwerpprojecten.' },

    { type: 'stats', items: [
        { value: 'Instant', label: 'Kleuranalyse', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Lokale Privacy', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Precieze Kleurruimte', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'Het Median Cut Algoritme Uitgelegd', level: 3 },
    { type: 'paragraph', html: 'Intelligente paletextractie is niet een eenvoudige willekeurige steekproef van pixels. Het maakt gebruik van het Median Cut algoritme, een recursieve partitioneringstechniek die een getrouwe weergave garandeert:' },
    { type: 'list', items: [
        '<strong>Recursieve Verdeling:</strong> De RGB \"kleurenkubus\" van de afbeelding wordt recursief verdeeld in kleinere boxen.',
        '<strong>Volume Balans:</strong> Elke partitie probeert pixels uit dezelfde kleurruimte met vergelijkbare volumes te groeperen.',
        '<strong>Gewogen Gemiddelde:</strong> de resulterende kleur van elke box is het gemiddelde van alle pixels die deze bevat.',
        '<strong>Getrouwe Weergave:</strong> De dominante kleuren weerspiegelen de echte visuele sfeer van de afbeelding, niet slechts een simpele steekproef.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Creatieve Workflow', html: 'Ideaal voor webontwikkelaars, UX/UI-ontwerpers, digitale kunstenaars en creatievelingen die onmiddellijk de visuele essentie van een foto, film of visuele referentie willen vastleggen om toe te passen in hun interfaces, illustraties of merkpaletten.' },

    { type: 'title', text: 'Use Cases in Digitaal Ontwerp', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UI Ontwerpers',
            description: 'Extraheer paletten uit hero images om samenhangende interfaces te creëren',
            icon: 'mdi:palette',
            points: [
                'Harmonieuze achtergrondkleuren',
                'Knoppen en secundaire elementen',
                'Automatisch berekend contrast'
            ]
        },
        {
            title: 'Webontwikkelaars',
            description: 'Maak CSS-stylesheets direct van visuele referenties',
            icon: 'mdi:code-braces',
            points: [
                'Kopieer HEX direct naar CSS',
                'Kleurvariabelen in SCSS/CSS',
                'Samenhangende thema\'s zonder voorafgaand ontwerp'
            ],
            highlight: true
        },
        {
            title: 'Digitale Kunstenaars en Illustratoren',
            description: 'Leg chromatische referenties vast van films, natuur of kunst',
            icon: 'mdi:brush',
            points: [
                'Referentiepaletten van meesterwerken',
                'Cinematografische kleurstudies',
                'Onmiddellijke visuele inspiratie'
            ]
        },
        {
            title: 'Branding Specialisten',
            description: 'Ontwikkel visuele identiteiten op basis van gidsfoto\'s',
            icon: 'mdi:tag-multiple',
            points: [
                'Extraheer merkkleuren uit afbeeldingen',
                'Maak professionele chromatische gidsen',
                'Zorg voor visuele consistentie'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Toegepaste Kleurentheorie', level: 3 },
    { type: 'table', headers: ['Kleurconcept', 'Definitie', 'Praktische Toepassing'], rows: [
        ['Chromatische Harmonie', 'Kleurcombinatie die visueel in balans is', 'Samenhangende visuele identiteit in UI'],
        ['Contrast', 'Verschil in helderheid tussen kleuren', 'Leesbaarheid en visuele hiërarchie'],
        ['Verzadiging', 'Kleurintensiteit van een toon', 'Professionalisme (laag) vs Energie (hoog)'],
        ['Kleurtemperatuur', 'Warme kleuren (rood) vs koele kleuren (blauw)', 'Emotionele psychologie van ontwerp'],
        ['Monochromatisch Palet', 'Variaties van een enkele toon', 'Elegantie en minimalisme']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Mathematische precisie bij extractie - geen geschatte visuele selectie',
            con: 'Nauwelijks zichtbare kleuren kunnen worden opgenomen als ze veel pixels hebben'
        },
        {
            pro: 'Direct kopiëren naar klembord - perfecte integratie met workflow',
            con: 'Heeft een moderne browser nodig die compatibel is met Canvas API'
        },
        {
            pro: 'Totale privacy - 100% lokale analyse zonder gegevensverzending',
            con: 'Geen geschiedenis van eerdere analyses opgeslagen'
        },
        {
            pro: 'Compatibel met elk digitaal afbeeldingsformaat',
            con: 'Uiteindelijke kleuren zijn afhankelijk van compressie en kwaliteit van de afbeelding'
        }
    ], proTitle: 'Voordelen', conTitle: 'Beperkingen' },

    { type: 'diagnostic', variant: 'success', title: 'Realistische Kleurweergave', icon: 'mdi:check-circle-outline', badge: 'Geavanceerd Algoritme', html: 'In tegenstelling tot tools die simpelweg willekeurige pixels samplen, maakt ons systeem gebruik van het Median Cut algoritme dat de volledige pixelaantal van elke toon weegt, waardoor het resulterende palet getrouw de visuele sfeer en kleurpsychologie van de originele afbeelding weerspiegelt.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Kleurkwantiseringsalgoritme dat de RGB-ruimte recursief verdeelt in boxen, wat zorgt voor een uniforme distributie. Historisch gebruikt in GIF en geïndexeerde kleurtechnologie.'
        },
        {
            term: 'RGB Kleurruimte',
            definition: 'Kleurenmodel gebaseerd op rood, groen en blauw. Elke kleur wordt weergegeven als een combinatie van deze drie waarden (0-255). Standaard op digitale schermen en web.'
        },
        {
            term: 'HEX-code',
          definition: '6-cijferige hexadecimale notatie (#RRGGBB) die kleur op het web vertegenwoordigt: #FF0000 (rood), #00FF00 (groen), #0000FF (blauw). Universeel in CSS, Figma en Adobe.'
        },
        {
            term: 'Kleurverzadiging',
            definition: 'Intensiteit of zuiverheid van kleur. Hoge verzadiging = levendige kleur; lage verzadiging = grijsachtige kleur. Beïnvloedt de emotionele perceptie van het ontwerp.'
        },
        {
            term: 'Chromatische Harmonie',
            definition: 'Selectie en combinatie van kleuren die resulteert in een visueel aantrekkelijk resultaat. Het kan monochromatisch, complementair, analoog of triadisch zijn.'
        }
    ] },

    { type: 'message', title: 'Professionele Chromatische Analyse', ariaLabel: 'Technische informatie over kleuranalyse', html: 'Chromatic Lens transformeert handmatige visuele analyse in algoritmische precisie. Het extraheert niet alleen kleuren: het legt de emotionele en visuele essentie van elke afbeelding vast en plaatst deze direct op uw klembord als kant-en-klare HEX-codes. Totale privacy, geen limieten op analysevolume.' },

    { type: 'title', text: 'Ontwerp vanuit Visuele Inspiratie', level: 3 },
    { type: 'paragraph', html: 'Het beste kleurenpalet is degene die de visuele intentie van uw referentie vastlegt. Chromatic Lens automatiseert wat voorheen een handmatig proces was: observeren, analyseren, noteren. Sleep nu gewoon een afbeelding en krijg binnen enkele seconden professionele HEX-codes.' }
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

export const content: ChromaticLensLocaleContent = {
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

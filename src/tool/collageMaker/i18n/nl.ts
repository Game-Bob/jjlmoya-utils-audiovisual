import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'gratis-online-fotocollage-maker-professionele-composities';
const title = 'Online Collage Maker: Ontwerp professionele composities';
const description = 'Maak gratis fotocollages in enkele seconden. Kies uit verschillende lay-outs, pas randen aan en download in hoge kwaliteit zonder watermerken.';

const ui: CollageMakerUI = {
    dropTitle: "Sleep afbeeldingen hierheen",
    dropSub: "of {link} - min. 2, max. 9",
    dropLink: "selecteer bestanden",
    imgsLoaded: "Geladen afbeeldingen",
    layoutLabel: "Lay-out",
    settingsLabel: "Instellingen",
    borderLabel: "Rand",
    borderColorLabel: "Randkleur",
    bgColorLabel: "Achtergrond",
    downloadBtn: "Downloaden",
    previewTitle: "Voorvertoning",
    needsImgs: "Je hebt {n} afbeeldingen nodig",
    errorMin: "Je hebt minimaal 2 afbeeldingen nodig",
    errorMax: "Maximaal 9 afbeeldingen toegestaan",
    errorLoad: "Fout bij het laden van afbeeldingen",
    faqTitle: "Veelgestelde Vragen": "Referenties"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Hoe kan ik de volgorde van de foto's veranderen?",
        answer: "De foto's worden in de collage geplaatst in de volgorde waarin ze verschijnen in de lijst met geladen afbeeldingen. Je kunt er een verwijderen en opnieuw uploaden om de positie aan te passen.",
    },
    {
        question: "Welk uitvoerformaat heeft de collage?",
        answer: "De collage wordt gedownload in WebP-formaat met hoge resolutie, ideaal voor het delen op sociale netwerken zonder scherpteverlies.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Upload je foto's",
        text: "Selecteer tussen de 2 en 9 afbeeldingen uit je bestandsverkenner.",
    },
    {
        name: "Kies een lay-out",
        text: "Selecteer het raster dat het beste past bij het aantal foto's dat je hebt geüpload.",
    },
    {
        name: "Personaliseer de stijl",
        text: "Pas de randdikte en  kleur aan voor een professionele afwerking.",
    },
    {
        name: "Download en deel",
        text: "Druk op de knop 'maken' en download direct je uiteindelijke compositie.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionele Online Collage Maker',
        items: [
            'Meerdere lay-outs en vooraf gedefinieerde rasters',
            'Aanpassing van randen en achtergrondkleuren',
            '1200px hoge resolutie, klaar voor sociale netwerken',
            'Directe verwerking zonder gebruiksbeperkingen'
        ]
    },
    { type: 'title', text: 'Collage Ontwerp: Composities Die Verhalen Vertellen', level: 2 },
    { type: 'paragraph', html: 'Een collage is meer dan een mix van foto\'s; het is een visueel narratief dat emotie en context communiceert. Onze tool stelt je in staat om professionele geometrische composities te maken voor Instagram, Facebook, Pinterest of persoonlijke projecten zonder dat Photoshop of dure software nodig is.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Beelden per Collage', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD Resolutie', icon: 'mdi:video-high-definition' },
        { value: 'Direct', label: 'Generatie', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Visuele Compositie: Ontwerpprincipes', level: 3 },
    { type: 'paragraph', html: 'Compositie is de kunst van het organiseren van visuele elementen op een manier die het oog van de kijker leidt en een intentie communiceert. Een goede collage balanceert:' },
    { type: 'list', items: [
        '<strong>Balans:</strong> Visuele verdeling van gewicht (lichte vs donkere afbeeldingen, grote vs kleine).',
        '<strong>Visuele Flow:</strong> Het oog moet de compositie op een natuurlijke manier doorkruisen, zonder dode punten.',
        '<strong>Contrast:</strong> Variaties in kleur, grootte en vorm die de aandacht trekken.',
        '<strong>Eenheid:</strong> Thematsche samenhang - beelden moeten \"samen spreken\" over hetzelfde verhaal.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Slimme en Adaptieve Ontwerpen', html: 'Ons systeem berekent automatisch de optimale ruimtelijke verdeling op basis van het aantal foto\'s. 2 afbeeldingen = symmetrisch raster; 5 afbeeldingen = gebalanceerde asymmetrische verdeling. Elk raster is ontworpen om de visuele impact te maximaliseren.' },

    { type: 'comparative', items: [
        {
            title: 'Voor Sociale Netwerken',
            description: 'Instagram, TikTok, Facebook - vierkante formaten',
            icon: 'mdi:share-all',
            points: [
                '1200px is perfect voor de Instagram-feed',
                'Vierkant formaat voorkomt bijsnijden bij het posten',
                'Aanpasbare randen voor branding'
            ],
            highlight: true
        },
        {
            title: 'Voor Portfolio\'s',
            description: 'Visuele etalages voor fotografen en ontwerpers',
            icon: 'mdi:briefcase-outline',
            points: [
                'Laat meerdere invalshoeken van een project zien',
                'Coherent visueel narratief',
                'Professionele digitale boekdruk'
            ]
        },
        {
            title: 'Voor Persoonlijke Cadeaus',
            description: 'Afdrukken, lijsten en digitale albums',
            icon: 'mdi:gift-outline',
            points: [
                'Herinneringen aan evenementen (bruiloften, reizen)',
                'Hoge resolutie klaar voor afdrukken',
                'Instant ontwerp zonder handmatige inspanning'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Aanpassing: Randen en Kleuren', level: 3 },
    { type: 'table', headers: ['Element', 'Visueel Effect', 'Aanbeveling'], rows: [
        ['Witte Rand', 'Schoon, minimalistisch, modern', 'Sociale netwerken, digitale portfolio\'s'],
        ['Zwarte Rand', 'Dramatisch, professioneel, artistiek', 'Kunstfotografie, mode, luxe'],
        ['Neutrale Rand (grijs)', 'Veelzijdig, academisch, zakelijk', 'Business, onderwijs, neutraliteit'],
        ['Geen Rand', 'Fusie, continuïteit, meeslepend', 'Uniforme achtergrond, vloeiende foto\'s']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Professionele vooraf gedefinieerde ontwerpen - geen kennis van compositie nodig',
            con: 'Opties beperkt tot vooraf vastgestelde rasters'
        },
        {
            pro: '1200px resolutie klaar voor sociale netwerken zonder herschaling',
            con: 'Niet zo aanpasbaar als Photoshop'
        },
        {
            pro: '100% lokale verwerking - privacy, snelheid, geen limieten',
            con: 'Vereist een moderne browser'
        },
        {
            pro: 'Helemaal gratis, geen watermerken, geen reclame',
            con: 'Geen individuele bewerkingsopties (bijsnijden, draaien)'
        }
    ], proTitle: 'Voordelen', conTitle: 'Beperkingen' },

    { type: 'diagnostic', variant: 'success', title: 'Klaar voor Sociale Netwerken', icon: 'mdi:check-circle-outline', badge: 'Geoptimaliseerd', html: '1200x1200px is de ideale resolutie voor Instagram. Het ondersteunt elke beeldverhouding, maar de vierkante uitvoer maximaliseert de impact van de feed, elimineert automatisch bijsnijden en ziet er net zo goed uit op desktop, tablet als mobiel.' },

    { type: 'glossary', items: [
        {
            term: 'Visuele Compositie',
            definition: 'Kunst van het organiseren van elementen (kleur, vorm, ruimte) om het oog van de kijker te leiden en een emotionele intentie te communiceren.'
        },
        {
            term: 'Regel van Derden',
            definition: 'Compositieprincipe: verdeelt het beeld in 9 gelijke gebieden (3x3). Plaats onderwerpen op snijlijnen voor maximale impact.'
        },
        {
            term: 'Symmetrisch Raster',
            definition: 'Gelijke ruimtelijke verdelingen. Rustgevend, ordelijk. Ideaal voor paren van foto\'s of even getallen.'
        },
        {
            term: 'Asymmetrisch Raster',
            definition: 'Ongelijke verdelingen. Dynamisch, interessant, visueel. Ideaal voor 5+ foto\'s met een variëteit aan formaten.'
        },
        {
            term: 'Visuele Balans',
            definition: 'Perceptueel evenwicht van visueel gewicht. Lichte + donkere afbeelding = balans; grote + kleine = balans.'
        }
    ] },

    { type: 'message', title: 'Direct Visueel Narratief', ariaLabel: 'Informatie over compositie en collages', html: 'Elke collage vertelt een verhaal. Onze automatische ontwerper zorgt ervoor dat je visuele verhalen gebalanceerd, professioneel en klaar voor de wereld zijn. Zonder dat je hoeft te wachten op het werk van een grafisch ontwerper.' },

    { type: 'title', text: 'Creëer, Deel, Inspireer', level: 3 },
    { type: 'paragraph', html: 'Een goed gemaakte collage is het verschil tussen een vergeetbare post en een post die je volgers onthouden en delen. Gebruik slimme compositie voor je visuele verhalen om impact te maken.' }
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

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Veelgestelde Vragen",
    faq: "Referenties",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

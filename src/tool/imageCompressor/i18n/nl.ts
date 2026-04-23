import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-image-compressor-reduceer-bestandsgrootte-zonder-kwaliteitsverlies';
const title = 'Online Image Compressor: Verminder gewicht zonder kwaliteitsverlies';
const description = 'Optimaliseer en comprimeer je JPG-, PNG- och WebP-foto\'s gratis. Verklein de bestandsgrootte om de laadsnelheid van je webpagina lokaal te verbeteren.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimaliseer Afbeeldingen",
    dropSubtitle: "Sleep je foto\'s hierheen om hun gewicht direct te verminderen.",
    settingsTitle: "Compressie-instellingen",
    qualityLabel: "Visuele Kwaliteit",
    widthLabel: "Maximale Breedte (Pixels)",
    convertToWebpLabel: "Converteer naar WebP",
    compressionLabel: "Compressie",
    compressBtn: "Comprimeer Afbeelding",
    processingLabel: "Verwerken...",
    resultsTitle: "Geoptimaliseerde Afbeeldingen",
    originalSizeLabel: "Originele Grootte",
    newSizeLabel: "Nieuwe Grootte",
    reductionLabel: "Besparing",
    downloadBtn: "Downloaden",
    addMoreBtn: "Meer toevoegen",
    browseFilesBtn: "Bestanden bladeren",
    processedFilesTitle: "Verwerkte Bestanden",
    downloadAllBtn: "Alles Downloaden",
    adjustThisImage: "Pas deze afbeelding aan",
    downloadTitle: "Download",
    maxWidthLabel: "Max breedte (px)",
    closeBtn: "Sluiten",
    totalSavingsLabel: "Totale besparing",
    noSavings: "Geen netto besparing",
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Hoe werkt lossless compressie?",
        answer: "We gebruiken algoritmen die onnodige metadata verwijderen en de pixelcodering optimaliseren. Bij het kiezen van WebP wordt een geavanceerdere compressietechnologie gebruikt dan bij traditionele formaten.",
    },
    {
        question: "Worden mijn afbeeldingen geüpload naar een server?",
        answer: "Nee. Alle verwerking vindt 100% plaats in je browser (Client-Side). Je foto's verlaten nooit je computer, wat absolute privacy garandeert.",
    },
    {
        question: "Waarom zou ik converteren naar WebP?",
        answer: "WebP is het moderne standaardformaat voor het web. Het biedt een superieure kwaliteit ten opzichte van JPG en PNG met een gewicht dat tot 30% lager ligt, wat de laadtijd van de pagina versnelt.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Upload de afbeelding",
        text: "Upload het bestand dat je wilt comprimeren (JPG, PNG of WebP).",
    },
    {
        name: "Pas de kwaliteit aan",
        text: "Gebruik de schuifregelaar om de perfecte balans te vinden tussen bestandsgrootte en visuele kwaliteit (aanbevolen: 75 85%).",
    },
    {
        name: "Wijzig grootte (optioneel)",
        text: "Als de afbeelding erg groot is, kun je een maximale breedte specificeren om de resolutie te verlagen.",
    },
    {
        name: "Download het resultaat",
        text: "Druk op de downloadknop om je geoptimaliseerde afbeelding klaar voor gebruik te ontvangen.",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionele Web Afbeeldingsoptimalisatie',
        items: [
            'Intelligente JPG-, PNG- en WebP-compressie',
            'Verminder het gewicht met 50-80% met behoud van visuele kwaliteit',
            '100% lokale verwerking - privacy gegarandeerd',
            'Verbeter Core Web Vitals en SEO-positionering'
        ]
    },
    { type: 'title', text: 'Afbeeldingsoptimalisatie: Web Snelheid en Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'In het tijdperk van digitale directheid verliest een trage website gebruikers. Niet-geoptimaliseerde afbeeldingen vertegenwoordigen 60-70% van het totale gewicht van een webpagina. Het optimaliseren ervan is de eerste stap om je Google-metrieken (LCP, CLS) en je positionering in de zoekresultaten te verbeteren.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Typische Gewichtsreductie', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Lokale Privacy', icon: 'mdi:lock' },
        { value: '+30%', label: 'Sneller dan JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Uitleg over Compressieformaten', level: 3 },
    { type: 'table', headers: ['Formaat', 'Compressie', 'Use Cases', 'Compatibiliteit'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Camerafoto\'s, redactionele inhoud', 'Universeel (100%)'],
        ['PNG', 'Lossless 30-50%', 'Graphics, logo\'s, transparanties', 'Universeel (100%)'],
        ['WebP', 'Lossy/Lossless 25-35% meer', 'Modern web, sociale netwerken', '95% moderne browsers'],
        ['AVIF', 'Lossy/Lossless 20% verbetering', 'Volgende generatie web', 'Alleen nieuwe browsers']
    ] },

    { type: 'card', title: 'Waarom WebP de Toekomst is', html: 'Google heeft WebP specifiek voor het web ontwikkeld. Het biedt een superieure compressie ten opzichte van JPEG en PNG, met behoud of verbetering van visuele kwaliteit. Het is 25-35% kleiner dan JPEG-equivalenten. Moderne browsers ondersteunen het voor 95%.' },

    { type: 'title', text: 'Lossy vs Lossless Compressie', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Lossy Compressie',
            description: 'JPG, WebP - Verwijdert onmerkbare visuele informatie',
            icon: 'mdi:compress',
            points: [
                'Reduceert 70-90% van het originele gewicht',
                'Onmerkbaar voor het menselijk oog als de kwaliteit >75% blijft',
                'Ideaal voor realistische fotografie',
                'Niet aanbevolen voor logo\'s of scherpe tekst'
            ],
            highlight: true
        },
        {
            title: 'Lossless Compressie',
            description: 'PNG, WebP lossless - Behoudt 100% visuele data',
            icon: 'mdi:shield',
            points: [
                'Reduceert 20-50% van het gewicht',
                'Perfecte kwaliteit, geen degradatie',
                'Ideaal voor graphics, logo\'s, transparanties',
                'Zwaardere bestanden dan bij Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Impact op SEO en Conversie', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google straft trage sites af. Geoptimaliseerde afbeeldingen verbeteren LCP (Largest Contentful Paint) direct.',
        '<strong>Bouncepercentage:</strong> Elke seconde vertraging = 7% meer bounce. Snellere afbeeldingen = minder gebruikers die vertrekken.',
        '<strong>Zoekranking:</strong> Snelheid is een rankingfactor. Het optimaliseren van afbeeldingen geeft een boost aan de positionering.',
        '<strong>Conversie:</strong> Snellere laadtijden = meer conversies. Studies tonen +10% conversie aan met optimalisatie.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Totale privacy: 100% lokale verwerking, geen cloudservers',
            con: 'Vereist browser met ondersteuning voor Canvas API (het is universeel)'
        },
        {
            pro: 'WebP is 25-35% kleiner dan JPEG bij gelijke kwaliteit',
            con: 'Oude Safari en IE ondersteunen geen WebP (fallback beschikbaar)'
        },
        {
            pro: 'Directe verwerking van meerdere afbeeldingen',
            con: 'Zeer grote afbeeldingen (>50MB) kunnen wachttijd vereisen'
        },
        {
            pro: 'Optioneel herschalen: vermindert zowel de resolutie als de compressie',
            con: 'Herschalen verliest informatie - beter om de resolutie bij de bron te optimaliseren'
        }
    ], proTitle: 'Voordelen', conTitle: 'Beperkingen' },

    { type: 'diagnostic', variant: 'warning', title: 'Let op: Overmatige Compressie Verslechtert de Kwaliteit', icon: 'mdi:alert', badge: 'Kwaliteit', html: 'Houd de kwaliteit >75% voor fotografie en >85% voor redactionele inhoud. Daaronder worden compressie-artefacten (vlekken, banding) zichtbaar. Een afbeelding die er goed uitziet in miniatuur kan er slecht uitzien wanneer deze groot is.' },

    { type: 'glossary', items: [
        {
            term: 'Lossy Compressie',
            definition: 'Verwijdert visuele gegevens die het menselijk oog als \"ruis\" waarneemt. Ideaal voor fotografie. JPEG, lossy WebP, HEIC zijn lossy.'
        },
        {
            term: 'Lossless Compressie',
            definition: 'Vermindert de grootte zonder visuele informatie te verliezen. PNG en lossless WebP. Ideaal voor graphics, logo\'s, transparanties.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Metrieken voor gebruikerservaring: LCP (laadsnelheid), FID (interactielatentie), CLS (visuele stabiliteit). Beïnvloeden de SEO-ranking.'
        },
        {
            term: 'WebP',
            definition: 'Formaat ontwikkeld door Google. 25-35% kleiner dan JPEG. Ondersteund door 95% van de moderne browsers (alle behalve IE).'
        },
        {
            term: 'Compressie-artefacten',
            definition: 'Visuele defecten veroorzaakt door overmatige compressie: vlekken, kleurbanding, vage randen. Onmerkbaar bij >75% kwaliteit.'
        }
    ] },

    { type: 'message', title: 'Professionele Web Optimalisatie', ariaLabel: 'Informatie over afbeeldingsoptimalisatie voor SEO', html: 'Het is geen technische ijdelheid: het comprimeren van afbeeldingen is een directe investering in de gebruikerservaring en ranking in Google. Elke kilobyte telt op mobiel. Onze tool verandert wat vroeger professionele software ($$$) vereiste in een gratis 3-klikproces.' },

    { type: 'title', text: 'Klaar voor het Moderne Web', level: 3 },
    { type: 'paragraph', html: 'Gebruik intelligente compressie en WebP-formaat zodat je online aanwezigheid snel, responsief en concurrerend is in de zoekresultaten. Professionele kwaliteit, minimaal gewicht, direct laden.' }
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

export const content: ImageCompressorLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'video-samenvoegen-online';
const title = 'Video\'s samenvoegen online: Voeg meerdere video\'s snel en gratis samen';
const description = 'Voeg meerdere video\'s samen tot één, gratis, online en lokaal. Geen watermerken, geen uploads, 100% privé in uw browser.';

const ui: VideoMergerUI = {
    uploadTitle: "Upload uw videobestanden",
    uploadFormats: "Sleep meerdere video's of klik om ze te selecteren",
    privacyNote: "Uw video's worden 100% lokaal verwerkt. Er wordt niets naar het internet geüpload.",
    addMoreBtn: "Meer video's toevoegen",
    mergeBtn: "Video's nu samenvoegen",
    mergingStatus: "Video's samenvoegen...",
    downloadBtn: "Samengevoegde video downloaden",
    resetBtn: "Opnieuw beginnen",
    emptyList: "Sleep of selecteer video's om ze te beginnen samenvoegen.",
    listTitle: "Volgorde van de samen te voegen video's",
    optionsTitle: "Uitvoerinstellingen",
    optionResolution: "Resolutie",
    optionFps: "Frames per seconde (FPS)",
    optionsQualityNote: "De uiteindelijke resolutie wordt aangepast met behoud van de oorspronkelijke beeldverhouding in letterbox-formaat als de video's verschillende afmetingen hebben.",
    faqTitle: "Veelgestelde vragen over het samenvoegen van video's",
    bibliographyTitle: "Bibliografie & Referenties",
    resolutionWarning: "Waarschuwing: Sommige video's hebben verschillende resoluties en worden automatisch aangepast."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Is het veilig om mijn video's naar deze tool te uploaden?",
        answer: "Ja, het is volkomen veilig. De tool werkt 100% lokaal in uw browser. Uw video's worden nooit via het internet verzonden of op een server opgeslagen.",
    },
    {
        question: "Wat gebeurt er als mijn video's verschillende afmetingen hebben?",
        answer: "Onze tool schaalt de video's automatisch zodat ze passen bij de gekozen uitvoerresolutie. Bij verhoudingen die niet precies overeenkomen, worden zwarte randen (letterboxing) toegevoegd om de oorspronkelijke beeldverhouding te behouden.",
    },
    {
        question: "Blijft de audio van de video's behouden bij het samenvoegen?",
        answer: "Ja. De audiotracks van elke video worden vastgelegd en sequentieel gemixt, perfect synchroon met elk beeldsegment.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Selecteer of sleep uw video's",
        text: "Laad alle videobestanden die u wilt samenvoegen direct vanaf uw computer of mobiel.",
    },
    {
        name: "Bepaal de volgorde",
        text: "Orden de geüploade video's met behulp van de omhoog- of omlaag-knoppen in de lijst om de afspeelvolgorde te bepalen.",
    },
    {
        name: "Pas opties aan",
        text: "Kies de uitvoerresolutie en frames per seconde (FPS) van de samengevoegde video.",
    },
    {
        name: "Samenvoegen en exporteren",
        text: "Druk op de knop 'samenvoegen'. Wacht tot de real-time verwerking is voltooid en download het resulterende bestand.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '100% Lokaal Professioneel Video\'s Samenvoegen',
        items: [
            'Real-time verwerking direct in uw browser',
            'Ondersteunt meerdere video\'s van verschillende groottes en formaten (MP4, WEBM, MOV)',
            'Selecteerbare uitvoerresolutie (720p, 1080p, 2K, 4K)',
            'Audiotracks perfect sequentieel gecombineerd'
        ]
    },
    { type: 'title', text: 'Video\'s Online Gratis Samenvoegen: Grenzeloze Eenvoud en Privacy', level: 2 },
    { type: 'paragraph', html: 'Vraagt u zich af <strong>hoe u twee video\'s tot één kunt samenvoegen</strong> zonder complicaties? U hoeft geen zware programma\'s of betaalde applicaties meer te downloaden. Met onze tool om <strong>gratis online video\'s samen te voegen</strong>, kunt u in enkele seconden alle benodigde clips aaneenschakelen. Omdat het 100% lokaal werkt, hoeft u uw bestanden naar geen enkele server te uploaden, wat absolute privacy garandeert en u in staat stelt om <strong>grote video\'s samen te voegen</strong> zonder wachttijden voor het uploaden.' },
    
    { type: 'title', text: 'Video\'s Samenvoegen Zonder Watermerk', level: 3 },
    { type: 'paragraph', html: 'Een van de grootste nadelen van andere applicaties is dat ze uw content verpesten. Bij ons kunt u <strong>online video\'s samenvoegen zonder watermerk</strong>. Het bestand dat u downloadt is precies uw creatie: schoon, professioneel en klaar om te delen op YouTube, Instagram, TikTok of voor persoonlijk gebruik.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privé en Lokaal', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Geen Upload Data', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Maximale Resolutie', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Veelvoorkomende Toepassingen voor het Samenvoegen van Video\'s', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Sociale Media',
            description: 'Snel samenvoegen van stories, TikToks of reels tot één video',
            icon: 'mdi:instagram',
            points: [
                'Voeg kleine clips samen die met de mobiel zijn opgenomen',
                'Bereid sequentiële content voor op Instagram of YouTube',
                'Samenvoegen zonder vervelende watermerken'
            ]
        },
        {
            title: 'Presentaties',
            description: 'Voeg introducties en demo-opnamen samen tot één bestand',
            icon: 'mdi:presentation',
            points: [
                'Voeg een geanimeerde introductie samen met de rest van de presentatie',
                'Voeg korte software-demo\'s samen',
                'Schone export in standaard MP4/WEBM-formaat'
            ],
            highlight: true
        },
        {
            title: 'Familiecompilaties',
            description: 'Voeg meerdere video\'s van uw vakanties of feesten samen',
            icon: 'mdi:home-heart',
            points: [
                'Maak één video met alle momenten van het feest',
                'Groepeer reisherinneringen chronologisch',
                'Eenvoudig te delen omdat het één bestand is'
            ]
        },
        {
            title: 'Educatieve Video\'s',
            description: 'Schakel korte trainingshoofdstukken of lessen aaneen',
            icon: 'mdi:school',
            points: [
                'Groepeer kleine onafhankelijke tutorials',
                'Voeg een afsluitende clip toe aan uw lessen',
                'Structureer uw cursus professioneel'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'De Beste App om Video\'s vanuit de Browser Samen te Voegen', level: 2 },
    { type: 'paragraph', html: 'Dit is niet zomaar een webpagina; het is een echte <strong>app om video\'s samen te voegen</strong> die rechtstreeks vanuit uw browser werkt dankzij moderne HTML5-video-API\'s. U kunt <strong>MP4-video\'s samenvoegen</strong>, WEBM en meer, resoluties mixen (ons systeem past automatisch letterboxing toe als de afmetingen variëren) en de frames per seconde (FPS) van uw definitieve export kiezen.' },

    { type: 'title', text: 'Vergelijking van methodes', level: 3 },
    { type: 'table', headers: ['Kenmerken', 'Onze Lokale Tool', 'Klassieke Online Converters', 'Professionele Editors'], rows: [
        ['Privacy', 'Totaal (Verwerkt op uw apparaat)', 'Laag (Vereist upload naar server)', 'Totaal (Geïnstalleerd op uw apparaat)'],
        ['Netwerkverbruik', 'Nul (Geen gigabyte uploads)', 'Zeer hoog (Up- en download)', 'Nul'],
        ['Watermerk', 'NEE (100% schoon)', 'Ja (In gratis versies)', 'NEE (Als u een licentie koopt)'],
        ['Prijs', '100% Gratis', 'Gratis met limieten of abonnement', 'Meestal duur'],
        ['Leercurve', 'Zeer laag (Slepen, ordenen en samenvoegen)', 'Laag', 'Zeer hoog (Vereist training)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Gegarandeerde privacy: Maximale veiligheid omdat geen enkel bestand uw apparaat verlaat',
            con: 'De snelheid voor het samenvoegen van grote video\'s is afhankelijk van het RAM-geheugen en de processor van uw computer'
        },
        {
            pro: 'Professionele resultaten: 100% gratis, zonder registratie en zonder watermerken',
            con: 'Bij het samenvoegen van video\'s met verschillende afmetingen worden zwarte randen (letterboxing) toegepast'
        },
        {
            pro: 'Veelzijdigheid: Snelle export met efficiënte codering, geoptimaliseerd voor web en sociale media',
            con: 'Staat niet toe om complexe overgangen (3D fades) of filmische visuele effecten toe te voegen'
        }
    ], title: 'Voordelen en Overwegingen' },

    { type: 'title', text: 'Begin Vandaag Nog met het Samenvoegen van Uw Video\'s', level: 2 },
    { type: 'paragraph', html: 'Er zijn geen excuses meer om honderden ongeorganiseerde videofragmenten te hebben. Upload uw bestanden, plaats ze in de gewenste volgorde en druk op de knop. Ontdek de snelste, veiligste en meest private manier om <strong>online video\'s samen te voegen</strong>.' }
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

export const content: VideoMergerLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'srt-ondertitels-online-synchroniseren-timing-aanpassen-gratis';
const title = 'SRT Ondertitels Online Synchroniseren: Timing Gratis Aanpassen';
const description = 'Online tool voor het vervroegen of vertragen van SRT ondertitels. Corrigeer eenvoudig de tijdsafwijking en download het gesynchroniseerde bestand direct.';

const ui: SubtitleSyncUI = {
    dropTitle: "Sleep je .SRT bestand hierheen",
    dropSubtitle: "of klik om te bladeren",
    adjustTitle: "Tijd Aanpassen",
    offsetLabel: "Verschuiving (seconden)",
    offsetHelp: "Gebruik negatieve waarden om te vervroegen (bijv. -1.5) and positieve waarden om te vertragen.",
    linesStat: "Regels",
    firstStat: "Eerste Ondertitel",
    lastStat: "Laatste Ondertitel",
    originalLabel: "ORIGINEEL",
    resultLabel: "RESULTAAT",
    downloadButton: "Gecorrigeerde Versie Downloaden",
    previewBadge: "PREVIEW",
    unitSeconds: "sec"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Hoe kan ik mijn ondertitels synchroniseren als de audio voorloopt?",
        answer: "Als de audio voor de tekst verschijnt, moet je de ondertitels vertragen. Voer een positieve waarde in in de calculator (bijv. 2.0 om ze 2 seconden te vertragen).",
    },
    {
        question: "Welke bestandsformaten accepteert deze tool?",
        answer: "Momenteel is de tool geoptimaliseerd voor .SRT (SubRip) bestanden, de meest voorkomende standaard in videospelers en streamingplatforms.",
    },
    {
        question: "Is het veilig om mijn ondertitelbestanden te uploaden?",
        answer: "Ja, omdat de verwerking 100% lokaal op je apparaat gebeurt. Je bestanden worden niet naar een server verzonden; de synchronisatie vindt direct in je browser plaats.",
    },
    {
        question: "Kan ik slechts een deel van het bestand synchroniseren?",
        answer: "Nee, deze tool past een constante verschuiving toe op het hele bestand. Als de afwijking progressief is, heb je mogelijk geavanceerdere bewerking nodig.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Upload je SRT bestand",
        text: "Sleep het ondertitelbestand dat je wilt corrigeren naar het uploadgebied.",
    },
    {
        name: "Identificeer de afwijking",
        text: "Meet in je speler hoeveel de ondertitels achterlopen of voorlopen ten opzichte van de audio.",
    },
    {
        name: "Pas de verschuiving aan",
        text: "Voer positieve (vertraging) of negatieve (vervroeging) seconden in het bedieningspaneel in.",
    },
    {
        name: "Download het bestand",
        text: "Controleer in de preview of de tijden correct zijn en klik op downloaden om je nieuwe SRT te krijgen.",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionele Ondertitelsynchronisatie',
        items: [
            'Directe correctie van audio-ondertitel afwijkingen',
            'Ondersteunt standaard SRT (SubRip) bestanden',
            '100% lokale verwerking - maximale privacy',
            'Geen installatie, geen abonnement, volledig gratis'
        ]
    },
    { type: 'title', text: 'Perfecte SRT Ondertitelsynchronisatie', level: 2 },
    { type: 'paragraph', html: 'Er is niets frustrerender voor een kijker dan dialogen te zien die niet overeenkomen met de stemmen. Ondertitelafwijkingen ontstaan meestal door verschillen tussen videoversies: variaties in framerate, reclamefragmenten, productie-intro\'s of wijzigingen in compressie. Met deze tool los je het probleem in seconden op.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Lokale Verwerking', icon: 'mdi:shield' },
        { value: 'Milliseconden', label: 'Precisie', icon: 'mdi:clock-outline' },
        { value: 'Elke Grootte', label: 'GEEN Bestandslimiet', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Vervroegen vs Vertragen: Praktische Gids', level: 3 },
    { type: 'paragraph', html: 'De eerste stap is het correct identificeren van het type afwijking. Dit is de logica:' },
    { type: 'list', items: [
        '<strong>Vertragen (Positieve Waarde):</strong> Wanneer je de tekst ziet verschijnen VOORDAT je het geluid hoort. De ondertitels zijn te vroeg. Voorbeeld: +2.0 seconden.',
        '<strong>Vervroegen (Negatieve Waarde):</strong> Wanneer je de tekst ziet verschijnen NADAT je het geluid hoorde. De ondertitels zijn te laat. Voorbeeld: -2.0 seconden.',
        '<strong>Testen en Aanpassen:</strong> Begin met kleine stapjes (0.5s) and gebruik de preview om te valideren.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Privacy op Professioneel Niveau', html: 'Door het bestand te verwerken via client-side JavaScript, garanderen we dat de inhoud van je ondertitels nooit je computer verlaat. Essentieel voor vertalers en professionals die met vertrouwelijk materiaal werken of onder een NDA vallen.' },

    { type: 'title', text: 'Veelvoorkomende Use Cases', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Vertalers en Ondertitelaars',
            description: 'Synchroniseer vertalingen na het werken met meerdere videoversies',
            icon: 'mdi:translate',
            points: [
                'SRT bestanden uit verschillende bronnen',
                'Content versioning (bioscoop vs streaming)',
                'Snelle levering zonder van tool te wisselen'
            ]
        },
        {
            title: 'Content Creators',
            description: 'Herstel ondertitels wanneer de video is verwerkt met een andere framerate',
            icon: 'mdi:video',
            points: [
                'Hergebruik bestaande ondertitels',
                'Formaatwijzigingen (720p naar 1080p)',
                'Voorkom handmatig retimen van meer dan 1000 regels'
            ],
            highlight: true
        },
        {
            title: 'Incidentele Gebruikers',
            description: 'Corrigeer gedownloade ondertitels die niet perfect passen',
            icon: 'mdi:account',
            points: [
                'Generieke niet-synchrone ondertitels',
                'Films uit verschillende regio\'s (PAL vs NTSC)',
                'Streaming met bewerkte versies'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Waarom Ondertitels uit Synchronisatie Lopen', level: 3 },
    { type: 'table', headers: ['Veelvoorkomende Oorzaak', 'Technische Beschrijving', 'Oplossing'], rows: [
        ['Verschil in Framerate', '23.976 fps vs 25 fps - geaccumuleerd verschil', 'Correctie via één verschuiving (deze tool)'],
        ['Editoriale Wijzigingen', 'Reclameblokken of verwijderde/toegevoegde content', 'Handmatige berekening + synchronisatie'],
        ['Regionale Versie', 'PAL (25 fps Europa) vs NTSC (29.97 fps USA)', 'Eenvoudige wiskundige verschuiving'],
        ['Verandering van Resolutie', 'Re-encoding met verschillende verwerkingssnelheid', 'Herberekening van origineel bestand']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Technische Beperkingen om Rekening mee te Houden', icon: 'mdi:information', badge: 'Belangrijk', html: 'Deze tool past een <strong>constante</strong> verschuiving toe op het hele bestand. Als de afwijking <strong>progressief</strong> is (begint goed maar loopt geleidelijk uit de pas), wijst dit op een aanhoudend verschil in framerate. In dat geval moet het originele bestand opnieuw worden verwerkt in professionele montagesoftware.' },

    { type: 'proscons', items: [
        {
            pro: 'Extreme snelheid - verwerkt grote bestanden in milliseconden',
            con: 'Past alleen een vaste verschuiving aan, geen progressieve'
        },
        {
            pro: 'Totale privacy - inhoud verlaat nooit je browser',
            con: 'Vereist een moderne browser met JavaScript ingeschakeld'
        },
        {
            pro: 'Universeel formaat - werkt met elke standaard SRT',
            con: 'Ondersteunt geen andere formaten (ASS, VTT, SCC, etc.)'
        },
        {
            pro: 'Volledig gratis, geen advertenties, geen tracking',
            con: 'Geen wijzigingshistorie of versioning'
        }
    ], proTitle: 'Voordelen', conTitle: 'Beperkingen' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Meest universele ondertitelformaat: tekstbestand met volgnummers, tijden (hh:mm:ss,mmm) en tekst. De facto standaard in spelers en platforms.'
        },
        {
            term: 'Verschuiving (Offset)',
            definition: 'Vaste hoeveelheid tijd die wordt opgeteld bij of afgetrokken van alle tijden in het bestand. Kan positief zijn (vertraging) of negatief (vervroeging).'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Frames per seconde. 24p (cinema), 25p (PAL/Europa), 29.97p (NTSC/USA), 60p (vloeiende video). Verschillen veroorzaken cumulatieve afwijkingen.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Regionale televisiestandaarden: PAL (25 fps) in Europa; NTSC (29.97 fps) in de VS. ~4% snelheidsverschil.'
        },
        {
            term: 'Progressieve Afwijking',
            definition: 'Wanneer de synchronisatie correct begint maar geleidelijk uit de pas loopt. Wijst op een framerateverschil, vereist herverwerking.'
        }
    ] },

    { type: 'message', title: 'Professionele Bewerking met Volledige Controle', ariaLabel: 'Technische informatie over synchronisatie', html: 'Onze aanpak is eenvoudig maar krachtig: één enkele verschuiving, direct toegepast, 100% verwerkt in je browser. Geen cloud, geen opslag, geen tracking. Simpelweg uploaden, aanpassen, downloaden. Volledige controle over je content.' },

    { type: 'title', text: 'Conclusie: Films Zonder Onderbrekingen', level: 3 },
    { type: 'paragraph', html: 'Perfecte ondertitelsynchronisatie is essentieel voor een hoogwaardige audiovisuele ervaring. Met deze tool transformeer je een frustrerende ervaring in een perfecte filmavond, zonder de noodzaak van dure of ingewikkelde software.' }
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

export const content: SubtitleSyncLocaleContent = {
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

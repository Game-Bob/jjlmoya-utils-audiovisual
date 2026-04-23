import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-frame-extractor-captureer-hd-stills';
const title = 'Video Frame Extractor: Leg HD stills vast';
const description = 'Extraheer individuele beelden uit je video\'s met frame-precieze nauwkeurigheid. Leg perfecte momenten lokaal en gratis vast in HD.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Upload een videobestand",
    uploadFormats: "MP4, WebM, MOV of MKV (Max. 500MB)",
    privacyNote: "De video wordt niet naar internet geüpload, deze wordt verwerkt in je browser.",
    playLabel: "Afspelen",
    pauseLabel: "Pauze",
    captureBtn: "Frame Vastleggen",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Automatische Extractie",
    batchEvery: "Elke",
    batchStart: "Start Reeks",
    batchProcessing: "Extraheren...",
    galleryTitle: "Vastgelegde Frames",
    galleryEmpty: "Captures verschijnen hier zodra je ze maakt.",
    downloadAll: "Download Alles",
    downloadHD: "Download HD Afbeelding",
    resetBtn: "Upload een andere video"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Kan ik frames extraheren uit lange video's?",
        answer: "Ja, zolang je browser genoeg RAM heeft om de video te laden. We raden bestanden tot 500 MB aan voor optimale prestaties.",
    },
    {
        question: "In welke resolutie worden de captures opgeslagen?",
        answer: "Captures worden gemaakt op de oorspronkelijke resolutie van de video. Als je video 4K is, krijg je een hoogwaardige 4K-afbeelding.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Upload je video",
        text: "Selecteer het videobestand van je apparaat. We uploaden het naar geen enkele server.",
    },
    {
        name: "Navigeer naar het exacte moment",
        text: "Gebruik de tijdlijn of de ±1 frame knoppen voor chirurgische precisie.",
    },
    {
        name: "Leg het frame vast",
        text: "Druk op de capture knop om het moment op te slaan in de onderstaande galerij.",
    },
    {
        name: "Download in hoge kwaliteit",
        text: "Download individuele captures of de volledige sessie in geoptimaliseerd WebP formaat.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionele Video Frame Extractie',
        items: [
            'Nauwkeurigheid op één frame (±1 frame) voor de perfecte capture',
            'Ondersteunt MP4, WebM, MOV, MKV tot 500MB',
            'Oorspronkelijke videoresolutie behouden (SD, HD, 4K)',
            'Automatische batch-extractie op aangepaste intervallen'
        ]
    },
    { type: 'title', text: 'Frame extractie: Bevries de Tijd in Video', level: 2 },
    { type: 'paragraph', html: 'Soms zegt een beeld meer dan duizend woorden. Onze tool gebruikt de lokale kracht van je browser om precisieframes te extraheren zonder professionele software.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Frame-Precisie', icon: 'mdi:target' },
        { value: '100%', label: 'Eigen Resolutie', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Ondersteunde Bestanden', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Professionele Toepassingen', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Cinema en Fotografie',
            description: 'Leg frames vast als visuele referentie of compositie',
            icon: 'mdi:film',
            points: [
                'Extraheer stills voor filmmarketing',
                'Referenties voor scènecompositie',
                'Frame-voor-frame analyse'
            ]
        },
        {
            title: 'Digitale Content',
            description: 'Maak thumbnails en covers voor social media',
            icon: 'mdi:youtube',
            points: [
                'Hoge resolutie YouTube thumbnails',
                'Social media covers',
                'Afbeeldingen voor presentaties'
            ],
            highlight: true
        },
        {
            title: 'Technische Documentatie',
            description: 'Extraheer frames uit tutorials en demonstraties',
            icon: 'mdi:book-open',
            points: [
                'Screenshots van tutorial-video\'s',
                'Stapsgewijze visuele documentatie',
                'Real-time bewegingsanalyse'
            ]
        },
        {
            title: 'Sport en Actie',
            description: 'Leg het exacte moment van maximale actie vast',
            icon: 'mdi:dumbbell',
            points: [
                'Frame-voor-frame sporttechniek analyse',
                'Vastleggen van heroïsche momenten',
                'Bewegingsstudie'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Ondersteunde Videoformaten', level: 3 },
    { type: 'table', headers: ['Formaat', 'Extensie', 'Compatibiliteit', 'Notities'], rows: [
        ['MPEG-4', 'MP4', 'Universeel (100%)', 'Beste compressie, veelgebruikt'],
        ['WebM', 'WebM', 'Moderne browsers', 'Superieure compressie, kleiner'],
        ['QuickTime', 'MOV', 'Safari', 'Apple standaard'],
        ['Matroska', 'MKV', 'Moderne browsers', 'Flexibele container']
    ] },

    { type: 'card', title: 'Frame Precisie', html: 'Eén frame vooruit of achteruit bewegen (±1 frame) is essentieel om het perfecte moment vast te leggen: een sprong, een glimlach, een gebaar. Onze tool geeft je millimeternauwkeurige controle.' },

    { type: 'proscons', items: [
        {
            pro: 'Totale privacy: de video wordt 100% lokaal verwerkt in je browser',
            con: 'Beperkt tot beschikbare RAM-geheugen (~500MB aanbevolen)'
        },
        {
            pro: 'Eigen resolutie behouden: SD, HD, 4K zonder hercompressie',
            con: 'Vereist moderne browser met HTML5 Video ondersteuning'
        },
        {
            pro: 'Automatische batch-extractie op aangepaste intervallen',
            con: 'Voor geavanceerde bewerking (trimmen), heb je een video-editor nodig'
        },
        {
            pro: 'Exporteer frames in geoptimaliseerd WebP of ongecomprimeerd PNG',
            con: 'Eén frame per keer (geen export van geautomatiseerde GIF-reeksen)'
        }
    ], proTitle: 'Voordelen', conTitle: 'Beperkingen' },

    { type: 'diagnostic', variant: 'info', title: 'Resolutie en Frame Rate', icon: 'mdi:information', badge: 'Technisch', html: 'De uiteindelijke frame-resolutie hangt af van de originele video. Wij bewaren de eigen informatie van de video zonder upscaling.' },

    { type: 'glossary', items: [
        {
            term: 'Frame',
            definition: 'Individueel beeld in een videoreeks. Een 24 fps video bevat 24 frames per seconde.'
        },
        {
            term: 'FPS (Frames Per Second)',
            definition: 'Beelden per seconde. Bepaalt de vloeiendheid van de beweging.'
        },
        {
            term: 'Video Codec',
            definition: 'Compressie-algoritme: H.264, VP9, HEVC. Bepaalt bestandsgrootte en kwaliteit.'
        },
        {
            term: 'Bitrate',
            definition: 'Hoeveelheid data verwerkt per seconde. Hogere bitrate = hogere kwaliteit.'
        },
        {
            term: 'Videoresolutie',
            definition: 'Pixelafmetingen: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Professionele Frame extractie', ariaLabel: 'Technische info over video-extractie', html: 'Je hebt geen complexe converters nodig. Een perfect frame is slechts 3 klikken verwijderd: upload video, navigeer, leg vast.' },

    { type: 'title', text: 'Videomomenten Bevriezen', level: 3 },
    { type: 'paragraph', html: 'Elke video bevat honderden frames. Gebruik deze tool om die perfecte momenten te extraheren zonder concessies te doen aan kwaliteit of privacy.' }
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

export const content: VideoFrameExtractorLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-frame-extraktor-fanga-hd-bilder';
const title = 'Video Frame Extraktor: Fånga HD bilder';
const description = 'Extrahera enskilda bilder från dina videor med exakt precision på rutan. Fånga perfekta ögonblick i HD lokalt och gratis.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Ladda upp en videofil",
    uploadFormats: "MP4, WebM, MOV eller MKV (Max. 500MB)",
    privacyNote: "Videon laddas inte upp till internet, den bearbetas lokalt i din webbläsare.",
    playLabel: "Spela",
    pauseLabel: "Paus",
    captureBtn: "Fånga ruta",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Automatisk extrahering",
    batchEvery: "Varje",
    batchStart: "Starta sekvens",
    batchProcessing: "Extraherar...",
    galleryTitle: "Fångade rutor",
    galleryEmpty: "Dina bilder visas här när du fångar dem.",
    downloadAll: "Ladda ner alla",
    downloadHD: "Ladda ner HD-bild",
    resetBtn: "Ladda upp en annan video"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Kan jag extrahera rutor från långa videor?",
        answer: "Ja, så länge din webbläsare har tillräckligt med RAM-minne för att ladda videon. Vi rekommenderar filer upp till 500 MB för optimal prestanda.",
    },
    {
        question: "I vilken upplösning sparas bilderna?",
        answer: "Bilderna fångas i originalvideons naturliga upplösning. Om din video är 4K får du en högkvalitativ 4K-bild.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Ladda upp din video",
        text: "Välj videofilen från din enhet. Vi laddar inte upp den till någon server.",
    },
    {
        name: "Navigera till det exakta ögonblicket",
        text: "Använd tidslinjen eller knapparna ±1 ruta för kirurgisk precision.",
    },
    {
        name: "Fånga rutan",
        text: "Tryck på fångstknappen för att spara ögonblicket i galleriet nedan.",
    },
    {
        name: "Ladda ner i hög kvalitet",
        text: "Ladda ner enskilda bilder eller hela sessionen i optimerat WebP format.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionell Video Frame Extrahering',
        items: [
            'Precision på enskild ruta (±1 ruta) för perfekt fångst',
            'Stöd för MP4, WebM, MOV, MKV upp till 500MB',
            'Originalets videoupplösning bevaras (SD, HD, 4K)',
            'Automatisk batch-extrahering vid anpassade intervall'
        ]
    },
    { type: 'title', text: 'Frame extrahering: Frys tiden i videon', level: 2 },
    { type: 'paragraph', html: 'Ibland säger en bild mer än tusen ord. Vårt verktyg använder din webbläsares lokala kraft för att extrahera precisionsrutor utan behov av professionell programvara.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Precision på rutan', icon: 'mdi:target' },
        { value: '100%', label: 'Naturlig upplösning', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Filer som stöds', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Professionella användningsområden', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Film och fotografi',
            description: 'Fånga rutor som visuell referens eller komposition',
            icon: 'mdi:film',
            points: [
                'Extrahera bilder för filmmarknadsföring',
                'Referenser för scenkomposition',
                'Ruta-för-ruta analys'
            ]
        },
        {
            title: 'Digitalt innehåll',
            description: 'Skapa miniatyrer och omslag för sociala medier',
            icon: 'mdi:youtube',
            points: [
                'Högupplösta YouTube-miniatyrer',
                'Omslag för sociala medier',
                'Bilder för presentationer'
            ],
            highlight: true
        },
        {
            title: 'Teknisk dokumentation',
            description: 'Extrahera rutor från tutorials och demonstrationer',
            icon: 'mdi:book-open',
            points: [
                'Skärmdumpar från tutorial-videor',
                'Visuell dokumentation steg-för-steg',
                'Rörelseanalys i realtid'
            ]
        },
        {
            title: 'Sport och action',
            description: 'Fånga det exakta ögonblicket av maximal action',
            icon: 'mdi:dumbbell',
            points: [
                'Teknikanalys ruta-för-ruta',
                'Fånga heroiska ögonblick',
                'Rörelsestudier'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Videoformat som stöds', level: 3 },
    { type: 'table', headers: ['Format', 'Tillägg', 'Kompatibilitet', 'Noteringar'], rows: [
        ['MPEG-4', 'MP4', 'Universell (100%)', 'Bästa komprimering, mycket använd'],
        ['WebM', 'WebM', 'Moderna webbläsare', 'Överlägsen komprimering, mindre storlek'],
        ['QuickTime', 'MOV', 'Safari, vissa spelare', 'Apple-standard'],
        ['Matroska', 'MKV', 'Moderna webbläsare', 'Flexibel container']
    ] },

    { type: 'card', title: 'Precision på enskild ruta', html: 'Att flytta sig en enda ruta framåt eller bakåt (±1 ruta) är avgörande för att fånga det perfekta ögonblicket. Vårt verktyg ger dig millimetrisk kontroll.' },

    { type: 'proscons', items: [
        {
            pro: 'Total sekretess: videon bearbetas 100% lokalt i din webbläsare',
            con: 'Begänsad till tillgänglig RAM-minnesstorlek (~500MB rekommenderas)'
        },
        {
            pro: 'Naturlig upplösning bevaras: SD, HD, 4K utan omkomprimering',
            con: 'Kräver modern webbläsare med stöd för HTML5 Video'
        },
        {
            pro: 'Automatisk batch-extrahering vid anpassade intervall',
            con: 'För avancerad redigering krävs en videoredigerare'
        },
        {
            pro: 'Exportera rutor i optimerat WebP eller obekomprimerat PNG',
            con: 'En ruta åt gången (exporterar inte automatiska GIF-sekvenser)'
        }
    ], proTitle: 'Fördelar', conTitle: 'Begränsningar' },

    { type: 'diagnostic', variant: 'info', title: 'Upplösning och bildhastighet', icon: 'mdi:information', badge: 'Teknisk', html: 'Extraherade rutans upplösning beror på originalvideon. Vi bevarar videons naturliga information utan uppskalning.' },

    { type: 'glossary', items: [
        {
            term: 'Ruta (Frame)',
            definition: 'Individuell bild i en videosekvens. En 24 fps-video innehåller 24 rutor per sekund.'
        },
        {
            term: 'FPS (Frames Per Second)',
            definition: 'Bilder per sekund. Avgör rörelsens jämnhet.'
        },
        {
            term: 'Video Codec',
            definition: 'Komprimeringsalgoritm: H.264 (MPEG-4), VP9 (WebM), HEVC. Avgör filstorlek och kvalitet.'
        },
        {
            term: 'Bitrate',
            definition: 'Mängden data som bearbetas per sekund. Högre bitrate = högre kvalitet.'
        },
        {
            term: 'Videoupplösning',
            definition: 'Pixeldimensioner: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Professionell extrahering på rutan', ariaLabel: 'Teknisk information om videoextrahering', html: 'Du behöver inte komplexa konverterare. En perfekt bild är bara 3 klick bort: ladda upp video, navigera, fånga.' },

    { type: 'title', text: 'Frys ögonblick i video', level: 3 },
    { type: 'paragraph', html: 'Varje video innehåller hundratals rutor. Använd detta verktyg för att extrahera de perfekta ögonblicken utan att kompromissa med kvalitet eller integritet.' }
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

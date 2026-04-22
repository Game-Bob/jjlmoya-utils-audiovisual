import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'estrattore-fotogrammi-video-online-cattura-stills-hd';
const title = 'Estrattore Fotogrammi Video: Cattura istantanee HD';
const description = 'Estrai singole immagini dai tuoi video con precisione millimetrica. Cattura i momenti perfetti in HD localmente e gratuitamente.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Carica un file video",
    uploadFormats: "MP4, WebM, MOV o MKV (Max. 500MB)",
    privacyNote: "Il video non viene caricato su Internet, viene elaborato nel tuo browser.",
    playLabel: "Riproduci",
    pauseLabel: "Pausa",
    captureBtn: "Cattura fotogramma",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Estrazione Automatica",
    batchEvery: "Ogni",
    batchStart: "Avvia sequenza",
    batchProcessing: "Estrazione...",
    galleryTitle: "Fotogrammi Catturati",
    galleryEmpty: "Le catture appariranno qui man mano che le effettui.",
    downloadAll: "Scarica tutto",
    downloadHD: "Scarica immagine HD",
    resetBtn: "Carica un altro video"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Posso estrarre fotogrammi da video lunghi?",
        answer: "Sì, purché il tuo browser abbia abbastanza RAM per caricare il video. Consigliamo file fino a 500 MB per prestazioni ottimali.",
    },
    {
        question: "In quale risoluzione vengono salvate le catture?",
        answer: "Le catture vengono effettuate alla risoluzione nativa del video originale. Se il tuo video è in 4K, otterrai un'immagine 4K di alta qualità.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Carica il tuo video",
        text: "Seleziona il file video dal tuo dispositivo. Non lo caricheremo su alcun server.",
    },
    {
        name: "Vai al momento esatto",
        text: "Usa la barra della timeline o i pulsanti ±1 fotogramma per una precisione chirurgica.",
    },
    {
        name: "Cattura il fotogramma",
        text: "Premi il pulsante di cattura per salvare il momento nella galleria sottostante.",
    },
    {
        name: "Scarica in alta qualità",
        text: "Scarica le singole catture o l'intera sessione nel formato WebP ottimizzato.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Estrazione Professionale di Fotogrammi Video',
        items: [
            'Precisione al singolo fotogramma (±1 frame) per catture perfette',
            'Supporta MP4, WebM, MOV, MKV fino a 500MB',
            'Risoluzione nativa del video preservata (SD, HD, 4K)',
            'Estrazione automatica in batch a intervalli personalizzati'
        ]
    },
    { type: 'title', text: 'Estrazione Fotogrammi: Congelare il Tempo nel Video', level: 2 },
    { type: 'paragraph', html: 'A volte un\'immagine vale più di mille parole. Il nostro strumento utilizza la potenza locale del tuo browser per estrarre fotogrammi di precisione senza bisogno di software professionali.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Precisione Fotogramma', icon: 'mdi:target' },
        { value: '100%', label: 'Risoluzione Nativa', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'File Supportati', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Casi d\'Uso Professionali', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Cinema e Fotografia',
            description: 'Cattura fotogrammi come riferimento visivo o composizione',
            icon: 'mdi:film',
            points: [
                'Estrai stills per il marketing cinematografico',
                'Riferimenti per la composizione della scena',
                'Analisi fotogramma per fotogramma'
            ]
        },
        {
            title: 'Contenuti Digitali',
            description: 'Crea miniature e copertine per i social media',
            icon: 'mdi:youtube',
            points: [
                'Miniature YouTube ad alta risoluzione',
                'Copertine per i social media',
                'Immagini per presentazioni'
            ],
            highlight: true
        },
        {
            title: 'Documentazione Tecnica',
            description: 'Estrai fotogrammi da tutorial e dimostrazioni',
            icon: 'mdi:book-open',
            points: [
                'Screenshot da video tutorial',
                'Documentazione visiva passo-passo',
                'Analisi del movimento in tempo reale'
            ]
        },
        {
            title: 'Sport e Azione',
            description: 'Cattura l\'istante preciso della massima azione',
            icon: 'mdi:dumbbell',
            points: [
                'Analisi della tecnica sportiva fotogramma per fotogramma',
                'Cattura di momenti eroici',
                'Studio del movimento'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Formati Video Supportati', level: 3 },
    { type: 'table', headers: ['Formato', 'Estensione', 'Compatibilità', 'Note'], rows: [
        ['MPEG-4', 'MP4', 'Universale (100%)', 'Migliore compressione, molto usato'],
        ['WebM', 'WebM', 'Browser moderni', 'Compressione superiore, dimensioni ridotte'],
        ['QuickTime', 'MOV', 'Safari, alcuni player', 'Standard Apple'],
        ['Matroska', 'MKV', 'Browser moderni', 'Container flessibile']
    ] },

    { type: 'card', title: 'Precisione al Singolo Fotogramma', html: 'Muoversi di un singolo fotogramma in avanti o indietro (±1 frame) è vitale per catturare l\'istante perfetto: un salto, un sorriso, un gesto. Il nostro strumento ti offre un controllo millimetrico.' },

    { type: 'proscons', items: [
        {
            pro: 'Privacy totale: il video è elaborato al 100% localmente nel tuo browser',
            con: 'Limitata dalla dimensione della memoria RAM disponibile (~500MB consigliati)'
        },
        {
            pro: 'Risoluzione nativa preservata: SD, HD, 4K senza ri-compressione',
            con: 'Richiede un browser moderno con supporto Video HTML5'
        },
        {
            pro: 'Estrazione batch automatica a intervalli personalizzati',
            con: 'Per editing avanzato (tagli), è necessario un editor video'
        },
        {
            pro: 'Esporta fotogrammi in WebP ottimizzato o PNG non compresso',
            con: 'Un fotogramma alla volta (non esporta sequenze GIF automatizzate)'
        }
    ], proTitle: 'Vantaggi', conTitle: 'Limitazioni' },

    { type: 'diagnostic', variant: 'info', title: 'Risoluzione e Frame Rate', icon: 'mdi:information', badge: 'Tecnico', html: 'La risoluzione finale del fotogramma dipende dal video originale. Preserviamo le informazioni native del video senza upscaling.' },

    { type: 'glossary', items: [
        {
            term: 'Fotogramma',
            definition: 'Singola immagine in una sequenza video. Un video a 24 fps contiene 24 fotogrammi al secondo.'
        },
        {
            term: 'FPS (Fotogrammi Per Secondo)',
            definition: 'Fotogrammi al secondo. Determina la fluidità del movimento.'
        },
        {
            term: 'Codec Video',
            definition: 'Algoritmo di compressione: H.264, VP9, HEVC. Determina dimensione e qualità.'
        },
        {
            term: 'Bitrate',
            definition: 'Quantità di dati elaborati al secondo. Bitrate più alto = qualità superiore.'
        },
        {
            term: 'Risoluzione Video',
            definition: 'Dimensioni in pixel: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Estrazione fotogrammi professionale', ariaLabel: 'Informazioni tecniche sull\'estrazione video', html: 'Non servono complessi convertitori. Un fotogramma perfetto è a soli 3 clic: carica video, naviga, cattura.' },

    { type: 'title', text: 'Congelare Momenti Video', level: 3 },
    { type: 'paragraph', html: 'Ogni video contiene centinaia di fotogrammi. Usa questo strumento per estrarre quei momenti perfetti senza compromettere qualità o privacy.' }
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
    inLanguage: 'it',
};

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Domande Frequenti sull\'Estrazione Fotogrammi Video',
    bibliography: 'Standard Tecnici per la Cattura Video',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

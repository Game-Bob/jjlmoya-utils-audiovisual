import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-frame-extraktor-hd-stills-erfassen';
const title = 'Video Frame Extraktor: HD Einzelbilder erfassen';
const description = 'Extrahieren Sie Einzelbilder aus Ihren Videos mit bildgenauer Präzision. Halten Sie perfekte Momente in HD lokal und kostenlos fest.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Videodatei hochladen",
    uploadFormats: "MP4, WebM, MOV oder MKV (Max. 500MB)",
    privacyNote: "Das Video wird nicht ins Internet hochgeladen, es wird in Ihrem Browser verarbeitet.",
    playLabel: "Abspielen",
    pauseLabel: "Pause",
    captureBtn: "Frame erfassen",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Automatische Extraktion",
    batchEvery: "Alle",
    batchStart: "Sequenz starten",
    batchProcessing: "Extrahiere...",
    galleryTitle: "Erfasste Frames",
    galleryEmpty: "Erfasste Bilder erscheinen hier.",
    downloadAll: "Alle herunterladen",
    downloadHD: "HD Bild herunterladen",
    resetBtn: "Anderes Video hochladen"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Kann ich Frames aus langen Videos extrahieren?",
        answer: "Ja, solange Ihr Browser über genügend Arbeitsspeicher verfügt. Wir empfehlen Dateien bis zu 500 MB für eine optimale Leistung.",
    },
    {
        question: "In welcher Auflösung werden die Aufnahmen gespeichert?",
        answer: "Aufnahmen erfolgen in der nativen Auflösung des Originalvideos. Wenn Ihr Video in 4K vorliegt, erhalten Sie ein hochwertiges 4K-Bild.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Video hochladen",
        text: "Wählen Sie die Videodatei von Ihrem Gerät aus. Wir laden sie auf keinen Server hoch.",
    },
    {
        name: "Zum exakten Moment navigieren",
        text: "Nutzen Sie die Zeitleiste oder die ±1 Frame Schaltflächen für chirurgische Präzision.",
    },
    {
        name: "Frame erfassen",
        text: "Drücken Sie die Erfassungstaste, um den Moment in der Galerie unten zu speichern.",
    },
    {
        name: "In hoher Qualität herunterladen",
        text: "Laden Sie einzelne Aufnahmen oder die gesamte Sitzung im optimierten WebP Format herunter.",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Capturing frames with HTML5 Video API",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionelle Video Frame Extraktion',
        items: [
            'Bildgenaue Präzision (±1 Frame) für perfekte Aufnahmen',
            'Unterstützt MP4, WebM, MOV, MKV bis zu 500MB',
            'Native Videoauflösung bleibt erhalten (SD, HD, 4K)',
            'Automatische Batch-Extraktion in benutzerdefinierten Intervallen'
        ]
    },
    { type: 'title', text: 'Frame Extraktion: Zeit im Video einfrieren', level: 2 },
    { type: 'paragraph', html: 'Manchmal sagt ein Bild mehr als tausend Worte. Unser Tool nutzt die lokale Leistung Ihres Browsers, um präzise Frames zu extrahieren, ohne dass professionelle Software erforderlich ist.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Bildgenaue Präzision', icon: 'mdi:target' },
        { value: '100%', label: 'Native Auflösung', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Unterstützte Dateien', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Professionelle Anwendungsfälle', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Kino und Fotografie',
            description: 'Frames als visuelle Referenz oder Komposition erfassen',
            icon: 'mdi:film',
            points: [
                'Stills für das Filmmarketing extrahieren',
                'Referenzen für die Szenenkomposition',
                'Bild-für-Bild-Analyse'
            ]
        },
        {
            title: 'Digitaler Content',
            description: 'Thumbnails und Cover für soziale Medien erstellen',
            icon: 'mdi:youtube',
            points: [
                'Hochauflösende YouTube-Thumbnails',
                'Social-Media-Cover',
                'Bilder für Präsentationen'
            ],
            highlight: true
        },
        {
            title: 'Technische Dokumentation',
            description: 'Frames aus Tutorials und Demonstrationen extrahieren',
            icon: 'mdi:book-open',
            points: [
                'Screenshots aus Tutorial-Videos',
                'Visuelle Schritt-für-Schritt-Dokumentation',
                'Echtzeit-Bewegungsanalyse'
            ]
        },
        {
            title: 'Sport und Action',
            description: 'Den präzisen Moment maximaler Action festhalten',
            icon: 'mdi:dumbbell',
            points: [
                'Analyse der Sporttechnik Bild für Bild',
                'Festhalten heldenhafter Momente',
                'Bewegungsstudie'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Unterstützte Videoformate', level: 3 },
    { type: 'table', headers: ['Format', 'Erweiterung', 'Kompatibilität', 'Hinweise'], rows: [
        ['MPEG-4', 'MP4', 'Universell (100%)', 'Beste Kompression, weit verbreitet'],
        ['WebM', 'WebM', 'Moderne Browser', 'Überlegene Kompression, kleinere Größe'],
        ['QuickTime', 'MOV', 'Safari, einige Player', 'Apple-Standard'],
        ['Matroska', 'MKV', 'Moderne Browser', 'Flexibler Container']
    ] },

    { type: 'card', title: 'Bildgenaue Präzision', html: 'Das Vor- oder Zurückbewegen um einen einzigen Frame (±1 Frame) ist entscheidend, um den perfekten Augenblick einzufangen: einen Sprung, ein Lächeln, eine Geste. Unser Tool gibt Ihnen millimetergenaue Kontrolle.' },

    { type: 'proscons', items: [
        {
            pro: 'Vollständige Privatsphäre: Das Video wird 100% lokal verarbeitet',
            con: 'Begrenzt durch verfügbaren RAM-Speicher (~500MB empfohlen)'
        },
        {
            pro: 'Native Auflösung bleibt erhalten: SD, HD, 4K ohne Re-Kompression',
            con: 'Erfordert modernen Browser mit HTML5-Video-Unterstützung'
        },
        {
            pro: 'Automatische Batch-Extraktion in Intervallen',
            con: 'Für fortgeschrittene Bearbeitung ist ein Videoeditor erforderlich'
        },
        {
            pro: 'Export als optimiertes WebP oder unkomprimiertes PNG',
            con: 'Ein Bild nach dem anderen (kein automatisierter GIF-Export)'
        }
    ], proTitle: 'Vorteile', conTitle: 'Einschränkungen' },

    { type: 'diagnostic', variant: 'info', title: 'Auflösung und Bildrate', icon: 'mdi:information', badge: 'Technisch', html: 'Die finale Frame-Auflösung hängt vom Originalvideo ab. Wir bewahren die nativen Informationen des Videos ohne Upscaling.' },

    { type: 'glossary', items: [
        {
            term: 'Frame',
            definition: 'Einzelbild in einer Videosequenz. Ein 24-fps-Video enthält 24 Frames pro Sekunde.'
        },
        {
            term: 'FPS (Frames Per Second)',
            definition: 'Bilder pro Sekunde. Bestimmt die Flüssigkeit der Bewegung.'
        },
        {
            term: 'Video-Codec',
            definition: 'Kompressionsalgorithmus: H.264, VP9, HEVC. Bestimmt Größe und Qualität.'
        },
        {
            term: 'Bitrate',
            definition: 'Datenmenge pro Sekunde. Höhere Bitrate = höhere Qualität.'
        },
        {
            term: 'Video-Auflösung',
            definition: 'Pixel-Abmessungen: 720p, 1080p, 4K, 8K.'
        }
    ] },

    { type: 'message', title: 'Professionelle Frame Extraktion', ariaLabel: 'Technische Info zur Videoextraktion', html: 'Keine komplexen Konverter nötig. Ein perfekter Frame ist nur 3 Klicks entfernt: Video hochladen, navigieren, erfassen.' },

    { type: 'title', text: 'Momente aus Videos einfrieren', level: 3 },
    { type: 'paragraph', html: 'Jedes Video enthält hunderte von Frames. Nutzen Sie dieses Tool, um die perfekten Momente ohne Qualitätsverlust zu extrahieren.' }
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
    inLanguage: 'de',
};

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Häufig gestellte Fragen zur Video Frame Extraktion',
    bibliography,
    bibliographyTitle: 'Technische Standards für Videoaufnahmen',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

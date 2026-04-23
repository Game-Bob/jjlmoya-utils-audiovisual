import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'kostenloser-online-foto-collage-maker-professionelle-kompositionen';
const title = 'Online Collage Maker: Professionelle Kompositionen entwerfen';
const description = 'Erstellen Sie in Sekundenschnelle kostenlos Fotocollagen. Wählen Sie aus mehreren Layouts, passen Sie Rahmen an und laden Sie sie in hoher Qualität ohne Wasserzeichen herunter.';

const ui: CollageMakerUI = {
    dropTitle: "Bilder hierher ziehen",
    dropSub: "oder {link} – min. 2, max. 9",
    dropLink: "Dateien auswählen",
    imgsLoaded: "Geladene Bilder",
    layoutLabel: "Layout",
    settingsLabel: "Einstellungen",
    borderLabel: "Rahmen",
    borderColorLabel: "Rahmenfarbe",
    bgColorLabel: "Hintergrund",
    downloadBtn: "Herunterladen",
    previewTitle: "Vorschau",
    needsImgs: "Sie benötigen {n} Bilder",
    errorMin: "Sie benötigen mindestens 2 Bilder",
    errorMax: "Maximal 9 Bilder erlaubt",
    errorLoad: "Fehler beim Laden der Bilder",
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Wie kann ich die Reihenfolge der Fotos ändern?",
        answer: "Die Fotos werden in der Collage in der Reihenfolge platziert, in der sie in der Liste der geladenen Bilder erscheinen. Sie können eines entfernen und erneut hochladen, um seine Position anzupassen.",
    },
    {
        question: "Welches Ausgabeformat hat die Collage?",
        answer: "Die Collage wird im hochauflösenden WebP-Format heruntergeladen, ideal zum Teilen in sozialen Netzwerken ohne Schärfeverlust.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Fotos hochladen",
        text: "Wählen Sie zwischen 2 und 9 Bildern aus Ihrem Dateiexplorer aus.",
    },
    {
        name: "Layout wählen",
        text: "Wählen Sie das Raster aus, das am besten zur Anzahl der hochgeladenen Fotos passt.",
    },
    {
        name: "Stil anpassen",
        text: "Passen Sie die Rahmenstärke und  farbe an, um der Collage ein professionelles Finish zu verleihen.",
    },
    {
        name: "Herunterladen und teilen",
        text: "Drücken Sie die Erstellen Taste und laden Sie Ihre finale Komposition sofort herunter.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professioneller Online Collage Maker',
        items: [
            'Mehrere Layouts und vordefinierte Raster',
            'Anpassung von Rahmen und Hintergrundfarben',
            '1200px hohe Auflösung, bereit für soziale Netzwerke',
            'Sofortige Verarbeitung ohne Nutzungseinschränkungen'
        ]
    },
    { type: 'title', text: 'Collage Design: Kompositionen, die Geschichten erzählen', level: 2 },
    { type: 'paragraph', html: 'Eine Collage ist mehr als nur eine Mischung aus Fotos; sie ist eine visuelle Erzählung, die Emotionen und Kontext vermittelt. Mit unserem Tool können Sie professionelle geometrische Kompositionen für Instagram, Facebook, Pinterest oder persönliche Projekte erstellen, ohne Photoshop oder teure Software zu benötigen.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Bilder pro Collage', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD-Auflösung', icon: 'mdi:video-high-definition' },
        { value: 'Sofort', label: 'Erstellung', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Visuelle Komposition: Designprinzipien', level: 3 },
    { type: 'paragraph', html: 'Komposition ist die Kunst, visuelle Elemente so zu organisieren, dass sie das Auge des Betrachters führen und eine Absicht kommunizieren. Eine gute Collage balanciert Folgendes:' },
    { type: 'list', items: [
        '<strong>Gleichgewicht:</strong> Visuelle Verteilung des Gewichts (helle vs. dunkle Bilder, große vs. kleine).',
        '<strong>Visueller Fluss:</strong> Das Auge sollte die Komposition natürlich durchqueren, ohne tote Winkel.',
        '<strong>Kontrast:</strong> Variationen in Farbe, Größe und Form, die Aufmerksamkeit erregen.',
        '<strong>Einheit:</strong> Thematische Kohärenz – Bilder müssen gemeinsam dieselbe Geschichte erzählen.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Intelligente und adaptive Designs', html: 'Unser System berechnet automatisch die optimale Platzverteilung basierend auf der Anzahl der Fotos. 2 Bilder = symmetrisches Raster; 5 Bilder = ausgewogene asymmetrische Verteilung. Jedes Raster ist darauf ausgelegt, die visuelle Wirkung zu maximieren.' },

    { type: 'comparative', items: [
        {
            title: 'Für soziale Netzwerke',
            description: 'Instagram, TikTok, Facebook – quadratische Formate',
            icon: 'mdi:share-all',
            points: [
                '1200px ist perfekt für den Instagram-Feed',
                'Quadratisches Format vermeidet das Zuschneiden beim Posten',
                'Anpassbare Rahmen für Branding'
            ],
            highlight: true
        },
        {
            title: 'Für Portfolios',
            description: 'Visuelle Schaufenster für Fotografen und Designer',
            icon: 'mdi:briefcase-outline',
            points: [
                'Mehrere Blickwinkel eines Projekts zeigen',
                'Zusammenhängende visuelle Erzählung',
                'Professioneller Druck für digitale Portfolios'
            ]
        },
        {
            title: 'Für persönliche Geschenke',
            description: 'Drucke, Rahmen und digitale Alben',
            icon: 'mdi:gift-outline',
            points: [
                'Erinnerungen an Ereignisse (Hochzeiten, Reisen)',
                'Hohe Auflösung, bereit zum Drucken',
                'Sofortiges Design ohne manuellen Aufwand'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Anpassung: Rahmen und Farben', level: 3 },
    { type: 'table', headers: ['Element', 'Visueller Effekt', 'Empfehlung'], rows: [
        ['Weißer Rahmen', 'Sauber, minimalistisch, modern', 'Soziale Netzwerke, digitale Portfolios'],
        ['Schwarzer Rahmen', 'Dramatisch, professionell, künstlerisch', 'Kunstfotografie, Mode, Luxus'],
        ['Neutraler Rahmen (Grau)', 'Vielseitig, akademisch, korporativ', 'Business, Bildung, Neutralität'],
        ['Kein Rahmen', 'Fusion, Kontinuität, immersiv', 'Einheitlicher Hintergrund, fließende Fotos']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Professionelle vordefinierte Designs – keine Kenntnisse in Komposition erforderlich',
            con: 'Optionen auf vordefinierte Raster beschränkt'
        },
        {
            pro: '1200px Auflösung, bereit für soziale Netzwerke ohne Skalierung',
            con: 'Nicht so anpassbar wie Photoshop'
        },
        {
            pro: '100% lokale Verarbeitung – Privatsphäre, Schnelligkeit, keine Limits',
            con: 'Erfordert einen modernen Browser'
        },
        {
            pro: 'Völlig kostenlos, keine Wasserzeichen, keine Werbung',
            con: 'Keine individuellen Bearbeitungsoptionen (Zuschneiden, Drehen)'
        }
    ], proTitle: 'Vorteile', conTitle: 'Einschränkungen' },

    { type: 'diagnostic', variant: 'success', title: 'Bereit für soziale Netzwerke', icon: 'mdi:check-circle-outline', badge: 'Optimiert', html: '1200x1200px ist die ideale Auflösung für Instagram. Es unterstützt jedes Seitenverhältnis, aber die quadratische Ausgabe maximiert die Wirkung im Feed, eliminiert automatisches Zuschneiden und sieht auf Desktop, Tablet und Handy gleichermaßen gut aus.' },

    { type: 'glossary', items: [
        {
            term: 'Visuelle Komposition',
            definition: 'Die Kunst des Organisierens von Elementen (Farbe, Form, Raum), um das Auge des Betrachters zu führen und eine emotionale Absicht zu kommunizieren.'
        },
        {
            term: 'Drittel-Regel',
            definition: 'Kompositionsprinzip: teilt das Bild in 9 gleiche Bereiche (3x3). Positionieren Sie Motive an Schnittlinien für maximale Wirkung.'
        },
        {
            term: 'Symmetrisches Raster',
            definition: 'Gleiche Raumaufteilungen. Beruhigend, ordentlich. Ideal für Fotopaare oder gerade Zahlen.'
        },
        {
            term: 'Asymmetrisches Raster',
            definition: 'Ungleiche Aufteilungen. Dynamisch, interessant, visuell. Ideal für 5+ Fotos mit unterschiedlichen Größen.'
        },
        {
            term: 'Visuelles Gleichgewicht',
            definition: 'Wahrgenommenes Gleichgewicht des visuellen Gewichts. Helles + dunkles Bild = Balance; großes + kleines = Balance.'
        }
    ] },

    { type: 'message', title: 'Sofortige visuelle Erzählung', ariaLabel: 'Informationen über Komposition und Collagen', html: 'Jede Collage erzählt eine Geschichte. Unser automatischer Designer sorgt dafür, dass Ihre visuellen Geschichten ausgewogen und professionell wirken und bereit für die Welt sind – ohne auf einen Grafiker warten zu müssen.' },

    { type: 'title', text: 'Erstellen, teilen, inspirieren', level: 3 },
    { type: 'paragraph', html: 'Eine gut gemachte Collage macht den Unterschied zwischen einem vergesslichen Post und einem, an den sich Ihre Follower erinnern und den sie teilen. Nutzen Sie intelligente Komposition für Ihre visuellen Geschichten, um Wirkung zu erzielen.' }
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

export const content: CollageMakerLocaleContent = {
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

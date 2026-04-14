import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-sitzabstand-rechner-thx-4k-optimaler-bildschirm';
const title = 'TV Abstandsrechner: THX  und 4K Optimaler Abstand';
const description = 'Berechnen Sie den idealen Sitzabstand für Ihren Fernseher basierend auf Größe und Auflösung. Optimieren Sie Ihr Heimkino mit THX- und SMPTE-Standards.';

const ui: TvDistanceUI = {
    specTitle: "Spezifikationen",
    diagonalLabel: "Diagonale",
    resolutionLabel: "Auflösung",
    thxRecommendation: "THX-Empfehlung",
    thxDescription: "THX empfiehlt einen Abstand, der einen Betrachtungswinkel von 40 Grad abdeckt, für ein immersives Kinoerlebnis.",
    simulationBadge: "Echtzeit-Simulation",
    tvWidthLabel: "cm breit",
    userLocationLabel: "Ihr Standort",
    minLimitLabel: "Mindestabstand",
    optimalLimitLabel: "Optimaler Abstand",
    maxLimitLabel: "Maximalabstand",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Warum spielt die Auflösung bei der Abstandsberechnung eine Rolle?",
        answer: "Bei höheren Auflösungen (wie 4K oder 8K) sind die Pixel kleiner. Dadurch können Sie näher am Bildschirm sitzen, ohne die Pixelstruktur wahrzunehmen, was die Immersion erhöht.",
    },
    {
        question: "Was ist der 40-Grad-Betrachtungswinkel?",
        answer: "Dies ist der von THX empfohlene Standard, bei dem der Bildschirm einen großen Teil Ihres peripheren Sichtfeldes einnimmt, ähnlich wie in einem professionellen Kinosaal.",
    },
    {
        question: "Kann ich weiter weg sitzen als empfohlen?",
        answer: "Ja, aber Sie verlieren den Vorteil hoher Auflösungen. Wenn Sie zu weit von einem 4K-Fernseher entfernt sitzen, kann Ihr Auge die zusätzlichen Details nicht mehr unterscheiden.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Zollgröße angeben",
        text: "Bewegen Sie den Schieberegler, um die Größe Ihres aktuellen oder geplanten Fernsehers auszuwählen.",
    },
    {
        name: "Auflösung wählen",
        text: "Wählen Sie zwischen 1080p, 4K oder 8K, um die Grenzen der Sehschärfe anzupassen.",
    },
    {
        name: "Simulation betrachten",
        text: "Beobachten Sie im Diagramm, wie sich das Größenverhältnis zwischen Ihnen und dem Bildschirm ändert.",
    },
    {
        name: "Sofa ausrichten",
        text: "Platzieren Sie Ihren Sitzplatz innerhalb des Bereichs 'Optimaler Abstand', um die kinoähnliche Immersion zu maximieren.",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
    {
        name: "SMPTE - Standards Documentation",
        url: "https://www.smpte.org/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Optimaler TV Abstand nach Auflösung und Größe',
        items: [
            'THX-Standards (40°) für immersives Kinoerlebnis',
            'Berechnungen für 1080p, 4K und 8K mit höchster Präzision',
            'Echtzeit-Visualisierung Ihres Setups',
            'Vermeidung von Augenermüdung und maximale Immersion'
        ]
    },
    { type: 'title', text: 'Wissenschaft der Immersion: Optimaler TV Abstand', level: 2 },
    { type: 'paragraph', html: 'Es geht nicht nur um Komfort, sondern um die menschliche Physiologie des Sehens. Wenn Sie zu weit von einem 4K-Bildschirm entfernt sitzen, verschwenden Sie Geld für Pixel, die Ihre Sehkraft nicht nutzen kann. Sitzen Sie zu nah, führt dies zu Augenermüdung.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Idealer THX-Winkel', icon: 'mdi:eye' },
        { value: '100%', label: 'Genutzte Pixel', icon: 'mdi:video-high-definition' },
        { value: 'Null', label: 'Sehstress', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Zwei Profi Standards: THX vs. SMPTE', level: 3 },
    { type: 'paragraph', html: 'Es gibt zwei Hauptinstanzen in der audiovisuellen Industrie, die festlegen, wie Sie Ihr Seherlebnis optimieren können:' },
    { type: 'comparative', items: [
        {
            title: 'THX Standard',
            description: '40° Betrachtungswinkel - Immersiver',
            icon: 'mdi:filmstrip',
            points: [
                'Bildschirm füllt mehr vom peripheren Sichtfeld aus',
                'Immersives Kinoerlebnis',
                'Ideal für Actionfilme und Live-Sport',
                'Erfordert mehr Platz im Raum'
            ],
            highlight: true
        },
        {
            title: 'SMPTE Standard',
            description: '30° Betrachtungswinkel - Entspannter',
            icon: 'mdi:television',
            points: [
                'Komfortablerer Sitzabstand',
                'Konservative Profi-Empfehlung',
                'Ideal für gemischte Inhalte (News, Serien)',
                'Besser für kleinere Räume'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Wie die Auflösung die Gleichung verändert', level: 3 },
    { type: 'table', headers: ['Auflösung', '55" TV Größe', 'Mindestabstand (Pixel unsichtbar)', 'Optimaler THX-Abstand'], rows: [
        ['1080p (Full HD)', '55 Zoll', '2,0 m', '2,3 m'],
        ['4K (Ultra HD)', '55 Zoll', '1,2 m', '1,5 m'],
        ['8K', '55 Zoll', '0,8 m', '1,0 m']
    ] },

    { type: 'paragraph', html: 'Wie Sie sehen, ermöglicht eine höhere Auflösung ein klares Bild aus kürzerer Entfernung. Ein 4K-TV entfaltet sein Potenzial ab 1,2 Metern, 1080p benötigt mindestens 2 Meter.' },

    { type: 'card', title: 'Grenze der menschlichen Sehschärfe', html: 'Das menschliche Auge hat eine begrenzte Auflösungsfähigkeit. Ab einer gewissen Entfernung können Sie keine weiteren Details mehr unterscheiden, selbst wenn der Bildschirm 8K hat. Unsere Berechnungen platzieren Sie genau in der "optimalen Zone".' },

    { type: 'diagnostic', variant: 'info', title: 'Augenermüdung und Abstand', icon: 'mdi:information', badge: 'Augengesundheit', html: 'Zu geringer Abstand führt zu Ermüdung, da die Augen ständig extreme Winkel ausgleichen müssen. Zu großer Abstand führt zu Anstrengung beim Erkennen von Details. Unser Rechner findet den "Sweet Spot" (40° für THX).' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° schafft echtes Kino-Feeling - wie im professionellen Kinosaal',
            con: 'Erfordert mehr verfügbaren Platz im Zimmer'
        },
        {
            pro: '4K erlaubt kürzeren Abstand als 1080p - praktisch in kleinen Räumen',
            con: 'Man muss nah genug sitzen, um die zusätzlichen Pixel zu nutzen'
        },
        {
            pro: 'Vermeidung von Augenmüdigkeit durch korrekte Positionierung',
            con: 'Die meisten Wohnzimmer entsprechen NICHT diesen Standards'
        },
        {
            pro: 'Validierung der aktuellen TV-Position möglich',
            con: 'Bei Fehlern müssen Möbel gerückt werden'
        }
    ], proTitle: 'Vorteile', conTitle: 'Einschränkungen' },

    { type: 'glossary', items: [
        {
            term: 'Betrachtungswinkel (in Grad)',
            definition: 'Der visuelle Winkel, den der Bildschirm von Ihrer Position aus abdeckt. 40° = sehr immersiv; 20° = wenig immersiv.'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Qualitätszertifizierung für Film und Ton, gegründet von Lucasfilm. 40° ist die primäre Empfehlung.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Fachorganisation für Standards in Film und Video. Empfiehlt 30° als konservativen Profi-Abstand.'
        },
        {
            term: 'Menschliche Sehschärfe',
            definition: 'Fähigkeit des Auges, feine Details zu unterscheiden. Einzelne Pixel werden ab einer bestimmten Distanz unsichtbar.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Auflösung von ca. 3840x2160 Pixeln. 4-mal mehr Pixel als 1080p.'
        }
    ] },

    { type: 'message', title: 'Professionelle Raumoptimierung', ariaLabel: 'Info zu TV-Setup-Standards', html: 'Kinos geben Millionen aus, um Abstand und Winkel perfekt abzustimmen. Unser Rechner bringt diese Prinzipien zu Ihnen nach Hause. Es ist kein Luxus, sondern eine Investition in Sehkomfort.' },

    { type: 'title', text: 'Heimkino professionell einrichten', level: 3 },
    { type: 'paragraph', html: 'Der Abstand ist GENAUSO wichtig wie Größe und Auflösung. Folgen Sie diesen Standards, um Ihr Wohnzimmer in einen echten Kinosaal zu verwandeln.' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Häufig gestellte Fragen zum TV Sitzabstand',
    bibliography,
    bibliographyTitle: 'Profi Standards für die Fernseher Einrichtung',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

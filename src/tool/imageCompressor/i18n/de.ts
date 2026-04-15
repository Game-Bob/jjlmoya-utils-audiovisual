import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-bildkomprimierer-dateigroesse-ohne-qualitaetsverlust-reduzieren';
const title = 'Online Bildkomprimierer: Gewicht reduzieren ohne Qualitätsverlust';
const description = 'Optimieren und komprimieren Sie Ihre JPG-, PNG- und WebP-Fotos kostenlos. Reduzieren Sie die Dateigröße, um die Ladegeschwindigkeit Ihrer Website lokal zu verbessern.';

const ui: ImageCompressorUI = {
    dropTitle: "Bilder optimieren",
    dropSubtitle: "Ziehen Sie Ihre Fotos hierher, um ihr Gewicht sofort zu reduzieren.",
    settingsTitle: "Komprimierungseinstellungen",
    qualityLabel: "Visuelle Qualität",
    widthLabel: "Maximale Breite (Pixel)",
    convertToWebpLabel: "In WebP umwandeln",
    compressionLabel: "Komprimierung",
    compressBtn: "Bild komprimieren",
    processingLabel: "Wird verarbeitet...",
    resultsTitle: "Optimierte Bilder",
    originalSizeLabel: "Ursprüngliche Größe",
    newSizeLabel: "Neue Größe",
    reductionLabel: "Ersparnis",
    downloadBtn: "Herunterladen",
    addMoreBtn: "Weitere hinzufügen",
    browseFilesBtn: "Dateien durchsuchen",
    processedFilesTitle: "Verarbeitete Dateien",
    downloadAllBtn: "Alle herunterladen",
    adjustThisImage: "Dieses Bild anpassen",
    downloadTitle: "Download",
    maxWidthLabel: "Max. Breite (px)",
    closeBtn: "Schließen",
    totalSavingsLabel: "Gesamtersparnis",
    noSavings: "Keine Nettoersparnis",
    faqTitle: "Häufig gestellte Fragen",
    bibliographyTitle: "Referenzen"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Wie funktioniert die verlustfreie Komprimierung?",
        answer: "Wir verwenden Algorithmen, die unnötige Metadaten entfernen und die Pixelkodierung optimieren. Bei der Wahl von WebP wird eine fortschrittlichere Komprimierungstechnologie als bei herkömmlichen Formaten verwendet.",
    },
    {
        question: "Werden meine Bilder auf einen Server hochgeladen?",
        answer: "Nein. Die gesamte Verarbeitung findet zu 100 % in Ihrem Browser statt (Client-Side). Ihre Fotos verlassen niemals Ihren Computer, was absolute Privatsphäre garantiert.",
    },
    {
        question: "Warum sollte ich in WebP konvertieren?",
        answer: "WebP ist der moderne Standard für das Web. Es bietet eine höhere Qualität als JPG und PNG bei einem bis zu 30 % geringeren Gewicht, was die Ladezeit der Seite beschleunigt.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Bild hochladen",
        text: "Laden Sie die Datei hoch, die Sie komprimieren möchten (JPG, PNG oder WebP).",
    },
    {
        name: "Qualität anpassen",
        text: "Verwenden Sie den Schieberegler, um das perfekte Gleichgewicht zwischen Dateigröße und visueller Qualität zu finden (empfohlen: 75–85 %).",
    },
    {
        name: "Größe ändern (optional)",
        text: "Wenn das Bild sehr groß ist, können Sie eine maximale Breite angeben, um die Auflösung zu reduzieren.",
    },
    {
        name: "Ergebnis herunterladen",
        text: "Drücken Sie die Download Taste, um Ihr optimiertes Bild zur Verwendung zu erhalten.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: Ein Bildformat für das Web",
        url: "https://developers.google.com/speed/webp",
    },
    {
        name: "Die Bedeutung der Bildoptimierung für SEO",
        url: "https://developers.google.com/search/docs/appearance/google-images",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionelle Web Bildoptimierung',
        items: [
            'Intelligente JPG-, PNG- und WebP-Komprimierung',
            'Gewicht um 50–80 % reduzieren bei Beibehaltung der visuellen Qualität',
            '100 % lokale Verarbeitung – Privatsphäre garantiert',
            'Core Web Vitals und SEO-Positionierung verbessern'
        ]
    },
    { type: 'title', text: 'Bildoptimierung: Web Geschwindigkeit und Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'In der Ära der digitalen Unmittelbarkeit verliert eine langsame Website Nutzer. Nicht optimierte Bilder machen 60–70 % des Gesamtgewichts einer Webseite aus. Sie zu optimieren ist der erste Schritt, um Ihre Google-Metriken (LCP, CLS) und Ihre Positionierung in den Suchergebnissen zu verbessern.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Typische Gewichtsreduktion', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Lokale Privatsphäre', icon: 'mdi:lock' },
        { value: '+30%', label: 'Schneller als JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Erklärung der Komprimierungsformate', level: 3 },
    { type: 'table', headers: ['Format', 'Komprimierung', 'Anwendungsfälle', 'Kompatibilität'], rows: [
        ['JPEG', 'Verlustbehaftet 50–90 %', 'Kamerafotos, redaktionelle Inhalte', 'Universal (100 %)'],
        ['PNG', 'Verlustfrei 30–50 %', 'Grafiken, Logos, Transparenzen', 'Universal (100 %)'],
        ['WebP', 'Verlustbehaftet/Verlustfrei 25–35 % mehr', 'Modernes Web, soziale Netzwerke', '95 % moderne Browser'],
        ['AVIF', 'Verlustbehaftet/Verlustfrei 20 % Verbesserung', 'Next-Generation-Web', 'Nur neue Browser']
    ] },

    { type: 'card', title: 'Warum WebP die Zukunft ist', html: 'Google hat WebP speziell für das Web entwickelt. Es bietet eine überlegene Komprimierung gegenüber JPEG und PNG bei gleichbleibender oder verbesserter visueller Qualität. Es ist 25–35 % kleiner als äquivalente JPEGs. Moderne Browser unterstützen es zu 95 %.' },

    { type: 'title', text: 'Verlustbehaftete vs. verlustfreie Komprimierung', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Verlustbehaftete Komprimierung',
            description: 'JPG, WebP – Entfernt unmerkliche visuelle Informationen',
            icon: 'mdi:compress',
            points: [
                'Reduziert 70–90 % des ursprünglichen Gewichts',
                'Für das menschliche Auge unmerklich, wenn die Qualität >75 % bleibt',
                'Ideal für realistische Fotografie',
                'Nicht empfohlen für Logos oder scharfen Text'
            ],
            highlight: true
        },
        {
            title: 'Verlustfreie Komprimierung',
            description: 'PNG, WebP verlustfrei – Behält 100 % der visuellen Daten bei',
            icon: 'mdi:shield',
            points: [
                'Reduziert 20–50 % des Gewichts',
                'Perfekte Qualität, keine Verschlechterung',
                'Ideal für Grafiken, Logos, Transparenzen',
                'Schwerere Dateien als bei verlustbehafteter Komprimierung'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Auswirkungen auf SEO und Conversion', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google straft langsame Seiten ab. Optimierte Bilder verbessern LCP (Largest Contentful Paint) direkt.',
        '<strong>Absprungrate:</strong> Jede Sekunde Verzögerung = 7 % mehr Absprünge. Schnellere Bilder = weniger Nutzer, die die Seite verlassen.',
        '<strong>Suchmaschinen-Ranking:</strong> Geschwindigkeit ist ein Ranking-Faktor. Die Optimierung von Bildern steigert die Positionierung.',
        '<strong>Conversion:</strong> Schnellere Ladezeiten = mehr Conversions. Studien zeigen +10 % Conversion durch Optimierung.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Vollständige Privatsphäre: 100 % lokale Verarbeitung, keine Cloud-Server',
            con: 'Erfordert Browser mit Canvas-API-Unterstützung (universell verfügbar)'
        },
        {
            pro: 'WebP ist 25–35 % kleiner als JPEG bei gleicher Qualität',
            con: 'Alte Versionen von Safari und IE unterstützen WebP nicht (Fallback verfügbar)'
        },
        {
            pro: 'Sofortige Verarbeitung mehrerer Bilder',
            con: 'Sehr große Bilder (>50 MB) erfordern möglicherweise Wartezeit'
        },
        {
            pro: 'Optionales Resizing: Reduziert Auflösung zusätzlich zur Komprimierung',
            con: 'Resizing führt zu Informationsverlust – besser die Auflösung an der Quelle optimieren'
        }
    ], proTitle: 'Vorteile', conTitle: 'Einschränkungen' },

    { type: 'diagnostic', variant: 'warning', title: 'Vorsicht: Übermäßige Komprimierung verschlechtert das Bild', icon: 'mdi:alert', badge: 'Qualität', html: 'Halten Sie die Qualität >75 % für Fotografie und >85 % für redaktionelle Inhalte. Darunter werden Komprimierungsartefakte (Flecken, Streifenbildung) sichtbar. Ein Bild, das als Thumbnail gut aussieht, kann in groß schlecht wirken.' },

    { type: 'glossary', items: [
        {
            term: 'Verlustbehaftete Komprimierung',
            definition: 'Entfernt visuelle Daten, die das menschliche Auge als „Rauschen“ wahrnimmt. Ideal für Fotografie. JPEG, verlustbehaftetes WebP, HEIC sind verlustbehaftet.'
        },
        {
            term: 'Verlustfreie Komprimierung',
            definition: 'Reduziert die Größe ohne Verlust visueller Informationen. PNG und verlustfreies WebP. Ideal für Grafiken, Logos, Transparenzen.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Metriken für die Benutzererfahrung: LCP (Ladegeschwindigkeit), FID (Interaktionslatenz), CLS (visuelle Stabilität). Beeinflussen das SEO-Ranking.'
        },
        {
            term: 'WebP',
            definition: 'Von Google entwickeltes Format. 25–35 % kleiner als JPEG. Wird von 95 % der modernen Browser unterstützt (alle außer IE).'
        },
        {
            term: 'Komprimierungsartefakte',
            definition: 'Visuelle Defekte durch übermäßige Komprimierung: Flecken, Farbabstufungen, unscharfe Kanten. Unmerklich bei >75 % Qualität.'
        }
    ] },

    { type: 'message', title: 'Professionelle Web Optimierung', ariaLabel: 'Informationen zur Bildoptimierung für SEO', html: 'Es ist keine technische Spielerei: Das Komprimieren von Bildern ist eine direkte Investition in die Benutzererfahrung und das Google-Ranking. Auf Mobilgeräten zählt jedes Kilobyte. Unser Tool macht das, was früher teure Profi-Software ($$$) erforderte, zu einem kostenlosen 3-Klick-Prozess.' },

    { type: 'title', text: 'Bereit für das moderne Web', level: 3 },
    { type: 'paragraph', html: 'Nutzen Sie intelligente Komprimierung und das WebP-Format, damit Ihre Onlinevisibilität schnell, responsiv und wettbewerbsfähig in der Suche ist. Professionelle Qualität, minimales Gewicht, sofortiges Laden.' }
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

export const content: ImageCompressorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Häufig gestellte Fragen",
    faq,
    bibliographyTitle: "Referenzen",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

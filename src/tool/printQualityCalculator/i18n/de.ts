import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'druckqualitaetsrechner-pixel-zu-cm-dpi';
const title = 'Druckqualitätsrechner: Pixel in CM und DPI';
const description = 'Berechnen Sie die maximale Druckgröße Ihrer Fotos basierend auf deren Auflösung. Konvertieren Sie Pixel in Zentimeter und Zoll für professionelle Druckergebnisse.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Auflösung analysieren",
    dropSubtitle: "Ziehen Sie Ihr Bild hierher, um dessen Druckgröße zu berechnen.",
    resultsTitle: "Dateispezifikationen",
    dpiDensityLabel: "Gewünschte Druckdichte (DPI)",
    dpiPointsLabel: "Punkte pro Zoll",
    maxPrintTitle: "Maximale Druckgröße",
    standardFormatsTitle: "Unterstützte Standardformate",
    formatColumn: "Format",
    measureColumn: "Maße",
    supportColumn: "Unterstützt?",
    qualityExcellent: "Hervorragende Qualität",
    qualityGood: "Gute Qualität",
    qualityFair: "Bildschirmqualität",
    qualityPoor: "Nicht geeignet",
    qualityExcellentDesc: "Ideal für Kunstmagazine, Fotobücher und Nahaufnahmen.",
    qualityGoodDesc: "Ausreichend für Poster und Betrachtung aus mittlerer Entfernung.",
    qualityFairDesc: "Geeignet für digitale Betrachtung oder weit entfernte Plakate.",
    qualityPoorDesc: "Das Bild wird verpixelt wirken. Drucken wird nicht empfohlen.",
    unitCm: "cm",
    unitInches: "Zoll",
    dpiScreenLabel: "Bildschirm",
    dpiNewspaperLabel: "Zeitung",
    dpiPrintLabel: "Druck",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Postkarte",
    formatQuartilla: "Quartilla",
    formatFolio: "Folio",
    formatDoubleFolio: "Doppelfolio",
    formatSmallPoster: "Kleines Poster",
    formatLargePoster: "Großes Poster",
    formatPlane: "Plan",
    supportedText: "Ja (Abgedeckt)",
    notSupportedPrefix: "Nein (",
    invalidImageError: "Bitte wählen Sie ein gültiges Bild aus",
    faqTitle: "Häufig gestellte Fragen": "Referenzen"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Was ist DPI und warum ist es wichtig?",
        answer: "DPI (Dots Per Inch) gibt an, wie viele Tintenpunkte der Drucker auf einem linearen Zoll setzt. Je höher die DPI, desto schärfer das Bild, aber desto kleiner die physische Gesamtgröße, die Ihre Pixel abdecken.",
    },
    {
        question: "Was ist die ideale DPI für den Druck eines Fotos?",
        answer: "Der Industriestandard für hervorragende Fotoqualität liegt bei 300 DPI. Für große Drucke, die aus der Ferne betrachtet werden, können 150 DPI ausreichen.",
    },
    {
        question: "Kann ich die DPI meines Bildes erhöhen, ohne an Qualität zu verlieren?",
        answer: "Nein. Erhöhen Sie die DPI, ohne die Pixel zu ändern, verringert sich einfach die Druckgröße. Wenn Sie Pixel mit Software „erfinden“ (Upscaling), kann das Bild unscharf wirken.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Bild hochladen",
        text: "Laden Sie das Foto hoch, das Sie drucken möchten, um dessen Abmessungen in Pixeln zu erfahren.",
    },
    {
        name: "DPI anpassen",
        text: "Bewegen Sie den Schieberegler, um zu sehen, wie sich die Endgröße je nach Punktdichte ändert (72 bis 600 DPI).",
    },
    {
        name: "Format prüfen",
        text: "Überprüfen Sie die Tabelle der Standardformate (A4, A3 usw.), um zu sehen, ob Ihre Auflösung für das gewünschte Papier ausreicht.",
    },
    {
        name: "Qualität bestätigen",
        text: "Stellen Sie sicher, dass die Anzeige „Hervorragende Qualität“ anzeigt, bevor Sie den Druck in Auftrag geben.",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionelle Berechnung der Druckauflösung',
        items: [
            'Genaue Umrechnung von Pixeln in Zentimeter und Zoll',
            'Berechnung der Maximalgröße basierend auf gewünschten DPI',
            'Kompatibilität mit Standardformaten (A4, A3 usw.)',
            'Leitfaden zu 4 Qualitätsstufen: Hervorragend bis Nicht geeignet'
        ]
    },
    { type: 'title', text: 'Der ultimative Leitfaden für Druckqualität und DPI', level: 2 },
    { type: 'paragraph', html: 'Haben Sie jemals ein Foto gedruckt und es war unscharf oder verpixelt? Das Geheimnis liegt im mathematischen Verhältnis zwischen <strong>Pixeln</strong> und <strong>DPI</strong> (Dots Per Inch). Dieses Tool berechnet die exakte Maximalgröße, in der Sie Ihre Bilder ohne professionellen Qualitätsverlust drucken können.' },

    { type: 'stats', items: [
        { value: '300', label: 'Professioneller Standard DPI', icon: 'mdi:target' },
        { value: '100%', label: 'Präzise Berechnungen', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Unterstützte Formate', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'DPI verstehen: Pixel vs. Punkte', level: 3 },
    { type: 'paragraph', html: 'Die häufigste Verwechslung besteht darin, dass DPI und Pixel dasselbe sind. Das sind sie nicht. Pixel befinden sich IN Ihrer digitalen Datei. DPI ist die Art und Weise, wie der Drucker diese in Tinte auf Papier umwandelt.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Wie viele Tintenpunkte der Drucker auf einem linearen Zoll (2,54 cm) platziert.',
        '<strong>Pixel:</strong> Kleine Datenquadrate in Ihrer digitalen Datei. Ein Foto mit 3000x2000 Pixeln hat konstante Informationen, unabhängig von der DPI.',
        '<strong>Die Formel:</strong> Druckgröße (Zoll) = Pixel / DPI. Beispiel: 3000 Pixel / 300 DPI = 10 Zoll (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Erläuterung der DPI Qualitätsstufen', level: 3 },
    { type: 'table', headers: ['DPI', 'Visuelle Qualität', 'Anwendungsfälle', 'Betrachtungsabstand'], rows: [
        ['600+ DPI', 'Hervorragend (Perfekt)', 'Kunstbücher, Luxusmagazine, feine Fotografie', 'Weniger als 10 cm'],
        ['300-400 DPI', 'Hervorragend (Professionell)', 'Fotografie, Bücher, Firmenkataloge', '20-30 cm (Hand)'],
        ['150-200 DPI', 'Gut (Web-Druck)', 'Poster, Kalender, mittlere Betrachtung', '1-2 Meter'],
        ['72-100 DPI', 'Bildschirm (Akzeptabel)', 'Plakate, weit entfernte Banner', '5+ Meter'],
        ['10-30 DPI', 'Niedrig (Nicht geeignet)', 'Riesenplakate, extrem weit entfernte Betrachtung', '50+ Meter']
    ] },

    { type: 'card', title: 'Die Goldene Regel der 300 DPI', html: 'Für fotografischen und professionellen redaktionellen Druck liegt der Industriestandard bei <strong>300 DPI</strong>. Dies stellt sicher, dass das menschliche Auge aus normaler Entfernung (20-30 cm) keine einzelnen Tintenpunkte wahrnimmt. Bei weniger als 300 DPI wird ein Pixelraster sichtbar.' },

    { type: 'comparative', items: [
        {
            title: 'Handfotografie (10x15 Fotos)',
            description: '300 DPI zwingend - wird aus der Nähe betrachtet',
            icon: 'mdi:image',
            points: [
                'Bei 3000x2000 Pixeln = maximal 10x6,7 Zoll',
                'Hervorragende Qualität garantiert',
                'Standard für Alben und Geschenke'
            ]
        },
        {
            title: 'Wandposter A3 (30x42 cm)',
            description: '150 DPI ausreichend - wird aus der Ferne betrachtet',
            icon: 'mdi:wall-fire',
            points: [
                'Betrachtung aus 1-2 Metern Entfernung',
                'Weniger Pixel benötigt',
                'Schont die Kameraqualität'
            ],
            highlight: true
        },
        {
            title: 'Plakatwand (200x300 cm)',
            description: '15-30 DPI - wird aus vielen Metern Entfernung betrachtet',
            icon: 'mdi:sign',
            points: [
                'Beobachtung aus über 20 Metern Entfernung',
                'Sogar niedrige Auflösung sieht gut aus',
                'Optimierung großer Dateien'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Dateien für professionellen Druck vorbereiten', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs. RGB: Drucker verwenden Tinte (CMYK), Bildschirme Licht (RGB). Konvertieren Sie, um Farbüberraschungen zu vermeiden.',
            con: 'Farben können sich beim Konvertieren ändern – erst Vorschau prüfen'
        },
        {
            pro: 'Beschnitt: Fügen Sie 3 mm extra pro Seite hinzu, wenn das Bild bis zum Papierrand reichen soll',
            con: 'Ohne Beschnitt können Schnittkanten weiß bleiben'
        },
        {
            pro: 'Upscaling funktioniert NICHT: Das Erhöhen der Pixel in Photoshop fügt falsche Informationen hinzu (Glättung)',
            con: 'Wenn Sie groß drucken möchten, benötigen Sie ein hochauflösendes Originalfoto'
        },
        {
            pro: 'Formate: TIFF ohne Komprimierung oder hochwertige JPEG für Fotos; Vektor (AI, EPS) für Logos',
            con: 'PNG unterstützt natives CMYK in den meisten Web-Druckereien nicht'
        }
    ], proTitle: 'Empfehlungen', conTitle: 'Gegenanzeigen' },

    { type: 'diagnostic', variant: 'warning', title: 'Häufiger Fehler: Der Upscaling Mythos', icon: 'mdi:alert', badge: 'Kritisch', html: '<strong>Erhöhen Sie DPI in Photoshop NICHT ohne die Pixel zu ändern.</strong> Eine Erhöhung von 72 DPI auf 300 DPI verringert einfach die physische Druckgröße. Wenn Sie Pixel durch Interpolation (Upscaling) „hinzufügen“, wirkt das Bild geglättet oder unscharf. Sie benötigen REAL-Pixel von der Quelle.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Maß für die Druckauflösung: wie viele Tintenpunkte pro linearem Zoll (2,54 cm). 300 DPI = 300x300 = 90.000 Punkte pro Quadratzoll.'
        },
        {
            term: 'CMYK',
            definition: 'Druckfarbraum: Cyan, Magenta, Yellow, blacK. Basierend auf subtraktiver Tinte. Anders als RGB (additives Licht von Bildschirmen).'
        },
        {
            term: 'Beschnitt',
            definition: 'Zusätzlicher Bereich (meist 3 mm), der gedruckt und dann am Rand beschnitten wird. Stellt sicher, dass das Bild bis zum Rand reicht, ohne weiße Ränder zu hinterlassen.'
        },
        {
            term: 'Native Auflösung',
            definition: 'ECHTE, von der Kamera erfasste Pixel ohne Manipulation. DPI-Erhöhung ohne Pixeländerung erzeugt keine „native Auflösung“.'
        },
        {
            term: 'Interpolation (Upscaling)',
            definition: 'Algorithmus, der neue Pixel basierend auf vorhandenen erfindet. Nützlich für kleine Vergrößerungen, verliert aber bei starken Vergrößerungen an Schärfe.'
        }
    ] },

    { type: 'message', title: 'Technische Präzision für professionelle Ergebnisse', ariaLabel: 'Informationen zu Druckberechnungen', html: 'Unser Rechner rechnet Pixel unter Berücksichtigung internationaler Standards (ISO 216 für Papier) in Zentimeter um. Es ist nicht nur ein Rechner: Er validiert, ob das Foto für diese Druckgröße passt, während die professionelle Qualität erhalten bleibt.' },

    { type: 'title', text: 'Fazit: Drucken ohne Überraschungen', level: 3 },
    { type: 'paragraph', html: 'Der Unterschied zwischen einem schönen Druck und einem enttäuschenden Ergebnis liegt in der Kenntnis des Verhältnisses zwischen Pixeln und DPI. Nutzen Sie diesen Rechner, um Ihre Dateien zu validieren, BEVOR Sie in die Druckerei gehen. So vermeiden Sie unnötige Kosten und frustrierende Ergebnisse.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Häufig gestellte Fragen",
    faq: "Referenzen",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

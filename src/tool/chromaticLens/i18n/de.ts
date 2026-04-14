import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-farbpaletten-extraktion-online';
const title = 'Chromatic Lens: Online Extraktion von Farbpaletten';
const description = 'Extrahieren Sie kostenlos professionelle Farbpaletten aus jedem Bild. Identifizieren Sie dominante Farben in Ihren Fotos mithilfe mathematischer Algorithmen.';

const ui: ChromaticLensUI = {
    dropTitle: "Farben analysieren",
    dropSubtitle: "Ziehen Sie ein Bild hierher, um seine chromatische DNA zu extrahieren.",
    processingLabel: "Palette wird extrahiert...",
    paletteTitle: "Extrahierte Palette",
    copyLabel: "HEX kopieren",
    copiedLabel: "Kopiert!",
    colorCountLabel: "Anzahl der Farben",
    changeImage: "Bild ändern",
    faqTitle: "Häufig gestellte Fragen zur Farbetraktion",
    bibliographyTitle: "Ressourcen und technische Dokumentation"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Wie funktioniert die Farbetraktion?",
        answer: "Wir verwenden den 'Median Cut' Algorithmus, der Bildpixel basierend auf ihrer Nähe im RGB-Farbraum gruppiert, um die repräsentativsten Töne zu finden.",
    },
    {
        question: "Kann ich Farben in meinen Design-Editor kopieren?",
        answer: "Ja, durch Klicken auf jede Farbe wird der HEX-Code automatisch in Ihre Zwischenablage kopiert, bereit zum Einfügen in Photoshop, Figma oder CSS.",
    },
    {
        question: "Welche Bildtypen kann ich analysieren?",
        answer: "Jede JPG-, PNG- oder WebP-Datei. Die Verarbeitung erfolgt lokal, sodass auch große Bilder schnell ohne Netzwerkkosten analysiert werden.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Bild hochladen",
        text: "Laden Sie das Foto hoch, aus dem Sie chromatische Inspiration extrahieren möchten.",
    },
    {
        name: "Präzision anpassen",
        text: "Wählen Sie aus, wie viele dominante Farben das Tool identifizieren soll (von 3 bis 12).",
    },
    {
        name: "Ergebnis analysieren",
        text: "Die Palette erscheint sofort mit den entsprechenden Hexadezimal Codes.",
    },
    {
        name: "Kopieren und verwenden",
        text: "Klicken Sie auf die Töne, um sie zu speichern und in Ihrem Designprojekt anzuwenden.",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "Median Cut Algorithm - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Median_cut",
    },
    {
        name: "Farblehre für Designer",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Intelligente Extraktion von Farbpaletten',
        items: [
            'Professioneller Median-Cut-Algorithmus zur Farbanalyse',
            'Extraktion von 3–12 dominanten Farben aus jedem Bild',
            'HEX-Codes direkt in die Zwischenablage kopierbar',
            '100% lokale Verarbeitung – ideal für Kreative'
        ]
    },
    { type: 'title', text: 'Farbetraktion: Wissenschaft und Design', level: 2 },
    { type: 'paragraph', html: 'Haben Sie sich jemals gefragt, warum ein Filmfoto so harmonisch wirkt? Das ist kein Zufall, sondern angewandte Farblehre. Chromatic Lens ermöglicht es Ihnen, diese Harmonie direkt aus den Pixeln zu extrahieren und in HEX-Codes umzuwandeln, die Sie in Ihren Designprojekten verwenden können.' },

    { type: 'stats', items: [
        { value: 'Sofort', label: 'Farbanalyse', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Lokale Privatsphäre', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Präziser Farbraum', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'Der Median Cut Algorithmus erklärt', level: 3 },
    { type: 'paragraph', html: 'Die intelligente Palettenextraktion ist keine einfache Zufallsauswahl von Pixeln. Sie nutzt den Median-Cut-Algorithmus, eine rekursive Zerlegungstechnik, die eine originalgetreue Darstellung gewährleistet:' },
    { type: 'list', items: [
        '<strong>Rekursive Teilung:</strong> Der RGB-\"Farbwürfel\" des Bildes wird rekursiv in kleinere Boxen unterteilt.',
        '<strong>Volumen-Balance:</strong> Jede Partition sucht nach Gruppen von Pixeln aus dem gleichen Farbraum mit ähnlichen Volumina.',
        '<strong>Gewichteter Durchschnitt:</strong> Die resultierende Farbe jeder Box ist der Durchschnitt aller darin enthaltenen Pixel.',
        '<strong>Originalgetreue Darstellung:</strong> Die dominanten Farben spiegeln die reale visuelle Atmosphäre des Bildes wider, nicht nur eine simple Stichprobe.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Kreativer Workflow', html: 'Ideal für Webentwickler, UX/UI-Designer, digitale Künstler und Kreative, die die visuelle Essenz eines Fotos, Films oder einer Vorlage sofort erfassen möchten, um sie in ihren Interfaces, Illustrationen oder Markenpaletten anzuwenden.' },

    { type: 'title', text: 'Anwendungsfälle im digitalen Design', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UI Designer',
            description: 'Paletten aus Hero-Images extrahieren, um stimmige Interfaces zu erstellen',
            icon: 'mdi:palette',
            points: [
                'Harmonische Hintergrundfarben',
                'Buttons und sekundäre Elemente',
                'Automatisch berechneter Kontrast'
            ]
        },
        {
            title: 'Webentwickler',
            description: 'CSS-Stylesheets direkt aus visuellen Referenzen erstellen',
            icon: 'mdi:code-braces',
            points: [
                'HEX direkt in CSS kopieren',
                'Farbvariablen in SCSS/CSS',
                'Konsistente Themes ohne vorheriges Design'
            ],
            highlight: true
        },
        {
            title: 'Digitale Künstler und Illustratoren',
            description: 'Chromatische Referenzen aus Filmen, Natur oder Kunst einfangen',
            icon: 'mdi:brush',
            points: [
                'Referenzpaletten aus Meisterwerken',
                'Cineastische Farbstudien',
                'Sofortige visuelle Inspiration'
            ]
        },
        {
            title: 'Branding Spezialisten',
            description: 'Visuelle Identitäten basierend auf Beispielfotos entwickeln',
            icon: 'mdi:tag-multiple',
            points: [
                'Markenfarben aus Bildern extrahieren',
                'Professionelle Farb-Guides erstellen',
                'Visuelle Konsistenz gewährleisten'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Angewandte Farblehre', level: 3 },
    { type: 'table', headers: ['Farbkonzept', 'Definition', 'Praktische Anwendung'], rows: [
        ['Farharmonie', 'Farbkombination, die visuell ausgewogen ist', 'Konsistente visuelle Identität im UI'],
        ['Kontrast', 'Helligkeitsunterschied zwischen Farben', 'Lesbarkeit und visuelle Hierarchie'],
        ['Sättigung', 'Farbintensität eines Tons', 'Professionalität (niedrig) vs. Energie (hoch)'],
        ['Farbtemperatur', 'Warme Farben (Rot) vs. kühle Farben (Blau)', 'Emotionspsychologie im Design'],
        ['Monochromatische Palette', 'Variationen eines einzelnen Tons', 'Eleganz und Minimalismus']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Mathematische Präzision bei der Extraktion – keine ungefähre visuelle Auswahl',
            con: 'Kaum sichtbare Farben können enthalten sein, wenn sie viele Pixel haben'
        },
        {
            pro: 'Sofortiges Kopieren in die Zwischenablage – perfekte Integration in den Workflow',
            con: 'Benötigt einen modernen Browser, der mit der Canvas-API kompatibel ist'
        },
        {
            pro: 'Vollständige Privatsphäre – 100% lokale Analyse ohne Datenübermittlung',
            con: 'Kein Verlauf früherer Analysen gespeichert'
        },
        {
            pro: 'Kompatibel mit jedem digitalen Bildformat',
            con: 'Endgültige Farben hängen von der Bildkompression und Qualität ab'
        }
    ], proTitle: 'Vorteile', conTitle: 'Einschränkungen' },

    { type: 'diagnostic', variant: 'success', title: 'Realistische Farbdarstellung', icon: 'mdi:check-circle-outline', badge: 'Fortgeschrittener Algorithmus', html: 'Im Gegensatz zu Tools, die einfach zufällige Pixel abfragen, verwendet unser System den Median-Cut-Algorithmus, der die gesamte Pixelanzahl jedes Tons gewichtet. So wird sichergestellt, dass die resultierende Palette die visuelle Atmosphäre und Farbpsychologie des Originalbildes originalgetreu widerspiegelt.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Farbauswahl-Algorithmus, der den RGB-Raum rekursiv in Boxen unterteilt und so eine gleichmäßige Verteilung gewährleistet. Historisch für GIF- und indizierte Farbtechnologien genutzt.'
        },
        {
            term: 'RGB-Farbraum',
            definition: 'Farbmodell basierend auf Rot, Grün und Blau. Jede Farbe wird als Kombination dieser drei Werte (0–255) dargestellt. Standard für Bildschirme und Web.'
        },
        {
          term: 'HEX-Code',
          definition: '6-stellige hexadezimale Notation (#RRGGBB) zur Darstellung von Farben im Web: #FF0000 (Rot), #00FF00 (Grün), #0000FF (Blau). Universell in CSS, Figma und Adobe.'
        },
        {
            term: 'Farbsättigung',
            definition: 'Intensität oder Reinheit der Farbe. Hohe Sättigung = lebendige Farbe; niedrige Sättigung = gräuliche Farbe. Beeinflusst die emotionale Wahrnehmung.'
        },
        {
            term: 'Farbharmonie',
            definition: 'Auswahl und Kombination von Farben, die zu einem visuell ansprechenden Ergebnis führen. Kann monochromatisch, komplementär, analog oder triadisch sein.'
        }
    ] },

    { type: 'message', title: 'Professionelle Farbanalyse', ariaLabel: 'Technische Informationen zur Farbanalyse', html: 'Chromatic Lens verwandelt manuelle visuelle Analyse in algorithmische Präzision. Es extrahiert nicht nur Farben: Es fängt die emotionale und visuelle Essenz jedes Bildes ein und legt sie als einsatzbereite HEX-Codes direkt in Ihre Zwischenablage. Volle Privatsphäre, keine Limits.' },

    { type: 'title', text: 'Design aus visueller Inspiration', level: 3 },
    { type: 'paragraph', html: 'Die beste Farbpalette ist diejenige, die die visuelle Absicht Ihrer Referenz einfängt. Chromatic Lens automatisiert den ehemals manuellen Prozess: beobachten, analysieren, notieren. Jetzt ziehen Sie einfach ein Bild und erhalten in Sekunden professionelle HEX-Codes.' }
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

export const content: ChromaticLensLocaleContent = {
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

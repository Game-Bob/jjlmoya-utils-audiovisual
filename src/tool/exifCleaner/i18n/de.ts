import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadaten-reinigungsgeraet-gps-foto-datenschutz-entfernen';
const title = 'EXIF Metadaten Reiniger: GPS und versteckte Daten aus Fotos entfernen';
const description = 'Kostenloses Online-Tool zum Löschen von EXIF-Metadaten, GPS-Koordinaten und Kameraspezifikationen aus Ihren Bildern vor dem Teilen. 100 % privat: funktioniert ohne das Hochladen von Fotos ins Internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Ziehen Sie Ihr Bild hierher",
    dropSubtitle: "Entfernen Sie GPS Metadaten, Kameramodell und versteckte Einstellungen.",
    dropLocalInfo: "100 % lokale Verarbeitung. Nichts wird in die Cloud hochgeladen.",
    selectButton: "Bild auswählen",
    processingText: "Metadaten werden bereinigt...",
    analysisCompleted: "Analyse abgeschlossen",
    downloadButton: "Gereinigtes Bild herunterladen",
    resetButton: "Weiteres Bild reinigen",
    privacyRiskTitle: "DATENSCHUTZRIsiken ENTDECKT:",
    gpsLabel: "GPS:",
    gpsDetected: "ERKANNT",
    gpsNotFound: "NICHT GEFUNDEN",
    cameraLabel: "KAMERA:",
    softwareLabel: "SOFTWARE:",
    dateLabel: "DATUM:",
    otherTechnicalDetails: "WEITERE TECHNISCHE DETAILS",
    noMetadataFound: "Keine lesbaren EXIF-Metadaten gefunden.",
    alreadyCleanInfo: "Das Bild ist möglicherweise bereits bereinigt.",
    previewLabel: "Vorschau",
    faqTitle: "Häufig gestellte Fragen zum Foto Datenschutz",
    bibliographyTitle: "Ressourcen und technische EXIF Dokumentation",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Was sind EXIF-Metadaten?",
        answer: "EXIF (Exchangeable Image File Format) sind versteckte Informationen, die Ihre Kamera oder Ihr Telefon in jedem Foto speichert. Dazu gehören das genaue Datum, das Gerätemodell, die Aufnahmeeinstellungen (ISO, Blende) und ganz entscheidend die GPS-Koordinaten des Ortes, an dem das Foto aufgenommen wurde.",
    },
    {
        question: "Ist es sicher, dieses Online-Tool zu verwenden?",
        answer: "Ja, da die Verarbeitung zu 100 % lokal in Ihrem Browser erfolgt. Ihre Fotos werden niemals auf einen Server hochgeladen; die Reinigung findet direkt im Speicher Ihres Geräts statt, was absolute Privatsphäre garantiert.",
    },
    {
        question: "Welche spezifischen Daten entfernt der Reiniger?",
        answer: "Er löscht alle EXIF-Tags (GPS, Kameramarke, Seriennummer), IPTC (Urheberrecht, Autor) und XMP (Bearbeitungsverlauf). Ihr Bild wird 'rein' und behält nur die visuellen Pixel.",
    },
    {
        question: "Verliert das Bild beim Reinigen der Metadaten an Qualität?",
        answer: "Nein. Wir entfernen nur den technischen Daten-Header der Datei. Die Bilddaten (Pixel) bleiben identisch, sodass die visuelle Qualität überhaupt nicht beeinträchtigt wird.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Bilder auswählen",
        text: "Ziehen Sie Ihre Fotos hierher oder wählen Sie sie aus Ihrem Dateiexplorer aus. Sie können mehrere gleichzeitig verarbeiten.",
    },
    {
        name: "Aktuelle Daten analysieren",
        text: "Das Tool zeigt Ihnen an, welche sensiblen Informationen es erkannt hat (z. B. 'GPS-Koordinaten erkannt').",
    },
    {
        name: "Verarbeiten und reinigen",
        text: "Klicken Sie auf den Reinigen Button, um sofort alle Metadaten Tags zu entfernen.",
    },
    {
        name: "Sichere Fotos herunterladen",
        text: "Speichern Sie die neuen Versionen Ihrer Bilder, die nun anonymisiert und bereit sind, sicher in sozialen Medien geteilt zu werden.",
    },
];

const bibliography: ExifCleanerLocaleContent['bibliography'] = [
    {
        name: "Exchangeable Image File Format (EXIF) - Wikipedia",
        url: "https://de.wikipedia.org/wiki/Exchangeable_Image_File_Format",
    },
    {
        name: "W3C - Metadaten in Bildern",
        url: "https://www.w3.org/community/image-metadata/",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIF Metadaten Reiniger: Schützen Sie Ihre Privatsphäre',
        items: [
            'GPS-Koordinaten und Standort sofort aus Ihren Fotos entfernen',
            'Kameramodell, Seriennummer und technische Informationen löschen',
            '%100 % browserbasierte Verarbeitung – Ihre Bilder verlassen niemals Ihr Gerät',
            'Behält die visuelle Qualität bei – nur versteckte Daten werden entfernt'
        ]
    },
    { type: 'title', text: 'Vollständiger Leitfaden zum Datenschutz und zu EXIF Metadaten in der digitalen Fotografie', level: 2 },
    { type: 'paragraph', html: 'Haben Sie sich jemals gefragt, wie viele persönliche Informationen Sie teilen, wenn Sie ein Foto in soziale Medien hochladen? EXIF-Metadaten sind wie ein <strong>unsichtbarer Fingerabdruck</strong>, der alles verraten kann, von Ihrem genauen Wohnort bis hin zum Preis Ihrer Fotoausrüstung. Dieser Leitfaden erklärt, wie Sie Ihre Privatsphäre effektiv schützen.' },

    { type: 'stats', items: [
        { value: '100 %', label: 'Privatsphäre – Lokale Verarbeitung', icon: 'mdi:shield-check' },
        { value: '0 %', label: 'Auf Servern gespeicherte Daten', icon: 'mdi:database' },
        { value: 'Sofort', label: 'Metadaten-Entfernung', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Welche Informationen sind in Ihren Fotos versteckt?', level: 3 },
    { type: 'paragraph', html: 'Mehr als 90 % der digitalen Fotos enthalten sensible Informationen, die Ihre Sicherheit gefährden können. Hier sind alle Daten, die preisgegeben werden können:' },
    { type: 'list', items: [
        '<strong>GPS-Koordinaten:</strong> Der genaue Breitengrad und Längengrad der Aufnahme (Heimatadresse, Arbeitsplatz, häufig besuchte Orte).',
        '<strong>Geräteidentifikation:</strong> Marke, Modell und Seriennummer der Kamera oder des Smartphones (wertvolle Informationen).',
        '<strong>Technische Einstellungen:</strong> ISO, Blende (f/), Belichtungszeit und Brennweite (ermöglicht die Identifizierung Ihrer spezifischen Ausrüstung).',
        '<strong>Genaues Datum und Uhrzeit:</strong> Ein vollständiger Zeitplan Ihrer täglichen Aktivitäten.',
        '<strong>Bearbeitungsverlauf:</strong> Verwendete Software, Bearbeitungssoftware und Datum der letzten Änderung.',
        '<strong>Urheberrechtsdaten:</strong> Fotograf, Urheberrecht und persönliche Notizen.'
    ] },

    { type: 'title', text: 'Reale Sicherheitsrisiken: Anwendungsfälle', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Professionelle Fotografen',
            description: 'Risiko des Diebstahls teurer Ausrüstung, die über die Seriennummer identifiziert wurde',
            icon: 'mdi:camera',
            points: [
                'Diebe suchen nach Fotografen mit wertvoller Ausrüstung',
                'GPS identifiziert die Heimatadresse des Besitzers',
                'Seriennummer erleichtert den Weiterverkauf im Dark Web'
            ]
        },
        {
            title: 'Eltern und Influencer',
            description: 'Extreme Gefahr: Echtzeit-Standort von Kindern',
            icon: 'mdi:alert',
            points: [
                'Täter verfolgen Standorte mittels OSINT',
                'Täter können tägliche Routinen identifizieren',
                'Risiko von Stalking und physischer Verfolgung'
            ],
            highlight: true
        },
        {
            title: 'Social Media Nutzer',
            description: 'Preisgabe der persönlichen und beruflichen Privatsphäre',
            icon: 'mdi:share-variant',
            points: [
                'Posten aus dem Büro verrät den Arbeitsplatz',
                'Geolokalisierung ermöglicht Rückschlüsse auf das ungefähre Gehalt',
                'Öffentliche Daten ermöglichen gezieltes Profiling'
            ]
        },
        {
            title: 'Reisende und Nomaden',
            description: 'Gefahr von Diebstahl in leerstehenden Häusern',
            icon: 'mdi:map',
            points: [
                'Veröffentlichtes GPS weist auf leeres Haus während der Reise hin',
                'Ausrüstungsdaten ziehen Kriminelle an',
                'Reiseverläufe verraten Zeitpläne und Muster'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Wie dieses Tool funktioniert', level: 3 },
    { type: 'list', items: [
        '<strong>1. Bilder auswählen:</strong> Fotos ziehen oder den Selektor verwenden. Mehrere gleichzeitig verarbeiten.',
        '<strong>2. Automatische Analyse:</strong> Das Tool erkennt und zeigt alle vorhandenen Metadaten (GPS, Kameramodell, Datum usw.).',
        '<strong>3. Sofortige Reinigung:</strong> Mit einem Klick werden 100 % der schädlichen Metadaten entfernt.',
        '<strong>4. Sicherer Download:</strong> Erhalten Sie anonymisierte Bilder, die ohne Risiken in Netzwerken geteilt werden können.',
        '<strong>5. Rückstandsfrei:</strong> Das gereinigte Bild behält seine volle ursprüngliche visuelle Qualität bei.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Datenschutz Technologie', icon: 'mdi:shield-check', html: 'Dieses Tool verwendet die <strong>Canvas-API des Browsers</strong>, um eine saubere Kopie des Bildes Pixel für Pixel zu erstellen, was sicherstellt, dass:<br><br>- Keine Daten an Server gesendet werden<br>- Ihr Bild niemals Ihr Gerät verlässt<br>- Verarbeitung 100 % anonym und sicher ist<br>- Sie es nach dem ersten Laden sogar ohne Internetverbindung nutzen können' },

    { type: 'title', text: 'Welche spezifischen Daten werden entfernt?', level: 3 },
    { type: 'table', headers: ['Metadatentyp', 'Beispiele', 'Risiko'], rows: [
        ['EXIF (Austauschbar)', 'GPS, ISO, Blende, Verschlusszeit, Kameramodell', 'KRITISCH'],
        ['IPTC (Veröffentlichung)', 'Urheberrecht, Autor, Schlüsselwörter, Ort der Szene', 'HOCH'],
        ['XMP (XML)', 'Bearbeitungsverlauf, verwendete Software, vorgenommene Änderungen', 'MITTEL'],
        ['Basisdateidaten', 'Erstellungsdatum, genaue Uhrzeit, Gerät', 'HOCH']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Absoluter Datenschutz – 100 % browserbasierte Verarbeitung',
            con: 'Erfordert einen modernen Browser mit JavaScript-Unterstützung'
        },
        {
            pro: 'Sofort – Reinigung eines Fotos dauert weniger als 1 Sekunde',
            con: 'Verarbeitung großer Fotos kann auf älteren Geräten langsam sein'
        },
        {
            pro: 'Null Qualitätsverlust – entfernt nur technische Daten, keine Pixel',
            con: 'Bearbeitet das Bild nicht (Zuschnitte, Rotationen usw.)'
        },
        {
            pro: 'Völlig kostenlos ohne Limits – unbegrenzt Fotos verarbeiten',
            con: 'Kein Premium-Support oder Cloud-Speicher'
        }
    ], proTitle: 'Hauptvorteile', conTitle: 'Einschränkungen' },

    { type: 'tip', title: 'Tipp zur digitalen Sicherheit', html: '<strong>Reinigen Sie Ihre Fotos BEVOR sie</strong> in sozialen Netzwerken gepostet werden. Selbst wenn Sie einen Post löschen, könnten Metadaten bereits von Suchmaschinen oder Archiven indexiert worden sein. Vorsorge ist besser als Nachsorge. Machen Sie es sich zur Gewohnheit: <br><br><em>Foto → EXIF reinigen → Posten</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Reale Risiken bei fehlender Reinigung', icon: 'mdi:alert-circle', badge: 'Kritische Sicherheit', html: '<strong>Dokumentierte Fälle:</strong><br>- Eltern posten Fotos von Kindern – Täter verfolgten GPS<br>- Reisende Fotografen – Häuser wurden während ihrer Abwesenheit ausgeraubt<br>- Influencer – Wohnorte wurden von obsessiven Fans identifiziert<br><br>Das ist keine Paranoia: Es ist grundlegende digitale Hygiene im Jahr 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Ein Standard, der technische Metadaten in Bilddateien speichert: GPS, Kameradaten, Belichtungseinstellungen. In ~90 % der digitalen Fotos ohne Absicht des Nutzers vorhanden.'
        },
        {
            term: 'GPS-Koordinaten',
            definition: 'Präziser Breitengrad und Längengrad des exakten Ortes, an dem das Foto aufgenommen wurde. In Kombination mit sozialen Medien ermöglicht dies die physische Verfolgung von Personen.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Lesbare Veröffentlichungs-Metadaten: Urheberrecht, Autor, Schlüsselwörter, Beschreibung. Standard in der professionellen Fotografie.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Ein XML-Format, das den Bearbeitungsverlauf in Software wie Lightroom oder Photoshop aufzeichnet. Es kann alle vorgenommenen Änderungen offenlegen.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Eine Technik zum Sammeln öffentlicher Informationen (Social Media, Metadaten, Register), um Profile von Personen ohne deren Wissen zu erstellen.'
        },
        {
            term: 'Digitale Anonymisierung',
            definition: 'Der Prozess des Entfernens oder Verschleierns identifizierbarer Informationen: Standort, Gerät, Verhaltensmuster. Essenziell für den Online-Datenschutz.'
        }
    ] },

    { type: 'message', title: 'Ihre Privatsphäre liegt in Ihrer Verantwortung', ariaLabel: 'Informationen über Datenschutz und Datenrechte', html: 'Wir speichern, verarbeiten oder teilen Ihre Bilder nicht. <strong>Sie haben die volle Kontrolle.</strong> Alle Vorgänge finden ausschließlich in Ihrem Browser statt. Wenn Sie diesen Tab schließen, bleiben keine Aufzeichnungen Ihrer Aktivitäten zurück. So schützen Sie Ihre Privatsphäre im Internet: Tools, die Ihre Daten respektieren.' },

    { type: 'title', text: 'Fazit: Teilen ohne Spuren', level: 3 },
    { type: 'paragraph', html: 'Der Schutz Ihrer digitalen Identität beginnt bei kleinen Details. Das Reinigen Ihrer Fotos vor der Veröffentlichung ist ein <strong>essenzieller habit der digitalen Hygiene</strong> im Jahr 2026. Es schützt nicht nur Ihren Standort: Es schützt Ihre Familie, Ihr Vermögen und Ihre berufliche Privatsphäre. Ein scheinbar harmloses Foto kann mehr über Sie verraten, als Sie sich jemals vorstellen konnten.' }
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

export const content: ExifCleanerLocaleContent = {
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

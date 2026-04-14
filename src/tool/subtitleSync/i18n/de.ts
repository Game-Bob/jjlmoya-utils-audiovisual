import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'srt-untertitel-online-synchronisieren-timing-anpassen-kostenlos';
const title = 'SRT Untertitel online synchronisieren: Timing kostenlos anpassen';
const description = 'Online-Tool zum Vorziehen oder Verzögern von SRT-Untertiteln. Korrigieren Sie den Zeitversatz ganz einfach und laden Sie die synchronisierte Datei sofort herunter.';

const ui: SubtitleSyncUI = {
    dropTitle: "Ziehen Sie Ihre .SRT-Datei hierher",
    dropSubtitle: "oder klicken Sie zum Durchsuchen",
    adjustTitle: "Zeit anpassen",
    offsetLabel: "Versatz (Sekunden)",
    offsetHelp: "Negative Werte zum Vorziehen (z. B. -1.5) und positive Werte zum Verzögern verwenden.",
    linesStat: "Zeilen",
    firstStat: "Erster Untertitel",
    lastStat: "Letzter Untertitel",
    originalLabel: "ORIGINAL",
    resultLabel: "ERGEBNIS",
    downloadButton: "Korrigierte Version herunterladen",
    previewBadge: "VORSCHAU",
    unitSeconds: "Sek."
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Wie kann ich meine Untertitel synchronisieren, wenn der Ton früher kommt?",
        answer: "Wenn der Ton vor dem Text erscheint, müssen Sie die Untertitel verzögern. Geben Sie einen positiven Wert in den Rechner ein (z. B. 2.0, um sie um 2 Sekunden zu verzögern).",
    },
    {
        question: "Welche Dateiformate akzeptiert dieses Tool?",
        answer: "Derzeit ist das Tool für .SRT-Dateien (SubRip) optimiert, den am weitesten verbreiteten Standard in Videoplayern und Streaming-Plattformen.",
    },
    {
        question: "Ist es sicher, meine Untertiteldateien hochzuladen?",
        answer: "Ja, da die Verarbeitung zu 100 % lokal auf Ihrem Gerät erfolgt. Ihre Dateien werden an keinen Server gesendet; die Synchronisierung erfolgt direkt in Ihrem Browser.",
    },
    {
        question: "Kann ich nur einen Teil der Datei synchronisieren?",
        answer: "Nein, dieses Tool wendet einen konstanten Versatz auf die gesamte Datei an. Wenn der Versatz progressiv ist, benötigen Sie möglicherweise fortgeschrittenere Bearbeitungsmöglichkeiten.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "SRT-Datei hochladen",
        text: "Ziehen Sie die zu korrigierende Untertiteldatei in den Upload Bereich.",
    },
    {
        name: "Versatz bestimmen",
        text: "Messen Sie in Ihrem Player, wie hoch die Verzögerung oder der Vorlauf der Untertitel im Vergleich zum Ton ist.",
    },
    {
        name: "Versatz anpassen",
        text: "Geben Sie positive (Verzögerung) oder negative (Vorlauf) Sekunden im Bedienfeld ein.",
    },
    {
        name: "Datei herunterladen",
        text: "Überprüfen Sie in der Vorschau, ob die Zeiten stimmen, und klicken Sie auf Herunterladen, um Ihre neue SRT Datei zu erhalten.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "SubRip (SRT) Format-Spezifikation",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
    {
        name: "MDN Web Docs - FileReader API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/FileReader",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professionelle Untertitel Synchronisation',
        items: [
            'Sofortige Korrektur von Ton-Untertitel-Versätzen',
            'Unterstützt Standard-SRT-Dateien (SubRip)',
            '100 % lokale Verarbeitung – maximale Privatsphäre',
            'Keine Installation, kein Abonnement, völlig kostenlos'
        ]
    },
    { type: 'title', text: 'Perfekte SRT Untertitel Synchronisation', level: 2 },
    { type: 'paragraph', html: 'Es gibt für Zuschauer kaum etwas Frustrierenderes als Dialoge, die nicht zu den Stimmen passen. Untertitel-Versätze entstehen meist durch Unterschiede zwischen Videoversionen: Abweichungen in der Framerate, Werbeunterbrechungen, Produktionsintros oder Änderungen in der Kompression. Mit diesem Tool beheben Sie das Problem in Sekunden.' },

    { type: 'stats', items: [
        { value: '100 %', label: 'Lokale Verarbeitung', icon: 'mdi:shield' },
        { value: 'Millisekunden', label: 'Präzision', icon: 'mdi:clock-outline' },
        { value: 'Beliebig', label: 'KEIN Dateilimit', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Vorziehen vs. Verzögern: Praxisleitfaden', level: 3 },
    { type: 'paragraph', html: 'Der erste Schritt besteht darin, den Typ des Versatzes korrekt zu identifizieren. Hier ist die Logik:' },
    { type: 'list', items: [
        '<strong>Verzögerung (Positiver Wert):</strong> Wenn der Text ERSCHEINT, BEVOR der Ton zu hören ist. Die Untertitel sind zu früh. Beispiel: +2.0 Sekunden.',
        '<strong>Vorziehen (Negativer Wert):</strong> Wenn der Text ERSCHEINT, NACHDEM der Ton zu hören war. Die Untertitel sind zu spät. Beispiel: -2.0 Sekunden.',
        '<strong>Testen und Anpassen:</strong> Beginnen Sie mit kleinen Schritten (0,5 Sek.) und nutzen Sie die Vorschau zur Validierung.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Privatsphäre auf professionellem Niveau', html: 'Durch die Verarbeitung der Datei mittels clientseitigem JavaScript garantieren wir, dass der Inhalt Ihrer Untertitel niemals Ihren Computer verlässt. Essenziell für Übersetzer und Profis, die vertrauliches Material bearbeiten oder unter Vertraulichkeitsvereinbarungen (NDA) stehen.' },

    { type: 'title', text: 'Häufige Anwendungsfälle', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Übersetzer und Untertitler',
            description: 'Synchronisieren von Übersetzungen nach der Arbeit mit mehreren Videoversionen',
            icon: 'mdi:translate',
            points: [
                'SRT-Dateien aus verschiedenen Quellen',
                'Inhaltsversionierung (Kino vs. Streaming)',
                'Schnelle Lieferung ohne Werkzeugwechsel'
            ]
        },
        {
            title: 'Content Ersteller',
            description: 'Wiederherstellung von Untertiteln, wenn das Video mit einer anderen Framerate verarbeitet wurde',
            icon: 'mdi:video',
            points: [
                'Wiederverwendung vorhandener Untertitel',
                'Formatänderungen (720p zu 1080p)',
                'Vermeidung von manuellem Retiming tausender Zeilen'
            ],
            highlight: true
        },
        {
            title: 'Hobby Nutzer',
            description: 'Korrigieren heruntergeladener Untertitel, die nicht perfekt passen',
            icon: 'mdi:account',
            points: [
                'Generische asynchrone Untertitel',
                'Filme aus verschiedenen Regionen (PAL vs. NTSC)',
                'Streaming mit bearbeiteten Versionen'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Warum Untertitel asynchron werden', level: 3 },
    { type: 'table', headers: ['Häufige Ursache', 'Technische Beschreibung', 'Lösung'], rows: [
        ['Framerate-Unterschied', '23.976 fps vs. 25 fps - kumulierter Unterschied', 'Einmalige Versatzanpassung (dieses Tool)'],
        ['Editoriale Änderungen', 'Werbeschnitte oder entfernter/hinzugefügter Inhalt', 'Manuelle Berechnung + Synchronisation'],
        ['Region-Version', 'PAL (25 fps Europa) vs. NTSC (29.97 fps USA)', 'Einfacher mathematischer Versatz'],
        ['Auflösungsänderung', 'Neu-Enkodierung mit anderer Verarbeitungsgeschwindigkeit', 'Neuberechnung der Originaldatei']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Technische Einschränkungen', icon: 'mdi:information', badge: 'Wichtig', html: 'Dieses Tool wendet einen <strong>konstanten</strong> Versatz auf die gesamte Datei an. Wenn der Versatz <strong>progressiv</strong> ist (am Anfang passend, wird aber allmählich asynchron), deutet dies auf einen dauerhaften Framerate-Unterschied hin. In diesem Fall muss die Originaldatei in einer professionellen Videoschnittsoftware neu verarbeitet werden.' },

    { type: 'proscons', items: [
        {
            pro: 'Extreme Geschwindigkeit - verarbeitet große Dateien in Millisekunden',
            con: 'Passt nur fixen Versatz an, keinen progressiven'
        },
        {
            pro: 'Volle Privatsphäre - Inhalt verlässt nie den Browser',
            con: 'Erfordert modernen Browser mit aktiviertem JavaScript'
        },
        {
            pro: 'Universelles Format - funktioniert mit jeder Standard-SRT',
            con: 'Unterstützt keine anderen Formate (ASS, VTT, SCC usw.)'
        },
        {
            pro: 'Völlig kostenlos, keine Werbung, kein Tracking',
            con: 'Keine Änderungshistorie oder Versionierung'
        }
    ], proTitle: 'Vorteile', conTitle: 'Einschränkungen' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Das universellste Untertitelformat: Textdatei mit Sequenznummern, Zeiten (hh:mm:ss,mmm) und Text. De-facto-Standard in Playern und Plattformen.'
        },
        {
            term: 'Versatz (Offset)',
            definition: 'Fester Zeitbetrag, der zu allen Zeiten in der Datei addiert oder subtrahiert wird. Kann positive Sekunden (Verzögerung) oder negative (Vorziehen) sein.'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Bilder pro Sekunde. 24p (Kino), 25p (PAL/Europa), 29.97p (NTSC/USA), 60p (flüssiges Video). Unterschiede führen zu kumulativen Versätzen.'
        },
        {
            term: 'NTSC vs. PAL',
            definition: 'Regionale TV-Standards: PAL (25 fps) in Europa; NTSC (29.97 fps) in den USA. Ca. 4 % Geschwindigkeitsunterschied.'
        },
        {
            term: 'Progressiver Versatz',
            definition: 'Wenn die Synchronisation am Anfang stimmt, sich aber allmählich verschlechtert. Deutet auf Framerate-Unterschiede hin, erfordert Neuverarbeitung.'
        }
    ] },

    { type: 'message', title: 'Professionelle Bearbeitung mit voller Kontrolle', ariaLabel: 'Technische Informationen zur Synchronisation', html: 'Unser Ansatz ist einfach, aber leistungsstark: ein einziger Versatz, sofort angewendet, zu 100 % in Ihrem Browser verarbeitet. Keine Cloud, keine Speicherung, kein Tracking. Einfach hochladen, anpassen, herunterladen. Volle Kontrolle über Ihren Inhalt.' },

    { type: 'title', text: 'Fazit: Filme ohne Unterbrechungen', level: 3 },
    { type: 'paragraph', html: 'Eine perfekte Untertitel-Synchronisation ist entscheidend für ein hochwertiges audiovisuelles Erlebnis. Mit diesem Tool verwandeln Sie eine frustrierende Erfahrung in einen perfekten Filmabend, ohne die Notwendigkeit für teure oder komplizierte Software.' }
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

export const content: SubtitleSyncLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Häufig gestellte Fragen zur Untertitel Synchronisation',
    bibliography,
    bibliographyTitle: 'Technische Ressourcen zu Untertitelformaten',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

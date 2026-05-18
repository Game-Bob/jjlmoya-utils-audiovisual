import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'videos-zusammenfuegen-online';
const title = 'Videos online zusammenfügen: Mehrere Videos schnell & kostenlos';
const description = 'Fügen Sie mehrere Videos kostenlos, online und lokal zu einem zusammen. Keine Wasserzeichen, keine Uploads, 100% privat in Ihrem Browser.';

const ui: VideoMergerUI = {
    uploadTitle: "Laden Sie Ihre Videodateien hoch",
    uploadFormats: "Ziehen Sie mehrere Videos hierher oder klicken Sie zur Auswahl",
    privacyNote: "Ihre Videos werden 100% lokal verarbeitet. Nichts wird ins Internet hochgeladen.",
    addMoreBtn: "Weitere Videos hinzufügen",
    mergeBtn: "Videos jetzt zusammenfügen",
    mergingStatus: "Videos werden zusammengefügt...",
    downloadBtn: "Zusammengefügtes Video herunterladen",
    resetBtn: "Neu beginnen",
    emptyList: "Ziehen Sie Videos hierher oder wählen Sie sie aus, um zu beginnen.",
    listTitle: "Reihenfolge der zusammenzufügenden Videos",
    optionsTitle: "Ausgabeeinstellungen",
    optionResolution: "Auflösung",
    optionFps: "Bilder pro Sekunde (FPS)",
    optionsQualityNote: "Die endgültige Auflösung wird unter Beibehaltung des ursprünglichen Seitenverhältnisses im Letterbox-Format angepasst, falls die Videos unterschiedliche Abmessungen haben.",
    faqTitle: "Häufig gestellte Fragen zum Zusammenfügen von Videos",
    bibliographyTitle: "Bibliografie & Referenzen",
    resolutionWarning: "Achtung: Einige Videos haben unterschiedliche Auflösungen und werden automatisch angepasst."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Ist es sicher, meine Videos in dieses Tool hochzuladen?",
        answer: "Ja, es ist absolut sicher. Das Tool arbeitet zu 100% lokal in Ihrem Browser. Ihre Videos werden niemals über das Internet übertragen oder auf einem Server gespeichert.",
    },
    {
        question: "Was passiert, wenn meine Videos unterschiedliche Abmessungen haben?",
        answer: "Unser Tool skaliert die Videos automatisch auf die gewählte Ausgabeauflösung. Bei nicht exakt übereinstimmenden Proportionen werden schwarze Ränder (Letterboxing) hinzugefügt, um das ursprüngliche Seitenverhältnis zu erhalten.",
    },
    {
        question: "Bleibt der Ton der Videos beim Zusammenfügen erhalten?",
        answer: "Ja. Die Tonspuren jedes Videos werden erfasst und sequenziell in perfekter Synchronisation mit jedem Bildsegment gemischt.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Videos auswählen oder ziehen",
        text: "Laden Sie alle Videodateien, die Sie zusammenfügen möchten, direkt von Ihrem Computer oder Mobilgerät hoch.",
    },
    {
        name: "Reihenfolge festlegen",
        text: "Ordnen Sie die hochgeladenen Videos mithilfe der Auf- und Ab-Schaltflächen in der Liste an, um die Wiedergabereihenfolge zu bestimmen.",
    },
    {
        name: "Optionen anpassen",
        text: "Wählen Sie die Ausgabeauflösung und die Bilder pro Sekunde (FPS) des zusammengefügten Videos.",
    },
    {
        name: "Zusammenfügen und exportieren",
        text: "Drücken Sie die Schaltfläche 'Zusammenfügen'. Warten Sie, bis die Echtzeitverarbeitung abgeschlossen ist, und laden Sie die resultierende Datei herunter.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '100% lokales professionelles Zusammenfügen von Videos',
        items: [
            'Echtzeitverarbeitung direkt in Ihrem Browser',
            'Unterstützt mehrere Videos unterschiedlicher Größe und Formate (MP4, WEBM, MOV)',
            'Wählbare Ausgabeauflösung (720p, 1080p, 2K, 4K)',
            'Audiospuren perfekt sequenziell kombiniert'
        ]
    },
    { type: 'title', text: 'Videos online kostenlos zusammenfügen: Grenzenlose Einfachheit und Privatsphäre', level: 2 },
    { type: 'paragraph', html: 'Fragen Sie sich, <strong>wie man zwei Videos zu einem zusammenfügt</strong>, ohne Komplikationen? Sie müssen keine schweren Programme oder kostenpflichtige Anwendungen mehr herunterladen. Unser Tool zum <strong>kostenlosen Online-Zusammenfügen von Videos</strong> ermöglicht es Ihnen, in Sekundenschnelle alle benötigten Clips zu verbinden. Da es zu 100% lokal funktioniert, müssen Sie Ihre Dateien auf keinen Server hochladen, was absolute Privatsphäre garantiert und es Ihnen ermöglicht, <strong>große Videos ohne Wartezeiten beim Hochladen zusammenzufügen</strong>.' },
    
    { type: 'title', text: 'Videos ohne Wasserzeichen verbinden', level: 3 },
    { type: 'paragraph', html: 'Einer der größten Nachteile anderer Anwendungen ist, dass sie Ihre Inhalte ruinieren. Mit uns können Sie <strong>Videos online ohne Wasserzeichen verbinden</strong>. Die heruntergeladene Datei wird genau Ihre Kreation sein – sauber, professionell und bereit zum Teilen auf YouTube, Instagram, TikTok oder für den persönlichen Gebrauch.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privat und Lokal', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Kein Upload', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Maximale Auflösung', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Häufige Anwendungsfälle zum Zusammenfügen von Videos', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Social Media',
            description: 'Schnelles Zusammenfügen von Stories, TikToks oder Reels',
            icon: 'mdi:instagram',
            points: [
                'Verbinden Sie kleine, mit dem Handy aufgenommene Clips',
                'Bereiten Sie sequenzielle Inhalte für Instagram oder YouTube vor',
                'Zusammenfügen ohne störende Wasserzeichen'
            ]
        },
        {
            title: 'Präsentationen',
            description: 'Verbinden Sie Einführungen und Demo-Aufnahmen in einer Datei',
            icon: 'mdi:presentation',
            points: [
                'Fügen Sie ein animiertes Intro mit dem Hauptteil zusammen',
                'Verbinden Sie kurze Software-Demos',
                'Sauberer Export im Standard-MP4/WEBM-Format'
            ],
            highlight: true
        },
        {
            title: 'Familienkompilationen',
            description: 'Fügen Sie mehrere Videos von Urlauben oder Feiern zusammen',
            icon: 'mdi:home-heart',
            points: [
                'Erstellen Sie ein einzelnes Video mit allen Party-Momenten',
                'Gruppieren Sie Reiseerinnerungen chronologisch',
                'Einfach zu teilen als eine einzige Datei'
            ]
        },
        {
            title: 'Lernvideos',
            description: 'Verbinden Sie kurze Trainingskapitel oder Lektionen',
            icon: 'mdi:school',
            points: [
                'Gruppieren Sie kleine, unabhängige Tutorials',
                'Fügen Sie Ihren Lektionen einen Schlussclip hinzu',
                'Strukturieren Sie Ihren Kurs professionell'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Die beste App zum Zusammenfügen von Videos im Browser', level: 2 },
    { type: 'paragraph', html: 'Dies ist nicht nur eine weitere Webseite; es ist eine echte <strong>App zum Zusammenfügen von Videos</strong>, die dank moderner HTML5-Video-APIs direkt in Ihrem Browser arbeitet. Sie können <strong>MP4-Videos zusammenfügen</strong>, WEBM und mehr, Auflösungen mischen (unser System wendet automatisch Letterboxing an, wenn die Abmessungen variieren) und die Bilder pro Sekunde (FPS) Ihres finalen Exports wählen.' },

    { type: 'title', text: 'Vergleich der Zusammenfügungsansätze', level: 3 },
    { type: 'table', headers: ['Funktionen', 'Unser lokales Tool', 'Klassische Online-Konverter', 'Professionelle Editoren'], rows: [
        ['Privatsphäre', 'Vollständig (auf Ihrem Gerät)', 'Gering (Dateien müssen hochgeladen werden)', 'Vollständig (installiert)'],
        ['Netzwerkverbrauch', 'Null (kein Upload)', 'Sehr hoch (Up- und Download)', 'Null'],
        ['Wasserzeichen', 'NEIN (100% sauber)', 'Ja (in kostenlosen Versionen)', 'NEIN (bei gekaufter Lizenz)'],
        ['Preis', '100% Kostenlos', 'Kostenlos mit Limits oder Abo', 'Meist teuer'],
        ['Lernkurve', 'Sehr flach (Ziehen, ordnen, zusammenfügen)', 'Flach', 'Sehr steil (erfordert Training)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Garantierte Privatsphäre: Keine Datei verlässt Ihr Gerät',
            con: 'Die Geschwindigkeit beim Zusammenfügen großer Videos hängt vom RAM und Prozessor Ihres Geräts ab'
        },
        {
            pro: 'Professionelle Ergebnisse: 100% kostenlos, keine Registrierung, keine Wasserzeichen',
            con: 'Beim Verbinden von Videos mit unterschiedlichen Abmessungen werden schwarze Ränder (Letterboxing) angewendet'
        },
        {
            pro: 'Vielseitigkeit: Schneller Export mit effizienter Kodierung für Web und Social Media',
            con: 'Erlaubt keine komplexen 3D-Übergänge oder kinoreife visuelle Effekte zwischen Clips'
        }
    ], title: 'Vorteile und Überlegungen' },

    { type: 'title', text: 'Beginnen Sie noch heute mit dem Zusammenfügen', level: 2 },
    { type: 'paragraph', html: 'Es gibt keine Ausreden mehr für hunderte unorganisierte Videofragmente. Laden Sie Ihre Dateien hoch, platzieren Sie sie in der gewünschten Reihenfolge und drücken Sie die Taste. Entdecken Sie den schnellsten, sichersten und privatsten Weg, <strong>Videos online zusammenzufügen</strong>.' }
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

export const content: VideoMergerLocaleContent = {
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

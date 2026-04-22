import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privatsphaere-editor-gesichter-verpixeln-unscharf-machen';
const title = 'Online Privatsphäre Editor: Gesichter in Fotos verpixeln und verbergen';
const description = 'Schützen Sie Ihre Identität, indem Sie sensible Bereiche Ihrer Fotos zensieren. Verpixeln Sie Gesichter, machen Sie Dokumente unscharf oder decken Sie vertrauliche Informationen zu – 100 % lokal.';

const ui: PrivacyBlurUI = {
    toolPixel: "Verpixeln",
    toolBlur: "Unschärfe",
    toolSolid: "Füllung",
    intensityLabel: "Intensität",
    undoButton: "Rückgängig",
    downloadButton: "Speichern",
    dropTitle: "Privatsphäre-Editor",
    dropSubtitle: "Ziehen Sie Ihr Bild hierher oder klicken Sie zum Starten",
    privacySecureLabel: "100 % Lokal",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto-Erkennung",
    loadingModels: "Modelle werden geladen...",
    noFacesDetected: "Keine Gesichter automatisch erkannt.",
    faqTitle: "Häufig gestellte Fragen": "Referenzen"
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Werden meine Fotos auf einen Server hochgeladen?",
        answer: "Nein. Der Privatsphäre-Editor arbeitet vollständig in Ihrem Browser. Die Pixel werden lokal geändert, und es wird nichts von Ihrem Gerät nach außen gesendet.",
    },
    {
        question: "Wie funktioniert die automatische Gesichtserkennung?",
        answer: "Wir verwenden ein leichtgewichtiges neuronales Netzwerk (TinyFaceDetector), das in Ihrem Browser läuft, um Gesichtsmerkmale zu identifizieren, ohne dass eine externe Verbindung erforderlich ist.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Foto hochladen",
        text: "Ziehen Sie das Bild, das sensible Informationen enthält, die Sie verbergen möchten, in den Editor oder wählen Sie es aus.",
    },
    {
        name: "Werkzeug wählen",
        text: "Wählen Sie zwischen Verpixeln, Unschärfe oder solider Füllung, je nachdem, welches Maß an Privatsphäre Sie benötigen.",
    },
    {
        name: "Bereich markieren",
        text: "Klicken und ziehen Sie über den Bereich, den Sie schützen möchten (Gesichter, Nummernschilder, Namen usw.).",
    },
    {
        name: "Ergebnis speichern",
        text: "Laden Sie das bearbeitete Bild herunter, in der Gewissheit, dass die ursprünglichen Daten unzugänglich sind.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Privatsphäre Editor: Verpixeln, Unschärfe und Verbergen',
        items: [
            'Drei Bearbeitungswerkzeuge: Verpixeln, Unschärfe, Solide Füllung',
            'Automatische Gesichtserkennung mit KI (TinyFaceDetector)',
            '100 % lokale Verarbeitung – Ihre Fotos verlassen nie den Browser',
            'Keine Wasserzeichen, keine Limits, völlig kostenlos'
        ]
    },
    { type: 'title', text: 'Digitale Privatsphäre: So schützen Sie Ihre visuellen Daten', level: 2 },
    { type: 'paragraph', html: 'In der Ära der sozialen Medien kann das unkontrollierte Teilen von Fotos sensible persönliche Daten preisgeben. Unser Werkzeug ermöglicht es Ihnen, kritische Informationen (Gesichter, Nummernschilder, Namen, Adressen) zu verbergen, bevor Sie sie ins Internet hochladen, und sicherzustellen, dass Ihre Privatsphäre unter Ihrer vollen Kontrolle bleibt.' },

    { type: 'stats', items: [
        { value: '3', label: 'Verbergungsmethoden', icon: 'mdi:tools' },
        { value: '100 %', label: 'Lokale Privatsphäre', icon: 'mdi:shield-check' },
        { value: 'KI', label: 'Gesichtserkennung', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Drei Verbergungsmethoden erklärt', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Verpixeln',
            description: 'Unterteilt den Bereich in Quadrate, Unkenntlichmachung garantiert',
            icon: 'mdi:blur',
            points: [
                'Maximale, irreversible Verschleierung',
                'Sicherer gegen Gesichtserkennungssoftware',
                'Sichtbar, es ist klar, dass etwas verborgen wurde',
                'Ideal für Gesichter in öffentlichen Fotos'
            ]
        },
        {
            title: 'Unschärfe (Blur)',
            description: 'Gaußscher Weichzeichner – natürlicheres Aussehen',
            icon: 'mdi:blur-off',
            points: [
                'Eleganteres visuelles Erscheinungsbild',
                'Erhält die farbliche Kohärenz',
                'Mathematisch theoretisch umkehrbar',
                'Ideal für weniger sensible Informationen'
            ],
            highlight: true
        },
        {
            title: 'Solide Füllung',
            description: 'Undurchsichtiger Farbblock – maximale Privatsphäre',
            icon: 'mdi:rectangle',
            points: [
                'Deutliches, offensichtliches Verbergen',
                'Maximale rechtliche Sicherheit/Privatsphäre',
                'Verändert die visuelle Komposition',
                'Ideal für Dokumente und hochsensible Daten'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Automatische Gesichtserkennung mit KI', level: 3 },
    { type: 'paragraph', html: 'Unser Werkzeug verwendet TinyFaceDetector, ein kompaktes neuronales Netzwerk, das direkt in Ihrem Browser läuft, um Gesichter automatisch zu identifizieren:' },
    { type: 'list', items: [
        '<strong>100 % Lokal:</strong> Das KI-Modell läuft auf Ihrer Grafikkarte/Prozessor, nicht auf Remote-Servern.',
        '<strong>Kein Internet nötig:</strong> Nach dem ersten Laden funktioniert es komplett offline.',
        '<strong>Privatsphäre garantiert:</strong> Niemand sieht die Gesichter: weder Google noch OpenAI oder wir.',
        '<strong>Automatischer Ein-Klick:</strong> Erkennt Gesichter und lässt Sie diese mit einem Klick verbergen.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'Durch die Verarbeitung der Bilder mit der lokalen Grafikkarte und dem Prozessor Ihres Browsers garantieren wir, dass die Originalfotos niemals Ihr Gerät verlassen. Selbst wenn Sie Ihre Meinung ändern, wurde nichts übertragen. Dies ist der höchste Standard für digitale Privatsphäre.' },

    { type: 'title', text: 'Anwendungsfälle für Privatsphäre', level: 3 },
    { type: 'table', headers: ['Sensible Informationen', 'Empfohlene Methode', 'Dringlichkeit'], rows: [
        ['Gesichter von Personen', 'Verpixeln oder Unschärfe', 'Kritisch'],
        ['Kfz-Kennzeichen', 'Verpixeln (irreversibel)', 'Kritisch'],
        ['Ausweisdokumente', 'Solide Füllung oder Verpixeln', 'Kritisch'],
        ['Namen/Adressen', 'Solide Füllung oder Verpixeln', 'Hoch'],
        ['Telefonnummern', 'Verpixeln oder Füllung', 'Hoch'],
        ['Medizinische Informationen', 'Solide Füllung', 'Kritisch'],
        ['Sichtbare WLAN-Signale', 'Verpixeln', 'Mittel']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Vollständige Privatsphäre: 100 % lokale Verarbeitung, keine Server, keine Speicherung',
            con: 'Erfordert modernen Browser mit Canvas- und WebGL-Unterstützung'
        },
        {
            pro: 'Automatische Gesichtserkennung spart Zeit bei der manuellen Arbeit',
            con: 'KI ist nicht perfekt – Profilansichten oder Teilgesichter werden evtl. nicht erkannt'
        },
        {
            pro: 'Drei Methoden erlauben Wahl zwischen Sicherheit und Ästhetik',
            con: 'Keine fortgeschrittenen Optionen (Smart Warp, inhaltsbasiertes Füllen)'
        },
        {
            pro: 'Völlig kostenlos, keine Werbung, keine Limits',
            con: 'Kein Ersatz für professionelle Software wie Photoshop'
        }
    ], proTitle: 'Vorteile', conTitle: 'Einschränkungen' },

    { type: 'diagnostic', variant: 'warning', title: 'Warnung: Unschärfe ist NICHT 100 % sicher', icon: 'mdi:alert', badge: 'Sicherheit', html: 'Gaußsche Unschärfe ist durch hochentwickelte inverse Algorithmen mathematisch umkehrbar. Wenn Informationen KRITISCH sind (relevante Dokumente, Identität), verwenden Sie <strong>Verpixeln oder solide Füllung</strong>. Unschärfe sieht ästhetisch besser aus, ist aber weniger sicher.' },

    { type: 'glossary', items: [
        {
            term: 'Verpixelung',
            definition: 'Reduzierung der Auflösung durch Unterteilung des Bereichs in einfarbige Blöcke. Irreversibel. Maximaler Schutz gegen KI-Gesichtserkennung.'
        },
        {
            term: 'Gaußsche Unschärfe',
            definition: 'Mathematische Glättung basierend auf einer Normalverteilung. Theoretisch durch Dekonvolution umkehrbar, in der Praxis jedoch sehr schwierig.'
        },
        {
            term: 'Solide Füllung',
            definition: 'Undurchsichtiger Block einer einheitlichen Farbe. Maximale Sicherheit, maximaler rechtlicher Schutz, weniger elegant.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Leichtgewichtiges Convolutional Neural Network (CNN) zur Gesichtserkennung. Läuft lokal im Browser ohne externen Server.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Ansatz, bei dem Privatsphäre von Beginn an in das Systemdesign integriert wird. Unser lokaler Ansatz ist Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Privatsphäre unter Ihrer Kontrolle', ariaLabel: 'Informationen zum Schutz der Privatsphäre', html: 'Wir speichern oder verarbeiten Ihre Fotos nicht auf Remote-Servern. Es gibt keine Tracking-Cookies. Keine Bearbeitungshistorien. Wir wissen nicht, was Sie verbergen, weil wir Ihre Bilder nie sehen. Volle Kontrolle, volle Privatsphäre, volle Freiheit.' },

    { type: 'title', text: 'Sicheres Teilen in sozialen Netzwerken', level: 3 },
    { type: 'paragraph', html: 'Bevor Sie ein Foto im Internet posten, fragen Sie sich: Gibt es Informationen, die ich lieber nicht öffentlich hätte? Gesichter von Kindern, Kennzeichen, Adressen, Dokumentennummern. Eine 2-minütige Sitzung im Privatsphäre-Editor verhindert jahrelange Probleme.' }
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

export const content: PrivacyBlurLocaleContent = {
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

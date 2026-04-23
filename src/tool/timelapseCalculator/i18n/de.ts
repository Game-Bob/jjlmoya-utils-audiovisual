import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-rechner-perfekte-intervalle';
const title = 'Timelapse  und Hyperlapse Rechner: Perfekte Intervalle';
const description = 'Berechnen Sie das exakte Intervall zwischen den Fotos, die Gesamtdauer und den Speicherplatz für Ihre Zeitrafferaufnahmen. Unverzichtbares Tool für Fotografen.';

const ui: TimelapseUI = {
    title: "Zeitraffer Rechner",
    paramsTitle: "Parameter",
    eventDuration: "Wie lange dauert das reale Ereignis?",
    hours: "Stunden",
    minutes: "Minuten",
    videoDuration: "Welches finale Video wünschen Sie?",
    seconds: "Dauer (Sek.)",
    fps: "FPS",
    resultsTitle: "Ergebnisse",
    intervalLabel: "Stellen Sie Ihr Intervallometer ein auf:",
    secondsUnit: "Sekunden",
    totalPhotos: "Gesamtzahl Fotos",
    speed: "Geschwindigkeit",
    shutterSpeed: "Verschlusszeit",
    storage: "Größe (RAW)",
    rule180Info: "Die 180°-Regel empfiehlt eine Verschlusszeit von der Hälfte des Intervalls für eine flüssige Bewegungsunschärfe.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Wie wähle ich das richtige Intervall für meinen Zeitraffer?",
        answer: "Es hängt von der Geschwindigkeit der Bewegung ab, die Sie aufnehmen. Für schnelle Wolken verwenden Sie 2-3 Sekunden. Für die Bewegung der Sonne oder Sterne 15-30 Sekunden. Für Pflanzenwachstum oder Baustellen 5-15 Minuten.",
    },
    {
        question: "Wie viele Fotos benötige ich für ein einminütiges Video?",
        answer: "Ein Standardvideo hat 24 oder 30 Bilder pro Sekunde (fps). Für eine Minute Video bei 24 fps benötigen Sie genau 1440 Fotos (60 Sekunden * 24 Fotos/Sekunde).",
    },
    {
        question: "Was ist 'Flicker' und wie vermeide ich es?",
        answer: "Es handelt sich um ein störendes Flackern, das durch kleine Belichtungsschwankungen zwischen den Fotos verursacht wird. Verwenden Sie immer den manuellen Modus (M), einen festen Weißabgleich und bevorzugen Sie Objektive mit manuellem Blendenring.",
    },
    {
        question: "Warum ist die Verschlusszeit wichtig?",
        answer: "Damit die Bewegung flüssig wirkt (180°-Regel), sollte die Verschlusszeit etwa die Hälfte des Intervalls betragen. Wenn das Intervall beispielsweise 2 Sekunden beträgt, versuchen Sie, mit 1 Sekunde zu belichten.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Dauer des finalen Videos festlegen",
        text: "Geben Sie an, wie viele Sekunden oder Minuten das Ergebnisvideo dauern soll (z. B. 10 Sekunden für Instagram).",
    },
    {
        name: "Ausgabe-FPS wählen",
        text: "Wählen Sie die Flüssigkeit des Videos: 24 (Kino), 30 (Web) oder 60 (flüssige Zeitlupe).",
    },
    {
        name: "Aufnahmeintervall anpassen",
        text: "Konfigurieren Sie je nach Geschwindigkeit der Szene, alle wie viele Sekunden Ihre Kamera auslösen soll.",
    },
    {
        name: "Speicherplatz prüfen",
        text: "Der Rechner zeigt Ihnen an, wie viele Gigabyte die Sitzung beanspruchen wird. Stellen Sie sicher, dass Ihre SD Karte genügend Platz bietet.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Der ultimative Leitfaden für Zeitraffer  und Hyperlapse Intervalle', level: 2 },
    { type: 'paragraph', html: 'Der Unterschied zwischen einem amateurhaften Schnelldurchlauf und einem <strong>kinoreifen Zeitraffer</strong> liegt mathematisch gesehen in einem einzigen Faktor: <strong>dem Intervall</strong>. Dieser Rechner nimmt Ihnen das Rätselraten ab und ermöglicht es Ihnen, Ihre Intervallometer-Aufnahmen präzise zu planen.' },
    
    { type: 'title', text: 'Tabelle der empfohlenen Intervalle (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Nutzen Sie diese Schnellanleitung, um Ihr Intervallometer passend zum Motiv einzustellen. Ziel ist es, genug Bewegung einzufangen, damit sie wahrnehmbar, aber flüssig ist.' },
    { type: 'table', headers: ['Motiv / Szene', 'Empfohlenes Intervall', 'Mindestdauer des Ereignisses'], rows: [
        ['Schnelle Wolken / Gewitter', '1 - 2 Sekunden', '20 - 30 Min.'],
        ['Stadtverkehr / Menschen (Blur)', '0,5 - 2 Sekunden', '15 - 20 Min.'],
        ['Sonnenuntergang / Aufgang (Holy Grail)', '5 - 10 Sekunden', '1,5 - 2,5 Std.'],
        ['Langsame Wolken / Schatten', '10 - 15 Sekunden', '2 - 3 Std.'],
        ['Sterne / Milchstraße (Astro)', '15 - 30 Sekunden*', '3 - 5 Std.'],
        ['Baustellen / Schnelle Pflanzen', '5 - 15 Minuten', 'Tage / Wochen']
    ]},
    { type: 'tip', title: 'Hinweis für Astro', html: 'Das Intervall wird meist durch die Belichtungszeit bestimmt (500er-Regel) + 1 oder 2 Sekunden Puffer für das Schreiben auf die Karte.' },

    { type: 'title', text: 'Die 180° Regel (Bewegungsunschärfe)', level: 3 },
    { type: 'paragraph', html: 'Ein häufiger Fehler bei Zeitraffern ist ein "ruckeliges" Video. Um den glatten Kino-Look zu erhalten, benötigen Sie <strong>Bewegungsunschärfe</strong>.' },
    { type: 'card', title: 'Die Regel', icon: 'mdi:information', html: 'Ihre Verschlusszeit sollte die Hälfte Ihres Intervalls betragen. <br /><br /> <em>Beispiel:</em> Wenn Sie alle <strong>4 Sekunden</strong> fotografieren, sollte Ihre Belichtung <strong>2 Sekunden</strong> betragen.' },

    { type: 'title', text: 'Flicker und manuelle Blende', level: 3 },
    { type: 'paragraph', html: '"Flicker" ist das störende Flackern, das durch Mikroschwankungen der Blendenöffnung zwischen den Aufnahmen verursacht wird.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Lösen Sie bei DSLRs das Objektiv leicht, um die elektronische Verbindung zu unterbrechen und die Blende mechanisch zu fixieren.',
        '<strong>Alles Manuell:</strong> ISO, Weißabgleich und Fokus müssen fest eingestellt sein. Nutzen Sie niemals Automatikmodi.',
        '<strong>In RAW fotografieren:</strong> Essenziell für die Korrektur von Belichtung und Farbe in der Nachbearbeitung.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Fortgeschrittene Technik: Der "Heilige Gral"', icon: 'mdi:crown', badge: 'Profi-Technik', html: 'Der "Heilige Gral" bezeichnet den flüssigen Übergang von Tag zu Nacht (oder umgekehrt). Es ist eine der größten technischen Herausforderungen.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Gleitende Belichtung', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strategie', value: 'Nacht-Intervall', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Fazit: Die Zen der einfachen Mechanik', level: 3 },
    { type: 'paragraph', html: 'Das Meistern Ihres Zeitraffers beginnt mit dem Verständnis der Mathematik hinter Ihrem Intervallometer.' }
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

export const content: TimelapseLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'scharfentiefe-rechner';
const title = 'Schärfentiefe Rechner: Echtzeit DoF für jede Kamera';
const description = 'Berechnen Sie Schärfentiefe, Hyperfokaldistanz und Fokusgrenzen in Echtzeit. Unterstützt alle Sensorgrößen mit 1/3 Blendenpräzision.';

const ui: DepthOfFieldUI = {
    title: 'Schärfentiefe Rechner',
    paramsTitle: 'Parameter',
    sensorLabel: 'Kamerasensor',
    moreLabel: 'Weitere Sensoren…',
    apertureLabel: 'Blende',
    focalLabel: 'Brennweite',
    distanceLabel: 'Motivabstand',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Ergebnisse',
    totalDofLabel: 'Gesamte Schärfentiefe',
    infiniteLabel: 'Unendlich',
    nearLimitLabel: 'Nahgrenze',
    farLimitLabel: 'Ferngrenze',
    hyperfocalLabel: 'Hyperfokal',
    cocLabel: 'Zerstreuungskreis',
    cocUnit: 'mm',
    showDetailsLabel: 'Technische Details anzeigen',
    hideDetailsLabel: 'Technische Details ausblenden',
    errorBelowFocal: 'Der Motivabstand muss größer als die Brennweite sein.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Was ist Schärfentiefe?',
        answer: 'Die Schärfentiefe (DoF) ist der Entfernungsbereich in einer Szene, der im fertigen Bild akzeptabel scharf erscheint. Sie wird durch Blende, Brennweite, Motivabstand und Sensorgröße bestimmt.',
    },
    {
        question: 'Was ist die hyperfokale Distanz?',
        answer: 'Die hyperfokale Distanz ist die kürzeste Fokusentfernung, bei der Objekte im Unendlichen noch akzeptabel scharf sind. Eine Fokussierung auf diese Distanz maximiert die Schärfentiefe.',
    },
    {
        question: 'Warum verringert eine größere Blendenöffnung die Schärfentiefe?',
        answer: 'Eine weitere Blendenöffnung sammelt Licht über einen größeren Bereich des Objektivs, was den Zerstreuungskreis für unscharfe Punkte vergrößert. Dies verengt die Zone der akzeptablen Schärfe.',
    },
    {
        question: 'Wie beeinflusst die Sensorgröße die Schärfentiefe?',
        answer: 'Größere Sensoren verwenden einen größeren Zerstreuungskreis-Schwellenwert. Bei äquivalenten Bildwinkeln erzeugen größere Sensoren jedoch meist eine geringere Schärfentiefe, da sie längere Brennweiten erfordern.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Wählen Sie Ihren Kamerasensor',
        text: 'Wählen Sie das Sensorformat aus, das Ihrem Kameragehäuse entspricht. Dies legt den Wert für den Zerstreuungskreis (CoC) fest.',
    },
    {
        name: 'Blende und Brennweite einstellen',
        text: 'Wählen Sie die Blende in 1/3-Stufen-Schritten. Der Brennweiten-Schieberegler verwendet eine logarithmische Skala für mehr Granularität im Weitwinkelbereich.',
    },
    {
        name: 'Motivabstand festlegen',
        text: 'Stellen Sie den Abstand zwischen Kamera und Hauptmotiv ein. Wechseln Sie bei Bedarf zwischen Metern und Fuß.',
    },
    {
        name: 'Ergebnisse ablesen',
        text: 'Der Fokusbalken visualisiert den scharfen Bereich um Ihr Motiv. Nah- und Ferngrenze zeigen die genauen Grenzen der akzeptablen Schärfe.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Schärfentiefe in Fotografie und Film verstehen', level: 2 },
    { type: 'paragraph', html: 'Die Schärfentiefe ist eines der mächtigsten kreativen Werkzeuge. Eine <strong>geringe Schärfentiefe</strong> isoliert Motive, während eine <strong>große Schärfentiefe</strong> weite Landschaften scharf hält. Dieser Rechner gibt Ihnen die volle Kontrolle.' },

    { type: 'title', text: 'Die drei Variablen der Schärfentiefe', level: 3 },
    { type: 'table', headers: ['Variable', 'Erhöhung →', 'Effekt auf DoF'], rows: [
        ['Blende', 'f/1.4 → f/16', 'Größere Blende = geringere Schärfentiefe'],
        ['Brennweite', '24mm → 200mm', 'Längere Brennweite = geringere Schärfentiefe'],
        ['Abstand', '1m → 10m', 'Größerer Abstand = größere Schärfentiefe'],
    ]},

    { type: 'title', text: 'Die hyperfokale Distanz: Maximale Schärfe', level: 3 },
    { type: 'paragraph', html: 'Wenn Sie auf die <strong>hyperfokale Distanz</strong> fokussieren, erscheint alles von der halben Distanz bis Unendlich scharf. Ideal für die Landschaftsfotografie.' },
    { type: 'tip', title: 'Praxistipp', html: 'Stellen Sie in der Straßenfotografie den Fokus auf die Hyperfokaldistanz ein. Mit einem 35mm-Objektiv an APS-C bei f/8 liegt diese bei ca. <strong>4 Metern</strong> – alles von 2m bis Unendlich wird scharf.' },

    { type: 'title', text: 'Sensorgröße und Zerstreuungskreis', level: 3 },
    { type: 'paragraph', html: 'Der <strong>Zerstreuungskreis (CoC)</strong> definiert die akzeptable Schärfe. Ein Vollformatsensor hat einen CoC von 0,030 mm; ein Smartphonesensor ca. 0,006 mm. Kleinere CoC-Werte bedeuten strengere Schärfekriterien.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Vollformat', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF im Kino: Brennweite vs. Sensor', level: 3 },
    { type: 'paragraph', html: 'Cinematographen, die auf Super 35 drehen, nutzen oft längere Brennweiten für den typischen "Cinematic Look". Die Kombination aus lichtstarkem Objektiv und 85mm+ Brennweite ist der Klassiker.' },
    { type: 'diagnostic', variant: 'success', title: 'Die Fokus-Verteilungsregel', icon: 'mdi:lightbulb-outline', badge: 'Profi-Technik', html: 'Bei einem Motiv in 3m Entfernung mit 50mm bei f/2.8: Der Bereich hinter dem Motiv ist immer größer als der davor – etwa im <strong>Verhältnis 2:1</strong>.' },
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

export const content: DepthOfFieldLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'skarpedjupskalkylator';
const title = 'Skärpedjupskalkylator: DoF i realtid för alla kameror';
const description = 'Beräkna skärpedjup, hyperfokalavstånd och fokusgränser i realtid. Stöder alla sensorstorlekar med 1/3 stegs bländarprecision.';

const ui: DepthOfFieldUI = {
    title: 'Skärpedjupskalkylator',
    paramsTitle: 'Parametrar',
    sensorLabel: 'Kamerasensor',
    moreLabel: 'Fler sensorer…',
    apertureLabel: 'Bländare',
    focalLabel: 'Brännvidd',
    distanceLabel: 'Motivavstånd',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Resultat',
    totalDofLabel: 'Totalt skärpedjup',
    infiniteLabel: 'Oändligt',
    nearLimitLabel: 'Närgräns',
    farLimitLabel: 'Fjärrgräns',
    hyperfocalLabel: 'Hyperfokal',
    cocLabel: 'Oskärpecirkel',
    cocUnit: 'mm',
    showDetailsLabel: 'Visa tekniska detaljer',
    hideDetailsLabel: 'Dölj tekniska detaljer',
    errorBelowFocal: 'Motivavståndet måste vara större än brännvidden.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Vad är skärpedjup?',
        answer: 'Skärpedjup (DoF) är det avståndsområde i en scen som upplevs som acceptabelt skarpt i den slutliga bilden. Det bestäms av bländare, brännvidd, motivavstånd och sensorstorlek.',
    },
    {
        question: 'Vad är hyperfokalavstånd?',
        answer: 'Hyperfokalavstånd är det närmaste fokuseringsavstånd där objekt vid oändligheten fortfarande är skarpa. Fokusering på detta avstånd maximerar skärpedjupet.',
    },
    {
        question: 'Varför minskar en större bländaröppning skärpedjupet?',
        answer: 'En större bländaröppning samlar ljus över en större yta av linsen, vilket ökar oskärpecirkeln för punkter utanför fokus. Detta smalnar av zonen för acceptabel skärpa.',
    },
    {
        question: 'Hur påverkar sensorstorleken skärpedjupet?',
        answer: 'Större sensorer har en högre tröskel för oskärpecirkeln. Vid ekvivalenta bildvinklar ger dock större sensorer oftast ett kortare skärpedjup eftersom de kräver längre brännvidd.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Välj din kamerasensor',
        text: 'Välj det sensorformat som matchar ditt kamerahus. Detta ställer in värdet för oskärpecirkeln (CoC) för beräkningarna.',
    },
    {
        name: 'Ställ in bländare och brännvidd',
        text: 'Välj bländare i steg om 1/3. Brännviddsreglaget är logaritmiskt för bättre precision vid vidvinkelinställningar.',
    },
    {
        name: 'Ställ in motivavstånd',
        text: 'Ange avståndet mellan kameran och ditt huvudmotiv. Växla mellan meter och fot efter behov.',
    },
    {
        name: 'Läs av resultaten',
        text: 'Fokusstapeln visualiserar den skarpa zonen. När- och fjärrgränserna visar de exakta gränserna för acceptabel skärpa.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Förstå skärpedjup inom fotografi och film', level: 2 },
    { type: 'paragraph', html: 'Skärpedjup är ett av de mest kraftfulla kreativa verktygen. Ett <strong>kort skärpedjup</strong> isolerar motivet, medan ett <strong>långt skärpedjup</strong> håller hela landskapet skarpt. Denna kalkylator ger dig full kontroll.' },

    { type: 'title', text: 'De tre variablerna för skärpedjup', level: 3 },
    { type: 'table', headers: ['Variabel', 'Ökning →', 'Effekt på DoF'], rows: [
        ['Bländare', 'f/1.4 → f/16', 'Större bländare = kortare skärpedjup'],
        ['Brännvidd', '24mm → 200mm', 'Längre brännvidd = kortare skärpedjup vid samma avstånd'],
        ['Avstånd', '1m → 10m', 'Längre avstånd = längre skärpedjup'],
    ]},

    { type: 'title', text: 'Hyperfokalavstånd: Maximal skärpa', level: 3 },
    { type: 'paragraph', html: 'När du fokuserar på <strong>hyperfokalavståndet</strong> blir allt från halva avståndet till oändligheten skarpt. Idealiskt för landskapsfotografering.' },
    { type: 'tip', title: 'Praktiskt tips', html: 'För gatufotografering, ställ in fokus på hyperfokalavståndet. Med ett 35mm-objektiv på APS-C vid f/8 är det ca <strong>4 meter</strong>: allt från 2m till oändligheten blir skarpt.' },

    { type: 'title', text: 'Sensorstorlek och oskärpecirkel', level: 3 },
    { type: 'paragraph', html: '<strong>Oskärpecirkeln (CoC)</strong> definierar acceptabel skärpa. En fullformatssensor har en CoC på 0,030 mm; en smartphone ca 0,006 mm. Mindre CoC innebär strängare skärpekrav.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Fullformat', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF i film: Brännvidd vs Sensor', level: 3 },
    { type: 'paragraph', html: 'Filmning i Super 35 använder ofta längre brännvidd för att komprimera perspektivet och skapa en "filmisk look". Ett ljusstarkt 85mm-objektiv är klassiskt för porträtt.' },
    { type: 'diagnostic', variant: 'success', title: 'Regeln för fokusfördelning', icon: 'mdi:lightbulb-outline', badge: 'Pro-teknik', html: 'För ett motiv på 3m med 50mm vid f/2.8: det skarpa området bakom motivet är alltid större än framför – ungefär i <strong>förhållandet 2:1</strong>.' },
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
    inLanguage: 'sv',
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

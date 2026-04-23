import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'scherptediepte-calculator';
const title = 'Scherptediepte Calculator: Realtime DoF voor elke camera';
const description = 'Bereken scherptediepte, hyperfocale afstand en focuslimieten in realtime. Ondersteunt alle sensorgroottes met 1/3 stop diafragmaprecisie.';

const ui: DepthOfFieldUI = {
    title: 'Scherptediepte Calculator',
    paramsTitle: 'Parameters',
    sensorLabel: 'Camerasensor',
    moreLabel: 'Meer sensoren…',
    apertureLabel: 'Diafragma',
    focalLabel: 'Brandpuntsafstand',
    distanceLabel: 'Afstand tot onderwerp',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Resultaten',
    totalDofLabel: 'Totale scherptediepte',
    infiniteLabel: 'Oneindig',
    nearLimitLabel: 'Nabijheidspunten',
    farLimitLabel: 'Vertepunt',
    hyperfocalLabel: 'Hyperfocaal',
    cocLabel: 'Verstrooiingscirkel',
    cocUnit: 'mm',
    showDetailsLabel: 'Toon technische details',
    hideDetailsLabel: 'Verberg technische details',
    errorBelowFocal: 'Afstand tot onderwerp moet groter zijn dan de brandpuntsafstand.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Wat is scherptediepte?',
        answer: 'Scherptediepte (DoF) is het afstandsbereik in een scène dat acceptabel scherp verschijnt in de uiteindelijke foto. Het wordt bepaald door diafragma, brandpuntsafstand, afstand tot het onderwerp en sensorgrootte.',
    },
    {
        question: 'Wat is de hyperfocale afstand?',
        answer: 'De hyperfocale afstand is de kortste scherpstelafstand waarbij objecten op oneindig nog acceptabel scherp zijn. Scherpstellen op deze afstand maximaliseert de scherptediepte.',
    },
    {
        question: 'Waarom vermindert een groter diafragma de scherptediepte?',
        answer: 'Een groter diafragma laat licht door een groter oppervlak van de lens, wat de verstrooiingscirkel voor onscherpe punten vergroot. Dit vernauwt de zone van acceptabele scherpte.',
    },
    {
        question: 'Hoe beïnvloedt sensorgrootte de scherptediepte?',
        answer: 'Grotere sensoren gebruiken een grotere drempel voor de verstrooiingscirkel. Echter, bij vergelijkbare beeldhoeken produceren grotere sensoren vaak minder scherptediepte omdat ze langere brandpuntsafstanden vereisen.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Selecteer je camerasensor',
        text: 'Kies het sensorformaat van je camera. Dit stelt de waarde van de verstrooiingscirkel (CoC) in voor de berekeningen.',
    },
    {
        name: 'Stel diafragma en brandpuntsafstand in',
        text: 'Kies een diafragma in stappen van 1/3 stop. De brandpuntsafstand-schuifregelaar is logaritmisch voor meer precisie bij groothoekinstellingen.',
    },
    {
        name: 'Stel de afstand tot het onderwerp in',
        text: 'Stel de afstand tussen de camera en het hoofdonderwerp in. Wissel tussen meters en feet indien nodig.',
    },
    {
        name: 'Lees de resultaten af',
        text: 'De focusbalk visualiseert de scherpe zone. De nabijheids- en vertepunten tonen de exacte grenzen van de scherpte.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Scherptediepte begrijpen in fotografie en film', level: 2 },
    { type: 'paragraph', html: 'Scherptediepte is een van de krachtigste creatieve middelen. Een <strong>kleine scherptediepte</strong> isoleert onderwerpen, terwijl een <strong>grote scherptediepte</strong> een landschap scherp houdt. Deze calculator geeft je de volledige controle.' },

    { type: 'title', text: 'De drie variabelen van scherptediepte', level: 3 },
    { type: 'table', headers: ['Variabele', 'Toename →', 'Effect op DoF'], rows: [
        ['Diafragma', 'f/1.4 → f/16', 'Groter diafragma = minder scherptediepte'],
        ['Brandpuntsafstand', '24mm → 200mm', 'Langere brandpuntsafstand = minder scherptediepte'],
        ['Afstand', '1m → 10m', 'Grotere afstand = meer scherptediepte'],
    ]},

    { type: 'title', text: 'De hyperfocale afstand: Maximale scherpte', level: 3 },
    { type: 'paragraph', html: 'Wanneer je scherpstelt op de <strong>hyperfocale afstand</strong>, is alles van de helft van die afstand tot oneindig scherp. Ideaal voor landschapsfotografie.' },
    { type: 'tip', title: 'Praktische tip', html: 'Stel bij straatfotografie je focus in op de hyperfocale afstand. Met een 35mm lens op APS-C bij f/8 is dit ca. <strong>4 meter</strong>: alles van 2m tot oneindig wordt scherp.' },

    { type: 'title', text: 'Sensorgrootte en verstrooiingscirkel', level: 3 },
    { type: 'paragraph', html: 'De <strong>verstrooiingscirkel (CoC)</strong> definieert acceptabele scherpte. Een full-frame sensor heeft een CoC van 0,030 mm; een smartphone ca. 0,006 mm. Kleinere CoC-waarden betekenen strengere scherptecriteria.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF in film: Brandpuntsafstand vs. Sensor', level: 3 },
    { type: 'paragraph', html: 'Filmen op Super 35 gebruikt vaak langere brandpuntsafstanden voor de "cinematic look". Een lichtsterke 85mm lens bij portretopnames is een klassieke keuze.' },
    { type: 'diagnostic', variant: 'success', title: 'De focusverdelingsregel', icon: 'mdi:lightbulb-outline', badge: 'Pro-techniek', html: 'Voor een onderwerp op 3m met 50mm bij f/2.8: het scherptegebied achter het onderwerp is altijd groter dan ervoor – ongeveer in een <strong>verhouding van 2:1</strong>.' },
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
    inLanguage: 'nl',
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

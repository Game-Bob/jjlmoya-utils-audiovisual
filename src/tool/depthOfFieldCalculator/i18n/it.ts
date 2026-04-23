import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'calcolatore-profondita-di-campo';
const title = 'Calcolatore Profondità di Campo: DoF in Tempo Reale';
const description = 'Calcola profondità di campo, distanza iperfocale e limiti di messa a fuoco in tempo reale. Supporta tutti i sensori con precisione di 1/3 di stop.';

const ui: DepthOfFieldUI = {
    title: 'Profondità di Campo',
    paramsTitle: 'Parametri',
    sensorLabel: 'Sensore Fotocamera',
    moreLabel: 'Altri sensori…',
    apertureLabel: 'Apertura',
    focalLabel: 'Lunghezza Focale',
    distanceLabel: 'Distanza Soggetto',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Risultati',
    totalDofLabel: 'Profondità di Campo Totale',
    infiniteLabel: 'Infinito',
    nearLimitLabel: 'Limite Vicino',
    farLimitLabel: 'Limite Lontano',
    hyperfocalLabel: 'Iperfocale',
    cocLabel: 'Circolo di Confusione',
    cocUnit: 'mm',
    showDetailsLabel: 'Mostra dettagli tecnici',
    hideDetailsLabel: 'Nascondi dettagli tecnici',
    errorBelowFocal: 'La distanza del soggetto deve essere maggiore della lunghezza focale.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Cos\'è la profondità di campo?',
        answer: 'La profondità di campo (DoF) è l\'intervallo di distanze in una scena che appare nitido nell\'immagine finale. È determinata da apertura, focale, distanza del soggetto e dimensione del sensore.',
    },
    {
        question: 'Cos\'è la distanza iperfocale?',
        answer: 'La distanza iperfocale è la distanza di messa a fuoco più vicina alla quale gli oggetti all\'infinito sono ancora nitidi. Massimizza la profondità di campo per una data apertura e focale.',
    },
    {
        question: 'Perché un\'apertura maggiore riduce la DoF?',
        answer: 'Un\'apertura più ampia raccoglie luce su un\'area maggiore dell\'obiettivo, aumentando la dimensione del circolo di confusione per i punti fuori fuoco, restringendo la zona di nitidezza.',
    },
    {
        question: 'In che modo la dimensione del sensore influisce sulla DoF?',
        answer: 'Sensori più grandi usano una soglia del circolo di confusione più ampia. Tuttavia, a parità di campo visivo, i sensori grandi producono una DoF minore perché richiedono focali più lunghe.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Seleziona il sensore della fotocamera',
        text: 'Scegli il formato del sensore corrispondente al tuo corpo macchina. Questo imposta il circolo di confusione (CoC) per i calcoli.',
    },
    {
        name: 'Imposta apertura e focale',
        text: 'Trascina per scegliere un diaframma con incrementi di 1/3 di stop. Il cursore della focale è logaritmico per una maggiore precisione sui grandangoli.',
    },
    {
        name: 'Imposta la distanza del soggetto',
        text: 'Trascina il cursore sulla distanza tra fotocamera e soggetto. Passa da metri a piedi secondo necessità.',
    },
    {
        name: 'Leggi i risultati',
        text: 'La barra di messa a fuoco visualizza la zona nitida. I limiti vicino e lontano mostrano i confini esatti della messa a fuoco accettabile.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Comprendere la Profondità di Campo in Fotografia e Cinema', level: 2 },
    { type: 'paragraph', html: 'La profondità di campo è uno degli strumenti creativi più potenti. Una <strong>ridotta profondità di campo</strong> isola i soggetti, mentre una <strong>grande profondità di campo</strong> mantiene nitido tutto il paesaggio. Questo calcolatore ti offre un controllo preciso.' },

    { type: 'title', text: 'Le tre variabili che controllano la DoF', level: 3 },
    { type: 'table', headers: ['Variabile', 'Aumento →', 'Effetto sulla DoF'], rows: [
        ['Apertura', 'f/1.4 → f/16', 'Apertura maggiore = DoF minore'],
        ['Lunghezza Focale', '24mm → 200mm', 'Focale maggiore = DoF minore a parità di distanza'],
        ['Distanza Soggetto', '1m → 10m', 'Soggetto più lontano = DoF maggiore'],
    ]},

    { type: 'title', text: 'La distanza iperfocale: massima nitidezza', level: 3 },
    { type: 'paragraph', html: 'Quando metti a fuoco alla <strong>distanza iperfocale</strong>, tutto, dalla metà di quella distanza all\'infinito, appare nitido. Tecnica essenziale per la fotografia di paesaggio.' },
    { type: 'tip', title: 'Consiglio pratico', html: 'Per la street photography, imposta il fuoco sull\'iperfocale. Con un 35mm su APS-C a f/8, l\'iperfocale è a circa <strong>4 metri</strong>: tutto da 2m all\'infinito sarà nitido.' },

    { type: 'title', text: 'Dimensione del sensore e circolo di confusione', level: 3 },
    { type: 'paragraph', html: 'Il <strong>circolo di confusione (CoC)</strong> definisce la nitidezza accettabile. Un sensore Full Frame ha un CoC di 0,030 mm; uno smartphone circa 0,006 mm. Valori CoC minori implicano criteri più severi.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF nel cinema: Focale vs Sensore', level: 3 },
    { type: 'paragraph', html: 'Riprendere in Super 35 (simile ad APS-C) spesso richiede focali più lunghe per comprimere la prospettiva, creando il classico "look cinematografico". Un 85mm luminoso è ideale per i ritratti.' },
    { type: 'diagnostic', variant: 'success', title: 'La regola di distribuzione del fuoco', icon: 'mdi:lightbulb-outline', badge: 'Tecnica Pro', html: 'Per un soggetto a 3m con un 50mm a f/2.8 : la zona nitida dietro il soggetto è sempre maggiore di quella davanti, con un <strong>rapporto di circa 2:1</strong>.' },
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
    inLanguage: 'it',
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

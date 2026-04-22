import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-calculator-perfecte-intervallen';
const title = 'Timelapse en Hyperlapse Calculator: Perfecte Intervallen';
const description = 'Bereken het exacte interval tussen foto\'s, de totale duur en de opslagruimte voor je timelapses. Essentiële tool voor fotografen.';

const ui: TimelapseUI = {
    title: "Timelapse Calculator",
    paramsTitle: "Parameters",
    eventDuration: "Hoe lang duurt de echte gebeurtenis?",
    hours: "Uur",
    minutes: "Minuten",
    videoDuration: "Welke uiteindelijke video wil je?",
    seconds: "Duur (sec)",
    fps: "FPS",
    resultsTitle: "Resultaten",
    intervalLabel: "Stel je intervalometer in op:",
    secondsUnit: "seconden",
    totalPhotos: "Totaal aantal foto's",
    speed: "Snelheid",
    shutterSpeed: "Sluitertijd",
    storage: "Grootte (RAW)",
    rule180Info: "De 180°-regel adviseert een sluitertijd van de helft van het interval voor een vloeiende bewegingsonscherpte (motion blur).",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Hoe kies ik het juiste interval voor mijn timelapse?",
        answer: "Dit hangt af van de snelheid van de beweging die je vastlegt. Gebruik voor snelle wolken 2-3 seconden. Voor de beweging van de zon of sterren 15-30 seconden. Voor groeiende planten of een bouwplaats 5-15 minuten.",
    },
    {
        question: "Hoeveel foto's heb ik nodig voor een video van één minuut?",
        answer: "Een standaard video heeft 24 of 30 frames per seconde (fps). Voor één minuut video op 24fps heb je precies 1440 foto's nodig (60 seconden * 24 foto's/seconde).",
    },
    {
        question: "Wat is 'Flicker' en hoe voorkom ik het?",
        answer: "Flicker is een vervelende flikkering die wordt veroorzaakt door kleine variaties in belichting tussen foto's. Gebruik altijd de handmatige modus (M), een vaste witbalans en geef de voorkeur aan lenzen met een handmatige diafragmaring om dit te voorkomen.",
    },
    {
        question: "Waarom is de sluitertijd belangrijk?",
        answer: "Om beweging vloeiend te laten lijken (180°-regel), moet de sluitertijd ongeveer de helft van het interval zijn. Als het interval bijvoorbeeld 2 seconden is, probeer dan met 1 seconde te fotograferen om natuurlijke motion blur te creëren.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Bepaal de uiteindelijke videoduur",
        text: "Geef aan hoeveel seconden of minuten de resulterende video moet duren (bijv. 10 seconden voor Instagram).",
    },
    {
        name: "Selecteer de output FPS",
        text: "Kies de vloeiendheid van de video: 24 (bioscoop), 30 (web) of 60 (vloeiende slow motion).",
    },
    {
        name: "Pas het opname-interval aan",
        text: "Stel in om de hoeveel seconden je camera moet afdrukken, afhankelijk van de snelheid van de scène.",
    },
    {
        name: "Controleer de opslagruimte",
        text: "De calculator vertelt je hoeveel Gigabyte de sessie in beslag zal nemen. Zorg dat je SD kaart genoeg ruimte heeft voordat je begint.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Definitieve Gids voor Timelapse  en Hyperlapse intervallen', level: 2 },
    { type: 'paragraph', html: 'Het verschil tussen een amateuristische versnelde video en een <strong>filmische timelapse</strong> ligt wiskundig gezien in één enkele factor: <strong>het interval</strong>. Deze calculator neemt het giswerk weg, zodat je je opnamen met een intervalometer nauwkeurig kunt plannen.' },
    
    { type: 'title', text: 'Tabel met Aanbevolen Intervallen (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Gebruik deze tabel als snelle referentie om je intervalometer in te stellen op basis van het onderwerp.' },
    { type: 'table', headers: ['Onderwerp / Scène', 'Aanbevolen Interval', 'Duur Gebeurtenis (Minimum)'], rows: [
        ['Snelle Wolken / Storm', '1 - 2 seconden', '20 - 30 min'],
        ['Stadsverkeer / Mensen (Blur)', '0,5 - 2 seconden', '15 - 20 min'],
        ['Zonsondergang / Zonsopgang (Holy Grail)', '5 - 10 seconden', '1,5 - 2,5 uur'],
        ['Langzame Wolken / Schaduwen', '10 - 15 seconden', '2 - 3 uur'],
        ['Sterren / Melkweg (Astro)', '15 - 30 seconden*', '3 - 5 uur'],
        ['Bouw / Groeiende Planten', '5 - 15 minuten', 'Dagen / Weken']
    ]},
    { type: 'tip', title: 'Opmerking voor Astro', html: 'Het interval wordt meestal bepaald door de benodigde belichtingstijd (500-regel) + 1 of 2 seconden buffer voor het wegschrijven naar de kaart.' },

    { type: 'title', text: 'De 180° regel (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Een veelgemaakte fout bij timelapse is een "schokkerige" video. Voor die vloeiende filmische look heb je <strong>bewegingsonscherpte</strong> nodig.' },
    { type: 'card', title: 'De Regel', icon: 'mdi:information', html: 'Je sluitertijd moet de helft van je interval zijn. <br /><br /> <em>Voorbeeld:</em> Als je elke <strong>4 seconden</strong> fotografeert, moet je belichting <strong>2 seconden</strong> zijn.' },

    { type: 'title', text: 'Flicker en Handmatig Diafragma', level: 3 },
    { type: 'paragraph', html: '"Flicker" is de irritante flikkering veroorzaakt door micro-variaties in de diafragmaopening tussen de opnamen.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Ontgrendel de lens op DSLR\'s een klein stukje om de elektronische verbinding te verbreken en het diafragma mechanisch vast te zetten.',
        '<strong>Alles Handmatig:</strong> ISO, Witbalans en Focus moeten vaststaan. Gebruik nooit automatische modi.',
        '<strong>Fotografeer in RAW:</strong> Essentieel om belichting en kleur in de nabewerking te corrigeren.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Geavanceerde Techniek: De "Holy Grail"', icon: 'mdi:crown', badge: 'Pro Techniek', html: 'De "Holy Grail" verwijst naar de vloeiende overgang van dag naar nacht (of andersom). Het is de moeilijkste technische uitdaging.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Geleidelijke Belichting', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strategie', value: 'Nacht-interval', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Conclusie: De Zen van Eenvoudige Mechanica', level: 3 },
    { type: 'paragraph', html: 'Het beheersen van je timelapse begint bij het begrijpen van de wiskunde achter je intervalometer.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Veelgestelde Vragen over Timelapse Productie',
    bibliography: 'Timelapse Theorie en Bronnen',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

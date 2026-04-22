import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-kalkylator-perfekta-intervall';
const title = 'Timelapse och Hyperlapse Kalkylator: Perfekta Intervall';
const description = 'Beräkna det exakta intervallet mellan foton, total varaktighet och lagringsutrymme för dina timelapses. Ett oumbärligt verktyg för fotografer.';

const ui: TimelapseUI = {
    title: "Timelapse Kalkylator",
    paramsTitle: "Parametrar",
    eventDuration: "Hur länge varar den verkliga händelsen?",
    hours: "Timmar",
    minutes: "Minuter",
    videoDuration: "Hur lång ska den färdiga videon vara?",
    seconds: "Längd (sek)",
    fps: "FPS",
    resultsTitle: "Resultat",
    intervalLabel: "Ställ in din intervallometer på:",
    secondsUnit: "sekunder",
    totalPhotos: "Totalt antal foton",
    speed: "Hastighet",
    shutterSpeed: "Slutartid",
    storage: "Storlek (RAW)",
    rule180Info: "180°-regeln föreslår en slutartid på hälften av intervallet för mjuk rörelseoskärpa.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Hur väljer jag rätt intervall för min timelapse?",
        answer: "Det beror på hastigheten på rörelsen du fångar. För snabba moln, använd 2-3 sekunder. För solens eller stjärnornas rörelse, 15-30 sekunder. För växande växter eller byggarbetsplatser, 5-15 minuter.",
    },
    {
        question: "Hur många foton behöver jag för en video på en minut?",
        answer: "En standardvideo har 24 eller 30 bilder per sekund (fps). För en minut video i 24fps behöver du exakt 1440 fotografier (60 sekunder * 24 foton/sekund).",
    },
    {
        question: "Vad är 'Flicker' och hur undviker jag det?",
        answer: "Det är ett irriterande flimmer som orsakas av små variationer i exponering mellan foton. För att undvika det, använd alltid manuellt läge (M), fast vitbalans och prioritera objektiv med manuell bländarring.",
    },
    {
        question: "Varför är slutartiden viktig?",
        answer: "För att rörelsen ska se flytande ut (180°-regeln) bör slutartiden vara ungefär hälften av intervallet. Om intervallet till exempel är 2 sekunder, försök fotografera med 1 sekund för att skapa naturlig rörelseoskärpa.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Definiera videons slutliga längd",
        text: "Ange hur många sekunder eller minuter du vill att den resulterande videon ska vara (t.ex. 10 sekunder för Instagram).",
    },
    {
        name: "Välj utmatnings-FPS",
        text: "Välj videons flyt: 24 (bio), 30 (webb) eller 60 (mjuk slow motion).",
    },
    {
        name: "Justera fotograferingsintervallet",
        text: "Konfigurera hur ofta kameran ska utlösas baserat på scenens hastighet.",
    },
    {
        name: "Verifiera lagringsutrymme",
        text: "Kalkylatorn talar om för dig hur många Gigabyte sessionen kommer att ta. Se till att ditt SD kort har tillräckligt med utrymme.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Den definitiva guiden till intervall för Timelapse och Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'Skillnaden mellan en amatörmässig snabbspolad video och en <strong>filmlik timelapse</strong> ligger matematiskt i en enda faktor: <strong>intervallet</strong>. Denna kalkylator tar bort gissningarna.' },
    
    { type: 'title', text: 'Tabell över rekommenderade intervall (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Använd denna tabell för att ställa in din intervallometer beroende på motiv.' },
    { type: 'table', headers: ['Motiv / Scen', 'Föreslaget intervall', 'Händelsevaraktighet (minimum)'], rows: [
        ['Snabba moln / Stormar', '1 - 2 sekunder', '20 - 30 min'],
        ['Stadstrafik / Människor (Blur)', '0,5 - 2 sekunder', '15 - 20 min'],
        ['Solnedgång / Soluppgång (Holy Grail)', '5 - 10 sekunder', '1,5 - 2,5 timmar'],
        ['Långsamma moln / Skuggor', '10 - 15 sekunder', '2 - 3 timmar'],
        ['Stjärnor / Vintergatan (Astro)', '15 - 30 sekunder*', '3 - 5 timmar'],
        ['Byggprojekt / Växande växter', '5 - 15 minuter', 'Dagar / Veckor']
    ]},
    { type: 'tip', title: 'Notis för Astro', html: 'Intervallet dikteras vanligtvis av exponeringstiden (500-regeln) + 1-2 sekunders buffert.' },

    { type: 'title', text: '180° regeln (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Ett vanligt misstag är att få videon att se "ryckig" ut. För den mjuka filmkänslan behöver du <strong>rörelseoskärpa</strong>.' },
    { type: 'card', title: 'Regeln', icon: 'mdi:information', html: 'Din slutartid bör vara hälften av ditt intervall. <br /><br /> <em>Exempel:</em> Om du fotograferar var <strong>4:e sekund</strong>, bör din exponering vara <strong>2 sekunder</strong>.' },

    { type: 'title', text: 'Flicker och Manuell Bländare', level: 3 },
    { type: 'paragraph', html: '"Flicker" är det irriterande flimmer som orsakas av mikroskopiska variationer i bländaröppningen mellan exponeringarna.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Lossa objektivet något på DSLR för att bryta den elektroniska anslutningen och fixera bländaren mekaniskt.',
        '<strong>Helt manuellt:</strong> ISO, vitbalans och fokus måste vara låsta.',
        '<strong>Fota i RAW:</strong> Viktigt för att kunna korrigera exponering och färg i efterhand.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Avancerad teknik: "The Holy Grail"', icon: 'mdi:crown', badge: 'Pro-teknik', html: '"Holy Grail" avser den mjuka övergången från dag till natt (eller tvärtom). Det är den största tekniska utmaningen.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Gradvis exponering', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strategi', value: 'Nattintervall', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Slutsats: Den enkla mekanikens Zen', level: 3 },
    { type: 'paragraph', html: 'Att bemästra timelapse börjar med att förstå matematiken bakom din intervallometer.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Vanliga frågor om timelapse produktion',
    bibliography: 'Timelapse teori och resurser',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'distance-tv';
const title = 'Calculateur de Distance TV - Visionnage Optimal THX & 4K';
const description = 'Calculez la distance idéale pour votre téléviseur en fonction de sa taille et de sa résolution. Optimisez votre Home Cinéma.';

const ui: TvDistanceUI = {
    specTitle: "Spécifications",
    diagonalLabel: "Taille Diagonale",
    resolutionLabel: "Résolution",
    thxRecommendation: "Recommandation THX",
    thxDescription: "THX recommande une distance couvrant un angle de 40 degrés pour une immersion maximale.",
    simulationBadge: "Simulation en temps réel",
    tvWidthLabel: "cm de large",
    userLocationLabel: "Votre Position",
    minLimitLabel: "Limite Minimale",
    optimalLimitLabel: "Distance Optimale",
    maxLimitLabel: "Limite Maximale",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Pourquoi la résolution est-elle importante ?",
        answer: "Avec des résolutions plus élevées (4K ou 8K), les pixels sont plus petits, ce qui permet de s'asseoir plus près.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Indiquez les pouces",
        text: "Déplacez le curseur pour sélectionner la taille de votre téléviseur.",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    { type: 'title', text: 'La Science de l\'Immersion', level: 2 },
    { type: 'paragraph', html: 'Il ne s\'agit pas seulement de confort; c\'est de la physiologie humaine.' },
    
    { type: 'card', title: 'Fatigue Visuelle', icon: 'mdi:eye-outline', html: 'Être trop près peut provoquer une fatigue oculaire.' },
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
    inLanguage: 'fr',
};

export const content: TvDistanceLocaleContent = {
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

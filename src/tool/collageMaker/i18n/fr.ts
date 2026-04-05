import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'createur-collage-photos';
const title = 'Créateur de Collages en Ligne - Des compositions professionnelles';
const description = 'Créez des collages de photos gratuits en quelques secondes. Plusieurs designs disponibles sans logiciel complexe.';

const ui: CollageMakerUI = {
    loadImgs: "Charger les Images",
    selectImgs: "Sélectionnez entre 2 et 9 photos",
    imgsLoaded: "Images Chargées",
    layoutLabel: "Design du Collage",
    chooseLayout: "Choisissez le design",
    borderLabel: "Largeur de Bordure",
    borderColorLabel: "Couleur de Bordure",
    bgColorLabel: "Couleur de Fond",
    createBtn: "Créer le Collage",
    downloadBtn: "Télécharger",
    previewTitle: "Aperçu",
    errorMin: "Il faut au moins 2 images",
    errorMax: "Maximum 9 images autorisées",
    errorLoad: "Erreur lors du chargement"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Comment changer l'ordre ?",
        answer: "Les photos sont placées selon l'ordre de chargement.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Chargez vos photos",
        text: "Sélectionnez vos images dans l'explorateur.",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "Composition Photographique",
        url: "https://fr.wikipedia.org/wiki/Collage_(art)",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    { type: 'title', text: 'Design de Collages', level: 2 },
    { type: 'card', title: 'Designs Intelligents', icon: 'mdi:grid-large', html: 'Notre outil adapte l\'espace disponible.' },
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

export const content: CollageMakerLocaleContent = {
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

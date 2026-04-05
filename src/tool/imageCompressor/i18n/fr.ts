import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'compresseur-images';
const title = 'Compresseur d\'Images en Ligne - Réduisez le poids sans perte';
const description = 'Optimisez et compressez vos photos JPG, PNG et WebP gratuitement. Réduisez la taille du fichier pour améliorer la vitesse de chargement.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimiser les Images",
    dropSubtitle: "Faites glisser vos photos pour réduire leur poids instantanément.",
    settingsTitle: "Paramètres de Compression",
    qualityLabel: "Qualité Visuelle",
    widthLabel: "Largeur Maximale (Pixels)",
    convertToWebpLabel: "Convertir en WebP (Recommandé)",
    compressBtn: "Compresser l'Image",
    processingLabel: "Traitement...",
    resultsTitle: "Images Optimisées",
    originalSizeLabel: "Taille Originale",
    newSizeLabel: "Nouvelle Taille",
    reductionLabel: "Économie",
    downloadBtn: "Télécharger",
    addMoreBtn: "Ajouter plus"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Comment fonctionne la compression ?",
        answer: "Nous utilisons des algorithmes qui optimisent le codage des pixels.",
    },
    {
        question: "Mes images sont-elles téléchargées ?",
        answer: "Non. Tout le traitement se fait 100% dans votre navigateur.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Téléchargez l'image",
        text: "Chargez le fichier que vous souhaitez compresser.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: An Image Format for the Web",
        url: "https://developers.google.com/speed/webp",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    { type: 'title', text: 'Optimisation d\'Images : Vitesse et Rendement', level: 2 },
    { type: 'paragraph', html: 'Une page web lente est une page qui perd des utilisateurs.' },
    
    { type: 'card', title: 'Confidentialité Totale', icon: 'mdi:shield-check', html: 'Nous ne téléchargeons pas vos photos sur le cloud.' },
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

export const content: ImageCompressorLocaleContent = {
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

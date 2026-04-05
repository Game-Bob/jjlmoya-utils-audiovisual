import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'qualite-impression';
const title = 'Calculateur de Qualité d\'Impression - Pixels vers CM & DPI';
const description = 'Calculez la taille d\'impression maximale de vos photos. Convertissez vos pixels en centimètres et pouces pour une impression professionnelle.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analyser la Résolution",
    dropSubtitle: "Faites glisser votre image pour calculer sa taille d'impression.",
    resultsTitle: "Spécifications du Fichier",
    dpiDensityLabel: "Densité d'Impression Souhaitée (DPI)",
    dpiPointsLabel: "points par pouce",
    maxPrintTitle: "Taille Maximale d'Impression",
    standardFormatsTitle: "Formats Standard Supportés",
    formatColumn: "Format",
    measureColumn: "Dimensions (cm)",
    supportColumn: "Supporté ?",
    qualityExcellent: "Qualité Excellente",
    qualityGood: "Bonne Qualité",
    qualityFair: "Qualité Affichage",
    qualityPoor: "Non Adapté",
    qualityExcellentDesc: "Idéal pour les magazines d'art et les livres de photographie.",
    qualityGoodDesc: "Suffisant pour les posters et l'affichage à distance moyenne.",
    qualityFairDesc: "Convient pour l'affichage numérique ou les panneaux distants.",
    qualityPoorDesc: "L'image sera pixellisée. Impression non recommandée.",
    unitCm: "cm",
    unitInches: "po"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Qu'est-ce que le DPI et pourquoi est-ce important ?",
        answer: "Le DPI (Dots Per Inch) indique combien de points d'encre l'imprimante place sur un pouce linéaire.",
    },
    {
        question: "Quel est le DPI idéal pour imprimer une photo ?",
        answer: "La norme industrielle est de 300 DPI pour une excellente qualité photographique.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Téléchargez votre image",
        text: "Chargez la photographie pour connaître ses dimensions en pixels.",
    },
    {
        name: "Ajustez les DPI",
        text: "Faites glisser la barre pour voir comment la taille finale change.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "International Paper Sizes (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    { type: 'title', text: 'Pixels en Centimètres : L\'Art de la Résolution', level: 2 },
    { type: 'paragraph', html: 'L\'erreur la plus courante lors de l\'impression est de se fier uniquement à la taille vue à l\'écran.' },
    
    { type: 'card', title: 'Résolution vs Qualité', icon: 'mdi:image-check', html: 'Tous les pixels ne se valent pas.' },

    { type: 'diagnostic', variant: 'info', title: 'La Règle de la Distance', icon: 'mdi:eye-check', badge: 'Conseil', html: 'Plus l\'image est vue de loin, moins vous avez besoin de DPI.' },
    
    { type: 'title', text: 'Conclusion : Résultats Professionnels', level: 3 },
    { type: 'paragraph', html: 'Utilisez notre calculateur pour éviter les surprises désagréables.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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

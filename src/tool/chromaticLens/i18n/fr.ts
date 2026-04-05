import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'loupe-chromatique';
const title = 'Loupe Chromatique - Outil d\'Extraction de Palette de Couleurs';
const description = 'Extrayez des palettes de couleurs professionnelles de n\'importe quelle image gratuitement. Identifiez les couleurs dominantes.';

const ui: ChromaticLensUI = {
    dropTitle: "Analyser les Couleurs",
    dropSubtitle: "Faites glisser une image pour extraire son ADN chromatique.",
    processingLabel: "Extraction de la palette...",
    paletteTitle: "Palette Extraite",
    copyLabel: "Copier HEX",
    copiedLabel: "Copié !",
    colorCountLabel: "Nombre de couleurs",
    changeImage: "Changer l'image"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Comment fonctionne l'extraction de couleurs ?",
        answer: "Nous utilisons l'algorithme 'Median Cut', qui regroupe les pixels de l'image par leur proximité dans l'espace RGB.",
    },
    {
        question: "Puis-je copier les couleurs ?",
        answer: "Oui, en cliquant sur chaque couleur, le code HEX sera copié dans votre presse-papiers.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Chargez l'image",
        text: "Téléchargez la photo dont vous voulez extraire l'inspiration chromatique.",
    },
    {
        name: "Ajustez la précision",
        text: "Sélectionnez combien de couleurs dominantes vous voulez identifier.",
    },
    {
        name: "Analysez le résultat",
        text: "La palette apparaîtra instantanément avec ses codes hexadécimaux.",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "Median Cut Algorithm - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Median_cut",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    { type: 'title', text: 'L\'ADN Chromatique : La Science Derrière les Couleurs', level: 2 },
    { type: 'paragraph', html: 'Vous êtes-vous déjà demandé pourquoi une photographie de cinéma semble si harmonieuse ? Notre outil vous permet de déconstruire cette harmonie.' },
    
    { type: 'card', title: 'Inspiration Instantanée', icon: 'mdi:creation', html: 'Idéal pour les développeurs web et les artistes numériques.' },

    { type: 'title', text: 'Conclusion : Concevez avec Intention', level: 3 },
    { type: 'paragraph', html: 'La Loupe Chromatique est le pont entre la réalité visuelle et votre travail créatif.' }
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

export const content: ChromaticLensLocaleContent = {
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

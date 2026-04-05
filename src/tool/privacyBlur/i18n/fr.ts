import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'editeur-confidentialite';
const title = 'Éditeur de Confidentialité en Ligne - Masquez les visages';
const description = 'Protégez votre identité en censurant les parties sensibles de vos photos. Pixellisez les visages ou floutez des documents 100% localement.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixelliser",
    toolBlur: "Flouter",
    toolSolid: "Cache",
    intensityLabel: "Intensité",
    undoButton: "Annuler",
    downloadButton: "Garder",
    dropTitle: "Éditeur de Confidentialité",
    dropSubtitle: "Faites glisser votre image ici ou cliquez pour commencer",
    privacySecureLabel: "100% Local",
    offlineLabel: "Hors ligne",
    autoDetectFaces: "Auto Detect",
    loadingModels: "Chargement...",
    noFacesDetected: "Aucun visage détecté."
};

const faqSchema: WithContext<FAQPage> = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [],
};

const howToSchema: WithContext<HowTo> = {
    '@context': 'https://schema.org',
    '@type': 'HowTo',
    name: title,
    description,
    step: [],
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

export const content: PrivacyBlurLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo: [],
    faq: [],
    howTo: [],
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'extracteur-frames-video';
const title = 'Extracteur de Frames de Vidéo - Captures HD de vos vidéos';
const description = 'Extrayez des images individuelles de vos vidéos avec précision. Capturez des moments parfaits en HD localement.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Chargez un fichier vidéo",
    uploadFormats: "MP4, WebM, MOV ou MKV (Max. 500Mo)",
    privacyNote: "La vidéo n'est pas téléchargée sur Internet.",
    playLabel: "Play",
    pauseLabel: "Pause",
    captureBtn: "Capturer Frame",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Extraction Automatique",
    batchEvery: "Chaque",
    batchStart: "Démarrer Séquence",
    batchProcessing: "Extraction...",
    galleryTitle: "Frames Capturées",
    galleryEmpty: "Les captures apparaîtront ici.",
    downloadAll: "Télécharger Tout",
    downloadHD: "Télécharger Image HD",
    resetBtn: "Charger une autre vidéo"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Est-ce sécurisé ?",
        answer: "Oui, tout se passe localement.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Chargez votre vidéo",
        text: "Sélectionnez votre fichier.",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Capturada de fotogramas",
        url: "https://developer.mozilla.org/fr/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    { type: 'title', text: 'Technologie d\'extraction de frames', level: 2 },
    { type: 'card', title: 'Précision Chirurgicale', icon: 'mdi:target', html: 'Moverse un solo frame vital.' },
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

export const content: VideoFrameExtractorLocaleContent = {
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

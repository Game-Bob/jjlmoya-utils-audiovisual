import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'privacy-editor';
const title = 'Online Privacy Editor - Blur and hide faces in photos';
const description = 'Protect your identity by censoring sensitive parts of your photos. Pixelate faces, blur documents, or cover private information 100% locally.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixelate",
    toolBlur: "Blur",
    toolSolid: "Solid",
    intensityLabel: "Intensity",
    undoButton: "Undo",
    downloadButton: "Save",
    dropTitle: "Privacy Editor",
    dropSubtitle: "Drag your image here or click to start",
    privacySecureLabel: "100% Local",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto Detect",
    loadingModels: "Loading models...",
    noFacesDetected: "No faces detected automatically."
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Are my photos uploaded to any server?",
        answer: "No. The privacy editor works entirely within your browser. Pixels are modified locally and nothing is sent outside of your device.",
    },
    {
        question: "How does automatic face detection work?",
        answer: "We use a lightweight neural network (TinyFaceDetector) that runs in your browser to identify facial features without needing an external connection.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Upload your photo",
        text: "Drag or select the image that contains sensitive information you wish to hide.",
    },
    {
        name: "Choose the tool",
        text: "Select pixelate, blur, or solid cover based on the level of privacy you need.",
    },
    {
        name: "Mark the area",
        text: "Click and drag over the zone you want to protect (faces, license plates, names, etc.).",
    },
    {
        name: "Save the result",
        text: "Download the processed image with the security that the original data is inaccessible.",
    },
];

const bibliography: PrivacyBlurLocaleContent['bibliography'] = [
    {
        name: "Privacy by Design (PbD) - AGPD Guide",
        url: "https://www.aepd.es/es/guias-y-herramientas/guias/guia-de-privacidad-desde-el-diseno",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    { type: 'title', text: 'Digital Privacy: How to protect your visual data', level: 2 },
    { type: 'paragraph', html: 'In the era of social media, sharing photos without control can expose personal data. Our tool allows you to hide sensitive information before uploading it to the Internet, ensuring your privacy remains under your control.' },
    
    { type: 'card', title: 'Local Security', icon: 'mdi:shield-lock', html: 'By processing images using your browser\'s GPU, we guarantee that the original photos never leave your computer.' },

    { type: 'diagnostic', variant: 'success', title: 'No Tracking', icon: 'mdi:incognito', html: 'We do not use tracking cookies or store editing histories. It is a pure tool for the user.' },
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
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
    inLanguage: 'en',
};

export const content: PrivacyBlurLocaleContent = {
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

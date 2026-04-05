import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'photo-collage-creator';
const title = 'Online Photo Collage Creator - Designing professional compositions';
const description = 'Create free photo collages in seconds. Choose from multiple layouts, adjust borders, and download high-quality images without watermarks.';

const ui: CollageMakerUI = {
    loadImgs: "Upload Images",
    selectImgs: "Select between 2 and 9 photos",
    imgsLoaded: "Uploaded Images",
    layoutLabel: "Collage Layout",
    chooseLayout: "Choose layout",
    borderLabel: "Border Width",
    borderColorLabel: "Border Color",
    bgColorLabel: "Background Color",
    createBtn: "Create Collage",
    downloadBtn: "Download",
    previewTitle: "Preview",
    errorMin: "You need at least 2 images",
    errorMax: "Maximum 9 images allowed",
    errorLoad: "Error loading images"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "How can I change the order of the photos?",
        answer: "The photos are placed in the collage following the order they appear in the uploaded images list. You can remove one and upload it back to adjust its position.",
    },
    {
        question: "What is the output format of the collage?",
        answer: "The collage is downloaded as a high-resolution WebP file, ideal for sharing on social networks without losing sharpness.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Upload your photos",
        text: "Select between 2 and 9 images from your file browser.",
    },
    {
        name: "Pick a layout",
        text: "Choose the grid that best fits the number of photos you have uploaded.",
    },
    {
        name: "Personalize the style",
        text: "Adjust border thickness and color for a professional finish.",
    },
    {
        name: "Download and share",
        text: "Click the create button and instantly download your final composition.",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "Photographic Composition: The Art of Collage",
        url: "https://en.wikipedia.org/wiki/Collage",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    { type: 'title', text: 'Collage Design: Compositions that tell stories', level: 2 },
    { type: 'paragraph', html: 'A collage is more than a mix of photos; it\'s a visual narrative. Our tool allows you to create perfect geometric compositions for Instagram, Facebook or personal projects without complex software.' },
    
    { type: 'card', title: 'Smart Layouts', icon: 'mdi:grid-large', html: 'Our grid calculator adapts the available space according to the number of photos, ensuring each image maintains visual balance.' },

    { type: 'diagnostic', variant: 'info', title: 'Professional Quality', icon: 'mdi:check-decagram', badge: 'HD Output', html: 'We generate the final collage on a high-resolution canvas of up to 1200 pixels, ensuring text and details remain readable.' },
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

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens';
const title = 'Chromatic Lens - Online Color Palette Extraction Tool';
const description = 'Extract professional color palettes from any image for free. Identify dominant colors in your photos using mathematical algorithms.';

const ui: ChromaticLensUI = {
    dropTitle: "Analyze Colors",
    dropSubtitle: "Drag an image to extract its chromatic DNA.",
    processingLabel: "Extracting palette...",
    paletteTitle: "Extracted Palette",
    copyLabel: "Copy HEX",
    copiedLabel: "Copied!",
    colorCountLabel: "Color count",
    changeImage: "Change image"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "How does color extraction work?",
        answer: "We use the 'Median Cut' algorithm, which groups pixels in the image by their proximity in the RGB color space to find the most representative tones.",
    },
    {
        question: "Can I copy the colors to my design editor?",
        answer: "Yes, by clicking on each color, the HEX code will be automatically copied to your clipboard, ready to paste into Photoshop, Figma, or CSS.",
    },
    {
        question: "What types of images can I analyze?",
        answer: "Any JPG, PNG, or WebP file. Processing is local, so large images will be analyzed quickly without consuming network data.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Upload the image",
        text: "Upload the photography from which you want to extract chromatic inspiration.",
    },
    {
        name: "Adjust the precision",
        text: "Select how many dominant colors you want the tool to identify (from 3 to 12).",
    },
    {
        name: "Analyze the result",
        text: "The palette will appear instantly with its corresponding hexadecimal codes.",
    },
    {
        name: "Copy and use",
        text: "Click on the tones to save them and apply them to your design project.",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "Median Cut Algorithm - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Median_cut",
    },
    {
        name: "Color Theory for Designers",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    { type: 'title', text: 'The Chromatic DNA: Science Behind Dominant Colors', level: 2 },
    { type: 'paragraph', html: 'Ever wondered why cinema photography feels so harmonious? It\'s not by chance; it\'s **color theory** in action. Our tool lets you deconstruct that harmony pixel by pixel.' },
    
    { type: 'title', text: 'What is the Median Cut Algorithm?', level: 3 },
    { type: 'paragraph', html: 'Palette extraction is not a random process. The Median Cut algorithm recursively divides the image\'s "color cube" into boxes with a similar volume of pixels, calculating the average color of each one.' },

    { type: 'card', title: 'Instant Inspiration', icon: 'mdi:creation', html: 'Ideal for web developers and digital artists looking to capture the visual essence of a scene for their interfaces or illustrations.' },

    { type: 'diagnostic', variant: 'success', title: 'Realistic Representation', icon: 'mdi:check-circle', badge: 'Algorithm', html: 'Unlike simple samplings, our system weights the amount of pixels of each tone, ensuring the resulting palette is a true reflection of the image\'s atmosphere.' },
    
    { type: 'title', text: 'Conclusion: Design with Intention', level: 3 },
    { type: 'paragraph', html: 'Chromatic Lens is the bridge between visual reality and your creative workflow. Extract, copy, and create.' }
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

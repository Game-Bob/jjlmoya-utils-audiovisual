import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'image-compressor';
const title = 'Online Image Compressor - Reduce file size without losing quality';
const description = 'Optimize and compress your JPG, PNG, and WebP photos for free. Reduce file size to improve website loading speed locally.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimize Images",
    dropSubtitle: "Drag your photos to instantly reduce their weight.",
    settingsTitle: "Compression Settings",
    qualityLabel: "Visual Quality",
    widthLabel: "Max Width (Pixels)",
    convertToWebpLabel: "Convert to WebP (Recommended)",
    compressBtn: "Compress Image",
    processingLabel: "Processing...",
    resultsTitle: "Optimized Images",
    originalSizeLabel: "Original Size",
    newSizeLabel: "New Size",
    reductionLabel: "Savings",
    downloadBtn: "Download",
    addMoreBtn: "Add more"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "How does lossless compression work?",
        answer: "We use algorithms that remove unnecessary metadata and optimize pixel encoding. By choosing WebP, a more advanced compression technology than traditional formats is used.",
    },
    {
        question: "Are my images uploaded to any server?",
        answer: "No. All processing happens 100% in your browser (Client-Side). Your photos never leave your computer, ensuring absolute privacy.",
    },
    {
        question: "Why should I convert to WebP?",
        answer: "WebP is the modern standard format for the web. It offers superior quality to JPG and PNG with up to 30% less weight, speeding up page load times.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Upload the image",
        text: "Upload the file you want to compress (JPG, PNG, or WebP).",
    },
    {
        name: "Adjust quality",
        text: "Use the slider to find the perfect balance between file size and visual quality (recommended: 75-85%).",
    },
    {
        name: "Resize (optional)",
        text: "If the image is very large, you can specify a maximum width to reduce its resolution.",
    },
    {
        name: "Download the result",
        text: "Click the download button to get your optimized image ready for use.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: An Image Format for the Web",
        url: "https://developers.google.com/speed/webp",
    },
    {
        name: "The importance of image optimization for SEO",
        url: "https://developers.google.com/search/docs/appearance/google-images",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    { type: 'title', text: 'Image Optimization: Speed and Performance', level: 2 },
    { type: 'paragraph', html: 'In the era of immediacy, a slow website is one that loses users. Images are often the heaviest element of a site; optimizing them is the first step to improving your Google ranking (Core Web Vitals).' },
    
    { type: 'title', text: 'Lossy vs Lossless Compression', level: 3 },
    { type: 'paragraph', html: 'This tool lets you adjust the compression level. Lossy compression drastically reduces size in exchange for an imperceptible degradation to the human eye if kept above 70%.' },

    { type: 'card', title: 'Total Privacy', icon: 'mdi:shield-check', html: 'Unlike other online services, we don\'t upload your photos to the cloud. Local processing is faster, safer, and doesn\'t consume your network data.' },

    { type: 'diagnostic', variant: 'success', title: 'Real Savings', icon: 'mdi:trending-down', badge: 'Metric', html: 'Our users typically reduce their image size by 50% to 80% without noticeable quality loss on standard screens.' },
    
    { type: 'title', text: 'Conclusion: Web Ready', level: 3 },
    { type: 'paragraph', html: 'Use the WebP format and smart quality settings so your online presence flies. Professional quality, minimum weight.' }
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

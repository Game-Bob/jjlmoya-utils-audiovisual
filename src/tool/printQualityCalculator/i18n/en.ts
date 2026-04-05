import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'print-quality';
const title = 'Print Quality Calculator - Pixels to CM & DPI Convertor';
const description = 'Calculate the maximum print size of your photos based on resolution. Convert pixels to centimeters and inches to ensure professional printing results.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analyze Resolution",
    dropSubtitle: "Drag your image to calculate its printable size.",
    resultsTitle: "File Specifications",
    dpiDensityLabel: "Desired Print Density (DPI)",
    dpiPointsLabel: "dots per inch",
    maxPrintTitle: "Maximum Print Size",
    standardFormatsTitle: "Supported Standard Formats",
    formatColumn: "Format",
    measureColumn: "Dimensions (cm)",
    supportColumn: "Supported?",
    qualityExcellent: "Excellent Quality",
    qualityGood: "Good Quality",
    qualityFair: "Display Quality",
    qualityPoor: "Not Suitable",
    qualityExcellentDesc: "Ideal for art magazines, photography books, and close-up viewing.",
    qualityGoodDesc: "Sufficient for posters and mid-distance viewing.",
    qualityFairDesc: "Suitable for digital viewing or far-away billboards.",
    qualityPoorDesc: "The image will appear pixelated. Printing not recommended.",
    unitCm: "cm",
    unitInches: "in"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "What is DPI and why does it matter?",
        answer: "DPI (Dots Per Inch) indicates how many dots of ink the printer will place in a linear inch. Higher DPI means better sharpness but smaller physical size for your pixels.",
    },
    {
        question: "What is the ideal DPI for printing a photo?",
        answer: "The industrial standard is 300 DPI for excellent photographic quality. For large prints viewed from further away, 150 DPI can be sufficient.",
    },
    {
        question: "Can I increase my image DPI without losing quality?",
        answer: "No. Increasing DPI without changing the pixels simply reduces the physical size of the print. If you 'invent' pixels (upscaling), the image may look blurry.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Upload your image",
        text: "Load the photo you want to print to learn its dimensions in pixels.",
    },
    {
        name: "Adjust the DPI",
        text: "Slide the bar to see how the final size changes according to point density (72 to 600 DPI).",
    },
    {
        name: "Verify the format",
        text: "Consult the table of standard formats (A4, A3, etc.) to see if your resolution covers the paper.",
    },
    {
        name: "Confirm the quality",
        text: "Ensure the indicator marks 'Excellent Quality' before sending to print.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "International Paper Sizes (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Image resolution guide - Adobe",
        url: "https://www.adobe.com/en/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    { type: 'title', text: 'Pixels to Centimeters: The Art of Print Resolution', level: 2 },
    { type: 'paragraph', html: 'The most common mistake when printing is relying solely on the size we see on screen. A 1000-pixel image can look huge on a monitor but measures only 8cm if we want professional 300 DPI quality.' },
    
    { type: 'title', text: 'How to calculate print size manually', level: 3 },
    { type: 'paragraph', html: 'If you want to understand the math behind this calculator, the formula is simple:' },
    { type: 'list', items: [
        '<strong>Inches:</strong> Divide pixels by the desired DPI (Pixels / 300).',
        '<strong>Centimeters:</strong> Multiply the resulting inches by 2.54.',
    ]},

    { type: 'card', title: 'Resolution vs Quality', icon: 'mdi:image-check', html: 'Not all pixels are equal. An AI-upscaled image may have many pixels but lack actual fine details.' },

    { type: 'diagnostic', variant: 'info', title: 'The Distance Rule', icon: 'mdi:eye-check', badge: 'Pro Tip', html: 'The further away the image will be viewed, the less DPI you need. A billboard can be printed at only 15-30 DPI because it’s observed from meters away.' },
    
    { type: 'title', text: 'Conclusion: Professional Results', level: 3 },
    { type: 'paragraph', html: 'Use our calculator to avoid unpleasant surprises at the print shop. Ensure your memories and work look sharp on paper.' }
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

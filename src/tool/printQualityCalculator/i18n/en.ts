import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'print-quality-calculator-pixels-to-cm-dpi';
const title = 'Print Quality Calculator - Pixels to CM and DPI';
const description = 'Calculate the maximum print size of your photos based on their resolution. Convert pixels to centimeters and inches to ensure professional printing.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analyze Resolution",
    dropSubtitle: "Drag your image to calculate its print size.",
    resultsTitle: "File Specifications",
    dpiDensityLabel: "Desired Print Density (DPI)",
    dpiPointsLabel: "dots per inch",
    maxPrintTitle: "Maximum Print Size",
    standardFormatsTitle: "Supported Standard Formats",
    formatColumn: "Format",
    measureColumn: "Measurements",
    supportColumn: "Supported?",
    qualityExcellent: "Excellent Quality",
    qualityGood: "Good Quality",
    qualityFair: "Screen Quality",
    qualityPoor: "Not Suitable",
    qualityExcellentDesc: "Ideal for art magazines, photography books, and close-up viewing.",
    qualityGoodDesc: "Sufficient for posters and medium-distance viewing.",
    qualityFairDesc: "Suitable for digital viewing or distant billboards.",
    qualityPoorDesc: "The image will look pixelated. Printing is not recommended.",
    unitCm: "cm",
    unitInches: "in",
    dpiScreenLabel: "Screen",
    dpiNewspaperLabel: "Newspaper",
    dpiPrintLabel: "Printing",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Postcard",
    formatQuartilla: "Quartilla",
    formatFolio: "Folio",
    formatDoubleFolio: "Double Folio",
    formatSmallPoster: "Small Poster",
    formatLargePoster: "Large Poster",
    formatPlane: "Plane",
    supportedText: "Yes (Covered)",
    notSupportedPrefix: "No (",
    invalidImageError: "Please select a valid image",
    faqTitle: "Frequently Asked Questions",
    bibliographyTitle: "References"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "What is DPI and why does it matter?",
        answer: "DPI (Dots Per Inch) indicates how many ink dots the printer will put in a linear inch. The higher the DPI, the sharper the image, but the smaller the total physical size your pixels will cover.",
    },
    {
        question: "What is the ideal DPI for printing a photo?",
        answer: "The industrial standard is 300 DPI for excellent photographic quality. For large prints that will be seen from afar, 150 DPI can be enough.",
    },
    {
        question: "Can I increase the DPI of my image without losing quality?",
        answer: "No. Increasing the DPI without changing the pixels simply reduces the size of the print. If you 'invent' pixels using software (upscaling), the image may look blurry.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Upload your image",
        text: "Upload the photograph you want to print to know its dimensions in pixels.",
    },
    {
        name: "Adjust DPI",
        text: "Slide the bar to see how the final size changes according to the dot density (72 to 600 DPI).",
    },
    {
        name: "Verify format",
        text: "Check the standard formats table (A4, A3, etc.) to see if your resolution covers the desired paper.",
    },
    {
        name: "Confirm quality",
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
    {
        type: 'summary',
        title: 'Professional Print Resolution Calculation',
        items: [
            'Convert pixels to centimeters and inches accurately',
            'Calculate maximum size based on desired DPI',
            'Compatibility with standard formats (A4, A3, etc.)',
            'Guide to 4 quality levels: Excellent to Not Suitable'
        ]
    },
    { type: 'title', text: 'Definitive Guide to Print Quality and DPI', level: 2 },
    { type: 'paragraph', html: 'Have you ever printed a photo and it came out blurry or pixelated? The secret lies in the mathematical relationship between <strong>Pixels</strong> and <strong>DPI</strong> (Dots Per Inch). This tool calculates the exact maximum size you can print your images without losing professional quality.' },

    { type: 'stats', items: [
        { value: '300', label: 'Professional Standard DPI', icon: 'mdi:target' },
        { value: '100%', label: 'Precise Calculations', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Supported Formats', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Understanding DPI: Pixels vs Dots', level: 3 },
    { type: 'paragraph', html: 'The common confusion is thinking that DPI and pixels are the same. They are not. Pixels are IN your digital file. DPI is how the printer converts them into ink on paper.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> How many ink dots the printer places in a linear inch (2.54 cm).',
        '<strong>Pixels:</strong> Small data squares in your digital file. A 3000x2000 pixel photo has constant information, regardless of DPI.',
        '<strong>The Formula:</strong> Print size (inches) = Pixels / DPI. Example: 3000 pixels / 300 DPI = 10 inches (25.4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'DPI Quality Levels Explained', level: 3 },
    { type: 'table', headers: ['DPI', 'Visual Quality', 'Use Cases', 'Viewing Distance'], rows: [
        ['600+ DPI', 'Excellent (Perfect)', 'Art books, luxury magazines, fine photography', 'Less than 10 cm'],
        ['300-400 DPI', 'Excellent (Professional)', 'Photography, books, company catalogs', '20-30 cm (hand)'],
        ['150-200 DPI', 'Good (Web Print)', 'Posters, calendars, medium viewing', '1-2 meters'],
        ['72-100 DPI', 'Screen (Fair)', 'Billboards, distant banners', '5+ meters'],
        ['10-30 DPI', 'Low (Not Suitable)', 'Giant billboards, extremely distant viewing', '50+ meters']
    ] },

    { type: 'card', title: 'The Golden Rule of 300 DPI', html: 'For photographic and professional editorial printing, the industry standard is <strong>300 DPI</strong>. This ensures that the human eye at normal distance (20-30 cm) does not perceive individual ink dots. Less than 300 DPI and a pixel grid becomes visible.' },

    { type: 'comparative', items: [
        {
            title: 'Handheld Photography (10x15 Photos)',
            description: '300 DPI mandatory - viewed up close',
            icon: 'mdi:image',
            points: [
                'At 3000x2000 pixels = 10x6.7 inches maximum',
                'Guaranteed Excellent quality',
                'Standard for albums and gifts'
            ]
        },
        {
            title: 'Wall Poster (A3 - 30x42 cm)',
            description: '150 DPI enough - viewed at a distance',
            icon: 'mdi:wall-fire',
            points: [
                'Viewed from 1-2 meters',
                'Fewer pixels needed',
                'Save on camera quality'
            ],
            highlight: true
        },
        {
            title: 'Billboard (200x300 cm)',
            description: '15-30 DPI - viewed across many meters',
            icon: 'mdi:sign',
            points: [
                'Observed at 20+ meters away',
                'Even low resolution looks good',
                'Optimize large files'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Preparing Files for Professional Printing', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Printers use ink (CMYK), screens use light (RGB). Convert to avoid color surprises.',
            con: 'Colors can change when converting - preview first'
        },
        {
            pro: 'Bleed: Add 3mm extra per side if the image must reach the paper edge',
            con: 'Without bleed, cut edges can remain white'
        },
        {
            pro: 'Upscaling DOES NOT work: Increasing pixels in Photoshop adds false information (smoothing)',
            con: 'If you need to print large, you need original high-resolution photo'
        },
        {
            pro: 'Formats: TIFF without compression or high-quality JPEG for photos; vector (AI, EPS) for logos',
            con: 'PNG does not natively support CMYK in most print shops'
        }
    ], proTitle: 'Recommendations', conTitle: 'Contraindications' },

    { type: 'diagnostic', variant: 'warning', title: 'Common Error: The Upscaling Myth', icon: 'mdi:alert', badge: 'Critical', html: '<strong>DO NOT increase DPI in Photoshop without changing pixels.</strong> Increasing from 72 DPI to 300 DPI simply reduces the physical print size. If you "add pixels" through interpolation (upscaling), the image will look smoothed or blurry. You need REAL pixels from the source.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Print resolution measure: how many ink dots per linear inch (2.54 cm). 300 DPI = 300x300 = 90,000 dots per square inch.'
        },
        {
            term: 'CMYK',
            definition: 'Print color space: Cyan, Magenta, Yellow, blacK. Based on subtractive ink. Different from RGB (additive light of screens).'
        },
        {
            term: 'Bleed',
            definition: 'Extra area (typically 3mm) that is printed and then cut. Ensures the image reaches the edge without leaving white margins.'
        },
        {
            term: 'Native Resolution',
            definition: 'REAL pixels captured by the camera, without manipulation. Increasing DPI without changing pixels does not generate "native resolution".'
        },
        {
            term: 'Interpolation (Upscaling)',
            definition: 'Algorithm that invents new pixels based on existing ones. Useful for small increases, but loses sharpness in large enlargements.'
        }
    ] },

    { type: 'message', title: 'Technical Precision for Professional Results', ariaLabel: 'Information about print calculations', html: 'Our calculator converts pixels to centimeters considering international standards (ISO 216 for paper). It\'s not just a calculator: it\'s your validator for whether that photo fits that print size while maintaining professional quality.' },

    { type: 'title', text: 'Conclusion: Print Without Surprises', level: 3 },
    { type: 'paragraph', html: 'The difference between a beautiful print and a disappointing one is knowing the relationship between pixels and DPI. Use this calculator to validate your files BEFORE going to the print shop. This way you avoid unnecessary expenses and frustrating results.' }
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
    inLanguage: 'en',
};

export const content: PrintQualityCalculatorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Frequently Asked Questions",
    faq,
    bibliographyTitle: "References",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

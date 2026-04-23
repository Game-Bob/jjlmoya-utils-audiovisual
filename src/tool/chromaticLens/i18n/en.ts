import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-color-palette-extraction-online';
const title = 'Chromatic Lens: Online Color Palette Extraction';
const description = 'Extract professional color palettes from any image for free. Identify dominant colors in your photos using mathematical algorithms.';

const ui: ChromaticLensUI = {
    dropTitle: "Analyze Colors",
    dropSubtitle: "Drag an image to extract its chromatic DNA.",
    processingLabel: "Extracting palette...",
    paletteTitle: "Extracted Palette",
    copyLabel: "Copy HEX",
    copiedLabel: "Copied!",
    colorCountLabel: "Number of colors",
    changeImage: "Change image",
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "How does color extraction work?",
        answer: "We use the 'Median Cut' algorithm, which groups image pixels according to their proximity in RGB color space to find the most representative tones.",
    },
    {
        question: "Can I copy colors to my design editor?",
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
        text: "Upload the photograph from which you want to extract chromatic inspiration.",
    },
    {
        name: "Adjust precision",
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

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Intelligent Color Palette Extraction',
        items: [
            'Professional Median Cut algorithm for color analysis',
            'Extract 3-12 dominant colors from any image',
            'HEX codes clonable directly to the clipboard',
            '100% local processing - ideal for creatives'
        ]
    },
    { type: 'title', text: 'Color Palette Extraction: Science and Design', level: 2 },
    { type: 'paragraph', html: 'Have you ever wondered why a movie photograph feels so harmonious? It\'s not a coincidence; it\'s color theory in action. Chromatic Lens allows you to extract that harmony directly from the pixel, transforming it into HEX codes usable in your design projects.' },

    { type: 'stats', items: [
        { value: 'Instant', label: 'Color Analysis', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Local Privacy', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Precise Color Space', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'The Median Cut Algorithm Explained', level: 3 },
    { type: 'paragraph', html: 'Intelligent palette extraction is not a simple random sampling of pixels. It uses the Median Cut algorithm, a recursive partitioning technique that ensures faithful representation:' },
    { type: 'list', items: [
        '<strong>Recursive Division:</strong> The RGB "color cube" of the image is recursively divided into smaller boxes.',
        '<strong>Volume Balance:</strong> Each partition seeks to group pixels from the same color space with similar volumes.',
        '<strong>Weighted Average:</strong> The resulting color of each box is the average of all the pixels it contains.',
        '<strong>Faithful Representation:</strong> The dominant colors reflect the real visual atmosphere of the image, not a simple sample.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Creative Workflow', html: 'Ideal for web developers, UX/UI designers, digital artists, and creatives looking to instantly capture the visual essence of a photograph, film, or visual reference to apply in their interfaces, illustrations, or brand palettes.' },

    { type: 'title', text: 'Use Cases in Digital Design', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UI Designers',
            description: 'Extract palettes from hero images to create cohesive interfaces',
            icon: 'mdi:palette',
            points: [
                'Harmonious background colors',
                'Buttons and secondary elements',
                'Automatically calculated contrast'
            ]
        },
        {
            title: 'Web Developers',
            description: 'Create CSS stylesheets directly from visual references',
            icon: 'mdi:code-braces',
            points: [
                'Copy HEX directly to CSS',
                'Color variables in SCSS/CSS',
                'Cohesive themes without prior design'
            ],
            highlight: true
        },
        {
            title: 'Digital Artists and Illustrators',
            description: 'Capture chromatic references from films, nature, or art',
            icon: 'mdi:brush',
            points: [
                'Reference palettes from masterworks',
                'Cinematic color studies',
                'Immediate visual inspiration'
            ]
        },
        {
            title: 'Branding Specialists',
            description: 'Develop visual identities based on guide photographs',
            icon: 'mdi:tag-multiple',
            points: [
                'Extract brand colors from images',
                'Create professional chromatic guides',
                'Ensure visual consistency'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Applied Color Theory', level: 3 },
    { type: 'table', headers: ['Color Concept', 'Definition', 'Practical Application'], rows: [
        ['Chromatic Harmony', 'Color combination that is visually balanced', 'Cohesive visual identity in UI'],
        ['Contrast', 'Difference in brightness between colors', 'Readability and visual hierarchy'],
        ['Saturation', 'Color intensity of a tone', 'Professionalism (low) vs Energy (high)'],
        ['Color Temperature', 'Warm colors (reds) vs cool colors (blues)', 'Emotional psychology of design'],
        ['Monochromatic Palette', 'Variations of a single tone', 'Elegance and minimalism']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Mathematical precision in extraction - not an approximate visual selection',
            con: 'Hardly visible colors may be included if they have many pixels'
        },
        {
            pro: 'Instant copy to clipboard - perfect integration with workflow',
            con: 'Needs a modern browser compatible with Canvas API'
        },
        {
            pro: 'Total privacy - 100% local analysis without data submission',
            con: 'No history of previous analyses saved'
        },
        {
            pro: 'Compatible with any digital image format',
            con: 'Final colors depend on image compression and quality'
        }
    ], proTitle: 'Advantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'success', title: 'Realistic Color Representation', icon: 'mdi:check-circle-outline', badge: 'Advanced Algorithm', html: 'Unlike tools that simply sample random pixels, our system uses the Median Cut algorithm that weights the entire pixel count of each tone, ensuring the resulting palette faithfully reflects the visual atmosphere and color psychology of the original image.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Color quantization algorithm that recursively divides RGB space into boxes, ensuring uniform distribution. Historically used in GIF and indexed color technology.'
        },
        {
            term: 'RGB Color Space',
            definition: 'Color model based on red, green, and blue. Each color is represented as a combination of these three values (0-255). Standard on digital screens and web.'
        },
        {
            term: 'HEX Code',
            definition: '6-digit hexadecimal notation (#RRGGBB) representing color on web: #FF0000 (red), #00FF00 (green), #0000FF (blue). Universal in CSS, Figma, and Adobe.'
        },
        {
            term: 'Color Saturation',
            definition: 'Intensity or purity of color. High saturation = vivid color; low saturation = grayish color. Affects the emotional perception of the design.'
        },
        {
            term: 'Chromatic Harmony',
            definition: 'Selection and combination of colors result in a visually pleasing result. It can be monochromatic, complementary, analogous, or triadic.'
        }
    ] },

    { type: 'message', title: 'Professional Chromatic Analysis', ariaLabel: 'Technical information about color analysis', html: 'Chromatic Lens transforms manual visual analysis into algorithmic precision. It doesn\'t just extract colors: it captures the emotional and visual essence of any image, putting it directly on your clipboard as ready-to-use HEX codes. Total privacy, no limits on analysis volume.' },

    { type: 'title', text: 'Design from Visual Inspiration', level: 3 },
    { type: 'paragraph', html: 'The best color palette is the one that captures the visual intent of your reference. Chromatic Lens automates what used to be a manual process: observe, analyze, note. Now, simply drag an image and get professional HEX codes in seconds.' }
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

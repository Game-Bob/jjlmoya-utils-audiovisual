import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'free-online-photo-collage-maker-professional-compositions';
const title = 'Online Collage Maker: Design professional compositions';
const description = 'Create photo collages for free in seconds. Choose from multiple layouts, adjust borders, and download in high quality without watermarks.';

const ui: CollageMakerUI = {
    dropTitle: "Drag images here",
    dropSub: "or {link} - min. 2, max. 9",
    dropLink: "select files",
    imgsLoaded: "Loaded images",
    layoutLabel: "Layout",
    settingsLabel: "Settings",
    borderLabel: "Border",
    borderColorLabel: "Border color",
    bgColorLabel: "Background",
    downloadBtn: "Download",
    previewTitle: "Preview",
    needsImgs: "You need {n} images",
    errorMin: "You need at least 2 images",
    errorMax: "Maximum 9 images allowed",
    errorLoad: "Error loading images",
    faqTitle: "Frequently Asked Questions",
    bibliographyTitle: "References"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "How can I change the order of the photos?",
        answer: "The photos are placed in the collage following the order in which they appear in the loaded images list. You can remove one and upload it again to adjust its position.",
    },
    {
        question: "What output format does the collage have?",
        answer: "The collage is downloaded in high-resolution WebP format, ideal for sharing on social networks without losing sharpness.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Upload your photos",
        text: "Select between 2 and 9 images from your file explorer.",
    },
    {
        name: "Choose a layout",
        text: "Select the grid that best suits the number of photos you have uploaded.",
    },
    {
        name: "Customize the style",
        text: "Adjust the border thickness and color to give it a professional finish.",
    },
    {
        name: "Download and share",
        text: "Press the create button and instantly download your final composition.",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "Photographic Composition: The Art of Collage",
        url: "https://en.wikipedia.org/wiki/Collage",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professional Online Collage Maker',
        items: [
            'Multiple layouts and predefined grids',
            'Customization of borders and background colors',
            '1200px high resolution ready for social networks',
            'Instant processing with no usage limits'
        ]
    },
    { type: 'title', text: 'Collage Design: Compositions That Tell Stories', level: 2 },
    { type: 'paragraph', html: 'A collage is more than a mix of photos; it\'s a visual narrative that communicates emotion and context. Our tool allows you to create professional geometric compositions for Instagram, Facebook, Pinterest, or personal projects without the need for Photoshop or expensive software.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Images per Collage', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD Resolution', icon: 'mdi:video-high-definition' },
        { value: 'Instant', label: 'Generation', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Visual Composition: Design Principles', level: 3 },
    { type: 'paragraph', html: 'Composition is the art of organizing visual elements in a way that guides the viewer\'s eye and communicates intent. A good collage balances:' },
    { type: 'list', items: [
        '<strong>Balance:</strong> Visual distribution of weight (light vs dark images, large vs small).',
        '<strong>Visual Flow:</strong> The eye should traverse the composition naturally, without dead spots.',
        '<strong>Contrast:</strong> Variations in color, size, and shape that catch the attention.',
        '<strong>Unity:</strong> Thematic coherence - images must "speak together" about the same story.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Smart and Adaptive Designs', html: 'Our system automatically calculates the optimal space distribution based on the number of photos. 2 images = symmetric grid; 5 images = balanced asymmetric distribution. Each grid is designed to maximize visual impact.' },

    { type: 'comparative', items: [
        {
            title: 'For Social Networks',
            description: 'Instagram, TikTok, Facebook - square formats',
            icon: 'mdi:share-all',
            points: [
                '1200px is perfect for Instagram feed',
                'Square format avoids cropping when posting',
                'Customizable borders for branding'
            ],
            highlight: true
        },
        {
            title: 'For Portfolios',
            description: 'Visual showcases for photographers and designers',
            icon: 'mdi:briefcase-outline',
            points: [
                'Show multiple angles of a project',
                'Cohesive visual narrative',
                'Professional digital book printing'
            ]
        },
        {
            title: 'For Personal Gifts',
            description: 'Prints, frames, and digital albums',
            icon: 'mdi:gift-outline',
            points: [
                'Event memories (weddings, trips)',
                'High resolution ready for printing',
                'Instant design without manual effort'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Customization: Borders and Colors', level: 3 },
    { type: 'table', headers: ['Element', 'Visual Effect', 'Recommendation'], rows: [
        ['White Border', 'Clean, minimalist, modern', 'Social networks, digital portfolios'],
        ['Black Border', 'Dramatic, professional, artistic', 'Art photography, fashion, luxury'],
        ['Neutral Border (gray)', 'Versatile, academic, corporate', 'Business, education, neutrality'],
        ['No Border', 'Fusion, continuity, immersive', 'Uniform background, flowing photos']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Professional predefined designs - no composition knowledge needed',
            con: 'Options limited to pre-established grids'
        },
        {
            pro: '1200px resolution ready for social networks without rescaling',
            con: 'Not as customizable as Photoshop'
        },
        {
            pro: '100% local processing - privacy, speed, no limits',
            con: 'Requires a modern browser'
        },
        {
            pro: 'Totally free, no watermarks, no advertising',
            con: 'No individual editing options (cropping, rotation)'
        }
    ], proTitle: 'Advantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'success', title: 'Ready for Social Networks', icon: 'mdi:check-circle-outline', badge: 'Optimized', html: '1200x1200px is the ideal resolution for Instagram. It supports any aspect ratio, but the square output maximizes feed impact, eliminates automatic cropping, and looks just as good on desktop, tablet, and mobile.' },

    { type: 'glossary', items: [
        {
            term: 'Visual Composition',
            definition: 'Art of organizing elements (color, shape, space) to guide the viewer\'s eye and communicate emotional intent.'
        },
        {
            term: 'Rule of Thirds',
            definition: 'Composition principle: divides the image into 9 equal areas (3x3). Position subjects on intersection lines for maximum impact.'
        },
        {
            term: 'Symmetrical Grid',
            definition: 'Equal space divisions. Reassuring, orderly. Ideal for pairs of photos or even numbers.'
        },
        {
            term: 'Asymmetrical Grid',
            definition: 'Unequal divisions. Dynamic, interesting, visual. Ideal for 5+ photos with variety of sizes.'
        },
        {
            term: 'Visual Balance',
            definition: 'Perceptual equilibrium of visual weight. Light + dark image = balance; large + small = balance.'
        }
    ] },

    { type: 'message', title: 'Instant Visual Narrative', ariaLabel: 'Information about composition and collages', html: 'Every collage tells a story. Our automatic designer ensures your visual stories are balanced, professional, and ready for the world. Without waiting for a graphic designer to do the work.' },

    { type: 'title', text: 'Create, Share, Inspire', level: 3 },
    { type: 'paragraph', html: 'A well-made collage is the difference between an forgettable post and one your followers remember and share. Use smart composition for your visual stories to impact.' }
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

export const content: CollageMakerLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-image-compressor-reduce-file-size-no-quality-loss';
const title = 'Online Image Compressor: Reduce weight without losing quality';
const description = 'Optimize and compress your JPG, PNG, and WebP photos for free. Reduce file size to improve your web loading speed locally.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimize Images",
    dropSubtitle: "Drag your photos to reduce their weight instantly.",
    settingsTitle: "Compression Settings",
    qualityLabel: "Visual Quality",
    widthLabel: "Maximum Width (Pixels)",
    convertToWebpLabel: "Convert to WebP",
    compressionLabel: "Compression",
    compressBtn: "Compress Image",
    processingLabel: "Processing...",
    resultsTitle: "Optimized Images",
    originalSizeLabel: "Original Size",
    newSizeLabel: "New Size",
    reductionLabel: "Savings",
    downloadBtn: "Download",
    addMoreBtn: "Add more",
    browseFilesBtn: "Browse files",
    processedFilesTitle: "Processed Files",
    downloadAllBtn: "Download All",
    adjustThisImage: "Adjust this image",
    downloadTitle: "Download",
    maxWidthLabel: "Max width (px)",
    closeBtn: "Close",
    totalSavingsLabel: "Total savings",
    noSavings: "No net savings",
    faqTitle: "Frequently Asked Questions": "References"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "How does lossless compression work?",
        answer: "We use algorithms that remove unnecessary metadata and optimize pixel encoding. When choosing WebP, a more advanced compression technology than traditional formats is used.",
    },
    {
        question: "Are my images uploaded to any server?",
        answer: "No. All processing happens 100% in your browser (Client-Side). Your photos never leave your computer, guaranteeing absolute privacy.",
    },
    {
        question: "Why should I convert to WebP?",
        answer: "WebP is the modern standard format for the web. It offers superior quality to JPG and PNG with a weight up to 30% less, which speeds up page loading time.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Upload the image",
        text: "Upload the file you want to compress (JPG, PNG, or WebP).",
    },
    {
        name: "Adjust quality",
        text: "Use the slider to find the perfect balance between file size and visual quality (recommended: 75 85%).",
    },
    {
        name: "Resize (optional)",
        text: "If the image is very large, you can specify a maximum width to reduce its resolution.",
    },
    {
        name: "Download the result",
        text: "Press the download button to get your optimized image ready to use.",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professional Web Image Optimization',
        items: [
            'Intelligent JPG, PNG, and WebP compression',
            'Reduce weight 50-80% maintaining visual quality',
            '100% local processing - privacy guaranteed',
            'Improve Core Web Vitals and SEO positioning'
        ]
    },
    { type: 'title', text: 'Image Optimization: Web Speed and Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'In the era of digital immediacy, a slow web loses users. Unoptimized images represent 60-70% of the total weight of a web page. Optimizing them is the first step to improve your Google metrics (LCP, CLS) and your positioning in search results.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Typical Weight Reduction', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Local Privacy', icon: 'mdi:lock' },
        { value: '+30%', label: 'Faster than JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Compression Formats Explained', level: 3 },
    { type: 'table', headers: ['Format', 'Compression', 'Use Cases', 'Compatibility'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Camera photos, editorial content', 'Universal (100%)'],
        ['PNG', 'Lossless 30-50%', 'Graphics, logos, transparencies', 'Universal (100%)'],
        ['WebP', 'Lossy/Lossless 25-35% more', 'Modern web, social networks', '95% modern browsers'],
        ['AVIF', 'Lossy/Lossless 20% improvement', 'Next-generation web', 'New browsers only']
    ] },

    { type: 'card', title: 'Why WebP is the Future', html: 'Google developed WebP specifically for the web. It offers superior compression to JPEG and PNG, maintaining or improving visual quality. It is 25-35% smaller than JPEG equivalents. Modern browsers support it at 95%.' },

    { type: 'title', text: 'Lossy vs Lossless Compression', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Lossy Compression',
            description: 'JPG, WebP - Removes imperceptible visual information',
            icon: 'mdi:compress',
            points: [
                'Reduces 70-90% of original weight',
                'Imperceptible to the human eye if quality is maintained >75%',
                'Ideal for realistic photography',
                'Not recommended for logos or sharp text'
            ],
            highlight: true
        },
        {
            title: 'Lossless Compression',
            description: 'PNG, WebP lossless - Maintains 100% visual data',
            icon: 'mdi:shield',
            points: [
                'Reduces 20-50% of weight',
                'Perfect quality, no degradation',
                'Ideal for graphics, logos, transparencies',
                'Heavier files than Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Impact on SEO and Conversion', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google penalizes slow sites. Optimized images improve LCP (Largest Contentful Paint) directly.',
        '<strong>Bounce Rate:</strong> Every second of delay = 7% more bounce. Faster images = fewer users who leave.',
        '<strong>Search Ranking:</strong> Speed is a ranking factor. Optimizing images boosts positioning.',
        '<strong>Conversion:</strong> Faster loading times = more conversions. Studies show +10% conversion with optimization.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Total privacy: 100% local processing, no cloud servers',
            con: 'Requires browser with Canvas API support (it is universal)'
        },
        {
            pro: 'WebP is 25-35% smaller than JPEG with equal quality',
            con: 'Old Safari and IE do not support WebP (fallback available)'
        },
        {
            pro: 'Instant processing of multiple images',
            con: 'Very large images (>50MB) may require waiting'
        },
        {
            pro: 'Optional resizing: reduces resolution as well as compression',
            con: 'Resizing loses information - better to optimize resolution at source'
        }
    ], proTitle: 'Advantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'warning', title: 'Caution: Excessive Compression Degrades', icon: 'mdi:alert', badge: 'Quality', html: 'Maintain quality >75% for photography and >85% for editorial content. Below that, compression artifacts (spots, banding) become visible. An image that looks good in thumbnail may look bad large.' },

    { type: 'glossary', items: [
        {
            term: 'Lossy Compression',
            definition: 'Removes visual data that the human eye perceives as "noise". Ideal for photography. JPEG, lossy WebP, HEIC are lossy.'
        },
        {
            term: 'Lossless Compression',
            definition: 'Reduces size without losing visual information. PNG and lossless WebP. Ideal for graphics, logos, transparencies.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'User experience metrics: LCP (loading speed), FID (interaction latency), CLS (visual stability). Affect SEO ranking.'
        },
        {
            term: 'WebP',
            definition: 'Format developed by Google. 25-35% smaller than JPEG. Supported by 95% of modern browsers (all except IE).'
        },
        {
            term: 'Compression Artifacts',
            definition: 'Visual defects caused by excessive compression: spots, color banding, fuzzy edges. Imperceptible <75% quality.'
        }
    ] },

    { type: 'message', title: 'Professional Web Optimization', ariaLabel: 'Information about image optimization for SEO', html: 'It\'s not technical vanity: compressing images is a direct investment in user experience and ranking in Google. Every kilobyte counts on mobile. Our tool turns what used to require professional software ($$$) into a free 3-click process.' },

    { type: 'title', text: 'Prepared for the Modern Web', level: 3 },
    { type: 'paragraph', html: 'Use intelligent compression and WebP format so that your online presence is fast, responsive, and competitive in search. Professional quality, minimum weight, instant loading.' }
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

export const content: ImageCompressorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Frequently Asked Questions",
    faq: "References",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

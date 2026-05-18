import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'online-video-merger';
const title = 'Online Video Merger: Merge multiple videos easily';
const description = 'Merge and concatenate multiple video files into one locally in your browser. 100% free, private, no watermarks, no uploads.';

const ui: VideoMergerUI = {
    uploadTitle: "Upload your video files",
    uploadFormats: "Drag and drop multiple videos or click to select",
    privacyNote: "Your videos are processed 100% locally. Nothing is uploaded to the internet.",
    addMoreBtn: "Add more videos",
    mergeBtn: "Merge videos now",
    mergingStatus: "Merging videos...",
    downloadBtn: "Download merged video",
    resetBtn: "Start over",
    emptyList: "Drag or select videos to start merging them.",
    listTitle: "Order of videos to merge",
    optionsTitle: "Output settings",
    optionResolution: "Resolution",
    optionFps: "Frames per second (FPS)",
    optionsQualityNote: "The final resolution will adapt, keeping the original aspect ratio with black borders (letterboxing) if videos have different sizes.",
    faqTitle: "Frequently Asked Questions about Video Merging",
    bibliographyTitle: "Bibliography and References",
    resolutionWarning: "Warning: Some videos have different resolutions and will be adapted automatically."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Is it safe to upload my videos to this tool?",
        answer: "Yes, it is completely safe. The tool runs 100% locally in your browser. Your videos are never transmitted over the internet or saved on any server.",
    },
    {
        question: "What happens if my videos have different dimensions?",
        answer: "Our tool automatically rescales the videos to adapt to the output resolution you select. For aspect ratios that do not match exactly, black margins (letterboxing) will be added to preserve the original aspect ratio.",
    },
    {
        question: "Is the audio from the videos preserved when merging?",
        answer: "Yes. The audio tracks from each video are captured and mixed sequentially in perfect synchronization with each part of the video.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Select or drag your videos",
        text: "Load all the video files you want to merge directly from your computer or mobile device.",
    },
    {
        name: "Arrange the order",
        text: "Order the uploaded videos using the move up or move down buttons in the list to decide the sequence.",
    },
    {
        name: "Adjust settings",
        text: "Choose the output resolution and frames per second (FPS) for the merged video.",
    },
    {
        name: "Merge and export",
        text: "Press the merge button. Wait for the real-time processing to finish and download the resulting file.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professional 100% Local Video Merger',
        items: [
            'Real-time processing directly in your browser',
            'Supports multiple videos of different sizes and formats',
            'Selectable output resolution (720p, 1080p, 2K, 4K)',
            'Audio tracks combined perfectly in sequence'
        ]
    },
    { type: 'title', text: 'Video Merger: Simplicity and Privacy without Limits', level: 2 },
    { type: 'paragraph', html: 'Need to merge multiple video clips but don\'t want to download complex editing software or upload gigabytes to the web? Our tool allows you to concatenate as many videos as you need with a completely local process, saving your network upload data.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Private & Local', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'No Upload Data', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Max Resolution', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Common Use Cases', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Social Media',
            description: 'Merge clips recorded with your phone easily',
            icon: 'mdi:instagram',
            points: [
                'Merge small clips recorded on mobile',
                'Prepare sequential content for Instagram or YouTube',
                'Merge without annoying watermarks'
            ]
        },
        {
            title: 'Presentations',
            description: 'Combine intro clips with core recordings',
            icon: 'mdi:presentation',
            points: [
                'Merge animated intro with presentation body',
                'Join short software demos',
                'Clean export in standard format'
            ],
            highlight: true
        },
        {
            title: 'Family Compilations',
            description: 'Join vacation videos chronologically',
            icon: 'mdi:home-heart',
            points: [
                'Create a single video with all party moments',
                'Group travel memories chronologically',
                'Easy to share in a single file'
            ]
        },
        {
            title: 'Educational Videos',
            description: 'Group individual tutorials or training clips',
            icon: 'mdi:school',
            points: [
                'Group small independent tutorials',
                'Add a closing clip to your lessons',
                'Structure your course professionally'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Comparison of Merging Methods', level: 3 },
    { type: 'table', headers: ['Feature', 'Our Local Tool', 'Classic Online Converters', 'Professional Editors'], rows: [
        ['Privacy', 'Total (Processed on your machine)', 'Low (Requires uploading files to server)', 'Total (Installed on your machine)'],
        ['Network Usage', 'Zero (No gigabytes uploaded)', 'Very high (Upload and download the file)', 'Zero'],
        ['Price', '100% Free', 'Free with limits or paid subscription', 'Very expensive or monthly licenses'],
        ['Learning Curve', 'Very low (3 clicks)', 'Low', 'Very high (Requires training)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Maximum security as no files leave your device',
            con: 'Merging speed depends on the CPU power of your browser'
        },
        {
            pro: 'Completely free, no registration and no watermarks',
            con: 'Videos with highly disparate dimensions may require black borders to fit'
        },
        {
            pro: 'Fast export with efficient web-optimized encoding',
            con: 'Does not support adding complex 3D transitions or special effects'
        }
    ], title: 'Advantages & Limitations' }
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

export const content: VideoMergerLocaleContent = {
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

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'merge-videos-online';
const title = 'Merge Videos Online: Join multiple videos fast and free';
const description = 'Merge and concatenate multiple videos into one for free, online, and locally. No watermarks, no uploads, 100% private in your browser.';

const ui: VideoMergerUI = {
    uploadTitle: "Upload your video files",
    uploadFormats: "Drag and drop multiple videos or click to select them",
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
    optionsQualityNote: "The final resolution will be adjusted while keeping the original aspect ratio using letterbox format if the videos have different dimensions.",
    faqTitle: "Frequently Asked Questions about Video Merging",
    bibliographyTitle: "Bibliography & References",
    resolutionWarning: "Warning: Some videos have different resolutions and will be automatically adapted."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Is it safe to upload my videos to this tool?",
        answer: "Yes, it is completely safe. The tool works 100% locally in your browser. Your videos are never transmitted over the internet or saved on any server.",
    },
    {
        question: "What happens if my videos have different dimensions?",
        answer: "Our tool automatically rescales the videos to fit the output resolution you choose. For proportions that do not match exactly, black margins (letterboxing) will be added to preserve the original aspect ratio.",
    },
    {
        question: "Is the audio from the videos preserved when merging?",
        answer: "Yes. The audio tracks from each video are captured and mixed sequentially in perfect synchronization with each image segment.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Select or drag your videos",
        text: "Load all the video files you want to merge directly from your computer or mobile.",
    },
    {
        name: "Arrange the order",
        text: "Order the uploaded videos using the up or down buttons in the list to decide the playback sequence.",
    },
    {
        name: "Adjust options",
        text: "Choose the output resolution and frames per second (FPS) of the merged video.",
    },
    {
        name: "Merge and export",
        text: "Press the merge button. Wait for real-time processing to complete and download the resulting file.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '100% Local Professional Video Merging',
        items: [
            'Real-time processing directly in your browser',
            'Supports multiple videos of different sizes and formats (MP4, WEBM, MOV)',
            'Selectable output resolution (720p, 1080p, 2K, 4K)',
            'Audio tracks combined perfectly sequentially'
        ]
    },
    { type: 'title', text: 'Merge Videos Online Free: Unlimited Simplicity and Privacy', level: 2 },
    { type: 'paragraph', html: 'Wondering <strong>how to merge two videos into one</strong> without complications? You no longer need to download heavy software or paid applications. Our tool to <strong>merge videos online for free</strong> allows you to concatenate and join all the clips you need in a matter of seconds. By working 100% locally, you do not have to upload your files to any server, guaranteeing absolute privacy and allowing you to <strong>merge large videos</strong> without waiting times for uploading.' },
    
    { type: 'title', text: 'Join Videos Without Watermark', level: 3 },
    { type: 'paragraph', html: 'One of the biggest drawbacks of other applications is that they mess up your content. With us, you can <strong>join videos online without a watermark</strong>. The file you download will be exactly your creation, clean, professional, and ready to share on YouTube, Instagram, TikTok, or for personal use.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Private and Local', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'No Upload Data', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Maximum Resolution', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Common Use Cases for Merging Videos', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Social Media',
            description: 'Fast merging of stories, TikToks, or reels into a single video',
            icon: 'mdi:instagram',
            points: [
                'Join small clips recorded with your mobile',
                'Prepare sequential content for Instagram or YouTube',
                'Merge without annoying watermarks'
            ]
        },
        {
            title: 'Presentations',
            description: 'Join introductions and demo recordings into a single file',
            icon: 'mdi:presentation',
            points: [
                'Merge an animated intro with the body of the presentation',
                'Join short software demos',
                'Clean export in standard MP4/WEBM format'
            ],
            highlight: true
        },
        {
            title: 'Family Compilations',
            description: 'Merge multiple videos from your vacations or celebrations',
            icon: 'mdi:home-heart',
            points: [
                'Create a single video with all the moments of the party',
                'Group travel memories chronologically',
                'Easy to share as it is in a single file'
            ]
        },
        {
            title: 'Educational Videos',
            description: 'Concatenate short training chapters or lessons',
            icon: 'mdi:school',
            points: [
                'Group small independent tutorials',
                'Add a closing clip to your lessons',
                'Structure your course professionally'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'The Best App to Merge Videos from the Browser', level: 2 },
    { type: 'paragraph', html: 'This is not just another webpage; it is a true <strong>app to merge videos</strong> that operates directly from your browser thanks to modern HTML5 video APIs. You can <strong>merge MP4 videos</strong>, WEBM, and more, mixing resolutions (our system applies automatic letterboxing if dimensions vary) and choosing the frames per second (FPS) of your final export.' },

    { type: 'title', text: 'Comparison of Merging Approaches', level: 3 },
    { type: 'table', headers: ['Features', 'Our Local Tool', 'Classic Online Converters', 'Professional Editors'], rows: [
        ['Privacy', 'Total (Processed on your device)', 'Low (Requires uploading files to a server)', 'Total (Installed on your device)'],
        ['Network Consumption', 'Zero (No gigabyte uploads)', 'Very high (File upload and download)', 'Zero'],
        ['Watermark', 'NO (100% clean)', 'Yes (In free versions)', 'NO (If you buy the license)'],
        ['Price', '100% Free', 'Free with limits or subscription', 'Usually expensive'],
        ['Learning Curve', 'Very low (Drag, order, and merge)', 'Low', 'Very high (Requires technical training)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Guaranteed privacy: Maximum security as no file leaves your device',
            con: 'Merging speed of large videos depends on your local computer\'s RAM and processor'
        },
        {
            pro: 'Professional results: 100% free, no registration, and no watermarks',
            con: 'When joining videos with disparate dimensions (vertical vs horizontal), black margins (letterboxing) will be applied'
        },
        {
            pro: 'Versatility: Fast export with efficient encoding optimized for web and social media use',
            con: 'Does not allow adding complex transitions (3D fades) or cinematic visual effects between clips'
        }
    ], title: 'Advantages and Considerations' },

    { type: 'title', text: 'Start Merging Your Videos Today', level: 2 },
    { type: 'paragraph', html: 'There are no longer excuses for having hundreds of disorganized video fragments. Upload your files, place them in the desired order, and press the button. Discover the fastest, safest, and most private way to <strong>merge videos online</strong>.' }
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

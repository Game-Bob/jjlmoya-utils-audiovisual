import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-frame-extractor-capture-hd-stills';
const title = 'Video Frame Extractor: Capture HD stills';
const description = 'Extract individual images from your videos with frame-perfect precision. Capture perfect moments in HD locally and for free.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Upload a video file",
    uploadFormats: "MP4, WebM, MOV, or MKV (Max. 500MB)",
    privacyNote: "The video is not uploaded to the Internet, it is processed in your browser.",
    playLabel: "Play",
    pauseLabel: "Pause",
    captureBtn: "Capture Frame",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Automatic Extraction",
    batchEvery: "Every",
    batchStart: "Start Sequence",
    batchProcessing: "Extracting...",
    galleryTitle: "Captured Frames",
    galleryEmpty: "Captures will appear here as you take them.",
    downloadAll: "Download All",
    downloadHD: "Download HD Image",
    resetBtn: "Upload another video"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Can I extract frames from long videos?",
        answer: "Yes, as long as your browser has enough RAM to load the video. We recommend files up to 500MB for optimal performance.",
    },
    {
        question: "In what resolution are the captures saved?",
        answer: "Captures are made at the original video's native resolution. If your video is 4K, you will get a high-quality 4K image.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Upload your video",
        text: "Select the video file from your device. We will not upload it to any server.",
    },
    {
        name: "Navigate to the exact moment",
        text: "Use the timeline bar or the ±1 frame buttons for surgical precision.",
    },
    {
        name: "Capture the frame",
        text: "Press the capture button to save the moment to the gallery below.",
    },
    {
        name: "Download in high quality",
        text: "Download individual captures or the entire session in optimized WebP format.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professional Video Frame Extraction',
        items: [
            'Single frame precision (±1 frame) for perfect capture',
            'Supports MP4, WebM, MOV, MKV up to 500MB',
            'Native video resolution preserved (SD, HD, 4K)',
            'Automatic batch extraction at custom intervals'
        ]
    },
    { type: 'title', text: 'Frame Extraction: Freezing Time in Video', level: 2 },
    { type: 'paragraph', html: 'Sometimes a picture is worth a thousand words. But finding that perfect image within a 10-minute video can be frustrating. Our tool uses your browser\'s local power to extract precision frames without needing professional software.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Single Frame Precision', icon: 'mdi:target' },
        { value: '100%', label: 'Native Resolution', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Supported Files', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Professional Use Cases', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Cinema and Photography',
            description: 'Capture frames as visual reference or composition',
            icon: 'mdi:film',
            points: [
                'Extract stills for movie marketing',
                'Scene composition references',
                'Frame-by-frame analysis'
            ]
        },
        {
            title: 'Digital Content',
            description: 'Create thumbnails and covers for social media',
            icon: 'mdi:youtube',
            points: [
                'High-resolution YouTube thumbnails',
                'Social media covers',
                'Thumbs for presentations'
            ],
            highlight: true
        },
        {
            title: 'Technical Documentation',
            description: 'Extract frames from tutorials and demonstrations',
            icon: 'mdi:book-open',
            points: [
                'Screenshots from tutorial videos',
                'Step-by-step visual documentation',
                'Real-time motion analysis'
            ]
        },
        {
            title: 'Sports and Action',
            description: 'Capture the precise instant of maximum action',
            icon: 'mdi:dumbbell',
            points: [
                'Frame-by-frame sports technique analysis',
                'Heroic moment capture',
                'Motion study'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Supported Video Formats', level: 3 },
    { type: 'table', headers: ['Format', 'Extension', 'Compatibility', 'Notes'], rows: [
        ['MPEG-4', 'MP4', 'Universal (100%)', 'Best compression, widely used'],
        ['WebM', 'WebM', 'Modern browsers', 'Superior compression, smaller size'],
        ['QuickTime', 'MOV', 'Safari, some players', 'Apple standard'],
        ['Matroska', 'MKV', 'Modern browsers', 'Flexible container, variable quality']
    ] },

    { type: 'card', title: 'Single Frame Precision', html: 'Moving one single frame forward or backward (±1 frame) is vital to capture the perfect instant: a jump, a smile, a gesture, a scientific moment. At 24 fps, each frame lasts just 41 milliseconds. Our tool gives you millimetric control.' },

    { type: 'proscons', items: [
        {
            pro: 'Total privacy: the video is processed 100% locally in your browser',
            con: 'Limited to available RAM memory size (~500MB recommended)'
        },
        {
            pro: 'Native resolution preserved: SD, HD, 4K without re-compression',
            con: 'Requires modern browser with HTML5 Video support'
        },
        {
            pro: 'Automatic batch extraction at custom intervals',
            con: 'For advanced editing (trim, cuts), you need a video editor'
        },
        {
            pro: 'Export frames in optimized WebP or uncompressed PNG',
            con: 'One frame at a time (does not export automated GIF sequences)'
        }
    ], proTitle: 'Advantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'info', title: 'Resolution and Frame Rate', icon: 'mdi:information', badge: 'Technical', html: 'The final frame resolution depends on the original video. If the video is 4K (3840x2160), you will extract 4K frames. If it is 720p, you will get 720p. No smart upscaling: we preserve the video\'s native information.' },

    { type: 'glossary', items: [
        {
            term: 'Frame',
            definition: 'Individual image in a video sequence. A 24 fps video contains 24 frames per second.'
        },
        {
            term: 'FPS (Frames Per Second)',
            definition: 'Frames per second. 24 fps (cinema), 30 fps (web video), 60 fps (smooth video), 120 fps (super slow-mo).'
        },
        {
            term: 'Video Codec',
            definition: 'Compression algorithm: H.264 (MPEG-4), VP9 (WebM), HEVC. Determines file size and quality.'
        },
        {
            term: 'Bitrate',
            definition: 'Amount of data processed per second (Mbps). Higher bitrate = higher quality but larger files.'
        },
        {
            term: 'Video Resolution',
            definition: 'Pixel dimensions: 720p (1280x720), 1080p (1920x1080), 4K (3840x2160), 8K (7680x4320).'
        }
    ] },

    { type: 'message', title: 'Professional Frame Extraction', ariaLabel: 'Technical information about video extraction', html: 'You don\'t need complex online converters or professional software. A perfect frame is just 3 clicks away: upload video, navigate, capture. Total privacy, native resolution, instant download.' },

    { type: 'title', text: 'Freezing Video Moments', level: 3 },
    { type: 'paragraph', html: 'Each video contains hundreds of frames. Many of them are pure gold waiting to be discovered. Use this tool to extract those perfect moments without compromising quality or privacy.' }
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

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Frequently Asked Questions about Video Frame Extraction',
    bibliography: 'Technical Standards for Video Capture',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'video-frame-extractor';
const title = 'Video Frame Extractor - Capture high-resolution stills from your videos';
const description = 'Extract individual images from your videos with frame-perfect precision. Capture perfect HD moments locally and for free.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Upload a video file",
    uploadFormats: "MP4, WebM, MOV, or MKV (Max. 500MB)",
    privacyNote: "The video is not uploaded to the internet; it is processed in your browser.",
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
    galleryEmpty: "Captures will appear here as you make them.",
    downloadAll: "Download All",
    downloadHD: "Download HD Image",
    resetBtn: "Upload another video"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Can I extract frames from long videos?",
        answer: "Yes, as long as your browser has enough RAM. We recommend files up to 500MB for optimal performance.",
    },
    {
        question: "What resolution are the stills saved in?",
        answer: "Captures are made at the native resolution of the original video. If your video is 4K, you'll get a high-quality 4K image.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Upload your video",
        text: "Select a video file from your device. We will not upload it to any server.",
    },
    {
        name: "Navigate to the exact moment",
        text: "Use the time bar or ±1 frame buttons for surgical precision.",
    },
    {
        name: "Capture the frame",
        text: "Click the capture button to save the moment in the gallery below.",
    },
    {
        name: "Download in high quality",
        text: "Download individual captures or the entire session in optimized WebP format.",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Frame Capture using HTML5 Video API",
        url: "https://developer.mozilla.org/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    { type: 'title', text: 'Preserving Moments: Video Frame Extraction technology', level: 2 },
    { type: 'paragraph', html: 'Sometimes a picture is worth a thousand words, but finding that picture in a video can be frustrating. Our tool uses local hardware to extract frames without additional compression.' },
    
    { type: 'card', title: 'Surgical Precision', icon: 'mdi:target', html: 'Moving just one frame forward or back is vital to capturing the perfect instant of a jump, a smile, or a scientific event.' },

    { type: 'diagnostic', variant: 'success', title: 'Privacy by Design', icon: 'mdi:shield-check', html: 'Unlike online video converters, we never see your content. Processing is entirely done on your local GPU and CPU.' },
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

export const content: VideoFrameExtractorLocaleContent = {
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

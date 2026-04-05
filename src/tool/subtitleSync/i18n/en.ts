import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'subtitle-sync';
const title = 'Sync SRT Subtitles Online - Free Time Adjustment Tool';
const description = 'Online tool to advance or delay SRT subtitles. Easily correct time offsets and instantly download the synchronized file.';

const ui: SubtitleSyncUI = {
    dropTitle: "Drag your .SRT file here",
    dropSubtitle: "or click to explore",
    adjustTitle: "Adjust Time",
    offsetLabel: "Offset (seconds)",
    offsetHelp: "Use negative values to advance (e.g., -1.5) and positive values to delay.",
    linesStat: "Lines",
    firstStat: "First Subtitle",
    lastStat: "Last Subtitle",
    originalLabel: "ORIGINAL",
    resultLabel: "RESULT",
    downloadButton: "Download Corrected",
    previewBadge: "PREVIEW",
    unitSeconds: "sec"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "How can I sync subtitles if the audio is playing first?",
        answer: "If the audio appears before the text, you need to delay the subtitles. Enter a positive value in the calculator (e.g., 2.0 to delay them by 2 seconds).",
    },
    {
        question: "What file formats does this tool accept?",
        answer: "Currently, the tool is optimized for .SRT (SubRip) files, which is the most common standard for video players and streaming platforms.",
    },
    {
        question: "Is it safe to upload my subtitle files?",
        answer: "Yes, because the processing is 100% local on your device. Your files are not sent to any server; the synchronization happens directly in your browser.",
    },
    {
        question: "Can I sync only part of the file?",
        answer: "No, this tool applies a constant offset to the entire file. If the sync issue is progressive, you might need a more advanced editor.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Upload your SRT file",
        text: "Drag the subtitle file you want to correct into the upload area.",
    },
    {
        name: "Identify the offset",
        text: "Measure how much delay or advance the subtitles have compared to the audio in your player.",
    },
    {
        name: "Adjust the displacement",
        text: "Enter positive seconds (delay) or negative seconds (advance) in the control panel.",
    },
    {
        name: "Download the file",
        text: "Check in the preview that the times are correct and click download to get your new SRT.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "SubRip (SRT) format specification",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
    {
        name: "MDN Web Docs - FileReader API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/FileReader",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    { type: 'title', text: 'Master Digital Subtitle Synchronization', level: 2 },
    { type: 'paragraph', html: 'There is nothing more frustrating for a viewer than a dialogue that doesn\'t match the voices. Subtitle desynchronization often occurs due to differences between video versions (framerate, ad breaks, or production intros).' },
    
    { type: 'title', text: 'Advance vs Delay (The Big Dilemma)', level: 3 },
    { type: 'paragraph', html: 'Understanding which value to enter is the key to using this tool successfully:' },
    { type: 'list', items: [
        '<strong>Delay:</strong> If you see the text BEFORE the audio. Use positive numbers (e.g., 1.5).',
        '<strong>Advance:</strong> If you see the text AFTER the audio. Use negative numbers (e.g., -1.5).',
    ]},

    { type: 'card', title: 'Privacy Guaranteed', icon: 'mdi:shield-lock', html: 'By processing the file via zero-knowledge client-side JavaScript, we guarantee that your subtitle content never leaves your computer. Ideal for translators and professionals handling sensitive material.' },

    { type: 'diagnostic', variant: 'info', title: 'FPS Pro Tip', icon: 'mdi:video-input-component', badge: 'Technical', html: 'If the subtitles start well but gradually become out of sync, it\'s likely due to a framerate difference (e.g., 23.976 vs 25 fps). This tool solves fixed offsets, not progressive ones.' },
    
    { type: 'title', text: 'Conclusion: Smooth Cinema Integration', level: 3 },
    { type: 'paragraph', html: 'With just a few clicks, you can transform a frustrating viewing experience into a perfect movie night. Our free SRT synchronization tool is fast, secure, and always available.' }
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

export const content: SubtitleSyncLocaleContent = {
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

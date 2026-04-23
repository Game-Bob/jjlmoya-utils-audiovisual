import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'synchronize-srt-subtitles-online-adjust-timing-free';
const title = 'Synchronize SRT Subtitles Online: Adjust Timing for Free';
const description = 'Online tool to advance or delay SRT subtitles. Correct timing offset easily and download the synchronized file instantly.';

const ui: SubtitleSyncUI = {
    dropTitle: "Drag your .SRT file here",
    dropSubtitle: "or click to browse",
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
        question: "How can I synchronize my subtitles if the audio is ahead?",
        answer: "If the audio appears before the text, you must delay the subtitles. Enter a positive value in the calculator (e.g., 2.0 to delay them by 2 seconds).",
    },
    {
        question: "What file formats does this tool accept?",
        answer: "Currently, the tool is optimized for .SRT (SubRip) files, which is the most common standard in video players and streaming platforms.",
    },
    {
        question: "Is it safe to upload my subtitle files?",
        answer: "Yes, because processing is 100% local on your device. Your files are not sent to any server; synchronization happens directly in your browser.",
    },
    {
        question: "Can I synchronize only part of the file?",
        answer: "No, this tool applies a constant offset to the entire file. If the offset is progressive, you might need more advanced editing.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Upload your SRT file",
        text: "Drag the subtitle file you want to correct into the upload area.",
    },
    {
        name: "Identify the offset",
        text: "Measure how much delay or advance the subtitles have relative to the audio in your player.",
    },
    {
        name: "Adjust the offset",
        text: "Enter positive (delay) or negative (advance) seconds in the control panel.",
    },
    {
        name: "Download the file",
        text: "Verify in the preview that the times are correct and click download to get your new SRT.",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Professional Subtitle Synchronization',
        items: [
            'Instant correction of audio-subtitle offsets',
            'Supports standard SRT (SubRip) files',
            '100% local processing - maximum privacy',
            'No installation, no subscription, completely free'
        ]
    },
    { type: 'title', text: 'Perfect SRT Subtitle Synchronization', level: 2 },
    { type: 'paragraph', html: 'There is nothing more frustrating for a viewer than seeing dialogues that do not match the voices. Subtitle offset usually occurs due to differences between video versions: variations in framerate, advertising cuts, production intros, or changes in compression. With this tool, you fix the problem in seconds.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Local Processing', icon: 'mdi:shield' },
        { value: 'Milliseconds', label: 'Precision', icon: 'mdi:clock-outline' },
        { value: 'Any Size', label: 'NO File Limit', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Advance vs Delay: Practical Guide', level: 3 },
    { type: 'paragraph', html: 'The first step is to correctly identify the type of offset. Here is the logic:' },
    { type: 'list', items: [
        '<strong>Delay (Positive Value):</strong> When you see text appear BEFORE the sound. Subtitles are ahead. Example: +2.0 seconds.',
        '<strong>Advance (Negative Value):</strong> When you see text appear AFTER the sound. Subtitles are behind. Example: -2.0 seconds.',
        '<strong>Test and Adjust:</strong> Start with small increments (0.5s) and use the preview to validate.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Professional Level Privacy', html: 'By processing the file via client-side JavaScript, we guarantee that your subtitle content never leaves your computer. Essential for translators and professionals handling confidential material or under NDA.' },

    { type: 'title', text: 'Common Use Cases', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Translators and Subtitlers',
            description: 'Synchronize translations after working with multiple video versions',
            icon: 'mdi:translate',
            points: [
                'SRT files from different sources',
                'Content versioning (theatrical vs streaming)',
                'Fast delivery without changing tools'
            ]
        },
        {
            title: 'Content Creators',
            description: 'Recover subtitles when video was processed with different framerate',
            icon: 'mdi:video',
            points: [
                'Reuse existing subtitles',
                'Format changes (720p to 1080p)',
                'Avoid manual retiming of 1000+ lines'
            ],
            highlight: true
        },
        {
            title: 'Casual Users',
            description: 'Correct downloaded subtitles that don\'t fit perfectly',
            icon: 'mdi:account',
            points: [
                'Generic out-of-sync subtitles',
                'Movies in different region (PAL vs NTSC)',
                'Streaming with edited versions'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Why Subtitles Go Out of Sync', level: 3 },
    { type: 'table', headers: ['Common Cause', 'Technical Description', 'Solution'], rows: [
        ['Framerate Difference', '23.976 fps vs 25 fps - accumulated difference', 'Single offset adjustment (this tool)'],
        ['Editorialization', 'Ad cuts or additional content removed', 'Manual calculation + synchronization'],
        ['Regional Version', 'PAL (25 fps Europe) vs NTSC (29.97 fps USA)', 'Simple mathematical offset'],
        ['Resolution Change', 'Re-encoding with different processing speed', 'Recalculation of original file']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Technical Limitations to Consider', icon: 'mdi:information', badge: 'Important', html: 'This tool applies a <strong>constant</strong> offset to the entire file. If the offset is <strong>progressive</strong> (starts well but gradually goes out of sync), it indicates a persistent framerate difference. In that case, the original file needs re-processing in professional editing software.' },

    { type: 'proscons', items: [
        {
            pro: 'Extreme speed - processes large files in milliseconds',
            con: 'Only adjusts fixed offset, not progressive ones'
        },
        {
            pro: 'Total privacy - content never leaves your browser',
            con: 'Requires modern browser with JavaScript enabled'
        },
        {
            pro: 'Universal format - works with any standard SRT',
            con: 'Does not support other formats (ASS, VTT, SCC, etc.)'
        },
        {
            pro: 'Completely free, no advertising, no tracking',
            con: 'No change history or versioning'
        }
    ], proTitle: 'Advantages', conTitle: 'Limitations' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Most universal subtitle format: text file with sequence numbers, times (hh:mm:ss,mmm), and text. De facto standard in players and platforms.'
        },
        {
            term: 'Offset',
            definition: 'Fixed amount of time added or subtracted from all times in the file. Can be positive seconds (delay) or negative (advance).'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Frames per second. 24p (cinema), 25p (PAL/Europe), 29.97p (NTSC/USA), 60p (fluid video). Differences cause cumulative offsets.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Regional television standards: PAL (25 fps) in Europe; NTSC (29.97 fps) in USA. ~4% speed difference.'
        },
        {
            term: 'Progressive Offset',
            definition: 'When synchronization starts correct but ends up gradually out of sync. Indicates persistent framerate difference, requires re-processing.'
        }
    ] },

    { type: 'message', title: 'Professional Editing with Full Control', ariaLabel: 'Technical information about synchronization', html: 'Our approach is simple but powerful: a single offset, applied instantly, processed 100% in your browser. No cloud, no storage, no tracking. Simply upload, adjust, download. Full control over your content.' },

    { type: 'title', text: 'Conclusion: Movies Without Interruptions', level: 3 },
    { type: 'paragraph', html: 'Perfect subtitle synchronization is essential for a quality audiovisual experience. With this tool, you transform a frustrating experience into a perfect movie night, without the need for expensive or complicated software.' }
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

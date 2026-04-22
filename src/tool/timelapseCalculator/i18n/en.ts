import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'timelapse-hyperlapse-calculator-perfect-intervals';
const title = 'Timelapse and Hyperlapse Calculator: Perfect Intervals';
const description = 'Calculate the exact interval between photos, total duration, and storage for your timelapses. Essential tool for photographers.';

const ui: TimelapseUI = {
    title: "Timelapse Calculator",
    paramsTitle: "Parameters",
    eventDuration: "How long is the real event?",
    hours: "Hours",
    minutes: "Minutes",
    videoDuration: "What final video do you want?",
    seconds: "Duration (sec)",
    fps: "FPS",
    resultsTitle: "Results",
    intervalLabel: "Set your intervalometer to:",
    secondsUnit: "seconds",
    totalPhotos: "Total Photos",
    speed: "Speed",
    shutterSpeed: "Shutter Speed",
    storage: "Size (RAW)",
    rule180Info: "The 180° rule suggests a shutter speed of half the interval for smooth motion blur.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "How do I choose the correct interval for my timelapse?",
        answer: "It depends on the speed of the movement you are capturing. For fast clouds, use 2-3 seconds. For the movement of the sun or stars, 15-30 seconds. For plants growing or building construction, 5-15 minutes.",
    },
    {
        question: "How many photos do I need for a one-minute video?",
        answer: "A standard video has 24 or 30 frames per second (fps). For one minute of video at 24fps, you need exactly 1440 photographs (60 seconds * 24 photos/second).",
    },
    {
        question: "What is 'Flicker' and how do I avoid it?",
        answer: "It is an annoying flickering caused by small variations in exposure between photos. To avoid it, always use manual mode (M), fixed white balance, and prioritize using lenses with a manual aperture ring or 'lens twist' techniques.",
    },
    {
        question: "Why is shutter speed important?",
        answer: "For movement to look fluid (180° rule), the shutter speed should be approximately half the interval. For example, if the interval is 2 seconds, try shooting at 1 second to create natural motion blur.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Define the final video duration",
        text: "Indicate how many seconds or minutes you want the resulting video to last (e.g., 10 seconds for Instagram).",
    },
    {
        name: "Select the output FPS",
        text: "Choose the fluidity of the video: 24 (cinema), 30 (web), or 60 (smooth slow motion).",
    },
    {
        name: "Adjust the capture interval",
        text: "Configure every how many seconds your camera will fire according to the speed of the scene.",
    },
    {
        name: "Verify storage space",
        text: "The calculator will tell you how many Gigabytes the session will take. Ensure your SD card has enough space before starting.",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Definitive Guide to Timelapse and Hyperlapse Intervals', level: 2 },
    { type: 'paragraph', html: 'The difference between an amateur high-speed video and a <strong>cinematic timelapse</strong> mathematically lies in one single factor: <strong>the interval</strong>. This calculator removes the guesswork, allowing you to precisely plan your intervalometer shot to capture sunrises, urban traffic, or the Milky Way with perfect fluidity.' },
    
    { type: 'title', text: 'Recommended Intervals Table (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Use this quick reference table to set your intervalometer according to the subject. The goal is to capture enough movement to be perceptible but smooth.' },
    { type: 'table', headers: ['Subject / Scene', 'Suggested Interval', 'Event Duration (Minimum)'], rows: [
        ['Fast Clouds / Storms', '1 - 2 seconds', '20 - 30 min'],
        ['Urban Traffic / People (Blur)', '0.5 - 2 seconds', '15 - 20 min'],
        ['Sunset / Sunrise (Holy Grail)', '5 - 10 seconds', '1.5 - 2.5 hours'],
        ['Slow Clouds / Shadows', '10 - 15 seconds', '2 - 3 hours'],
        ['Stars / Milky Way (Astro)', '15 - 30 seconds*', '3 - 5 hours'],
        ['Construction / Fast Plants', '5 - 15 minutes', 'Days / Weeks']
    ]},
    { type: 'tip', title: 'Note for Astro', html: 'The interval is usually dictated by the exposure time needed to capture light (500 rule) + 1 or 2 seconds of buffer for card writing.' },

    { type: 'title', text: 'The 180° Rule (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'A common mistake in timelapse is getting a "jittery" or staccato (strobing) video. To get that smooth cinematic look, you need <strong>motion blur</strong>.' },
    { type: 'card', title: 'The Rule', icon: 'mdi:information', html: 'Your Shutter Speed should be half of your interval. <br /><br /> <em>Example:</em> If you shoot every <strong>4 seconds</strong>, your exposure should be <strong>2 seconds</strong>. This fills the "temporal gap" between photos, creating trails in cars and soft water.' },

    { type: 'title', text: 'Flicker and Manual Aperture', level: 3 },
    { type: 'paragraph', html: '"Flicker" is the annoying flickering caused by micro-variations in the diaphragm aperture between shots.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Slightly unlock the lens on DSLRs to break the electronic connection and fix the aperture mechanically.',
        '<strong>All Manual:</strong> ISO, White Balance, and Focus must be fixed. Never use automatic modes.',
        '<strong>Shoot in RAW:</strong> Essential for correcting exposure and color in post-production without destroying the image.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Advanced Technique: The "Holy Grail"', icon: 'mdi:crown', badge: 'Pro Technique', html: 'The "Holy Grail" refers to the smooth transition from day to night (or vice versa). It is the most difficult technical challenge because light changes drastically (up to 15 stops of aperture).' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Gradual Exposure', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Strategy', value: 'Night Interval', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Conclusion: The Zen of Simple Mechanics', level: 3 },
    { type: 'paragraph', html: 'Mastering your timelapse starts with understanding your intervalometer\'s math. Don\'t let a poorly chosen interval ruin your session.' }
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

export const content: TimelapseLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Frequently Asked Questions about Timelapse Production',
    bibliography: 'Timelapse Theory and Resources',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

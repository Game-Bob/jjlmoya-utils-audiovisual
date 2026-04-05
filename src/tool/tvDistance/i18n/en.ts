import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-distance';
const title = 'TV Distance Calculator - Optimal THX & 4K Viewing';
const description = 'Calculate the ideal viewing distance for your TV based on size and resolution. Optimize your Home Cinema with THX and SMPTE standards.';

const ui: TvDistanceUI = {
    specTitle: "Specifications",
    diagonalLabel: "Diagonal Size",
    resolutionLabel: "Resolution",
    thxRecommendation: "THX Recommendation",
    thxDescription: "THX recommends a distance that covers a 40-degree field of view for an immersive cinematic experience.",
    simulationBadge: "Real-time Simulation",
    tvWidthLabel: "cm wide",
    userLocationLabel: "Your Location",
    minLimitLabel: "Minimum Limit",
    optimalLimitLabel: "Optimal Distance",
    maxLimitLabel: "Maximum Limit",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Why does resolution matter when calculating distance?",
        answer: "With higher resolutions (4K or 8K), pixels are smaller. This allows you to sit closer without noticing the pixel grid, increasing immersion without losing sharpness.",
    },
    {
        question: "What is a 40-degree field of view?",
        answer: "It's the standard recommended by THX for the screen to fill a large part of your peripheral vision, similar to a professional movie theater.",
    },
    {
        question: "Can I sit further than recommended?",
        answer: "Yes, but you will lose the benefit of high resolutions. If you sit too far from a 4K TV, your eye won't distinguish the extra details.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Specify diagonal inches",
        text: "Move the slider to select the size of your current TV or the one you are planning to buy.",
    },
    {
        name: "Choose resolution",
        text: "Select between 1080p, 4K, or 8K to adjust visual acuity limits.",
    },
    {
        name: "Watch the simulation",
        text: "Observe on the diagram how the relationship between you and the screen changes.",
    },
    {
        name: "Adjust your sofa",
        text: "Place your seat within the 'Optimal Distance' range to maximize cinematic immersion.",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
    {
        name: "SMPTE - Standards Documentation",
        url: "https://www.smpte.org/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    { type: 'title', text: 'Inmersion Science: How far should you sit?', level: 2 },
    { type: 'paragraph', html: 'It\'s not just about comfort; it\'s human physiology. The human eye has a resolution limit; if you sit too far from a high-definition screen, you\'re wasting money on pixels you can\'t see.' },
    
    { type: 'title', text: 'Industry Standards: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Two major authorities define how we should view audiovisual content:' },
    { type: 'list', items: [
        '<strong>THX:</strong> Proposes a 40º angle. It\'s the most immersive option, ideal for action movies and cinema-like experiences.',
        '<strong>SMPTE:</strong> Recommends a minimum of 30º. It\'s a more relaxed distance, intended for varied content like news or sports.'
    ]},

    { type: 'card', title: 'Eye Fatigue', icon: 'mdi:eye-outline', html: 'Being too close can cause eye strain due to excessive eye movement. Our calculator ensures you\'re in the "sweet spot" where the screen fills your vision without stress.' },

    { type: 'diagnostic', variant: 'info', title: 'Retina Resolution', icon: 'mdi:monitor-screenshot', badge: 'Technical Fact', html: 'For a 55-inch 4K TV, the point where you stop seeing individual pixels is approximately 1.2 meters. Closer than that, you\'ll notice the image structure.' },
    
    { type: 'title', text: 'Conclusion: Your Perfect Home Cinema', level: 3 },
    { type: 'paragraph', html: 'Set up your space following these standards to transform your living room into an authentic theater. Distance is as important as panel quality.' }
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

export const content: TvDistanceLocaleContent = {
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

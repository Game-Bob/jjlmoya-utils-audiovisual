import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-viewing-distance-calculator-thx-4k-optimal-screen';
const title = 'TV Distance Calculator: THX and 4K Optimal Screen';
const description = 'Calculate the ideal distance to watch your television based on its size and resolution. Optimize your Home Cinema with THX and SMPTE standards.';

const ui: TvDistanceUI = {
    specTitle: "Specifications",
    diagonalLabel: "Diagonal Size",
    resolutionLabel: "Resolution",
    thxRecommendation: "THX Recommendation",
    thxDescription: "THX recommends a distance that covers a 40-degree viewing angle for an immersive cinematic experience.",
    simulationBadge: "Real-Time Simulation",
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
        answer: "At higher resolutions (like 4K or 8K), pixels are smaller. This allows you to sit closer without perceiving the pixel grid, increasing immersion without losing sharpness.",
    },
    {
        question: "What is the 40-degree viewing angle?",
        answer: "It is the standard recommended by THX so that the screen occupies a large part of your peripheral vision, similar to the experience of a professional cinema hall.",
    },
    {
        question: "Can I sit further away than recommended?",
        answer: "Yes, but you will lose the benefit of high resolutions. If you sit too far from a 4K TV, your eye won't be able to distinguish the extra details and you'll see it as if it were 1080p.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Indicate inches",
        text: "Move the slider to select the size of your current television or the one you plan to buy.",
    },
    {
        name: "Select resolution",
        text: "Choose between 1080p, 4K, or 8K to adjust the visual acuity limits.",
    },
    {
        name: "Visualize simulation",
        text: "Observe in the diagram how the size relationship between you and the screen changes.",
    },
    {
        name: "Adjust your sofa",
        text: "Place your seat within the 'Optimal Distance' range to maximize cinematic immersion.",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Optimal TV Distance by Resolution and Size',
        items: [
            'THX standards (40°) for immersive cinematic experience',
            'Calculations for 1080p, 4K, and 8K with maximum precision',
            'Real-time visual simulation of your setup',
            'Avoid eye fatigue and maximize content immersion'
        ]
    },
    { type: 'title', text: 'Science of Immersion: Optimal TV Distance', level: 2 },
    { type: 'paragraph', html: 'It\'s not just about comfort, but about human visual physiology. The eye has a resolution acuity limit; if you sit too far from a 4K screen, you are wasting money on pixels your vision cannot exploit. And if you sit too close, it causes eye fatigue.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Ideal THX Angle', icon: 'mdi:eye' },
        { value: '100%', label: 'Exploited Pixels', icon: 'mdi:video-high-definition' },
        { value: 'Zero', label: 'Visual Fatigue', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Two Professional Standards: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'There are two main authorities in the audiovisual industry that define how to optimize your viewing experience:' },
    { type: 'comparative', items: [
        {
            title: 'THX Standard',
            description: '40° viewing angle - More immersive',
            icon: 'mdi:filmstrip',
            points: [
                'Screen occupies more of your peripheral vision',
                'Immersive cinematic experience',
                'Ideal for action movies, live sports',
                'Requires more room space'
            ],
            highlight: true
        },
        {
            title: 'SMPTE Standard',
            description: '30° viewing angle - More relaxed',
            icon: 'mdi:television',
            points: [
                'More comfortable sitting distance',
                'Conservative professional recommendation',
                'Ideal for varied content (news, series)',
                'Better for smaller rooms'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'How Resolution Changes the Equation', level: 3 },
    { type: 'table', headers: ['Resolution', '55" TV Size', 'Minimum Distance (no visible pixels)', 'Optimal THX Distance'], rows: [
        ['1080p (Full HD)', '55 inches', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 inches', '1.2 m', '1.5 m'],
        ['8K', '55 inches', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'As you see, higher resolution allows sitting closer without perceiving the pixel structure. A 4K TV can be appreciated from 1.2 meters away; a 1080p needs at least 2 meters.' },

    { type: 'card', title: 'The Human Visual Acuity Limit', html: 'The human eye has a resolution limit capacity (visual acuity). Beyond a certain distance, you cannot distinguish more details even if the screen has 8K. Our calculations position you exactly in the "optimal zone" where you exploit 100% of the pixels without wasting unnecessary ocular energy.' },

    { type: 'diagnostic', variant: 'info', title: 'Eye Fatigue and Distance', icon: 'mdi:information', badge: 'Visual Health', html: 'Being too close causes fatigue because your eyes need to constantly accommodate to extreme angles. Being too far causes strain to distinguish details. Our calculator positions you in the "sweet spot" where the screen fills your natural vision (40° for THX) without causing ocular stress.' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° creates true cinematic immersion - like a professional cinema hall',
            con: 'Requires more available space in the room'
        },
        {
            pro: '4K allows sitting closer than 1080p - useful in small spaces',
            con: 'You must be at minimum distance to exploit extra pixels'
        },
        {
            pro: 'Avoid eye fatigue by positioning yourself correctly from the start',
            con: 'Most home rooms DO NOT follow these standards (hence the fatigue)'
        },
        {
            pro: 'You can validate if your current TV is well positioned',
            con: 'If it is wrong, it requires moving furniture (not a software issue)'
        }
    ], proTitle: 'Advantages', conTitle: 'Limitations' },

    { type: 'glossary', items: [
        {
            term: 'Viewing Angle (in degrees)',
            definition: 'Visual angle the screen covers from your position. 40° = very immersive (peripheral covered); 20° = background content (not immersive).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Audiovisual quality certification created by Lucasfilm. Defines standards for cinemas, home theater, and audio equipment. 40° is its primary recommendation.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Technical standards organization for film and video. Recommends 30° as a conservative professional distance.'
        },
        {
            term: 'Human Visual Acuity',
            definition: 'Capability of the eye to distinguish fine details. An individual pixel is imperceptible past a certain distance (depends on resolution).'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Resolution of ~3840x2160 pixels. 4 times more pixels than 1080p. Allows getting closer without perceiving pixel structure.'
        }
    ] },

    { type: 'message', title: 'Professional Audiovisual Room Optimization', ariaLabel: 'Information about TV setup standards', html: 'Professional cinemas spend millions ensuring distance, angle, and lighting are perfect. Our calculator brings those same principles to your home. It\'s not luxury: it\'s an investment in visual comfort and maximum exploitation of your equipment.' },

    { type: 'title', text: 'Set Up Your Home Cinema Professionally', level: 3 },
    { type: 'paragraph', html: 'Distance is JUST AS important as screen size and resolution. Follow these standards to transform your living room into an authentic cinematic hall. You\'ll see movies, series, and sports content with the immersion they were designed for.' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Frequently Asked Questions about TV Viewing Distance',
    bibliography: 'Professional Standards for Television Setup',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

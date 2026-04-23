import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privacy-editor-pixelate-blur-faces-photos';
const title = 'Online Privacy Editor: Pixelate and hide faces in photos';
const description = 'Protect your identity by censoring sensitive areas of your photos. Pixelate faces, blur documents, or cover private information 100% locally.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixelate",
    toolBlur: "Blur",
    toolSolid: "Solid",
    intensityLabel: "Intensity",
    undoButton: "Undo",
    downloadButton: "Save",
    dropTitle: "Privacy Editor",
    dropSubtitle: "Drag your image here or click to start",
    privacySecureLabel: "100% Local",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto Detect",
    loadingModels: "Loading models...",
    noFacesDetected: "No faces automatically detected.",
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Are my photos uploaded to any server?",
        answer: "No. The privacy editor works entirely in your browser. Pixels are modified locally and nothing is sent outside of your device.",
    },
    {
        question: "How does automatic face detection work?",
        answer: "We use a lightweight neural network (TinyFaceDetector) that runs in your browser to identify facial features without needing an external connection.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Upload your photo",
        text: "Drag or select the image that contains sensitive information you wish to hide.",
    },
    {
        name: "Choose the tool",
        text: "Select between pixelate, blur, or solid cover depending on the level of privacy you need.",
    },
    {
        name: "Mark the area",
        text: "Click and drag over the zone you want to protect (faces, license plates, names, etc.).",
    },
    {
        name: "Save the result",
        text: "Download the processed image with the security that the original data is inaccessible.",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Privacy Editor: Pixelate, Blur, and Hide',
        items: [
            'Three editing tools: Pixelate, Blur, Solid Cover',
            'Automatic face detection with AI (TinyFaceDetector)',
            '100% local processing - your photos never leave the browser',
            'No watermarks, no limits, completely free'
        ]
    },
    { type: 'title', text: 'Digital Privacy: How to Protect Your Visual Data', level: 2 },
    { type: 'paragraph', html: 'In the era of social media, sharing photos without control can expose sensitive personal data. Our tool allowed you to hide critical information (faces, license plates, names, addresses) before uploading them to the Internet, ensuring that your privacy remains under your full control.' },

    { type: 'stats', items: [
        { value: '3', label: 'Hiding Methods', icon: 'mdi:tools' },
        { value: '100%', label: 'Local Privacy', icon: 'mdi:shield-check' },
        { value: 'AI', label: 'Face Detection', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Three Hiding Methods Explained', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pixelate',
            description: 'Divides the area into squares, impossible to recognize',
            icon: 'mdi:blur',
            points: [
                'Maximum irreversible obfuscation',
                'More secure against facial recognition',
                'Visible, clear that something was hidden',
                'Ideal: faces in public photos'
            ]
        },
        {
            title: 'Blur',
            description: 'Gaussian Smoothing - more natural look',
            icon: 'mdi:blur-off',
            points: [
                'More elegant visual appearance',
                'Maintains some tone coherence',
                'Mathematically reversible (theoretically)',
                'Ideal: less sensitive information'
            ],
            highlight: true
        },
        {
            title: 'Solid Cover',
            description: 'Opaque color block - maximum privacy',
            icon: 'mdi:rectangle',
            points: [
                'Visible, obvious hiding',
                'Maximum legal security/privacy',
                'Changes visual composition',
                'Ideal: documents, sensitive data'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Automatic Face Detection with AI', level: 3 },
    { type: 'paragraph', html: 'Our tool uses TinyFaceDetector, a compact neural network that runs directly in your browser to identify faces automatically:' },
    { type: 'list', items: [
        '<strong>100% Local:</strong> The AI model runs on your GPU/CPU, not on remote servers.',
        '<strong>No Internet:</strong> After the initial download, it works completely offline.',
        '<strong>Privacy Guaranteed:</strong> No one sees the faces: not Google, not OpenAI, nor us.',
        '<strong>Automatic One-Click:</strong> Detects faces and lets you choose to hide with one click.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'By processing images using your browser\'s local GPU and CPU, we guarantee that original photos never leave your device. Even if you change your mind, nothing was transmitted. This is the maximum standard of digital privacy.' },

    { type: 'title', text: 'Privacy Use Cases', level: 3 },
    { type: 'table', headers: ['Sensitive Information', 'Recommended Method', 'Urgency'], rows: [
        ['People\'s faces', 'Pixelate or Blur', 'Critical'],
        ['Vehicle license plates', 'Pixelate (irreversible)', 'Critical'],
        ['Identity documents', 'Solid Cover or Pixelate', 'Critical'],
        ['Written names/addresses', 'Solid Cover or Pixelate', 'High'],
        ['Phone numbers', 'Pixelate or Cover', 'High'],
        ['Medical information', 'Solid Cover', 'Critical'],
        ['Visible WiFi signals', 'Pixelate', 'Medium']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Total privacy: 100% local processing, no servers, no storage',
            con: 'Requires modern browser with Canvas and WebGL support'
        },
        {
            pro: 'Automatic face detection saves manual time',
            con: 'AI is not perfect - profile or partial faces may not be detected'
        },
        {
            pro: 'Three methods allow choosing security vs aesthetics',
            con: 'No advanced options (smart warp, context fill)'
        },
        {
            pro: 'Completely free, no advertising, no limits',
            con: 'Not equivalent to professional software like Photoshop'
        }
    ], proTitle: 'Advantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'warning', title: 'Warning: Blurring is NOT 100% Secure', icon: 'mdi:alert', badge: 'Security', html: 'Gaussian blur is mathematically reversible through sophisticated inverse algorithms. If information is CRITICAL (legal documents, identity), use <strong>Pixelate or Solid Cover</strong>. Blur is aesthetically better but less secure.' },

    { type: 'glossary', items: [
        {
            term: 'Pixelation',
            definition: 'Reducing resolution by dividing area into uniform color blocks. Irreversible. Maximum security against AI facial recognition.'
        },
        {
            term: 'Gaussian Blur',
            definition: 'Mathematical smoothing based on normal distribution. Theoretically reversible through deconvolution, but practically very difficult.'
        },
        {
            term: 'Solid Cover',
            definition: 'Opaque block of uniform color. Maximum security, maximum legal privacy, less visually elegant.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Lightweight convolutional neural network (CNN) for detecting faces. Runs locally in browser without needing an external server.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Approach where privacy is integrated starting from system design, not added later. Our local approach is Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Privacy in Your Control', ariaLabel: 'Information about privacy protection', html: 'We do not store or process your photos on remote servers. There are no tracking cookies. No editing histories. We don\'t know what you hide because we never see your images. Full control, full privacy, full freedom.' },

    { type: 'title', text: 'Share Securely on Social Networks', level: 3 },
    { type: 'paragraph', html: 'Before posting any photo on the Internet, ask yourself: is there information I would prefer not to be public? Children\'s faces, license plates, addresses, document numbers. A 2-minute privacy session now avoids years of problems.' }
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

export const content: PrivacyBlurLocaleContent = {
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

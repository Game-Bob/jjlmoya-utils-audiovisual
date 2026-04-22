import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadata-cleaner-remove-gps-photo-privacy';
const title = 'EXIF Metadata Cleaner: Remove GPS and Hidden Data from Photos';
const description = 'Free online tool to erase EXIF metadata, GPS coordinates, and camera specs from your images before sharing. 100% private: works without uploading photos to the internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Drag your image here",
    dropSubtitle: "Remove GPS metadata, camera model, and hidden settings.",
    dropLocalInfo: "100% local processing. Nothing is uploaded to the cloud.",
    selectButton: "Select Image",
    processingText: "Cleaning metadata...",
    analysisCompleted: "Analysis Completed",
    downloadButton: "Download Clean Image",
    resetButton: "Clean another image",
    privacyRiskTitle: "PRIVACY RISKS DETECTED:",
    gpsLabel: "GPS:",
    gpsDetected: "DETECTED",
    gpsNotFound: "NOT FOUND",
    cameraLabel: "CAMERA:",
    softwareLabel: "SOFTWARE:",
    dateLabel: "DATE:",
    otherTechnicalDetails: "OTHER TECHNICAL DETAILS",
    noMetadataFound: "No readable EXIF metadata found.",
    alreadyCleanInfo: "The image might already be clean.",
    previewLabel: "Preview",
    faqTitle: "Frequently asked questions about photo privacy": "Resources and technical EXIF documentation",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "What are EXIF metadata?",
        answer: "EXIF (Exchangeable Image File Format) is hidden information that your camera or phone saves inside every photo. It includes the exact date, device model, shooting settings (ISO, aperture), and most critically, the GPS coordinates of where the photo was taken.",
    },
    {
        question: "Is it safe to use this online tool?",
        answer: "Yes, because processing is 100% local in your browser. Your photos are never uploaded to any server; the cleaning happens directly in your device's memory, ensuring absolute privacy.",
    },
    {
        question: "What specific data does the cleaner remove?",
        answer: "It erases all EXIF tags (GPS, camera brand, serial number), IPTC (copyright, author), and XMP (editing history). Your image becomes 'clean', preserving only the visual pixels.",
    },
    {
        question: "Does the image lose quality when cleaning metadata?",
        answer: "No. We only remove the technical data 'header' of the file. The image data (pixels) remain identical, so the visual quality is not affected at all.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Select the images",
        text: "Drag your photos or select them from your file explorer. You can process several at once.",
    },
    {
        name: "Analyze current data",
        text: "The tool will show you what sensitive information it has detected (e.g., 'GPS coordinates detected').",
    },
    {
        name: "Process and clean",
        text: "Click the clean button to instantly remove all metadata tags.",
    },
    {
        name: "Download secure photos",
        text: "Save the new versions of your images, now anonymized and ready to be shared safely on social media.",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIF Metadata Cleaner: Protect Your Privacy',
        items: [
            'Remove GPS coordinates and location from your photos instantly',
            'Erase camera model, serial number, and technical information',
            '100% browser-based processing - your images never leave your device',
            'Maintains visual quality - only hidden data is removed'
        ]
    },
    { type: 'title', text: 'Complete Guide to Privacy and EXIF Metadata in Digital Photography', level: 2 },
    { type: 'paragraph', html: 'Have you ever wondered how much personal information you share when uploading a photo to social media? EXIF metadata is like an <strong>invisible fingerprint</strong> that can reveal everything from your exact home location to the price of your photography gear. This guide explains how to protect your privacy effectively.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privacy - Local Processing', icon: 'mdi:shield-check' },
        { value: '0%', label: 'Data Stored on Servers', icon: 'mdi:database' },
        { value: 'Instant', label: 'Metadata Removal', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'What Information Is Hidden in Your Photos?', level: 3 },
    { type: 'paragraph', html: 'More than 90% of digital photos contain sensitive information that can compromise your security. Here is all the data that can be revealed:' },
    { type: 'list', items: [
        '<strong>GPS Coordinates:</strong> The exact latitude and longitude where the capture was made (home address, work, frequently visited places).',
        '<strong>Equipment Identification:</strong> Make, model, and serial number of the camera or smartphone (valuable information).',
        '<strong>Technical Settings:</strong> ISO, aperture (f/), exposure time, and focal length (allows identifying your specific gear).',
        '<strong>Exact Date and Time:</strong> A complete timeline of your daily activities.',
        '<strong>Editing History:</strong> Software used, editing software, and last modification date.',
        '<strong>Copyright Data:</strong> Photographer, copyright, and personal notes.'
    ] },

    { type: 'title', text: 'Real Security Risks: Use Cases', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Professional Photographers',
            description: 'Risk of expensive equipment theft identified by serial number',
            icon: 'mdi:camera',
            points: [
                'Thieves look for photographers with valuable gear',
                'GPS identifies the owner\'s home address',
                'Serial number facilitates resale on the dark web'
            ]
        },
        {
            title: 'Parents and Influencers',
            description: 'Extreme danger: real-time location of children',
            icon: 'mdi:alert',
            points: [
                'Predators track locations using OSINT',
                'Predators can identify daily routines',
                'Risk of stalking and physical tracking'
            ],
            highlight: true
        },
        {
            title: 'Social Media Users',
            description: 'Exposure of personal and professional privacy',
            icon: 'mdi:share-variant',
            points: [
                'Posting from the office reveals workplace location',
                'Geolocation allows inferring approximate salary',
                'Public data allows targeted profiling'
            ]
        },
        {
            title: 'Travelers and Nomads',
            description: 'Danger of theft in unoccupied homes',
            icon: 'mdi:map',
            points: [
                'Published GPS indicates empty house during travel',
                'Equipment data attracts criminals',
                'Travel histories reveal schedules and patterns'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'How This Tool Works', level: 3 },
    { type: 'list', items: [
        '<strong>1. Select your images:</strong> Drag photos or use the selector. You can process several simultaneously.',
        '<strong>2. Automatic analysis:</strong> The tool detects and shows all metadata present (GPS, camera model, date, etc.).',
        '<strong>3. Instant cleaning:</strong> With one click, it removes 100% of harmful metadata.',
        '<strong>4. Secure download:</strong> Receive anonymized images ready to share on networks without risks.',
        '<strong>5. No residue:</strong> The clean image retains all its original visual quality.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy Technology', icon: 'mdi:shield-check', html: 'This tool uses the <strong>browser\'s Canvas API</strong> to create a clean copy of the image pixel by pixel, ensuring that:<br><br>- No data is sent to servers<br>- Your image never leaves your device<br>- 100% anonymous and secure processing<br>- You can use it even without an internet connection (after initial load)' },

    { type: 'title', text: 'What Specific Data Is Removed?', level: 3 },
    { type: 'table', headers: ['Metadata Type', 'Examples', 'Risk'], rows: [
        ['EXIF (Exchangeable)', 'GPS, ISO, Aperture, Shutter Speed, Camera Model', 'CRITICAL'],
        ['IPTC (Publication)', 'Copyright, Author, Keywords, Scene Location', 'HIGH'],
        ['XMP (XML)', 'Editing History, Software Used, Edits Made', 'MEDIUM'],
        ['Basic File Data', 'Creation Date, Exact Time, Device', 'HIGH']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Total Privacy - 100% browser-based processing',
            con: 'Requires a modern browser with JavaScript support'
        },
        {
            pro: 'Instant - cleaning a photo takes less than 1 second',
            con: 'Processing large photos may be slow on older devices'
        },
        {
            pro: 'Zero Quality Loss - only removes technical data, not pixels',
            con: 'Does not edit the image (crops, rotations, etc.)'
        },
        {
            pro: 'Completely Free with no Limits - process unlimited photos',
            con: 'No premium support or cloud storage'
        }
    ], proTitle: 'Key Advantages', conTitle: 'Limitations' },

    { type: 'tip', title: 'Digital Security Tip', html: '<strong>Clean your photos BEFORE posting</strong> on any social network. Even if you delete a post, metadata may have been indexed by search engines or archives. Prevention is better than cure. Make it a habit: <br><br><em>Photo → Clean EXIF → Post</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Real Risks of Not Cleaning', icon: 'mdi:alert-circle', badge: 'Critical Security', html: '<strong>Documented cases:</strong><br>- Parents posting photos of children - predators tracked GPS<br>- Traveling photographers - houses robbed while they were away<br>- Influencers - residence locations identified by obsessive fans<br><br>It\'s not paranoia: it\'s basic digital hygiene in 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. A standard that stores technical metadata in image files: GPS, camera data, exposure settings. Present in ~90% of digital photos without user intention.'
        },
        {
            term: 'GPS Coordinates',
            definition: 'Precise latitude and longitude of the exact location where the photo was taken. Combined with social media, it allows physical tracking of people.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Readable publication metadata: copyright, author, keywords, description. Standard in professional photography.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. An XML format that records editing history in software like Lightroom or Photoshop. It can reveal all edits made.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. A technique of collecting public information (social media, metadata, records) to profile people without their knowledge.'
        },
        {
            term: 'Digital Anonymization',
            definition: 'The process of removing or obfuscating identifiable information: location, device, behavior patterns. Essential for online privacy.'
        }
    ] },

    { type: 'message', title: 'Your Privacy Is Your Responsibility', ariaLabel: 'Information about privacy and data rights', html: 'We do not store, process, or share your images. <strong>You have full control.</strong> All operations occur exclusively in your browser. When you close this tab, no record of your activity remains. This is how to protect your privacy on the internet: tools that respect your data.' },

    { type: 'title', text: 'Conclusion: Share Without Traces', level: 3 },
    { type: 'paragraph', html: 'Protecting your digital identity starts with small details. Cleaning your photos before publishing them is an <strong>essential digital hygiene habit</strong> in 2026. It doesn\'t just protect your location: it protects your family, your assets, and your professional privacy. A seemingly innocent photo can reveal more about you than you ever imagined.' }
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

export const content: ExifCleanerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "Frequently Asked Questions",
    faq: "References",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

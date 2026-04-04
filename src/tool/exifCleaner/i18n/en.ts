import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-cleaner';
const title = 'EXIF Metadata Cleaner - Remove GPS and Hidden Data from Photos';
const description = 'Free online tool to clear EXIF metadata, GPS coordinates, and camera data from your images before sharing. Total privacy: works without uploading photos to the internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Drag your image here",
    dropSubtitle: "Remove GPS metadata, camera model, and hidden settings.",
    dropLocalInfo: "100% local processing. Nothing is uploaded to the cloud.",
    selectButton: "Select Image",
    processingText: "Cleaning metadata...",
    analysisCompleted: "Analysis Completed",
    downloadButton: "Download Clean Image",
    resetButton: "Clean another image",
    privacyRiskTitle: "PRIVACY RISKS FOUND:",
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
    faqTitle: "Frequently asked questions about photo privacy",
    bibliographyTitle: "EXIF technical resources and documentation",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "What is EXIF metadata?",
        answer: "EXIF (Exchangeable Image File Format) is hidden information that your camera or mobile phone saves inside each photo. It includes the exact date, device model, shooting settings (ISO, aperture) and, most critically, the GPS coordinates of where the photo was taken.",
    },
    {
        question: "Is it safe to use this online tool?",
        answer: "Yes, because processing is 100% local in your browser. Your photos are never uploaded to any server; cleaning happens directly in your device's memory, ensuring absolute privacy.",
    },
    {
        question: "What specifically does the cleaner delete?",
        answer: "It clears all EXIF tags (GPS, camera brand, serial number), IPTC (copyright, author), and XMP (edit history). Your image becomes 'clean', preserving only the visual pixels.",
    },
    {
        question: "Does the image lose quality when cleaning metadata?",
        answer: "No. We only remove the technical data 'header' from the file. The image data (pixels) remain identical, so the visual quality is not affected at all.",
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
        name: "Download safe photos",
        text: "Save the new versions of your images, now anonymized and ready to be shared on social networks safely.",
    },
];

const bibliography: ExifCleanerLocaleContent['bibliography'] = [
    {
        name: "Exchangeable image file format (EXIF) - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Exif",
    },
    {
        name: "W3C - Metadata in Images",
        url: "https://www.w3.org/community/image-metadata/",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    { type: 'title', text: 'Guide to Privacy and Metadata in Digital Photography', level: 2 },
    { type: 'paragraph', html: 'Have you ever wondered how much personal information you share when you upload a photo to social networks? EXIF metadata is like an invisible fingerprint that can reveal everything from the exact location of your home to the price of your photographic gear.' },
    
    { type: 'title', text: 'What information is hidden in your photos?', level: 3 },
    { type: 'list', items: [
        '<strong>GPS Coordinates:</strong> The exact latitude and longitude where the capture was made.',
        '<strong>Equipment Identification:</strong> Brand, model, and serial number of the camera or smartphone.',
        '<strong>Technical Settings:</strong> ISO, aperture, exposure time, and focal length.',
        '<strong>Edit History:</strong> Software used and date of the last modification.'
    ]},

    { type: 'card', title: 'Browser Security', icon: 'mdi:shield-check', html: 'This tool uses the browser\'s Canvas API to create a clean pixel-by-pixel copy of the image, ensuring that no original file data leaks into the newly generated file.' },

    { type: 'diagnostic', variant: 'warning', title: 'Risks of Sharing without Cleaning', icon: 'mdi:alert', badge: 'Privacy', html: 'Sharing photos of children or valuable assets with active GPS metadata allows third parties to track common locations using OSINT (Open Source Intelligence) techniques.' },
    
    { type: 'title', text: 'Conclusion: Share without traces', level: 3 },
    { type: 'paragraph', html: 'Protecting your digital identity starts with the small details. Cleaning your photos before publishing them is an essential digital hygiene habit in the 21st century.' }
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
    faq,
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

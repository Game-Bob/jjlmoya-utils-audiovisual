import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'depth-of-field-calculator';
const title = 'Depth of Field Calculator: Realtime DoF for Any Camera';
const description = 'Calculate depth of field, hyperfocal distance, and near/far focus limits in real time. Supports all sensor sizes with 1/3 stop aperture precision.';

const ui: DepthOfFieldUI = {
    title: 'Depth of Field Calculator',
    paramsTitle: 'Parameters',
    sensorLabel: 'Camera Sensor',
    moreLabel: 'More sensors…',
    apertureLabel: 'Aperture',
    focalLabel: 'Focal Length',
    distanceLabel: 'Subject Distance',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Results',
    totalDofLabel: 'Total Depth of Field',
    infiniteLabel: 'Infinite',
    nearLimitLabel: 'Near Limit',
    farLimitLabel: 'Far Limit',
    hyperfocalLabel: 'Hyperfocal',
    cocLabel: 'Circle of Confusion',
    cocUnit: 'mm',
    showDetailsLabel: 'Show technical details',
    hideDetailsLabel: 'Hide technical details',
    errorBelowFocal: 'Subject distance must be greater than the focal length.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'What is depth of field?',
        answer: 'Depth of field (DoF) is the range of distance in a scene that appears acceptably sharp in the final image. It is determined by aperture, focal length, subject distance, and sensor size.',
    },
    {
        question: 'What is the hyperfocal distance?',
        answer: 'The hyperfocal distance is the closest focusing distance at which objects at infinity are still acceptably sharp. Focusing at this distance maximises the depth of field for a given aperture and focal length.',
    },
    {
        question: 'Why does a larger aperture (smaller f-number) reduce DoF?',
        answer: 'A wider aperture collects light over a larger area of the lens, which increases the size of the circle of confusion for out-of-focus points. This narrows the zone of acceptable sharpness — the depth of field.',
    },
    {
        question: 'How does sensor size affect depth of field?',
        answer: 'Larger sensors use a larger circle of confusion threshold, which effectively increases the apparent DoF for the same field of view. However, when comparing equivalent fields of view, larger sensors generally produce shallower DoF because they require longer focal lengths.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Select your camera sensor',
        text: 'Choose the sensor format that matches your camera body. This sets the circle of confusion (CoC) value used in all calculations.',
    },
    {
        name: 'Set aperture and focal length',
        text: 'Drag the aperture slider to choose an f-stop in 1/3-stop increments. Drag the focal length slider — it uses a logarithmic scale so wide-angle changes are more granular.',
    },
    {
        name: 'Set the subject distance',
        text: 'Drag the subject distance slider to the distance between your camera and the main subject. Toggle between metres and feet as needed — your last choice is remembered.',
    },
    {
        name: 'Read the results',
        text: 'The Focus Bar visualises the sharp zone around your subject. The near and far limits show the exact boundaries of acceptable focus, and the hyperfocal distance tells you where to focus to maximise background sharpness.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Understanding Depth of Field in Photography and Cinema', level: 2 },
    { type: 'paragraph', html: 'Depth of field is one of the most powerful creative tools available to photographers and cinematographers. A <strong>shallow depth of field</strong> isolates subjects from distracting backgrounds, while a <strong>deep depth of field</strong> keeps an entire landscape sharp from foreground to horizon. This calculator gives you precise control over both.' },

    { type: 'title', text: 'The Three Variables That Control DoF', level: 3 },
    { type: 'table', headers: ['Variable', 'Increase →', 'Effect on DoF'], rows: [
        ['Aperture', 'f/1.4 → f/16', 'Wider aperture = shallower DoF'],
        ['Focal Length', '24mm → 200mm', 'Longer focal = shallower DoF at same distance'],
        ['Subject Distance', '1m → 10m', 'Further subject = deeper DoF'],
    ]},

    { type: 'title', text: 'The Hyperfocal Distance: Maximum Sharpness', level: 3 },
    { type: 'paragraph', html: 'When you focus at the <strong>hyperfocal distance</strong>, everything from half that distance to infinity appears acceptably sharp. Landscape photographers use this technique to ensure both a foreground rock and distant mountains are in focus simultaneously.' },
    { type: 'tip', title: 'Practical tip', html: 'For street photography, set your focus to the hyperfocal distance and shoot without looking through the viewfinder. With a 35mm lens on APS-C at f/8, the hyperfocal distance is roughly <strong>4 metres</strong> — everything from 2m to infinity will be sharp.' },

    { type: 'title', text: 'Sensor Size and the Circle of Confusion', level: 3 },
    { type: 'paragraph', html: 'The <strong>circle of confusion (CoC)</strong> is the threshold that defines "acceptable sharpness" for a given sensor format. A Full Frame sensor has a CoC of 0.030mm; a smartphone sensor uses ~0.006mm. Smaller CoC values mean stricter sharpness criteria and, consequently, shallower perceived depth of field.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0.030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0.019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0.006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF in Cinema: Focal Length vs. Sensor', level: 3 },
    { type: 'paragraph', html: 'Cinematographers shooting on Super 35 (close to APS-C) frequently use longer focal lengths to compress perspective, which also narrows DoF and creates the characteristic "cinematic look". The combination of a fast prime (f/1.4–f/2.8) and a 85mm+ focal length at portrait distances is the classic recipe.' },
    { type: 'diagnostic', variant: 'success', title: 'The Focus Distribution Rule', icon: 'mdi:lightbulb-outline', badge: 'Pro Technique', html: 'For a subject at 3 metres with a 50mm lens at f/2.8 on Full Frame: near limit ≈ 2.73m, far limit ≈ 3.33m, total DoF ≈ 60cm. The back zone is always larger than the front zone — roughly <strong>2:1 ratio</strong> for most real-world distances.' },
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

export const content: DepthOfFieldLocaleContent = {
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

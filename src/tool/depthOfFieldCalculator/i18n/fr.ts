import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'calculateur-profondeur-de-champ';
const title = 'Calculateur de Profondeur de Champ : DoF en Temps Réel';
const description = 'Calculez la profondeur de champ, la distance hyperfocale et les limites de mise au point en temps réel. Compatible avec tous les capteurs.';

const ui: DepthOfFieldUI = {
    title: 'Profondeur de Champ',
    paramsTitle: 'Paramètres',
    sensorLabel: 'Capteur de l\'Appareil',
    moreLabel: 'Plus de capteurs…',
    apertureLabel: 'Ouverture',
    focalLabel: 'Distance Focale',
    distanceLabel: 'Distance du Sujet',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Résultats',
    totalDofLabel: 'Profondeur de Champ Totale',
    infiniteLabel: 'Infini',
    nearLimitLabel: 'Limite Proche',
    farLimitLabel: 'Limite Lointaine',
    hyperfocalLabel: 'Hyperfocale',
    cocLabel: 'Cercle de Confusion',
    cocUnit: 'mm',
    showDetailsLabel: 'Afficher les détails techniques',
    hideDetailsLabel: 'Masquer les détails techniques',
    errorBelowFocal: 'La distance du sujet doit être supérieure à la distance focale.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: 'Qu\'est-ce que la profondeur de champ ?',
        answer: 'La profondeur de champ (DoF) est la plage de distance dans une scène qui apparaît net dans l\'image finale. Elle est déterminée par l\'ouverture, la distance focale, la distance du sujet et la taille du capteur.',
    },
    {
        question: 'Qu\'est-ce que la distance hyperfocale ?',
        answer: 'La distance hyperfocale est la distance de mise au point la plus proche pour laquelle les objets à l\'infini sont encore nets. Faire la mise au point à cette distance maximise la profondeur de champ pour une ouverture et une focale données.',
    },
    {
        question: 'Pourquoi une grande ouverture réduit-elle la profondeur de champ ?',
        answer: 'Une ouverture plus grande collecte la lumière sur une plus grande surface de l\'objectif, ce qui augmente la taille du cercle de confusion pour les points hors champ. Cela réduit la zone de netteté acceptable.',
    },
    {
        question: 'Comment la taille du capteur affecte-t-elle la profondeur de champ ?',
        answer: 'Les grands capteurs ont un seuil de cercle de confusion plus élevé, ce qui augmente la DoF apparente pour un même champ de vision. Cependant, à champ de vision équivalent, ils produisent souvent une DoF plus faible car ils nécessitent des focales plus longues.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Sélectionnez votre capteur',
        text: 'Choisissez le format de capteur qui correspond à votre boîtier. Cela définit la valeur du cercle de confusion (CoC) utilisée pour les calculs.',
    },
    {
        name: 'Réglez l\'ouverture et la focale',
        text: 'Faites glisser pour choisir un diaphragme par paliers de 1/3. Le curseur de focale utilise une échelle logarithmique pour plus de précision en grand-angle.',
    },
    {
        name: 'Définissez la distance du sujet',
        text: 'Indiquez la distance entre l\'appareil et votre sujet principal. Basculez entre mètres et pieds selon vos besoins.',
    },
    {
        name: 'Consultez les résultats',
        text: 'La barre de mise au point visualise la zone de netteté. Les limites proche et lointaine indiquent les bornes exactes de la zone nette.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Comprendre la Profondeur de Champ en Photographie et Cinéma', level: 2 },
    { type: 'paragraph', html: 'La profondeur de champ est l\'un des outils créatifs les plus puissants. Une <strong>faible profondeur de champ</strong> isole votre sujet, tandis qu\'une <strong>grande profondeur de champ</strong> garde tout un paysage net. Ce calculateur vous offre un contrôle précis.' },

    { type: 'title', text: 'Les Trois Variables du Contrôle DoF', level: 3 },
    { type: 'table', headers: ['Variable', 'Augmentation →', 'Effet sur la DoF'], rows: [
        ['Ouverture', 'f/1.4 → f/16', 'Ouverture plus grande = DoF plus courte'],
        ['Distance Focale', '24mm → 200mm', 'Focale plus longue = DoF plus courte à même distance'],
        ['Distance du Sujet', '1m → 10m', 'Sujet plus loin = DoF plus grande'],
    ]},

    { type: 'title', text: 'La Distance Hyperfocale : Netteté Maximale', level: 3 },
    { type: 'paragraph', html: 'En réglant la mise au point sur la <strong>distance hyperfocale</strong>, tout ce qui se trouve entre la moitié de cette distance et l\'infini sera net. Idéal pour les paysages.' },
    { type: 'tip', title: 'Conseil pratique', html: 'Pour la photo de rue, réglez votre mise au point sur l\'hyperfocale. Avec un 35mm sur APS-C à f/8, l\'hyperfocale est à environ <strong>4 mètres</strong> : tout sera net de 2m à l\'infini.' },

    { type: 'title', text: 'Taille du Capteur et Cercle de Confusion', level: 3 },
    { type: 'paragraph', html: 'Le <strong>cercle de confusion (CoC)</strong> définit la netteté acceptable. Un capteur Plein Format a un CoC de 0,030 mm, contre ~0,006 mm pour un smartphone. Un CoC plus petit signifie des critères de netteté plus stricts.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Plein Format', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'DoF au Cinéma : Focale vs Capteur', level: 3 },
    { type: 'paragraph', html: 'Le tournage en Super 35 utilise souvent des focales plus longues pour compresser la perspective, créant ainsi le "look cinéma". Un objectif lumineux à 85mm est le choix classique pour le portrait.' },
    { type: 'diagnostic', variant: 'success', title: 'La Règle de Distribution de la Netteté', icon: 'mdi:lightbulb-outline', badge: 'Technique Pro', html: 'Pour un sujet à 3m avec un 50mm à f/2.8 : la zone nette s\'étend vers l\'arrière environ <strong>deux fois plus</strong> que vers l\'avant (ratio 2:1).' },
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
    inLanguage: 'fr',
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

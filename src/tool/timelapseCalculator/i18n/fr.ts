import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'calculateur-timelapse';
const title = 'Calculateur de Timelapse & Hyperlapse : Intervalles Parfaits';
const description = 'Calculez l\'intervalle exact entre les photos, la durée totale et l\'espace de stockage pour vos timelapses. Outil essentiel pour les photographes.';

const ui: TimelapseUI = {
    title: "Calculateur Timelapse",
    paramsTitle: "Paramètres",
    eventDuration: "Durée réelle de l'événement ?",
    hours: "Heures",
    minutes: "Minutes",
    videoDuration: "Paramètres vidéo cible ?",
    seconds: "Durée (sec)",
    fps: "FPS",
    resultsTitle: "Résultats",
    intervalLabel: "Réglez votre intervallomètre sur :",
    secondsUnit: "secondes",
    totalPhotos: "Total Photos",
    speed: "Vitesse",
    shutterSpeed: "Vitesse d'obturation",
    storage: "Poids (RAW)",
    rule180Info: "La règle des 180° suggère une vitesse d'obturation égale à la moitié de l'intervalle pour un mouvement fluide.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Comment choisir le bon intervalle pour mon timelapse ?",
        answer: "Cela dépend de la vitesse du mouvement capturé. Pour les nuages rapides, utilisez 2-3 secondes. Pour le soleil ou les étoiles, 15-30 secondes. Pour la croissance des plantes ou la construction, 5-15 minutes.",
    },
    {
        question: "De combien de photos ai-je besoin pour une vidéo d'une minute ?",
        answer: "Une vidéo standard a 24 ou 30 images par seconde (ips). Pour une minute de vidéo à 24ips, vous avez besoin exactement de 1440 photos (60 secondes * 24 photos/seconde).",
    },
    {
        question: "Qu'est-ce que le 'Flicker' et comment l'éviter ?",
        answer: "C'est un scintillement gênant causé par de mini variations d'exposition. Pour l'éviter, utilisez toujours le mode manuel (M), une balance des blancs fixe et privilégiez les objectifs à bague de diaphragme manuelle.",
    },
    {
        question: "Pourquoi la vitesse d'obturation est-elle importante ?",
        answer: "Pour un mouvement fluide (règle des 180°), la vitesse d'obturation doit être environ la moitié de l'intervalle. Par exemple, si l'intervalle est de 2 secondes, essayez d'exposer à 1 seconde.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Définir la durée vidéo cible",
        text: "Indiquez combien de secondes ou minutes vous souhaitez que dure la vidéo finale (ex. 10 secondes pour Instagram).",
    },
    {
        name: "Sélectionner les FPS de sortie",
        text: "Choisissez la fluidité : 24 (cinéma), 30 (web) ou 60 (ralenti fluide).",
    },
    {
        name: "Ajuster l'intervalle de capture",
        text: "Réglez l'intervalle de déclenchement selon la vitesse de la scène à capturer.",
    },
    {
        name: "Vérifier l'espace de stockage",
        text: "Le calculateur vous dira combien de Gigaoctets la session occupera. Vérifiez votre carte SD.",
    },
];

const bibliography: TimelapseLocaleContent['bibliography'] = [
    {
        name: "Timescapes Forum - Digital Timelapse Acquisition & Processing",
        url: "https://timescapes.org/phpBB3/viewforum.php?f=4",
    },
    {
        name: "Magic Lantern - Auto ETTR & Bulb Ramping Algorithms",
        url: "https://wiki.magiclantern.fm/ettr",
    },
    {
        name: "LRTimelapse - Visual Deflicker & Holy Grail Workflow",
        url: "https://lrtimelapse.com/tutorial/advanced/",
    },
    {
        name: "PhotoPills - Advanced Timelapse Calculator & NPF Rule",
        url: "https://www.photopills.com/calculators/timelapse",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Le Guide Ultime des Intervalles Timelapse et Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'La différence entre une vidéo accélérée amateur et un <strong>timelapse cinématographique</strong> réside mathématiquement dans un seul facteur : <strong>l\'intervalle</strong>. Ce calculateur élimine les approximations, vous permettant de planifier avec précision chaque déclenchement.' },
    
    { type: 'title', text: 'Tableau des Intervalles Recommandés', level: 3 },
    { type: 'paragraph', html: 'Utilisez ce tableau de référence pour configurer votre intervallomètre. Le but est de capturer assez de mouvement pour qu\'il soit fluide mais perceptible.' },
    { type: 'table', headers: ['Sujet / Scène', 'Intervalle Suggéré', 'Durée Min Événement'], rows: [
        ['Nuages rapides / Orages', '1 - 2 secondes', '20 - 30 min'],
        ['Trafic Urbain / Foule', '0.5 - 2 secondes', '15 - 20 min'],
        ['Coucher de soleil (Holy Grail)', '5 - 10 secondes', '1.5 - 2.5 heures'],
        ['Nuages Lents / Ombres', '10 - 15 secondes', '2 - 3 heures'],
        ['Étoiles / Voie Lactée (Astro)', '15 - 30 secondes*', '3 - 5 heures'],
        ['Construction / Plantes', '5 - 15 minutes', 'Jours / Semaines']
    ]},
    { type: 'tip', title: 'Note pour l\'Astro', html: 'L\'intervalle est dicté par le temps d\'exposition nécessaire (règle 500) + un buffer pour l\'écriture sur carte.' },

    { type: 'title', text: 'La Règle des 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Une erreur commune est d\'obtenir une vidéo saccadée. Pour un look cinéma fluide, vous avez besoin de <strong>motion blur</strong>.' },
    { type: 'card', title: 'La Règle', icon: 'mdi:information', html: 'Votre vitesse d\'obturation doit être la moitié de votre intervalle. <br /><br /> <em>Exemple :</em> Si vous déclenchez toutes les <strong>4 secondes</strong>, votre exposition doit être de <strong>2 secondes</strong>.' },

    { type: 'diagnostic', variant: 'success', title: 'Technique Avancée : Le "Saint Graal"', icon: 'mdi:crown', badge: 'Pro Teknik', html: 'La transition fluide du jour à la nuit est appelée le "Saint Graal". C\'est le défi technique le plus difficile car la lumière change radicalement.' },

    { type: 'title', text: 'Conclusion : Le Zen de la Mécanique Simple', level: 3 },
    { type: 'paragraph', html: 'Maîtriser votre timelapse commence par comprendre les mathématiques de votre intervallomètre. Ne laissez pas un intervalle mal choisi gâcher votre séance.' }
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

export const content: TimelapseLocaleContent = {
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

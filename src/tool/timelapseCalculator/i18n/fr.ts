import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'calculatrice-timelapse-hyperlapse-intervalles-parfaits';
const title = 'Calculatrice de Timelapse et Hyperlapse : Intervalles Parfaits';
const description = 'Calculez l\'intervalle exact entre les photos, la durée totale et le stockage pour vos timelapses. Outil essentiel pour les photographes.';

const ui: TimelapseUI = {
    title: "Calculatrice Timelapse",
    paramsTitle: "Paramètres",
    eventDuration: "Quelle est la durée de l'événement réel ?",
    hours: "Heures",
    minutes: "Minutes",
    videoDuration: "Quelle vidéo finale voulez-vous ?",
    seconds: "Durée (sec)",
    fps: "FPS",
    resultsTitle: "Résultats",
    intervalLabel: "Réglez votre intervallomètre sur :",
    secondsUnit: "secondes",
    totalPhotos: "Total Photos",
    speed: "Vitesse",
    shutterSpeed: "Durée d'exposition",
    storage: "Taille (RAW)",
    rule180Info: "La règle des 180° suggère une vitesse d'obturation de la moitié de l'intervalle pour un flou de mouvement fluide.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "Comment choisir l'intervalle correct pour mon timelapse ?",
        answer: "Cela dépend de la vitesse du mouvement que vous capturez. Pour des nuages rapides, utilisez 2-3 secondes. Pour le mouvement du soleil ou des étoiles, 15-30 secondes. Pour la croissance des plantes ou la construction de bâtiments, 5-15 minutes.",
    },
    {
        question: "Combien de photos ai-je besoin pour une vidéo d'une minute ?",
        answer: "Une vidéo standard a 24 ou 30 images par seconde (fps). Pour une minute de vidéo à 24fps, vous avez besoin exactement de 1440 photographies (60 secondes * 24 photos/seconde).",
    },
    {
        question: "Qu'est-ce que le 'Flicker' et comment l'éviter ?",
        answer: "C'est un clignotement gênant causé par de petites variations d'exposition entre les photos. Pour l'éviter, utilisez toujours le mode manuel (M), une balance des blancs fixe et privilégiez l'utilisation d'objectifs avec une bague de diaphragme manuelle.",
    },
    {
        question: "Pourquoi le temps d'obturation est-il important ?",
        answer: "Pour que le mouvement paraisse fluide (règle des 180°), le temps d'obturation devrait être environ la moitié de l'intervalle. Par exemple, si l'intervalle est de 2 secondes, essayez de photographier à 1 seconde.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Définir la durée de la vidéo finale",
        text: "Indiquez combien de secondes ou de minutes vous souhaitez que la vidéo résultante dure (ex : 10 secondes pour Instagram).",
    },
    {
        name: "Sélectionner les FPS de sortie",
        text: "Choisissez la fluidité de la vidéo : 24 (cinéma), 30 (web) ou 60 (ralenti fluide).",
    },
    {
        name: "Ajuster l'intervalle de capture",
        text: "Configurez chaque combien de secondes votre appareil déclenchera selon la vitesse de la scène.",
    },
    {
        name: "Vérifier l'espace de stockage",
        text: "La calculatrice vous dira combien de Gigaoctets la session occupera. Assurez vous que votre carte SD a assez d'espace.",
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
    { type: 'title', text: 'Guide Ultime des Intervalles Timelapse et Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'La différence entre une vidéo accélérée amateur et un <strong>timelapse cinématographique</strong> réside mathématiquement dans un seul facteur : <strong>l\'intervalle</strong>. Cette calculatrice élimine les devinettes, vous permettant de planifier avec précision la capture de levers de soleil, du trafic urbain ou de la Voie lactée.' },
    
    { type: 'title', text: 'Tableau des Intervalles Recommandés (Aide mémoire)', level: 3 },
    { type: 'paragraph', html: 'Utilisez ce tableau de référence rapide pour régler votre intervallomètre en fonction du sujet.' },
    { type: 'table', headers: ['Sujet / Scène', 'Intervalle Suggeré', 'Durée de l\'Événement (Minimum)'], rows: [
        ['Nuages rapides / Orages', '1 - 2 secondes', '20 - 30 min'],
        ['Trafic urbain / Personnes (Flou)', '0,5 - 2 secondes', '15 - 20 min'],
        ['Coucher / Lever de soleil (Holy Grail)', '5 - 10 secondes', '1,5 - 2,5 heures'],
        ['Nuages lents / Ombres', '10 - 15 secondes', '2 - 3 heures'],
        ['Étoiles / Voie lactée (Astro)', '15 - 30 secondes*', '3 - 5 heures'],
        ['Construction / Croissance rapide', '5 - 15 minutes', 'Jours / Semaines']
    ]},
    { type: 'tip', title: 'Note pour l\'Astro', html: 'L\'intervalle est généralement dicté par le temps d\'exposition nécessaire pour capter la lumière + 1 ou 2 secondes de tampon.' },

    { type: 'title', text: 'La Règle des 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Une erreur courante est d\'obtenir une vidéo "saccadée". Pour obtenir ce look cinématographique fluide, vous avez besoin de <strong>flou de mouvement</strong>.' },
    { type: 'card', title: 'La Règle', icon: 'mdi:information', html: 'Votre vitesse d\'obturation doit être la moitié de votre intervalle. <br /><br /> <em>Exemple :</em> Si vous photographiez toutes les <strong>4 secondes</strong>, votre exposition devrait être de <strong>2 secondes</strong>.' },

    { type: 'title', text: 'Flicker et Ouverture Manuelle', level: 3 },
    { type: 'paragraph', html: 'Le "Flicker" est le clignotement gênant causé par des micro-variations de l\'ouverture du diaphragme entre les prises.' },
    { type: 'list', items: [
        '<strong>Lens Twist :</strong> Déverrouillez légèrement l\'objectif sur les reflex pour rompre la connexion électronique et fixer l\'ouverture mécaniquement.',
        '<strong>Tout Manuel :</strong> ISO, Balance des Blancs et Mise au point doivent être fixes. N\'utilisez jamais de modes automatiques.',
        '<strong>Photographiez en RAW :</strong> Essentiel pour corriger l\'exposition en post-production sans détruire l\'image.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Technique Avancée : Le "Saint Graal"', icon: 'mdi:crown', badge: 'Technique Pro', html: 'On appelle "Saint Graal" la transition fluide du jour à la nuit (ou vice-versa). C\'est le défi technique le plus difficile car la lumière change radicalement.' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Exposition Graduelle', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Stratégie', value: 'Intervalle Nocturne', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Conclusion : Le Zen de la Mécanique Simple', level: 3 },
    { type: 'paragraph', html: 'Maîtriser votre timelapse commence par comprendre les mathématiques de votre intervallomètre. Ne laissez pas un intervalle mal choisi gâcher votre session.' }
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
    faqTitle: 'Foire Aux Questions sur la Production de Timelapses',
    bibliography,
    bibliographyTitle: 'Théorie et Ressources sur le Timelapse',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

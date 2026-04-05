import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'calculatrice-distance-tv-ecran-optimal-thx-4k';
const title = 'Calculatrice de Distance TV - Écran Optimal THX et 4K';
const description = 'Calculez la distance idéale pour regarder votre téléviseur en fonction de sa taille et de sa résolution. Optimisez votre Home Cinéma avec les standards THX et SMPTE.';

const ui: TvDistanceUI = {
    specTitle: "Spécifications",
    diagonalLabel: "Taille diagonale",
    resolutionLabel: "Résolution",
    thxRecommendation: "Recommandation THX",
    thxDescription: "THX recommande une distance couvrant un angle de vision de 40 degrés pour une expérience cinématographique immersive.",
    simulationBadge: "Simulation en temps réel",
    tvWidthLabel: "cm de large",
    userLocationLabel: "Votre emplacement",
    minLimitLabel: "Limite minimale",
    optimalLimitLabel: "Distance optimale",
    maxLimitLabel: "Limite maximale",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "Pourquoi la résolution est-elle importante pour le calcul de la distance ?",
        answer: "À des résolutions plus élevées (comme 4K ou 8K), les pixels sont plus petits. Cela vous permet de vous asseoir plus près sans percevoir la grille de pixels.",
    },
    {
        question: "Qu'est-ce que l'angle de vision de 40 degrés ?",
        answer: "C'est la norme recommandée par THX pour que l'écran occupe une grande partie de votre vision périphérique, comme dans un cinéma professionnel.",
    },
    {
        question: "Puis-je m'asseoir plus loin que recommandé ?",
        answer: "Oui, mais vous perdrez le bénéfice des hautes résolutions. Si vous êtes trop loin d'un téléviseur 4K, votre œil ne pourra pas distinguer les détails supplémentaires.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Indiquez les pouces",
        text: "Déplacez le curseur pour sélectionner la taille de votre téléviseur actuel ou de celui que vous prévoyez d'acheter.",
    },
    {
        name: "Sélectionnez la résolution",
        text: "Choisissez entre 1080p, 4K ou 8K pour ajuster les limites d'acuité visuelle.",
    },
    {
        name: "Visualisez la simulation",
        text: "Observez sur le schéma comment la relation de taille entre vous et l'écran change.",
    },
    {
        name: "Ajustez votre canapé",
        text: "Placez votre siège dans la plage de 'Distance optimale' pour maximiser l'immersion cinématographique.",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
    {
        name: "SMPTE - Documentation des normes",
        url: "https://www.smpte.org/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Distance TV Optimale par Résolution et Taille',
        items: [
            'Normes THX (40°) pour une expérience cinématographique immersive',
            'Calculs pour 1080p, 4K et 8K avec une précision maximale',
            'Simulation visuelle en temps réel de votre configuration',
            'Évitez la fatigue oculaire et maximisez l\'immersion'
        ]
    },
    { type: 'title', text: 'Science de l\'Immersion : Distance TV Optimale', level: 2 },
    { type: 'paragraph', html: 'Il ne s\'agit pas seulement de confort, mais de physiologie visuelle humaine. L\'œil a une limite d\'acuité de résolution ; si vous êtes trop loin d\'un écran 4K, vous gaspillez des pixels que votre vision ne peut exploiter.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Angle THX Idéal', icon: 'mdi:eye' },
        { value: '100%', label: 'Pixels Exploités', icon: 'mdi:video-high-definition' },
        { value: 'Zéro', label: 'Fatigue Visuelle', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Deux Normes Professionnelles : THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Il existe deux autorités principales dans l\'industrie audiovisuelle qui définissent comment optimiser votre expérience :' },
    { type: 'comparative', items: [
        {
            title: 'Norme THX',
            description: 'Angle de vision de 40° - Plus immersif',
            icon: 'mdi:filmstrip',
            points: [
                'L\'écran occupe une plus grande part de votre vision périphérique',
                'Expérience cinématographique immersive',
                'Idéal pour les films d\'action et le sport',
                'Nécessite plus d\'espace dans la pièce'
            ],
            highlight: true
        },
        {
            title: 'Norme SMPTE',
            description: 'Angle de vision de 30° - Plus détendu',
            icon: 'mdi:television',
            points: [
                'Distance d\'assise plus confortable',
                'Recommandation professionnelle conservatrice',
                'Idéal pour des contenus variés (infos, séries)',
                'Mieux pour les petites pièces'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Comment la Résolution Change l\'Équation', level: 3 },
    { type: 'table', headers: ['Résolution', 'Taille TV 55"', 'Distance Min. (sans pixels visibles)', 'Distance Optimale THX'], rows: [
        ['1080p (Full HD)', '55 pouces', '2,0 m', '2,3 m'],
        ['4K (Ultra HD)', '55 pouces', '1,2 m', '1,5 m'],
        ['8K', '55 pouces', '0,8 m', '1,0 m']
    ] },

    { type: 'paragraph', html: 'Comme vous le voyez, une résolution plus élevée permet de s\'asseoir plus près sans percevoir la structure des pixels.' },

    { type: 'card', title: 'La Limite de l\'Acuité Visuelle Humaine', html: 'L\'œil humain a une limite de résolution. Au-delà d\'une certaine distance, vous ne pouvez plus distinguer de détails, même si l\'écran est en 8K. Nos calculs vous positionnent exactement dans la "zone optimale".' },

    { type: 'diagnostic', variant: 'info', title: 'Fatigue Oculaire et Distance', icon: 'mdi:information', badge: 'Santé Visuelle', html: 'Être trop près cause de la fatigue car vos yeux doivent constamment s\'adapter à des angles extrêmes. Notre calculatrice vous place au point idéal.' },

    { type: 'proscons', items: [
        {
            pro: 'Le THX 40° crée une véritable immersion - comme dans une salle professionnelle',
            con: 'Nécessite plus d\'espace dans la pièce'
        },
        {
            pro: 'Le 4K permet de s\'asseoir plus près - utile dans les petits espaces',
            con: 'Vous devez être à distance minimale pour profiter des pixels'
        },
        {
            pro: 'Évitez la fatigue oculaire en vous positionnant correctement dès le départ',
            con: 'La plupart des salons ne suivent pas ces normes'
        },
        {
            pro: 'Vous pouvez valider si votre TV actuelle est bien placée',
            con: 'Si c\'est faux, il faut déplacer les meubles'
        }
    ], proTitle: 'Avantages', conTitle: 'Limitations' },

    { type: 'glossary', items: [
        {
            term: 'Angle de Vision',
            definition: 'Angle visuel que couvre l\'écran depuis votre position. 40° = très immersif.'
        },
        {
            term: 'THX',
            definition: 'Certification qualité créée par Lucasfilm. 40° est sa recommandation principale.'
        },
        {
            term: 'SMPTE',
            definition: 'Organisation de normes techniques. Recommande 30° comme distance conservatrice.'
        },
        {
            term: 'Acuité Visuelle Humaine',
            definition: 'Capacité de l\'œil à distinguer les détails fins.'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Résolution de ~3840x2160 pixels. Permet de se rapprocher sans voir les pixels.'
        }
    ] },

    { type: 'message', title: 'Optimisation Professionnelle', ariaLabel: 'Informations sur l\'installation TV', html: 'Les cinémas professionnels dépensent des millions pour l\'angle et la distance. Notre outil apporte ces principes chez vous pour un confort maximal.' },

    { type: 'title', text: 'Installez votre Home Cinéma en Professionnel', level: 3 },
    { type: 'paragraph', html: 'La distance est TOUT AUSSI importante que la taille de l\'écran. Suivez ces normes pour transformer votre salon en salle de cinéma.' }
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

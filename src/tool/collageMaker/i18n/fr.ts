import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'createur-collage-photos-gratuit-compositions-professionnelles';
const title = 'Créateur de Collages en Ligne: Concevez des compositions professionnelles';
const description = 'Créez des collages de photos gratuitement en quelques secondes. Choisissez parmi plusieurs mises en page, ajustez les bordures et téléchargez en haute qualité sans filigrane.';

const ui: CollageMakerUI = {
    dropTitle: "Faites glisser les images ici",
    dropSub: "ou {link} - min. 2, max. 9",
    dropLink: "sélectionnez des fichiers",
    imgsLoaded: "Images chargées",
    layoutLabel: "Mise en page",
    settingsLabel: "Paramètres",
    borderLabel: "Bordure",
    borderColorLabel: "Couleur bordure",
    bgColorLabel: "Fond",
    downloadBtn: "Télécharger",
    previewTitle: "Aperçu",
    needsImgs: "Vous avez besoin de {n} images",
    errorMin: "Vous avez besoin d'au moins 2 images",
    errorMax: "Maximum 9 images autorisées",
    errorLoad: "Erreur lors du chargement des images",
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "Comment puis-je changer l'ordre des photos ?",
        answer: "Les photos sont placées dans le collage en suivant l'ordre dans lequel elles apparaissent dans la liste des images chargées. Vous pouvez en supprimer une et la télécharger à nouveau pour ajuster sa position.",
    },
    {
        question: "Quel est le format de sortie du collage ?",
        answer: "Le collage est téléchargé au format WebP haute résolution, idéal pour le partage sur les réseaux sociaux sans perte de netteté.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Importez vos photos",
        text: "Sélectionnez entre 2 et 9 images depuis votre explorateur de fichiers.",
    },
    {
        name: "Choisissez une mise en page",
        text: "Sélectionnez la grille qui convient le mieux au nombre de photos que vous avez chargées.",
    },
    {
        name: "Personnalisez le style",
        text: "Ajustez l'épaisseur et la couleur de la bordure pour donner une finition professionnelle.",
    },
    {
        name: "Téléchargez et partagez",
        text: "Appuyez sur le bouton de création et téléchargez instantanément votre composition finale.",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Créateur de Collages Professionnel en Ligne',
        items: [
            'Plusieurs mises en page et grilles prédéfinies',
            'Personnalisation des bordures et des couleurs de fond',
            'Haute résolution 1200px prête pour les réseaux sociaux',
            'Traitement instantané sans limites d\'utilisation'
        ]
    },
    { type: 'title', text: 'Conception de Collages : Des Compositions qui Racontent des Histoires', level: 2 },
    { type: 'paragraph', html: 'Un collage est plus qu\'un mélange de photos ; c\'est un récit visuel qui communique une émotion et un contexte. Notre outil permet de créer des compositions géométriques professionnelles pour Instagram, Facebook, Pinterest ou des projets personnels sans avoir besoin de Photoshop ou de logiciels coûteux.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Images par Collage', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'Résolution HD', icon: 'mdi:video-high-definition' },
        { value: 'Instantané', label: 'Génération', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Composition Visuelle : Principes de Design', level: 3 },
    { type: 'paragraph', html: 'La composition est l\'art d\'organiser les éléments visuels de manière à guider l\'œil du spectateur et à communiquer une intention. Un bon collage équilibre :' },
    { type: 'list', items: [
        '<strong>Équilibre :</strong> Distribution visuelle du poids (images claires vs sombres, grandes vs petites).',
        '<strong>Flux Visuel :</strong> L\'œil doit parcourir la composition naturellement, sans points morts.',
        '<strong>Contraste :</strong> Variations de couleur, de taille et de forme qui captent l\'attention.',
        '<strong>Unité :</strong> Cohérence thématique - les images doivent "parler ensemble" de la même histoire.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Mises en Page Intelligentes et Adaptatives', html: 'Notre système calcule automatiquement la distribution optimale de l\'espace en fonction du nombre de photos. 2 images = grille symétrique ; 5 images = distribution asymétrique équilibrée. Chaque grille est conçue pour maximiser l\'impact visuel.' },

    { type: 'comparative', items: [
        {
            title: 'Pour les Réseaux Sociaux',
            description: 'Instagram, TikTok, Facebook - formats carrés',
            icon: 'mdi:share-all',
            points: [
                '1200px est parfait pour le flux Instagram',
                'Le format carré évite le recadrage lors de la publication',
                'Bordures personnalisables pour le branding'
            ],
            highlight: true
        },
        {
            title: 'Pour les Portfolios',
            description: 'Vitrines visuelles pour photographes et designers',
            icon: 'mdi:briefcase-outline',
            points: [
                'Montrez plusieurs angles d\'un projet',
                'Récit visuel cohérent',
                'Impression professionnelle de livre numérique'
            ]
        },
        {
            title: 'Pour les Cadeaux Personnels',
            description: 'Impressions, cadres et albums numériques',
            icon: 'mdi:gift-outline',
            points: [
                'Souvenirs d\'événements (mariages, voyages)',
                'Haute résolution prête à imprimer',
                'Conception instantanée sans effort manuel'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Personnalisation : Bordures et Couleurs', level: 3 },
    { type: 'table', headers: ['Élément', 'Effet Visuel', 'Recommandation'], rows: [
        ['Bordure Blanche', 'Propre, minimaliste, moderne', 'Réseaux sociaux, portfolios numériques'],
        ['Bordure Noire', 'Dramatique, professionnel, artistique', 'Photographie d\'art, mode, luxe'],
        ['Bordure Neutre (gris)', 'Polyvalent, académique, professionnel', 'Affaires, éducation, neutralité'],
        ['Sans Bordure', 'Fusion, continuité, immersif', 'Fond uniforme, photos fluides']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Mises en page prédéfinies professionnelles - aucune connaissance en composition requise',
            con: 'Options limitées aux grilles préétablies'
        },
        {
            pro: 'Résolution 1200px prête pour les réseaux sociaux sans remise à l\'échelle',
            con: 'Pas autant personnalisable que Photoshop'
        },
        {
            pro: 'Traitement 100 % local - confidentialité, vitesse, sans limites',
            con: 'Nécessite un navigateur moderne'
        },
        {
            pro: 'Totalement gratuit, sans filigrane, sans publicité',
            con: 'Pas d\'options d\'édition individuelles (recadrage, rotation)'
        }
    ], proTitle: 'Avantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'success', title: 'Prêt pour les Réseaux Sociaux', icon: 'mdi:check-circle-outline', badge: 'Optimisé', html: '1200x1200px est la résolution idéale pour Instagram. Il prend en charge n\'importe quel rapport d\'aspect, mais la sortie carrée maximise l\'impact du flux, élimine le recadrage automatique et se présente tout aussi bien sur ordinateur, tablette et mobile.' },

    { type: 'glossary', items: [
        {
            term: 'Composition Visuelle',
            definition: 'Art d\'organiser des éléments (couleur, forme, espace) pour guider l\'œil du spectateur et communiquer une intention émotionnelle.'
        },
        {
            term: 'Règle des Tiers',
            definition: 'Principe de composition : divise l\'image en 9 zones égales (3x3). Positionnez les sujets sur les lignes d\'intersection pour un impact maximal.'
        },
        {
            term: 'Grille Symétrique',
            definition: 'Divisions égales de l\'espace. Rassurant, ordonné. Idéal pour les paires de photos.'
        },
        {
            term: 'Grille Asymétrique',
            definition: 'Divisions inégales. Dynamique, intéressant, visuel. Idéal pour plus de 5 photos.'
        },
        {
            term: 'Équilibre Visuel',
            definition: 'Équilibre perceptuel du poids visuel. Image claire + sombre = équilibre ; grande + petite = équilibre.'
        }
    ] },

    { type: 'message', title: 'Récit Visuel Instantané', ariaLabel: 'Informations sur la composition et les collages', html: 'Chaque collage raconte une histoire. Notre concepteur automatique garantit que vos histoires visuelles sont équilibrées, professionnelles et prêtes pour le monde. Sans attendre qu\'un graphiste fasse le travail.' },

    { type: 'title', text: 'Créez, Partagez, Inspirez', level: 3 },
    { type: 'paragraph', html: 'Un collage bien fait est la différence entre une publication oubliable et une autre dont vos abonnés se souviennent et qu\'ils partagent. Utilisez la composition intelligente pour que vos histoires visuelles marquent les esprits.' }
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

export const content: CollageMakerLocaleContent = {
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

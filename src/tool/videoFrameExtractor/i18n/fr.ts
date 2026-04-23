import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'extracteur-frames-video-en-ligne-capturer-images-hd';
const title = 'Extracteur de Frames de Vidéo: Capturez des images haute résolution';
const description = 'Extrayez des images individuelles de vos vidéos avec une précision à l\'image près. Capturez des moments parfaits en HD localement et gratuitement.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Importez un fichier vidéo",
    uploadFormats: "MP4, WebM, MOV ou MKV (Max. 500 Mo)",
    privacyNote: "La vidéo n'est pas téléchargée sur Internet, elle est traitée dans votre navigateur.",
    playLabel: "Lecture",
    pauseLabel: "Pause",
    captureBtn: "Capturer l'image",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Extraction automatique",
    batchEvery: "Chaque",
    batchStart: "Lancer la séquence",
    batchProcessing: "Extraction en cours...",
    galleryTitle: "Images capturées",
    galleryEmpty: "Les captures apparaîtront ici au fur et à mesure.",
    downloadAll: "Tout télécharger",
    downloadHD: "Télécharger en HD",
    resetBtn: "Importer une autre vidéo"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "Puis-je extraire des images de vidéos longues ?",
        answer: "Oui, tant que votre navigateur dispose d'assez de RAM. Nous recommandons des fichiers jusqu'à 500 Mo pour des performances optimales.",
    },
    {
        question: "Dans quelle résolution les captures sont-elles enregistrées ?",
        answer: "La capture se fait à la résolution native de la vidéo originale. Si votre vidéo est en 4K, vous obtiendrez une image 4K de haute qualité.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Importez votre vidéo",
        text: "Sélectionnez le fichier vidéo depuis votre appareil. Il n'est pas envoyé sur nos serveurs.",
    },
    {
        name: "Naviguez jusqu'au moment exact",
        text: "Utilisez la barre de navigation ou les boutons ±1 image pour une précision chirurgicale.",
    },
    {
        name: "Capturez l'image",
        text: "Appuyez sur le bouton de capture pour enregistrer l'instant dans la galerie ci-dessous.",
    },
    {
        name: "Téléchargez en haute qualité",
        text: "Téléchargez vos captures individuelles ou toute la session au format WebP optimisé.",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Extraction Professionnelle d\'Images de Vidéo',
        items: [
            'Précision à l\'image près (±1 image) pour une capture parfaite',
            'Supporte MP4, WebM, MOV, MKV jusqu\'à 500 Mo',
            'Résolution native de la vidéo préservée (SD, HD, 4K)',
            'Extraction par lots automatique à intervalles personnalisés'
        ]
    },
    { type: 'title', text: 'Extraction d\'Images : Figer le Temps en Vidéo', level: 2 },
    { type: 'paragraph', html: 'Une image vaut parfois mille mots. Mais trouver l\'image parfaite peut être frustrant. Notre outil utilise la puissance locale de votre navigateur pour extraire des images de précision sans logiciel professionnel.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Précision à l\'image', icon: 'mdi:target' },
        { value: '100 %', label: 'Résolution Native', icon: 'mdi:video-high-definition' },
        { value: '500 Mo', label: 'Fichiers Supportés', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Cas d\'Utilisation Professionnels', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Cinéma et Photographie',
            description: 'Capturer des images pour référence visuelle ou composition',
            icon: 'mdi:film',
            points: [
                'Extraire des stills pour le marketing de films',
                'Références de composition de scènes',
                'Analyse image par image'
            ]
        },
        {
            title: 'Contenu Numérique',
            description: 'Créer des miniatures et des couvertures pour les réseaux sociaux',
            icon: 'mdi:youtube',
            points: [
                'Miniatures YouTube haute résolution',
                'Couvertures pour réseaux sociaux',
                'Vignettes pour présentations'
            ],
            highlight: true
        },
        {
            title: 'Documentation Technique',
            description: 'Extraire des images de tutoriels et démonstrations',
            icon: 'mdi:book-open',
            points: [
                'Captures d\'écran de vidéos tutoriels',
                'Documentation visuelle étape par étape',
                'Analyse de mouvement en temps réel'
            ]
        },
        {
            title: 'Sports et Action',
            description: 'Capturer l\'instant précis de l\'action maximale',
            icon: 'mdi:dumbbell',
            points: [
                'Analyse technique sportive image par image',
                'Capture de moments héroïques',
                'Étude du mouvement'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Formats Vidéo Supportés', level: 3 },
    { type: 'table', headers: ['Format', 'Extension', 'Compatibilité', 'Notes'], rows: [
        ['MPEG-4', 'MP4', 'Universel (100 %)', 'Meilleure compression, très utilisé'],
        ['WebM', 'WebM', 'Navigateurs modernes', 'Compression supérieure, taille réduite'],
        ['QuickTime', 'MOV', 'Safari, certains lecteurs', 'Standard Apple'],
        ['Matroska', 'MKV', 'Navigateurs modernes', 'Conteneur flexible, qualité variable']
    ] },

    { type: 'card', title: 'Précision à l\'Image Près', html: 'Se déplacer d\'une seule image en avant ou en arrière (±1 image) est vital pour capturer l\'instant parfait : un saut, un sourire, un geste. Notre outil vous donne un contrôle millimétrique.' },

    { type: 'proscons', items: [
        {
            pro: 'Confidentialité totale : la vidéo est traitée à 100 % localement',
            con: 'Limité par la mémoire RAM disponible (~500 Mo recommandés)'
        },
        {
            pro: 'Résolution native préservée : SD, HD, 4K sans re-compression',
            con: 'Nécessite un navigateur supportant HTML5 Video'
        },
        {
            pro: 'Extraction par lots automatique à intervalles personnalisés',
            con: 'Pour un montage avancé (coupes, trim), un éditeur est requis'
        },
        {
            pro: 'Exportation en WebP optimisé ou PNG sans compression',
            con: 'Une image à la fois (pas d\'exportation GIF animée)'
        }
    ], proTitle: 'Avantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'info', title: 'Résolution et Fréquence d\'Images', icon: 'mdi:information', badge: 'Technique', html: 'La résolution finale dépend de la vidéo d\'origine. Si la vidéo est en 4K (3840x2160), vous obtiendrez des images 4K. Nous préservons l\'information native sans upscaling.' },

    { type: 'glossary', items: [
        {
            term: 'Frame (Image)',
            definition: 'Une image individuelle dans une séquence vidéo. Une vidéo à 24 fps contient 24 images par seconde.'
        },
        {
            term: 'FPS (Images par seconde)',
            definition: 'Vitesse de défilement : 24 fps (cinéma), 30 fps (vidéo web), 60 fps (fluide).'
        },
        {
            term: 'Codec Vidéo',
            definition: 'Algorithme de compression : H.264 (MP4), VP9 (WebM). Détermine la taille et la qualité.'
        },
        {
            term: 'Bitrate',
            definition: 'Quantité de données par seconde (Mbps). Un bitrate élevé = meilleure qualité.'
        },
        {
            term: 'Résolution Vidéo',
            definition: 'Dimensions en pixels : 720p (1280x720), 1080p (1920x1080), 4K (3840x2160).'
        }
    ] },

    { type: 'message', title: 'Extraction Professionnelle d\'Images', ariaLabel: 'Informations techniques', html: 'L\'image parfaite est à portée de clic : importez, naviguez, capturez. Confidentialité totale, résolution native, téléchargement instantané.' },

    { type: 'title', text: 'Figer des Moments Vidéo', level: 3 },
    { type: 'paragraph', html: 'Chaque vidéo contient des centaines d\'images. Beaucoup sont des pépites. Utilisez cet outil pour extraire ces moments parfaits.' }
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

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Foire Aux Questions sur l\'Extraction de Fotogrammes Vidéo',
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

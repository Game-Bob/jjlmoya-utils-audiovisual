import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'fusionner-videos-en-ligne';
const title = 'Fusionner des vidéos en ligne : Joignez plusieurs vidéos gratuitement et rapidement';
const description = 'Fusionnez et concaténez plusieurs vidéos en une seule, gratuitement, en ligne et localement. Sans filigrane, sans téléchargement, 100% privé dans votre navigateur.';

const ui: VideoMergerUI = {
    uploadTitle: "Téléchargez vos fichiers vidéo",
    uploadFormats: "Glissez-déposez plusieurs vidéos ou cliquez pour les sélectionner",
    privacyNote: "Vos vidéos sont traitées 100% localement. Rien n'est téléchargé sur Internet.",
    addMoreBtn: "Ajouter d'autres vidéos",
    mergeBtn: "Fusionner les vidéos maintenant",
    mergingStatus: "Fusion des vidéos en cours...",
    downloadBtn: "Télécharger la vidéo fusionnée",
    resetBtn: "Recommencer",
    emptyList: "Glissez ou sélectionnez des vidéos pour commencer à les fusionner.",
    listTitle: "Ordre des vidéos à fusionner",
    optionsTitle: "Paramètres de sortie",
    optionResolution: "Résolution",
    optionFps: "Images par seconde (FPS)",
    optionsQualityNote: "La résolution finale sera ajustée en conservant le format d'origine avec des bandes noires (letterbox) si les vidéos ont des dimensions différentes.",
    faqTitle: "Foire aux questions sur la fusion de vidéos",
    bibliographyTitle: "Bibliographie & Références",
    resolutionWarning: "Attention : Certaines vidéos ont des résolutions différentes et seront automatiquement adaptées."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "Est-il sûr de télécharger mes vidéos sur cet outil ?",
        answer: "Oui, c'est totalement sûr. L'outil fonctionne 100% localement dans votre navigateur. Vos vidéos ne sont jamais transmises sur Internet ni enregistrées sur un serveur.",
    },
    {
        question: "Que se passe-t-il si mes vidéos ont des dimensions différentes ?",
        answer: "Notre outil met automatiquement à l'échelle les vidéos pour les adapter à la résolution de sortie choisie. Pour les proportions qui ne correspondent pas exactement, des marges noires (letterboxing) seront ajoutées pour préserver le format d'origine.",
    },
    {
        question: "L'audio des vidéos est-il conservé lors de la fusion ?",
        answer: "Oui. Les pistes audio de chaque vidéo sont capturées et mixées de manière séquentielle, en parfaite synchronisation avec chaque segment d'image.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Sélectionnez ou glissez vos vidéos",
        text: "Chargez tous les fichiers vidéo que vous souhaitez fusionner directement depuis votre ordinateur ou votre mobile.",
    },
    {
        name: "Organisez l'ordre",
        text: "Ordonnez les vidéos téléchargées à l'aide des boutons haut et bas de la liste pour décider de la séquence de lecture.",
    },
    {
        name: "Ajustez les options",
        text: "Choisissez la résolution de sortie et les images par seconde (FPS) de la vidéo fusionnée.",
    },
    {
        name: "Fusionner et exporter",
        text: "Appuyez sur le bouton de fusion. Attendez que le traitement en temps réel se termine et téléchargez le fichier résultant.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Fusion professionnelle de vidéos 100% locale',
        items: [
            'Traitement en temps réel directement dans votre navigateur',
            'Prend en charge plusieurs vidéos de tailles et de formats différents (MP4, WEBM, MOV)',
            'Résolution de sortie sélectionnable (720p, 1080p, 2K, 4K)',
            'Pistes audio combinées de manière parfaitement séquentielle'
        ]
    },
    { type: 'title', text: 'Fusionner des vidéos en ligne gratuitement : Simplicité et confidentialité sans limites', level: 2 },
    { type: 'paragraph', html: 'Vous vous demandez <strong>comment fusionner deux vidéos en une seule</strong> sans complications ? Vous n\'avez plus besoin de télécharger des logiciels lourds ou des applications payantes. Notre outil pour <strong>fusionner des vidéos en ligne gratuitement</strong> vous permet de concaténer et de joindre tous les clips dont vous avez besoin en quelques secondes. En fonctionnant 100% localement, vous n\'avez pas besoin de télécharger vos fichiers sur un serveur, ce qui garantit une confidentialité absolue et vous permet de <strong>fusionner des vidéos lourdes</strong> sans temps d\'attente de téléchargement.' },
    
    { type: 'title', text: 'Joindre des vidéos sans filigrane', level: 3 },
    { type: 'paragraph', html: 'L\'un des plus grands inconvénients des autres applications est qu\'elles gâchent votre contenu. Avec nous, vous pouvez <strong>joindre des vidéos en ligne sans filigrane</strong>. Le fichier que vous téléchargez sera exactement votre création, propre, professionnelle et prête à être partagée sur YouTube, Instagram, TikTok ou pour un usage personnel.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privé et Local', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Aucune donnée de téléchargement', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Résolution maximale', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Cas d\'utilisation courants pour la fusion de vidéos', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Réseaux Sociaux',
            description: 'Fusion rapide de stories, TikToks ou reels en une seule vidéo',
            icon: 'mdi:instagram',
            points: [
                'Joindre de petits clips enregistrés avec le mobile',
                'Préparer du contenu séquentiel pour Instagram ou YouTube',
                'Fusion sans filigranes gênants'
            ]
        },
        {
            title: 'Présentations',
            description: 'Joindre des introductions et des enregistrements de démonstration',
            icon: 'mdi:presentation',
            points: [
                'Fusionner une intro animée avec le corps de la présentation',
                'Joindre de courtes démos de logiciels',
                'Exportation propre au format standard MP4/WEBM'
            ],
            highlight: true
        },
        {
            title: 'Compilations familiales',
            description: 'Fusionner plusieurs vidéos de vacances ou de célébrations',
            icon: 'mdi:home-heart',
            points: [
                'Créer une seule vidéo avec tous les moments de la fête',
                'Regrouper les souvenirs de voyage chronologiquement',
                'Facile à partager en un seul fichier'
            ]
        },
        {
            title: 'Vidéos éducatives',
            description: 'Concaténer de courts chapitres ou leçons',
            icon: 'mdi:school',
            points: [
                'Regrouper de petits tutoriels indépendants',
                'Ajouter un clip de clôture à vos leçons',
                'Structurer votre cours de manière professionnelle'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'La meilleure application pour fusionner des vidéos depuis le navigateur', level: 2 },
    { type: 'paragraph', html: 'Ce n\'est pas juste une autre page web ; c\'est une véritable <strong>application pour fusionner des vidéos</strong> qui fonctionne directement depuis votre navigateur grâce aux API vidéo modernes HTML5. Vous pouvez <strong>fusionner des vidéos MP4</strong>, WEBM et plus encore, en mélangeant les résolutions (notre système applique un letterboxing automatique si les dimensions varient) et en choisissant les images par seconde (FPS) de votre exportation finale.' },

    { type: 'title', text: 'Comparaison des approches de fusion', level: 3 },
    { type: 'table', headers: ['Caractéristiques', 'Notre outil local', 'Convertisseurs en ligne classiques', 'Éditeurs professionnels'], rows: [
        ['Confidentialité', 'Totale (Traitement sur votre appareil)', 'Faible (Nécessite le téléchargement de fichiers)', 'Totale (Installé sur votre appareil)'],
        ['Consommation réseau', 'Zéro (Pas de téléchargement de gigaoctets)', 'Très élevée (Téléchargement de fichiers)', 'Zéro'],
        ['Filigrane', 'NON (100% propre)', 'Oui (Dans les versions gratuites)', 'NON (Si vous achetez la licence)'],
        ['Prix', '100% Gratuit', 'Gratuit avec limites ou abonnement', 'Généralement coûteux'],
        ['Courbe d\'apprentissage', 'Très faible (Glisser, ordonner et fusionner)', 'Faible', 'Très élevée (Nécessite une formation technique)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Confidentialité garantie : Sécurité maximale car aucun fichier ne quitte votre appareil',
            con: 'La vitesse de fusion de vidéos lourdes dépend de la RAM et du processeur de votre ordinateur local'
        },
        {
            pro: 'Résultats professionnels : 100% gratuit, sans inscription et sans filigrane',
            con: 'Lors de la fusion de vidéos aux dimensions disparates (vertical vs horizontal), des marges noires seront appliquées'
        },
        {
            pro: 'Polyvalence : Exportation rapide avec encodage efficace optimisé pour le web et les réseaux sociaux',
            con: 'Ne permet pas d\'ajouter des transitions complexes (fondus 3D) ou des effets visuels cinématographiques'
        }
    ], title: 'Avantages et considérations' },

    { type: 'title', text: 'Commencez à fusionner vos vidéos dès aujourd\'hui', level: 2 },
    { type: 'paragraph', html: 'Il n\'y a plus d\'excuses pour avoir des centaines de fragments vidéo désorganisés. Téléchargez vos fichiers, placez-les dans l\'ordre souhaité et appuyez sur le bouton. Découvrez le moyen le plus rapide, le plus sûr et le plus privé de <strong>fusionner des vidéos en ligne</strong>.' }
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

export const content: VideoMergerLocaleContent = {
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

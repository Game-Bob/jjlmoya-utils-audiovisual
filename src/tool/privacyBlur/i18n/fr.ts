import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'editeur-confidentialite-en-ligne-pixeliser-flouter-visages';
const title = 'Éditeur de Confidentialité en Ligne - Pixélisez et masquez les visages';
const description = 'Protégez votre identité en censurant les zones sensibles de vos photos. Pixélisez les visages, floutez les documents ou masquez les informations privées 100 % localement.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixeliser",
    toolBlur: "Flouter",
    toolSolid: "Masquer",
    intensityLabel: "Intensité",
    undoButton: "Annuler",
    downloadButton: "Enregistrer",
    dropTitle: "Éditeur de Confidentialité",
    dropSubtitle: "Faites glisser votre image ici ou cliquez pour commencer",
    privacySecureLabel: "100 % Local",
    offlineLabel: "Hors ligne",
    autoDetectFaces: "Auto Detect",
    loadingModels: "Chargement des modèles...",
    noFacesDetected: "Aucun visage détecté automatiquement."
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "Mes photos sont-elles téléchargées sur un serveur ?",
        answer: "Non. L'éditeur de confidentialité fonctionne entièrement dans votre navigateur. Les pixels sont modifiés localement et rien n'est envoyé à l'extérieur de votre appareil.",
    },
    {
        question: "Comment fonctionne la détection automatique des visages ?",
        answer: "Nous utilisons un réseau neuronal léger (TinyFaceDetector) qui s'exécute dans votre navigateur pour identifier les traits du visage sans avoir besoin d'une connexion externe.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Importez votre photo",
        text: "Faites glisser ou sélectionnez l'image contenant des informations sensibles que vous souhaitez masquer.",
    },
    {
        name: "Choisissez l'outil",
        text: "Sélectionnez entre pixeliser, flouter ou masquer (solide) selon le niveau de confidentialité dont vous avez besoin.",
    },
    {
        name: "Marquez la zone",
        text: "Cliquez et faites glisser sur la zone que vous souhaitez protéger (visages, plaques d'immatriculation, noms, etc.).",
    },
    {
        name: "Enregistrez le résultat",
        text: "Téléchargez l'image traitée avec la certitude que les données d'origine sont inaccessibles.",
    },
];

const bibliography: PrivacyBlurLocaleContent['bibliography'] = [
    {
        name: "Privacy by Design (PbD) - AGPD",
        url: "https://www.aepd.es/es/guias-y-herramientas/guias/guia-de-privacidad-desde-el-diseno",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Éditeur de Confidentialité : Pixéliser, Flouter et Masquer',
        items: [
            'Trois outils d\'édition : Pixeliser, Flouter, Masquage Solide',
            'Détection automatique des visages par IA (TinyFaceDetector)',
            'Traitement 100 % local - vos photos ne quittent jamais le navigateur',
            'Sans filigrane, sans limites, complètement gratuit'
        ]
    },
    { type: 'title', text: 'Confidentialité Numérique : Comment Protéger vos Données Visuelles', level: 2 },
    { type: 'paragraph', html: 'À l\'ère des réseaux sociaux, partager des photos sans contrôle peut exposer des données personnelles sensibles. Notre outil permet de masquer les informations critiques (visages, plaques d\'immatriculation, noms, adresses) avant de les mettre en ligne, garantissant que votre vie privée reste sous votre contrôle total.' },

    { type: 'stats', items: [
        { value: '3', label: 'Méthodes de Masquage', icon: 'mdi:tools' },
        { value: '100%', label: 'Confidentialité Locale', icon: 'mdi:shield-check' },
        { value: 'IA', label: 'Détection de Visages', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Trois Méthodes de Masquage Expliquées', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pixeliser',
            description: 'Divise la zone en carrés, impossible à reconnaître',
            icon: 'mdi:blur',
            points: [
                'Obfuscation irréversible maximale',
                'Plus sûr contre la reconnaissance faciale',
                'Visible, il est clair que quelque chose a été masqué',
                'Idéal : visages sur photos publiques'
            ]
        },
        {
            title: 'Flouter',
            description: 'Lissage gaussien - aspect plus naturel',
            icon: 'mdi:blur-off',
            points: [
                'Aspect visuel plus élégant',
                'Conserve une certaine cohérence des tons',
                'Mathématiquement réversible (théoriquement)',
                'Idéal : informations moins sensibles'
            ],
            highlight: true
        },
        {
            title: 'Masquage Solide',
            description: 'Bloc de couleur opaque - confidentialité maximale',
            icon: 'mdi:rectangle',
            points: [
                'Visible, masquage évident',
                'Sécurité juridique/confidentialité maximale',
                'Modifie la composition visuelle',
                'Idéal : documents, données sensibles'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Détection Automatique des Visages par IA', level: 3 },
    { type: 'paragraph', html: 'Notre outil utilise TinyFaceDetector, un réseau neuronal compact qui s\'exécute directement dans votre navigateur pour identifier les visages automatiquement :' },
    { type: 'list', items: [
        '<strong>100 % Local :</strong> Le modèle d\'IA s\'exécute sur votre GPU/CPU, pas sur des serveurs distants.',
        '<strong>Sans Internet :</strong> Après le téléchargement initial, il fonctionne complètement hors ligne.',
        '<strong>Confidentialité Garantie :</strong> Personne ne voit les visages : ni Google, ni OpenAI, ni nous.',
        '<strong>Un Clic Automatique :</strong> Détecte les visages et vous permet de choisir de les masquer en un clic.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Sécurité dès la Conception (Privacy by Design)', html: 'En traitant les images via le processeur local de votre navigateur, nous garantissons que les photos d\'origine ne quittent jamais votre appareil. C\'est le standard maximal de confidentialité numérique.' },

    { type: 'title', text: 'Cas d\'Utilisation de la Confidentialité', level: 3 },
    { type: 'table', headers: ['Informations Sensibles', 'Méthode Recommandée', 'Urgence'], rows: [
        ['Visages de personnes', 'Pixeliser ou Flouter', 'Critique'],
        ['Plaques d\'immatriculation', 'Pixeliser (irréversible)', 'Critique'],
        ['Documents d\'identité', 'Masquage Solide ou Pixeliser', 'Critique'],
        ['Noms/Adresses écrits', 'Masquage Solide ou Pixeliser', 'Élevée'],
        ['Numéros de téléphone', 'Pixeliser ou Masquer', 'Élevée'],
        ['Informations médicales', 'Masquage Solide', 'Critique'],
        ['Signaux WiFi visibles', 'Pixeliser', 'Moyenne']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Confidentialité totale : traitement 100 % local, ni serveurs, ni stockage',
            con: 'Nécessite un navigateur moderne supportant Canvas et WebGL'
        },
        {
            pro: 'La détection automatique des visages fait gagner du temps',
            con: 'L\'IA n\'est pas parfaite - les visages de profil peuvent être omis'
        },
        {
            pro: 'Trois méthodes pour choisir entre sécurité et esthétique',
            con: 'Pas d\'options de déformation intelligente ou de remplissage contextuel'
        },
        {
            pro: 'Totalement gratuit, sans publicité, sans limites',
            con: 'N\'est pas l\'équivalent d\'un logiciel professionnel'
        }
    ], proTitle: 'Avantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'warning', title: 'Avertissement : Flouter n\'est pas 100 % Sûr', icon: 'mdi:alert', badge: 'Sécurité', html: 'Le flou gaussien est mathématiquement réversible via des algorithmes sophistiqués. Si l\'information est CRITIQUE (documents légaux, identité), utilisez <strong>Pixeliser ou Masquage Solide</strong>. Le flou est esthétiquement meilleur mais moins sûr.' },

    { type: 'glossary', items: [
        {
            term: 'Pixélisation',
            definition: 'Réduction de la résolution en divisant la zone en blocs de couleur uniforme. Irréversible. Sécurité maximale.'
        },
        {
            term: 'Flou Gaussien',
            definition: 'Lissage mathématique basé sur une distribution normale. Théoriquement réversible par déconvolution.'
        },
        {
            term: 'Masquage Solide',
            definition: 'Bloc opaque d\'une couleur uniforme. Sécurité maximale, confidentialité juridique maximale.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Réseau neuronal pour détecter les visages. S\'exécute localement dans le navigateur.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Approche où la confidentialité est intégrée dès la conception du système. Notre approche locale suit ce principe.'
        }
    ] },

    { type: 'message', title: 'Confidentialité sous votre Contrôle', ariaLabel: 'Informations sur la protection de la vie privée', html: 'Nous ne stockons ni ne traitons vos photos sur des serveurs distants. Pas de cookies de suivi, pas d\'historique. Nous ne savons pas ce que vous masquez car nous ne voyons jamais vos images.' },

    { type: 'title', text: 'Partagez en Toute Sécurité', level: 3 },
    { type: 'paragraph', html: 'Avant de publier une photo sur Internet, demandez-vous s\'il y a des informations que vous préféreriez garder privées.' }
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

export const content: PrivacyBlurLocaleContent = {
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

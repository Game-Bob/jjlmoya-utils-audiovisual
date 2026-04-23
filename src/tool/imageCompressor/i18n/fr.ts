import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'compresseur-images-en-ligne-reduire-taille-sans-perte-qualite';
const title = 'Compresseur d\'Images en Ligne - Réduisez le poids sans perte de qualité';
const description = 'Optimisez et compressez vos photos JPG, PNG et WebP gratuitement. Réduisez la taille des fichiers pour améliorer la vitesse de chargement de votre site web localement.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimiser les Images",
    dropSubtitle: "Faites glisser vos photos pour réduire leur poids instantanément.",
    settingsTitle: "Paramètres de Compression",
    qualityLabel: "Qualité Visuelle",
    widthLabel: "Largeur Maximale (Pixels)",
    convertToWebpLabel: "Convertir en WebP",
    compressionLabel: "Compression",
    compressBtn: "Compresser l'Image",
    processingLabel: "Traitement...",
    resultsTitle: "Images Optimisées",
    originalSizeLabel: "Taille Originale",
    newSizeLabel: "Nouvelle Taille",
    reductionLabel: "Économie",
    downloadBtn: "Télécharger",
    addMoreBtn: "Ajouter",
    browseFilesBtn: "Parcourir les fichiers",
    processedFilesTitle: "Fichiers Traités",
    downloadAllBtn: "Tout Télécharger",
    adjustThisImage: "Ajuster cette image",
    downloadTitle: "Télécharger",
    maxWidthLabel: "Larg. max (px)",
    closeBtn: "Fermer",
    totalSavingsLabel: "Économies totales",
    noSavings: "Pas d'économies nettes"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "Comment fonctionne la compression sans perte ?",
        answer: "Nous utilisons des algorithmes qui suppriment les métadonnées inutiles et optimisent l'encodage des pixels. En choisissant le WebP, une technologie de compression plus avancée que les formats traditionnels est utilisée.",
    },
    {
        question: "Mes images sont-elles téléchargées sur un serveur ?",
        answer: "Non. Tout le traitement se déroule à 100 % dans votre navigateur (côté client). Vos photos ne quittent jamais votre ordinateur, garantissant une confidentialité absolue.",
    },
    {
        question: "Pourquoi devrais-je convertir en WebP ?",
        answer: "Le WebP est le format standard moderne pour le web. Il offre une qualité supérieure au JPG et au PNG avec un poids jusqu'à 30 % inférieur, ce qui accélère le temps de chargement des pages.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Charger l'image",
        text: "Téléchargez le fichier que vous souhaitez compresser (JPG, PNG ou WebP).",
    },
    {
        name: "Ajuster la qualité",
        text: "Utilisez le curseur pour trouver l'équilibre parfait entre la taille du fichier et la qualité visuelle (recommandé : 75-85 %).",
    },
    {
        name: "Redimensionner (optionnel)",
        text: "Si l'image est très grande, vous pouvez indiquer une largeur maximale pour réduire sa résolution.",
    },
    {
        name: "Télécharger le résultat",
        text: "Appuyez sur le bouton de téléchargement pour obtenir votre image optimisée prête à l'emploi.",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Optimisation Professionnelle d\'Images Web',
        items: [
            'Compression intelligente JPG, PNG et WebP',
            'Réduisez le poids de 50 à 80 % tout en conservant la qualité visuelle',
            'Traitement 100 % local - confidentialité garantie',
            'Améliorez les Core Web Vitals et le positionnement SEO'
        ]
    },
    { type: 'title', text: 'Optimisation des Images : Vitesse Web et Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'À l\'ère de l\'immédiateté numérique, un site lent perd des utilisateurs. Les images non optimisées représentent 60 à 70 % du poids total d\'une page web. Les optimiser est la première étape pour améliorer vos métriques Google (LCP, CLS) et votre positionnement dans les résultats de recherche.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Réduction Typique du Poids', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Confidentialité Locale', icon: 'mdi:lock' },
        { value: '+30%', label: 'Plus Rapide que le JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Formats de Compression Expliqués', level: 3 },
    { type: 'table', headers: ['Format', 'Compression', 'Cas d\'Utilisation', 'Compatibilité'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Photos d\'appareil, contenu éditorial', 'Universel (100 %)'],
        ['PNG', 'Lossless 30-50%', 'Graphiques, logos, transparences', 'Universel (100 %)'],
        ['WebP', 'Lossy/Lossless 25-35% plus', 'Web moderne, réseaux sociaux', '95 % des navigateurs modernes'],
        ['AVIF', 'Lossy/Lossless améliore 20%', 'Nouvelle génération web', 'Navigateurs récents uniquement']
    ] },

    { type: 'card', title: 'Pourquoi le WebP est l\'Avenir', html: 'Google a développé le WebP spécifiquement pour le web. Il offre une compression supérieure au JPEG et au PNG, tout en conservant ou en améliorant la qualité visuelle. Il est 25 à 35 % plus petit que ses équivalents en JPEG. Les navigateurs modernes le supportent à 95 %.' },

    { type: 'title', text: 'Compression Avec Perte vs Sans Perte', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Compression Avec Perte (Lossy)',
            description: 'JPG, WebP - Supprime des informations visuelles imperceptibles',
            icon: 'mdi:compress',
            points: [
                'Réduit de 70 à 90 % le poids d\'origine',
                'Imperceptible à l\'œil humain si la qualité est maintenue > 75 %',
                'Idéal pour la photographie réaliste',
                'Non recommandé pour les logos ou les textes nets'
            ],
            highlight: true
        },
        {
            title: 'Compression Sans Perte (Lossless)',
            description: 'PNG, WebP sans perte - Conserve 100 % des données visuelles',
            icon: 'mdi:shield',
            points: [
                'Réduit de 20 à 50 % le poids',
                'Qualité parfaite, sans dégradation',
                'Idéal pour les graphiques, les logos, les transparences',
                'Fichiers plus lourds que le Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Impact sur le SEO et la Conversion', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals :</strong> Google pénalise les sites lents. Les images optimisées améliorent directement le LCP (Largest Contentful Paint).',
        '<strong>Taux de Rebond :</strong> Chaque seconde de retard = 7 % de rebond en plus. Des images plus rapides = moins d\'utilisateurs qui partent.',
        '<strong>Classement de Recherche :</strong> La vitesse est un facteur de classement. Optimiser les images booste le positionnement.',
        '<strong>Conversion :</strong> Des temps de chargement plus rapides = plus de conversions. Les études montrent +10 % de conversion avec l\'optimisation.'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: 'Confidentialité totale : traitement 100 % local, sans serveurs cloud',
            con: 'Nécessite un navigateur supportant l\'API Canvas (c\'est universel)'
        },
        {
            pro: 'Le WebP est 25 à 35 % plus petit que le JPEG pour une qualité égale',
            con: 'Les anciens Safari et IE ne supportent pas le WebP (fallback disponible)'
        },
        {
            pro: 'Traitement instantané de plusieurs images',
            con: 'Les images très volumineuses (>50 Mo) peuvent nécessiter un délai'
        },
        {
            pro: 'Redimensionnement optionnel : réduit la résolution en plus de la compression',
            con: 'Le redimensionnement entraîne une perte d\'information - mieux vaut optimiser à la source'
        }
    ], proTitle: 'Avantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'warning', title: 'Attention : Une Compression Excessive Dégrade', icon: 'mdi:alert', badge: 'Qualité', html: 'Maintenez une qualité > 75 % pour la photographie et > 85 % pour le contenu éditorial. En dessous, les artefacts de compression (taches, bandes) deviennent visibles. Une image de belle apparence en vignette peut être hideuse en grand.' },

    { type: 'glossary', items: [
        {
            term: 'Compression Lossy',
            definition: 'Supprime les données visuelles que l\'œil humain perçoit comme du "bruit". Idéal pour la photographie.'
        },
        {
            term: 'Compression Lossless',
            definition: 'Réduit la taille sans perdre d\'informations visuelles. PNG et WebP sans perte.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Indicateurs d\'expérience utilisateur : LCP (vitesse de chargement), FID (latence d\'interaction), CLS (stabilité visuelle). Affectent le SEO.'
        },
        {
            term: 'WebP',
            definition: 'Format développé par Google. 25 à 35 % plus petit que le JPEG. Supporté par 95 % des navigateurs modernes.'
        },
        {
            term: 'Artefacts de Compression',
            definition: 'Défauts visuels causés par une compression excessive : taches, bandes de couleur, bords flous.'
        }
    ] },

    { type: 'message', title: 'Optimisation Web Professionnelle', ariaLabel: 'Informations sur l\'optimisation d\'images pour le SEO', html: 'Ce n\'est pas de la vanité technique : compresser les images est un investissement direct dans l\'expérience utilisateur et le classement Google. Chaque kilo-octet compte sur mobile. Notre outil transforme ce qui nécessitait auparavant un logiciel professionnel ($$$) en un processus gratuit en 3 clics.' },

    { type: 'title', text: 'Prêt pour le Web Moderne', level: 3 },
    { type: 'paragraph', html: 'Utilisez la compression intelligente et le format WebP pour que votre présence en ligne soit rapide, responsive et compétitive dans les recherches.' }
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

export const content: ImageCompressorLocaleContent = {
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

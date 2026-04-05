import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'synchroniser-sous-titres-srt-en-ligne-ajuster-temps-gratuit';
const title = 'Synchroniser les Sous-titres SRT en Ligne - Ajustez le Temps Gratuitement';
const description = 'Outil en ligne pour avancer ou retarder les sous-titres SRT. Corrigez le décalage de temps simplement et téléchargez le fichier synchronisé instantanément.';

const ui: SubtitleSyncUI = {
    dropTitle: "Faites glisser votre fichier .SRT ici",
    dropSubtitle: "ou cliquez pour parcourir",
    adjustTitle: "Ajuster le temps",
    offsetLabel: "Décalage (secondes)",
    offsetHelp: "Utilisez des valeurs négatives pour avancer (ex : -1.5) et positives pour retarder.",
    linesStat: "Lignes",
    firstStat: "Premier sous-titre",
    lastStat: "Dernier sous-titre",
    originalLabel: "ORIGINAL",
    resultLabel: "RÉSULTAT",
    downloadButton: "Télécharger le corrigé",
    previewBadge: "APERÇU",
    unitSeconds: "sec"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Comment synchroniser mes sous-titres si l'audio est en avance ?",
        answer: "Si l'audio apparaît avant le texte, vous devez retarder les sous-titres. Entrez une valeur positive dans la calculatrice (ex : 2.0 pour les retarder de 2 secondes).",
    },
    {
        question: "Quels formats de fichiers cet outil accepte-t-il ?",
        answer: "Actuellement, l'outil est optimisé pour les fichiers .SRT (SubRip), qui est le standard le plus courant pour les lecteurs vidéo et les plateformes de streaming.",
    },
    {
        question: "Est-il sûr de télécharger mes fichiers de sous-titres ?",
        answer: "Oui, car le traitement est 100 % local sur votre appareil. Vos fichiers ne sont envoyés à aucun serveur ; la synchronisation se fait directement dans votre navigateur.",
    },
    {
        question: "Puis-je synchroniser seulement une partie du fichier ?",
        answer: "Non, cet outil applique un décalage constant à l'ensemble du fichier. Si le décalage est progressif, vous pourriez avoir besoin d'une édition plus avancée.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Importez votre fichier SRT",
        text: "Faites glisser le fichier de sous-titres que vous souhaitez corriger dans la zone de téléchargement.",
    },
    {
        name: "Identifiez le décalage",
        text: "Mesurez le retard ou l'avance des sous-titres par rapport à l'audio dans votre lecteur.",
    },
    {
        name: "Ajustez le décalage",
        text: "Entrez les secondes positives (retarder) ou négatives (avancer) dans le panneau de contrôle.",
    },
    {
        name: "Téléchargez le fichier",
        text: "Vérifiez dans l'aperçu que les temps sont corrects et cliquez sur télécharger pour obtenir votre nouveau SRT.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "Spécification du format SubRip (SRT)",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
    {
        name: "MDN Web Docs - FileReader API",
        url: "https://developer.mozilla.org/fr/docs/Web/API/FileReader",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Synchronisation de Sous-titres Professionnelle',
        items: [
            'Correction instantanée des décalages audio-sous-titres',
            'Supporte les fichiers SRT (SubRip) standards',
            'Traitement 100 % local - confidentialité maximale',
            'Sans installation, sans abonnement, complètement gratuit'
        ]
    },
    { type: 'title', text: 'Synchronisation Parfaite de Sous-titres SRT', level: 2 },
    { type: 'paragraph', html: 'Il n\'y a rien de plus frustrant que de voir des dialogues qui ne correspondent pas aux voix. Le décalage des sous-titres survient souvent à cause de différences entre les versions vidéo : variations de fréquence d\'images, coupures publicitaires, intros de production ou changements de compression. Avec cet outil, vous réglez le problème en quelques secondes.' },

    { type: 'stats', items: [
        { value: '100 %', label: 'Traitement Local', icon: 'mdi:shield' },
        { value: 'Millisecondes', label: 'Précision', icon: 'mdi:clock-outline' },
        { value: 'Illimité', label: 'Sans Limite de Fichier', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Avancer vs Retarder : Guide Pratique', level: 3 },
    { type: 'paragraph', html: 'La première étape consiste à identifier correctement le type de décalage. Voici la logique :' },
    { type: 'list', items: [
        '<strong>Retarder (Valeur Positive) :</strong> Quand le texte apparaît AVANT le son. Les sous-titres sont en avance. Exemple : +2.0 secondes.',
        '<strong>Avancer (Valeur Négative) :</strong> Quand le texte apparaît APRÈS le son. Les sous-titres sont en retard. Exemple : -2.0 secondes.',
        '<strong>Testez et Ajustez :</strong> Commencez par de petits incréments (0,5 s) et utilisez l\'aperçu pour valider.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Confidentialité de Niveau Professionnel', html: 'En traitant le fichier via JavaScript côté client, nous garantissons que le contenu de vos sous-titres ne quitte jamais votre ordinateur. Essentiel pour les traducteurs et les professionnels manipulant du matériel confidentiel ou sous contrat de confidentialité.' },

    { type: 'title', text: 'Cas d\'Utilisation Courants', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Traducteurs et Sous-titreurs',
            description: 'Synchroniser des traductions après avoir travaillé avec plusieurs versions vidéo',
            icon: 'mdi:translate',
            points: [
                'Fichiers SRT de sources différentes',
                'Gestion des versions de contenu (cinéma vs streaming)',
                'Livraison rapide sans changer d\'outils'
            ]
        },
        {
            title: 'Créateurs de Contenu',
            description: 'Récupérer des sous-titres quand la vidéo a été traitée avec une fréquence d\'images différente',
            icon: 'mdi:video',
            points: [
                'Réutilisation de sous-titres existants',
                'Changements de format (720p vers 1080p)',
                'Éviter le resynchronisation manuelle de plus de 1000 lignes'
            ],
            highlight: true
        },
        {
            title: 'Utilisateurs Particuliers',
            description: 'Corriger des sous-titres téléchargés qui ne s\'adaptent pas parfaitement',
            icon: 'mdi:account',
            points: [
                'Sous-titres génériques désynchronisés',
                'Films de différentes régions (PAL vs NTSC)',
                'Streaming avec versions éditées'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Pourquoi les Sous-titres se Désynchronisent', level: 3 },
    { type: 'table', headers: ['Cause Commune', 'Description Technique', 'Solution'], rows: [
        ['Différence de Framerate', '23,976 fps vs 25 fps - accumulation de différence', 'Ajustement du décalage unique (cet outil)'],
        ['Éditorialisation', 'Coupures publicitaires ou contenu supprimé', 'Calcul manuel + synchronisation'],
        ['Version Régionale', 'PAL (25 fps Europe) vs NTSC (29,97 fps USA)', 'Décalage mathématique simple'],
        ['Changement de Résolution', 'Réencodage avec une vitesse de traitement différente', 'Recalcul du fichier original']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Limitations Techniques à Considérer', icon: 'mdi:information', badge: 'Important', html: 'Cet outil applique un décalage <strong>constant</strong> à l\'ensemble du fichier. Si le décalage est <strong>progressif</strong> (commence bien mais se décale peu à peu), c\'est une différence de fréquence d\'images persistante. Dans ce cas, le fichier nécessite un traitement dans un logiciel professionnel.' },

    { type: 'proscons', items: [
        {
            pro: 'Vitesse extrême - traite de gros fichiers en millisecondes',
            con: 'Ajuste uniquement un décalage fixe, pas progressif'
        },
        {
            pro: 'Confidentialité totale - le contenu ne quitte jamais votre navigateur',
            con: 'Nécessite un navigateur moderne avec JavaScript activé'
        },
        {
            pro: 'Format universel - fonctionne avec tout SRT standard',
            con: 'Ne supporte pas les autres formats (ASS, VTT, etc.)'
        },
        {
            pro: 'Complètement gratuit, sans publicité, sans suivi',
            con: 'Pas d\'historique des modifications ou de versionnage'
        }
    ], proTitle: 'Avantages', conTitle: 'Limitations' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Format de sous-titres le plus universel : fichier texte avec numéros de séquence, temps et texte.'
        },
        {
            term: 'Offset (Décalage)',
            definition: 'Quantité fixe de temps ajoutée ou soustraite à tous les temps du fichier.'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Images par seconde. Les différences entre 24, 25 ou 30 fps causent des décalages cumulatifs.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Standards régionaux de télévision. Les différences de ~4 % de vitesse causent des décalages.'
        },
        {
            term: 'Décalage Progressif',
            definition: 'Quand la synchronisation est correcte au début mais se décale graduellement. Indique une fréquence d\'images différente.'
        }
    ] },

    { type: 'message', title: 'Édition Professionnelle avec Contrôle Total', ariaLabel: 'Informations techniques sur la synchronisation', html: 'Notre approche est simple mais puissante : un décalage unique, appliqué instantanément, traité à 100 % dans votre navigateur. Pas de cloud, pas de stockage, pas de suivi. Simplement importez, ajustez, téléchargez. Un contrôle total sur votre contenu.' },

    { type: 'title', text: 'Conclusion : Le Cinéma Sans Interruptions', level: 3 },
    { type: 'paragraph', html: 'Une synchronisation parfaite des sous-titres est fondamentale pour une expérience audiovisuelle de qualité. Avec cet outil, vous transformez une expérience frustrante en une soirée cinéma parfaite.' }
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

export const content: SubtitleSyncLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Foire Aux Questions sur la Synchronisation des Sous-titres',
    bibliography,
    bibliographyTitle: 'Ressources Techniques sur les Formats de Sous-titres',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

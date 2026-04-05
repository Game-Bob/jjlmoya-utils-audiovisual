import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'sync-subtitres';
const title = 'Synchroniser Sous-titres SRT en Ligne - Outil Gratuit';
const description = 'Outil en ligne pour avancer ou retarder les sous-titres SRT. Corrigez facilement le décalage temporel et téléchargez le fichier synchronisé instantanément.';

const ui: SubtitleSyncUI = {
    dropTitle: "Faites glisser votre fichier .SRT ici",
    dropSubtitle: "ou cliquez pour explorer",
    adjustTitle: "Ajuster le temps",
    offsetLabel: "Décalage (secondes)",
    offsetHelp: "Utilisez des valeurs négatives pour avancer (ex: -1.5) et positives pour retarder.",
    linesStat: "Lignes",
    firstStat: "Premier Sous-titre",
    lastStat: "Dernier Sous-titre",
    originalLabel: "ORIGINAL",
    resultLabel: "RÉSULTAT",
    downloadButton: "Télécharger Corrigé",
    previewBadge: "APERÇU",
    unitSeconds: "sec"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "Comment synchroniser mes sous-titres si l'audio est en avance ?",
        answer: "Si vous entendez l'audio avant de voir le texte, vous devez retarder les sous-titres. Entrez une valeur positive dans le calculateur (ex: 2.0 pour les retarder de 2 secondes).",
    },
    {
        question: "Quels formats de fichiers cet outil accepte-t-il ?",
        answer: "Actuellement, l'outil est optimisé pour les fichiers .SRT (SubRip), qui est la norme la plus courante pour les lecteurs vidéo.",
    },
    {
        question: "Est-ce sûr de télécharger mes fichiers de sous-titres ?",
        answer: "Oui, car le traitement est 100% local sur votre appareil. Vos fichiers ne sont envoyés à aucun serveur; la synchronisation se fait directement dans votre navigateur.",
    },
    {
        question: "Puis-je synchroniser seulement une partie du fichier ?",
        answer: "Non, cet outil applique un décalage constant cache à tout le fichier. Si le décalage est progressif, vous pourriez avoir besoin d'un éditeur plus avancé.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Chargez votre fichier SRT",
        text: "Faites glisser le fichier de sous-titres que vous voulez corriger dans la zone de téléchargement.",
    },
    {
        name: "Identifiez le décalage",
        text: "Mesurez combien de temps de retard ou d'avance ont les sous-titres par rapport à l'audio dans votre lecteur.",
    },
    {
        name: "Ajustez le déplacement",
        text: "Entrez les secondes positives (retarder) ou négatives (avancer) dans le panneau de contrôle.",
    },
    {
        name: "Téléchargez le fichier",
        text: "Vérifiez dans l'aperçu que les temps sont corrects et cliquez sur télécharger pour obtenir votre nouveau SRT.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "SubRip (SRT) format specification",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    { type: 'title', text: 'Maîtriser la Synchronisation de Sous-titres Digitaux', level: 2 },
    { type: 'paragraph', html: 'Il n\'y a rien de plus frustrant pour un spectateur qu\'un dialogue qui ne correspond pas aux voix. Le décalage des sous-titres se produit souvent en raison de différences entre les versions vidéo (framerate, coupures publicitaires).' },
    
    { type: 'title', text: 'Avancer vs Retarder (Le Grand Dilemme)', level: 3 },
    { type: 'paragraph', html: 'Comprendre quelle valeur entrer est la clé pour utiliser cet outil avec succès :' },
    { type: 'list', items: [
        '<strong>Retarder (Delay) :</strong> Si vous voyez le texte AVANT l\'audio. Utilisez des nombres positifs (ex: 1.5).',
        '<strong>Avancer (Advance) :</strong> Si vous voyez le texte APRÈS l\'audio. Utilisez des nombres négatifs (ex: -1.5).',
    ]},

    { type: 'card', title: 'Confidentialité Garantie', icon: 'mdi:shield-lock', html: 'En traitant le fichier via JavaScript côté client, nous garantissons que le contenu de vos sous-titres ne quitte jamais votre ordinateur.' },
    
    { type: 'title', text: 'Conclusion : Cinéma sans Interruption', level: 3 },
    { type: 'paragraph', html: 'En quelques clics, vous pouvez transformer une expérience de visionnage frustrante en une soirée cinéma parfaite. Notre outil gratuit de synchronisation SRT est rapide, sécurisé et toujours disponible.' }
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
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

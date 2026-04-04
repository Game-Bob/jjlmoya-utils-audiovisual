import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'nettoyeur-exif';
const title = 'Nettoyeur de Métadonnées EXIF - Supprimez le GPS et les Données Cachées des Photos';
const description = 'Outil en ligne gratuit pour supprimer les métadonnées EXIF, les coordonnées GPS et les données d\'appareil de vos images avant de les partager. Confidentialité totale.';

const ui: ExifCleanerUI = {
    dropTitle: "Faites glisser votre image ici",
    dropSubtitle: "Supprimez les métadonnées GPS, le modèle de caméra et les réglages cachés.",
    dropLocalInfo: "Traitement 100 % local. Rien n'est téléchargé sur le cloud.",
    selectButton: "Sélectionner une Image",
    processingText: "Nettoyage des métadonnées...",
    analysisCompleted: "Analyse Terminée",
    downloadButton: "Télécharger l'Image Nettoyée",
    resetButton: "Nettoyer une autre image",
    privacyRiskTitle: "RISQUES POUR LA VIE PRIVÉE TROUVÉS :",
    gpsLabel: "GPS :",
    gpsDetected: "DÉTECTÉ",
    gpsNotFound: "NON TROUVÉ",
    cameraLabel: "CAMÉRA :",
    softwareLabel: "LOGICIEL :",
    dateLabel: "DATE :",
    otherTechnicalDetails: "AUTRES DÉTAILS TECHNIQUES",
    noMetadataFound: "Aucune métadonnée EXIF lisible trouvée.",
    alreadyCleanInfo: "L'image est peut-être déjà propre.",
    previewLabel: "Aperçu",
    faqTitle: "Foire aux questions sur la confidentialité des photos",
    bibliographyTitle: "Ressources et documentation technique EXIF",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Qu'est-ce que les métadonnées EXIF ?",
        answer: "L'EXIF (Exchangeable Image File Format) est une information cachée sauvegardée par votre appareil photo ou téléphone dans chaque photo. Elle inclut la date, le modèle de l'appareil, les réglages de prise de vue (ISO, ouverture) et, plus critique, les coordonnées GPS.",
    },
    {
        question: "Est-ce sûr d'utiliser cet outil en ligne ?",
        answer: "Oui, car le traitement est 100 % local dans votre navigateur. Vos photos ne sont jamais téléchargées sur un serveur; le nettoyage se fait directement dans la mémoire de votre appareil, garantissant une confidentialité absolue.",
    },
    {
        question: "Quelles données le nettoyeur supprime-t-il spécifiquement ?",
        answer: "Il efface tous les tags EXIF (GPS, marque, numéro de série), IPTC (copyright, auteur) et XMP (historique d'édition). Votre image devient 'propre', ne conservant que les pixels visuels.",
    },
    {
        question: "L'image perd-elle en qualité en nettoyant les métadonnées ?",
        answer: "Non. Nous ne supprimons que l'en-tête de données techniques du fichier. Les données de l'image (pixels) restent identiques, la qualité visuelle n'est donc pas affectée du tout.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Sélectionner les images",
        text: "Glissez vos photos ou choisissez-les depuis votre explorateur de fichiers. Vous pouvez en traiter plusieurs à la fois.",
    },
    {
        name: "Analyser les données actuelles",
        text: "L'outil vous montrera quels renseignements sensibles ont été détectés (ex: 'Coordonnées GPS détectées').",
    },
    {
        name: "Traiter et nettoyer",
        text: "Cliquez sur le bouton de nettoyage pour supprimer instantanément tous les tags de métadonnées.",
    },
    {
        name: "Télécharger les photos sécurisées",
        text: "Enregistrez les nouvelles versions anonymisées de vos images, prêtes à être partagées sur les réseaux sociaux en toute sécurité.",
    },
];

const bibliography: ExifCleanerLocaleContent['bibliography'] = [
    {
        name: "Exchangeable image file format (EXIF) - Wikipédia",
        url: "https://fr.wikipedia.org/wiki/Exchangeable_image_file_format",
    },
    {
        name: "W3C - Metadata in Images",
        url: "https://www.w3.org/community/image-metadata/",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    { type: 'title', text: 'Guide de Confidentialité et Métadonnées en Photographie Numérique', level: 2 },
    { type: 'paragraph', html: 'Vous êtes-vous déjà demandé combien d\'informations personnelles vous partagez en publiant une photo sur les réseaux sociaux ? Les métadonnées EXIF sont comme une empreinte invisible qui peut révéler de la position exacte de votre maison au prix de votre matériel photo.' },
    
    { type: 'title', text: 'Quelles informations se cachent dans vos photos ?', level: 3 },
    { type: 'list', items: [
        '<strong>Coordonnées GPS :</strong> La latitude et longitude exacte où la capture a été réalisée.',
        '<strong>Identification de l\'Équipement :</strong> Marque, modèle et numéro de série de l\'appareil.',
        '<strong>Réglages Techniques :</strong> ISO, ouverture, temps d\'exposition et focale.',
        '<strong>Historique d\'Édition :</strong> Logiciel utilisé et date de dernière modification.'
    ]},

    { type: 'card', title: 'Sécurité dans le Navigateur', icon: 'mdi:shield-check', html: 'Cet outil utilise l\'API Canvas du navigateur pour créer une copie propre de l\'image pixel par pixel, assurant qu\'aucune donnée du fichier original ne fuit dans le nouveau fichier généré.' },

    { type: 'diagnostic', variant: 'warning', title: 'Risques de Partage sans Nettoyage', icon: 'mdi:alert', badge: 'Vie Privée', html: 'Partager des photos de biens de valeur avec des métadonnées GPS actives permet à des tiers de repérer des emplacements habituels via des techniques d\'OSINT.' },
    
    { type: 'title', text: 'Conclusion : Partagez sans traces', level: 3 },
    { type: 'paragraph', html: 'Protéger votre identité numérique commence par les petits détails. Nettoyer vos photos avant de les publier est une habitude essentielle d\'hygiène numérique au XXIe siècle.' }
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

export const content: ExifCleanerLocaleContent = {
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

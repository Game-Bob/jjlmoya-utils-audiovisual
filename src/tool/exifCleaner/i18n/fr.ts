import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'nettoyeur-metadonnees-exif-supprimer-gps-confidentialite-photo';
const title = 'Nettoyeur de Métadonnées EXIF - Supprimez le GPS et les Données Cachées';
const description = 'Outil en ligne gratuit pour effacer les métadonnées EXIF, les coordonnées GPS et les caractéristiques de l\'appareil de vos images avant de les partager. 100 % confidentiel : fonctionne sans téléversement.';

const ui: ExifCleanerUI = {
    dropTitle: "Faites glisser votre image ici",
    dropSubtitle: "Supprimez les métadonnées GPS, le modèle d'appareil photo et les paramètres cachés.",
    dropLocalInfo: "Traitement 100 % local. Rien n'est téléversé sur le cloud.",
    selectButton: "Sélectionner une Image",
    processingText: "Nettoyage des métadonnées...",
    analysisCompleted: "Analyse Terminée",
    downloadButton: "Télécharger l'Image Nettoyée",
    resetButton: "Nettoyer une autre image",
    privacyRiskTitle: "RISQUES DE CONFIDENTIALITÉ DÉTECTÉS :",
    gpsLabel: "GPS :",
    gpsDetected: "DÉTECTÉ",
    gpsNotFound: "NON TROUVÉ",
    cameraLabel: "APPAREIL :",
    softwareLabel: "LOGICIEL :",
    dateLabel: "DATE :",
    otherTechnicalDetails: "AUTRES DÉTAILS TECHNIQUES",
    noMetadataFound: "Aucune métadonnée EXIF lisible n'a été trouvée.",
    alreadyCleanInfo: "L'image est peut-être déjà nettoyée.",
    previewLabel: "Aperçu",
    faqTitle: "Questions fréquemment posées sur la confidentialité des photos",
    bibliographyTitle: "Ressources et documentation technique EXIF",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "Qu'est-ce que les métadonnées EXIF ?",
        answer: "L'EXIF (Exchangeable Image File Format) est une information cachée que votre appareil photo ou votre mobile enregistre dans chaque photo. Elle comprend la date exacte, le modèle de l'appareil, les réglages de prise de vue (ISO, ouverture) et, plus critique encore, les coordonnées GPS de l'endroit où la photo a été prise.",
    },
    {
        question: "Est-il sûr d'utiliser cet outil en ligne ?",
        answer: "Oui, car le traitement est 100 % local dans votre navigateur. Vos photos ne sont jamais téléversées sur un serveur ; le nettoyage s'effectue directement dans la mémoire de votre appareil, garantissant une confidentialité absolue.",
    },
    {
        question: "Quelles données spécifiques le nettoyeur supprime-t-il ?",
        answer: "Il efface toutes les balises EXIF (GPS, marque de l'appareil, numéro de série), IPTC (copyright, auteur) et XMP (historique d'édition). Votre image devient 'propre', ne conservant que les pixels visuels.",
    },
    {
        question: "L'image perd-elle de sa qualité lors du nettoyage des métadonnées ?",
        answer: "Non. Nous ne supprimons que l'en-tête de données techniques du fichier. Les données de l'image (pixels) restent identiques, de sorte que la qualité visuelle n'est pas affectée du tout.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Sélectionner les images",
        text: "Faites glisser vos photos ou sélectionnez-les depuis votre explorateur de fichiers. Vous pouvez en traiter plusieurs à la fois.",
    },
    {
        name: "Analyser les données actuelles",
        text: "L'outil vous montrera quelles informations sensibles il a détectées (ex: 'Coordonnées GPS détectées').",
    },
    {
        name: "Traiter et nettoyer",
        text: "Cliquez sur le bouton de nettoyage pour supprimer instantanément toutes les balises de métadonnées.",
    },
    {
        name: "Télécharger des photos sécurisées",
        text: "Enregistrez les nouvelles versions de vos images, désormais anonymisées et prêtes à être partagées en toute sécurité sur les réseaux sociaux.",
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
    {
        type: 'summary',
        title: 'Nettoyeur de Métadonnées EXIF - Protégez votre Vie Privée',
        items: [
            'Supprimez instantanément les coordonnées GPS et la localisation de vos photos',
            'Effacez le modèle de l\'appareil, le numéro de série et les informations techniques',
            'Traitement 100 % par navigateur - vos images ne quittent jamais votre appareil',
            'Préserve la qualité visuelle - seules les données cachées sont supprimées'
        ]
    },
    { type: 'title', text: 'Guide Complet de la Confidentialité et des Métadonnées EXIF en Photographie Numérique', level: 2 },
    { type: 'paragraph', html: 'Vous êtes-vous déjà demandé combien d\'informations personnelles vous partagez en publiant une photo sur les réseaux sociaux ? Les métadonnées EXIF sont comme une <strong>empreinte digitale invisible</strong> qui peut révéler tout, de l\'emplacement exact de votre domicile au prix de votre matériel photographique. Ce guide explique comment protéger votre vie privée efficacement.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Vie Privée - Traitement Local', icon: 'shield' },
        { value: '0%', label: 'Données Stockées sur Serveur', icon: 'database' },
        { value: 'Instantané', label: 'Suppression des Métadonnées', icon: 'lightning' }
    ], columns: 3 },

    { type: 'title', text: 'Quelles Informations se Cachent dans vos Photos ?', level: 3 },
    { type: 'paragraph', html: 'Plus de 90 % des photos numériques contiennent des informations sensibles qui peuvent compromettre votre sécurité. Voici toutes les données qui peuvent être révélées :' },
    { type: 'list', items: [
        '<strong>Coordonnées GPS :</strong> La latitude et la longitude exactes où la capture a été faite (adresse du domicile, travail, lieux fréquentés).',
        '<strong>Identification de l\'Équipement :</strong> Marque, modèle et numéro de série de l\'appareil photo ou du smartphone (informations précieuses).',
        '<strong>Réglages Techniques :</strong> ISO, ouverture (f/), temps d\'exposition et distance focale (permet d\'identifier votre équipement spécifique).',
        '<strong>Date et Heure Exactes :</strong> Un chronologie complète de vos activités quotidiennes.',
        '<strong>Historique d\'Édition :</strong> Logiciel utilisé, logiciel d\'édition et date de dernière modification.',
        '<strong>Données de Copyright :</strong> Photographe, droits d\'auteur et notes personnelles.'
    ] },

    { type: 'title', text: 'Risques de Sécurité Réels : Cas d\'Utilisation', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Photographes Professionnels',
            description: 'Risque de vol de matériel coûteux identifié par numéro de série',
            icon: 'mdi:camera',
            points: [
                'Les voleurs recherchent des photographes avec du matériel de valeur',
                'Le GPS identifie le domicile du propriétaire',
                'Le numéro de série facilite la revente sur le dark web'
            ]
        },
        {
            title: 'Parents et Influenceurs',
            description: 'Danger extrême : localisation des enfants en temps réel',
            icon: 'mdi:alert',
            points: [
                'Les prédateurs suivent les emplacements via l\'OSINT',
                'Les prédateurs peuvent identifier les routines quotidiennes',
                'Risque de harcèlement et de suivi physique'
            ],
            highlight: true
        },
        {
            title: 'Utilisateurs de Réseaux Sociaux',
            description: 'Exposition de la vie privée personnelle et professionnelle',
            icon: 'mdi:share-variant',
            points: [
                'Publier depuis le bureau révèle le lieu de travail',
                'La géolocalisation permet d\'inférer le salaire approximatif',
                'Les données publiques permettent un profilage ciblé'
            ]
        },
        {
            title: 'Voyageurs et Nomades',
            description: 'Danger de vol dans les domiciles inoccupés',
            icon: 'mdi:map',
            points: [
                'Le GPS publié indique une maison vide pendant le voyage',
                'Les données d\'équipement attirent les délinquents',
                'Les historiques de voyage révèlent des habitudes'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Comment Fonctionne cet Outil', level: 3 },
    { type: 'list', items: [
        '<strong>1. Sélectionnez vos images :</strong> Faites glisser des photos ou utilisez le sélecteur. Vous pouvez en traiter plusieurs simultanément.',
        '<strong>2. Analyse automatique :</strong> L\'outil détecte et affiche toutes les métadonnées présentes (GPS, modèle d\'appareil, date, etc.).',
        '<strong>3. Nettoyage instantané :</strong> En un clic, il supprime 100 % des métadonnées nuisibles.',
        '<strong>4. Téléchargement sécurisé :</strong> Recevez des images anonymisées prêtes à être partagées sans risque.',
        '<strong>5. Aucun résidu :</strong> L\'image propre conserve toute sa qualité visuelle d\'origine.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Technologie de Confidentialité', icon: 'mdi:shield-check', html: 'Cet outil utilise l\'<strong>API Canvas du navigateur</strong> pour créer une copie propre de l\'image pixel par pixel, garantissant que :<br><br>- Aucune donnée n\'est envoyée aux serveurs<br>- Votre image ne quitte jamais votre appareil<br>- Traitement 100 % anonyme et sécurisé<br>- Vous pouvez l\'utiliser même sans connexion internet (après le chargement initial)' },

    { type: 'title', text: 'Quelles Données sont Spécifiquement Supprimées ?', level: 3 },
    { type: 'table', headers: ['Type de Métadonnées', 'Exemples', 'Risque'], rows: [
        ['EXIF (Échangeable)', 'GPS, ISO, Ouverture, Vitesse d\'Obturation, Modèle d\'Appareil', 'CRITIQUE'],
        ['IPTC (Publication)', 'Copyright, Auteur, Mots-clés, Lieu de la Scène', 'ÉLEVÉ'],
        ['XMP (XML)', 'Historique d\'Édition, Logiciel Utilisé, Modifications Faites', 'MOYEN'],
        ['Données de Fichier de Base', 'Date de Création, Heure Exacte, Appareil', 'ÉLEVÉ']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Confidentialité Totale - Traitement 100 % par navigateur',
            con: 'Nécessite un navigateur moderne avec support JavaScript'
        },
        {
            pro: 'Instantané - nettoyer une photo prend moins d\'une seconde',
            con: 'Le traitement de grandes photos peut être lent sur les appareils anciens'
        },
        {
            pro: 'Zéro Perte de Qualité - ne supprime que les données techniques',
            con: 'Ne modifie pas l\'image (recadrage, rotations, etc.)'
        },
        {
            pro: 'Totalement Gratuit sans Limites - traitez des photos illimitées',
            con: 'Pas de support premium ni de stockage dans le cloud'
        }
    ], proTitle: 'Avantages Clés', conTitle: 'Limitations' },

    { type: 'tip', title: 'Conseil de Sécurité Numérique', html: '<strong>Nettoyez vos photos AVANT de les publier</strong> sur n\'importe quel réseau social. Même si vous supprimez une publication, les métadonnées ont pu être indexées par des moteurs de recherche ou des archives. Mieux vaut prévenir que guérir. Prenez l\'habitude : <br><br><em>Photo → Nettoyer EXIF → Publier</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Risques Réels du Non-Nettoyage', icon: 'mdi:alert-circle', badge: 'Sécurité Critique', html: '<strong>Cas documentés :</strong><br>- Parents publiant des photos d\'enfants - les prédateurs ont suivi le GPS<br>- Photographes voyageurs - maisons cambriolées pendant leur absence<br>- Influenceurs - lieux de résidence identifiés par des fans obsessifs<br><br>Ce n\'est pas de la paranoïa : c\'est une hygiène numérique de base en 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Norme qui stocke des métadonnées techniques dans les fichiers image : GPS, données d\'appareil, réglages d\'exposition. Présent dans environ 90 % des photos numériques sans intention de l\'utilisateur.'
        },
        {
            term: 'Coordonnées GPS',
            definition: 'Latitude et longitude précises de l\'emplacement exact où la photo a été prise. Combinées aux réseaux sociaux, elles permettent un suivi physique des personnes.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Métadonnées de publication lisibles : copyright, auteur, mots-clés, description. Norme en photographie professionnelle.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Format XML qui enregistre l\'historique des modifications dans des logiciels comme Lightroom ou Photoshop. Peut révéler toutes les éditions effectuées.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Technique de collecte d\'informations publiques (réseaux sociaux, métadonnées, registres) pour profiler des personnes à leur insu.'
        },
        {
            term: 'Anonymisation Numérique',
            definition: 'Processus de suppression ou d\'offuscation des informations identifiables : localisation, appareil, modèles de comportement. Essentiel pour la vie privée en ligne.'
        }
    ] },

    { type: 'message', title: 'Votre Vie Privée est votre Responsabilité', ariaLabel: 'Informations sur la confidentialité et les droits des données', html: 'Nous ne stockons, ne traitons ni ne partageons vos images. <strong>Vous avez le contrôle total.</strong> Toutes les opérations se déroulent exclusivement dans votre navigateur. Lorsque vous fermez cet onglet, aucune trace de votre activité ne subsiste. Voici comment protéger votre vie privée sur internet : des outils qui respectent vos données.' },

    { type: 'title', text: 'Conclusion : Partagez sans Traces', level: 3 },
    { type: 'paragraph', html: 'Protéger votre identité numérique commence par de petits détails. Nettoyer vos photos avant de les publier est une <strong>habitude d\'hygiène numérique essentielle</strong> en 2026. Cela ne protège pas seulement votre position : cela protège votre famille, vos biens et votre vie privée professionnelle. Une photo apparemment innocente peut en dire plus sur vous que vous ne l\'auriez jamais imaginé.' }
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
    faqTitle: "Frequently Asked Questions",
    faq,
    bibliography,
    bibliographyTitle: "References",
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'calculatrice-qualite-impression-pixels-cm-dpi';
const title = 'Calculatrice de Qualité d\'Impression: Pixels en CM et DPI';
const description = 'Calculez la taille d\'impression maximale de vos photos en fonction de leur résolution. Convertissez les pixels en centimètres et en pouces pour une impression professionnelle.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analyser la Résolution",
    dropSubtitle: "Faites glisser votre image pour calculer sa taille d'impression.",
    resultsTitle: "Spécifications du Fichier",
    dpiDensityLabel: "Densité d'Impression Souhaitée (DPI)",
    dpiPointsLabel: "points par pouce",
    maxPrintTitle: "Taille d'Impression Maximale",
    standardFormatsTitle: "Formats Standards Supportés",
    formatColumn: "Format",
    measureColumn: "Mesures",
    supportColumn: "Supporté ?",
    qualityExcellent: "Qualité Excellente",
    qualityGood: "Bonne Qualité",
    qualityFair: "Qualité Écran",
    qualityPoor: "Non Adapté",
    qualityExcellentDesc: "Idéal pour les revues d'art, les livres de photographie et la visualisation rapprochée.",
    qualityGoodDesc: "Suffisant pour les posters et la visualisation à distance moyenne.",
    qualityFairDesc: "Adapté pour la visualisation numérique ou les panneaux lointains.",
    qualityPoorDesc: "L'image aura l'air pixelisée. L'impression n'est pas recommandée.",
    unitCm: "cm",
    unitInches: "po",
    dpiScreenLabel: "Écran",
    dpiNewspaperLabel: "Journal",
    dpiPrintLabel: "Impression",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Carte Postale",
    formatQuartilla: "Quille",
    formatFolio: "Folio",
    formatDoubleFolio: "Double Folio",
    formatSmallPoster: "Petit Poster",
    formatLargePoster: "Grand Poster",
    formatPlane: "Plane",
    supportedText: "Oui (Couvert)",
    notSupportedPrefix: "Non (",
    invalidImageError: "Veuillez sélectionner une image valide"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "Qu'est-ce que le DPI et pourquoi est-ce important ?",
        answer: "Le DPI (Dots Per Inch) indique combien de points d'encre l'imprimante mettra dans un pouce linéaire. Plus le DPI est élevé, plus l'image est nette, mais plus la taille physique totale couverte par vos pixels sera petite.",
    },
    {
        question: "Quel est le DPI idéal pour imprimer une photo ?",
        answer: "Le standard industriel est de 300 DPI pour une excellente qualité photographique. Pour les impressions de grande taille vues de loin, 150 DPI peut suffire.",
    },
    {
        question: "Puis-je augmenter le DPI de mon image sans perdre en qualité ?",
        answer: "Non. Augmenter le DPI sans changer les pixels réduit simplement la taille de l'impression. Si vous 'inventez' des pixels via un logiciel (upscaling), l'image peut paraître floue.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Téléchargez votre image",
        text: "Chargez la photographie que vous souhaitez imprimer pour connaître ses dimensions en pixels.",
    },
    {
        name: "Ajustez les DPI",
        text: "Faites glisser la barre pour voir comment la taille finale change selon la densité de points (72 à 600 DPI).",
    },
    {
        name: "Vérifiez le format",
        text: "Consultez le tableau des formats standards (A4, A3, etc.) pour voir si votre résolution couvre le papier souhaité.",
    },
    {
        name: "Confirmez la qualité",
        text: "Assurez vous que l'indicateur marque 'Qualité Excellente' avant d'envoyer à l'impression.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "International Paper Sizes (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Guide de résolution d'image - Adobe",
        url: "https://www.adobe.com/fr/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Calcul Professionnel de Résolution pour l\'Impression',
        items: [
            'Convertissez les pixels en centimètres et pouces avec précision',
            'Calculez la taille maximale selon le DPI souhaité',
            'Compatibilité avec les formats standards (A4, A3, etc.)',
            'Guide de 4 niveaux de qualité : Excellente à Non Adapté'
        ]
    },
    { type: 'title', text: 'Guide Ultime de la Qualité d\'Impression et du DPI', level: 2 },
    { type: 'paragraph', html: 'Avez-vous déjà imprimé une photo qui est ressortie floue ou pixelisée ? Le secret réside dans la relation mathématique entre les <strong>Pixels</strong> et le <strong>DPI</strong> (Dots Per Inch). Cet outil calcule la taille maximale exacte à laquelle vous pouvez imprimer vos images sans perdre en qualité professionnelle.' },

    { type: 'stats', items: [
        { value: '300', label: 'DPI Standard Professionnel', icon: 'mdi:target' },
        { value: '100%', label: 'Calculs Précis', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Formats Supportés', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Comprendre le DPI : Pixels vs Points', level: 3 },
    { type: 'paragraph', html: 'La confusion courante est de penser que le DPI et les pixels sont identiques. Ce n\'est pas le cas. Les pixels sont DANS votre fichier numérique. Le DPI est la façon dont l\'imprimante les convertit en encre sur le papier.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch) :</strong> Combien de points d\'encre l\'imprimante place dans un pouce linéaire (2,54 cm).',
        '<strong>Pixels :</strong> Petits carrés de données dans votre fichier numérique. Une photo de 3000x2000 pixels possède une information constante, quel que soit le DPI.',
        '<strong>La Formule :</strong> Taille d\'impression (pouces) = Pixels / DPI. Exemple : 3000 pixels / 300 DPI = 10 pouces (25,4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Niveaux de Qualité DPI Expliqués', level: 3 },
    { type: 'table', headers: ['DPI', 'Qualité Visuelle', 'Cas d\'Utilisation', 'Distance de Vue'], rows: [
        ['600+ DPI', 'Excellente (Parfait)', 'Livres d\'art, revues de luxe, photographie fine', 'Moins de 10 cm'],
        ['300-400 DPI', 'Excellente (Professionnel)', 'Photographie, livres, catalogues', '20-30 cm (main)'],
        ['150-200 DPI', 'Bonne (Impression Web)', 'Posters, calendriers, visualisation moyenne', '1-2 mètres'],
        ['72-100 DPI', 'Écran (Moyen)', 'Panneaux publicitaires, affiches lointaines', '5+ mètres'],
        ['10-30 DPI', 'Bas (Non Adapté)', 'Panneaux géants, vue extrêmement lointaine', '50+ mètres']
    ] },

    { type: 'card', title: 'La Règle d\'Or du 300 DPI', html: 'Pour l\'impression photographique et éditoriale professionnelle, le standard de l\'industrie est de <strong>300 DPI</strong>. Cela garantit que l\'œil humain à une distance normale (20-30 cm) ne perçoive pas les points d\'encre individuels. En dessous de 300 DPI, la grille de pixels devient visible.' },

    { type: 'comparative', items: [
        {
            title: 'Photographie Main (Photos 10x15)',
            description: '300 DPI obligatoire - se voit de près',
            icon: 'mdi:image',
            points: [
                'À 3000x2000 pixels = 10x6,7 pouces maximum',
                'Qualité Excellente garantie',
                'Standard pour albums et cadeaux'
            ]
        },
        {
            title: 'Poster Mural A3 (30x42 cm)',
            description: '150 DPI suffisant - se voit à distance',
            icon: 'mdi:wall-fire',
            points: [
                'Visualisé de 1 à 2 mètres',
                'Moins de pixels nécessaires',
                'Économisez sur la qualité de la caméra'
            ],
            highlight: true
        },
        {
            title: 'Panneau Publicitaire (200x300 cm)',
            description: '15-30 DPI - se voit à plusieurs mètres',
            icon: 'mdi:sign',
            points: [
                'Observé à plus de 20 mètres de distance',
                'Même une basse résolution rend bien',
                'Optimise les fichiers de grande taille'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Préparation des Fichiers pour l\'Impression Professionnelle', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMJN vs RVB : Les imprimantes utilisent de l\'encre (CMJN), les écrans de la lumière (RVB). Convertissez pour éviter les mauvaises surprises.',
            con: 'Les couleurs peuvent changer lors de la conversion - prévisualisez d\'abord'
        },
        {
            pro: 'Fond Perdu (Bleed) : Ajoutez 3 mm de chaque côté si l\'image doit atteindre le bord du papier',
            con: 'Sans fond perdu, les bords coupés peuvent rester blancs'
        },
        {
            pro: 'L\'Upscaling NE FONCTIONNE PAS : Augmenter les pixels dans Photoshop ajoute de fausses informations (lissage)',
            con: 'Si vous devez imprimer en grand, il vous faut la photo originale haute résolution'
        },
        {
            pro: 'Formats : TIFF sans compression ou JPEG haute qualité ; vectoriel (AI, EPS) pour les logos',
            con: 'Le PNG ne supporte pas nativement le CMJN dans la plupart des imprimeries'
        }
    ], proTitle: 'Recommandations', conTitle: 'Contre-indications' },

    { type: 'diagnostic', variant: 'warning', title: 'Erreur Commune : Le Mythe de l\'Upscaling', icon: 'mdi:alert', badge: 'Critique', html: '<strong>N\'augmentez PAS le DPI dans Photoshop sans changer les pixels.</strong> Passer de 72 DPI à 300 DPI réduit simplement la taille physique car le nombre de pixels reste le même. Si vous "ajoutez des pixels" par interpolation, l\'image sera floue. Il faut des pixels RÉELS dès l\'origine.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Mesure de résolution en impression : combien de points d\'encre par pouce linéaire (2,54 cm). 300 DPI = 90 000 points par pouce carré.'
        },
        {
            term: 'CMJN',
            definition: 'Espace colorimétrique d\'impression : Cyan, Magenta, Jaune, Noir (CMYK en anglais). Basé sur l\'encre soustractive.'
        },
        {
            term: 'Fond Perdu (Bleed)',
            definition: 'Zone supplémentaire (typiquement 3 mm) imprimée puis découpée. Assure que l\'image atteint le bord sans marges blanches.'
        },
        {
            term: 'Résolution Native',
            definition: 'Pixels RÉELS capturés par l\'appareil, sans manipulation. Augmenter le DPI ne génère pas de "résolution native".'
        },
        {
            term: 'Interpolation (Upscaling)',
            definition: 'Algorithme inventant de nouveaux pixels à partir de l\'existant. Utile pour de petits agrandissements, mais perd en netteté.'
        }
    ] },

    { type: 'message', title: 'Précision Technique pour des Résultats Professionnels', ariaLabel: 'Informations sur les calculs d\'impression', html: 'Notre calculatrice convertit les pixels en centimètres en tenant compte des normes internationales (ISO 216 pour le papier). C\'est l\'outil idéal pour valider vos fichiers avant l\'impression.' },

    { type: 'title', text: 'Conclusion : Imprimez Sans Mauvaises Surprises', level: 3 },
    { type: 'paragraph', html: 'La différence entre une impression magnifique et décevante réside dans la relation entre pixels et DPI. Utilisez cet outil pour valider vos fichiers AVANT de passer à l\'imprimerie.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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

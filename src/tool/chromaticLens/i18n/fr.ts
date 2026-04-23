import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'lentille-chromatique-extraction-palette-couleurs-ligne';
const title = 'Lentille Chromatique: Extraction de Palette de Couleurs en Ligne';
const description = 'Extrayez gratuitement des palettes de couleurs professionnelles à partir de n\'importe quelle image. Identifiez les couleurs dominantes à l\'aide d\'algorithmes mathématiques.';

const ui: ChromaticLensUI = {
    dropTitle: "Analyser les Couleurs",
    dropSubtitle: "Faites glisser une image pour extraire son ADN chromatique.",
    processingLabel: "Extraction de la palette...",
    paletteTitle: "Palette Extraite",
    copyLabel: "Copier HEX",
    copiedLabel: "Copié !",
    colorCountLabel: "Nombre de couleurs",
    changeImage: "Changer d'image"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "Comment fonctionne l'extraction des couleurs ?",
        answer: "Nous utilisons l'algorithme 'Median Cut', qui regroupe les pixels de l'image en fonction de leur proximité dans l'espace colorimétrique RVB pour trouver les tons les plus représentatifs.",
    },
    {
        question: "Puis-je copier les couleurs dans mon éditeur de design ?",
        answer: "Oui, en cliquant sur chaque couleur, le code HEX sera automatiquement copié dans votre presse-papiers, prêt à être collé dans Photoshop, Figma ou CSS.",
    },
    {
        question: "Quels types d'images puis-je analyser ?",
        answer: "N'importe quel fichier JPG, PNG ou WebP. Le traitement est local, les images lourdes seront donc analysées rapidement sans consommer de données réseau.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Charger l'image",
        text: "Téléchargez la photographie dont vous souhaitez extraire l'inspiration chromatique.",
    },
    {
        name: "Ajuster la précision",
        text: "Sélectionnez le nombre de couleurs dominantes que l'outil doit identifier (de 3 à 12).",
    },
    {
        name: "Analyser le résultat",
        text: "La palette apparaîtra instantanément avec ses codes hexadécimaux correspondants.",
    },
    {
        name: "Copier et utiliser",
        text: "Cliquez sur les tons pour les enregistrer et les appliquer à votre projet de conception.",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Extraction Intelligente de Palette de Couleurs',
        items: [
            'Algorithme Median Cut professionnel pour l\'analyse des couleurs',
            'Extrayez 3 à 12 couleurs dominantes de n\'importe quelle image',
            'Codes HEX cliquables directement vers le presse-papiers',
            'Traitement 100 % local - idéal pour les créatifs'
        ]
    },
    { type: 'title', text: 'Extraction de Palettes de Couleurs : Science et Design', level: 2 },
    { type: 'paragraph', html: 'Vous êtes-vous déjà demandé pourquoi une photographie de film semble si harmonieuse ? Ce n\'est pas un hasard ; c\'est la théorie des couleurs en action. Lentille Chromatique vous permet d\'extraire cette harmonie directement du pixel, en la transformant en codes HEX utilisables dans vos projets de design.' },

    { type: 'stats', items: [
        { value: 'Instantané', label: 'Analyse de Couleur', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Confidentialité Locale', icon: 'mdi:lock' },
        { value: 'RVB', label: 'Espace Colorimétrique Précis', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'L\'Algorithme Median Cut Expliqué', level: 3 },
    { type: 'paragraph', html: 'L\'extraction intelligente de palettes n\'est pas un simple échantillonnage aléatoire de pixels. Elle utilise l\'algorithme Median Cut, une technique de partitionnement récursif qui garantit une représentation fidèle :' },
    { type: 'list', items: [
        '<strong>Division Récursive :</strong> Le "cube de couleur" RVB de l\'image est divisé récursivement en boîtes plus petites.',
        '<strong>Équilibre de Volume :</strong> Chaque partition cherche à regrouper des pixels du même espace colorimétrique avec des volumes similaires.',
        '<strong>Moyenne Pondérée :</strong> La couleur résultante de chaque boîte est la moyenne de tous les pixels qu\'elle contient.',
        '<strong>Représentation Fidèle :</strong> Les couleurs dominantes reflètent l\'atmosphère visuelle réelle de l\'image, pas un simple échantillon.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Flux de Travail Créatif', html: 'Idéal pour les développeurs web, les designers UX/UI, les artistes numériques et les créatifs cherchant à capturer instantanément l\'essence visuelle d\'une photographie, d\'un film ou d\'une référence visuelle pour l\'appliquer dans leurs interfaces, illustrations ou palettes de marque.' },

    { type: 'title', text: 'Cas d\'Utilisation en Design Numérique', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Designers UX/UI',
            description: 'Extrayez des palettes d\'images hero pour créer des interfaces cohérentes',
            icon: 'mdi:palette',
            points: [
                'Couleurs de fond harmonieuses',
                'Boutons et éléments secondaires',
                'Contraste calculé automatiquement'
            ]
        },
        {
            title: 'Développeurs Web',
            description: 'Créez des feuilles de style CSS directement depuis des références visuelles',
            icon: 'mdi:code-braces',
            points: [
                'Copier HEX directement vers CSS',
                'Variables de couleur en SCSS/CSS',
                'Thèmes cohérents sans conception préalable'
            ],
            highlight: true
        },
        {
            title: 'Artistes Numériques et Illustrateurs',
            description: 'Capturez des références chromatiques de films, de la nature ou de l\'art',
            icon: 'mdi:brush',
            points: [
                'Palettes de référence de chefs-d\'œuvre',
                'Études de couleurs cinématographiques',
                'Inspiration visuelle immédiate'
            ]
        },
        {
            title: 'Spécialistes en Branding',
            description: 'Développez des identités visuelles basées sur des photographies de référence',
            icon: 'mdi:tag-multiple',
            points: [
                'Extraire les couleurs de marque des images',
                'Créer des guides chromatiques professionnels',
                'Assurer la cohérence visuelle'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Théorie des Couleurs Appliquée', level: 3 },
    { type: 'table', headers: ['Concept de Couleur', 'Définition', 'Application Pratique'], rows: [
        ['Harmonie Chromatique', 'Combinaison de couleurs visuellement équilibrée', 'Identité visuelle cohérente en UI'],
        ['Contraste', 'Différence de luminosité entre les couleurs', 'Lisibilité et hiérarchie visuelle'],
        ['Saturation', 'Intensité colorée d\'un ton', 'Professionnalisme (basse) vs Énergie (haute)'],
        ['Température de Couleur', 'Couleurs chaudes (rouges) vs froides (bleues)', 'Psychologie émotionnelle du design'],
        ['Palette Monochromatique', 'Variations d\'un seul ton', 'Élégance et minimalisme']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Précision mathématique dans l\'extraction - pas une sélection visuelle approximative',
            con: 'Des couleurs peu visibles peuvent être incluses si elles ont beaucoup de pixels'
        },
        {
            pro: 'Copie instantanée dans le presse-papiers - intégration parfaite avec le flux de travail',
            con: 'Nécessite un navigateur moderne compatible avec l\'API Canvas'
        },
        {
            pro: 'Confidentialité totale - analyse 100 % locale sans envoi de données',
            con: 'Aucun enregistrement d\'historique des analyses précédentes'
        },
        {
            pro: 'Compatible avec n\'importe quel format d\'image numérique',
            con: 'Les couleurs finales dépendent de la compression et de la qualité de l\'image'
        }
    ], proTitle: 'Avantages', conTitle: 'Limitations' },

    { type: 'diagnostic', variant: 'success', title: 'Représentation Réaliste de la Couleur', icon: 'mdi:check-circle-outline', badge: 'Algorithme Avancé', html: 'Contrairement aux outils qui échantillonnent simplement des pixels aléatoires, notre système utilise l\'algorithme Median Cut qui pondère l\'ensemble du nombre de pixels de chaque ton, garantissant que la palette résultante reflète fidèlement l\'atmosphère visuelle et la psychologie des couleurs de l\'image originale.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Algorithme de quantification de couleur qui divise récursivement l\'espace RVB en boîtes, assurant une distribution uniforme. Utilisé historiquement dans les GIF.'
        },
        {
            term: 'Espace Colorimétrique RVB',
            definition: 'Modèle de couleur basé sur le rouge, le vert et le bleu. Chaque couleur est représentée comme une combinaison de ces trois valeurs (0-255).'
        },
        {
            term: 'Code HEX',
            definition: 'Notation hexadécimale à 6 chiffres (#RRGGBB) représentant la couleur sur le web. Universel en CSS, Figma et Adobe.'
        },
        {
            term: 'Saturation de la Couleur',
            definition: 'Intensité ou pureté de la couleur. Une saturation élevée = couleur vive ; une saturation basse = couleur grisâtre.'
        },
        {
            term: 'Harmonie Chromatique',
            definition: 'Sélection et combinaison de couleurs résultant en un ensemble visuellement agréable.'
        }
    ] },

    { type: 'message', title: 'Analyse Chromatique Professionnelle', ariaLabel: 'Informations techniques sur l\'analyse des couleurs', html: 'Lentille Chromatique transforme l\'analyse visuelle manuelle en précision algorithmique. Elle ne se contente pas d\'extraire des couleurs : elle capture l\'essence émotionnelle et visuelle de toute image, la plaçant directement dans votre presse-papiers sous forme de codes HEX prêts à l\'emploi. Confidentialité totale, analyses illimitées.' },

    { type: 'title', text: 'Concevez Depuis l\'Inspiration Visuelle', level: 3 },
    { type: 'paragraph', html: 'La meilleure palette de couleurs est celle qui capture l\'intention visuelle de votre référence. Lentille Chromatique automatise ce qui était auparavant un processus manuel : observer, analyser, noter. Désormais, faites simplement glisser une image et obtenez des codes HEX professionnels en quelques secondes.' }
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

export const content: ChromaticLensLocaleContent = {
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

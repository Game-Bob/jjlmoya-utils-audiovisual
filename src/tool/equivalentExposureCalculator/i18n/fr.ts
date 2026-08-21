import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculateur-exposition-equivalente';
const title = 'Calculateur Exposition Equivalente Triangle Exposition';
const description = 'Calculez les réglages exposition équivalents pour ouverture, la vitesse obturation et ISO afin de maintenir une valeur EV constante.';

const ui: EquivalentExposureUI = {
  "title": "Calculateur Exposition Equivalente",
  "subtitle": "Calculez les paramètres réciproques ouverture, de vitesse et ISO pour maintenir une exposition constante.",
  "baseSettingsTitle": "Réglage Exposition de Base",
  "targetSettingsTitle": "Réglage Équivalent Cible",
  "lockModeLabel": "Calculer Automatiquement",
  "isoLabel": "Sensibilité ISO",
  "apertureLabel": "Ouverture (valeur f)",
  "shutterLabel": "Vitesse Obturation",
  "lockIsoOption": "Calculer ISO (Conserver Ouverture et Vitesse)",
  "lockApertureOption": "Calculer Ouverture (Conserver ISO et Vitesse)",
  "lockShutterOption": "Calculer Vitesse (Conserver ISO et Ouverture)",
  "presetsTitle": "Préréglages Rapides",
  "presetSunny16": "Règle du Soleil 16",
  "presetOvercast": "Jour Nuageux",
  "presetIndoor": "Lumière Intérieure",
  "presetNight": "Photographie Nocturne",
  "targetEvLabel": "EV Cible"
};

const faq: FAQItem[] = [
  {
    "question": "Qu'est-ce que l'Indice d'Exposition (EV) ?",
    "answer": "L'Indice d'Exposition (EV) est une échelle logarithmique combinant ouverture et vitesse à ISO 100. Sa formule est EV = log2(N^2 / t)."
  },
  {
    "question": "Comment l'exposition équivalente maintient-elle la luminosité ?",
    "answer": "En compensant les valeurs de diaph entre ISO, vitesse et ouverture, la quantité de lumière captée par le capteur reste constante."
  },
  {
    "question": "Qu'est-ce que la règle du Soleil 16 ?",
    "answer": "À f/16 par journée ensoleillée, la vitesse d'obturation est l'inverse de la valeur ISO (ex. ISO 100 nécessite 1/100s)."
  },
  {
    "question": "Comment l'ouverture modifie-t-elle la profondeur de champ ?",
    "answer": "Ouvrir le diaph diminue la profondeur de champ pour isoler le sujet avec un flou d'arrière-plan."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Sélectionner les Réglages de Base",
    "text": "Choisissez les valeurs de base ISO, ouverture et vitesse de votre scène."
  },
  {
    "name": "Sélectionner le Mode de Calcul",
    "text": "Choisissez la variable à calculer automatiquement."
  },
  {
    "name": "Ajuster les Paramètres Créatifs",
    "text": "Modifiez vos valeurs cibles pour voir la réciprocité en temps réel."
  },
  {
    "name": "Évaluer les Effets Visuels",
    "text": "Inspectez le schéma vectoriel pour la profondeur de champ et le bruit."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Caractéristiques de Réciprocité d\'Exposition',
    items: [
    "Calcul exact au 1/3 d'IL entre ISO, Ouverture et Vitesse",
    "Visualiseur vectoriel interactif du Triangle d'Exposition en SVG",
    "Indicateurs de profondeur de champ, de flou de bougé et de bruit",
    "Préréglages en un clic pour Soleil 16, Nuageux et Nuit"
],
  },
  { type: 'title', text: 'Comprendre le Triangle d\'Exposition', level: 2 },
  {
    type: 'paragraph',
    html: 'L\'exposition est régie par l\'ouverture, la vitesse d\'obturation et l\'ISO. Toute modification d\'un paramètre exige un ajustement réciproque.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Lumière du Jour (Soleil 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Précision par Tiers de Diaphragme', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Ratio de Distribution de Mise au Point', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Objectif Créatif', level: 3 },
  {
    type: 'table',
    headers: [
    "Objectif Créatif",
    "Réglage d'Ouverture",
    "Réglage de Vitesse",
    "Réglage ISO",
    "Conséquence Visuelle"
],
    rows: [
    [
        "Figer l'Action",
        "Ouvrir (f/2.8)",
        "Plus rapide (1/1000s)",
        "Garder constant",
        "Faible profondeur de champ"
    ],
    [
        "Netteté Paysage",
        "Fermer (f/11)",
        "Plus lente (1/30s)",
        "Garder constant",
        "Trépied requis"
    ],
    [
        "Basse Lumière à la Main",
        "Ouvrir au max (f/1.4)",
        "Limite à la main (1/60s)",
        "Augmenter (ISO 3200)",
        "Bruit numérique accru"
    ],
    [
        "Qualité Studio Maximale",
        "Ouverture optimale (f/8)",
        "Synchro Flash (1/200s)",
        "ISO 100 de base",
        "Plage dynamique maximale"
    ]
],
  },
  { type: 'title', text: 'Impact Créatif des Réglages Équivalents', level: 3 },
  {
    type: 'paragraph',
    html: 'Bien que les expositions équivalentes produisent la même luminosité, le rendu visuel diffère :',
  },
  {
    type: 'list',
    items: [
    "<strong>Ouverture :</strong> Contrôle la profondeur de champ et le flou d'arrière-plan.",
    "<strong>Vitesse d'obturation :</strong> Contrôle la netteté des sujets en mouvement.",
    "<strong>ISO :</strong> Amplifie le signal du capteur au prix du bruit numérique."
],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Réglage Arrière plan Flou',
        description: 'Grande ouverture pour portraits',
        icon: 'mdi:account-box-outline',
        points: [
          "Ouverture f/1.4 à f/2.8",
          "Vitesse rapide",
          "Bokeh doux"
],
      },
      {
        title: 'Réglage Paysage Profond',
        description: 'Petite ouverture pour netteté totale',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Plage idéale f/8 à f/11",
          "Vitesse lente sur trépied",
          "Résolution optique maximale"
],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Précision par tiers d\'IL conforme aux molettes d\'appareil',
        con: 'Ne prend pas en compte l\'échec de réciprocité du film ou les T-stops',
      },
      {
        pro: 'Visualisation SVG dynamique avec rendu de netteté',
        con: 'Nécessite d\'ajuster le facteur de cadrage manuellement',
      },
    ],
    proTitle: 'Forces Techniques',
    conTitle: 'Limites Physiques',
  },
  {
    type: 'glossary',
    items: [
    {
        "term": "Valeur d'Exposition (EV)",
        "definition": "Échelle logarithmique combinant ouverture et vitesse."
    },
    {
        "term": "Loi de Réciprocité",
        "definition": "Principe selon lequel l'exposition est le produit de l'intensité par le temps."
    },
    {
        "term": "Valeur d'IL (Stop)",
        "definition": "Unité relative correspondant au doublement ou à la réduction de moitié de la lumière."
    }
],
  },
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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

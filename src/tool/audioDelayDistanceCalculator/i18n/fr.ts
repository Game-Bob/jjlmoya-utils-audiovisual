import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculateur-delai-audio-distance-temperature';
const title = 'Calculateur de Délai Audio par Distance et Température';
const description = 'Calculez le temps de délai acoustique, la vitesse du son dans l air, le déphasage, les échantillons numériques et l atténuation SPL pour les tours de délai PA.';

const ui: AudioDelayUI = {
  title: 'Calculateur de Délai Audio par Distance et Température',
  subtitle: 'Calculez le temps de délai de propagation du son, le déphasage acoustique, le nombre d échantillons et l atténuation SPL pour les enceintes de rappel PA.',
  unitSystemLabel: 'Système d Unités',
  unitMetric: 'Métrique (m, °C)',
  unitImperial: 'Impérial (ft, °F)',
  distanceLabel: 'Distance à l Enceinte de Rappel',
  temperatureLabel: 'Température de l Air Ambiant',
  humidityLabel: 'Humidité Relative',
  sampleRateLabel: 'Fréquence d Échantillonnage de la Console',
  presetsTitle: 'Préréglages Rapides de Scène',
  presetSummerFestival: 'Festival d Été (35°C, 40m)',
  presetIndoorConcert: 'Concert en Salle (20°C, 25m)',
  presetTheater: 'Théâtre Acoustique (22°C, 15m)',
  presetWinterOutdoor: 'Événement Extérieur Hiver (5°C, 50m)',
  resultDelayMs: 'Temps de Délai',
  resultSamples: 'Échantillons Numériques',
  resultSpeed: 'Vitesse du Son',
  resultSplLoss: 'Atténuation SPL',
  phaseStatusLabel: 'État d Alignement de Phase Acoustique',
  statusDirectZone: 'Synchronisation Directe de Front d Onde',
  statusHaasZone: 'Zone de Précédence de Haas',
  statusEchoZone: 'Zone d Écho Perceptible',
  statusExtremeZone: 'Décalage Crítique de Délai',
  advicePhaseAligned: 'Les signaux sont acoustiquement synchronisés à moins de 5ms. Traitement de délai minimal requis.',
  adviceMinorHaas: 'Le son arrive dans la zone de Haas (5-35ms). La localisation naturelle reste sur la scène principale.',
  adviceHaasDelayNeeded: 'La tour de rappel nécessite un décalage temporel exact pour éviter la perception d écho distinct.',
  adviceCriticalDelayNeeded: 'Décalage élevé. Appliquez un délai d échantillon précis pour éviter le filtrage en peigne complet.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Principale',
  delaySpeakerLabel: 'Tour de Rappel',
  audienceLabel: 'Zone Public',
  haasZoneLegend: 'Zone de Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Pourquoi la température de l air est-elle importante lors du calcul du délai audio?',
    answer: 'La vitesse du son dépend directement de la température. À 0 degré Celsius le son se déplace à 331.3 mètres par seconde alors qu à 30 degrés Celsius il accélère à environ 349 mètres par seconde.',
  },
  {
    question: 'Qu est-ce que l Effet Haas en sonorisation?',
    answer: 'L Effet Haas ou effet de précédence dicte que l ouïe humaine localise le son vers le premier signal acoustique arrivé si les signaux secondaires arrivent dans les 5 à 35 millisecondes.',
  },
  {
    question: 'Comment convertir le temps de délai en échantillons de console numérique?',
    answer: 'Multipliez le temps de délai en secondes par la fréquence d échantillonnage de la console numérique. Par exemple 50 millisecondes à 48 kHz équivalent à 2400 échantillons.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Mesurer la Distance Physique',
    text: 'Mesurez la distance entre la PA principale et la tour de rappel avec un télémètre laser.',
  },
  {
    name: 'Vérifier la Température Ambiante',
    text: 'Saisissez la température actuelle de l air du lieu.',
  },
  {
    name: 'Sélectionner la Fréquence d Échantillonnage',
    text: 'Configurez la fréquence de votre console numérique (44.1 kHz, 48 kHz, 96 kHz ou 192 kHz).',
  },
  {
    name: 'Appliquer le Délai Calculé',
    text: 'Insérez le temps de délai en millisecondes ou échantillons dans la matrice du processeur.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Fonctionnalités d Alignement de Délai Acoustique',
    items: [
      'Calcul précis de la vitesse du son selon la température et l humidité',
      'Conversion instantanée en échantillons numériques de console',
      'Évaluation de la zone d effet Haas et alignement de phase',
      'Estimation de l atténuation de pression acoustique SPL en décibels',
    ],
  },
  { type: 'title', text: 'Propagation du Son et Thermodynamique Atmosphérique', level: 2 },
  {
    type: 'paragraph',
    html: 'Le son se propage dans l air sous forme d ondes mécaniques de pression. Sa vitesse est principalement régie par la température de l air.',
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Précision d échantillon sous la milliseconde pour consoles numériques',
        con: 'Nécessite des mesures de distance physique précises',
      },
      {
        pro: 'Prend en compte la température ambiante et l humidité relative',
        con: 'Les gradients de vent en extérieur nécessitent une surveillance continue',
      },
    ],
    proTitle: 'Avantages',
    conTitle: 'Considérations',
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

export const content: ToolLocaleContent<AudioDelayUI> = {
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

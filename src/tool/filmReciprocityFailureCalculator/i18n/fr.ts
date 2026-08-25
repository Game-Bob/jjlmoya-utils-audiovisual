import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'calculateur-echec-reciprocite-film-argentique';
const title = 'Calculateur d\'Échec de Réciprocité Film Argentique (Effet Schwarzschild)';
const description = 'Corrigez les poses longues en photographie argentique avec les facteurs officiels des films ILFORD et KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Questions sur l\'échec de réciprocité en argentique',
  bibliographyTitle: 'Sources',
  studyLabel: 'Étude de pose longue',
  studyTitle: 'Laissez le temps à l\'émulsion',
  studyText: 'Le posemètre mesure la lumière reçue instantanément. L\'émulsion demande plus de temps pour obtenir la même densité.',
  filmLabel: 'Choisir un film argentique',
  filmHint: 'Utilisez le facteur publié pour la pellicule ILFORD ou KENTMERE sélectionnée.',
  measuredTimeLabel: 'Entrer le temps du posemètre',
  measuredTimeHint: 'La correction s\'applique à partir de 1 seconde.',
  secondsUnit: 'secondes',
  filmMenuLabel: 'Menu des pellicules',
  presetsLabel: 'Préréglages de terrain',
  presetShort: 'Limite de réciprocité',
  presetNight: 'Rue nocturne',
  presetDeepNight: 'Nuit profonde',
  resultLabel: 'Exposition corrigée',
  correctedTimeLabel: 'Temps final recommandé',
  addedTimeLabel: 'Temps supplémentaire',
  correctionStopsLabel: 'Correction en diaphs (EV)',
  correctionFactorLabel: 'Facteur du film',
  noCorrection: 'Aucune correction nécessaire',
  correctionNeeded: 'Correction de réciprocité active',
  longExposure: 'Domaine de la pose longue',
  meterTimeLabel: 'Temps posemètre',
  filmTimeLabel: 'Temps ajusté',
  exposurePathLabel: 'Évolution visuelle de la pose',
  exposurePathText: 'La bande de film s\'allonge du temps mesuré vers le temps réajusté.',
  formulaLabel: 'Équation de calcul',
  formulaText: 'Temps corrigé = temps mesuré élevé à la puissance du facteur.',
  manufacturerNote: 'Facteurs issus de la documentation technique HARMAN. Utilisez le résultat comme base de départ.',
  resetLabel: 'Réinitialiser l\'étude',
  invalidTime: 'Entrez un temps supérieur à zéro.',
  sourceLabel: 'Note du fabricant',
};

const faq: FAQItem[] = [
  {
    question: 'Qu\'est-ce que l\'échec de réciprocité en photographie argentique ?',
    answer: 'L\'échec de réciprocité (effet Schwarzschild) est la baisse de sensibilité du film lors de poses longues. La même quantité de lumière sur une durée prolongée produit moins de densité, nécessitant plus de temps que l\'indication du posemètre.',
  },
  {
    question: 'Comment ce calculateur évalue-t-il le temps corrigé ?',
    answer: 'Il applique l\'équation officielle HARMAN: temps corrigé égal au temps mesuré élevé à la puissance du facteur P. Les temps inférieurs ou égaux à 1 seconde ne subissent pas de correction.',
  },
  {
    question: 'Pourquoi chaque film possède-t-il un facteur différent ?',
    answer: 'L\'efficacité des cristaux d\'halogénure d\'argent dépend de l\'émulsion. HARMAN publie un facteur distinct pour chaque film (HP5+, FP4+, DELTA, KENTMERE).',
  },
  {
    question: 'Le temps calculé garantit-il un négatif parfait ?',
    answer: 'Non. Les poses très longues intègrent d\'autres variables comme l\'imprécision du posemètre, le développement et le contraste. Prenez ce résultat comme une excellente référence et effectuez un bracketting.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Sélectionner le film', text: 'Choisissez le film chargé dans l\'appareil pour appliquer son facteur officiel.' },
  { name: 'Saisir le temps mesuré', text: 'Entrez la valeur indiquée par votre posemètre en secondes.' },
  { name: 'Lire l\'exposition réajustée', text: 'Réglez l\'obturateur sur le nouveau temps corrigé.' },
  { name: 'Fourcher l\'exposition (bracketting)', text: 'Pour les prises de vue nocturnes très longues, réalisez plusieurs poses encadrantes.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Correction documentée pour la pose longue',
    items: [
      'Applique le facteur officiel pour 11 films noir et blanc ILFORD et KENTMERE',
      'Compare le temps du posemètre avec la durée réelle requise par l\'émulsion',
      'Affiche les secondes ajoutées, la compensation en diaphs et le parcours visuel',
      'Propose trois préréglages pratiques pour faciliter les prises de vue nocturnes',
    ],
  },
  { type: 'title', text: 'Pourquoi la pose longue nécessite de corriger la réciprocité', level: 2 },
  {
    type: 'paragraph',
    html: 'Aux vitesses d\'obturation habituelles, la loi de réciprocité indique que l\'exposition est le produit de l\'intensité lumineuse par la durée. En pose longue, l\'émulsion perd en efficacité pour former les centres d\'image latente. Le posemètre donne un temps physiquement exact mais chimiquement trop court.',
  },
  { type: 'title', text: 'L\'équation du fabricant pour le calcul', level: 2 },
  {
    type: 'table',
    headers: ['Film', 'Facteur officiel', 'Exemple à 10 secondes'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 secondes'],
      ['ILFORD FP4+', '1.26', '18.2 secondes'],
      ['ILFORD SFX 200', '1.43', '26.9 secondes'],
      ['KENTMERE 400', '1.30', '20.0 secondes'],
    ],
  },
  {
    type: 'paragraph',
    html: 'Le calculateur utilise Tc = Tm<sup>P</sup>, où Tm est le temps mesuré en secondes, Tc le temps corrigé et P le facteur publié par HARMAN. Jusqu\'à 1 seconde, aucune correction n\'est requise.',
  },
  {
    type: 'tip',
    title: 'Utilisez le résultat comme point de départ',
    html: 'Les poses longues dépendent de multiples facteurs. Les écarts de mesure, le contraste de la scène et le développement influent sur le négatif. Fourchez vos prises de vue importantes autour de la valeur calculée.',
  },
  { type: 'title', text: 'Quand appliquer la correction de réciprocité', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Utilisez des facteurs officiels:</strong> Associez la pellicule aux données fournies par le fabricant.',
      '<strong>Conservez un procédé stable:</strong> Le choix du révélateur et l\'agitation modifient la densité du négatif.',
      '<strong>Fourchez les très poses longues:</strong> Plus le temps est long, plus les essais encadrants sont utiles.',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'fr',
};

export const content: ToolLocaleContent<FilmReciprocityFailureCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};

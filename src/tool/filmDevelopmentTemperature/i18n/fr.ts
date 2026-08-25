import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Questions sur la température de développement du film',
  bibliographyTitle: 'Références principales',
  chooseDocumentedCombination: 'Choisissez une combinaison film et révélateur documentée',
  filmLabel: 'Pellicule photo',
  developerLabel: 'Révélateur',
  dilutionLabel: 'Dilution',
  temperatureLabel: 'Température du révélateur',
  temperatureHelp: 'Entrez la température du révélateur dans la cuve. Le guide part du temps officiel à 20 °C.',
  unitSwitchLabel: 'Unité de température',
  metricLabel: 'Métrique °C',
  imperialLabel: 'Impérial °F',
  currentReadingLabel: 'Mesure en laboratoire',
  baseTimeLabel: 'À 20 °C',
  adjustedTimeLabel: 'Temps initial ajusté',
  temperatureGuideLabel: 'Notes de température sur le terrain',
  temperatureGuideHelp: 'Guide pratique autour de la température mesurée. La ligne surlignée correspond à votre mesure.',
  sourceLabel: 'Combinaison documentée',
  eiLabel: 'Réglage de sensibilité',
  statusCool: 'Bain plus froid',
  statusSteady: 'Proche de la norme',
  statusWarm: 'Bain plus chaud',
  warningShortTime: 'Un temps inférieur à 5 minutes augmente le risque de développement inégal. Choisissez un procédé documenté ou prolongez le temps après vos propres essais.',
  warningOutOfRange: 'Cette mesure est à la limite de la plage recommandée. Maintenez la température stable et vérifiez les données du fabricant.',
  guideNotice: 'C\'est une référence de départ, pas une garantie. L\'agitation, le matériel, le contraste visé et votre procédé personnel modifient le résultat.',
  resetLabel: 'Restaurer la première combinaison documentée',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  currentBadge: 'Actuel',
  belowFiveMinutes: 'Moins de 5 minutes',
  tableTemperature: 'Température',
  tableTime: 'Temps conseillé',
  tableDifference: 'Écart à 20 °C',
  currentRow: 'Actuel',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculateur de Temps de Développement Film par Température',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Ajustez le temps de développement d\'un film noir et blanc selon la température mesurée du révélateur.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'Quelle température de base le calculateur utilise-t-il ?', acceptedAnswer: { '@type': 'Answer', text: 'Chaque combinaison film et révélateur part du temps fabricant officiel à 20 °C pour calculer l\'ajustement selon la température réelle.' } },
    { '@type': 'Question', name: 'Les temps ajustés sont-ils garantis ?', acceptedAnswer: { '@type': 'Answer', text: 'Non. Ce sont des repères pratiques de départ. L\'agitation, le type de cuve, la fraîcheur de la chimie et le contraste voulu influencent le résultat final.' } },
    { '@type': 'Question', name: 'Pourquoi avertir en dessous de 5 minutes ?', acceptedAnswer: { '@type': 'Answer', text: 'Des temps très courts laissent peu de marge pour le remplissage, l\'agitation et le vidage de la cuve, ce qui risque de provoquer un développement hétérogène.' } },
    { '@type': 'Question', name: 'Que faire si mon film ou mon révélateur ne figure pas dans la liste ?', acceptedAnswer: { '@type': 'Answer', text: 'Consultez la fiche technique officielle du fabricant ou une table de développement reconnue. Cet outil n\'invente aucune donnée non documentée.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Ajuster le temps de développement d\'un film selon la température',
  step: [
    { '@type': 'HowToStep', name: 'Sélectionner le film', text: 'Choisissez la pellicule noir et blanc chargée dans votre cuve.' },
    { '@type': 'HowToStep', name: 'Associer le révélateur', text: 'Sélectionnez le révélateur et la dilution exacte prévus par la table.' },
    { '@type': 'HowToStep', name: 'Mesurer la température', text: 'Mesurez et saisissez la température réelle du bain de développement.' },
    { '@type': 'HowToStep', name: 'Appliquer le temps ajusté', text: 'Utilisez le temps ajusté comme base de travail pratique pour votre développement en chambre noire.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'calculateur-temps-developpement-film-temperature',
  title: 'Calculateur de Temps de Développement Film par Température',
  description: 'Ajustez le temps de développement d\'un film noir et blanc selon la température mesurée du révélateur, avec un tableau de référence clair.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Comment compenser le temps de développement selon la température' },
    { type: 'paragraph', html: 'Sélectionnez le duo film et révélateur avec sa dilution documentée dans la table, puis renseignez la température exacte de votre préparation. Le calculateur prend la valeur référence à 20 °C et établit le temps réajusté.' },
    { type: 'title', level: 3, text: 'Utiliser la valeur ajustée comme point de départ' },
    { type: 'paragraph', html: 'La température modifie l\'activité chimique: un révélateur plus chaud demande moins de temps, tandis qu\'un bain plus froid requiert une durée prolongée. Le tableau offre une vue d\'ensemble claire autour de votre mesure.' },
    { type: 'tip', title: 'Gardez un processus rigoureux au laboratoire', html: 'Ne considérez jamais un temps calculé comme une vérité absolue. Le rythme d\'agitation, l\'âge du produit et vos tests personnels restent prépondérants pour la densité du négatif.' },
    { type: 'title', level: 3, text: 'Pourquoi se fier uniquement aux données documentées' },
    { type: 'list', items: ['L\'association du film et du révélateur détermine le grain, le rendu des valeurs et la sensibilité réelle.', 'La dilution modifie l\'épuisement de la chimie et ne peut pas être déduite de façon empirique.', 'Les durées inférieures à 5 minutes exigent une attention accrue car les gestes de remplissage pèsent plus lourd sur le résultat.'] },
  ],
  faq: [
    { question: 'Quelle température de base le calculateur utilise-t-il ?', answer: 'Chaque combinaison film et révélateur part du temps fabricant officiel à 20 °C pour calculer l\'ajustement selon la température réelle.' },
    { question: 'Les temps ajustés sont-ils garantis ?', answer: 'Non. Ce sont des repères pratiques de départ. L\'agitation, le type de cuve, la fraîcheur de la chimie et le contraste voulu influencent le résultat final.' },
    { question: 'Pourquoi avertir en dessous de 5 minutes ?', answer: 'Des temps très courts laissent peu de marge pour le remplissage, l\'agitation et le vidage de la cuve, ce qui risque de provoquer un développement hétérogène.' },
    { question: 'Que faire si mon film ou mon révélateur ne figure pas dans la liste ?', answer: 'Consultez la fiche technique officielle du fabricant ou une table de développement reconnue. Cet outil n\'invente aucune donnée non documentée.' },
  ],
  bibliography,
  howTo: [
    { name: 'Sélectionner le film', text: 'Choisissez la pellicule noir et blanc chargée dans votre cuve.' },
    { name: 'Associer le révélateur', text: 'Sélectionnez le révélateur et la dilution exacte prévus par la table.' },
    { name: 'Mesurer la température', text: 'Mesurez et saisissez la température réelle du bain de développement.' },
    { name: 'Appliquer le temps ajusté', text: 'Utilisez le temps ajusté comme base de travail pratique pour votre développement en chambre noire.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};

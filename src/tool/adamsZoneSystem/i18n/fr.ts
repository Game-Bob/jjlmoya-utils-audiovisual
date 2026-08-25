import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'visualiseur-systeme-des-zones-ansel-adams-zones-exposition';
const title = 'Visualiseur du Systeme des Zones Ansel Adams Zones Exposition';
const description = 'Explorez les Zones 0 a IX, placez un ton mesure avec des changements de diaph exacts et associez vos choix d exposition au developpement normal, N moins et N plus.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Questions sur le Systeme des Zones',
  bibliographyTitle: 'Sources',
  orientationTitle: 'Placement de zone',
  orientationText: 'Choisissez le ton mesure sur le sujet, selectionnez la zone cible souhaitee et utilisez le decalage en valeurs comme consigne d exposition. La note de developpement vous aide a proteger les hautes lumieres ou a ouvrir les ombres.',
  measuredToneLabel: 'Ton mesure dans la scene',
  targetPlacementLabel: 'Placer ce ton en',
  developmentLabel: 'Intention de developpement',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N moins',
  plusDevelopment: 'N plus',
  presetsLabel: 'Commencer avec une note de terrain',
  presetShadow: 'Ombre texturee',
  presetSkin: 'Peau claire',
  presetSnow: 'Neige au soleil',
  presetNight: 'Ombre nocturne',
  zoneStripLabel: 'Bande de zones du noir au blanc',
  meterBaselineLabel: 'Reference du posemetre: Zone V',
  selectedToneLabel: 'Ton mesure',
  placementResultLabel: 'Resultat du placement',
  exposureShiftLabel: 'Decalage d exposition par rapport au gris moyen',
  tonalDistanceLabel: 'Ecart par rapport au ton mesure',
  luminanceLabel: 'Luminance relative',
  stopsFromMiddleLabel: 'Valeurs par rapport a la Zone V',
  developmentAdviceLabel: 'Lecture du negatif',
  techniqueLabel: 'Orientation laboratoire',
  resetLabel: 'Reinitialiser l exemple',
  meterAssumption: 'Un posemetre en lumiere reflechie place toute mesure au gris moyen de la Zone V sans compensation.',
  zonePrefix: 'Zone',
  zoneNames: 'Noir pur|Presque noir|Ombre profonde|Ombre texturee|Ton moyen sombre|Gris moyen|Ton moyen clair|Hautes lumieres texturees|Lumieres eclatantes|Presque blanc',
  zoneDescriptions: 'Noir maximal sans texture visible.|Premiere separation du noir sans texture distincte.|Premier indice de texture dans les ombres sombres importantes.|Ombre texturee exploitable et ancrage courant de placement.|Ombre ouverte et feuillage sombre a la forme nette.|Point de reference neutre du posemetre.|Peau claire, pierre patinee et feuillage lumineux.|Texture brillante devant rester tirale et lisible.|Ton tres lumineux avec tres peu de texture.|Presque blanc pur avec seulement une trace de separation.',
  increaseExposure: 'Ouvrez l exposition de la valeur indiquee pour monter la mesure dans la zone choisie.',
  decreaseExposure: 'Fermez l exposition de la valeur indiquee pour maintenir la mesure dans la zone choisie.',
  holdExposure: 'Conservez la mesure du posemetre car la cible est la Zone V.',
  protectHighlights: 'Controle des hautes lumieres',
  openShadows: 'Separation des ombres',
  balancedPlacement: 'Placement equilibre',
  normalAdvice: 'Le developpement normal conserve le contraste du sujet proche du domaine mesure.',
  minusAdvice: 'Le developpement N moins reduit le contraste des sujets tres lumineux et garde les hautes lumieres tirables.',
  plusAdvice: 'Le developpement N plus augmente le contraste des sujets plats et separe mieux les ombres importantes.',
};

const faq: FAQItem[] = [
  {
    question: 'Que mesure le Systeme des Zones?',
    answer: 'Le Systeme des Zones permet de visualiser et controler la gamme tonale d une photographie du noir profond au blanc lumineux. Il relie la luminance mesuree a la zone finale et aux choix de laboratoire.',
  },
  {
    question: 'Pourquoi le posemetre part-il de la Zone V?',
    answer: 'Un posemetre en lumiere reflechie est etalonne pour traduire sa mesure moyenne en un gris neutre. Pour garder une ombre sombre ou un sujet clair lumineux, il faut appliquer une compensation.',
  },
  {
    question: 'Combien de diaphs separent les zones?',
    answer: 'Chaque zone entiere est separee de sa voisine par un diaph complet. Passer de la Zone V a la Zone VII demande deux diaphs d exposition en plus.',
  },
  {
    question: 'Que signifient N moins et N plus?',
    answer: 'Ce sont des reglages de developpement ajustes pour gerer le contraste. N moins reduit le contraste pour les sujets tres contrastes, tandis que N plus l augmente pour les sujets plats.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Choisir le ton mesure', text: 'Selectionnez la zone correspondant a la partie mesuree au posemetre.' },
  { name: 'Fixer le placement cible', text: 'Cliquez sur la zone ou ce ton doit apparaitre sur le tirage.' },
  { name: 'Appliquer le decalage', text: 'Utilisez le decalage en diaphs pour ajuster l ouverture ou la vitesse.' },
  { name: 'Ajuster le developpement', text: 'Suivez la note de developpement pour adapter le temps de traitement en laboratoire.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'Guide visuel du Systeme des Zones sur le terrain',
    items: [
      'Explorer chaque valeur de la Zone 0 a la Zone IX sur une bande lisible',
      'Traduire le placement souhaite en decalage de diaph precis depuis la Zone V',
      'Comparer la luminance mesuree avec la valeur a conserver sur le tirage',
      'Utiliser N moins, normal et N plus comme leviers de controle du contraste',
    ],
  },
  { type: 'title', text: 'Fonctionnement du Systeme des Zones d Ansel Adams', level: 2 },
  {
    type: 'paragraph',
    html: 'Le Systeme des Zones decoupe la luminance continue en dix zones de reference. La Zone V correspond au gris moyen du posemetre. Chaque zone voisine represente un diaph d ecart.',
  },
  { type: 'title', text: 'Lecture de l exposition sur la bande de zones', level: 2 },
  {
    type: 'table',
    headers: ['Placement', 'Rendu visuel', 'Action posemetre'],
    rows: [
      ['Zone II', 'Ombre profonde avec texture a peine visible', 'Sous-exposer de 3 diaphs par rapport a la Zone V'],
      ['Zone III', 'Ombre importante avec texture exploitable', 'Sous-exposer de 2 diaphs par rapport a la Zone V'],
      ['Zone V', 'Gris moyen neutre de reference', 'Conserver la valeur lue au posemetre'],
      ['Zone VI', 'Ton moyen clair comme une peau claire', 'Sur-exposer de 1 diaph par rapport a la Zone V'],
      ['Zone VII', 'Hautes lumieres texturees a preserver', 'Sur-exposer de 2 diaphs par rapport a la Zone V'],
    ],
  },
  {
    type: 'tip',
    title: 'Utiliser le placement comme choix créatif',
    html: 'Ne laissez pas le posemetre imposer du gris partout. Decidez quel ton porte la texture essentielle de l image et placez-le deliberement.',
  },
  { type: 'title', text: 'Controle du contraste au developpement', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Developpement normal:</strong> Conserve le contraste du sujet dans les valeurs standard du negatif.',
      '<strong>Developpement N moins:</strong> Reduit le contraste d un sujet tres lumineux pour eviter le blocage des hautes lumieres.',
      '<strong>Developpement N plus:</strong> Augmente le contraste d un sujet plat pour mieux separer les ombres.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zone', definition: 'Intervalle tonal de reference espace d un diaph d exposition.' },
      { term: 'Placement', definition: 'Attribution volontaire d un ton mesure a une zone choisie.' },
      { term: 'Gris moyen', definition: 'Reference neutre de la Zone V utilisee par les posemetres.' },
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

export const content: ToolLocaleContent<AdamsZoneSystemUI> = {
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

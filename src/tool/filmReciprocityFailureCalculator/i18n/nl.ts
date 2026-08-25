import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'film-reciprociteitsfout-rekenmachine-fotografie';
const title = 'Film Reciprociteitsfout Rekenmachine (Schwarzschild Effect)';
const description = 'Corrigeer lange sluitertijden bij analoge fotografie met de officiële factoren van ILFORD en KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Vragen over reciprociteitsfout bij film',
  bibliographyTitle: 'Bronvermelding',
  studyLabel: 'Lange sluitertijd studie',
  studyTitle: 'Geef de film de tijd',
  studyText: 'De lichtmeter meet het binnenkomende licht direct. De emulsie heeft meer tijd nodig om dezelfde dichtheid op te bouwen.',
  filmLabel: 'Kies een filmtype',
  filmHint: 'Gebruik de officiële factor voor de geselecteerde ILFORD- of KENTMERE-film.',
  measuredTimeLabel: 'Voer de gemeten sluitertijd in',
  measuredTimeHint: 'De correctie geldt voor tijden langer dan 1 seconde.',
  secondsUnit: 'seconden',
  filmMenuLabel: 'Filmmenu',
  presetsLabel: 'Snelmenu instellingen',
  presetShort: 'Grens van reciprociteit',
  presetNight: 'Nachtelijke straat',
  presetDeepNight: 'Diepe nacht',
  resultLabel: 'Gecorrigeerde belichting',
  correctedTimeLabel: 'Aanbevolen eindtijd',
  addedTimeLabel: 'Extra tijd',
  correctionStopsLabel: 'Belichtingscorrectie (stops EV)',
  correctionFactorLabel: 'Filmfactor',
  noCorrection: 'Geen correctie nodig',
  correctionNeeded: 'Reciprociteitscorrectie actief',
  longExposure: 'Bereik van lange sluitertijd',
  meterTimeLabel: 'Gemeten tijd',
  filmTimeLabel: 'Aangepaste tijd',
  exposurePathLabel: 'Visuele weergave van de belichting',
  exposurePathText: 'De filmstrip rekt visueel uit van de gemeten tijd naar de gecorrigeerde belichtingstijd.',
  formulaLabel: 'Berekeningsformule',
  formulaText: 'Gecorrigeerde tijd = gemeten tijd tot de macht van de filmfactor.',
  manufacturerNote: 'Factoren afkomstig uit de technische documentatie van HARMAN. Gebruik het resultaat als uitgangspunt.',
  resetLabel: 'Berekening wissen',
  invalidTime: 'Voer een tijd groter dan nul in.',
  sourceLabel: 'Notitie van fabrikant',
};

const faq: FAQItem[] = [
  {
    question: 'Wat is de reciprociteitsfout (Schwarzschild-effect) bij film?',
    answer: 'De reciprociteitsfout is het verlies van gevoeligheid van film bij lange belichtingstijden. Dezelfde hoeveelheid licht die over een langere periode binnenkomt, veroorzaakt minder dichtheid dan de lichtmeter voorspelt.',
  },
  {
    question: 'Hoe berekent deze tool de gecorrigeerde tijd?',
    answer: 'Het gebruikt de HARMAN-formule: gecorrigeerde tijd (Tc) is gemeten tijd (Tm) tot de macht P. Tijden van 1 seconde of korter worden niet aangepast.',
  },
  {
    question: 'Waarom heeft elke film een andere correctiefactor?',
    answer: 'De reactie van zilverhalogenidekristallen verschilt per emulsie. HARMAN publiceert specifieke factoren voor HP5+, FP4+, DELTA en KENTMERE.',
  },
  {
    question: 'Garanteert de berekende tijd een perfect negatief?',
    answer: 'Nee. Bij zeer lange sluitertijden spelen lichtmeting, contrast van de scène en ontwikkeling ook een grote rol. Gebruik het resultaat als richtlijn en maak een belichtingsstrapje (bracketing).',
  },
];

const howTo: HowToStep[] = [
  { name: 'Kies het filmtype', text: 'Selecteer de geladen film om de specifieke correctiefactor toe te passen.' },
  { name: 'Voer de gemeten tijd in', text: 'Typ het aantal seconden dat de lichtmeter aangeeft in.' },
  { name: 'Lees de gecorrigeerde belichting af', text: 'Stel de sluitertijd van de camera in op de berekende eindtijd.' },
  { name: 'Maak een belichtingsstrapje', text: "Maak bij lange nachtopnames extra foto's met kortere en langere sluitertijden." },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Gedocumenteerde correctie voor lange sluitertijden',
    items: [
      'Past de officiële factor toe voor 11 ILFORD- en KENTMERE-zwart-witfilms',
      'Vergelijkt de lichtmeting met de werkelijke tijd die de emulsie nodig heeft',
      'Toont extra seconden, stops-compensatie en een visuele weergave',
      'Inclusief drie handige instellingen voor nachtfotografie',
    ],
  },
  { type: 'title', text: 'Waarom lange sluitertijden correctie vereisen', level: 2 },
  {
    type: 'paragraph',
    html: 'Bij normale sluitertijden geldt de reciprociteitswet (lichtintensiteit x tijd). Bij lange sluitertijden verandert de efficiëntie van de emulsie. De lichtmeter geeft een tijd aan die natuurkundig klopt, maar chemisch gezien te kort is.',
  },
  { type: 'title', text: 'De formule van de fabrikant achter de berekening', level: 2 },
  {
    type: 'table',
    headers: ['Film', 'Officiële factor', 'Voorbeeld bij 10 seconden'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 seconden'],
      ['ILFORD FP4+', '1.26', '18.2 seconden'],
      ['ILFORD SFX 200', '1.43', '26.9 seconden'],
      ['KENTMERE 400', '1.30', '20.0 seconden'],
    ],
  },
  {
    type: 'paragraph',
    html: 'De calculator gebruikt Tc = Tm<sup>P</sup>, waarbij Tm de gemeten tijd in seconden is, Tc de gecorrigeerde tijd en P de factor van HARMAN. Tot 1 seconde is geen correctie nodig.',
  },
  {
    type: 'tip',
    title: 'Gebruik de uitkomst als startpunt',
    html: 'Lange belichtingen zijn afhankelijk van meer dan alleen reciprociteit. Fouten in de lichtmeting, contrast en ontwikkeling beïnvloeden het negatief. Maak bij belangrijke opnames een belichtingsstrapje.',
  },
  { type: 'title', text: 'Wanneer reciprociteitscorrectie toe te passen', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Gebruik officiële factoren:</strong> Zorg dat het filmtype overeenkomt met de technische gegevens.',
      '<strong>Houd het ontwikkelproces constant:</strong> Ontwikkelaar en agitatie bepalen de uiteindelijke dichtheid.',
      '<strong>Maak een belichtingsstrapje:</strong> Hoe langer de sluitertijd, hoe nuttiger testopnames zijn.',
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
  inLanguage: 'nl',
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

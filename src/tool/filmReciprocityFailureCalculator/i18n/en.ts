import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'film-reciprocity-failure-calculator';
const title = 'Film Reciprocity Failure Calculator';
const description = 'Correct long film exposures with manufacturer factors, compare metered and adjusted time, and plan a more reliable darkroom exposure.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Questions about film reciprocity failure',
  bibliographyTitle: 'Sources',
  studyLabel: 'Long exposure study',
  studyTitle: 'Let the film take its time',
  studyText: 'A meter sees the light that arrives. The emulsion needs a little longer to build the same density.',
  filmLabel: 'Choose a film stock',
  filmHint: 'Use the factor published for the selected ILFORD or KENTMERE film.',
  measuredTimeLabel: 'Enter the metered exposure',
  measuredTimeHint: 'The correction begins above one second.',
  secondsUnit: 'seconds',
  filmMenuLabel: 'Film stock menu',
  presetsLabel: 'Start with a field note',
  presetShort: 'Edge of failure',
  presetNight: 'Night street',
  presetDeepNight: 'Deep night',
  resultLabel: 'Adjusted exposure',
  correctedTimeLabel: 'Give the film',
  addedTimeLabel: 'Extra time',
  correctionStopsLabel: 'Exposure lift',
  correctionFactorLabel: 'Film factor',
  noCorrection: 'No correction needed',
  correctionNeeded: 'Reciprocity correction active',
  longExposure: 'Deep exposure territory',
  meterTimeLabel: 'Metered time',
  filmTimeLabel: 'Adjusted time',
  exposurePathLabel: 'Visual exposure path',
  exposurePathText: 'The film strip grows from the metered time to the adjusted time.',
  formulaLabel: 'Working equation',
  formulaText: 'Corrected time = metered time raised to the film factor.',
  manufacturerNote: 'Factors from HARMAN technical information. Treat the result as a starting point and test your process.',
  resetLabel: 'Reset study',
  invalidTime: 'Enter a time greater than zero.',
  sourceLabel: 'Manufacturer note',
};

const faq: FAQItem[] = [
  {
    question: 'What is reciprocity failure in film photography?',
    answer: 'Reciprocity failure is the loss of effective film speed during long exposures. The same total exposure delivered over a longer time can produce less image density, so the film needs more time than a meter indicates.',
  },
  {
    question: 'How does this film reciprocity calculator work?',
    answer: 'It uses the HARMAN equation Tc = Tm raised to P. Tm is the metered time, Tc is the corrected time, and P is the published factor for the selected film. Exposures of one second or less are left unchanged.',
  },
  {
    question: 'Why does each film need a different correction?',
    answer: 'The efficiency of forming a stable latent image depends on the emulsion. HARMAN publishes a separate factor for each listed film, so HP5+, FP4+, DELTA and KENTMERE stocks do not all receive the same correction.',
  },
  {
    question: 'Does the corrected time guarantee a perfect negative?',
    answer: 'No. Very long exposures add uncertainty from metering accuracy, development, temperature, scene contrast and the specific batch of film. Use the result as a documented starting point and bracket important exposures.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Choose the film stock', text: 'Select the film you loaded so the calculator can use its published reciprocity factor.' },
  { name: 'Enter the metered time', text: 'Type the exposure time shown by your meter in seconds, or use a field note preset.' },
  { name: 'Read the adjusted exposure', text: 'Set the camera to the displayed adjusted time and use the extra time and stop lift as a quick field check.' },
  { name: 'Bracket the longest frames', text: 'For very long exposures, make a test or bracket because metering and development variables can change the final density.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'A documented long exposure correction',
    items: [
      'Apply the published factor for 11 ILFORD and KENTMERE black and white films',
      'Compare the meter reading with the time the emulsion actually needs',
      'See the correction as extra seconds, stop lift and a visual film path',
      'Keep the result useful in the field with three darkroom presets',
    ],
  },
  { type: 'title', text: 'Why film reciprocity failure needs a correction', level: 2 },
  {
    type: 'paragraph',
    html: 'At ordinary shutter speeds, the reciprocity law makes exposure easy to treat as light intensity multiplied by time. During a long exposure, the emulsion becomes less efficient at forming stable development centres. The meter can therefore indicate a time that is physically correct but chemically too short for the intended density.',
  },
  { type: 'title', text: 'The manufacturer equation behind the result', level: 2 },
  {
    type: 'table',
    headers: ['Film', 'Published factor', 'Example at 10 seconds'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 seconds'],
      ['ILFORD FP4+', '1.26', '18.2 seconds'],
      ['ILFORD SFX 200', '1.43', '26.9 seconds'],
      ['KENTMERE 400', '1.30', '20.0 seconds'],
    ],
  },
  {
    type: 'paragraph',
    html: 'The calculator follows Tc = Tm<sup>P</sup>. Tm is the metered time in seconds, Tc is the corrected time, and P is the film factor. At one second or less, the HARMAN guidance says no reciprocity compensation is required.',
  },
  {
    type: 'tip',
    title: 'Use the answer as a starting exposure',
    html: 'Long exposures are sensitive to more than reciprocity. Metering error, scene contrast and development can all affect the negative. For an important frame, bracket around the calculated time and keep notes about the process.',
  },
  { type: 'title', text: 'When to trust a film reciprocity correction', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Use a published factor:</strong> Match the selected film and format to the manufacturer information you are following.',
      '<strong>Keep the process consistent:</strong> Development, temperature and agitation influence the final negative.',
      '<strong>Bracket very long frames:</strong> The longer the exposure, the more useful a practical test becomes.',
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
  inLanguage: 'en',
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

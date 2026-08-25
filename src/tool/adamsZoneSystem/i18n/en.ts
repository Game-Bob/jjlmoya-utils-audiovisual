import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-zone-system-visualizer-exposure-zones';
const title = 'Ansel Adams Zone System Visualizer';
const description = 'Explore Zones 0 to IX, place a measured tone with exact stop changes, and connect exposure decisions with normal, minus, and plus development.';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'Questions about the Zone System',
  bibliographyTitle: 'Sources',
  orientationTitle: 'Zone placement',
  orientationText: 'Choose the tone you measured, choose the zone where you want it to land, and use the stop change as your exposure instruction. The development note helps you protect highlights or open shadows when the scene asks for it.',
  measuredToneLabel: 'Tone measured in the scene',
  targetPlacementLabel: 'Place that tone at',
  developmentLabel: 'Development intention',
  normalDevelopment: 'Normal',
  minusDevelopment: 'N minus',
  plusDevelopment: 'N plus',
  presetsLabel: 'Start with a field note',
  presetShadow: 'Textured shadow',
  presetSkin: 'Light skin',
  presetSnow: 'Sunlit snow',
  presetNight: 'Night shadow',
  zoneStripLabel: 'Zone strip from black to white',
  meterBaselineLabel: 'Meter baseline: Zone V',
  selectedToneLabel: 'Measured tone',
  placementResultLabel: 'Placement result',
  exposureShiftLabel: 'Exposure shift from meter gray',
  tonalDistanceLabel: 'Move from measured tone',
  luminanceLabel: 'Relative luminance',
  stopsFromMiddleLabel: 'Stops from Zone V',
  developmentAdviceLabel: 'Reading the negative',
  techniqueLabel: 'Darkroom direction',
  resetLabel: 'Reset example',
  meterAssumption: 'A reflected meter places whatever it reads at middle gray, Zone V, unless you compensate.',
  zonePrefix: 'Zone',
  zoneNames: 'Pure black|Near black|Deep shadow|Textured shadow|Dark midtone|Middle gray|Light midtone|Textured highlight|Luminous highlight|Near white',
  zoneDescriptions: 'Maximum black with no visible texture.|First separation from black, with almost no texture.|First hint of texture in the darkest important shadow.|Useful shadow texture and a common placement anchor.|Open shadow and dark foliage with clear form.|The meter\'s neutral reference point.|Light skin, weathered stone, and bright foliage.|Bright texture that should remain printable or readable.|Very bright tone with little remaining texture.|Almost white, with only a trace of separation.',
  increaseExposure: 'Open the exposure by the shown amount to lift the reading into the chosen zone.',
  decreaseExposure: 'Reduce the exposure by the shown amount to keep the reading in the chosen zone.',
  holdExposure: 'Keep the meter reading unchanged because the target is Zone V.',
  protectHighlights: 'Highlight control',
  openShadows: 'Shadow separation',
  balancedPlacement: 'Balanced placement',
  normalAdvice: 'Normal development keeps the scene contrast close to its measured range.',
  minusAdvice: 'N minus development can compress a bright subject range and keep important highlights printable.',
  plusAdvice: 'N plus development can expand a thin subject range and give important shadows more separation.',
};

const faq: FAQItem[] = [
  {
    question: 'What does the Zone System measure?',
    answer: 'The Zone System is a way to visualize and control the tonal range of a photograph from deep black to bright white. It connects a measured subject brightness with a chosen final zone and with exposure and development decisions.',
  },
  {
    question: 'Why does the meter start at Zone V?',
    answer: 'A reflected light meter is calibrated to treat the average reading as a middle gray reference. If you want a measured shadow to remain dark or a bright subject to remain bright, you compensate away from Zone V.',
  },
  {
    question: 'How many stops separate the zones?',
    answer: 'Adjacent full zones are one stop apart. Moving from Zone V to Zone VII therefore requires two stops more exposure, while moving from Zone V to Zone III requires two stops less exposure.',
  },
  {
    question: 'What do N minus and N plus mean?',
    answer: 'They are development choices used to manage scene contrast. N minus reduces negative contrast for a wide subject range, while N plus increases negative contrast for a narrow subject range. Exact times depend on the film, developer, temperature, and tested process.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Choose the measured tone', text: 'Select the zone that best describes the part of the scene you metered, such as textured shadow or light midtone.' },
  { name: 'Choose the final placement', text: 'Tap the zone where you want that tone to appear in the negative or print, then read the distance from Zone V.' },
  { name: 'Apply the exposure shift', text: 'Use the displayed stop change to decide whether to open, close, or hold the exposure relative to the meter reading.' },
  { name: 'Match the development intent', text: 'Use the development note as a contrast cue, then rely on your tested film and developer times for the final process.' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'A visual Zone System field guide',
    items: [
      'Explore every tone from Zone 0 to Zone IX on one readable strip',
      'Translate a desired placement into a precise stop change from Zone V',
      'Compare the measured tone with the tone you want to preserve',
      'Use N minus, normal, and N plus as contrast decisions rather than mystery labels',
    ],
  },
  { type: 'title', text: 'How the Ansel Adams Zone System works', level: 2 },
  {
    type: 'paragraph',
    html: 'The Zone System turns a continuous range of brightness into ten practical reference zones. Zone V is the meter\'s middle gray reference. Each adjacent zone is one stop apart, so placing a measured tone at Zone III means two stops below the meter reference, while placing it at Zone VII means two stops above it.',
  },
  { type: 'title', text: 'Reading exposure from the zone strip', level: 2 },
  {
    type: 'table',
    headers: ['Placement', 'Visual meaning', 'Meter action'],
    rows: [
      ['Zone II', 'Deep shadow with barely visible texture', 'Reduce exposure by 3 stops from Zone V'],
      ['Zone III', 'Important shadow texture', 'Reduce exposure by 2 stops from Zone V'],
      ['Zone V', 'Neutral middle gray reference', 'Leave the meter reading unchanged'],
      ['Zone VI', 'Light midtone such as light skin', 'Increase exposure by 1 stop from Zone V'],
      ['Zone VII', 'Bright texture worth preserving', 'Increase exposure by 2 stops from Zone V'],
    ],
  },
  {
    type: 'tip',
    title: 'Use placement to make a creative decision',
    html: 'Do not treat the meter as a command to make every subject gray. Decide which tone carries texture or meaning in the frame, place it deliberately, and let the rest of the scene fall around that choice.',
  },
  { type: 'title', text: 'When development changes the contrast', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Normal development:</strong> Keep a tested subject range close to its expected negative contrast.',
      '<strong>N minus development:</strong> Compress a bright subject range when highlights would otherwise crowd the upper zones.',
      '<strong>N plus development:</strong> Expand a narrow subject range when important shadows need more separation.',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'Zone', definition: 'A practical tonal reference separated from its neighbors by one full stop.' },
      { term: 'Placement', definition: 'The deliberate choice of the final zone where a measured subject tone should appear.' },
      { term: 'Middle gray', definition: 'The Zone V reference used by reflected light meters as their neutral starting point.' },
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
  inLanguage: 'en',
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
  schemas: [faqSchema, howToSchema, appSchema],
};

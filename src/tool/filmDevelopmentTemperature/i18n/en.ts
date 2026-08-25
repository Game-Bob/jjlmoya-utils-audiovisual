import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Film development temperature questions',
  bibliographyTitle: 'Primary references',
  chooseDocumentedCombination: 'Choose a documented film and developer row',
  filmLabel: 'Film stock',
  developerLabel: 'Developer',
  dilutionLabel: 'Dilution',
  temperatureLabel: 'Developer temperature',
  temperatureHelp: 'Enter the temperature of the developer in the tank. The guide starts from a documented time at 20 °C.',
  unitSwitchLabel: 'Temperature unit',
  metricLabel: 'Metric °C',
  imperialLabel: 'Imperial °F',
  currentReadingLabel: 'Darkroom reading',
  baseTimeLabel: 'At 20 °C',
  adjustedTimeLabel: 'Adjusted starting time',
  temperatureGuideLabel: 'Temperature field notes',
  temperatureGuideHelp: 'A practical guide around the measured temperature. The highlighted row is your reading.',
  sourceLabel: 'Documented combination',
  eiLabel: 'Meter setting',
  statusCool: 'Cooler bath',
  statusSteady: 'Near standard',
  statusWarm: 'Warmer bath',
  warningShortTime: 'Under 5 minutes can increase the risk of uneven development. Choose a documented workflow or extend the time only with your own tested process.',
  warningOutOfRange: 'This is the edge of the guide range. Keep the developer temperature stable and confirm the film manufacturer data before processing.',
  guideNotice: 'This is a starting guide, not a guarantee. Agitation, equipment, contrast target and personal process can change the result.',
  resetLabel: 'Restore the first documented row',
  minutesLabel: 'min',
  secondsLabel: 'sec',
  currentBadge: 'Current',
  belowFiveMinutes: 'Below 5 minutes',
  tableTemperature: 'Temperature',
  tableTime: 'Guide time',
  tableDifference: 'From 20 °C',
  currentRow: 'Current',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Film Development Time Calculator by Temperature',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Adjust a documented black and white film development time for the measured developer temperature.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'What temperature does the calculator use as its base?', acceptedAnswer: { '@type': 'Answer', text: 'Each selected development row starts from the manufacturer time at 20 °C and adjusts it for the measured developer temperature.' } },
    { '@type': 'Question', name: 'Are the adjusted times guaranteed?', acceptedAnswer: { '@type': 'Answer', text: 'No. They are practical starting guides. Agitation, equipment, contrast target and your tested process can change the result.' } },
    { '@type': 'Question', name: 'Why does the calculator warn below 5 minutes?', acceptedAnswer: { '@type': 'Answer', text: 'Very short development times leave less room for even pouring, agitation and draining, so manufacturer guidance warns that uneven development becomes more likely.' } },
    { '@type': 'Question', name: 'What should I do when my film and developer are not listed?', acceptedAnswer: { '@type': 'Answer', text: 'Use the film and developer manufacturer technical sheet or a trusted development table. This tool does not invent an undocumented combination.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Adjust a film development time for temperature',
  step: [
    { '@type': 'HowToStep', name: 'Choose the film', text: 'Select the film stock that is loaded in your tank.' },
    { '@type': 'HowToStep', name: 'Match the developer row', text: 'Choose the documented developer and dilution used for that film.' },
    { '@type': 'HowToStep', name: 'Measure the developer', text: 'Enter the actual developer temperature before starting the timer.' },
    { '@type': 'HowToStep', name: 'Read the starting time', text: 'Use the adjusted time as a practical starting point and compare it with your tested process.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'film-development-time-temperature-compensation-calculator',
  title: 'Film Development Time Calculator by Temperature',
  description: 'Adjust a documented black and white film development time to the temperature in your tank, with a clear reference band around the reading.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'How to adjust film development time for temperature' },
    { type: 'paragraph', html: 'Choose the exact film, developer and dilution documented in the table, then enter the temperature of the working solution. The calculator starts from the published time at 20 °C and gives you a practical adjusted time.' },
    { type: 'title', level: 3, text: 'Read the result as a starting point' },
    { type: 'paragraph', html: 'Temperature changes chemical activity, so a warmer developer generally needs less time and a cooler developer generally needs more. The reference band makes the direction visible around your reading.' },
    { type: 'tip', title: 'Keep the process honest', html: 'Do not treat a calculated time as a universal recipe. Agitation, tank geometry, developer age, contrast target and your own repeatable tests still matter.' },
    { type: 'title', level: 3, text: 'Why the documented row matters' },
    { type: 'list', items: ['The film and developer pairing controls contrast and effective speed.', 'Dilution changes developer activity and cannot be safely inferred from another dilution.', 'Times shorter than 5 minutes deserve extra caution because small handling differences have a larger effect.'] },
  ],
  faq: [
    { question: 'What temperature does the calculator use as its base?', answer: 'Each selected development row starts from the manufacturer time at 20 °C and adjusts it for the measured developer temperature.' },
    { question: 'Are the adjusted times guaranteed?', answer: 'No. They are practical starting guides. Agitation, equipment, contrast target and your tested process can change the result.' },
    { question: 'Why does the calculator warn below 5 minutes?', answer: 'Very short development times leave less room for even pouring, agitation and draining, so manufacturer guidance warns that uneven development becomes more likely.' },
    { question: 'What should I do when my film and developer are not listed?', answer: 'Use the film and developer manufacturer technical sheet or a trusted development table. This tool does not invent an undocumented combination.' },
  ],
  bibliography,
  howTo: [
    { name: 'Choose the film', text: 'Select the film stock that is loaded in your tank.' },
    { name: 'Match the developer row', text: 'Choose the documented developer and dilution used for that film.' },
    { name: 'Measure the developer', text: 'Enter the actual developer temperature before starting the timer.' },
    { name: 'Read the starting time', text: 'Use the adjusted time as a practical starting point and compare it with your tested process.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};

import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';
import { DEFAULT_UI_EN } from '../ui';

const slug = 'audio-delay-distance-calculator';
const title = 'Audio Delay by Distance and Temperature Calculator';
const description = 'Calculate acoustic delay time, speed of sound in air, phase offset, digital samples, and SPL loss for live PA delay towers.';

const faq: FAQItem[] = [
  {
    question: 'Why is air temperature important when calculating audio delay?',
    answer: 'The speed of sound in air depends directly on temperature. At 0 degrees Celsius sound travels at 331.3 meters per second, while at 30 degrees Celsius it accelerates to roughly 349 meters per second. Ignoring ambient temperature leads to acoustic phase cancellation and comb filtering in delay towers.',
  },
  {
    question: 'What is the Haas Effect in live sound reinforcement?',
    answer: 'The Haas Effect or precedence effect dictates that human hearing localizes sound toward the first arriving acoustic signal if secondary signals arrive within 5 to 35 milliseconds with similar intensity. Delaying auxiliary speakers allows audience members to perceive sound as coming from the main stage.',
  },
  {
    question: 'How do you convert audio delay time into console samples?',
    answer: 'Multiply delay time in seconds by the digital console sample rate. For example 50 milliseconds delay at 48 kHz equals 0.05 times 48000 which yields exactly 2400 digital samples.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Measure Physical Distance',
    text: 'Measure the physical distance between the main front of house PA speakers and the delay tower using a laser meter or acoustic software.',
  },
  {
    name: 'Check Ambient Air Temperature',
    text: 'Input the current ambient air temperature of the venue to determine the exact speed of sound propagation.',
  },
  {
    name: 'Select Console Sample Rate',
    text: 'Set your mixing console operational sample rate to 44.1 kHz, 48 kHz, 96 kHz, or 192 kHz.',
  },
  {
    name: 'Apply Calculated Delay',
    text: 'Insert the output delay time in milliseconds or digital sample count into your speaker processor matrix or digital console output channel.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Acoustic Delay Alignment Features',
    items: [
      'Precise speed of sound calculation based on air temperature and humidity',
      'Instant conversion to digital console samples (44.1k, 48k, 96k, 192k)',
      'Acoustic phase alignment guidance and Haas effect zone evaluation',
      'Inverse square law SPL attenuation loss estimation in decibels',
    ],
  },
  { type: 'title', text: 'Sound Propagation and Atmospheric Thermodynamics', level: 2 },
  {
    type: 'paragraph',
    html: 'Sound travels through air via mechanical pressure waves. Its velocity is governed primarily by air temperature, calculated as <code>c = 331.3 * sqrt(1 + T / 273.15)</code>. In outdoor festival environments, temperature fluctuations between hot afternoon soundchecks and cooler night performances alter sound speed noticeably.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Speed of Sound at 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Haas Precedence Window', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Console Sample Precision', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Acoustic Phase Alignment and Comb Filtering Prevention', level: 3 },
  {
    type: 'paragraph',
    html: 'When two spatially separated loudspeakers emit the same audio signal without precise time delay alignment, their acoustic wave fronts overlap with phase differences. This overlap causes severe comb filtering, creating deep frequency notches and unnatural tonal coloration throughout the venue.',
  },
  {
    type: 'list',
    items: [
      '<strong>Time Alignment:</strong> Delays secondary towers to match the arrival of the main PA sound wave.',
      '<strong>Comb Filtering Prevention:</strong> Eliminates phase cancellation notches across the audible spectrum.',
      '<strong>Haas Localization:</strong> Maintains acoustic image focus at the main stage for rear audience seats.',
      '<strong>Sample Accuracy:</strong> Provides exact digital sample count for digital console output matrices.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Direct PA Alignment',
        description: 'Physical delay equal to sound travel distance',
        icon: 'mdi:target',
        points: ['Perfect phase coherence', 'Ideal for auxiliary fills', 'Zero comb filtering'],
      },
      {
        title: 'Haas Offset Alignment',
        description: 'Physical delay plus 5-15ms precedence offset',
        icon: 'mdi:music-clef-treble',
        points: ['Natural stage localization', 'Enhanced speech intelligibility', 'Ideal for delay towers'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Venue Scenario', 'Distance (m)', 'Temp (°C)', 'Delay Time (ms)', 'Samples (48kHz)'],
    rows: [
      ['Theater Balcony Fill', '15 m', '22 °C', '43.5 ms', '2,090 samples'],
      ['Indoor Concert Hall', '25 m', '20 °C', '72.8 ms', '3,494 samples'],
      ['Outdoor Festival Main', '40 m', '35 °C', '113.6 ms', '5,453 samples'],
      ['Winter Open Air Event', '50 m', '5 °C', '149.5 ms', '7,176 samples'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Sub-millisecond sample accuracy for digital consoles',
        con: 'Requires accurate physical distance measurements',
      },
      {
        pro: 'Accounts for ambient temperature and relative humidity',
        con: 'Outdoor wind speed gradients require real-time monitoring',
      },
    ],
    proTitle: 'Advantages',
    conTitle: 'Considerations',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Haas Effect',
        definition: 'Psychoacoustic phenomenon where hearing localizes sound to the first arriving signal within 5 to 35 milliseconds.',
      },
      {
        term: 'Comb Filtering',
        definition: 'Frequency response distortion caused by adding a signal to a delayed version of itself.',
      },
      {
        term: 'Sample Rate',
        definition: 'Number of audio samples processed per second by a digital console or DSP matrix.',
      },
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
  inLanguage: 'en',
};

export const content: ToolLocaleContent<AudioDelayUI> = {
  slug,
  title,
  description,
  ui: DEFAULT_UI_EN,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

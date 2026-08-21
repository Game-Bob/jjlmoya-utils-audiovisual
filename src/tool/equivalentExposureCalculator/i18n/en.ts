import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';
import { DEFAULT_UI_EN } from '../ui';

const slug = 'equivalent-exposure-calculator';
const title = 'Equivalent Exposure Calculator: Exposure Triangle Reciprocals';
const description = 'Calculate equivalent camera exposure settings across Aperture, Shutter Speed, and ISO to maintain consistent EV with creative control.';

const faq: FAQItem[] = [
  {
    question: 'What is Exposure Value (EV) and how is it calculated?',
    answer: 'Exposure Value (EV) is a logarithmic numerical scale representing combinations of shutter speed and aperture that yield the same exposure level at ISO 100. It is defined mathematically as EV = log2(N^2 / t), where N is the lens f-number aperture and t is the shutter speed in seconds.',
  },
  {
    question: 'How do equivalent exposure settings maintain image brightness?',
    answer: 'By balancing stops of light added or subtracted between ISO sensitivity, shutter speed duration, and aperture opening size, the net light energy captured by the camera sensor remains constant, resulting in identical image brightness.',
  },
  {
    question: 'What is the Sunny 16 Rule in photographic reciprocity?',
    answer: 'The Sunny 16 rule states that on a bright sunny day at f/16, the correct shutter speed is the reciprocal of the ISO sensitivity (e.g., ISO 100 requires 1/100s at f/16). From this baseline, equivalent exposure settings can be calculated for wider apertures or faster shutter speeds.',
  },
  {
    question: 'How does aperture reciprocal selection alter creative depth of field?',
    answer: 'Opening the aperture (e.g., from f/8 to f/2.8) admits 3 stops more light, requiring a faster shutter speed (e.g., 1/125s to 1/1000s) to keep EV equal. This creative trade-off isolates the subject with a shallow depth of field and soft background blur.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Set Baseline Scene Exposure',
    text: 'Select your measured or meter-read baseline ISO sensitivity, Aperture f-stop, and Shutter Speed duration.',
  },
  {
    name: 'Select Auto-Calculation Lock Mode',
    text: 'Choose which variable (ISO, Aperture, or Shutter Speed) the calculator should solve for automatically.',
  },
  {
    name: 'Adjust Desired Creative Parameter',
    text: 'Modify your target creative variable (such as opening aperture for bokeh or accelerating shutter speed for action) to view instant reciprocal values.',
  },
  {
    name: 'Evaluate Creative Trade-Offs',
    text: 'Inspect the live exposure triangle diagram and creative indicator chips for depth of field, motion blur, and sensor grain.',
  },
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Photographic Exposure Reciprocals & Technical Features',
    items: [
      'Exact 1/3 EV stop reciprocity calculations across ISO, Aperture, and Shutter Speed',
      'Interactive Exposure Triangle SVG visualizer with live vector vector alignment',
      'Creative indicator feedback for Depth of Field, Motion Blur limit, and Sensor Noise',
      'One-click photographic presets for Sunny 16, Overcast, Indoor, and Night conditions',
    ],
  },
  { type: 'title', text: 'Understanding the Photographic Exposure Triangle', level: 2 },
  {
    type: 'paragraph',
    html: 'Exposure in photography is determined by the total volume of light striking the digital sensor or film emulsion. This volume is governed by three inter-dependent variables: <strong>Aperture</strong> (lens diaphragm opening), <strong>Shutter Speed</strong> (curtain exposure duration), and <strong>ISO Sensitivity</strong> (sensor signal amplification). Altering any single parameter shifts the overall Exposure Value (EV), requiring an exact reciprocal adjustment in another variable to maintain identical brightness.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Bright Daylight Baseline (Sunny 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Precision Fractional Stop Resolution', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Standard Focus Distribution Ratio', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Exposure Reciprocity Trade-Off Matrix', level: 3 },
  {
    type: 'table',
    headers: ['Creative Objective', 'Aperture Adjustment', 'Shutter Adjustment', 'ISO Adjustment', 'Visual Consequence'],
    rows: [
      ['Freeze Fast Action', 'Widen (e.g. f/8 -> f/2.8)', 'Faster (1/125s -> 1/1000s)', 'Keep Constant', 'Shallower Depth of Field'],
      ['Deep Landscape Sharpness', 'Narrow (e.g. f/2.8 -> f/11)', 'Slower (1/500s -> 1/30s)', 'Keep Constant', 'Requires Tripod or Steady Rest'],
      ['Low-Light Handheld', 'Widen to Maximum (f/1.4)', 'Keep at Handheld Limit (1/60s)', 'Increase (ISO 100 -> 3200)', 'Increased Sensor Grain/Noise'],
      ['Pristine Studio Detail', 'Optimal Sharpness (f/8)', 'Flash Sync Speed (1/200s)', 'Base ISO 100', 'Maximum Dynamic Range & Color'],
    ],
  },
  { type: 'title', text: 'Creative Impact of Equivalent Adjustments', level: 3 },
  {
    type: 'paragraph',
    html: 'While equivalent exposures yield identical overall image luminosity, their physical effect on the photograph differs fundamentally:',
  },
  {
    type: 'list',
    items: [
      '<strong>Aperture (f-stop):</strong> Controls physical iris diameter. Wider apertures (small f-numbers) decrease depth of field, rendering background bokeh. Smaller apertures (large f-numbers) increase depth of field but risk optical diffraction beyond f/11.',
      '<strong>Shutter Speed:</strong> Controls exposure duration. Fast speeds (1/1000s+) freeze rapid motion. Slow speeds (1/15s or longer) introduce intentional motion blur or require tripod stabilization to prevent camera shake.',
      '<strong>ISO Sensitivity:</strong> Amplifies sensor analog signal. Low ISO values (50-200) maximize dynamic range and shadow detail. High ISO values (3200+) enable dim-light shooting at the cost of luminance and chromatic noise.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Shallow Depth of Field Setup',
        description: 'Wide aperture focused on portrait subjects',
        icon: 'mdi:account-box-outline',
        points: ['f/1.4 - f/2.8 Aperture', 'Fast shutter speed compensation', 'Creamy background bokeh'],
      },
      {
        title: 'Maximized Landscape Setup',
        description: 'Narrow aperture for front-to-back sharpness',
        icon: 'mdi:image-filter-hdr',
        points: ['f/8 - f/11 Sweet-spot aperture', 'Slower shutter speed on tripod', 'Edge-to-edge optical resolution'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Sub-millisecond stop precision aligned with camera dials',
        con: 'Does not account for film reciprocity failure or T-stops',
      },
      {
        pro: 'Live SVG visualizer with immediate feedback on motion blur and noise',
        con: 'Sensor size equivalences require manual crop-factor consideration',
      },
    ],
    proTitle: 'Technical Strengths',
    conTitle: 'Physical Boundaries',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Exposure Value (EV)',
        definition: 'Logarithmic scale combining aperture and shutter speed to represent absolute scene light intensity.',
      },
      {
        term: 'Reciprocity Law',
        definition: 'Principle stating that total exposure is proportional to light intensity multiplied by duration time.',
      },
      {
        term: 'Stop of Light',
        definition: 'Relative unit of exposure corresponding to a halving or doubling of the light reaching the sensor.',
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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

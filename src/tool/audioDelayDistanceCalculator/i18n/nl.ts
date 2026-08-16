import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-afstand-temperatuur-rekenmachine';
const title = 'Audio Delay Afstand en Temperatuur Rekenmachine';
const description = 'Bereken akoestische vertragingstijd, geluidssnelheid in lucht, faseverschuiving, digitale samples en SPL demping voor PA delay towers.';

const ui: AudioDelayUI = {
  title: 'Audio Delay Afstand en Temperatuur Rekenmachine',
  subtitle: 'Bereken de vertragingstijd van geluidsvoortplanting, akoestische faseverschuiving, aantal samples en SPL demping voor PA delay luidsprekers.',
  unitSystemLabel: 'Eenhedensysteem',
  unitMetric: 'Metrisch (m, °C)',
  unitImperial: 'Imperiaal (ft, °F)',
  distanceLabel: 'Afstand tot Delay Luidspreker',
  temperatureLabel: 'Omgevingsluchttemperatuur',
  humidityLabel: 'Relatieve Luchtvochtigheid',
  sampleRateLabel: 'Console Sample Rate',
  presetsTitle: 'Snelle Scenario Pre-instellingen',
  presetSummerFestival: 'Zomerfestival (35°C, 40m)',
  presetIndoorConcert: 'Zaalconcert (20°C, 25m)',
  presetTheater: 'Akoestisch Theater (22°C, 15m)',
  presetWinterOutdoor: 'Winter Buitenevenement (5°C, 50m)',
  resultDelayMs: 'Vertragingstijd',
  resultSamples: 'Digitale Samples',
  resultSpeed: 'Geluidssnelheid',
  resultSplLoss: 'SPL Demping',
  phaseStatusLabel: 'Status Akoestische Fase-uitlijning',
  statusDirectZone: 'Directe Golffront Synchronisatie',
  statusHaasZone: 'Haas Precedentie Zone',
  statusEchoZone: 'Merkbare Echo Zone',
  statusExtremeZone: 'Kritieke Vertragingsafwijking',
  advicePhaseAligned: 'Signalen zijn akoestisch gesynchroniseerd binnen 5ms. Minimale vertragingsverwerking vereist.',
  adviceMinorHaas: 'Geluid komt binnen in de Haas zone (5-35ms). Natuurlijke lokalisatie blijft op het hoofdpodium.',
  adviceHaasDelayNeeded: 'Delay tower vereist een exacte tijdsverschuiving om merkbare echo te voorkomen.',
  adviceCriticalDelayNeeded: 'Hoge vertragingsafwijking. Pas nauwkeurige sample delay toe om kamfiltering te voorkomen.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Hoofd PA',
  delaySpeakerLabel: 'Delay Tower',
  audienceLabel: 'Publiekszone',
  haasZoneLegend: 'Haas Zone (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Waarom is luchttemperatuur belangrijk bij het berekenen van audio delay?',
    answer: 'De geluidssnelheid in lucht hangt rechtstreeks af van de temperatuur. Bij 0 graden Celsius verplaatst geluid zich met 331.3 meter per seconde terwijl dat bij 30 graden Celsius toeneemt tot ongeveer 349 meter per seconde.',
  },
  {
    question: 'Wat is het Haas Effect in live geluidsversterking?',
    answer: 'Het Haas Effect stelt dat het menselijk gehoor geluid lokaliseert naar het eerst aankomende signaal wanneer secundaire signalen binnen 5 tot 35 milliseconden arriveren.',
  },
  {
    question: 'Hoe zet je vertragingstijd om in digitale console samples?',
    answer: 'Vermenigvuldig de vertragingstijd in seconden met de sample rate van de digitale mengtafel. Bijvoorbeeld 50 milliseconden bij 48 kHz is gelijk aan 2400 samples.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Meet Fysieke Afstand',
    text: 'Meet de fysieke afstand tussen de hoofd PA en de delay tower met een laserafstandsmeter.',
  },
  {
    name: 'Controleer Omgevingsluchttemperatuur',
    text: 'Voer de huidige luchttemperatuur van de locatie in om de exacte voortplantingssnelheid te bepalen.',
  },
  {
    name: 'Selecteer Console Sample Rate',
    text: 'Stel de sample rate van uw digitale mengtafel in op 44.1 kHz, 48 kHz, 96 kHz of 192 kHz.',
  },
  {
    name: 'Pas Berekende Delay Toe',
    text: 'Voer de vertragingstijd in milliseconden of samples in op uw luidsprekerprocessor.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Functies voor Akoestische Delay Uitlijning',
    items: [
      'Nauwkeurige berekening van geluidssnelheid op basis van temperatuur en vochtigheid',
      'Directe omzetting naar digitale console samples (44.1k, 48k, 96k, 192k)',
      'Evaluatie van Haas effect zone en fase-uitlijning',
      'Schatting van geluidsdrukniveau (SPL) demping in decibels',
    ],
  },
  { type: 'title', text: 'Geluidsvoortplanting en Atmosferische Thermodynamica', level: 2 },
  {
    type: 'paragraph',
    html: 'Geluid verplaatst zich door lucht als een mechanische drukgolf. De snelheid wordt voornamelijk bepaald door de temperatuur, berekend als <code>c = 331.3 * sqrt(1 + T / 273.15)</code>.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Geluidssnelheid bij 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Haas Precedentie Venster', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Console Sample Precisie', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Akoestische Fase-uitlijning en Voorkomen van Kamfiltering', level: 3 },
  {
    type: 'paragraph',
    html: 'Wanneer twee luidsprekers hetzelfde signaal uitzenden zonder nauwkeurige tijdscorrectie, overlappen golffronten zich met faseverschillen wat leidt tot kamfiltering.',
  },
  {
    type: 'list',
    items: [
      '<strong>Tijdsuitlijning:</strong> Vertraagt secundaire towers om overeen te komen met de hoofd PA.',
      '<strong>Voorkomen van Kamfiltering:</strong> Elimineert fase-uitdoving in het hoorbare spectrum.',
      '<strong>Haas Lokalisatie:</strong> Behoudt de beleving van de geluidsbron op het hoofdpodium.',
      '<strong>Sample Precisie:</strong> Levert exacte digitale sample-waarden voor uitgangsmatrices.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Directe PA Uitlijning',
        description: 'Fysieke vertraging gelijk aan de afgelegde geluidsafstand',
        icon: 'mdi:target',
        points: ['Perfecte fasecoherentie', 'Ideaal voor in-fill luidsprekers', 'Nul kamfiltering'],
      },
      {
        title: 'Haas Offset Uitlijning',
        description: 'Fysieke vertraging plus 5 tot 15ms precedentie-offset',
        icon: 'mdi:music-clef-treble',
        points: ['Natuurlijke lokalisatie op het podium', 'Beter verstaanbaarheid van spraak', 'Ideaal voor delay towers'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Geluidsversterking Scenario', 'Afstand (m)', 'Temp (°C)', 'Vertragingstijd (ms)', 'Samples (48kHz)'],
    rows: [
      ['Theater Balkon Infill', '15 m', '22 °C', '43.5 ms', '2.090 samples'],
      ['Overdekt Zaalconcert', '25 m', '20 °C', '72.8 ms', '3.494 samples'],
      ['Festival Hoofdpodium', '40 m', '35 °C', '113.6 ms', '5.453 samples'],
      ['Winter Buitenevenement', '50 m', '5 °C', '149.5 ms', '7.176 samples'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Sub-milliseconde sample precisie voor digitale mengtafels',
        con: 'Vereist nauwkeurige meting van fysieke afstand',
      },
      {
        pro: 'Houdt rekening met omgevingsluchttemperatuur en vochtigheid',
        con: 'Windgradiënten buiten vereisen voortdurende monitoring',
      },
    ],
    proTitle: 'Voordelen',
    conTitle: 'Overwegingen',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Haas Effect',
        definition: 'Psychoakoestisch verschijnsel waarbij het gehoor geluid lokaliseert naar het eerst aankomende signaal binnen 5-35 ms.',
      },
      {
        term: 'Kamfiltering',
        definition: 'Vervorming van de frequentierespons veroorzaakt door het optellen van een signaal met een vertraagde versie.',
      },
      {
        term: 'Sample Rate',
        definition: 'Aantal audiosamples dat per seconde wordt verwerkt door een digitale mengtafel of DSP.',
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
  inLanguage: 'nl',
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

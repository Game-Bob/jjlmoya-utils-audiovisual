import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-afstand-temperatuur-rekenmachine';
const title = 'Audio Delay Afstand en Temperatuur Rekenmachine';
const description = 'Bereken akoestische vertragingstijd, geluidssnelheid in lucht, faseverschuiving, digitale samples en SPL verzwakking voor PA delay torens.';

const ui: AudioDelayUI = {
  title: 'Audio Delay Afstand en Temperatuur Rekenmachine',
  subtitle: 'Bereken de akoestische vertragingstijd van geluidsvoortplanting, faseverschuiving, aantal samples en SPL verzwakking voor PA delay luidsprekers.',
  unitSystemLabel: 'Eenheden Stelsel',
  unitMetric: 'Metrisch (m, °C)',
  unitImperial: 'Imperiaal (ft, °F)',
  distanceLabel: 'Afstand tot Delay Luidspreker',
  temperatureLabel: 'Omgevingsluchttemperatuur',
  humidityLabel: 'Relatieve Luchtvochtigheid',
  sampleRateLabel: 'Console Sample Rate',
  presetsTitle: 'Snelle Scenario Voorinstellingen',
  presetSummerFestival: 'Zomerfestival (35°C, 40m)',
  presetIndoorConcert: 'Zaalconcert (20°C, 25m)',
  presetTheater: 'Akoestisch Theater (22°C, 15m)',
  presetWinterOutdoor: 'Winter Buitenevenement (5°C, 50m)',
  resultDelayMs: 'Vertragingstijd',
  resultSamples: 'Digitale Samples',
  resultSpeed: 'Geluidssnelheid',
  resultSplLoss: 'SPL Verzwakking',
  phaseStatusLabel: 'Akoestische Fase Uitlijningsstatus',
  statusDirectZone: 'Directe Golffront Synchronisatie',
  statusHaasZone: 'Haas Precedentie Zone',
  statusEchoZone: 'Merkbare Echo Zone',
  statusExtremeZone: 'Kritieke Vertragingsafwijking',
  advicePhaseAligned: 'Signalen zijn akoestisch gesynchroniseerd binnen 5ms. Minimale vertragingsverwerking vereist.',
  adviceMinorHaas: 'Geluid komt aan binnen de Haas zone (5-35ms). Natuurlijke lokalisatie blijft op het hoofdpodium.',
  adviceHaasDelayNeeded: 'Delay toren vereist een exacte tijdsoffset om merkbare echo te voorkomen.',
  adviceCriticalDelayNeeded: 'Hoge vertragings-offset. Pas een nauwkeurige sample delay toe om kamfiltering te voorkomen.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Hoofd PA',
  delaySpeakerLabel: 'Delay Toren',
  audienceLabel: 'Publiekszone',
  haasZoneLegend: 'Haas Zone (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Waarom is de luchttemperatuur belangrijk bij het berekenen van audio delay?',
    answer: 'De geluidssnelheid in lucht is rechtstreeks afhankelijk van de temperatuur. Bij 0 graden Celsius verplaatst geluid zich met 331.3 meter per seconde, terwijl dit bij 30 graden Celsius versnelt naar ongeveer 349 meter per seconde.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Fysieke Afstand Meten',
    text: 'Meet de fysieke afstand tussen de hoofd PA en de delay toren met een laser afstandsmeter.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Akoestische Delay Uitlijningsfuncties',
    items: [
      'Nauwkeurige berekening van de geluidssnelheid op basis van temperatuur en vochtigheid',
      'Directe omrekening naar digitale console samples',
      'Evaluatie van de Haas effect zone en fase-uitlijning',
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

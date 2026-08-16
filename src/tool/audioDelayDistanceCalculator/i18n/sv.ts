import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-avstand-temperatur-kalkylator';
const title = 'Audio Delay Avstand och Temperatur Kalkylator';
const description = 'Beräkna akustisk fördröjningstid, ljudhastighet i luft, fasförskjutning, digitala samplar och SPL dämpning för PA delay torn.';

const ui: AudioDelayUI = {
  title: 'Audio Delay Avstand och Temperatur Kalkylator',
  subtitle: 'Beräkna ljudets utbredningsfördröjning, akustisk fasförskjutning, antal samplar och SPL dämpning för PA delay högtalare.',
  unitSystemLabel: 'Enhetssystem',
  unitMetric: 'Metrisk (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Avstånd till Delay Högtalare',
  temperatureLabel: 'Omgivande Lufttemperatur',
  humidityLabel: 'Relativ Luftfuktighet',
  sampleRateLabel: 'Konsol Sample Rate',
  presetsTitle: 'Snabbval Scenarier',
  presetSummerFestival: 'Sommarfestival (35°C, 40m)',
  presetIndoorConcert: 'Inomhuskonsert (20°C, 25m)',
  presetTheater: 'Akustisk Teater (22°C, 15m)',
  presetWinterOutdoor: 'Vinter Utomhusevenemang (5°C, 50m)',
  resultDelayMs: 'Fördröjningstid',
  resultSamples: 'Digitala Samplar',
  resultSpeed: 'Ljudhastighet',
  resultSplLoss: 'SPL Dämpning',
  phaseStatusLabel: 'Status för Akustisk Fasjustering',
  statusDirectZone: 'Direkt Vågfrontssynkronisering',
  statusHaasZone: 'Haas Företrädeszon',
  statusEchoZone: 'Märkbar Ekozon',
  statusExtremeZone: 'Kritisk Fördröjningsavvikelse',
  advicePhaseAligned: 'Signalerna är akustiskt synkroniserade inom 5ms. Minimal fördröjningsbearbetning krävs.',
  adviceMinorHaas: 'Ljudet når inom Haas zonen (5-35ms). Naturlig lokalisering kvarstår på huvudscenen.',
  adviceHaasDelayNeeded: 'Delay tornet kräver en exakt tidsförskjutning för att förhindra märkbart eko.',
  adviceCriticalDelayNeeded: 'Hög fördröjningsavvikelse. Tillämpa exakt samplingsfördröjning för att undvika kamfiltrering.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'Huvud PA',
  delaySpeakerLabel: 'Delay Torn',
  audienceLabel: 'Publikzon',
  haasZoneLegend: 'Haas Zon (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Varför är lufttemperaturen viktig vid beräkning av ljudfördröjning?',
    answer: 'Ljudhastigheten i luft beror direkt på temperaturen. Vid 0 grader Celsius färdas ljudet i 331.3 meter per sekund medan det vid 30 grader Celsius ökar till cirka 349 meter per sekund.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Mät Fysiskt Avstånd',
    text: 'Mät det fysiska avståndet mellan huvud PA och delay tornet med en lasermätare.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funktioner för Akustisk Fasjustering',
    items: [
      'Exakt beräkning av ljudhastighet baserat på temperatur och fuktighet',
      'Omedelbar omvandling till digitala konsolsamplar',
      'Utvärdering av Haas effektszon och fasjustering',
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
  inLanguage: 'sv',
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

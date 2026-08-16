import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calcolatore-ritardo-audio-distanza-temperatura';
const title = 'Calcolatore Ritardo Audio per Distanza e Temperatura';
const description = 'Calcola il tempo di ritardo acustico, la velocità del suono nell aria, il sfasamento, i campioni digitali e la perdita SPL per torri di ritardo PA.';

const ui: AudioDelayUI = {
  title: 'Calcolatore Ritardo Audio per Distanza e Temperatura',
  subtitle: 'Calcola il tempo di ritardo di propagazione del suono, lo sfasamento acustico, il conteggio dei campioni e l attenuazione SPL per altoparlanti di ritardo PA.',
  unitSystemLabel: 'Sistema di Unità',
  unitMetric: 'Metrico (m, °C)',
  unitImperial: 'Imperiale (ft, °F)',
  distanceLabel: 'Distanza dall Altoparlante di Ritardo',
  temperatureLabel: 'Temperatura dell Aria Ambiente',
  humidityLabel: 'Umidità Relativa',
  sampleRateLabel: 'Frequenza di Campionamento della Console',
  presetsTitle: 'Preimpostazioni Rapide Scenario',
  presetSummerFestival: 'Festival Estivo (35°C, 40m)',
  presetIndoorConcert: 'Concerto al Chiuso (20°C, 25m)',
  presetTheater: 'Teatro Acustico (22°C, 15m)',
  presetWinterOutdoor: 'Evento all Aperto Invernale (5°C, 50m)',
  resultDelayMs: 'Tempo di Ritardo',
  resultSamples: 'Campioni Digitali',
  resultSpeed: 'Velocità del Suono',
  resultSplLoss: 'Attenuazione SPL',
  phaseStatusLabel: 'Stato di Allineamento di Fase Acustica',
  statusDirectZone: 'Sincronizzazione Diretta Fronte d Onda',
  statusHaasZone: 'Zona di Precedenza Haas',
  statusEchoZone: 'Zona Eco Percepibile',
  statusExtremeZone: 'Sfasamento Critico di Ritardo',
  advicePhaseAligned: 'I segnali sono acusticamente sincronizzati entro 5ms. Elaborazione di ritardo minima richiesta.',
  adviceMinorHaas: 'Il suono giunge nella zona Haas (5-35ms). La localizzazione naturale rimane sul palco principale.',
  adviceHaasDelayNeeded: 'La torre di ritardo richiede un offset temporale esatto per evitare la percezione di eco distinto.',
  adviceCriticalDelayNeeded: 'Elevato offset di ritardo. Applica un ritardo di campioni preciso per evitare il filtraggio a pettine.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Principale',
  delaySpeakerLabel: 'Torre di Ritardo',
  audienceLabel: 'Zona Pubblico',
  haasZoneLegend: 'Zona Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Perché la temperatura dell aria è importante nel calcolo del ritardo audio?',
    answer: 'La velocità del suono nell aria dipende direttamente dalla temperatura. A 0 gradi Celsius il suono viaggia a 331.3 metri al secondo mentre a 30 gradi Celsius accelera a circa 349 metri al secondo.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Misurare la Distanza Fisica',
    text: 'Misura la distanza fisica tra la PA principale e la torre di ritardo con un distanziometro laser.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Caratteristiche di Allineamento del Ritardo Acustico',
    items: [
      'Calcolo preciso della velocità del suono in base a temperatura e umidità',
      'Conversione istantanea in campioni per console digitali',
      'Valutazione della zona effetto Haas e allineamento di fase',
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
  inLanguage: 'it',
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

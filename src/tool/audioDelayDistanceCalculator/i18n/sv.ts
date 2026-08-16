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
  {
    question: 'Vad är Haas effekten inom liveljudsförstärkning?',
    answer: 'Haas effekten (företrädeseffekten) innebär att den mänskliga hörseln lokaliserar ljudet mot den först anlända signalen om sekundära signaler anländer inom 5 till 35 millisekunder med liknande intensitet.',
  },
  {
    question: 'Hur omvandlar man fördröjningstid till digitala samplar?',
    answer: 'Multiplicera fördröjningstiden i sekunder med den digitala konsolens samplingsfrekvens. Till exempel är 50 millisekunder vid 48 kHz lika med 2400 digitala samplar.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Mät Fysiskt Avstånd',
    text: 'Mät det fysiska avståndet mellan huvud PA och delay tornet med en lasermätare.',
  },
  {
    name: 'Kontrollera Omgivande Lufttemperatur',
    text: 'Ange den aktuella lufttemperaturen för att bestämma den exakta utbredningshastigheten.',
  },
  {
    name: 'Välj Konsolens Samplingsfrekvens',
    text: 'Ställ in samplingsfrekvensen på din digitala konsol till 44.1 kHz, 48 kHz, 96 kHz eller 192 kHz.',
  },
  {
    name: 'Tillämpa Beräknad Fördröjning',
    text: 'Ange fördröjningstiden i millisekunder eller samplar i högtalarprocessorn.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funktioner för Akustisk Fasjustering',
    items: [
      'Exakt beräkning av ljudhastighet baserat på temperatur och fuktighet',
      'Omedelbar omvandling till digitala konsolsamplar (44.1k, 48k, 96k, 192k)',
      'Utvärdering av Haas effektszon och fasjustering',
      'Uppskattning av ljudtrycksdämpning i decibel',
    ],
  },
  { type: 'title', text: 'Ljudutbredning och Atmosfärisk Termodynamik', level: 2 },
  {
    type: 'paragraph',
    html: 'Ljud rör sig genom luft som en mekanisk tryckvåg. Dess hastighet styrs i första hand av lufttemperaturen, beräknad som <code>c = 331.3 * sqrt(1 + T / 273.15)</code>.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Ljudhastighet vid 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Haas Företrädesfönster', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Konsol Sample Precision', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Akustisk Fasjustering och Förebyggande av Kamfiltrering', level: 3 },
  {
    type: 'paragraph',
    html: 'När två högtalare sänder ut samma signal utan tidsjustering överlappar vågfronterna med fas skillnader vilket orsakar kamfiltrering.',
  },
  {
    type: 'list',
    items: [
      '<strong>Tidsjustering:</strong> Fördröjer sekundära torn för att matcha huvud PA.',
      '<strong>Kamfiltreringsförebyggande:</strong> Eliminerar fasutsläckning i det hörbara spektrumet.',
      '<strong>Haas Lokalisering:</strong> Behåller upplevelsen av ljudkällan på huvudscenen.',
      '<strong>Sample Precision:</strong> Ger exakta digitala samplingsvärden för utgångsmatriser.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Direkt PA Justering',
        description: 'Fysisk fördröjning motsvarande ljudets avstånd',
        icon: 'mdi:target',
        points: ['Perfekt faskoherens', 'Idealisk för in-fill högtalare', 'Noll kamfiltrering'],
      },
      {
        title: 'Haas Offset Justering',
        description: 'Fysisk fördröjning plus 5 till 15ms företrädesoffset',
        icon: 'mdi:music-clef-treble',
        points: ['Naturlig lokalisering på scenen', 'Bättre taluppfattbarhet', 'Idealisk för delay torn'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Ljudförstärkningsscenario', 'Avstånd (m)', 'Temp (°C)', 'Fördröjningstid (ms)', 'Samplar (48kHz)'],
    rows: [
      ['Teater Balkong Infill', '15 m', '22 °C', '43.5 ms', '2 090 samplar'],
      ['Inomhuskonsert', '25 m', '20 °C', '72.8 ms', '3 494 samplar'],
      ['Festival Huvudscen', '40 m', '35 °C', '113.6 ms', '5 453 samplar'],
      ['Vinter Utomhusevenemang', '50 m', '5 °C', '149.5 ms', '7 176 samplar'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Sub-millisekund sample precision för digitala konsoler',
        con: 'Kräver exakta mätningar av fysiskt avstånd',
      },
      {
        pro: 'Tar hänsyn till lufttemperatur och relativ luftfuktighet',
        con: 'Vindförhållanden utomhus kräver kontinuerlig övervakning',
      },
    ],
    proTitle: 'Fördelar',
    conTitle: 'Överväganden',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Haas Effekt',
        definition: 'Psykoakustiskt fenomen där hörseln lokaliserar ljudet mot den först anlända signalen inom 5-35 ms.',
      },
      {
        term: 'Kamfiltrering',
        definition: 'Frekvensgångsförvrängning som orsakas av att en signal adderas till en fördröjd version.',
      },
      {
        term: 'Samplingsfrekvens',
        definition: 'Antal ljudsamplar som behandlas per sekund av en digital konsol eller DSP-matris.',
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

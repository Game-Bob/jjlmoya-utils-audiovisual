import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculadora-atraso-audio-distancia-temperatura';
const title = 'Calculadora de Atraso de Áudio por Distância e Temperatura';
const description = 'Calcule o tempo de atraso acústico, a velocidade do som no ar, o desfasamento de fase, as amostras digitais e a perda SPL para torres de delay de PA.';

const ui: AudioDelayUI = {
  title: 'Calculadora de Atraso de Áudio por Distância e Temperatura',
  subtitle: 'Calcule o tempo de atraso de propagação do som, o desfasamento acústico de fase, a contagem de amostras e a atenuação SPL para colunas de reforço de PA.',
  unitSystemLabel: 'Sistema de Unidades',
  unitMetric: 'Métrico (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Distância para a Coluna de Delay',
  temperatureLabel: 'Temperatura do Ar Ambiente',
  humidityLabel: 'Humidade Relativa',
  sampleRateLabel: 'Taxa de Amostragem da Consola',
  presetsTitle: 'Predefinições Rápidas de Cenário',
  presetSummerFestival: 'Festival de Verão (35°C, 40m)',
  presetIndoorConcert: 'Concerto em Recinto Fechado (20°C, 25m)',
  presetTheater: 'Teatro Acústico (22°C, 15m)',
  presetWinterOutdoor: 'Evento ao Ar Livre no Inverno (5°C, 50m)',
  resultDelayMs: 'Tempo de Atraso',
  resultSamples: 'Amostras Digitais',
  resultSpeed: 'Velocidade do Som',
  resultSplLoss: 'Atenuação SPL',
  phaseStatusLabel: 'Estado de Alinhamento de Fase Acústica',
  statusDirectZone: 'Sincronização Direta de Frente de Onda',
  statusHaasZone: 'Zona de Precedência de Haas',
  statusEchoZone: 'Zona de Eco Percecionável',
  statusExtremeZone: 'Desvio Crítico de Atraso',
  advicePhaseAligned: 'Os sinais estão acusticamente sincronizados dentro de 5ms. Processamento de atraso mínimo necessário.',
  adviceMinorHaas: 'O som chega dentro da zona de Haas (5-35ms). A localização natural permanece no palco principal.',
  adviceHaasDelayNeeded: 'A torre de delay requer um desvio temporal exato para evitar a perceção de eco separado.',
  adviceCriticalDelayNeeded: 'Desvio elevado de atraso. Aplique um atraso preciso de amostras para evitar filtragem em pente.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Principal',
  delaySpeakerLabel: 'Torre de Delay',
  audienceLabel: 'Zona de Público',
  haasZoneLegend: 'Zona de Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Por que razão a temperatura do ar é importante no cálculo do atraso de áudio?',
    answer: 'A velocidade do som no ar depende diretamente da temperatura. A 0 graus Celsius o som viaja a 331.3 metros por segundo, enquanto a 30 graus Celsius acelera para cerca de 349 metros por segundo.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Medir a Distância Física',
    text: 'Meça a distância física entre o PA principal e a torre de delay com um medidor laser.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Funcionalidades de Alinhamento de Atraso Acústico',
    items: [
      'Cálculo preciso da velocidade do som com base na temperatura e humidade',
      'Conversão instantânea para amostras digitais da consola',
      'Avaliação da zona do efeito Haas e alinhamento de fase',
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
  inLanguage: 'pt',
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

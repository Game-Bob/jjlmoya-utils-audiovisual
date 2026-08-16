import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculadora-atraso-audio-distancia-temperatura';
const title = 'Calculadora de Atraso de Áudio por Distância e Temperatura';
const description = 'Calcule o tempo de atraso acústico, a velocidade do som no ar, o desfasamento, amostras digitais e atenuação SPL para torres de delay em PA.';

const ui: AudioDelayUI = {
  title: 'Calculadora de Atraso de Áudio por Distância e Temperatura',
  subtitle: 'Calcule o tempo de atraso de propagação do som, desfasamento acústico, contagem de amostras e atenuação SPL para colunas de reforço PA.',
  unitSystemLabel: 'Sistema de Unidades',
  unitMetric: 'Métrico (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Distância à Torre de Atraso',
  temperatureLabel: 'Temperatura do Ar Ambiente',
  humidityLabel: 'Humidade Relativa',
  sampleRateLabel: 'Taxa de Amostragem da Consola',
  presetsTitle: 'Predefinições Rápidas de Cenário',
  presetSummerFestival: 'Festival de Verão (35°C, 40m)',
  presetIndoorConcert: 'Concerto em Recinto Fechado (20°C, 25m)',
  presetTheater: 'Teatro Acústico (22°C, 15m)',
  presetWinterOutdoor: 'Evento de Inverno ao Ar Livre (5°C, 50m)',
  resultDelayMs: 'Tempo de Atraso',
  resultSamples: 'Amostras Digitais',
  resultSpeed: 'Velocidade do Som',
  resultSplLoss: 'Atenuação SPL',
  phaseStatusLabel: 'Estado de Alinhamento de Fase Acústica',
  statusDirectZone: 'Sincronização Direta da Frente de Onda',
  statusHaasZone: 'Zona de Precedência de Haas',
  statusEchoZone: 'Zona de Eco Percetível',
  statusExtremeZone: 'Desvio Crítico de Atraso',
  advicePhaseAligned: 'Os sinais estão acústica e sincronizadamente alinhados dentro de 5ms. Processamento de atraso mínimo necessário.',
  adviceMinorHaas: 'O som chega dentro da zona de Haas (5-35ms). A localização natural permanece no palco principal.',
  adviceHaasDelayNeeded: 'A torre de atraso requer um offset de tempo exato para evitar a perceção de eco separado.',
  adviceCriticalDelayNeeded: 'Desvio elevado. Aplique um atraso de amostra preciso para evitar filtragem em pente.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Principal',
  delaySpeakerLabel: 'Torre de Atraso',
  audienceLabel: 'Zona do Público',
  haasZoneLegend: 'Zona de Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'Por que a temperatura do ar é importante no cálculo do atraso de áudio?',
    answer: 'A velocidade do som no ar depende diretamente da temperatura. A 0 graus Celsius o som viaja a 331.3 metros por segundo enquanto a 30 graus Celsius acelera para aproximadamente 349 metros por segundo.',
  },
  {
    question: 'O que é o Efeito Haas no reforço sonoro ao vivo?',
    answer: 'O Efeito Haas estabelece que a audição humana localiza o som na direção do primeiro sinal que chega se os sinais secundários chegarem dentro de 5 a 35 milissegundos com intensidade semelhante.',
  },
  {
    question: 'Como converter o tempo de atraso em amostras de consola digital?',
    answer: 'Multiplique o tempo de atraso em segundos pela taxa de amostragem da consola digital. Por exemplo 50 milissegundos a 48 kHz equivalem a 2400 amostras digitais.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Medir a Distância Física',
    text: 'Meça a distância física entre o PA principal e a torre de atraso utilizando um medidor laser.',
  },
  {
    name: 'Verificar a Temperatura Ambiente',
    text: 'Introduza a temperatura atual do ar para determinar a velocidade exata de propagação.',
  },
  {
    name: 'Selecionar a Taxa de Amostragem da Consola',
    text: 'Configure a frequência de amostragem da sua consola para 44.1 kHz, 48 kHz, 96 kHz ou 192 kHz.',
  },
  {
    name: 'Aplicar o Atraso Calculado',
    text: 'Insira o tempo de atraso em milissegundos ou amostras no processador de som.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Recursos de Alinhamento de Atraso Acústico',
    items: [
      'Cálculo preciso da velocidade do som com base na temperatura e humidade',
      'Conversão instantânea em amostras de consola digital (44.1k, 48k, 96k, 192k)',
      'Avaliação da zona de efeito Haas e alinhamento de fase',
      'Estimativa de atenuação da pressão sonora SPL em decibéis',
    ],
  },
  { type: 'title', text: 'Propagação do Som e Termodinâmica Atmosférica', level: 2 },
  {
    type: 'paragraph',
    html: 'O som propaga-se no ar como uma onda mecânica de pressão. A sua velocidade é governada principalmente pela temperatura do ar, calculada por <code>c = 331.3 * sqrt(1 + T / 273.15)</code>.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Velocidade do Som a 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Janela de Precedência Haas', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Precisão de Amostra da Consola', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Alinhamento de Fase Acústica e Prevenção de Filtragem em Pente', level: 3 },
  {
    type: 'paragraph',
    html: 'Quando dois sistemas de colunas emitem o mesmo sinal sem correção de tempo, as frentes de onda sobrepõem-se com diferenças de fase gerando filtragem em pente.',
  },
  {
    type: 'list',
    items: [
      '<strong>Alinhamento Temporal:</strong> Atrasa torres secundárias para corresponder ao PA principal.',
      '<strong>Prevenção de Filtragem em Pente:</strong> Elimina cancelamentos de fase no espectro audível.',
      '<strong>Localização Haas:</strong> Mantém a perceção da fonte sonora no palco principal.',
      '<strong>Precisão de Amostra:</strong> Fornece o número exato de amostras para matrizes de saída.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Alinhamento Direto de PA',
        description: 'Atraso físico igual à distância percorrida pelo som',
        icon: 'mdi:target',
        points: ['Coerência de fase perfeita', 'Ideal para colunas in-fill', 'Zero filtragem em pente'],
      },
      {
        title: 'Alinhamento com Offset Haas',
        description: 'Atraso físico mais offset de precedência de 5 a 15ms',
        icon: 'mdi:music-clef-treble',
        points: ['Localização natural no palco', 'Melhor inteligibilidade da voz', 'Ideal para torres de atraso'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Cenário de Sonorização', 'Distância (m)', 'Temp (°C)', 'Tempo Atraso (ms)', 'Amostras (48kHz)'],
    rows: [
      ['Reforço de Balcão de Teatro', '15 m', '22 °C', '43.5 ms', '2.090 amostras'],
      ['Concerto em Recinto Fechado', '25 m', '20 °C', '72.8 ms', '3.494 amostras'],
      ['Palco Principal de Festival', '40 m', '35 °C', '113.6 ms', '5.453 amostras'],
      ['Evento Noturno de Inverno', '50 m', '5 °C', '149.5 ms', '7.176 amostras'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Precisão de amostra sub-milissegundo para consolas digitais',
        con: 'Requer medições precisas da distância física',
      },
      {
        pro: 'Considera a temperatura ambiente e a humidade relativa',
        con: 'Ventos ao ar livre requerem monitorização contínua',
      },
    ],
    proTitle: 'Vantagens',
    conTitle: 'Considerações',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Efeito Haas',
        definition: 'Fenómeno psicoacústico em que a audição localiza o som no primeiro sinal a chegar dentro de 5 a 35 ms.',
      },
      {
        term: 'Filtragem em Pente',
        definition: 'Distorção da resposta em frequência provocada pela soma de um sinal com uma versão atrasada.',
      },
      {
        term: 'Taxa de Amostragem',
        definition: 'Número de amostras de áudio processadas por segundo por uma consola digital ou matriz DSP.',
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

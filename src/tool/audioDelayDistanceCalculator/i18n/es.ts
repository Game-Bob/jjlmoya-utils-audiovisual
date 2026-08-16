import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculadora-delay-audio-distancia-temperatura';
const title = 'Calculadora de Retardo de Audio por Distancia y Temperatura';
const description = 'Calcula el tiempo de retardo acústico, la velocidad del sonido en el aire, el desfase de fase, las muestras digitales y la pérdida SPL para torres de delay en PA.';

const ui: AudioDelayUI = {
  title: 'Calculadora de Retardo de Audio por Distancia y Temperatura',
  subtitle: 'Calcula el tiempo de retardo de propagación del sonido, el desfase acústico de fase, el conteo de muestras y la atenuación SPL para torres de retardo de PA.',
  unitSystemLabel: 'Sistema de Unidades',
  unitMetric: 'Métrico (m, °C)',
  unitImperial: 'Imperial (ft, °F)',
  distanceLabel: 'Distancia a la Torre de Retardo',
  temperatureLabel: 'Temperatura del Aire Ambiente',
  humidityLabel: 'Humedad Relativa',
  sampleRateLabel: 'Frecuencia de Muestreo de Consola',
  presetsTitle: 'Ajustes Rápidos de Escenario',
  presetSummerFestival: 'Festival de Verano (35°C, 40m)',
  presetIndoorConcert: 'Concierto en Sala (20°C, 25m)',
  presetTheater: 'Teatro Acústico (22°C, 15m)',
  presetWinterOutdoor: 'Evento al Aire Libre en Invierno (5°C, 50m)',
  resultDelayMs: 'Tiempo de Retardo',
  resultSamples: 'Muestras Digitales',
  resultSpeed: 'Velocidad del Sonido',
  resultSplLoss: 'Atenuación SPL',
  phaseStatusLabel: 'Estado de Alineación de Fase Acústica',
  statusDirectZone: 'Sincronización Directa de Frente de Onda',
  statusHaasZone: 'Zona de Precedencia de Haas',
  statusEchoZone: 'Zona de Eco Perceptible',
  statusExtremeZone: 'Desfase Crítico de Retardo',
  advicePhaseAligned: 'Las señales están acústicamente sincronizadas dentro de los 5ms. Procesamiento de retardo mínimo requerido.',
  adviceMinorHaas: 'El sonido llega dentro de la zona de Haas (5-35ms). La localización natural permanece en el escenario principal.',
  adviceHaasDelayNeeded: 'La torre de retardo requiere un desfase de tiempo exacto para evitar la percepción de eco independiente.',
  adviceCriticalDelayNeeded: 'Alto desfase de retardo. Aplica un retardo preciso por muestras para evitar el filtrado de peine completo.',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'PA Principal',
  delaySpeakerLabel: 'Torre de Retardo',
  audienceLabel: 'Zona de Audiencia',
  haasZoneLegend: 'Zona de Haas (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: '¿Por qué es importante la temperatura del aire al calcular el retardo de audio?',
    answer: 'La velocidad del sonido en el aire depende directamente de la temperatura. A 0 grados Celsius el sonido viaja a 331.3 metros por segundo, mientras que a 30 grados Celsius se acelera a aproximadamente 349 metros por segundo. Ignorar la temperatura ambiente genera cancelación de fase acústica y filtrado de peine en las torres de retardo.',
  },
  {
    question: '¿Qué es el Efecto Haas en el refuerzo de sonido en directo?',
    answer: 'El Efecto Haas o efecto de precedencia establece que el oído humano localiza la fuente sonora hacia la primera señal acústica que llega si las señales secundarias arriban dentro de un intervalo de 5 a 35 milisegundos con una intensidad similar. Retardar los altavoces auxiliares permite que la audiencia perciba el sonido como originado en el escenario principal.',
  },
  {
    question: '¿Cómo se convierte el tiempo de retardo en muestras de consola digital?',
    answer: 'Multiplica el tiempo de retardo en segundos por la frecuencia de muestreo de la consola digital. Por ejemplo, 50 milisegundos de retardo a 48 kHz equivalen a 0.05 multiplicado por 48000, lo que da exactamente 2400 muestras digitales.',
  },
];

const howTo: HowToStep[] = [
  {
    name: 'Medir la Distancia Física',
    text: 'Mide la distancia física entre el sistema de sonido PA principal del escenario y la torre de retardo utilizando un distanciómetro láser o software de medición acústica.',
  },
  {
    name: 'Verificar la Temperatura del Aire Ambiente',
    text: 'Introduce la temperatura ambiente actual del recinto para determinar la velocidad exacta de propagación del sonido.',
  },
  {
    name: 'Seleccionar la Frecuencia de Muestreo de la Consola',
    text: 'Configura la frecuencia de muestreo operativa de tu consola digital a 44.1 kHz, 48 kHz, 96 kHz o 192 kHz.',
  },
  {
    name: 'Aplicar el Retardo Calculado',
    text: 'Introduce el tiempo de retardo en milisegundos o el conteo de muestras en la matriz del procesador de altavoces o en el canal de salida de la consola.',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: 'Características de Alineación de Retardo Acústico',
    items: [
      'Cálculo preciso de la velocidad del sonido en función de la temperatura del aire y la humedad',
      'Conversión instantánea a muestras de consola digital (44.1k, 48k, 96k, 192k)',
      'Orientación de alineación de fase acústica y evaluación de la zona del efecto Haas',
      'Estimación de la pérdida de presión sonora SPL en decibelios mediante la ley del inverso del cuadrado',
    ],
  },
  { type: 'title', text: 'Propagación del Sonido y Termodinámica Atmosférica', level: 2 },
  {
    type: 'paragraph',
    html: 'El sonido se propaga a través del aire mediante ondas mecánicas de presión. Su velocidad está gobernada principalmente por la temperatura del aire, calculada como <code>c = 331.3 * sqrt(1 + T / 273.15)</code>. En entornos de festivales al aire libre, las fluctuaciones térmicas entre las pruebas de sonido por la tarde y las actuaciones nocturnas modifican la velocidad del sonido de forma apreciable.',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: 'Velocidad del Sonido a 20°C', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'Ventana de Precedencia Haas', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'Precisión por Muestras de Consola', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Alineación de Fase Acústica y Prevención del Filtrado de Peine', level: 3 },
  {
    type: 'paragraph',
    html: 'Cuando dos sistemas de altavoces separados espacialmente emiten la misma señal de audio sin una alineación precisa de tiempo, sus frentes de onda acústicos se superponen con diferencias de fase. Esta superposición provoca un severo filtrado de peine, creando muescas profundas de frecuencia y una coloración tonal antinatural en todo el recinto.',
  },
  {
    type: 'list',
    items: [
      '<strong>Alineación Temporal:</strong> Retarda las torres secundarias para igualar la llegada de la onda sonora del PA principal.',
      '<strong>Prevención del Filtrado de Peine:</strong> Elimina las muescas de cancelación de fase en todo el espectro audible.',
      '<strong>Localización Haas:</strong> Mantiene la percepción de la imagen acústica enfocada en el escenario principal.',
      '<strong>Precisión por Muestras:</strong> Proporciona el conteo exacto de muestras digitales para matrices de salida.',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Alineación Directa de PA',
        description: 'Retardo físico equivalente a la distancia de viaje del sonido',
        icon: 'mdi:target',
        points: ['Coherencia de fase perfecta', 'Ideal para altavoces de relleno', 'Cero filtrado de peine'],
      },
      {
        title: 'Alineación con Desfase Haas',
        description: 'Retardo físico más desfase de precedencia de 5 a 15ms',
        icon: 'mdi:music-clef-treble',
        points: ['Localización natural en el escenario', 'Mejor inteligibilidad de la palabra', 'Ideal para torres de retardo'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['Escenario de Sonorización', 'Distancia (m)', 'Temp (°C)', 'Tiempo Retardo (ms)', 'Muestras (48kHz)'],
    rows: [
      ['Relleno de Anfiteatro en Teatro', '15 m', '22 °C', '43.5 ms', '2,090 muestras'],
      ['Concierto en Auditorio Cubierto', '25 m', '20 °C', '72.8 ms', '3,494 muestras'],
      ['Escenario Principal de Festival', '40 m', '35 °C', '113.6 ms', '5,453 muestras'],
      ['Evento Nocturno de Invierno', '50 m', '5 °C', '149.5 ms', '7,176 muestras'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Precisión de muestras por debajo del milisegundo para consolas digitales',
        con: 'Requiere mediciones precisas de la distancia física',
      },
      {
        pro: 'Toma en cuenta la temperatura ambiente y la humedad relativa',
        con: 'Los gradientes de viento al aire libre requieren monitoreo continuo',
      },
    ],
    proTitle: 'Ventajas',
    conTitle: 'Consideraciones',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'Efecto Haas',
        definition: 'Fenómeno psicoacústico mediante el cual el oído localiza el sonido en la primera señal que llega dentro de 5 a 35 milisegundos.',
      },
      {
        term: 'Filtrado de Peine',
        definition: 'Distorisión en la respuesta en frecuencia causada por la suma de una señal con una versión retardada de sí misma.',
      },
      {
        term: 'Frecuencia de Muestreo',
        definition: 'Número de muestras de audio procesadas por segundo por una consola digital o matriz DSP.',
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
  inLanguage: 'es',
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

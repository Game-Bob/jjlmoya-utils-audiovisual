import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'Preguntas sobre la temperatura de revelado de película',
  bibliographyTitle: 'Referencias principales',
  chooseDocumentedCombination: 'Elige una combinación documentada de película y revelador',
  filmLabel: 'Película fotográfica',
  developerLabel: 'Revelador',
  dilutionLabel: 'Dilución',
  temperatureLabel: 'Temperatura del revelador',
  temperatureHelp: 'Introduce la temperatura del revelador en el tanque. La guía parte del tiempo documentado a 20 °C.',
  unitSwitchLabel: 'Unidad de temperatura',
  metricLabel: 'Métrico °C',
  imperialLabel: 'Imperial °F',
  currentReadingLabel: 'Lectura en el laboratorio',
  baseTimeLabel: 'A 20 °C',
  adjustedTimeLabel: 'Tiempo inicial ajustado',
  temperatureGuideLabel: 'Notas de temperatura de campo',
  temperatureGuideHelp: 'Guía práctica basada en la temperatura medida. La fila destacada corresponde a tu lectura.',
  sourceLabel: 'Combinación documentada',
  eiLabel: 'Ajuste de fotómetro',
  statusCool: 'Baño más frío',
  statusSteady: 'Cercano al estándar',
  statusWarm: 'Baño más cálido',
  warningShortTime: 'Menos de 5 minutos aumenta el riesgo de revelado irregular. Elige un proceso documentado o amplía el tiempo únicamente tras realizar tus propias pruebas.',
  warningOutOfRange: 'Esta medida está en el límite del rango recomendado. Mantén estable la temperatura del revelador y consulta los datos del fabricante.',
  guideNotice: 'Esta es una guía de inicio, no una garantía. La agitación, el equipo, el contraste buscado y tu proceso personal alteran el resultado final.',
  resetLabel: 'Restaurar la primera combinación documentada',
  minutesLabel: 'min',
  secondsLabel: 'seg',
  currentBadge: 'Actual',
  belowFiveMinutes: 'Menos de 5 minutos',
  tableTemperature: 'Temperatura',
  tableTime: 'Tiempo guía',
  tableDifference: 'Respecto a 20 °C',
  currentRow: 'Actual',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'Calculadora de Tiempo de Revelado de Película por Temperatura',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: 'Ajusta el tiempo de revelado de película en blanco y negro según la temperatura medida del revelador.',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '¿Qué temperatura utiliza la calculadora como base?', acceptedAnswer: { '@type': 'Answer', text: 'Cada combinación de película y revelador parte del tiempo oficial del fabricante especificado a 20 °C y lo ajusta según la temperatura real.' } },
    { '@type': 'Question', name: '¿Los tiempos ajustados son una garantía definitiva?', acceptedAnswer: { '@type': 'Answer', text: 'No. Son una referencia práctica inicial. La agitación, la geometría del tanque, la antigüedad de la química y el contraste deseado pueden modificar el resultado.' } },
    { '@type': 'Question', name: '¿Por qué aparece una advertencia con tiempos inferiores a 5 minutos?', acceptedAnswer: { '@type': 'Answer', text: 'Tiempos de revelado muy cortos dejan un margen escaso para el llenado, la agitación y el vaciado, aumentando el riesgo de un revelado desigual en la emulsión.' } },
    { '@type': 'Question', name: '¿Qué debo hacer si mi película o revelador no están en la lista?', acceptedAnswer: { '@type': 'Answer', text: 'Consulta la hoja técnica oficial del fabricante o una tabla de revelado contrastada. Esta herramienta no inventa combinaciones no documentadas.' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: 'Cómo ajustar el tiempo de revelado de película por temperatura',
  step: [
    { '@type': 'HowToStep', name: 'Selecciona la película', text: 'Elige el tipo y sensibilidad de la película cargada en tu tanque de revelado.' },
    { '@type': 'HowToStep', name: 'Coincide el revelador y la dilución', text: 'Selecciona el revelador oficial y la dilución exacta que vas a utilizar.' },
    { '@type': 'HowToStep', name: 'Mide la temperatura', text: 'Mide e introduce la temperatura real de la solución de revelador antes de iniciar el proceso.' },
    { '@type': 'HowToStep', name: 'Aplica el tiempo ajustado', text: 'Utiliza el tiempo ajustado como punto de partida práctico para el revelado en tu laboratorio analógico.' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'calculadora-tiempo-revelado-pelicula-temperatura',
  title: 'Calculadora de Tiempo de Revelado de Película por Temperatura',
  description: 'Ajusta el tiempo de revelado de película en blanco y negro según la temperatura medida del revelador, con una tabla de referencia clara.',
  ui,
  seo: [
    { type: 'title', level: 2, text: 'Cómo ajustar el tiempo de revelado según la temperatura de la química' },
    { type: 'paragraph', html: 'Selecciona la combinación exacta de película, revelador y dilución documentada en la tabla, e introduce la temperatura medida de la solución de trabajo. La calculadora toma como referencia el tiempo publicado a 20 °C y genera un tiempo inicial ajustado y práctico para tu laboratorio.' },
    { type: 'title', level: 3, text: 'Interpreta el resultado como un punto de partida profesional' },
    { type: 'paragraph', html: 'La temperatura altera la actividad química del revelador: una solución más cálida requiere menos tiempo de procesado, mientras que una solución más fría exige un tiempo mayor. La tabla de referencia muestra de forma clara el comportamiento temporal en torno a tu lectura actual.' },
    { type: 'tip', title: 'Mantén un proceso de laboratorio riguroso', html: 'No consideres el tiempo calculado como una fórmula mágica e inmutable. El ritmo de agitación, el diseño del tanque, el estado de conservación del revelador y tus propias pruebas previas siguen teniendo una importancia fundamental en la densidad y contraste del negativo.' },
    { type: 'title', level: 3, text: 'Por qué es indispensable partir de datos oficiales documentados' },
    { type: 'list', items: ['La pareja formada por película y revelador determina el grano, la acutancia y la sensibilidad efectiva.', 'La dilución modifica la velocidad de agotamiento de la química y no debe deducirse arbitrariamente de otra proporción.', 'Los tiempos inferiores a 5 minutos requieren precaución extrema porque pequeñas variaciones al verter o vaciar el tanque generan diferencias notables.'] },
  ],
  faq: [
    { question: '¿Qué temperatura utiliza la calculadora como base?', answer: 'Cada combinación de película y revelador parte del tiempo oficial del fabricante especificado a 20 °C y lo ajusta según la temperatura real.' },
    { question: '¿Los tiempos ajustados son una garantía definitiva?', answer: 'No. Son una referencia práctica inicial. La agitación, la geometría del tanque, la antigüedad de la química y el contraste deseado pueden modificar el resultado.' },
    { question: '¿Por qué aparece una advertencia con tiempos inferiores a 5 minutos?', answer: 'Tiempos de revelado muy cortos dejan un margen escaso para el llenado, la agitación y el vaciado, aumentando el riesgo de un revelado desigual en la emulsión.' },
    { question: '¿Qué debo hacer si mi película o revelador no están en la lista?', answer: 'Consulta la hoja técnica oficial del fabricante o una tabla de revelado contrastada. Esta herramienta no inventa combinaciones no documentadas.' },
  ],
  bibliography,
  howTo: [
    { name: 'Selecciona la película', text: 'Elige el tipo y sensibilidad de la película cargada en tu tanque de revelado.' },
    { name: 'Coincide el revelador y la dilución', text: 'Selecciona el revelador oficial y la dilución exacta que vas a utilizar.' },
    { name: 'Mide la temperatura', text: 'Mide e introduce la temperatura real de la solución de revelador antes de iniciar el proceso.' },
    { name: 'Aplica el tiempo adjusted', text: 'Utiliza el tiempo ajustado como punto de partida práctico para el revelado en tu laboratorio analógico.' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};

import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'calculadora-fallo-reciprocidad-pelicula-fotografica';
const title = 'Calculadora de Fallo de Reciprocidad en Película Fotográfica';
const description = 'Corrige exposiciones largas en fotografía analógica con los factores oficiales de fabricantes como ILFORD y KENTMERE.';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'Preguntas sobre el fallo de reciprocidad en película',
  bibliographyTitle: 'Fuentes',
  studyLabel: 'Estudio de larga exposición',
  studyTitle: 'Deja que la emulsión se tome su tiempo',
  studyText: 'El fotómetro mide la luz incidente instantánea. La emulsión requiere más tiempo para formar la misma densidad.',
  filmLabel: 'Selecciona una película',
  filmHint: 'Utiliza el factor publicado para la película ILFORD o KENTMERE elegida.',
  measuredTimeLabel: 'Introduce el tiempo del fotómetro',
  measuredTimeHint: 'La corrección se activa a partir de 1 segundo de exposición.',
  secondsUnit: 'segundos',
  filmMenuLabel: 'Menú de películas',
  presetsLabel: 'Ajustes rápidos de campo',
  presetShort: 'Límite de reciprocidad',
  presetNight: 'Calle nocturna',
  presetDeepNight: 'Noche profunda',
  resultLabel: 'Exposición corregida',
  correctedTimeLabel: 'Tiempo final recomendado',
  addedTimeLabel: 'Tiempo adicional',
  correctionStopsLabel: 'Aumento en pasos (EV)',
  correctionFactorLabel: 'Factor de película',
  noCorrection: 'Sin necesidad de corrección',
  correctionNeeded: 'Corrección de reciprocidad activa',
  longExposure: 'Zona de exposición prolongada',
  meterTimeLabel: 'Lectura fotómetro',
  filmTimeLabel: 'Tiempo ajustado',
  exposurePathLabel: 'Evolución visual de la exposición',
  exposurePathText: 'La tira de película aumenta progresivamente desde la medición inicial hasta el tiempo corregido.',
  formulaLabel: 'Ecuación de trabajo',
  formulaText: 'Tiempo corregido = tiempo medido elevado al factor de la película.',
  manufacturerNote: 'Factores procedentes de la documentación técnica de HARMAN. Toma el resultado como un punto de partida y realiza tus propias pruebas.',
  resetLabel: 'Restablecer cálculo',
  invalidTime: 'Introduce un tiempo superior a cero.',
  sourceLabel: 'Nota del fabricante',
};

const faq: FAQItem[] = [
  {
    question: '¿Qué es el fallo de reciprocidad en fotografía analógica?',
    answer: 'El fallo del efecto de reciprocidad o ley de Bunsen-Roscoe es la pérdida de sensibilidad de la película durante exposiciones prolongadas. La luz recibida durante más tiempo genera menor densidad de la esperada, por lo que se requiere más tiempo del que indica el fotómetro.',
  },
  {
    question: '¿Cómo calcula el tiempo esta herramienta de reciprocidad?',
    answer: 'Aplica la fórmula oficial de HARMAN: tiempo corregido igual al tiempo medido elevado al factor exponente P de la película elegida. Las exposiciones de 1 segundo o menos no sufren corrección.',
  },
  {
    question: '¿Por qué cada película tiene un factor de corrección distinto?',
    answer: 'La respuesta de los haluros de plata varía según el diseño de la emulsión. Películas como HP5+, FP4+, DELTA o KENTMERE poseen factores diferentes publicados en sus fichas técnicas.',
  },
  {
    question: '¿El tiempo calculado garantiza un negativo perfecto?',
    answer: 'No. En exposiciones muy largas influyen factores adicionales como la precisión de la medición, la agitación y temperatura del revelado, y el contraste de la escena. Sirve como excelente punto de partida.',
  },
];

const howTo: HowToStep[] = [
  { name: 'Selecciona la película', text: 'Elige la película cargada en tu cámara para aplicar su factor de reciprocidad específico.' },
  { name: 'Introduce el tiempo medido', text: 'Escribe los segundos indicados por el fotómetro o utiliza uno de los accesos rápidos.' },
  { name: 'Lee la exposición corregida', text: 'Ajusta el obturador al nuevo tiempo calculado y comprueba el incremento en pasos EV.' },
  { name: 'Realiza un ahorquillado (bracketing)', text: 'En tomas nocturnas muy largas, realiza capturas adicionales ajustando levemente los tiempos.' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: 'Corrección documentada para larga exposición',
    items: [
      'Aplica el factor oficial para 11 películas en blanco y negro ILFORD y KENTMERE',
      'Compara la lectura del fotómetro con el tiempo real que necesita la emulsión',
      'Analiza la corrección en segundos extra, compensación en pasos EV y ruta visual',
      'Facilita el trabajo de campo mediante tres preajustes frecuentes de nocturna',
    ],
  },
  { type: 'title', text: 'Por qué la larga exposición requiere corregir la reciprocidad', level: 2 },
  {
    type: 'paragraph',
    html: 'A velocidades de obturación convencionales, la ley de reciprocidad establece que la exposición es el producto de la intensidad de la luz por el tiempo. En exposiciones largas, la emulsión pierde eficiencia al formar centros de imagen latente estables. El fotómetro señala un tiempo físicamente exacto pero químicamente insuficiente.',
  },
  { type: 'title', text: 'La ecuación del fabricante para el cálculo', level: 2 },
  {
    type: 'table',
    headers: ['Película', 'Factor oficial', 'Ejemplo para 10 segundos'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 segundos'],
      ['ILFORD FP4+', '1.26', '18.2 segundos'],
      ['ILFORD SFX 200', '1.43', '26.9 segundos'],
      ['KENTMERE 400', '1.30', '20.0 segundos'],
    ],
  },
  {
    type: 'paragraph',
    html: 'La calculadora aplica la fórmula Tc = Tm<sup>P</sup>, donde Tm es el tiempo medido en segundos, Tc es el tiempo corregido y P es el exponente publicado por HARMAN. Para exposiciones de 1 segundo o menos no se requiere corrección.',
  },
  {
    type: 'tip',
    title: 'Utiliza el resultado como base de partida',
    html: 'Las largas exposiciones dependen de más variables que la reciprocidad. Los errores de fotometría, el contraste de la escena y el revelado afectan a la densidad. Para tomas clave, realiza un ahorquillado alrededor del valor calculado.',
  },
  { type: 'title', text: 'Cuándo aplicar la corrección de reciprocidad', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>Utiliza factores oficiales:</strong> Coincide la emulsión con los datos publicados por el fabricante.',
      '<strong>Mantén la consistencia:</strong> El tipo de revelador y la agitación influyen en el resultado final del negativo.',
      '<strong>Ahorquilla tomas muy largas:</strong> Cuanto mayor sea el tiempo, más útil resulta realizar exposiciones de prueba.',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'es',
};

export const content: ToolLocaleContent<FilmReciprocityFailureCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};

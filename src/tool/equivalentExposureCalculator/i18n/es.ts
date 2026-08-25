import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'calculadora-exposicion-equivalente';
const title = 'Calculadora de Exposición Equivalente Triángulo de Exposición';
const description = 'Calcula ajustes equivalentes de velocidad de obturación, apertura (f-stop) e ISO para mantener el valor EV con control creativo.';

const ui: EquivalentExposureUI = {
  "title": "Calculadora de Exposición Equivalente",
  "subtitle": "Calcula parámetros recíprocos de velocidad de obturación, apertura e ISO para mantener un valor de exposición constante.",
  "baseSettingsTitle": "Ajuste de Exposición Base",
  "targetSettingsTitle": "Ajuste Equivalente Objetivo",
  "lockModeLabel": "Calcular Automáticamente",
  "isoLabel": "Sensibilidad ISO",
  "apertureLabel": "Apertura (paso f)",
  "shutterLabel": "Velocidad de Obturación",
  "lockIsoOption": "Calcular ISO (Mantener Apertura y Velocidad)",
  "lockApertureOption": "Calcular Apertura (Mantener ISO y Velocidad)",
  "lockShutterOption": "Calcular Velocidad (Mantener ISO y Apertura)",
  "presetsTitle": "Ajustes Rápidos",
  "presetSunny16": "Regla Soleada 16",
  "presetOvercast": "Día Nublado",
  "presetIndoor": "Luz de Interior",
  "presetNight": "Fotografía Nocturna",
  "targetEvLabel": "EV Objetivo"
};

const faq: FAQItem[] = [
  {
    "question": "¿Qué es el Valor de Exposición (EV) y cómo se calcula?",
    "answer": "El EV es una escala logarítmica que combina velocidad y apertura a ISO 100. Su fórmula matemática es EV = log2(N^2 / t)."
  },
  {
    "question": "¿Cómo mantienen las exposiciones equivalentes el brillo de la imagen?",
    "answer": "Al compensar pasos de luz entre ISO, velocidad y apertura, la energía luminosa capturada por el sensor permanece constante."
  },
  {
    "question": "¿Qué es la regla Soleada 16 en reciprocidad fotográfica?",
    "answer": "Establece que en un día soleado a f/16, la velocidad de obturación es el inverso del ISO (ej. ISO 100 requiere 1/100s)."
  },
  {
    "question": "¿Cómo altera la selección de apertura la profundidad de campo?",
    "answer": "Abrir la apertura reduce la profundidad de campo aislando al sujeto con un fondo desenfocado."
  }
];

const howTo: HowToStep[] = [
  {
    "name": "Seleccionar Ajustes Base",
    "text": "Elige los valores base de ISO, apertura y velocidad de tu escena."
  },
  {
    "name": "Elegir Modo de Bloqueo",
    "text": "Selecciona qué variable deseas calcular automáticamente."
  },
  {
    "name": "Ajustar Parámetros Creativos",
    "text": "Modifica tus variables objetivo para ver la reciprocidad instantánea."
  },
  {
    "name": "Evaluar Efectos Creativos",
    "text": "Inspecciona el diagrama vectorial y los indicadores de profundidad y ruido."
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: 'Características de Reciprocidad de Exposición',
    items: [
      "Cálculo exacto de tercios de EV entre ISO, Apertura y Velocidad",
      "Visualizador vectorial dinámico del Triángulo de Exposición en SVG",
      "Retroalimentación sobre profundidad de campo, movimiento y ruido",
      "Ajustes rápidos de 1 clic para Soleado 16, Nublado y Noche"
    ],
  },
  { type: 'title', text: 'Comprendiendo el Triángulo de Exposición', level: 2 },
  {
    type: 'paragraph',
    html: 'La exposición en fotografía se rige por la interacción continua entre la apertura del diafragma, la velocidad de obturación y la sensibilidad ISO del sensor. Cualquier modificación introducida en una de estas tres variables exige una compensación recíproca en las demás para conservar la misma energía luminosa y mantener la exposición uniforme.',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: 'Luz Solar Base (Soleado 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: 'Precisión de Tercios de Paso', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: 'Proporción Estándar de Enfoque', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: 'Objetivo Creativo', level: 3 },
  {
    type: 'table',
    headers: [
      "Objetivo Creativo",
      "Ajuste de Apertura",
      "Ajuste de Obturación",
      "Ajuste de ISO",
      "Consecuencia Visual"
    ],
    rows: [
      [
        "Congelar Acción",
        "Abrir (f/2.8)",
        "Más rápida (1/1000s)",
        "Mantener constante",
        "Menor profundidad de campo"
      ],
      [
        "Nitidez en Paisaje",
        "Cerrar (f/11)",
        "Más lenta (1/30s)",
        "Mantener constante",
        "Requiere trípode o apoyo"
      ],
      [
        "Poca Luz a Mano",
        "Abrir al máximo (f/1.4)",
        "Límite de pulso (1/60s)",
        "Aumentar (ISO 3200)",
        "Mayor grano y ruido"
      ],
      [
        "Máxima Calidad Estudio",
        "Apertura óptima (f/8)",
        "Sincro Flash (1/200s)",
        "ISO Base 100",
        "Máximo rango dinámico"
      ]
    ],
  },
  { type: 'title', text: 'Impacto Creativo de los Ajustes Equivalentes', level: 3 },
  {
    type: 'paragraph',
    html: 'Aunque las configuraciones de exposición equivalente producen exactamente la misma luminosidad global en el fotograma, la estética creativa de la imagen cambia drásticamente según la combinación seleccionada:',
  },
  {
    type: 'list',
    items: [
      "<strong>Apertura:</strong> Controla el diafragma y la profundidad de campo. Aperturas grandes (f/1.4 - f/2.8) producen un fondo desenfocado con bokeh estético.",
      "<strong>Velocidad de obturación:</strong> Controla el tiempo de exposición del sensor y permite elegir entre congelar el movimiento rápido o registrar estelas de movimiento.",
      "<strong>Sensibilidad ISO:</strong> Amplifica electrónicamente la señal del sensor facilitando disparar en condiciones de poca luz a costa de aumentar el ruido."
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'Ajuste de Fondo Desenfocado',
        description: 'Gran apertura para retratos',
        icon: 'mdi:account-box-outline',
        points: [
          "Apertura f/1.4 a f/2.8",
          "Obturación rápida",
          "Bokeh suave"
        ],
      },
      {
        title: 'Ajuste de Paisaje Profundo',
        description: 'Apertura cerrada para nitidez total',
        icon: 'mdi:image-filter-hdr',
        points: [
          "Punto dulce f/8 a f/11",
          "Obturación lenta con trípode",
          "Máxima resolución"
        ],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'Precisión de tercios idéntica a los diales de la cámara',
        con: 'No contempla el fallo de reciprocidad en película ni T-stops',
      },
      {
        pro: 'Visualización SVG reactiva con estado de nitidez',
        con: 'Requiere ajustar el factor de recorte manualmente',
      },
    ],
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "Valor de Exposición (EV)",
        "definition": "Escala logarítmica que combina apertura y velocidad."
      },
      {
        "term": "Ley de Reciprocidad",
        "definition": "Principio de proporcionalidad entre intensidad de luz y tiempo."
      },
      {
        "term": "Paso de Luz (Stop)",
        "definition": "Unidad relativa equivalente a duplicar o reducir a la mitad la luz."
      }
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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

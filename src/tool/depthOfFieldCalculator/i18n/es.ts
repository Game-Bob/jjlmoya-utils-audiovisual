import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { DepthOfFieldUI, DepthOfFieldLocaleContent } from '../index';

const slug = 'calculadora-profundidad-de-campo';
const title = 'Calculadora de Profundidad de Campo: DoF en Tiempo Real';
const description = 'Calcula la profundidad de campo, la distancia hiperfocal y los límites de enfoque en tiempo real. Compatible con todos los sensores y precisión de 1/3 de paso.';

const ui: DepthOfFieldUI = {
    title: 'Profundidad de Campo',
    paramsTitle: 'Parámetros',
    sensorLabel: 'Sensor de la Cámara',
    moreLabel: 'Más sensores…',
    apertureLabel: 'Apertura',
    focalLabel: 'Distancia Focal',
    distanceLabel: 'Distancia al Sujeto',
    metersLabel: 'm',
    feetLabel: 'ft',
    resultsTitle: 'Resultados',
    totalDofLabel: 'Profundidad de Campo Total',
    infiniteLabel: 'Infinito',
    nearLimitLabel: 'Límite Cercano',
    farLimitLabel: 'Límite Lejano',
    hyperfocalLabel: 'Hiperfocal',
    cocLabel: 'Círculo de Confusión',
    cocUnit: 'mm',
    showDetailsLabel: 'Mostrar detalles técnicos',
    hideDetailsLabel: 'Ocultar detalles técnicos',
    errorBelowFocal: 'La distancia al sujeto debe ser mayor que la distancia focal.',
};

const faq: DepthOfFieldLocaleContent['faq'] = [
    {
        question: '¿Qué es la profundidad de campo?',
        answer: 'La profundidad de campo (DoF) es el rango de distancia en una escena que aparece aceptablemente nítido en la imagen final. Se determina por la apertura, la distancia focal, la distancia al sujeto y el tamaño del sensor.',
    },
    {
        question: '¿Qué es la distancia hiperfocal?',
        answer: 'La distancia hiperfocal es la distancia de enfoque más cercana a la cual los objetos en el infinito siguen siendo aceptablemente nítidos. Enfocar a esta distancia maximiza la profundidad de campo para una apertura y distancia focal dadas.',
    },
    {
        question: '¿Por qué una apertura mayor (número f más pequeño) reduce la profundidad de campo?',
        answer: 'Una apertura más amplia recoge luz sobre un área más grande del objetivo, lo que aumenta el tamaño del círculo de confusión para los puntos fuera de foco. Esto estrecha la zona de nitidez aceptable: la profundidad de campo.',
    },
    {
        question: '¿Cómo afecta el tamaño del sensor a la profundidad de campo?',
        answer: 'Los sensores más grandes utilizan un umbral de círculo de confusión más grande, lo que aumenta efectivamente la profundidad de campo aparente para el mismo campo de visión. Sin embargo, al comparar campos de visión equivalentes, los sensores más grandes generalmente producen una profundidad de campo más reducida porque requieren distancias focales más largas.',
    },
];

const howTo: DepthOfFieldLocaleContent['howTo'] = [
    {
        name: 'Selecciona el sensor de tu cámara',
        text: 'Elige el formato de sensor que coincida con el cuerpo de tu cámara. Esto establece el valor del círculo de confusión (CoC) utilizado en todos los cálculos.',
    },
    {
        name: 'Configura la apertura y la distancia focal',
        text: 'Desliza para elegir un paso f en incrementos de 1/3. El carrusel de distancia focal utiliza una escala logarítmica para que los cambios en gran angular sean más granulares.',
    },
    {
        name: 'Ajusta la distancia al sujeto',
        text: 'Indica la distancia entre tu cámara y el sujeto principal. Cambia entre metros y pies según necesites; se recordará tu última elección.',
    },
    {
        name: 'Lee los resultados',
        text: 'La Barra de Enfoque visualiza la zona nítida alrededor de tu sujeto. Los límites cercano y lejano muestran los bordes de enfoque aceptable, y la distancia hiperfocal te indica dónde enfocar para maximizar la nitidez del fondo.',
    },
];

const seo: DepthOfFieldLocaleContent['seo'] = [
    { type: 'title', text: 'Entendiendo la Profundidad de Campo en Fotografía y Cine', level: 2 },
    { type: 'paragraph', html: 'La profundidad de campo es una de las herramientas creativas más potentes para fotógrafos y cineastas. Una <strong>profundidad de campo reducida</strong> aisla al sujeto de fondos distractores, mientras que una <strong>profundidad de campo amplia</strong> mantiene nítido todo un paisaje desde el primer plano hasta el horizonte. Esta calculadora te da el control total sobre ambas.' },

    { type: 'title', text: 'Las Tres Variables que Controlan la Profundidad de Campo', level: 3 },
    { type: 'table', headers: ['Variable', 'Incremento →', 'Efecto en DoF'], rows: [
        ['Apertura', 'f/1.4 → f/16', 'Apertura más amplia = DoF más reducida'],
        ['Distancia Focal', '24mm → 200mm', 'Mayor focal = DoF más reducida a la misma distancia'],
        ['Distancia al Sujeto', '1m → 10m', 'Sujeto más lejano = DoF más amplia'],
    ]},

    { type: 'title', text: 'La Distancia Hiperfocal: Nitidez Máxima', level: 3 },
    { type: 'paragraph', html: 'Cuando enfocas a la <strong>distancia hiperfocal</strong>, todo desde la mitad de esa distancia hasta el infinito aparecerá aceptablemente nítido. Los fotógrafos de paisajes usan esta técnica para asegurar que tanto una roca en primer plano como las montañas lejanas estén enfocadas simultáneamente.' },
    { type: 'tip', title: 'Consejo práctico', html: 'Para fotografía callejera, ajusta tu enfoque a la distancia hiperfocal y dispara sin mirar por el visor. Con un objetivo de 35mm en APS-C a f/8, la hiperfocal está a unos <strong>4 metros</strong>: todo desde los 2m hasta el infinito estará nítido.' },

    { type: 'title', text: 'Tamaño del Sensor y Círculo de Confusión', level: 3 },
    { type: 'paragraph', html: 'El <strong>círculo de confusión (CoC)</strong> es el umbral que define la "nitidez aceptable" para un formato de sensor determinado. Un sensor Full Frame tiene un CoC de 0,030 mm; un sensor de smartphone usa ~0,006 mm. Valores de CoC más pequeños implican criterios de nitidez más estrictos y, por tanto, una menor profundidad de campo percibida.' },
    { type: 'stats', columns: 3, items: [
        { label: 'Full Frame', value: '0,030 mm', icon: 'mdi:camera' },
        { label: 'APS-C', value: '0,019 mm', icon: 'mdi:camera-outline' },
        { label: 'Smartphone', value: '0,006 mm', icon: 'mdi:cellphone' },
    ]},

    { type: 'title', text: 'La Profundidad de Campo en el Cine: Focal vs. Sensor', level: 3 },
    { type: 'paragraph', html: 'Los cineastas que ruedan en Super 35 (cercano al APS-C) suelen usar distancias focales más largas para comprimir la perspectiva, lo que también reduce la profundidad de campo y crea el característico "look cinematográfico". La combinación de un objetivo luminoso (f/1.4–f/2.8) y una focal de más de 85mm a distancias de retrato es la receta clásica.' },
    { type: 'diagnostic', variant: 'success', title: 'La Regla de Distribución del Enfoque', icon: 'mdi:lightbulb-outline', badge: 'Técnica Pro', html: 'Para un sujeto a 3 metros con un 50mm a f/2.8 en Full Frame: límite cercano ≈ 2,73m, límite lejano ≈ 3,33m, DoF total ≈ 60cm. La zona trasera siempre es mayor que la delantera, aproximadamente en una <strong>proporción 2:1</strong> para la mayoría de distancias reales.' },
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

export const content: DepthOfFieldLocaleContent = {
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

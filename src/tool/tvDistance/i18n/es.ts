import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'distancia-tv';
const title = 'Calculadora de Distancia TV - Pantalla Óptima THX y 4K';
const description = 'Calcula la distancia ideal para ver tu televisor según su tamaño y resolución. Optimiza tu Home Cinema con los estándares THX y SMPTE.';

const ui: TvDistanceUI = {
    specTitle: "Especificaciones",
    diagonalLabel: "Tamaño Diagonal",
    resolutionLabel: "Resolución",
    thxRecommendation: "Recomendación THX",
    thxDescription: "THX recomienda una distancia que cubra un ángulo de visión de 40 grados para una experiencia cinematográfica inmersiva.",
    simulationBadge: "Simulación en Tiempo Real",
    tvWidthLabel: "cm de ancho",
    userLocationLabel: "Tu Ubicación",
    minLimitLabel: "Límite Mínimo",
    optimalLimitLabel: "Distancia Óptima",
    maxLimitLabel: "Límite Máximo",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "¿Por qué importa la resolución al calcular la distancia?",
        answer: "A mayor resolución (como 4K u 8K), los píxeles son más pequeños. Esto permite sentarse más cerca sin percibir la rejilla de píxeles, aumentando la inmersión sin perder nitidez.",
    },
    {
        question: "¿Qué es el ángulo de visión de 40 grados?",
        answer: "Es el estándar recomendado por THX para que la pantalla ocupe gran parte de tu visión periférica, similar a la experiencia de una sala de cine profesional.",
    },
    {
        question: "¿Puedo sentarme más lejos de lo recomendado?",
        answer: "Sí, pero perderás el beneficio de las altas resoluciones. Si te sientas muy lejos de una TV 4K, tu ojo no podrá distinguir los detalles extra y la verás como si fuera 1080p.",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "Indica las pulgadas",
        text: "Mueve el deslizador hasta seleccionar el tamaño de tu televisor actual o el que piensas comprar.",
    },
    {
        name: "Selecciona la resolución",
        text: "Elige entre 1080p, 4K u 8K para ajustar los límites de agudeza visual.",
    },
    {
        name: "Visualiza la simulación",
        text: "Observa en el diagrama cómo cambia la relación de tamaño entre tú y la pantalla.",
    },
    {
        name: "Ajusta tu sofá",
        text: "Coloca tu asiento dentro del rango de 'Distancia Óptima' para maximizar la inmersión cinematográfica.",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
    {
        name: "SMPTE - Documentación de Estándares",
        url: "https://www.smpte.org/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    { type: 'title', text: 'La ciencia de la inmersión: ¿A qué distancia sentarse?', level: 2 },
    { type: 'paragraph', html: 'No se trata solo de comodidad, sino de fisiología humana. El ojo humano tiene un límite de resolución; si te sientas demasiado lejos de una pantalla de alta definición, estás desperdiciando dinero en píxeles que no puedes ver.' },
    
    { type: 'title', text: 'Estándares de la Industria: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Existen dos grandes autoridades que definen cómo debemos ver el contenido audiovisual:' },
    { type: 'list', items: [
        '<strong>THX:</strong> Propone un ángulo de 40º. Es la opción más inmersiva, ideal para películas de acción y experiencias tipo cine.',
        '<strong>SMPTE:</strong> Recomienda un mínimo de 30º. Es una distancia más relajada, pensada para contenido variado como noticias o deportes.'
    ]},

    { type: 'card', title: 'Fatiga Visual', icon: 'mdi:eye-outline', html: 'Estar demasiado cerca puede causar fatiga debido al exceso de movimiento ocular. Nuestra calculadora asegura que estés en el "sweet spot" donde la pantalla llena tu visión sin causar estrés.' },

    { type: 'diagnostic', variant: 'info', title: 'Resolución Retina', icon: 'mdi:monitor-screenshot', badge: 'Dato Técnico', html: 'Para una TV de 55 pulgadas en 4K, el punto donde dejas de ver los píxeles individuales es aproximadamente 1.2 metros. Más cerca de eso, empezarás a notar la estructura de la imagen.' },
    
    { type: 'title', text: 'Conclusión: Tu Cine en Casa perfecto', level: 3 },
    { type: 'paragraph', html: 'Configura tu espacio siguiendo estos estándares para transformar tu salón en una auténtica sala de proyección. La distancia es tan importante como la calidad del panel.' }
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

export const content: TvDistanceLocaleContent = {
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

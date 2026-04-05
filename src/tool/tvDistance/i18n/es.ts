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
    {
        type: 'summary',
        title: 'Distancia Óptima para TV según Resolución y Tamaño',
        items: [
            'Estándares THX (40°) para experiencia cinematográfica inmersiva',
            'Cálculos para 1080p, 4K y 8K con máxima precisión',
            'Simulación visual en tiempo real de tu configuración',
            'Evita fatiga ocular y maximiza la inmersión del contenido'
        ]
    },
    { type: 'title', text: 'Ciencia de la Inmersión: Distancia Óptima para TV', level: 2 },
    { type: 'paragraph', html: 'No se trata solo de comodidad, sino de fisiología visual humana. El ojo tiene un límite de agudeza resolución; si te sientas demasiado lejos de una pantalla 4K, estás desperdiciando dinero en píxeles que tu visión no puede aprovechar. Y si te sientas demasiado cerca, causa fatiga ocular.' },

    { type: 'stats', items: [
        { value: '40°', label: 'Ángulo THX Ideal', icon: 'mdi:eye' },
        { value: '100%', label: 'Píxeles Aprovechados', icon: 'mdi:video-high-definition' },
        { value: 'Cero', label: 'Fatiga Visual', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: 'Dos Estándares Profesionales: THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: 'Existen dos autoridades principales en la industria audiovisual que definen cómo optimizar tu experiencia de visualización:' },
    { type: 'comparative', items: [
        {
            title: 'Estándar THX',
            description: 'Ángulo de visión de 40° - Más inmersivo',
            icon: 'mdi:filmstrip',
            points: [
                'Pantalla ocupa mayor parte de tu visión periférica',
                'Experiencia cinematográfica inmersiva',
                'Ideal para películas de acción, deportes en vivo',
                'Requiere más espacio en la sala'
            ],
            highlight: true
        },
        {
            title: 'Estándar SMPTE',
            description: 'Ángulo de visión de 30° - Más relajado',
            icon: 'mdi:television',
            points: [
                'Distancia más cómoda para sentarse',
                'Recomendación profesional conservadora',
                'Ideal para contenido variado (noticias, series)',
                'Mejor para salas más pequeñas'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Cómo la Resolución Cambia la Ecuación', level: 3 },
    { type: 'table', headers: ['Resolución', 'Tamaño TV de 55"', 'Distancia Mínima (sin píxeles visibles)', 'Distancia Óptima THX'], rows: [
        ['1080p (Full HD)', '55 pulgadas', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 pulgadas', '1.2 m', '1.5 m'],
        ['8K', '55 pulgadas', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'Como ves, la resolución más alta permite sentarse más cerca sin percibir la estructura de píxeles. Una TV 4K puede apreciarse desde 1.2 metros de distancia; un 1080p necesita al menos 2 metros.' },

    { type: 'card', title: 'El Límite de la Agudeza Visual Humana', html: 'El ojo humano tiene una capacidad límite de resolución (agudeza visual). A partir de cierta distancia, no puedes distinguir más detalles aunque la pantalla tenga 8K. Nuestros cálculos te posicionan exactamente en la "zona óptima" donde aprovechas el 100% de los píxeles sin gastar energía ocular innecesaria.' },

    { type: 'diagnostic', variant: 'info', title: 'Fatiga Ocular y Distancia', icon: 'mdi:information', badge: 'Salud Visual', html: 'Estar demasiado cerca causa fatiga porque tus ojos necesitan acomodarse constantemente a ángulos extremos. Estar demasiado lejos causa esfuerzo para distinguir detalles. Nuestra calculadora te posiciona en el "sweet spot" donde la pantalla llena tu visión natural (40° para THX) sin causar estrés ocular.' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40° crea inmersión cinematográfica verdadera - como una sala de cine profesional',
            con: 'Requiere más espacio disponible en la sala'
        },
        {
            pro: '4K permite sentarse más cerca que 1080p - útil en espacios pequeños',
            con: 'Debes estar a distancia mínima para aprovechar los píxeles extra'
        },
        {
            pro: 'Evita fatiga ocular posicionándote correctamente desde el inicio',
            con: 'La mayoría de salas caseras NO siguen estos estándares (por eso la fatiga)'
        },
        {
            pro: 'Puedes validar si tu TV actual está bien posicionada',
            con: 'Si está mal, requiere mover muebles (no es cuestión de software)'
        }
    ], proTitle: 'Ventajas', conTitle: 'Limitaciones' },

    { type: 'glossary', items: [
        {
            term: 'Ángulo de Visión (en grados)',
            definition: 'Ángulo visual que abarca la pantalla desde tu posición. 40° = muy inmersivo (periférica cubierta); 20° = contenido de fondo (no inmersivo).'
        },
        {
            term: 'THX (Tomlinson Holman Experiment)',
            definition: 'Certificación de calidad audiovisual creada por Lucasfilm. Define estándares para cines, home theater y equipos de audio. 40° es su recomendación principal.'
        },
        {
            term: 'SMPTE (Society of Motion Picture Technical Engineers)',
            definition: 'Organización de estándares técnicos para cine y vídeo. Recomienda 30° como distancia profesional conservadora.'
        },
        {
            term: 'Agudeza Visual Humana',
            definition: 'Capacidad del ojo para distinguir detalles finos. Un píxel individual es imperceptible pasada cierta distancia (depende de resolución).'
        },
        {
            term: '4K (Ultra HD)',
            definition: 'Resolución de ~3840x2160 píxeles. 4 veces más píxeles que 1080p. Permite acercarse más sin percibir la estructura de píxeles.'
        }
    ] },

    { type: 'message', title: 'Optimización Profesional de Salas Audiovisuales', ariaLabel: 'Información sobre estándares de configuración de TV', html: 'Los cines profesionales gastan millones asegurando que la distancia, ángulo e iluminación sean perfectos. Nuestra calculadora te trae esos mismos principios a tu casa. No es lujo: es una inversión en comodidad visual y aprovechamiento máximo de tu equipo.' },

    { type: 'title', text: 'Configura tu Home Cinema Profesionalmente', level: 3 },
    { type: 'paragraph', html: 'La distancia es TAN importante como el tamaño de pantalla y la resolución. Sigue estos estándares para transformar tu salón en una auténtica sala cinematográfica. Verás películas, series y contenido deportivo con la inmersión para la que fueron diseñados.' }
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
    faqTitle: 'Preguntas frecuentes sobre distancia de TV',
    bibliography,
    bibliographyTitle: 'Estándares profesionales de configuración TV',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

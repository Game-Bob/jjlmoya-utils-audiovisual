import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'lente-cromatica';
const title = 'Lente Cromática - Extracción de Paletas de Color Online';
const description = 'Extrae paletas de colores profesionales de cualquier imagen de forma gratuita. Identifica los colores dominantes de tus fotos mediante algoritmos matemáticos.';

const ui: ChromaticLensUI = {
    dropTitle: "Analizar Colores",
    dropSubtitle: "Arrastra una imagen para extraer su ADN cromático.",
    processingLabel: "Extrayendo paleta...",
    paletteTitle: "Paleta Extraída",
    copyLabel: "Copiar HEX",
    copiedLabel: "¡Copiado!",
    colorCountLabel: "Número de colores",
    changeImage: "Cambiar imagen"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "¿Cómo funciona la extracción de colores?",
        answer: "Utilizamos el algoritmo 'Median Cut', que agrupa los píxeles de la imagen según su proximidad en el espacio de color RGB para encontrar los tonos más representativos.",
    },
    {
        question: "¿Puedo copiar los colores a mi editor de diseño?",
        answer: "Sí, al hacer clic en cada color se copiará automáticamente el código HEX al portapapeles, listo para pegar en Photoshop, Figma o CSS.",
    },
    {
        question: "¿Qué tipos de imágenes puedo analizar?",
        answer: "Cualquier archivo JPG, PNG o WebP. El procesamiento es local, por lo que imágenes pesadas se analizarán rápidamente sin consumir datos de red.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Carga la imagen",
        text: "Sube la fotografía de la que quieras extraer la inspiración cromática.",
    },
    {
        name: "Ajusta la precisión",
        text: "Selecciona cuántos colores dominantes quieres que la herramienta identifique (de 3 a 12).",
    },
    {
        name: "Analiza el resultado",
        text: "La paleta aparecerá instantáneamente con sus códigos hexadecimales correspondientes.",
    },
    {
        name: "Copia y utiliza",
        text: "Haz clic en los tonos para guardarlos y aplicarlos a tu proyecto de diseño.",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "Median Cut Algorithm - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Median_cut",
    },
    {
        name: "Color Theory for Designers",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Extracción Inteligente de Paletas de Color',
        items: [
            'Algoritmo Median Cut profesional para análisis de color',
            'Extrae 3-12 colores dominantes de cualquier imagen',
            'Códigos HEX copiables directamente al portapapeles',
            'Procesamiento 100% local - ideal para creativos'
        ]
    },
    { type: 'title', text: 'Extracción de Paletas de Color: Ciencia y Diseño', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez te has preguntado por qué una fotografía de cine se siente tan armoniosa? No es casualidad; es la teoría del color en acción. Lente Cromática te permite extraer esa armonía directamente del píxel, transformándola en códigos HEX utilizables en tus proyectos de diseño.' },

    { type: 'stats', items: [
        { value: 'Instant', label: 'Análisis de Color', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'Privacidad Local', icon: 'mdi:lock' },
        { value: 'RGB', label: 'Espacio de Color Preciso', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'El Algoritmo Median Cut Explicado', level: 3 },
    { type: 'paragraph', html: 'La extracción inteligente de paletas no es un simple muestreo aleatorio de píxeles. Utiliza el algoritmo Median Cut, una técnica de particionamiento recursivo que garantiza representación fiel:' },
    { type: 'list', items: [
        '<strong>División Recursiva:</strong> El "cubo de color" RGB de la imagen se divide recursivamente en cajas más pequeñas.',
        '<strong>Equilibrio de Volumen:</strong> Cada partición busca agrupar píxeles del mismo espacio de color con volúmenes similares.',
        '<strong>Promedio Ponderado:</strong> El color resultante de cada caja es el promedio de todos los píxeles que contiene.',
        '<strong>Representación Fiel:</strong> Los colores dominantes reflejan la atmósfera visual real de la imagen, no un simple muestreo.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Flujo de Trabajo Creativo', html: 'Ideal para desarrolladores web, diseñadores UX/UI, artistas digitales y creativos que buscan capturar instantáneamente la esencia visual de una fotografía, película o referencia visual para aplicarla en sus interfaces, ilustraciones o paletas de marca.' },

    { type: 'title', text: 'Casos de Uso en Diseño Digital', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Diseñadores de Interfaz (UX/UI)',
            description: 'Extraer paletas de imágenes hero para crear interfaces cohesivas',
            icon: 'mdi:palette',
            points: [
                'Colores de fondo armónicos',
                'Botones y elementos secundarios',
                'Contraste calculado automáticamente'
            ]
        },
        {
            title: 'Desarrolladores Web',
            description: 'Crear hojas de estilo CSS directamente desde referencias visuales',
            icon: 'mdi:code-braces',
            points: [
                'Copiar HEX directamente al CSS',
                'Variables de color en SCSS/CSS',
                'Temas cohesivos sin diseño previo'
            ],
            highlight: true
        },
        {
            title: 'Artistas Digitales e Ilustradores',
            description: 'Capturar referencias cromáticas de películas, naturaleza o arte',
            icon: 'mdi:brush',
            points: [
                'Paletas de referencia de obras maestras',
                'Estudios de color cinematográfico',
                'Inspiración visual inmediata'
            ]
        },
        {
            title: 'Especialistas en Branding',
            description: 'Desarrollar identidades visuales basadas en fotografías guía',
            icon: 'mdi:tag-multiple',
            points: [
                'Extraer colores de marca de imágenes',
                'Crear guías cromáticas profesionales',
                'Asegurar consistencia visual'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Teoría del Color Aplicada', level: 3 },
    { type: 'table', headers: ['Concepto de Color', 'Definición', 'Aplicación Práctica'], rows: [
        ['Armonía Cromática', 'Combinación de colores que resulta visualmente equilibrada', 'Identidad visual coherente en UI'],
        ['Contraste', 'Diferencia de luminosidad entre colores', 'Legibilidad y jerarquía visual'],
        ['Saturación', 'Intensidad del color de un tono', 'Profesionalismo (baja) vs Energía (alta)'],
        ['Temperatura de Color', 'Colores cálidos (rojos) vs fríos (azules)', 'Psicología emocional del diseño'],
        ['Paleta Monocromática', 'Variaciones de un solo tono', 'Elegancia y minimalismo']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Precisión matemática en extracción - no es una selección visual aproximada',
            con: 'Pueden incluirse colores poco visibles si tienen gran cantidad de píxeles'
        },
        {
            pro: 'Copia instantánea a portapapeles - integración perfecta con flujo de trabajo',
            con: 'Necesita navegador moderno compatible con Canvas API'
        },
        {
            pro: 'Privacidad total - análisis 100% local sin envío de datos',
            con: 'Sin guardar historial de análisis previos'
        },
        {
            pro: 'Compatible con cualquier formato de imagen digital',
            con: 'Colores finales dependen de compresión y calidad de la imagen'
        }
    ], proTitle: 'Ventajas', conTitle: 'Limitaciones' },

    { type: 'diagnostic', variant: 'success', title: 'Representación Realista de Color', icon: 'mdi:check-circle-outline', badge: 'Algoritmo Avanzado', html: 'A diferencia de herramientas que simplemente samplen píxeles aleatorios, nuestro sistema utiliza el algoritmo Median Cut que pondera toda la cantidad de píxeles de cada tono, asegurando que la paleta resultante sea un reflejo fiel de la atmósfera visual y psicología del color de la imagen original.' },

    { type: 'glossary', items: [
        {
            term: 'Median Cut',
            definition: 'Algoritmo de cuantización de color que divide recursivamente el espacio RGB en cajas, garantizando distribución uniforme. Usado históricamente en GIF y tecnología de color indexado.'
        },
        {
            term: 'Espacio de Color RGB',
            definition: 'Modelo de color basado en rojo, verde y azul. Cada color se representa como combinación de estos tres valores (0-255). Estándar en pantallas digitales y web.'
        },
        {
            term: 'Código HEX',
            definition: 'Notación hexadecimal de 6 dígitos (#RRGGBB) que representa color en web: #FF0000 (rojo), #00FF00 (verde), #0000FF (azul). Universal en CSS, Figma y Adobe.'
        },
        {
            term: 'Saturación de Color',
            definition: 'Intensidad o pureza del color. Alta saturación = color vivo; baja saturación = color grisáceo. Afecta la percepción emocional del diseño.'
        },
        {
            term: 'Armonía Cromática',
            definition: 'Selección y combinación de colores que resulta visualmente agradable. Puede ser monocromática, complementaria, análoga o de triada.'
        }
    ] },

    { type: 'message', title: 'Análisis Cromático Profesional', ariaLabel: 'Información técnica sobre análisis de color', html: 'Lente Cromática transforma análisis visual manual en precisión algorítmica. No solo extrae colores: captura la esencia emocional y visual de cualquier imagen, poniéndola directamente en tu portapapeles como códigos HEX listos para usar. Privacidad total, sin límites de cantidad de análisis.' },

    { type: 'title', text: 'Diseña Desde la Inspiración Visual', level: 3 },
    { type: 'paragraph', html: 'La mejor paleta de color es aquella que captura la intención visual de tu referencia. Lente Cromática automatiza lo que antes era un proceso manual: observar, analizar, anotar. Ahora, simplemente arrastra una imagen y obtén códigos HEX profesionales en segundos.' }
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

export const content: ChromaticLensLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Preguntas frecuentes sobre paletas de color',
    bibliography,
    bibliographyTitle: 'Recursos técnicos sobre teoría del color',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

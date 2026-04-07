import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'calidad-impresion';
const title = 'Calculadora de Calidad de Impresión - Píxeles a CM y DPI';
const description = 'Calcula el tamaño máximo de impresión de tus fotos según su resolución. Convierte píxeles a centímetros y pulgadas para asegurar una impresión profesional.';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "Analizar Resolución",
    dropSubtitle: "Arrastra tu imagen para calcular su tamaño de impresión.",
    resultsTitle: "Especificaciones del Archivo",
    dpiDensityLabel: "Densidad de Impresión Deseada (DPI)",
    dpiPointsLabel: "puntos por pulgada",
    maxPrintTitle: "Tamaño Máximo de Impresión",
    standardFormatsTitle: "Formatos Estándar Soportados",
    formatColumn: "Formato",
    measureColumn: "Medidas",
    supportColumn: "¿Soportado?",
    qualityExcellent: "Calidad Excelente",
    qualityGood: "Calidad Buena",
    qualityFair: "Calidad Pantalla",
    qualityPoor: "No Apto",
    qualityExcellentDesc: "Ideal para revistas de arte, libros de fotografía y visualización cercana.",
    qualityGoodDesc: "Suficiente para pósters y visualización a media distancia.",
    qualityFairDesc: "Adecuado para visualización digital o vallas lejanas.",
    qualityPoorDesc: "La imagen se verá pixelada. No se recomienda imprimir.",
    unitCm: "cm",
    unitInches: "pulg",
    dpiScreenLabel: "Pantalla",
    dpiNewspaperLabel: "Periódico",
    dpiPrintLabel: "Imprenta",
    dpiFineArtLabel: "Fine Art",
    formatPostal: "Postal",
    formatQuartilla: "Cuartilla",
    formatFolio: "Folio",
    formatDoubleFolio: "Doble Folio",
    formatSmallPoster: "Poster Pequeño",
    formatLargePoster: "Poster Grande",
    formatPlane: "Plano",
    supportedText: "Sí (Cubierto)",
    notSupportedPrefix: "No (",
    invalidImageError: "Por favor selecciona una imagen válida"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "¿Qué es el DPI y por qué importa?",
        answer: "DPI (Dots Per Inch) indica cuántos puntos de tinta pondrá la impresora en una pulgada lineal. A mayor DPI, más nitidez, pero menor será el tamaño físico total que cubrirán tus píxeles.",
    },
    {
        question: "¿Cuál es el DPI ideal para imprimir una foto?",
        answer: "El estándar industrial es 300 DPI para una calidad fotográfica excelente. Para impresiones grandes que se verán de lejos, 150 DPI puede ser suficiente.",
    },
    {
        question: "¿Puedo aumentar los DPI de mi imagen sin perder calidad?",
        answer: "No. Aumentar los DPI sin cambiar los píxeles simplemente reduce el tamaño de la impresión. Si 'inventas' píxeles mediante software (upscaling), la imagen puede verse borrosa.",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "Sube tu imagen",
        text: "Carga la fotografía que deseas imprimir para conocer sus dimensiones en píxeles.",
    },
    {
        name: "Ajusta los DPI",
        text: "Desliza la barra para ver cómo cambia el tamaño final según la densidad de puntos (72 a 600 DPI).",
    },
    {
        name: "Verifica el formato",
        text: "Consulta la tabla de formatos estándar (A4, A3, etc.) para ver si tu resolución cubre el papel deseado.",
    },
    {
        name: "Confirma la calidad",
        text: "Asegúrate de que el indicador marque 'Calidad Excelente' antes de enviar a imprenta.",
    },
];

const bibliography: PrintQualityCalculatorLocaleContent['bibliography'] = [
    {
        name: "International Paper Sizes (ISO 216)",
        url: "https://www.iso.org/standard/36631.html",
    },
    {
        name: "Guía de resolución de imagen - Adobe",
        url: "https://www.adobe.com/es/creativecloud/photography/discover/image-resolution.html",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Cálculo Profesional de Resolución para Impresión',
        items: [
            'Convierte píxeles a centímetros y pulgadas con precisión',
            'Calcula tamaño máximo según DPI deseado',
            'Compatibilidad con formatos estándar (A4, A3, etc.)',
            'Guía de 4 niveles de calidad: Excelente a No Apto'
        ]
    },
    { type: 'title', text: 'Guía Definitiva de Calidad de Impresión y DPI', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez has impreso una foto y ha salido borrosa o pixelada? El secreto está en la relación matemática entre <strong>Píxeles</strong> y <strong>DPI</strong> (Dots Per Inch). Esta herramienta calcula el tamaño máximo exacto al que puedes imprimir tus imágenes sin perder calidad profesional.' },

    { type: 'stats', items: [
        { value: '300', label: 'DPI Estándar Profesional', icon: 'mdi:target' },
        { value: '100%', label: 'Cálculos Precisos', icon: 'mdi:check' },
        { value: 'ISO 216', label: 'Formatos Soportados', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Entendiendo DPI: Píxeles vs Puntos', level: 3 },
    { type: 'paragraph', html: 'La confusión común es pensar que DPI y píxeles son lo mismo. No lo son. Los píxeles están EN tu archivo digital. Los DPI son cómo la impresora los convierte en tinta sobre papel.' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> Cuántos puntos de tinta la impresora coloca en una pulgada lineal (2.54 cm).',
        '<strong>Píxeles:</strong> Pequeños cuadrados de datos en tu archivo digital. Una foto de 3000x2000 píxeles tiene información constante, independientemente de DPI.',
        '<strong>La Fórmula:</strong> Tamaño impresión (pulgadas) = Píxeles / DPI. Ejemplo: 3000 píxeles ÷ 300 DPI = 10 pulgadas (25.4 cm)'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'Niveles de Calidad DPI Explicados', level: 3 },
    { type: 'table', headers: ['DPI', 'Calidad Visual', 'Casos de Uso', 'Distancia de Visionado'], rows: [
        ['600+ DPI', 'Excelente (Perfecto)', 'Libros de arte, revistas de lujo, fotografía fina', 'Menos de 10 cm'],
        ['300-400 DPI', 'Excelente (Profesional)', 'Fotografía, libros, catálogos de empresa', '20-30 cm (mano)'],
        ['150-200 DPI', 'Buena (Web Print)', 'Pósters, calendarios, visualización media', '1-2 metros'],
        ['72-100 DPI', 'Pantalla (Fair)', 'Vallas publicitarias, carteles lejanos', '5+ metros'],
        ['10-30 DPI', 'Baja (No Apta)', 'Vallas gigantes, visualización extremadamente lejana', '50+ metros']
    ] },

    { type: 'card', title: 'La Regla de Oro del 300 DPI', html: 'Para impresión fotográfica y editorial profesional, el estándar de la industria es <strong>300 DPI</strong>. Esto garantiza que el ojo humano a distancia normal (20-30 cm) no perciba los puntos individuales de tinta. Menos de 300 DPI y la rejilla de píxeles se vuelve visible.' },

    { type: 'comparative', items: [
        {
            title: 'Fotografía de Mano (Fotos 10x15)',
            description: '300 DPI obligatorio - se ve de cerca',
            icon: 'mdi:image',
            points: [
                'A 3000x2000 píxeles = 10x6.7 pulgadas máximo',
                'Calidad Excelente garantizada',
                'Estándar para álbumes y regalos'
            ]
        },
        {
            title: 'Póster de Pared (A3 - 30x42 cm)',
            description: '150 DPI suficiente - se ve a distancia',
            icon: 'mdi:wall-fire',
            points: [
                'Se visualiza desde 1-2 metros',
                'Menos píxeles necesarios',
                'Ahorras en calidad de cámara'
            ],
            highlight: true
        },
        {
            title: 'Valla Publicitaria (200x300 cm)',
            description: '15-30 DPI - se ve a muchos metros',
            icon: 'mdi:sign',
            points: [
                'Se observa a 20+ metros de distancia',
                'Incluso baja resolución se ve bien',
                'Optimiza archivos de gran tamaño'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Preparar Archivos para Imprenta Profesional', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: Impresoras usan tinta (CMYK), pantallas usan luz (RGB). Convierte para evitar sorpresas de color.',
            con: 'Los colores pueden cambiar al convertir - previsualiza antes'
        },
        {
            pro: 'Sangrado (Bleed): Añade 3mm extra por lado si la imagen debe llegar al borde del papel',
            con: 'Sin sangrado, los bordes cortados pueden quedar blancos'
        },
        {
            pro: 'Upscaling NO funciona: Aumentar píxeles en Photoshop agrega información falsa (suavizado)',
            con: 'Si necesitas imprimir grande, necesitas foto original de alta resolución'
        },
        {
            pro: 'Formatos: TIFF sin compresión o JPEG alta calidad para fotos; vectorial (AI, EPS) para logos',
            con: 'PNG no soporta CMYK nativo en la mayoría de imprentas'
        }
    ], proTitle: 'Recomendaciones', conTitle: 'Contraindicaciones' },

    { type: 'diagnostic', variant: 'warning', title: 'Error Común: El Mito del Upscaling', icon: 'mdi:alert', badge: 'Crítico', html: '<strong>NO aumentes DPI en Photoshop sin cambiar píxeles.</strong> Aumentar de 72 DPI a 300 DPI simplemente reduce el tamaño físico de impresión. Si "añades píxeles" mediante interpolación (upscaling), la imagen se verá suavizada o borrosa. Necesitas píxeles REALES desde el origen.' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: 'Medida de resolución en impresión: cuántos puntos de tinta por pulgada lineal (2.54 cm). 300 DPI = 300x300 = 90,000 puntos por pulgada cuadrada.'
        },
        {
            term: 'CMYK',
            definition: 'Espacio de color de impresión: Cyan, Magenta, Yellow, blacK. Basado en tinta sustractiva. Diferente de RGB (luz aditiva de pantallas).'
        },
        {
            term: 'Sangrado (Bleed)',
            definition: 'Área extra (típicamente 3mm) que se imprime y luego se corta. Asegura que la imagen llegue hasta el borde sin dejar márgenes blancos.'
        },
        {
            term: 'Resolución Nativa',
            definition: 'Píxeles REALES capturados por la cámara, sin manipulación. Aumentar DPI sin cambiar píxeles no genera "resolución nativa".'
        },
        {
            term: 'Interpolación (Upscaling)',
            definition: 'Algoritmo que inventa píxeles nuevos basándose en los existentes. Útil para pequeños aumentos, pero pierde nitidez en ampliaciones grandes.'
        }
    ] },

    { type: 'message', title: 'Precisión Técnica para Resultados Profesionales', ariaLabel: 'Información sobre cálculos de impresión', html: 'Nuestra calculadora convierte píxeles a centímetros considerando estándares internacionales (ISO 216 para papel). No es solo un calculador: es tu validador de si esa foto cabe en ese tamaño de impresión manteniendo calidad profesional.' },

    { type: 'title', text: 'Conclusión: Imprime Sin Sorpresas', level: 3 },
    { type: 'paragraph', html: 'La diferencia entre una impresión hermosa y una decepcionante está en conocer la relación entre píxeles y DPI. Usa esta calculadora para validar tus archivos ANTES de ir a la imprenta. Así evitas gastos innecesarios y resultados frustantes.' }
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

export const content: PrintQualityCalculatorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Preguntas frecuentes sobre resolución de impresión',
    bibliography,
    bibliographyTitle: 'Recursos técnicos sobre impresión digital',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

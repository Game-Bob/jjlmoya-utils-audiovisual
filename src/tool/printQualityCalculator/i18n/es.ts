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
    measureColumn: "Medidas (cm)",
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
    unitInches: "pulg"
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
    { type: 'title', text: 'Guía Definitiva de Calidad de Impresión', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez has impreso una foto y ha salido borrosa o pixelada? El secreto está en la relación entre los <strong>Píxeles</strong> y los <strong>DPI</strong> (Puntos por Pulgada). Esta herramienta te ayuda a calcular el tamaño máximo exacto al que puedes imprimir tus imágenes digitales sin perder calidad.' },

    { type: 'card', icon: 'mdi:printer', title: 'La Regla de Oro: 300 DPI', html: 'Para impresión de alta calidad (revistas, libros, fotos de mano), el estándar de la industria es <strong>300 DPI</strong>. Esto significa que necesitas 300 píxeles por cada pulgada de papel. Si bajas de esta cifra, el ojo humano empieza a notar los "cuadraditos".' },
    { type: 'card', icon: 'mdi:eye-check', title: 'Distancia de Visionado', html: 'No todo necesita 300 DPI. Una valla publicitaria que se ve a 50 metros puede imprimirse a <strong>10 o 20 DPI</strong> y verse perfecta. Un póster de pared suele imprimirse a <strong>150 DPI</strong>. Ahorrar en resolución (si la distancia lo permite) agiliza el trabajo.' },
    { type: 'card', icon: 'mdi:aspect-ratio', title: 'Megapixeles Reales', html: 'Cuidado con el "upscaling". Si aumentas el tamaño de una imagen en Photoshop, aumentas los píxeles pero no la información. Esta calculadora te dice la verdad basada en los <strong>píxeles nativos</strong> del archivo. Si la calidad original es mala, imprimir grande solo magnifica el defecto.' },

    { type: 'title', text: '¿Cómo preparar tus archivos para imprenta?', level: 3 },

    { type: 'card', icon: 'mdi:palette', title: 'Usa Espacio de Color CMYK', html: 'Las pantallas usan luz (RGB), pero las impresoras usan tinta (CMYK). Antes de enviar a imprenta, convierte tu perfil de color. Los colores azules y verdes eléctricos brillantes en pantalla suelen apagarse al imprimir. Previsualizar en CMYK te evitará sorpresas desagradables.' },
    { type: 'card', icon: 'mdi:scissors-cutting', title: 'Sangrado (Bleed)', html: 'Si quieres que tu imagen llegue al borde del papel, debes añadir <strong>3mm de sangrado</strong> extra por cada lado. Las guillotinas de corte en imprenta tienen un margen de error; sin sangrado, podrías acabar con bordes blancos finos no deseados.' },
    { type: 'card', icon: 'mdi:vector-bezier', title: 'Formatos Vectoriales vs Rasterizados', html: 'Para logotipos y texto, usa siempre formatos vectoriales (AI, SVG, EPS). Para fotografías, usa formatos sin compresión como <strong>TIFF</strong> o con compresión mínima como <strong>High Quality JPEG</strong>. Evita PNG para impresión offset si puedes (no soporta CMYK nativo).' },

    { type: 'diagnostic', variant: 'info', title: 'La Regla de la Distancia', icon: 'mdi:eye-check', badge: 'Pro Tip', html: 'Cuanto más lejos se vaya a ver la imagen (poster en pared), menos DPI necesitas. Una valla publicitaria puede imprimirse a solo 15-30 DPI porque se observa a metros de distancia.' },

    { type: 'title', text: 'Conclusión: Resultados Profesionales', level: 3 },
    { type: 'paragraph', html: 'Usa nuestra calculadora para evitar sorpresas desagradables en la copistería. Asegura que tus recuerdos y trabajos luzcan nítidos sobre el papel.' },
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
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

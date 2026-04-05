import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'compresor-imagenes';
const title = 'Compresor de Imágenes Online - Reduce el peso sin perder calidad';
const description = 'Optimiza y comprime tus fotos JPG, PNG y WebP de forma gratuita. Reduce el tamaño de archivo para mejorar la velocidad de carga de tu web de forma local.';

const ui: ImageCompressorUI = {
    dropTitle: "Optimizar Imágenes",
    dropSubtitle: "Arrastra tus fotos para reducir su peso instantáneamente.",
    settingsTitle: "Ajustes de Compresión",
    qualityLabel: "Calidad Visual",
    widthLabel: "Ancho Máximo (Píxeles)",
    convertToWebpLabel: "Convertir a WebP (Recomendado)",
    compressBtn: "Comprimir Imagen",
    processingLabel: "Procesando...",
    resultsTitle: "Imágenes Optimizadas",
    originalSizeLabel: "Tamaño Original",
    newSizeLabel: "Nuevo Tamaño",
    reductionLabel: "Ahorro",
    downloadBtn: "Descargar",
    addMoreBtn: "Añadir más"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "¿Cómo funciona la compresión sin pérdida?",
        answer: "Utilizamos algoritmos que eliminan metadatos innecesarios y optimizan la codificación de los píxeles. Al elegir WebP, se utiliza una tecnología de compresión más avanzada que la de los formatos tradicionales.",
    },
    {
        question: "¿Mis imágenes se suben a algún servidor?",
        answer: "No. Todo el procesamiento ocurre 100% en tu navegador (Client-Side). Tus fotos nunca salen de tu ordenador, garantizando privacidad absoluta.",
    },
    {
        question: "¿Por qué debería convertir a WebP?",
        answer: "WebP es el formato estándar moderno para la web. Ofrece una calidad superior a JPG y PNG con un peso hasta un 30% menor, lo que acelera el tiempo de carga de las páginas.",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "Carga la imagen",
        text: "Sube el archivo que desees comprimir (JPG, PNG o WebP).",
    },
    {
        name: "Ajusta la calidad",
        text: "Usa el deslizador para encontrar el equilibrio perfecto entre peso de archivo y calidad visual (recomendado: 75-85%).",
    },
    {
        name: "Redimensiona (opcional)",
        text: "Si la imagen es muy grande, puedes indicar un ancho máximo para reducir su resolución.",
    },
    {
        name: "Descarga el resultado",
        text: "Pulsa el botón de descargar para obtener tu imagen optimizada lista para usar.",
    },
];

const bibliography: ImageCompressorLocaleContent['bibliography'] = [
    {
        name: "WebP: An Image Format for the Web",
        url: "https://developers.google.com/speed/webp",
    },
    {
        name: "La importancia de la optimización de imágenes para SEO",
        url: "https://developers.google.com/search/docs/appearance/google-images",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    { type: 'title', text: 'Optimización de Imágenes: Velocidad y Rendimiento', level: 2 },
    { type: 'paragraph', html: 'En la era de la inmediatez, una web lenta es una web que pierde usuarios. Las imágenes suelen ser el elemento más pesado de un sitio; optimizarlas es el primer paso para mejorar tu posicionamiento en Google (Core Web Vitals).' },
    
    { type: 'title', text: 'Compresión con vs sin pérdida', level: 3 },
    { type: 'paragraph', html: 'Esta herramienta te permite ajustar el nivel de compresión. La compresión con pérdida (Lossy) reduce drásticamente el peso a cambio de una degradación imperceptible al ojo humano si se mantiene por encima del 70%.' },

    { type: 'card', title: 'Privacidad Total', icon: 'mdi:shield-check', html: 'A diferencia de otros servicios online, no subimos tus fotos a la nube. El procesamiento local es más rápido, seguro y no consume tus datos de red.' },

    { type: 'diagnostic', variant: 'success', title: 'Ahorro Real', icon: 'mdi:trending-down', badge: 'Métrica', html: 'Nuestros usuarios suelen reducir el tamaño de sus imágenes entre un 50% y un 80% sin una pérdida de calidad apreciable en pantallas estándar.' },
    
    { type: 'title', text: 'Conclusión: Preparado para la Web', level: 3 },
    { type: 'paragraph', html: 'Utiliza el formato WebP y ajustes de calidad inteligentes para que tu presencia online vuele. Calidad profesional, peso mínimo.' }
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

export const content: ImageCompressorLocaleContent = {
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

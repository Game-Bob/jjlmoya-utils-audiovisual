import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'extractor-frames-video';
const title = 'Extractor de Frames de Vídeo - Captura fotogramas en alta resolución';
const description = 'Extrae imágenes individuales de tus vídeos con precisión de frame. Captura momentos perfectos en HD de forma local y gratuita.';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "Sube un archivo de vídeo",
    uploadFormats: "MP4, WebM, MOV o MKV (Máx. 500MB)",
    privacyNote: "El vídeo no se sube a Internet, se procesa en tu navegador.",
    playLabel: "Play",
    pauseLabel: "Pausa",
    captureBtn: "Capturar Frame",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "Extracción Automática",
    batchEvery: "Cada",
    batchStart: "Iniciar Secuencia",
    batchProcessing: "Extrayendo...",
    galleryTitle: "Frames Capturados",
    galleryEmpty: "Las capturas aparecerán aquí conforme las realices.",
    downloadAll: "Descargar Todo",
    downloadHD: "Descargar Imagen HD",
    resetBtn: "Subir otro vídeo"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "¿Puedo extraer frames de vídeos largos?",
        answer: "Sí, siempre que tu navegador tenga suficiente memoria RAM para cargar el vídeo. Recomendamos archivos de hasta 500MB para un rendimiento óptimo.",
    },
    {
        question: "¿En qué resolución se guardan las capturas?",
        answer: "La captura se realiza a la resolución nativa del vídeo original. Si tu vídeo es 4K, obtendrás una imagen 4K de alta calidad.",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "Carga tu vídeo",
        text: "Selecciona el archivo de vídeo desde tu dispositivo. No lo subiremos a ningún servidor.",
    },
    {
        name: "Navega hasta el momento exacto",
        text: "Usa la barra de tiempo o los botones de ±1 frame para mayor precisión quirúrgica.",
    },
    {
        name: "Captura el fotograma",
        text: "Pulsa el botón de captura para guardar el momento en la galería inferior.",
    },
    {
        name: "Descarga en alta calidad",
        text: "Descarga capturas individuales o toda la sesión en formato WebP optimizado.",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Captura de fotogramas con HTML5 Video API",
        url: "https://developer.mozilla.org/es/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    { type: 'title', text: 'Preservando Momentos: La tecnología de extracción de frames', level: 2 },
    { type: 'paragraph', html: 'A veces, una imagen vale más que mil palabras, pero encontrar esa imagen dentro de un vídeo puede ser frustrante. Nuestra herramienta utiliza la potencia del hardware local para extraer fotogramas sin compresión adicional.' },
    
    { type: 'card', title: 'Precisión Quirúrgica', icon: 'mdi:target', html: 'Moverse un solo frame adelante o atrás es vital para capturar el instante perfecto de un salto, una sonrisa o un evento científico.' },

    { type: 'diagnostic', variant: 'success', title: 'Privacidad por Diseño', icon: 'mdi:shield-check', html: 'A diferencia de los conversores de vídeo online, nosotros nunca vemos tu contenido. El procesado se realiza íntegramente en tu GPU y CPU local.' },
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

export const content: VideoFrameExtractorLocaleContent = {
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

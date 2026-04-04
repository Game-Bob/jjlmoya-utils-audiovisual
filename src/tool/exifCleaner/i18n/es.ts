import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'limpiador-exif';
const title = 'Limpiador de Metadatos EXIF - Elimina GPS y Datos Ocultos de Fotos';
const description = 'Herramienta online gratuita para borrar metadatos EXIF, coordenadas GPS y datos de cámara de tus imágenes antes de compartirlas. Privacidad total: funciona sin subir fotos a internet.';

const ui: ExifCleanerUI = {
    dropTitle: "Arrastra tu imagen aquí",
    dropSubtitle: "Elimina metadatos GPS, modelo de cámara y configuraciones ocultas.",
    dropLocalInfo: "Procesamiento 100% local. Nada sube a la nube.",
    selectButton: "Seleccionar Imagen",
    processingText: "Limpiando metadatos...",
    analysisCompleted: "Análisis Completado",
    downloadButton: "Descargar Imagen Limpia",
    resetButton: "Limpiar otra imagen",
    privacyRiskTitle: "RIESGOS DE PRIVACIDAD ENCONTRADOS:",
    gpsLabel: "GPS:",
    gpsDetected: "DETECTADA",
    gpsNotFound: "NO ENCONTRADA",
    cameraLabel: "CAMARA:",
    softwareLabel: "SOFTWARE:",
    dateLabel: "FECHA:",
    otherTechnicalDetails: "OTROS DETALLES TÉCNICOS",
    noMetadataFound: "No se encontraron metadatos EXIF legibles.",
    alreadyCleanInfo: "Es posible que la imagen ya esté limpia.",
    previewLabel: "Vista Previa",
    faqTitle: "Preguntas frecuentes sobre privacidad en fotos",
    bibliographyTitle: "Recursos y documentación técnica EXIF",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "¿Qué son los metadatos EXIF?",
        answer: "EXIF (Exchangeable Image File Format) es información oculta que tu cámara o móvil guarda dentro de cada foto. Incluye la fecha exacta, el modelo de dispositivo, ajustes de disparo (ISO, apertura) y, lo más crítico, las coordenadas GPS de donde se tomó la foto.",
    },
    {
        question: "¿Es seguro usar esta herramienta online?",
        answer: "Sí, porque el procesamiento es 100% local en tu navegador. Tus fotos nunca se suben a ningún servidor; la limpieza ocurre directamente en la memoria de tu dispositivo, garantizando privacidad absoluta.",
    },
    {
        question: "¿Qué datos elimina específicamente el limpiador?",
        answer: "Borra todas las etiquetas EXIF (GPS, marca de cámara, número de serie), IPTC (copyright, autor) y XMP (historial de edición). Tu imagen queda 'limpia', conservando solo los píxeles visuales.",
    },
    {
        question: "¿Pierde calidad la imagen al limpiar los metadatos?",
        answer: "No. Solo eliminamos la 'cabecera' de datos técnicos del archivo. Los datos de imagen (píxeles) permanecen idénticos, por lo que la calidad visual no se ve afectada en absoluto.",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "Seleccionar las imágenes",
        text: "Arrastra tus fotos o selecciónalas desde tu explorador de archivos. Puedes procesar varias a la vez.",
    },
    {
        name: "Analizar datos actuales",
        text: "La herramienta te mostrará qué información sensible ha detectado (ej. 'Coordenadas GPS detectadas').",
    },
    {
        name: "Procesar y limpiar",
        text: "Haz clic en el botón de limpiar para eliminar instantáneamente todas las etiquetas de metadatos.",
    },
    {
        name: "Descargar fotos seguras",
        text: "Guarda las nuevas versiones de tus imágenes ya anonimizadas y listas para compartir en redes sociales de forma segura.",
    },
];

const bibliography: ExifCleanerLocaleContent['bibliography'] = [
    {
        name: "Exchangeable image file format (EXIF) - Wikipedia",
        url: "https://es.wikipedia.org/wiki/Exchangeable_image_file_format",
    },
    {
        name: "W3C - Metadata in Images",
        url: "https://www.w3.org/community/image-metadata/",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    { type: 'title', text: 'Guía de Privacidad y Metadatos en Fotografías Digitales', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez te has preguntado cuánta información personal compartes al subir una foto a redes sociales? Los metadatos EXIF son como una huella dactilar invisible que puede revelar desde la ubicación exacta de tu casa hasta el precio de tu equipo fotográfico.' },
    
    { type: 'title', text: '¿Qué información se esconde en tus fotos?', level: 3 },
    { type: 'list', items: [
        '<strong>Coordenadas GPS:</strong> La latitud y longitud exacta donde se realizó la captura.',
        '<strong>Identificación del Equipo:</strong> Marca, modelo y número de serie de la cámara o smartphone.',
        '<strong>Ajustes Técnicos:</strong> ISO, apertura, tiempo de exposición y distancia focal.',
        '<strong>Historial de Edición:</strong> Software utilizado y fecha de última modificación.'
    ]},

    { type: 'card', title: 'Seguridad en el Navegador', icon: 'mdi:shield-check', html: 'Esta herramienta utiliza la API de Canvas del navegador para crear una copia limpia de la imagen píxel a píxel, asegurando que ningún dato del archivo original se filtre al nuevo archivo generado.' },

    { type: 'diagnostic', variant: 'warning', title: 'Riesgos de Compartir sin Limpiar', icon: 'mdi:alert', badge: 'Privacidad', html: 'Compartir fotos de niños o bienes valiosos con metadatos GPS activos permite a terceros rastrear ubicaciones habituales mediante técnicas de OSINT (Open Source Intelligence).' },
    
    { type: 'title', text: 'Conclusión: Comparte sin rastros', level: 3 },
    { type: 'paragraph', html: 'Proteger tu identidad digital empieza por los pequeños detalles. Limpiar tus fotos antes de publicarlas es un hábito esencial de higiene digital en el siglo XXI.' }
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

export const content: ExifCleanerLocaleContent = {
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

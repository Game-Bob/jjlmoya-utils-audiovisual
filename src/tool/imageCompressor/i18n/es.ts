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
    {
        type: 'summary',
        title: 'Optimización Profesional de Imágenes Web',
        items: [
            'Compresión inteligente JPG, PNG y WebP',
            'Reduce peso 50-80% manteniendo calidad visual',
            'Procesamiento 100% local - privacidad garantizada',
            'Mejora Core Web Vitals y posicionamiento SEO'
        ]
    },
    { type: 'title', text: 'Optimización de Imágenes: Velocidad Web y Core Web Vitals', level: 2 },
    { type: 'paragraph', html: 'En la era de la inmediatez digital, una web lenta pierde usuarios. Las imágenes sin optimizar representan el 60-70% del peso total de una página web. Optimizarlas es el primer paso para mejorar tus métricas Google (LCP, CLS) y tu posicionamiento en resultados de búsqueda.' },

    { type: 'stats', items: [
        { value: '50-80%', label: 'Reducción Típica de Peso', icon: 'mdi:trending-down' },
        { value: '100%', label: 'Privacidad Local', icon: 'mdi:lock' },
        { value: '+30%', label: 'Más Rápido que JPG', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: 'Formatos de Compresión Explicados', level: 3 },
    { type: 'table', headers: ['Formato', 'Compresión', 'Casos de Uso', 'Compatibilidad'], rows: [
        ['JPEG', 'Lossy 50-90%', 'Fotos de cámara, contenido editorial', 'Universal (100%)'],
        ['PNG', 'Lossless 30-50%', 'Gráficos, logos, transparencias', 'Universal (100%)'],
        ['WebP', 'Lossy/Lossless 25-35% más', 'Web moderna, redes sociales', '95% navegadores modernos'],
        ['AVIF', 'Lossy/Lossless mejora 20%', 'Siguiente generación web', 'Navegadores nuevos solo']
    ] },

    { type: 'card', title: 'Por qué WebP es el Futuro', html: 'Google desarrolló WebP específicamente para la web. Ofrece compresión superior a JPEG y PNG, manteniendo o mejorando la calidad visual. Es 25-35% más pequeño que equivalentes en JPEG. Los navegadores modernos lo soportan al 95%.' },

    { type: 'title', text: 'Compresión Con Pérdida vs Sin Pérdida', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Compresión Con Pérdida (Lossy)',
            description: 'JPG, WebP - Reduce información visual imperceptible',
            icon: 'compress',
            points: [
                'Reduce 70-90% del peso original',
                'Imperceptible al ojo humano si se mantiene >75% calidad',
                'Ideal para fotografía realista',
                'No recomendado para logos o texto nítido'
            ],
            highlight: true
        },
        {
            title: 'Compresión Sin Pérdida (Lossless)',
            description: 'PNG, WebP lossless - Mantiene 100% de datos visuales',
            icon: 'shield',
            points: [
                'Reduce 20-50% del peso',
                'Calidad perfecta, sin degradación',
                'Ideal para gráficos, logos, transparencias',
                'Archivos más pesados que Lossy'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Impacto en SEO y Conversión', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Google penaliza sitios lentos. Imágenes optimizadas mejoran LCP (Largest Contentful Paint) directamente.',
        '<strong>Tasa de Rebote:</strong> Cada segundo de retraso = 7% más rebote. Imágenes más rápidas = menos usuarios que se van.',
        '<strong>Ranking de Búsqueda:</strong> Velocidad es factor de ranking. Optimizar imágenes impulsa posicionamiento.',
        '<strong>Conversión:</strong> Tiempos de carga más rápidos = más conversiones. Estudios muestran +10% conversión con optimización.'
    ], icon: 'checkmark' },

    { type: 'proscons', items: [
        {
            pro: 'Privacidad total: procesamiento 100% local, sin servidores en la nube',
            con: 'Requiere navegador con soporte Canvas API (es universal)'
        },
        {
            pro: 'WebP es 25-35% más pequeño que JPEG con igual calidad',
            con: 'Safari e IE viejos no soportan WebP (fallback disponible)'
        },
        {
            pro: 'Procesamiento instantáneo de múltiples imágenes',
            con: 'Imágenes muy grandes (>50MB) pueden requerir espera'
        },
        {
            pro: 'Redimensionamiento opcional: reduce resolución además de compresión',
            con: 'Redimensionar pierde información - mejor optimizar resolución en origen'
        }
    ], proTitle: 'Ventajas', conTitle: 'Limitaciones' },

    { type: 'diagnostic', variant: 'warning', title: 'Cuidado: Compresión Excesiva Degrada', icon: 'alert', badge: 'Calidad', html: 'Mantén calidad >75% para fotografía y >85% para contenido editorial. Por debajo, los artefactos de compresión (motas, bandas) se hacen visibles. Una imagen que se ve bien en thumbnail puede verse mal en grande.' },

    { type: 'glossary', items: [
        {
            term: 'Compresión Lossy',
            definition: 'Elimina datos visuales que el ojo humano percibe como "ruido". Ideal para fotografía. JPEG, WebP lossy, HEIC son lossy.'
        },
        {
            term: 'Compresión Lossless',
            definition: 'Reduce tamaño sin perder información visual. PNG y WebP lossless. Ideal para gráficos, logos, transparencias.'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'Métricas de experiencia de usuario: LCP (velocidad carga), FID (latencia interacción), CLS (estabilidad visual). Afectan ranking SEO.'
        },
        {
            term: 'WebP',
            definition: 'Formato desarrollado por Google. 25-35% más pequeño que JPEG. Soportado por 95% navegadores modernos (todos excepto IE).'
        },
        {
            term: 'Artefactos de Compresión',
            definition: 'Defectos visuales causados por compresión excesiva: motas, bandas de color, bordes borrosos. Imperceptibles <75% calidad.'
        }
    ] },

    { type: 'message', title: 'Optimización Web Profesional', ariaLabel: 'Información sobre optimización de imágenes para SEO', html: 'No es vanidad técnica: comprimir imágenes es una inversión directa en experiencia de usuario y ranking en Google. Cada kilobyte cuenta en móviles. Nuestra herramienta convierte lo que antes requería software profesional ($$$) en un proceso gratuito de 3 clics.' },

    { type: 'title', text: 'Preparado para la Web Moderna', level: 3 },
    { type: 'paragraph', html: 'Utiliza compresión inteligente y formato WebP para que tu presencia online sea rápida, responsiva y competitiva en búsqueda. Calidad profesional, peso mínimo, carga instantánea.' }
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

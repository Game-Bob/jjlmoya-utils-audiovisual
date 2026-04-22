import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'extractor-frames-video';
const title = 'Extractor de Frames de Vídeo: Captura fotogramas en alta resolución';
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

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Extracción Profesional de Fotogramas de Vídeo',
        items: [
            'Precisión de fotograma único (±1 frame) para captura perfecta',
            'Soporta MP4, WebM, MOV, MKV hasta 500MB',
            'Resolución nativa del vídeo preservada (SD, HD, 4K)',
            'Extracción por lotes automática a intervalos personalizados'
        ]
    },
    { type: 'title', text: 'Extracción de Fotogramas: Congelando el Tiempo en Vídeo', level: 2 },
    { type: 'paragraph', html: 'A veces, una imagen vale más que mil palabras. Pero encontrar esa imagen perfecta dentro de un vídeo de 10 minutos puede ser frustrante. Nuestra herramienta utiliza la potencia local de tu navegador para extraer fotogramas de precisión sin necesidad de software profesional.' },

    { type: 'stats', items: [
        { value: '±1', label: 'Precisión Frame Único', icon: 'mdi:target' },
        { value: '100%', label: 'Resolución Nativa', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: 'Archivos Soportados', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'Casos de Uso Profesionales', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Cine y Fotografía',
            description: 'Capturar fotogramas como referencia visual o composición',
            icon: 'mdi:film',
            points: [
                'Extraer stills para marketing de películas',
                'Referencias de composición de escenas',
                'Análisis de fotograma a fotograma'
            ]
        },
        {
            title: 'Contenido Digital',
            description: 'Crear miniaturas y portadas para redes sociales',
            icon: 'mdi:youtube',
            points: [
                'Miniaturas de YouTube en alta resolución',
                'Portadas para redes sociales',
                'Thumbs para presentaciones'
            ],
            highlight: true
        },
        {
            title: 'Documentación Técnica',
            description: 'Extraer fotogramas de tutoriales y demostraciones',
            icon: 'mdi:book-open',
            points: [
                'Screenshots de vídeos tutoriales',
                'Documentación visual step-by-step',
                'Análisis de movimiento en tiempo real'
            ]
        },
        {
            title: 'Deportes y Acción',
            description: 'Capturar el instante preciso de máxima acción',
            icon: 'mdi:dumbbell',
            points: [
                'Análisis de técnica deportiva frame-by-frame',
                'Captura de momentos heroicos',
                'Estudio de movimiento'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Formatos de Vídeo Soportados', level: 3 },
    { type: 'table', headers: ['Formato', 'Extensión', 'Compatibilidad', 'Notas'], rows: [
        ['MPEG-4', 'MP4', 'Universal (100%)', 'Mejor compresión, ampliamente utilizado'],
        ['WebM', 'WebM', 'Navegadores modernos', 'Compresión superior, menor tamaño'],
        ['QuickTime', 'MOV', 'Safari, algunos reproductores', 'Estándar Apple'],
        ['Matroska', 'MKV', 'Navegadores modernos', 'Contenedor flexible, calidad variable']
    ] },

    { type: 'card', title: 'Precisión de Fotograma Único', html: 'Moverse un solo frame adelante o atrás (±1 frame) es vital para capturar el instante perfecto: un salto, una sonrisa, un gesto, un instante científico. A 24 fps, cada fotograma dura apenas 41 milisegundos. Nuestra herramienta te da control milimétrico.' },

    { type: 'proscons', items: [
        {
            pro: 'Privacidad total: el vídeo se procesa 100% localmente en tu navegador',
            con: 'Limitado a tamaño de memoria RAM disponible (~500MB recomendado)'
        },
        {
            pro: 'Resolución nativa preservada: SD, HD, 4K sin re-compresión',
            con: 'Requiere navegador moderno con soporte HTML5 Video'
        },
        {
            pro: 'Extracción por lotes automática a intervalos personalizados',
            con: 'Para edición avanzada (trim, cortes) necesitas editor de vídeo'
        },
        {
            pro: 'Exporta fotogramas en WebP optimizado o PNG sin compresión',
            con: 'Un fotograma a la vez (no exporta secuencias GIF automatizadas)'
        }
    ], proTitle: 'Ventajas', conTitle: 'Limitaciones' },

    { type: 'diagnostic', variant: 'info', title: 'Resolución y Frame Rate', icon: 'mdi:information', badge: 'Técnico', html: 'La resolución final del fotograma depende del vídeo original. Si el vídeo es 4K (3840x2160), extraerás fotogramas 4K. Si es 720p, obtendrás 720p. Sin upscaling inteligente: preservamos la información nativa del vídeo.' },

    { type: 'glossary', items: [
        {
            term: 'Frame (Fotograma)',
            definition: 'Una imagen individual en una secuencia de vídeo. Un vídeo a 24 fps contiene 24 fotogramas por segundo.'
        },
        {
            term: 'FPS (Frames Per Second)',
            definition: 'Fotogramas por segundo. 24 fps (cine), 30 fps (vídeo web), 60 fps (video fluido), 120 fps (super slow-mo).'
        },
        {
            term: 'Codec de Vídeo',
            definition: 'Algoritmo de compresión: H.264 (MPEG-4), VP9 (WebM), HEVC. Determina tamaño de archivo y calidad.'
        },
        {
            term: 'Bitrate (Velocidad de Bits)',
            definition: 'Cantidad de datos procesados por segundo (Mbps). Mayor bitrate = mayor calidad pero archivos más grandes.'
        },
        {
            term: 'Resolución de Vídeo',
            definition: 'Dimensiones en píxeles: 720p (1280x720), 1080p (1920x1080), 4K (3840x2160), 8K (7680x4320).'
        }
    ] },

    { type: 'message', title: 'Extracción Profesional de Fotogramas', ariaLabel: 'Información técnica sobre extracción de vídeo', html: 'No necesitas convertidores online complejos o software profesional. Un fotograma perfecto está a solo 3 clics: carga vídeo, navega, captura. Privacidad total, resolución nativa, descarga instantánea.' },

    { type: 'title', text: 'Congelando Momentos de Vídeo', level: 3 },
    { type: 'paragraph', html: 'Cada vídeo contiene cientos de fotogramas. Muchos de ellos son oro puro esperando a ser descubiertos. Utiliza esta herramienta para extraer esos momentos perfectos sin comprometer calidad ni privacidad.' }
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
    faqTitle: 'Preguntas frecuentes sobre extracción de vídeo',
    bibliography: 'Estándares técnicos de captura de vídeo',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

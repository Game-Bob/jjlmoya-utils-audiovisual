import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'creador-collage-fotos';
const title = 'Creador de Collages Online: Diseña composiciones profesionales';
const description = 'Crea collages de fotos gratis en segundos. Elige entre múltiples diseños, ajusta bordes y descarga en alta calidad sin marcas de agua.';

const ui: CollageMakerUI = {
    dropTitle: "Arrastra imágenes aquí",
    dropSub: "o {link} · mín. 2, máx. 9",
    dropLink: "selecciona archivos",
    imgsLoaded: "Imágenes cargadas",
    layoutLabel: "Diseño",
    settingsLabel: "Ajustes",
    borderLabel: "Borde",
    borderColorLabel: "Color borde",
    bgColorLabel: "Fondo",
    downloadBtn: "Descargar",
    previewTitle: "Vista previa",
    needsImgs: "Necesitas {n} imágenes",
    errorMin: "Necesitas al menos 2 imágenes",
    errorMax: "Máximo 9 imágenes permitidas",
    errorLoad: "Error al cargar las imágenes",
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "¿Cómo puedo cambiar el orden de las fotos?",
        answer: "Las fotos se colocan en el collage siguiendo el orden en que aparecen en la lista de imágenes cargadas. Puedes eliminar una y volver a subirla para ajustar su posición.",
    },
    {
        question: "¿Qué formato de salida tiene el collage?",
        answer: "El collage se descarga en formato WebP de alta resolución, ideal para compartir en redes sociales sin perder nitidez.",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "Sube tus fotos",
        text: "Selecciona entre 2 y 9 imágenes desde tu explorador de archivos.",
    },
    {
        name: "Elige un diseño",
        text: "Selecciona la cuadrícula que mejor se adapte al número de fotos que has subido.",
    },
    {
        name: "Personaliza el estilo",
        text: "Ajusta el grosor y color del borde para darle un acabado profesional.",
    },
    {
        name: "Descarga y comparte",
        text: "Pulsa el botón de crear y descarga tu composición final al instante.",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "Composición Fotográfica: El Arte del Collage",
        url: "https://es.wikipedia.org/wiki/Collage",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Creador de Collages Profesional Online',
        items: [
            'Múltiples diseños y cuadrículas predefinidas',
            'Personalización de bordes y colores de fondo',
            'Alta resolución 1200px lista para redes sociales',
            'Procesamiento instantáneo sin límites de uso'
        ]
    },
    { type: 'title', text: 'Diseño de Collages: Composiciones que Cuentan Historias', level: 2 },
    { type: 'paragraph', html: 'Un collage es más que una mezcla de fotos; es una narrativa visual que comunica emoción y contexto. Nuestra herramienta permite crear composiciones geométricas profesionales para Instagram, Facebook, Pinterest o proyectos personales sin necesidad de Photoshop o software costoso.' },

    { type: 'stats', items: [
        { value: '2-9', label: 'Imágenes por Collage', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'Resolución HD', icon: 'mdi:video-high-definition' },
        { value: 'Instant', label: 'Generación', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: 'Composición Visual: Principios de Diseño', level: 3 },
    { type: 'paragraph', html: 'La composición es el arte de organizar elementos visuales de forma que guíen la vista del espectador y comuniquen intención. Un buen collage equilibra:' },
    { type: 'list', items: [
        '<strong>Balance:</strong> Distribución visual de peso (imágenes claras vs oscuras, grandes vs pequeñas).',
        '<strong>Flujo Visual:</strong> El ojo debe recorrer la composición de forma natural, sin puntos muertos.',
        '<strong>Contraste:</strong> Variaciones en color, tamaño y forma que atrapan la atención.',
        '<strong>Unidad:</strong> Coherencia temática - las imágenes deben "hablar juntas" sobre la misma historia.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Diseños Inteligentes y Adaptativos', html: 'Nuestro sistema calcula automáticamente la distribución óptima de espacio según el número de fotos. 2 imágenes = cuadrícula simétrica; 5 imágenes = distribución asimétrica equilibrada. Cada cuadrícula está diseñada para maximizar impacto visual.' },

    { type: 'comparative', items: [
        {
            title: 'Para Redes Sociales',
            description: 'Instagram, TikTok, Facebook - formatos cuadrados',
            icon: 'mdi:share-all',
            points: [
                '1200px es perfecto para feed de Instagram',
                'Formato cuadrado evita recortes al publicar',
                'Bordes personalizables para marca'
            ],
            highlight: true
        },
        {
            title: 'Para Portafolios',
            description: 'Vitrinas visuales de fotógrafos y diseñadores',
            icon: 'mdi:briefcase-outline',
            points: [
                'Muestra múltiples ángulos de un proyecto',
                'Narrativa visual coherente',
                'Impresión profesional en libro digital'
            ]
        },
        {
            title: 'Para Regalos Personales',
            description: 'Impresos, marcos y álbumes digitales',
            icon: 'mdi:gift-outline',
            points: [
                'Recuerdos de eventos (bodas, viajes)',
                'Alta resolución lista para imprimir',
                'Diseño instantáneo sin esfuerzo manual'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Personalización: Bordes y Colores', level: 3 },
    { type: 'table', headers: ['Elemento', 'Efecto Visual', 'Recomendación'], rows: [
        ['Borde Blanco', 'Limpio, minimalista, moderno', 'Redes sociales, portafolios digitales'],
        ['Borde Negro', 'Dramático, profesional, artístico', 'Fotografía de arte, moda, lujo'],
        ['Borde Neutro (gris)', 'Versátil, académico, corporate', 'Negocios, educación, neutralidad'],
        ['Sin Borde', 'Fusión, continuidad, inmersivo', 'Fondo uniforme, fotos que fluyen']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Diseños predefinidos profesionales - no necesitas saber de composición',
            con: 'Opciones limitadas a cuadrículas preestablecidas'
        },
        {
            pro: 'Resolución 1200px lista para redes sociales sin reescalado',
            con: 'No es tan personalizable como Photoshop'
        },
        {
            pro: 'Procesamiento 100% local - privacidad, velocidad, sin límites',
            con: 'Requiere navegador moderno'
        },
        {
            pro: 'Totalmente gratuito, sin marcas de agua, sin publicidad',
            con: 'Sin opciones de edición individual (recortes, rotación)'
        }
    ], proTitle: 'Ventajas', conTitle: 'Limitaciones' },

    { type: 'diagnostic', variant: 'success', title: 'Listo para Redes Sociales', icon: 'mdi:check-circle-outline', badge: 'Optimizado', html: '1200x1200px es la resolución ideal para Instagram. Soporta cualquier relación de aspecto, pero la salida cuadrada maximiza el impacto en feed, elimina recortes automáticos y se ve igual de bien en desktop, tablet y móvil.' },

    { type: 'glossary', items: [
        {
            term: 'Composición Visual',
            definition: 'Arte de organizar elementos (color, forma, espacio) para guiar la vista del espectador y comunicar intención emocional.'
        },
        {
            term: 'Regla de los Tercios',
            definition: 'Principio de composición: divide la imagen en 9 áreas iguales (3x3). Posiciona sujetos en líneas de intersección para máximo impacto.'
        },
        {
            term: 'Cuadrícula Simétrica',
            definition: 'Divisiones iguales del espacio. Tranquilizante, ordenado. Ideal para pares de fotos o números pares.'
        },
        {
            term: 'Cuadrícula Asimétrica',
            definition: 'Divisiones desiguales. Dinámico, interesante, visual. Ideal para 5+ fotos con variedad de tamaños.'
        },
        {
            term: 'Balance Visual',
            definition: 'Equilibrio perceptual del peso visual. Imagen clara + oscura = balance; grande + pequeño = balance.'
        }
    ] },

    { type: 'message', title: 'Narrativa Visual Instantánea', ariaLabel: 'Información sobre composición y collages', html: 'Cada collage cuenta una historia. Nuestro diseñador automático asegura que tus historias visuales sean balanceadas, profesionales y listas para el mundo. Sin esperar a que un diseñador gráfico haga el trabajo.' },

    { type: 'title', text: 'Crea, Comparte, Inspira', level: 3 },
    { type: 'paragraph', html: 'Un collage bien hecho es la diferencia entre un post olvidable y uno que tus seguidores recuerdan y comparten. Utiliza composición inteligente para que tus historias visuales impacten.' }
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

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Preguntas frecuentes sobre creación de collages',
    bibliography,
    bibliographyTitle: 'Recursos técnicos sobre composición visual',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

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
    {
        type: 'summary',
        title: 'Limpiador de Metadatos EXIF - Protege tu Privacidad',
        items: [
            'Elimina coordenadas GPS y ubicación de tus fotos al instante',
            'Borra datos de modelo de cámara, número de serie e información técnica',
            'Procesamiento 100% en el navegador - tus imágenes nunca suben a servidores',
            'Mantiene la calidad visual - solo elimina datos ocultos'
        ]
    },
    { type: 'title', text: 'Guía Completa de Privacidad y Metadatos EXIF en Fotografías Digitales', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez te has preguntado cuánta información personal compartes al subir una foto a redes sociales? Los metadatos EXIF son como una <strong>huella dactilar invisible</strong> que puede revelar desde la ubicación exacta de tu casa hasta el precio de tu equipo fotográfico. Esta guía te explica cómo proteger tu privacidad de forma efectiva.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privacidad - Procesamiento Local', icon: 'shield' },
        { value: '0%', label: 'Datos Almacenados en Servidores', icon: 'database' },
        { value: 'Instantáneo', label: 'Eliminación de Metadatos', icon: 'lightning' }
    ], columns: 3 },

    { type: 'title', text: '¿Qué Información Se Esconde en Tus Fotos?', level: 3 },
    { type: 'paragraph', html: 'Más del 90% de las fotos digitales contienen información sensible que puede comprometer tu seguridad. Aquí están todos los datos que se pueden revelar:' },
    { type: 'list', items: [
        '<strong>Coordenadas GPS:</strong> La latitud y longitud exacta donde se realizó la captura (dirección de tu hogar, trabajo, lugares frecuentados).',
        '<strong>Identificación del Equipo:</strong> Marca, modelo y número de serie de la cámara o smartphone (información de valor).',
        '<strong>Ajustes Técnicos:</strong> ISO, apertura (f/), tiempo de exposición y distancia focal (permite identificar tu equipo específico).',
        '<strong>Fecha y Hora Exacta:</strong> Cronograma completo de tus actividades diarias.',
        '<strong>Historial de Edición:</strong> Software utilizado, software de edición y fecha de última modificación.',
        '<strong>Datos de Copyright:</strong> Fotógrafo, derechos de autor y notas personales.'
    ] },

    { type: 'title', text: 'Riesgos de Seguridad Real: Casos de Uso', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Fotógrafos Profesionales',
            description: 'Riesgo de robo de equipo costoso identificado por número de serie',
            icon: 'camera',
            points: [
                'Ladrones buscan fotógrafos con equipo de valor',
                'GPS identifica domicilio del propietario',
                'Número de serie facilita reventa en dark web'
            ]
        },
        {
            title: 'Padres e Influencers',
            description: 'Peligro extremo: ubicación de niños en tiempo real',
            icon: 'alert',
            points: [
                'Pedófilos rastrean ubicaciones mediante OSINT',
                'Predadores pueden identificar rutinas diarias',
                'Riesgo de acoso y seguimiento físico'
            ],
            highlight: true
        },
        {
            title: 'Usuarios de Redes Sociales',
            description: 'Exposición de privacidad personal y laboral',
            icon: 'social',
            points: [
                'Publicar desde la oficina revela ubicación de trabajo',
                'Geolocalización permite inferir salario aproximado',
                'Datos públicos permiten perfilado de segmentación'
            ]
        },
        {
            title: 'Viajeros y Nómadas',
            description: 'Peligro de robo en domicilios desocupados',
            icon: 'map',
            points: [
                'GPS publicado indica casa vacía durante viaje',
                'Datos de equipo atraen a delincuentes',
                'Historiales de viajes revelan patrones'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'Cómo Funciona Esta Herramienta', level: 3 },
    { type: 'list', items: [
        '<strong>1. Selecciona tus imágenes:</strong> Arrastra fotos o usa el selector. Puedes procesar varias simultáneamente.',
        '<strong>2. Análisis automático:</strong> La herramienta detecta y muestra todos los metadatos presentes (GPS, modelo de cámara, fecha, etc.).',
        '<strong>3. Limpieza instantánea:</strong> Con un clic, elimina el 100% de los metadatos dañinos.',
        '<strong>4. Descarga segura:</strong> Recibe imágenes anonimizadas listas para compartir en redes sin riesgos.',
        '<strong>5. Sin residuos:</strong> La imagen limpia conserva toda su calidad visual original.'
    ], icon: 'checkmark' },

    { type: 'card', title: 'Tecnología de Privacidad', icon: 'shield-check', html: 'Esta herramienta utiliza la <strong>API de Canvas del navegador</strong> para crear una copia limpia de la imagen píxel a píxel, asegurando que:<br><br>✓ Ningún dato se envía a servidores<br>✓ Tu imagen nunca abandona tu dispositivo<br>✓ Procesamiento 100% anónimo y seguro<br>✓ Puedes usarla incluso sin conexión a internet (tras la carga inicial)' },

    { type: 'title', text: '¿Qué Datos Elimina Específicamente?', level: 3 },
    { type: 'table', headers: ['Tipo de Metadatos', 'Ejemplos', 'Riesgo'], rows: [
        ['EXIF (Intercambiable)', 'GPS, ISO, Apertura, Velocidad Obturación, Modelo Cámara', 'CRÍTICO'],
        ['IPTC (Publicación)', 'Copyright, Autor, Palabras Clave, Ubicación Escena', 'ALTO'],
        ['XMP (XML)', 'Historial de Edición, Software Usado, Ediciones Realizadas', 'MEDIO'],
        ['Datos Básicos Archivo', 'Fecha Creación, Hora Exacta, Dispositivo', 'ALTO']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacidad Total - 100% procesamiento en el navegador',
            con: 'Requiere navegador moderno con soporte JavaScript'
        },
        {
            pro: 'Instantáneo - limpiar una foto toma menos de 1 segundo',
            con: 'Procesamiento de fotos de gran tamaño puede ser lento en dispositivos antiguos'
        },
        {
            pro: 'Cero Pérdida de Calidad - solo elimina datos técnicos, no píxeles',
            con: 'No edita la imagen (recortes, rotaciones, etc.)'
        },
        {
            pro: 'Completamente Gratuito sin Límites - procesa ilimitadas fotos',
            con: 'Sin soporte premium o almacenamiento en la nube'
        }
    ], proTitle: 'Ventajas Clave', conTitle: 'Limitaciones' },

    { type: 'tip', title: 'Consejo de Seguridad Digital', html: '<strong>Limpia tus fotos ANTES de publicar</strong> en cualquier red social. Incluso si eliminas una publicación, los metadatos pueden haber sido indexados por buscadores o archivos. Es mejor prevenir que lamentar. Establece como hábito: <br><br><em>Foto → Limpiar EXIF → Publicar</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'Riesgos Reales de No Limpiar', icon: 'alert', badge: 'Seguridad Crítica', html: '<strong>Casos documentados:</strong><br>• Padres que publicaban fotos de hijos - predadores rastreaban GPS<br>• Fotógrafos viajeros - casas robadas mientras estaban ausentes<br>• Influencers - ubicaciones de residencias identificadas por fans obsesivos<br><br>No es paranoia: es higiene digital básica en 2026.' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format. Estándar que almacena metadatos técnicos en archivos de imagen: GPS, datos de cámara, ajustes de exposición. Presente en ~90% de fotos digitales sin intención del usuario.'
        },
        {
            term: 'Coordenadas GPS',
            definition: 'Latitud y longitud precisas al metro de la ubicación exacta donde se tomó la foto. Combinada con redes sociales, permite rastreo físico de personas.'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council. Metadatos legibles de publicación: copyright, autor, palabras clave, descripción. Estándar en fotografía profesional.'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform. Formato XML que registra historial de ediciones en software como Lightroom o Photoshop. Puede revelar todas las ediciones realizadas.'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence. Técnica de recopilación de información pública (redes sociales, metadatos, registros) para perfilar personas sin su conocimiento.'
        },
        {
            term: 'Anonimización Digital',
            definition: 'Proceso de eliminar o ofuscar información identificable: ubicación, dispositivo, patrones de conducta. Esencial para privacidad online.'
        }
    ] },

    { type: 'message', title: 'Tu Privacidad es tu Responsabilidad', ariaLabel: 'Información sobre privacidad y derechos de datos', html: 'No almacenamos, procesamos ni compartimos tus imágenes. <strong>Tú tienes el control total.</strong> Todas las operaciones ocurren exclusivamente en tu navegador. Cuando cierres esta pestaña, no queda registro alguno de tu actividad. Esta es la forma de proteger tu privacidad en internet: herramientas que respetan tus datos.' },

    { type: 'title', text: 'Conclusión: Comparte sin Rastros', level: 3 },
    { type: 'paragraph', html: 'Proteger tu identidad digital empieza por los pequeños detalles. Limpiar tus fotos antes de publicarlas es un <strong>hábito esencial de higiene digital</strong> en 2026. No solo protege tu ubicación: protege a tu familia, tus bienes y tu privacidad laboral. Una foto aparentemente inocente puede revelar más de ti de lo que jamás imaginaste.' }
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

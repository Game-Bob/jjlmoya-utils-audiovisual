import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'sincronizar-subtitulos';
const title = 'Sincronizar Subtítulos SRT Online - Ajusta el Tiempo Gratis';
const description = 'Herramienta online para adelantar o retrasar subtítulos SRT. Corrige el desfase de tiempo de forma sencilla y descarga el archivo sincronizado al instante.';

const ui: SubtitleSyncUI = {
    dropTitle: "Arrastra tu archivo .SRT aquí",
    dropSubtitle: "o haz clic para explorar",
    adjustTitle: "Ajustar Tiempo",
    offsetLabel: "Desplazamiento (segundos)",
    offsetHelp: "Usa valores negativos para adelantar (ej: -1.5) y positivos para retrasar.",
    linesStat: "Líneas",
    firstStat: "Primer Subtítulo",
    lastStat: "Último Subtítulo",
    originalLabel: "ORIGINAL",
    resultLabel: "RESULTADO",
    downloadButton: "Descargar Corregido",
    previewBadge: "VISTA PREVIA",
    unitSeconds: "seg"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "¿Cómo puedo sincronizar mis subtítulos si el audio va por delante?",
        answer: "Si el audio aparece antes que el texto, debes retrasar los subtítulos. Introduce un valor positivo en la calculadora (ej. 2.0 para retrasarlos 2 segundos).",
    },
    {
        question: "¿Qué formato de archivos acepta esta herramienta?",
        answer: "Actualmente la herramienta está optimizada para archivos .SRT (SubRip), que es el estándar más común en reproductores de vídeo y plataformas de streaming.",
    },
    {
        question: "¿Es seguro subir mis archivos de subtítulos?",
        answer: "Sí, porque el procesamiento es 100% local en tu dispositivo. Tus archivos no se envían a ningún servidor; la sincronización ocurre directamente en tu navegador.",
    },
    {
        question: "¿Puedo sincronizar solo una parte del archivo?",
        answer: "No, esta herramienta aplica un desplazamiento constante a todo el archivo. Si el desfase es progresivo, podrías necesitar una edición más avanzada.",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "Carga tu archivo SRT",
        text: "Arrastra el archivo de subtítulos que quieres corregir al área de carga.",
    },
    {
        name: "Identifica el desfase",
        text: "Mide cuánto tiempo de retraso o adelanto tienen los subtítulos respecto al audio en tu reproductor.",
    },
    {
        name: "Ajusta el desplazamiento",
        text: "Introduce los segundos positivos (retrasar) o negativos (adelantar) en el panel de control.",
    },
    {
        name: "Descarga el archivo",
        text: "Verifica en la vista previa que los tiempos son correctos y haz clic en descargar para obtener tu nuevo SRT.",
    },
];

const bibliography: SubtitleSyncLocaleContent['bibliography'] = [
    {
        name: "SubRip (SRT) format specification",
        url: "https://matroska.org/technical/subtitles.html#srt-subtitles",
    },
    {
        name: "MDN Web Docs - FileReader API",
        url: "https://developer.mozilla.org/en-US/docs/Web/API/FileReader",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Sincronización de Subtítulos Profesional',
        items: [
            'Corrección instantánea de desfases de audio-subtítulos',
            'Soporta archivos SRT (SubRip) estándar',
            'Procesamiento 100% local - máxima privacidad',
            'Sin instalación, sin suscripción, completamente gratuito'
        ]
    },
    { type: 'title', text: 'Sincronización Perfecta de Subtítulos SRT', level: 2 },
    { type: 'paragraph', html: 'No hay nada más frustrante para un espectador que ver diálogos que no coinciden con las voces. El desfase de subtítulos suele ocurrir por diferencias entre versiones de vídeo: variaciones en framerate, cortes de publicidad, intros de productoras o cambios en la compresión. Con esta herramienta, corriges el problema en segundos.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Procesamiento Local', icon: 'mdi:shield' },
        { value: 'Milisegundos', label: 'Precisión', icon: 'mdi:clock-outline' },
        { value: 'Cualquier Tamaño', label: 'SIN Límite de Archivo', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'Adelantar vs Retrasar: Guía Práctica', level: 3 },
    { type: 'paragraph', html: 'El primer paso es identificar correctamente el tipo de desfase. Aquí está la lógica:' },
    { type: 'list', items: [
        '<strong>Retrasar (Valor Positivo):</strong> Cuando ves el texto aparecer ANTES que el sonido. Los subtítulos van adelantados. Ejemplo: +2.0 segundos.',
        '<strong>Adelantar (Valor Negativo):</strong> Cuando ves el texto aparecer DESPUÉS que el sonido. Los subtítulos van retrasados. Ejemplo: -2.0 segundos.',
        '<strong>Prueba y Ajusta:</strong> Comienza con incrementos pequeños (0.5s) y usa la vista previa para validar.'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'Privacidad de Nivel Profesional', html: 'Al procesar el archivo mediante JavaScript en el lado del cliente, garantizamos que el contenido de tus subtítulos nunca abandona tu ordenador. Esencial para traductores y profesionales que manejan material confidencial o bajo contrato de confidencialidad.' },

    { type: 'title', text: 'Casos de Uso Comunes', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Traductores y Subtituladores',
            description: 'Sincronizar traducciones después de trabajar con múltiples versiones de vídeo',
            icon: 'mdi:translate',
            points: [
                'Archivos SRT de diferentes fuentes',
                'Versionado de contenido (theatrical vs streaming)',
                'Entrega rápida sin cambiar herramientas'
            ]
        },
        {
            title: 'Creadores de Contenido',
            description: 'Recuperar subtítulos cuando el vídeo se procesó con diferente framerate',
            icon: 'mdi:video',
            points: [
                'Reutilizar subtítulos existentes',
                'Cambios de formato (720p a 1080p)',
                'Evitar retiming manual de 1000+ líneas'
            ],
            highlight: true
        },
        {
            title: 'Usuarios Casuales',
            description: 'Corregir subtítulos descargados que no encajan perfectamente',
            icon: 'mdi:account',
            points: [
                'Subtítulos genéricos desincronizados',
                'Películas en diferente región (PAL vs NTSC)',
                'Streaming con versiones editadas'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Por Qué los Subtítulos Se Desincroniza', level: 3 },
    { type: 'table', headers: ['Causa Común', 'Descripción Técnica', 'Solución'], rows: [
        ['Diferencia de Framerate', '23.976 fps vs 25 fps - acumulación de diferencia', 'Ajuste de offset único (esta herramienta)'],
        ['Editorialización', 'Cortes de publicidad o contenido adicional removido', 'Cálculo manual + sincronización'],
        ['Versión Regional', 'PAL (25 fps Europa) vs NTSC (29.97 fps USA)', 'Offset matemático simple'],
        ['Cambio de Resolución', 'Reencoding con diferente velocidad de procesamiento', 'Recálculo del archivo original']
    ] },

    { type: 'diagnostic', variant: 'info', title: 'Limitaciones Técnicas a Considerar', icon: 'mdi:information', badge: 'Importante', html: 'Esta herramienta aplica un desplazamiento <strong>constante</strong> a todo el archivo. Si el desfase es <strong>progresivo</strong> (empieza bien pero se va desincronizando), significa una diferencia de framerate persistente. En ese caso, el archivo original necesita re-procesamiento en software de edición profesional.' },

    { type: 'proscons', items: [
        {
            pro: 'Velocidad extrema - procesa archivos grandes en milisegundos',
            con: 'Solo ajusta offset fijo, no desfases progresivos'
        },
        {
            pro: 'Privacidad total - el contenido nunca abandona tu navegador',
            con: 'Requiere navegador moderno con JavaScript habilitado'
        },
        {
            pro: 'Formato universal - funciona con cualquier SRT estándar',
            con: 'No soporta otros formatos (ASS, VTT, SCC, etc.)'
        },
        {
            pro: 'Completamente gratuito, sin publicidad, sin tracking',
            con: 'Sin historial de cambios o versioning'
        }
    ], proTitle: 'Ventajas', conTitle: 'Limitaciones' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: 'Formato de subtítulos más universal: archivo de texto con números de secuencia, tiempos (hh:mm:ss,mmm) y texto. Estándar de facto en reproductores y plataformas.'
        },
        {
            term: 'Offset (Desplazamiento)',
            definition: 'Cantidad fija de tiempo que se suma o resta a todos los tiempos del archivo. Pueden ser segundos positivos (retrasar) o negativos (adelantar).'
        },
        {
            term: 'Framerate (fps)',
            definition: 'Fotogramas por segundo. 24p (cine), 25p (PAL/Europa), 29.97p (NTSC/USA), 60p (video fluido). Diferencias causan desfases acumulativos.'
        },
        {
            term: 'NTSC vs PAL',
            definition: 'Estándares de televisión regional: PAL (25 fps, 50 Hz) en Europa/Australia; NTSC (29.97 fps, 60 Hz) en USA/Japón. Diferencias de ~4% en velocidad total.'
        },
        {
            term: 'Desfase Progresivo',
            definition: 'Cuando la sincronización empieza correcta pero se va desincronizando gradualmente. Indica diferencia de framerate persistente, requiere re-procesamiento.'
        }
    ] },

    { type: 'message', title: 'Edición Profesional con Control Total', ariaLabel: 'Información técnica sobre sincronización', html: 'Nuestro enfoque es simple pero poderoso: un desplazamiento único, aplicado instantáneamente, procesado 100% en tu navegador. Sin cloud, sin almacenamiento, sin seguimiento. Simplemente carga, ajusta, descarga. Control total sobre tu contenido.' },

    { type: 'title', text: 'Conclusión: Cine Sin Interrupciones', level: 3 },
    { type: 'paragraph', html: 'La sincronización perfecta de subtítulos es fundamental para una experiencia audiovisual de calidad. Con esta herramienta, transformas una experiencia frustrante en una noche de cine perfecta, sin necesidad de software costoso o complicado.' }
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

export const content: SubtitleSyncLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'Preguntas frecuentes sobre sincronización',
    bibliography,
    bibliographyTitle: 'Recursos técnicos sobre formatos de subtítulos',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

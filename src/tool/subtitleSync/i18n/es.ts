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
    { type: 'title', text: 'Domina la Sincronización de Subtítulos Digitiales', level: 2 },
    { type: 'paragraph', html: 'No hay nada más frustrante para un espectador que un diálogo que no coincide con las voces. El desfase de subtítulos suele ocurrir por diferencias entre las versiones de vídeo (framerate, cortes de publicidad o intros de productoras).' },
    
    { type: 'title', text: 'Adelantar vs Retrasar (El Gran Dilema)', level: 3 },
    { type: 'paragraph', html: 'Entender qué valor introducir es la clave para usar esta herramienta con éxito:' },
    { type: 'list', items: [
        '<strong>Retrasar (Delay):</strong> Si ves el texto ANTES que el audio. Usa números positivos (ej: 1.5).',
        '<strong>Adelantar (Advance):</strong> Si ves el texto DESPUÉS que el audio. Usa números negativos (ej: -1.5).',
    ]},

    { type: 'card', title: 'Privacidad Garantizada', icon: 'mdi:shield-lock', html: 'Al procesar el archivo mediante JavaScript en el lado del cliente, garantizamos que el contenido de tus subtítulos nunca sale de tu ordenador. Ideal para traductores y profesionales que manejan material sensible.' },

    { type: 'diagnostic', variant: 'info', title: 'Consejo para FPS', icon: 'mdi:video-input-component', badge: 'Técnico', html: 'Si los subtítulos empiezan bien pero se van desincronizando poco a poco, es probable que se deba a una diferencia de framerate (ej. 23.976 vs 25 fps). Esta herramienta soluciona desfases fijos, no progresivos.' },
    
    { type: 'title', text: 'Conclusión: Cine sin Interrupciones', level: 3 },
    { type: 'paragraph', html: 'Con unos pocos clics, puedes transformar una experiencia de visionado frustrante en una noche de cine perfecta. Nuestra herramienta gratuita de sincronización SRT es rápida, segura y siempre disponible.' }
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
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TimelapseUI, TimelapseLocaleContent } from '../index';

const slug = 'calculadora-timelapse';
const title = 'Calculadora de Timelapse y Hyperlapse: Intervalos Perfectos';
const description = 'Calcula el intervalo exacto entre fotos, duración total y almacenamiento para tus timelapses. Herramienta esencial para fotógrafos.';

const ui: TimelapseUI = {
    title: "Calculadora Timelapse",
    paramsTitle: "Parámetros",
    eventDuration: "¿Cuánto dura el evento real?",
    hours: "Horas",
    minutes: "Minutos",
    videoDuration: "¿Cómo quieres el video final?",
    seconds: "Duración (seg)",
    fps: "FPS",
    resultsTitle: "Resultados",
    intervalLabel: "Configura tu intervalómetro a:",
    secondsUnit: "segundos",
    totalPhotos: "Total Fotos",
    speed: "Velocidad",
    shutterSpeed: "Duración Disparo",
    storage: "Peso (RAW)",
    rule180Info: "La regla de los 180° sugiere una velocidad de obturación de la mitad del intervalo para un movimiento fluido.",
};

const faq: TimelapseLocaleContent['faq'] = [
    {
        question: "¿Cómo elijo el intervalo correcto para mi timelapse?",
        answer: "Depende de la velocidad del movimiento que capturas. Para nubes rápidas, usa 2-3 segundos. Para el movimiento del sol o estrellas, 15-30 segundos. Para plantas creciendo o construcción de edificios, 5-15 minutos.",
    },
    {
        question: "¿Cuántas fotos necesito para un video de un minuto?",
        answer: "Un video estándar tiene 24 o 30 fotogramas por segundo (fps). Para un minuto de video a 24fps, necesitas exactamente 1440 fotografías (60 segundos * 24 fotos/segundo).",
    },
    {
        question: "¿Qué es el 'Flicker' y cómo lo evito?",
        answer: "Es un parpadeo molesto causado por pequeñas variaciones de exposición entre fotos. Para evitarlo, usa siempre modo manual (M), balance de blancos fijo y prioriza el uso de objetivos con anillo de diafragma manual o técnicas de 'lens twist'.",
    },
    {
        question: "¿Por qué es importante el tiempo de obturación?",
        answer: "Para que el movimiento se vea fluido (regla de los 180°), el tiempo de obturación debería ser aproximadamente la mitad del intervalo. Por ejemplo, si el intervalo es de 2 segundos, intenta disparar a 1 segundo para crear un desenfoque de movimiento natural.",
    },
];

const howTo: TimelapseLocaleContent['howTo'] = [
    {
        name: "Definir la duración del video final",
        text: "Indica cuántos segundos o minutos quieres que dure el video resultante (ej. 10 segundos para Instagram).",
    },
    {
        name: "Seleccionar los FPS de salida",
        text: "Elige la fluidez del video: 24 (cine), 30 (web) o 60 (cámara lenta fluida).",
    },
    {
        name: "Ajustar el intervalo de captura",
        text: "Configura cada cuántos segundos disparará tu cámara según la velocidad de la escena.",
    },
    {
        name: "Verificar espacio de almacenamiento",
        text: "La calculadora te dirá cuántos Gigabytes ocupará la sesión. Asegúrate de que tu tarjeta SD tenga espacio suficiente antes de empezar.",
    },
];

const bibliography: TimelapseLocaleContent['bibliography'] = [
    {
        name: "Timescapes Forum - Digital Timelapse Acquisition & Processing",
        url: "https://timescapes.org/phpBB3/viewforum.php?f=4",
    },
    {
        name: "Magic Lantern - Auto ETTR & Bulb Ramping Algorithms",
        url: "https://wiki.magiclantern.fm/ettr",
    },
    {
        name: "LRTimelapse - Visual Deflicker & Holy Grail Workflow",
        url: "https://lrtimelapse.com/tutorial/advanced/",
    },
    {
        name: "PhotoPills - Advanced Timelapse Calculator & NPF Rule",
        url: "https://www.photopills.com/calculators/timelapse",
    },
];

const seo: TimelapseLocaleContent['seo'] = [
    { type: 'title', text: 'Guía Definitiva de Intervalos Timelapse y Hyperlapse', level: 2 },
    { type: 'paragraph', html: 'La diferencia entre un vídeo acelerado amateur y un <strong>timelapse cinematográfico</strong> reside matemáticamente en un solo factor: <strong>el intervalo</strong>. Esta calculadora elimina las conjeturas, permitiéndote planificar con precisión el disparo de tu intervalómetro para capturar amaneceres, tráfico urbano o la Vía Láctea con fluidez perfecta.' },
    
    { type: 'title', text: 'Tabla de Intervalos Recomendados (Cheat Sheet)', level: 3 },
    { type: 'paragraph', html: 'Usa esta tabla de referencia rápida para configurar tu intervalómetro según el sujeto. El objetivo es capturar suficiente movimiento para que sea perceptible pero fluido.' },
    { type: 'table', headers: ['Sujeto / Escena', 'Intervalo Sugerido', 'Duración Evento (Mínima)'], rows: [
        ['Nubes rápidas / Tormentas', '1 - 2 segundos', '20 - 30 min'],
        ['Tráfico Urbano / Personas (Blur)', '0.5 - 2 segundos', '15 - 20 min'],
        ['Atardecer / Amanecer (Holy Grail)', '5 - 10 segundos', '1.5 - 2.5 horas'],
        ['Nubes Lentas / Sombras', '10 - 15 segundos', '2 - 3 horas'],
        ['Estrellas / Vía Láctea (Astro)', '15 - 30 segundos*', '3 - 5 horas'],
        ['Construcción / Plantas Rápidas', '5 - 15 minutos', 'Días / Semanas']
    ]},
    { type: 'tip', title: 'Nota para Astro', html: 'El intervalo suele estar dictado por el tiempo de exposición necesario para captar luz (regla 500) + 1 o 2 segundos de buffer para escritura en tarjeta.' },

    { type: 'title', text: 'La Regla de los 180° (Motion Blur)', level: 3 },
    { type: 'paragraph', html: 'Un error común en timelapse es obtener un vídeo "nervioso" o staccato (strobing). Para obtener ese look cinematográfico suave, necesitas <strong>motion blur</strong>.' },
    { type: 'card', title: 'La Regla', icon: 'mdi:information', html: 'Tu velocidad de obturación (Shutter Speed) debe ser la mitad de tu intervalo. <br /><br /> <em>Ejemplo:</em> Si disparas cada <strong>4 segundos</strong>, tu exposición debería ser de <strong>2 segundos</strong>. Esto rellena el "vacío temporal" entre fotos, creando estelas en coches y agua suave.' },

    { type: 'title', text: 'Flicker y Apertura Manual', level: 3 },
    { type: 'paragraph', html: 'El "Flicker" es el parpadeo molesto causado por micro-variaciones en la apertura del diafragma entre disparo y disparo.' },
    { type: 'list', items: [
        '<strong>Lens Twist:</strong> Desbloquea ligeramente el objetivo en DSLRs para romper la conexión electrónica y fijar la apertura mecánicamente.',
        '<strong>Todo Manual:</strong> ISO, Balance de Blancos y Enfoque deben estar fijos. Nunca uses modos automáticos.',
        '<strong>Dispara en RAW:</strong> Esencial para corregir exposición y color en post-producción sin destruir la imagen.'
    ]},

    { type: 'diagnostic', variant: 'success', title: 'Técnica Avanzada: El "Holy Grail"', icon: 'mdi:crown', badge: 'Pro Teknik', html: 'Se llama "Santo Grial" a la transición fluida del día a la noche (o viceversa). Es el reto técnico más difícil porque la luz cambia drásticamente (hasta 15 pasos de diafragma).' },
    
    { type: 'stats', columns: 3, items: [
        { label: 'Bulb Ramping', value: 'Exposición Gradual', icon: 'mdi:brightness-6' },
        { label: 'Post-Pro', value: 'LRTimelapse', icon: 'mdi:television-guide' },
        { label: 'Estrategia', value: 'Intervalo Nocturno', icon: 'mdi:weather-night' }
    ]},

    { type: 'title', text: 'Conclusión: El Zen de la Mecánica Simple', level: 3 },
    { type: 'paragraph', html: 'Dominar tu timelapse empieza por entender las matemáticas de tu intervalómetro. No permitas que un intervalo mal elegido arruine tu sesión.' }
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

export const content: TimelapseLocaleContent = {
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

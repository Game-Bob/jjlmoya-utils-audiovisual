import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'creador-collage-fotos';
const title = 'Creador de Collages Online - Diseña composiciones profesionales';
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
    { type: 'title', text: 'Diseño de Collages: Composiciones que cuentan historias', level: 2 },
    { type: 'paragraph', html: 'Un collage es más que una mezcla de fotos; es una narrativa visual. Nuestra herramienta permite crear composiciones geométricas perfectas para Instagram, Facebook o proyectos personales sin necesidad de software complejo.' },
    
    { type: 'card', title: 'Diseños Inteligentes', icon: 'mdi:grid-large', html: 'Nuestra calculadora de cuadrículas adapta el espacio disponible según el número de fotos, asegurando que cada imagen mantenga el equilibrio visual.' },

    { type: 'diagnostic', variant: 'info', title: 'Calidad Profesional', icon: 'mdi:check-decagram', badge: 'HD Output', html: 'Generamos el collage final en un lienzo de alta resolución de hasta 1200 píxeles, garantizando que el texto y los detalles sean legibles.' },
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
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

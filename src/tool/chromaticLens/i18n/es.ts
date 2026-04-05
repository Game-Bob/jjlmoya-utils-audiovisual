import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'lente-cromatica';
const title = 'Lente Cromática - Extracción de Paletas de Color Online';
const description = 'Extrae paletas de colores profesionales de cualquier imagen de forma gratuita. Identifica los colores dominantes de tus fotos mediante algoritmos matemáticos.';

const ui: ChromaticLensUI = {
    dropTitle: "Analizar Colores",
    dropSubtitle: "Arrastra una imagen para extraer su ADN cromático.",
    processingLabel: "Extrayendo paleta...",
    paletteTitle: "Paleta Extraída",
    copyLabel: "Copiar HEX",
    copiedLabel: "¡Copiado!",
    colorCountLabel: "Número de colores",
    changeImage: "Cambiar imagen"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "¿Cómo funciona la extracción de colores?",
        answer: "Utilizamos el algoritmo 'Median Cut', que agrupa los píxeles de la imagen según su proximidad en el espacio de color RGB para encontrar los tonos más representativos.",
    },
    {
        question: "¿Puedo copiar los colores a mi editor de diseño?",
        answer: "Sí, al hacer clic en cada color se copiará automáticamente el código HEX al portapapeles, listo para pegar en Photoshop, Figma o CSS.",
    },
    {
        question: "¿Qué tipos de imágenes puedo analizar?",
        answer: "Cualquier archivo JPG, PNG o WebP. El procesamiento es local, por lo que imágenes pesadas se analizarán rápidamente sin consumir datos de red.",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "Carga la imagen",
        text: "Sube la fotografía de la que quieras extraer la inspiración cromática.",
    },
    {
        name: "Ajusta la precisión",
        text: "Selecciona cuántos colores dominantes quieres que la herramienta identifique (de 3 a 12).",
    },
    {
        name: "Analiza el resultado",
        text: "La paleta aparecerá instantáneamente con sus códigos hexadecimales correspondientes.",
    },
    {
        name: "Copia y utiliza",
        text: "Haz clic en los tonos para guardarlos y aplicarlos a tu proyecto de diseño.",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "Median Cut Algorithm - Wikipedia",
        url: "https://en.wikipedia.org/wiki/Median_cut",
    },
    {
        name: "Color Theory for Designers",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    { type: 'title', text: 'El ADN Cromático: La Ciencia Detrás de los Colores Dominantes', level: 2 },
    { type: 'paragraph', html: '¿Alguna vez te has preguntado por qué una fotografía de cine se siente tan armoniosa? No es casualidad; es la **teoría del color** en acción. Nuestra herramienta te permite desgranar esa armonía píxel a píxel.' },
    
    { type: 'title', text: '¿Qué es el Algoritmo Median Cut?', level: 3 },
    { type: 'paragraph', html: 'La extracción de paletas no es un proceso aleatorio. El algoritmo Median Cut divide recursivamente el "cubo de color" de la imagen en cajas con un volumen similar de píxeles, calculando el color promedio de cada una.' },

    { type: 'card', title: 'Inspiración Instantánea', icon: 'mdi:creation', html: 'Ideal para desarrolladores web y artistas digitales que buscan capturar la esencia visual de una escena para sus interfaces o ilustraciones.' },

    { type: 'diagnostic', variant: 'success', title: 'Representación Realista', icon: 'mdi:check-circle', badge: 'Algoritmo', html: 'A diferencia de simples muestreos, nuestro sistema pondera la cantidad de píxeles de cada tono, asegurando que la paleta resultante sea un reflejo fiel de la atmósfera de la imagen.' },
    
    { type: 'title', text: 'Conclusión: Diseña con Intención', level: 3 },
    { type: 'paragraph', html: 'Lente Cromática es el puente entre la realidad visual y tu flujo de trabajo creativo. Extrae, copia y crea.' }
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

export const content: ChromaticLensLocaleContent = {
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

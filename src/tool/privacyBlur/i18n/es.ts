import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'editor-privacidad';
const title = 'Editor de Privacidad Online - Pixela y oculta rostros en fotos';
const description = 'Protege tu identidad censurando áreas sensibles de tus fotos. Pixela rostros, desenfoca documentos o tapa información privada de forma 100% local.';

const ui: PrivacyBlurUI = {
    toolPixel: "Pixelar",
    toolBlur: "Borro",
    toolSolid: "Tapado",
    intensityLabel: "Intensidad",
    undoButton: "Deshacer",
    downloadButton: "Guardar",
    dropTitle: "Editor de Privacidad",
    dropSubtitle: "Arrastra tu imagen aquí o haz clic para empezar",
    privacySecureLabel: "100% Local",
    offlineLabel: "Offline",
    autoDetectFaces: "Auto Detect",
    loadingModels: "Descargando modelos...",
    noFacesDetected: "No se detectaron rostros automáticamente."
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "¿Mis fotos se suben a algún servidor?",
        answer: "No. El editor de privacidad funciona íntegramente en tu navegador. Los píxeles se modifican localmente y nada se envía fuera de tu dispositivo.",
    },
    {
        question: "¿Cómo funciona la detección automática de caras?",
        answer: "Utilizamos una red neuronal ligera (TinyFaceDetector) que se ejecuta en tu navegador para identificar rasgos faciales sin necesidad de una conexión externa.",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "Sube tu foto",
        text: "Arrastra o selecciona la imagen que contenga información sensible que deseas ocultar.",
    },
    {
        name: "Elige la herramienta",
        text: "Selecciona entre pixelar, desenfocar o tapado sólido según el nivel de privacidad que necesites.",
    },
    {
        name: "Marca el área",
        text: "Haz clic y arrastra sobre la zona que quieres proteger (caras, matrículas, nombres, etc.).",
    },
    {
        name: "Guarda el resultado",
        text: "Descarga la imagen procesada con la seguridad de que los datos originales son inaccesibles.",
    },
];

const bibliography: PrivacyBlurLocaleContent['bibliography'] = [
    {
        name: "Privacidad por Diseño (PbD) - AGPD",
        url: "https://www.aepd.es/es/guias-y-herramientas/guias/guia-de-privacidad-desde-el-diseno",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    { type: 'title', text: 'Privacidad Digital: Cómo proteger tus datos visuales', level: 2 },
    { type: 'paragraph', html: 'En la era de las redes sociales, compartir fotos sin control puede exponer datos personales. Nuestra herramienta permite ocultar información sensible antes de subirla a Internet, asegurando que tu privacidad se mantenga bajo tu control.' },
    
    { type: 'card', title: 'Seguridad Local', icon: 'mdi:shield-lock', html: 'Al procesar las imágenes mediante la GPU de tu navegador, garantizamos que las fotos originales nunca abandonan tu ordenador.' },

    { type: 'diagnostic', variant: 'success', title: 'Sin Rastreo', icon: 'mdi:incognito', html: 'No utilizamos cookies de seguimiento ni almacenamos historiales de edición. Es una herramienta pura para el usuario.' },
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

export const content: PrivacyBlurLocaleContent = {
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

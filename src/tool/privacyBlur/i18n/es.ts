import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'editor-privacidad';
const title = 'Editor de Privacidad Online: Pixela y oculta rostros en fotos';
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

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Editor de Privacidad: Pixela, Desenfoca y Oculta',
        items: [
            'Tres herramientas de edición: Pixelar, Desenfocar, Tapado Sólido',
            'Detección automática de rostros con IA (TinyFaceDetector)',
            'Procesamiento 100% local - tus fotos nunca salen del navegador',
            'Sin marcas de agua, sin límites, completamente gratuito'
        ]
    },
    { type: 'title', text: 'Privacidad Digital: Cómo Proteger tus Datos Visuales', level: 2 },
    { type: 'paragraph', html: 'En la era de las redes sociales, compartir fotos sin control puede exponer datos personales sensibles. Nuestra herramienta permite ocultar información crítica (rostros, matrículas, nombres, direcciones) antes de subirlas a Internet, asegurando que tu privacidad permanece bajo tu control total.' },

    { type: 'stats', items: [
        { value: '3', label: 'Métodos de Ocultación', icon: 'mdi:tools' },
        { value: '100%', label: 'Privacidad Local', icon: 'mdi:shield-check' },
        { value: 'IA', label: 'Detección de Rostros', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: 'Tres Métodos de Ocultación Explicados', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Pixelar',
            description: 'Divide el área en cuadrados, imposible reconocer',
            icon: 'mdi:blur',
            points: [
                'Máxima obfuscación irreversible',
                'Más seguro contra reconocimiento facial',
                'Visible, claro que algo se ocultó',
                'Ideal: rostros en fotos públicas'
            ]
        },
        {
            title: 'Desenfocar',
            description: 'Suavizado Gaussiano - aspecto más natural',
            icon: 'mdi:blur-off',
            points: [
                'Aspecto visual más elegante',
                'Mantiene cierta coherencia de tonos',
                'Matemáticamente reversible (teóricamente)',
                'Ideal: información menos sensible'
            ],
            highlight: true
        },
        {
            title: 'Tapado Sólido',
            description: 'Bloque de color opaco - máxima privacidad',
            icon: 'mdi:rectangle',
            points: [
                'Visible, evidente ocultación',
                'Máxima seguridad legal/privacidad',
                'Cambia composición visual',
                'Ideal: documentos, datos sensibles'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'Detección Automática de Rostros con IA', level: 3 },
    { type: 'paragraph', html: 'Nuestra herramienta utiliza TinyFaceDetector, una red neuronal compacta que se ejecuta directamente en tu navegador para identificar rostros automáticamente:' },
    { type: 'list', items: [
        '<strong>100% Local:</strong> El modelo de IA corre en tu GPU/CPU, no en servidores remotos.',
        '<strong>Sin Internet:</strong> Después de la descarga inicial, funciona completamente offline.',
        '<strong>Privacidad Garantizada:</strong> Nadie ve los rostros: ni Google, ni OpenAI, ni nosotros.',
        '<strong>Un Clic Automático:</strong> Detecta rostros y te deja elegir ocultar con un clic.'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Seguridad por Diseño (Privacy by Design)', html: 'Al procesar las imágenes mediante la GPU y CPU local de tu navegador, garantizamos que las fotos originales nunca abandonan tu dispositivo. Incluso si cambias de idea, nada fue transmitido. Este es el estándar máximo de privacidad digital.' },

    { type: 'title', text: 'Casos de Uso de Privacidad', level: 3 },
    { type: 'table', headers: ['Información Sensible', 'Método Recomendado', 'Urgencia'], rows: [
        ['Rostros de personas', 'Pixelar o Desenfocar', 'Crítica'],
        ['Matrículas de vehículos', 'Pixelar (irreversible)', 'Crítica'],
        ['Documentos de identidad', 'Tapado Sólido o Pixelar', 'Crítica'],
        ['Nombres/Direcciones escritas', 'Tapado Sólido o Pixelar', 'Alta'],
        ['Números de teléfono', 'Pixelar o Tapar', 'Alta'],
        ['Información médica', 'Tapado Sólido', 'Crítica'],
        ['Señales de WiFi visibles', 'Pixelar', 'Media']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacidad total: procesamiento 100% local, sin servidores, sin almacenamiento',
            con: 'Requiere navegador moderno con soporte Canvas y WebGL'
        },
        {
            pro: 'Detección automática de rostros ahorra tiempo manual',
            con: 'IA no es perfecta - rostros de perfil o parciales pueden no detectarse'
        },
        {
            pro: 'Tres métodos permiten elegir seguridad vs estética',
            con: 'Sin opciones avanzadas (deformación inteligente, relleno contextual)'
        },
        {
            pro: 'Completamente gratuito, sin publicidad, sin límites',
            con: 'No es equivalente a software profesional como Photoshop'
        }
    ], proTitle: 'Ventajas', conTitle: 'Limitaciones' },

    { type: 'diagnostic', variant: 'warning', title: 'Advertencia: Desenfocar NO es 100% Seguro', icon: 'mdi:alert', badge: 'Seguridad', html: 'El desenfoque Gaussiano es reversible matemáticamente mediante algoritmos inversos sofisticados. Si la información es CRÍTICA (documentos legales, identidad), usa <strong>Pixelar o Tapado Sólido</strong>. El desenfoque es estéticamente mejor pero menos seguro.' },

    { type: 'glossary', items: [
        {
            term: 'Pixelación',
            definition: 'Reducir resolución diviendo área en bloques de color uniforme. Irreversible. Máxima seguridad contra reconocimiento facial de IA.'
        },
        {
            term: 'Desenfoque Gaussiano',
            definition: 'Suavizado matemático basado en distribución normal. Reversible teóricamente mediante deconvolución, pero prácticamente muy difícil.'
        },
        {
            term: 'Tapado Sólido',
            definition: 'Bloque opaco de un color uniforme. Máxima seguridad, máxima privacidad legal, menos elegante visualmente.'
        },
        {
            term: 'TinyFaceDetector',
            definition: 'Red neuronal convolucional (CNN) ligera para detectar rostros. Corre localmente en navegador sin necesidad de servidor externo.'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'Enfoque donde la privacidad está integrada desde el diseño del sistema, no añadida después. Nuestro enfoque local es Privacy by Design.'
        }
    ] },

    { type: 'message', title: 'Privacidad en tu Control', ariaLabel: 'Información sobre protección de privacidad', html: 'No almacenamos ni procesamos tus fotos en servidores remotos. No hay cookies de seguimiento. No hay historiales de edición. No sabemos qué ocultas porque nunca vemos tus imágenes. Control total, privacidad total, libertad total.' },

    { type: 'title', text: 'Comparte Seguro en Redes Sociales', level: 3 },
    { type: 'paragraph', html: 'Antes de publicar cualquier foto en Internet, pregúntate: ¿hay información que preferiría que no fuera pública? Rostros de hijos, matrículas, direcciones, números de documentos. Una sesión de 2 minutos de privacidad ahora te evita problemas de años.' }
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

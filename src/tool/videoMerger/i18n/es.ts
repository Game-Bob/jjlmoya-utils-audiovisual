import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'unir-videos-online';
const title = 'Unir Vídeos Online: Une múltiples vídeos gratis y rápido';
const description = 'Une y concatena varios vídeos en uno solo de forma gratuita, online y local. Sin marcas de agua, sin subidas, 100% privado en tu navegador.';

const ui: VideoMergerUI = {
    uploadTitle: "Sube tus archivos de vídeo",
    uploadFormats: "Arrastra varios vídeos o haz clic para seleccionarlos",
    privacyNote: "Tus vídeos se procesan 100% de forma local. Nada se sube a internet.",
    addMoreBtn: "Añadir más vídeos",
    mergeBtn: "Unir vídeos ahora",
    mergingStatus: "Uniendo vídeos...",
    downloadBtn: "Descargar vídeo unificado",
    resetBtn: "Comenzar de nuevo",
    emptyList: "Arrastra o selecciona vídeos para empezar a unirlos.",
    listTitle: "Orden de los vídeos a unir",
    optionsTitle: "Configuración de salida",
    optionResolution: "Resolución",
    optionFps: "Fotogramas por segundo (FPS)",
    optionsQualityNote: "La resolución final se ajustará manteniendo la proporción original en formato letterbox si los vídeos tienen tamaños distintos.",
    faqTitle: "Preguntas Frecuentes sobre la Unión de Vídeos",
    bibliographyTitle: "Bibliografía y Referencias",
    resolutionWarning: "Atención: Algunos vídeos tienen distinta resolución y serán adaptados automáticamente."
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "¿Es seguro subir mis vídeos a esta herramienta?",
        answer: "Sí, es completamente seguro. La herramienta funciona de forma 100% local en tu navegador. Tus vídeos nunca se transmiten por internet ni se guardan en ningún servidor.",
    },
    {
        question: "¿Qué pasa si mis vídeos tienen distintas dimensiones?",
        answer: "Nuestra herramienta se encarga de reescalar automáticamente los vídeos para que se adapten a la resolución de salida que elijas. Para las proporciones que no coincidan exactamente, se añadirán márgenes negros (letterboxing) preservando la relación de aspecto original.",
    },
    {
        question: "¿Se conserva el audio de los vídeos al unirlos?",
        answer: "Sí. Las pistas de audio de cada vídeo se capturan y se mezclan de forma secuencial en perfecta sincronía con cada tramo de la imagen.",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "Selecciona o arrastra tus vídeos",
        text: "Carga todos los archivos de vídeo que quieres fusionar directamente desde tu ordenador o móvil.",
    },
    {
        name: "Organiza el orden",
        text: "Ordena los vídeos subidos usando los botones de subir o bajar en la lista para decidir la secuencia de reproducción.",
    },
    {
        name: "Ajusta las opciones",
        text: "Elige la resolución de salida y los fotogramas por segundo (FPS) del vídeo unificado.",
    },
    {
        name: "Une y exporta",
        text: "Pulsa el botón de unir. Espera a que se complete el procesamiento en tiempo real y descarga el archivo resultante.",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'Unión Profesional de Vídeos 100% Local',
        items: [
            'Procesamiento en tiempo real directamente en tu navegador',
            'Soporta múltiples vídeos de distintos tamaños y formatos (MP4, WEBM, MOV)',
            'Resolución de salida seleccionable (720p, 1080p, 2K, 4K)',
            'Pistas de audio combinadas de forma perfectamente secuencial'
        ]
    },
    { type: 'title', text: 'Unir Vídeos Online Gratis: Sencillez y Privacidad sin Límites', level: 2 },
    { type: 'paragraph', html: '¿Te preguntas <strong>cómo unir dos vídeos en uno solo</strong> sin complicaciones? Ya no necesitas descargar programas pesados ni aplicaciones de pago. Nuestra herramienta para <strong>unir vídeos online gratis</strong> te permite concatenar y fusionar todos los clips que necesites en cuestión de segundos. Al funcionar de forma 100% local, no tienes que subir tus archivos a ningún servidor, garantizando privacidad absoluta y permitiéndote <strong>unir vídeos pesados</strong> sin tiempos de espera en la subida.' },
    
    { type: 'title', text: 'Juntar Vídeos sin Marca de Agua', level: 3 },
    { type: 'paragraph', html: 'Uno de los mayores inconvenientes de otras aplicaciones es que ensucian tu contenido. Con nosotros, puedes <strong>juntar vídeos online sin marca de agua</strong>. El archivo que descargues será exactamente tu creación, limpia, profesional y lista para compartir en YouTube, Instagram, TikTok o para uso personal.' },

    { type: 'stats', items: [
        { value: '100%', label: 'Privado y Local', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'Sin Datos de Subida', icon: 'mdi:upload-off' },
        { value: '4K', label: 'Resolución Máxima', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: 'Casos de Uso Comunes para Fusionar Vídeos', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'Redes Sociales',
            description: 'Fusión rápida de stories, tiktoks o reels en un único vídeo',
            icon: 'mdi:instagram',
            points: [
                'Une pequeños clips grabados con el móvil',
                'Prepara contenido secuencial para Instagram o YouTube',
                'Fusión sin marcas de agua molestas'
            ]
        },
        {
            title: 'Presentaciones',
            description: 'Une introducciones y grabaciones de demostración en un solo archivo',
            icon: 'mdi:presentation',
            points: [
                'Fusiona intro animada con el cuerpo de la presentación',
                'Une demos cortas de software',
                'Exportación limpia en formato estándar MP4/WEBM'
            ],
            highlight: true
        },
        {
            title: 'Compilaciones Familiares',
            description: 'Funde múltiples vídeos de tus vacaciones o celebraciones',
            icon: 'mdi:home-heart',
            points: [
                'Crea un único vídeo con todos los momentos de la fiesta',
                'Agrupa memorias de viajes de manera cronológica',
                'Fácil de compartir al estar en un solo archivo'
            ]
        },
        {
            title: 'Vídeos Educativos',
            description: 'Concatena capítulos o lecciones cortas de formación',
            icon: 'mdi:school',
            points: [
                'Agrupa pequeños tutoriales independientes',
                'Añade un clip de cierre a tus lecciones',
                'Estructura tu curso de forma profesional'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'La Mejor App para Unir Vídeos desde el Navegador', level: 2 },
    { type: 'paragraph', html: 'Esta no es solo otra página web; es una auténtica <strong>app para unir vídeos</strong> que opera directamente desde tu navegador gracias a la tecnología moderna de APIs de vídeo de HTML5. Puedes <strong>fusionar vídeos MP4</strong>, WEBM y más, mezclando resoluciones (nuestro sistema aplica letterboxing automático si las dimensiones varían) y eligiendo los fotogramas por segundo (FPS) de tu exportación final.' },

    { type: 'title', text: 'Comparativa de Enfoques de Unión', level: 3 },
    { type: 'table', headers: ['Características', 'Nuestra Herramienta Local', 'Convertidores Online Clásicos', 'Editores Profesionales'], rows: [
        ['Privacidad', 'Total (Procesado en tu equipo)', 'Baja (Requiere subir archivos al servidor)', 'Total (Instalado en tu equipo)'],
        ['Consumo de Red', 'Cero (Sin subidas de gigabytes)', 'Muy alto (Subida y bajada del archivo)', 'Cero'],
        ['Marca de Agua', 'NO (100% limpio)', 'Sí (En versiones gratuitas)', 'NO (Si compras la licencia)'],
        ['Precio', '100% Gratis', 'Gratis con límites o suscripción', 'Suelen ser costosos'],
        ['Curva de Aprendizaje', 'Muy baja (Arrastrar, ordenar y unir)', 'Baja', 'Muy alta (Requiere formación técnica)']
    ] },

    { type: 'proscons', items: [
        {
            pro: 'Privacidad garantizada: Seguridad máxima al no salir ningún archivo de tu dispositivo',
            con: 'La velocidad de unión de vídeos pesados depende de la memoria RAM y procesador de tu equipo local'
        },
        {
            pro: 'Resultados profesionales: 100% gratuito, sin registros y sin marcas de agua',
            con: 'Al juntar vídeos con dimensiones dispares (vertical vs horizontal), se aplicarán márgenes negros (letterboxing)'
        },
        {
            pro: 'Versatilidad: Exportación rápida con codificación eficiente optimizada para uso en web y redes sociales',
            con: 'No permite añadir transiciones complejas (fundidos en 3D) ni efectos visuales cinematográficos entre clips'
        }
    ], title: 'Ventajas y Consideraciones' },

    { type: 'title', text: 'Empieza a Unir tus Vídeos Hoy Mismo', level: 2 },
    { type: 'paragraph', html: 'Ya no hay excusas para tener cientos de fragmentos de vídeo desorganizados. Sube tus archivos, colócalos en el orden deseado y presiona el botón. Descubre la forma más rápida, segura y privada de <strong>unir vídeos online</strong>.' }
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

export const content: VideoMergerLocaleContent = {
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

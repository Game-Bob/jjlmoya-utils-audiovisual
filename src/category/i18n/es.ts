import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisual',
  title: 'Audiovisual y Fotografía',
  description: 'Herramientas profesionales y calculadoras para cineastas, fotógrafos y creadores de contenido audiovisual digital.',
  seo: [
    {
      type: 'summary',
      title: 'Herramientas Audiovisuales Profesionales',
      items: [
        'Calculadoras inteligentes para timelapses, efectos y composición.',
        'Herramientas de privacidad para limpiar metadatos EXIF.',
        'Síncronización de subtítulos y edición de tiempos.',
        'Análisis de resolución, calidad de impresión y distancia de visionado óptima.'
      ],
    },
    {
      type: 'title',
      text: 'Toolbox Profesional para Producción Audiovisual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nuestra suite integral de utilidades resuelve los desafíos técnicos más comunes en cada etapa de la producción audiovisual. Desde cálculos precisos de intervalos para timelapses cinematográficos hasta la protección de privacidad mediante limpieza de metadatos EXIF en tus archivos multimedia.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Herramientas especializadas',
          icon: 'cog'
        },
        {
          value: '100%',
          label: 'Cálculos precisos',
          icon: 'chart'
        },
        {
          value: '0%',
          label: 'Datos almacenados en servidor',
          icon: 'shield'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Categorías de Herramientas',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse y Cinemática',
          description: 'Calcula intervalos, duración total y velocidad de fotogramas para tus tomas cinematográficas.',
          icon: 'film',
          points: [
            'Cálculo de fotogramas necesarios',
            'Duración en segundos/minutos',
            'Velocidad de reproducción variable'
          ]
        },
        {
          title: 'Privacidad y Metadatos',
          description: 'Protege tu privacidad eliminando datos EXIF y metadatos sensibles de tus archivos.',
          icon: 'lock',
          points: [
            'Análisis de datos EXIF',
            'Limpieza de metadatos de ubicación',
            'Eliminación de información de dispositivo'
          ]
        },
        {
          title: 'Edición de Subtítulos',
          description: 'Sincroniza, ajusta y edita subtítulos con precisión de milisegundos.',
          icon: 'text',
          points: [
            'Sincronización en tiempo real',
            'Edición de tiempos de entrada/salida',
            'Ajuste global de retrasos'
          ]
        },
        {
          title: 'Análisis de Imagen',
          description: 'Calcula parámetros técnicos de resolución, impresión y distancia de visionado.',
          icon: 'image',
          points: [
            'Cálculo de DPI y resolución',
            'Distancia de visionado recomendada',
            'Análisis de calidad de impresión'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Por Qué Elegir Nuestras Herramientas',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Procesamiento 100% en el navegador - tus datos nunca se suben a servidores',
          con: 'Requiere navegador moderno con soporte JavaScript'
        },
        {
          pro: 'Precisión matemática en todos los cálculos audiovisuales',
          con: 'Para casos muy específicos pueden requerir validación manual'
        },
        {
          pro: 'Interfaz intuitiva diseñada para profesionales del sector',
          con: 'Mejor experiencia en pantallas de escritorio/tablet'
        },
        {
          pro: 'Herramientas completamente gratuitas sin límites de uso',
          con: 'Sin soporte premium dedicado (comunidad disponible)'
        }
      ],
      proTitle: 'Ventajas',
      conTitle: 'Consideraciones'
    },
    {
      type: 'title',
      text: 'Guía Rápida de Uso',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Selecciona la herramienta que necesitas según tu tipo de proyecto',
        'Introduce los parámetros técnicos (fotogramas, resolución, tiempos, etc.)',
        'Obtén cálculos instantáneos y resultados precisos',
        'Exporta o aplica los resultados a tu flujo de trabajo',
        'Repite el proceso para múltiples proyectos sin límites'
      ],
      icon: 'arrow'
    },
    {
      type: 'tip',
      title: 'Consejo del Profesional',
      html: 'Para trabajos con múltiples clips o secuencias, te recomendamos guardar tus parámetros clave (resolución de cámara, frame rate habitual, idioma de subtítulos) en un documento. Así podrás acceder rápidamente a ellos sin necesidad de recalcular cada vez.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Formato de archivo que almacena metadatos en imágenes digitales (fecha, cámara, ubicación GPS, etc.). Puede ser un riesgo de privacidad.'
        },
        {
          term: 'FPS (Fotogramas por Segundo)',
          definition: 'Número de fotogramas que se reproducen cada segundo. Valores comunes: 24 fps (cine), 25 fps (PAL), 30 fps (NTSC), 60 fps (video fluido).'
        },
        {
          term: 'DPI (Puntos por Pulgada)',
          definition: 'Medida de resolución en impresión. Mayor DPI = mejor calidad. Para fotografía profesional se recomienda mínimo 300 DPI.'
        },
        {
          term: 'Timelapse',
          definition: 'Técnica cinematográfica que acelera el tiempo capturando fotogramas a intervalos regulares para crear efecto de movimiento rápido.'
        },
        {
          term: 'Sincronización de Subtítulos',
          definition: 'Proceso de alinear el tiempo de aparición/desaparición de subtítulos con el audio y vídeo de una película o serie.'
        },
        {
          term: 'Metadatos',
          definition: 'Información oculta en archivos de medios que describe el contenido (autor, fecha de creación, dispositivo usado, ubicación, etc.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Cómo Elegir la Herramienta Correcta',
      icon: 'help',
      badge: 'Guía de Selección',
      html: '<strong>¿Estás creando un timelapse?</strong> → Usa la calculadora de timelapse.<br><strong>¿Necesitas proteger tu privacidad?</strong> → Herramienta de limpieza de metadatos.<br><strong>¿Trabajas con subtítulos?</strong> → Sincronizador y editor de subtítulos.<br><strong>¿Necesitas optimizar imagen?</strong> → Calculadora de resolución y distancia de visionado.'
    },
    {
      type: 'card',
      title: 'Funcionalidad Clave',
      html: 'Todas nuestras herramientas funcionan <strong>100% localmente</strong> en tu navegador. Esto significa máxima privacidad, velocidad instantánea y acceso sin conexión (tras la carga inicial).'
    },
    {
      type: 'message',
      title: 'Protección de Privacidad',
      ariaLabel: 'Información sobre privacidad y almacenamiento de datos',
      html: 'No almacenamos, procesamos ni compartimos tus datos audiovisuales. Todos los cálculos y limpiezas de metadatos ocurren exclusivamente en tu dispositivo. Tú tienes el control total de tu contenido.'
    }
  ],
};

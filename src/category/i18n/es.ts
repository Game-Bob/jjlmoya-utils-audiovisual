import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisual',
  title: 'Audiovisual y Fotografía',
  description: 'Herramientas y calculadoras para cineastas, fotógrafos y creadores de contenido digital.',
  seo: [
    {
      type: 'summary',
      title: 'Herramientas Audiovisuales',
      items: [
        'Calculadoras de timelapse y flujo de trabajo.',
        'Herramientas de privacidad para limpieza de metadatos.',
        'Sincronización de subtítulos y edición rápida.',
        'Análisis de calidad de impresión y distancia de visionado.'
      ],
    },
    {
      type: 'title',
      text: 'Optimiza tu Flujo de Trabajo Audiovisual',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nuestra suite de utilidades está diseñada para resolver los desafíos técnicos más comunes en la producción audiovisual. Desde el cálculo preciso de intervalos para timelapses hasta el anonimato de tus fotografías mediante la limpieza de datos EXIF.',
    },
  ],
};

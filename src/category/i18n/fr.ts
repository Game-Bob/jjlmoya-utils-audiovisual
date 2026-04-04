import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'audiovisuel',
  title: 'Audiovisuel et Photographie',
  description: 'Suite technique pour cinéastes, photographes et créateurs de contenu numérique.',
  seo: [
    {
      type: 'summary',
      title: 'Outils Audiovisuels',
      items: [
        'Calculatrices timelapse et planification de flux de travail.',
        'Utilitaires de nettoyage des métadonnées de confidentialité.',
        'Synchronisation des sous-titres et édition rapide.',
        'Analyse de la qualité d\'impression.'
      ],
    },
    {
      type: 'title',
      text: 'Maîtrisez votre Production Audiovisuelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Nos outils sont conçus pour résoudre les défis techniques courants lors de la phase de production.',
    },
  ],
};

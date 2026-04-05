import type { CategoryLocaleContent } from '../../types';

export const content: CategoryLocaleContent = {
  slug: 'outils-audiovisuels-photographie-calculatrices-professionnelles',
  title: 'Outils Audiovisuels et Photographie',
  description: 'Outils et calculatrices professionnels pour cinéastes, photographes et créateurs de contenu audiovisuel numérique.',
  seo: [
    {
      type: 'summary',
      title: 'Outils Audiovisuels Professionnels',
      items: [
        'Calculatrices intelligentes pour timelapses, effets et composition.',
        'Outils de confidentialité pour nettoyer les métadonnées EXIF.',
        'Synchronisation de sous-titres et édition des temps.',
        'Analyse de résolution, qualité d\'impression et distance de visionnage optimale.'
      ],
    },
    {
      type: 'title',
      text: 'Boîte à Outils Professionnelle pour la Production Audiovisuelle',
      level: 2,
    },
    {
      type: 'paragraph',
      html: 'Notre suite complète d\'utilitaires résout les défis techniques les plus courants à chaque étape de la production audiovisuelle. Des calculs d\'intervalles précis pour les timelapses cinématographiques à la protection de la vie privée par le nettoyage des métadonnées EXIF dans vos fichiers multimédias.',
    },
    {
      type: 'stats',
      items: [
        {
          value: '12+',
          label: 'Outils spécialisés',
          icon: 'cog'
        },
        {
          value: '100%',
          label: 'Calculs précis',
          icon: 'chart'
        },
        {
          value: '0%',
          label: 'Données stockées sur serveur',
          icon: 'shield'
        }
      ],
      columns: 3
    },
    {
      type: 'title',
      text: 'Catégories d\'Outils',
      level: 3,
    },
    {
      type: 'comparative',
      items: [
        {
          title: 'Timelapse et Cinématographie',
          description: 'Calculez les intervalles, la durée totale et les fréquences d\'images pour vos prises de vue cinématographiques.',
          icon: 'film',
          points: [
            'Calcul des images nécessaires',
            'Durée en secondes/minutes',
            'Vitesse de lecture variable'
          ]
        },
        {
          title: 'Confidentialité et Métadonnées',
          description: 'Protégez votre vie privée en supprimant les données EXIF et les métadonnées sensibles de vos fichiers.',
          icon: 'lock',
          points: [
            'Analyse des données EXIF',
            'Nettoyage des métadonnées de localisation',
            'Suppression des informations sur l\'appareil'
          ]
        },
        {
          title: 'Édition de Sous-titres',
          description: 'Synchronisez, ajustez et éditez les sous-titres avec une précision à la milliseconde.',
          icon: 'text',
          points: [
            'Synchronisation en temps réel',
            'Édition des temps d\'entrée/sortie',
            'Réglage global des retards'
          ]
        },
        {
          title: 'Analyse d\'Image',
          description: 'Calculez les paramètres techniques de résolution, d\'impression et de distance de visionnage.',
          icon: 'mdi:image',
          points: [
            'Calcul du DPI et de la résolution',
            'Distance de visionnage recommandée',
            'Analyse de la qualité d\'impression'
          ],
          highlight: true
        }
      ],
      columns: 2
    },
    {
      type: 'title',
      text: 'Pourquoi Choisir Nos Outils',
      level: 3,
    },
    {
      type: 'proscons',
      items: [
        {
          pro: 'Traitement 100 % par navigateur - vos données ne sont jamais téléversées sur des serveurs',
          con: 'Nécessite un navigateur moderne avec support JavaScript'
        },
        {
          pro: 'Précision mathématique dans tous les calculs audiovisuels',
          con: 'Des cas très spécifiques peuvent nécessiter une validation manuelle'
        },
        {
          pro: 'Interface intuitive conçue pour les professionnels du secteur',
          con: 'Meilleure expérience sur les écrans de bureau/tablette'
        },
        {
          pro: 'Outils totalement gratuits sans limites d\'utilisation',
          con: 'Pas de support premium dédié (communauté disponible)'
        }
      ],
      proTitle: 'Avantages',
      conTitle: 'Considérations'
    },
    {
      type: 'title',
      text: 'Guide de Démarrage Rapide',
      level: 3,
    },
    {
      type: 'list',
      items: [
        'Sélectionnez l\'outil dont vous avez besoin selon votre type de projet',
        'Saisissez les paramètres techniques (images, résolution, temps, etc.)',
        'Obtenez des calculs instantanés et des résultats précis',
        'Exportez ou appliquez les résultats à votre flux de travail',
        'Répétez le processus pour plusieurs projets sans limites'
      ],
      icon: 'mdi:arrow-right'
    },
    {
      type: 'tip',
      title: 'Conseil de Pro',
      html: 'Pour les travaux avec plusieurs clips ou séquences, nous vous recommandons de sauvegarder vos paramètres clés (résolution de caméra, fréquence d\'images habituelle, langue des sous-titres) dans un document. Vous pourrez ainsi y accéder rapidement sans avoir à recalculer à chaque fois.'
    },
    {
      type: 'glossary',
      items: [
        {
          term: 'EXIF',
          definition: 'Format de fichier qui stocke des métadonnées dans les images numériques (date, appareil, localisation GPS, etc.). Cela peut poser un risque de confidentialité.'
        },
        {
          term: 'FPS (Images par seconde)',
          definition: 'Nombre d\'images lues chaque seconde. Valeurs communes : 24 fps (cinéma), 25 fps (PAL), 30 fps (NTSC), 60 fps (vidéo fluide).'
        },
        {
          term: 'DPI (Points par pouce)',
          definition: 'Mesure de résolution en impression. Plus le DPI est élevé, meilleure est la qualité. Pour la photographie professionnelle, un minimum de 300 DPI est recommandé.'
        },
        {
          term: 'Timelapse',
          definition: 'Technique cinématographique qui accélère le temps en capturant des images à intervalles réguliers pour créer un effet de mouvement rapide.'
        },
        {
          term: 'Synchronisation des Sous-titres',
          definition: 'Processus d\'alignement du temps d\'apparition/disparition des sous-titres avec l\'audio et la vidéo d\'un film أو d\'une série.'
        },
        {
          term: 'Métadonnées',
          definition: 'Informations cachées dans les fichiers multimédias décrivant le contenu (auteur, date de création, appareil utilisé, emplacement, etc.).'
        }
      ]
    },
    {
      type: 'diagnostic',
      variant: 'info',
      title: 'Comment Choisir le Bon Outil',
      icon: 'help',
      badge: 'Guide de Sélection',
      html: '<strong>Créer un timelapse ?</strong> -> Utilisez la calculatrice de timelapse.<br><strong>Besoin de protéger votre confidentialité ?</strong> -> Outil de nettoyage des métadonnées.<br><strong>Travailler avec des sous-titres ?</strong> -> Synchroniseur et éditeur de sous-titres.<br><strong>Besoin d\'optimiser l\'image ?</strong> -> Calculatrice de résolution et de distance de visionnage.'
    },
    {
      type: 'card',
      title: 'Fonctionnalité Clé',
      html: 'Tous nos outils fonctionnent <strong>100 % localement</strong> dans votre navigateur. Cela signifie une confidentialité maximale, une vitesse instantanée et un accès hors ligne (après le chargement initial).'
    },
    {
      type: 'message',
      title: 'Protection de la Confidentialité',
      ariaLabel: 'Informations sur la confidentialité et le stockage des données',
      html: 'Nous ne stockons, ne traitons ni ne partageons vos données audiovisuelles. Tous les calculs et nettoyages de métadonnées s\'effectuent exclusivement sur votre appareil. Vous avez le contrôle total de votre contenu.'
    }
  ],
};

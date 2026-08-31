import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Ajustez l image, la bande sonore et la durée. Le rouleau ci-dessous transforme ces choix en une estimation d export prête pour votre encodeur.',
  presetLabel: 'Commencer par un préréglage de livraison',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Social 1080p 60',
  presetMaster: 'Livraison master 4K',
  sourceSettingsTitle: 'Paramètres d export',
  resolutionLabel: 'Taille d image',
  frameRateLabel: 'Fréquence d images',
  codecLabel: 'Codec vidéo',
  durationLabel: 'Durée du programme',
  minutesUnit: 'minutes',
  videoBitrateLabel: 'Débit vidéo',
  audioBitrateLabel: 'Débit audio',
  overheadLabel: 'Surcharge du conteneur',
  selectedOutputTitle: 'Export sélectionné',
  estimatedFileSizeLabel: 'Taille de fichier estimée',
  totalDataRateLabel: 'Débit de données total',
  videoDataLabel: 'Flux vidéo',
  audioDataLabel: 'Flux audio',
  containerOverheadLabel: 'Surcharge du conteneur',
  dataReelLabel: 'Un rouleau de données montrant l export sélectionné au fil du temps',
  comparisonTitle: 'Points de départ par codec',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Débit vidéo suggéré',
  estimatedSizeColumn: 'Taille estimée',
  planningNote: 'Les lignes de codecs sont des heuristiques de planification et non une garantie de qualité identique. La complexité VBR et l encodeur choisi modifient le résultat final.',
  statusReady: 'Prêt à estimer',
  statusCheck: 'Vérifiez les hypothèses soulignées',
  warningDuration: 'Ajoutez une durée supérieure à zéro pour estimer le fichier.',
  warningVideoBitrate: 'Le débit vidéo est inhabituellement bas pour cette taille d image et cette fréquence. Vérifiez la compression avant livraison.',
  warningAudioBitrate: 'Le débit audio est supérieur aux valeurs courantes. Confirmez que cette taille supplémentaire est voulue.',
  warningOverhead: 'La surcharge du conteneur est élevée. Vérifiez le multiplexeur et les métadonnées avant de réserver du stockage.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Questions sur le planificateur d export vidéo',
  bibliographyTitle: 'Sources',
};

const faq = [
  { question: 'Comment la taille estimée du fichier vidéo est-elle calculée ?', answer: 'Le planificateur additionne le débit vidéo et le débit audio, multiplie le débit combiné par la durée, convertit les bits en octets et applique le pourcentage de surcharge du conteneur.' },
  { question: 'Pourquoi le tableau des codecs affiche-t-il différents points de départ ?', answer: 'H.264, H.265 et AV1 atteignent des efficacités de compression différentes sur le même matériel. Le tableau utilise des facteurs simples pour comparer les scénarios de stockage.' },
  { question: 'Dois-je utiliser le débit suggéré comme une exigence stricte ?', answer: 'Non. Traitez-le comme un premier chiffre à tester avec vos rushs, la plateforme de destination et votre encodeur.' },
  { question: 'Ce planificateur prédit-il la taille après envoi sur une plateforme ?', answer: 'Il estime le fichier avant le transcodage de la plateforme. Les services d envoi peuvent réencoder ou rejeter certains réglages.' },
];

const howTo = [
  { name: 'Choisir le format de livraison', text: 'Sélectionnez une taille d image et une fréquence d images qui correspondent à la séquence exportée.' },
  { name: 'Choisir le codec et les débits', text: 'Sélectionnez le codec puis saisissez le débit vidéo et audio issus du préréglage d export.' },
  { name: 'Régler durée et surcharge', text: 'Indiquez la durée du programme en minutes et laissez une marge pour le conteneur et les métadonnées.' },
  { name: 'Comparer et réserver du stockage', text: 'Lisez la taille de fichier sélectionnée et réservez l espace pour l export et les dérivés.' },
];

const seo = [
  { type: 'summary' as const, title: 'Planifiez le stockage avant d exporter vos vidéos', items: ['Estimez la taille de fichier selon la durée et les débits', 'Comparez les scénarios H.264, H.265 et AV1', 'Séparez la surcharge vidéo, audio et conteneur', 'Gardez le re-codage plateforme hors du calcul'] },
  { type: 'title' as const, text: 'Ce que révèle l estimation d export', level: 2 as const },
  { type: 'paragraph' as const, html: 'Un export vidéo est un flux de bits temporisé. Le planificateur convertit le débit vidéo (Mbps) et audio (kbps) en un débit combiné, le multiplie par la durée du programme et convertit le tout en octets.' },
  { type: 'title' as const, text: 'Comment choisir un débit de départ', level: 2 as const },
  { type: 'paragraph' as const, html: 'Commencez par la spécification de livraison lorsque elle existe. Testez toujours un extrait court représentatif sur les scènes rapides ou à fort grain avant de lancer le rendu complet.' },
  { type: 'list' as const, items: ['Faites correspondre la fréquence d images à la séquence montée.', 'Distinguez Mbps (mégabits par seconde) et kbps (kilobits par seconde).', 'Réservez de l espace pour les médias source et les rendus intermédiaires.', 'Validez un court échantillon à la taille de lecture prévue.'] },
  { type: 'title' as const, text: 'Lire la comparaison des codecs', level: 2 as const },
  { type: 'paragraph' as const, html: 'Le tableau des codecs est une vue de planification du stockage. Les résultats réels dépendent de l encodeur, du mode de contrôle du débit et de la complexité de la scène.' },
  { type: 'tip' as const, title: 'Limite de l estimation', html: 'Le résultat ne certifie pas la qualité visuelle ni la conformité de la plateforme. Validez un échantillon avant la livraison.' },
];

const title = 'Planificateur de débit et taille de fichier d export vidéo';
const description = 'Estimez la taille d export vidéo selon la durée et le débit de données, puis comparez les points de départ pour H.264, H.265 et AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'planificateur-debit-taille-fichier-export-video', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'fr' }),
};

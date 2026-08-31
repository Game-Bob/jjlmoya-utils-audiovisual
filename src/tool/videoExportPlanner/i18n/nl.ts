import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Stel beeld, geluid en duur in. De dataspoel hieronder zet die keuzes om in een export-schatting voor je encoder.',
  presetLabel: 'Start met een afleverpreset',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Social 1080p 60',
  presetMaster: '4K Master aflevering',
  sourceSettingsTitle: 'Exportinstellingen',
  resolutionLabel: 'Framegrootte',
  frameRateLabel: 'Framerate',
  codecLabel: 'Videocodec',
  durationLabel: 'Programmaduur',
  minutesUnit: 'minuten',
  videoBitrateLabel: 'Videobitrate',
  audioBitrateLabel: 'Audiobitrate',
  overheadLabel: 'Container-overhead',
  selectedOutputTitle: 'Geselecteerde export',
  estimatedFileSizeLabel: 'Geschatte bestandsgrootte',
  totalDataRateLabel: 'Totale datasnelheid',
  videoDataLabel: 'Videostream',
  audioDataLabel: 'Audiostream',
  containerOverheadLabel: 'Container-overhead',
  dataReelLabel: 'Een dataspoel die de geselecteerde export in de tijd toont',
  comparisonTitle: 'Codec-startpunten',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Aanbevolen videosnelheid',
  estimatedSizeColumn: 'Geschatte grootte',
  planningNote: 'De codec-rijen zijn planningsrichtlijnen en geen garantie op gelijke kwaliteit.',
  statusReady: 'Klaar om te schatten',
  statusCheck: 'Controleer de gemarkeerde aannames',
  warningDuration: 'Voeg een duur groter dan nul toe om het bestand te schatten.',
  warningVideoBitrate: 'De videobitrate is ongebruikelijk laag voor deze resolutie. Controleer op zichtbare compressie.',
  warningAudioBitrate: 'De audiobitrate is hoger dan gebruikelijk. Bevestig of de extra ruimte gewenst is.',
  warningOverhead: 'De container-overhead is hoog. Controleer muxer en metadata voor opslagreservering.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Vragen over de video-export-planner',
  bibliographyTitle: 'Bronnen',
};

const faq = [
  { question: 'Hoe wordt de geschatte videobestandsgrootte berekend?', answer: 'De planner telt videobitrate en audiobitrate bij elkaar op, vermenigvuldigt met de duur en past het container-overheadpercentage toe.' },
  { question: 'Waarom toont de codectabel verschillende startpunten?', answer: 'H.264, H.265 en AV1 behalen verschillende compressie-efficiënties op hetzelfde materiaal.' },
  { question: 'Moet ik de voorgestelde bitrate als een vereiste gebruiken?', answer: 'Nee. Gebruik het als een eerste testwaarde voor je beeldmateriaal en encoder.' },
  { question: 'Voorspelt deze planner de grootte na uploaden naar een platform?', answer: 'Het schat het bestand voordat het platform het hercodeert.' },
];

const howTo = [
  { name: 'Afleverformaat kiezen', text: 'Kies een framegrootte en framerate die overeenkomen met je montage.' },
  { name: 'Codec en bitrates kiezen', text: 'Selecteer de geplande codec en voer de video- en audiobitrate in.' },
  { name: 'Duur en overhead instellen', text: 'Voer de duur in minuten in en houd rekening met container-overhead.' },
  { name: 'Vergelijken en opslag reserveren', text: 'Lees de geschatte grootte af en reserveer voldoende opslagruimte.' },
];

const seo = [
  { type: 'summary' as const, title: 'Plan opslagruimte voor het exporteren van video', items: ['Schat bestandsgrootte op basis van duur en bitrates', 'Vergelijk scenario s voor H.264, H.265 en AV1', 'Scheid video, audio en container-overhead', 'Houd platformrecompressie buiten de berekening'] },
  { type: 'title' as const, text: 'Wat de exportschatting vertelt', level: 2 as const },
  { type: 'paragraph' as const, html: 'Een video-export is een getimede bitstream. De planner combineert de videobitrate en audiobitrate en berekent de totale bestandsomvang in bytes.' },
  { type: 'title' as const, text: 'Hoe je een startbitrate kiest', level: 2 as const },
  { type: 'paragraph' as const, html: 'Begin bij de afleverspecificaties van het platform. Test altijd een kort fragment met veel beweging voor de definitieve export.' },
  { type: 'list' as const, items: ['Stem de framerate af op de originele sequentie.', 'Maak onderscheid tussen Mbps en kbps.', 'Reserveer extra ruimte voor bronmedia en tussenbestanden.', 'Controleer een kort voorbeeld op ware grootte.'] },
  { type: 'title' as const, text: 'De codectabel lezen', level: 2 as const },
  { type: 'paragraph' as const, html: 'De codectabel helpt bij de opslagplanning. De werkelijke resultaten zijn afhankelijk van de complexiteit van de scène.' },
  { type: 'tip' as const, title: 'Grens van de schatting', html: 'De schatting garandeert geen uiteindelijke beeldkwaliteit. Test een representatief fragment voor oplevering.' },
];

const title = 'Video Export Bitrate en Bestandsgrootte Planner';
const description = 'Schat de grootte van videobestanden op basis van duur en bitrate en vergelijk startpunten voor H.264, H.265 en AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'video-export-bitrate-bestandsgrootte-planner', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'nl' }),
};

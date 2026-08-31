import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Ställ in bild, ljud och varaktighet. Datarullen nedan omvandlar dessa val till en exportuppskattning för din omkodare.',
  presetLabel: 'Börja med en leveransförinställning',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Socialt 1080p 60',
  presetMaster: '4K Masterleverans',
  sourceSettingsTitle: 'Exportinställningar',
  resolutionLabel: 'Bildstorlek',
  frameRateLabel: 'Bildfrekvens',
  codecLabel: 'Videocodec',
  durationLabel: 'Programlängd',
  minutesUnit: 'minuter',
  videoBitrateLabel: 'Bithastighet för video',
  audioBitrateLabel: 'Bithastighet för ljud',
  overheadLabel: 'Container-overhead',
  selectedOutputTitle: 'Vald export',
  estimatedFileSizeLabel: 'Beräknad filstorlek',
  totalDataRateLabel: 'Total datahastighet',
  videoDataLabel: 'Videoström',
  audioDataLabel: 'Ljudström',
  containerOverheadLabel: 'Container-overhead',
  dataReelLabel: 'En datarulle som visar den valda exporten över tid',
  comparisonTitle: 'Startpunkter för codec',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Föreslagen videohastighet',
  estimatedSizeColumn: 'Beräknad storlek',
  planningNote: 'Codec-raderna är planeringstips och inte en garanti för identisk kvalitet.',
  statusReady: 'Klar att beräkna',
  statusCheck: 'Kontrollera de markerade antagandena',
  warningDuration: 'Ange en varaktighet större än noll för att beräkna filen.',
  warningVideoBitrate: 'Videobithastigheten är ovanligt låg för denna upplösning. Kontrollera komprimeringen.',
  warningAudioBitrate: 'Ljudbithastigheten ligger över det vanliga intervallet. Bekräfta att extra utrymme är avsett.',
  warningOverhead: 'Container-overhead är hög. Verifiera metadata innan du reserverar lagring.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Frågor om planering av videoexport',
  bibliographyTitle: 'Källor',
};

const faq = [
  { question: 'Hur beräknas den beräknade videofilstorleken?', answer: 'Planeraren adderar videobithastighet och ljudbithastighet, multiplicerar med varaktigheten och lägger till container-overhead.' },
  { question: 'Varför visar codec-tabellen olika startpunkter?', answer: 'H.264, H.265 och AV1 uppnår olika komprimeringsingseffektivitet på samma material.' },
  { question: 'Bör jag använda den föreslagna bithastigheten som ett krav?', answer: 'Nej. Använd den som ett första testvärde för ditt videomaterial och din kodare.' },
  { question: 'Förutspår planeraren storleken efter uppladdning till en plattform?', answer: 'Den uppskattar filstorleken innan plattformen omkodar videon.' },
];

const howTo = [
  { name: 'Välj leveransformat', text: 'Välj en bildstorlek och bildfrekvens som matchar din tidslinje.' },
  { name: 'Välj codec och bithastighet', text: 'Välj codec och ange bithastighet för video och ljud.' },
  { name: 'Ställ in varaktighet och overhead', text: 'Ange varaktigheten i minuter och avsätt utrymme för container-overhead.' },
  { name: 'Jämför och reservera lagring', text: 'Läs av den beräknade storleken och reservera tillräckligt med utrymme.' },
];

const seo = [
  { type: 'summary' as const, title: 'Planera lagring innan du exporterar video', items: ['Beräkna filstorlek från varaktighet och bithastighet', 'Jämför scenarier för H.264, H.265 och AV1', 'Separera video, ljud och container-overhead', 'Exkludera plattformskomprimering från beräkningen'] },
  { type: 'title' as const, text: 'Vad exportberäkningen visar', level: 2 as const },
  { type: 'paragraph' as const, html: 'En videoexport är en tidsbestämd dataströmssekvens. Planeraren slår ihop datahastigheterna och räknar om till total filstorlek i byte.' },
  { type: 'title' as const, text: 'Hur du väljer en startbithastighet', level: 2 as const },
  { type: 'paragraph' as const, html: 'Utgå från plattformens specifikationer. Testa alltid ett kort avsnitt med mycket rörelse före slutlig rendering.' },
  { type: 'list' as const, items: ['Matcha bildfrekvensen mot originalsekvensen.', 'Skilj på Mbps och kbps.', 'Reservera extra utrymme för källfiler och mellanlagring.', 'Kontrollera ett prov i full uppspelningsstorlek.'] },
  { type: 'title' as const, text: 'Läsa codec-jämförelsen', level: 2 as const },
  { type: 'paragraph' as const, html: 'Codec-tabellen underlättar lagringsplaneringen. Det slutgiltiga resultatet beror på scenens komplexitet.' },
  { type: 'tip' as const, title: 'Begränsning av beräkningen', html: 'Uppskattningen garanterar inte slutlig bildkvalitet. Testa ett urval före leverans.' },
];

const title = 'Planerare för bithastighet och filstorlek vid videoexport';
const description = 'Beräkna videofilens storlek baserat på varaktighet och bithastighet och jämför startpunkter för H.264, H.265 och AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'videoexport-bitrate-filstorlek-planerare', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'sv' }),
};

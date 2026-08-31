import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Imposta immagine, audio e durata. La bobina dati sottostante trasforma queste scelte in una stima di esportazione per il tuo codificatore.',
  presetLabel: 'Inizia con un profilo di consegna',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Social 1080p 60',
  presetMaster: 'Master 4K',
  sourceSettingsTitle: 'Impostazioni di esportazione',
  resolutionLabel: 'Dimensione fotogramma',
  frameRateLabel: 'Frequenza fotogrammi',
  codecLabel: 'Codec video',
  durationLabel: 'Durata del programma',
  minutesUnit: 'minuti',
  videoBitrateLabel: 'Bitrate video',
  audioBitrateLabel: 'Bitrate audio',
  overheadLabel: 'Overhead del contenitore',
  selectedOutputTitle: 'Esportazione selezionata',
  estimatedFileSizeLabel: 'Dimensione file stimata',
  totalDataRateLabel: 'Velocità dati totale',
  videoDataLabel: 'Flusso video',
  audioDataLabel: 'Flusso audio',
  containerOverheadLabel: 'Overhead del contenitore',
  dataReelLabel: 'Una bobina dati che mostra l esportazione selezionata nel tempo',
  comparisonTitle: 'Punti di partenza per codec',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Velocità video suggerita',
  estimatedSizeColumn: 'Dimensione stimata',
  planningNote: 'Le righe dei codec sono stime orientative per la pianificazione, non una garanzia di qualità identica.',
  statusReady: 'Pronto per la stima',
  statusCheck: 'Verifica le ipotesi evidenziate',
  warningDuration: 'Aggiungi una durata superiore a zero per stimare il file.',
  warningVideoBitrate: 'Il bitrate video è insolitamente basso per questa risoluzione. Controlla la compressione visibile.',
  warningAudioBitrate: 'Il bitrate audio supera l intervallo comune. Conferma che lo spazio extra sia voluto.',
  warningOverhead: 'L overhead del contenitore è elevato. Verifica i metadati prima di riservare spazio.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Domande sul pianificatore di esportazione video',
  bibliographyTitle: 'Fonti',
};

const faq = [
  { question: 'Come viene calcolata la dimensione stimata del file video?', answer: 'Il pianificatore somma il bitrate video e quello audio, moltiplica la velocità combinata per la durata e applica la percentuale di overhead.' },
  { question: 'Perché la tabella dei codec mostra punti di partenza diversi?', answer: 'H.264, H.265 e AV1 raggiungono efficienze di compressione differenti sullo stesso materiale.' },
  { question: 'Devo usare il bitrate suggerito come requisito rigido?', answer: 'No. Utilizzalo come primo valore di riferimento per testare i tuoi filmati prima dell esportazione finale.' },
  { question: 'Questo pianificatore prevede la dimensione dopo l caricamento online?', answer: 'Stima il file prima della ricodifica della piattaforma. I servizi online possono ricomprimere il video.' },
];

const howTo = [
  { name: 'Scegliere il formato di consegna', text: 'Seleziona dimensione e frequenza fotogrammi corrispondenti alla sequenza montata.' },
  { name: 'Scegliere codec e bitrate', text: 'Seleziona il codec desiderato e inserisci il bitrate video e audio.' },
  { name: 'Impostare durata e overhead', text: 'Inserisci la durata in minuti e lascia un margine di overhead per il contenitore.' },
  { name: 'Confrontare e riservare spazio', text: 'Leggi la dimensione calcolata e riserva spazio per l esportazione e i file derivati.' },
];

const seo = [
  { type: 'summary' as const, title: 'Pianifica lo spazio prima di esportare il video', items: ['Stima la dimensione del file in base a durata e bitrate', 'Confronta scenari H.264, H.265 e AV1', 'Separa flusso video, audio e overhead', 'Escludi la ricodifica della piattaforma dalla stima'] },
  { type: 'title' as const, text: 'Cosa indica la stima di esportazione', level: 2 as const },
  { type: 'paragraph' as const, html: 'L esportazione video è un flusso di bit temporizzato. Il pianificatore somma i bitrate di video e audio, li moltiplica per la durata e calcola la dimensione totale in byte.' },
  { type: 'title' as const, text: 'Come scegliere un bitrate iniziale', level: 2 as const },
  { type: 'paragraph' as const, html: 'Basati sulle specifiche della piattaforma di destinazione. Esegui sempre un breve test prima di esportare l intero progetto.' },
  { type: 'list' as const, items: ['Allinea il frame rate all originale.', 'Distingui tra Mbps e kbps.', 'Riserva spazio per file sorgente e render temporanei.', 'Verifica un campione a risoluzione reale.'] },
  { type: 'title' as const, text: 'Leggere il confronto tra codec', level: 2 as const },
  { type: 'paragraph' as const, html: 'La tabella confronta scenari di archiviazione. I risultati effettivi dipendono dal codificatore e dalla complessità della scena.' },
  { type: 'tip' as const, title: 'Limite della stima', html: 'La stima non garantisce la qualità visiva finale. Valuta sempre un campione prima della consegna.' },
];

const title = 'Pianificatore bitrate e dimensione file esportazione video';
const description = 'Calcola la dimensione stimata dei file video in base a durata e bitrate e confronta i codec H.264, H.265 e AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'pianificatore-bitrate-dimensione-file-esportazione-video', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'it' }),
};

import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Stelle Bild, Ton und Dauer ein. Die Datenrolle unten verwandelt diese Angaben in eine Export-Schätzung für deinen Encoder.',
  presetLabel: 'Mit einer Übergabe-Voreinstellung beginnen',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Social 1080p 60',
  presetMaster: '4K Master-Übergabe',
  sourceSettingsTitle: 'Export-Einstellungen',
  resolutionLabel: 'Bildgröße',
  frameRateLabel: 'Bildrate',
  codecLabel: 'Video-Codec',
  durationLabel: 'Programmdauer',
  minutesUnit: 'Minuten',
  videoBitrateLabel: 'Video-Bitrate',
  audioBitrateLabel: 'Audio-Bitrate',
  overheadLabel: 'Container-Overhead',
  selectedOutputTitle: 'Ausgewählter Export',
  estimatedFileSizeLabel: 'Geschätzte Dateigröße',
  totalDataRateLabel: 'Gesamte Datenrate',
  videoDataLabel: 'Videostream',
  audioDataLabel: 'Audiostream',
  containerOverheadLabel: 'Container-Overhead',
  dataReelLabel: 'Eine Datenrolle zur Anzeige des ausgewählten Exports über die Zeit',
  comparisonTitle: 'Codec-Startpunkte',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Empfohlene Videorate',
  estimatedSizeColumn: 'Geschätzte Größe',
  planningNote: 'Die Codec-Zeilen sind Planungswerte und keine Garantie für identische Qualität. VBR-Komplexität und Encoder bestimmen das Endergebnis.',
  statusReady: 'Bereit zur Schätzung',
  statusCheck: 'Prüfe die hervorgehobenen Annahmen',
  warningDuration: 'Gib eine Dauer größer als Null ein, um die Datei zu schätzen.',
  warningVideoBitrate: 'Die Video-Bitrate ist für diese Bildgröße ungewöhnlich niedrig. Prüfe auf sichtbare Kompression.',
  warningAudioBitrate: 'Die Audio-Bitrate liegt über dem üblichen Bereich. Bestätige, ob der Platz beabsichtigt ist.',
  warningOverhead: 'Der Container-Overhead ist hoch. Überprüfe Muxer und Metadaten vor der Speicherreservierung.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Fragen zum Video-Export-Planer',
  bibliographyTitle: 'Quellen',
};

const faq = [
  { question: 'Wie wird die geschätzte Videodateigröße berechnet?', answer: 'Der Planer addiert Video- und Audio-Bitrate, multipliziert die kombinierte Datenrate mit der Dauer, rechnet Bits in Bytes um und wendet den Container-Overhead-Prozentsatz an.' },
  { question: 'Warum zeigt die Codec-Tabelle unterschiedliche Startpunkte?', answer: 'H.264, H.265 und AV1 erreichen unterschiedliche Kompressionseffizienzen bei gleichem Quellmaterial. Die Tabelle nutzt einfache Planungsfaktoren zum Vergleich.' },
  { question: 'Sollte ich die vorgeschlagene Bitrate als Anforderung nutzen?', answer: 'Nein. Nutze sie als ersten Testwert für dein Material, die Zielplattform und deinen Encoder. Feines Korn und schnelle Bewegung benötigen oft mehr Daten.' },
  { question: 'Sagt dieser Planer die Dateigröße nach dem Plattform-Upload voraus?', answer: 'Er schätzt die Datei vor der Re-Kodierung der Plattform. Upload-Dienste können Einstellungen anpassen oder komprimieren.' },
];

const howTo = [
  { name: 'Übergabeformat wählen', text: 'Wähle Bildgröße und Bildrate entsprechend deiner Schnitt-Sequenz aus.' },
  { name: 'Codec und Raten wählen', text: 'Wähle den geplanten Codec und gib Video- sowie Audio-Bitrate laut Vorgabe ein.' },
  { name: 'Dauer und Overhead einstellen', text: 'Gib die Programmdauer in Minuten ein und plane einen Overhead-Puffer für Container und Metadaten ein.' },
  { name: 'Vergleichen und Speicher reservieren', text: 'Lies die berechnete Dateigröße ab und reserviere Speicherplatz für Export und Derivate.' },
];

const seo = [
  { type: 'summary' as const, title: 'Speicherplatz vor dem Videoexport planen', items: ['Schätze Dateigröße aus Dauer und kombinierten Datenraten', 'Vergleiche Szenarien für H.264, H.265 und AV1', 'Trenne Video, Audio und Container-Overhead', 'Halte Plattform-Kompression außerhalb der Berechnung'] },
  { type: 'title' as const, text: 'Was die Export-Schätzung aussagt', level: 2 as const },
  { type: 'paragraph' as const, html: 'Ein Video-Export ist ein zeitgesteuerter Bitstream. Der Planer rechnet Video-Bitrate (Mbps) und Audio-Bitrate (kbps) zusammen, multipliziert sie mit der Programmdauer und wandelt das Ergebnis in Bytes um.' },
  { type: 'title' as const, text: 'So wählst du eine Start-Bitrate', level: 2 as const },
  { type: 'paragraph' as const, html: 'Starte mit der Vorgabe der Zielplattform. Teste stets ein kurzes Testmuster mit Bewegung und Feinstruktur, bevor du den gesamten Export startest.' },
  { type: 'list' as const, items: ['Passe die Export-Bildrate an die Originalsequenz an.', 'Unterscheide Mbps (Megabit pro Sekunde) und kbps (Kilobit pro Sekunde).', 'Reserviere zusätzlichen Speicherplatz für Quellmedien und Zwischenschritte.', 'Prüfe ein kurzes Testmuster in voller Wiedergabegröße.'] },
  { type: 'title' as const, text: 'Die Codec-Vergleichstabelle lesen', level: 2 as const },
  { type: 'paragraph' as const, html: 'Die Codec-Tabelle dient der Speicherplanung. Tatsächliche Ergebnisse hängen vom Encoder, der Datenratenkontrolle und der Szenenkomplexität ab.' },
  { type: 'tip' as const, title: 'Grenzen der Schätzung', html: 'Das Ergebnis garantiert keine Bildqualität oder Plattform-Akzeptanz. Teste vorher ein repräsentatives Muster.' },
];

const title = 'Video Export Bitrate und Dateigröße Planer';
const description = 'Schätze die Video-Exportgröße nach Dauer und Datenrate und vergleiche Codec-Startpunkte für H.264, H.265 und AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'video-export-bitrate-dateigroesse-planer', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'de' }),
};

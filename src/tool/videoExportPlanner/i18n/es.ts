import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Ajusta la imagen, el sonido y la duracion. El carrete inferior convierte esas elecciones en una estimacion de exportacion lista para tu codificador.',
  presetLabel: 'Comenzar con un ajuste preestablecido de entrega',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Social 1080p 60',
  presetMaster: 'Entrega 4K master',
  sourceSettingsTitle: 'Ajustes de exportacion',
  resolutionLabel: 'Tamano de fotograma',
  frameRateLabel: 'Tasa de fotogramas',
  codecLabel: 'Codec de video',
  durationLabel: 'Duracion del programa',
  minutesUnit: 'minutos',
  videoBitrateLabel: 'Bitrate de video',
  audioBitrateLabel: 'Bitrate de audio',
  overheadLabel: 'Sobrecarga del contenedor',
  selectedOutputTitle: 'Exportacion seleccionada',
  estimatedFileSizeLabel: 'Tamano de archivo estimado',
  totalDataRateLabel: 'Tasa total de datos',
  videoDataLabel: 'Flujo de video',
  audioDataLabel: 'Flujo de audio',
  containerOverheadLabel: 'Sobrecarga del contenedor',
  dataReelLabel: 'Un carrete de datos que muestra la exportacion seleccionada a lo largo del tiempo',
  comparisonTitle: 'Puntos de partida por codec',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Tasa de video sugerida',
  estimatedSizeColumn: 'Tamano estimado',
  planningNote: 'Las filas de codecs son heuristicas de planificacion, no una promesa de calidad idéntica. La complejidad VBR, la recompresion de la plataforma y el codificador elegido pueden cambiar el resultado final.',
  statusReady: 'Listo para estimar',
  statusCheck: 'Revisa los supuestos destacados',
  warningDuration: 'Anade una duracion mayor que cero para estimar el archivo.',
  warningVideoBitrate: 'El bitrate de video es inusualmente bajo para este tamano y tasa de fotogramas. Revisa si hay compresion visible antes de la entrega.',
  warningAudioBitrate: 'El bitrate de audio está por encima del rango habitual de entrega. Confirma que el tamano extra sea intencional.',
  warningOverhead: 'La sobrecarga del contenedor es alta para una estimacion de planificacion. Verifica el multiplexor y los metadatos antes de reservar almacenamiento.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Preguntas sobre el planificador de exportacion de video',
  bibliographyTitle: 'Fuentes',
};

const faq = [
  { question: '¿Cómo se calcula el tamano estimado del archivo de video?', answer: 'El planificador suma el bitrate de video y el de audio, multiplica la velocidad de datos combinada por la duracion, convierte bits a bytes y luego aplica el porcentaje de sobrecarga del contenedor. El resultado es una estimacion de almacenamiento, no una prediccion del archivo codificado exacto.' },
  { question: '¿Por qué la tabla de codecs muestra diferentes puntos de partida?', answer: 'H.264, H.265 y AV1 alcanzan distintas eficiencias de compresion en el mismo material. La tabla utiliza factores simples de planificacion para comparar escenarios de almacenamiento; no pretende que las filas ofrezcan una calidad idéntica.' },
  { question: '¿Debo usar el bitrate sugerido como un requisito obligatorio?', answer: 'No. Trátalo como un primer numero para probar con tu metraje, plataforma de entrega y codificador. Texturas finas, grano, movimiento rapido, HDR y rotulos pueden necesitar mas datos, mientras que escenas simples requieren menos.' },
  { question: '¿Predice este planificador el tamano final al subirlo a una plataforma?', answer: 'Estima el archivo antes de que la plataforma lo transcodifique. Los servicios de subida pueden rechazar ajustes, recomprimir el archivo o crear varias derivadas, por lo que conviene conservar la exportacion original.' },
];

const howTo = [
  { name: 'Elegir el formato de entrega', text: 'Selecciona un tamano de fotograma y una tasa de cuadros que coincidan con la secuencia exportada. Evita cambiar la tasa solo para reducir la estimacion.' },
  { name: 'Elegir codec y tasas', text: 'Selecciona el codec que vas a codificar e introduce el bitrate de video y audio desde el ajuste preestablecido o la especificacion de entrega.' },
  { name: 'Establecer duracion y sobrecarga', text: 'Introduce la duracion del programa en minutos y deja un margen de sobrecarga para el contenedor, metadatos y empaquetado.' },
  { name: 'Comparar y reservar almacenamiento', text: 'Lee el tamano de archivo seleccionado y los puntos de partida por codec, luego reserva espacio para la exportacion y los archivos derivados.' },
];

const seo = [
  { type: 'summary' as const, title: 'Planifica el almacenamiento antes de exportar video', items: ['Estima el tamano de archivo a partir de la duracion y las tasas combinadas', 'Compara escenarios de planificacion para H.264, H.265 y AV1', 'Separa sobrecarga de video, audio y contenedor', 'Mantén la recompresion de plataforma fuera de la estimacion'] },
  { type: 'title' as const, text: 'Qué indica la estimacion de exportacion', level: 2 as const },
  { type: 'paragraph' as const, html: 'Una exportacion de video es un flujo cronometrado de bits. El planificador convierte el bitrate de video en megabits por segundo y el de audio en kilobits por segundo a una tasa combinada, la multiplica por la duracion del programa y pasa el resultado a bytes. El campo de sobrecarga anade un margen practico para el contenedor y sus metadatos.' },
  { type: 'title' as const, text: 'Cómo elegir un bitrate inicial', level: 2 as const },
  { type: 'paragraph' as const, html: 'Parte de la especificacion de entrega cuando exista. Por ejemplo, YouTube publica rangos de referencia por tamano y tasa de fotogramas, mientras que las aplicaciones de exportacion ofrecen opciones CBR y VBR para distintos flujos de trabajo. Inspecciona siempre el movimiento y el grano en una muestra corta antes de renderizar todo el proyecto.' },
  { type: 'list' as const, items: ['Haz coincidir la tasa de fotogramas con la secuencia editada salvo indicacion contraria.', 'Diferencia las unidades: Mbps son megabits por segundo y kbps son kilobits por segundo.', 'Reserva espacio adicional para medios de origen, renders intermedios y derivados.', 'Compara una muestra corta al tamano de reproduccion previsto antes de la exportacion final.'] },
  { type: 'title' as const, text: 'Cómo leer la comparativa de codecs', level: 2 as const },
  { type: 'paragraph' as const, html: 'La tabla de codecs es una vista de planificacion de almacenamiento, no una clasificacion de calidad. Sus filas inferiores representan un objetivo mas ligero bajo un supuesto de eficiencia simple. Los resultados reales dependen del codificador, el modo de control de tasa, la complejidad de la escena y el grano.' },
  { type: 'tip' as const, title: 'Límite de la estimacion', html: 'El resultado no puede certificar la compatibilidad de reproduccion, la calidad visual ni la aceptacion de la plataforma. Valida una muestra representativa antes de la entrega final.' },
];

const title = 'Planificador de bitrate y tamano de archivo de exportacion de video';
const description = 'Estima el tamano de exportacion de video segun la duracion y la tasa de datos, y compara puntos de partida para flujos H.264, H.265 y AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'planificador-bitrate-tamano-archivo-exportacion-video', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'es' }),
};

import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: 'Ajuste a imagem, o áudio e a duração. O carretel de dados abaixo transforma essas escolhas numa estimativa de exportação para o seu codificador.',
  presetLabel: 'Começar com uma predefinição de entrega',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'Redes Sociais 1080p 60',
  presetMaster: 'Entrega Master 4K',
  sourceSettingsTitle: 'Definições de exportação',
  resolutionLabel: 'Tamanho do fotograma',
  frameRateLabel: 'Taxa de fotogramas',
  codecLabel: 'Codec de vídeo',
  durationLabel: 'Duração do programa',
  minutesUnit: 'minutos',
  videoBitrateLabel: 'Bitrate de vídeo',
  audioBitrateLabel: 'Bitrate de áudio',
  overheadLabel: 'Sobrecarga do contentor',
  selectedOutputTitle: 'Exportação selecionada',
  estimatedFileSizeLabel: 'Tamanho de ficheiro estimado',
  totalDataRateLabel: 'Taxa total de dados',
  videoDataLabel: 'Fluxo de vídeo',
  audioDataLabel: 'Fluxo de áudio',
  containerOverheadLabel: 'Sobrecarga do contentor',
  dataReelLabel: 'Um carretel de dados que mostra a exportação selecionada ao longo do tempo',
  comparisonTitle: 'Pontos de partida por codec',
  codecColumn: 'Codec',
  suggestedVideoColumn: 'Taxa de vídeo sugerida',
  estimatedSizeColumn: 'Tamanho estimado',
  planningNote: 'As linhas de codecs são heurísticas de planeamento e não uma garantia de qualidade idêntica.',
  statusReady: 'Pronto para estimar',
  statusCheck: 'Verifique as suposições destacadas',
  warningDuration: 'Adicione uma duração superior a zero para estimar o ficheiro.',
  warningVideoBitrate: 'O bitrate de vídeo é invulgarmente baixo para esta resolução. Verifique a compressão.',
  warningAudioBitrate: 'O bitrate de áudio está acima do intervalo comum. Confirme se o espaço extra é pretendido.',
  warningOverhead: 'A sobrecarga do contentor é elevada. Verifique os metadados antes de reservar espaço.',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: 'Perguntas sobre o planeador de exportação de vídeo',
  bibliographyTitle: 'Fontes',
};

const faq = [
  { question: 'Como é calculado o tamanho estimado do ficheiro de vídeo?', answer: 'O planeador soma o bitrate de vídeo e de áudio, multiplica a taxa de dados combinada pela duração e aplica a percentagem de sobrecarga do contentor.' },
  { question: 'Por que razão a tabela de codecs mostra pontos de partida diferentes?', answer: 'H.264, H.265 e AV1 alcançam eficiências de compressão distintas no mesmo material.' },
  { question: 'Devo utilizar o bitrate sugerido como requisito obrigatório?', answer: 'Não. Utilize-o como um valor inicial de teste com o seu material e codificador.' },
  { question: 'Este planeador prevê o tamanho após o envio para uma plataforma?', answer: 'Estima o ficheiro antes da transcodificação da plataforma.' },
];

const howTo = [
  { name: 'Escolher o formato de entrega', text: 'Selecione o tamanho do fotograma e a taxa de quadros correspondentes ao projeto.' },
  { name: 'Escolher o codec e bitrates', text: 'Selecione o codec pretendido e introduza os bitrates de vídeo e áudio.' },
  { name: 'Definir duração e sobrecarga', text: 'Introduza a duração em minutos e defina a margem de sobrecarga do contentor.' },
  { name: 'Comparar e reservar espaço', text: 'Consulte o tamanho estimado e reserve armazenamento para a exportação.' },
];

const seo = [
  { type: 'summary' as const, title: 'Planeie o armazenamento antes de exportar vídeo', items: ['Estime o tamanho do ficheiro pela duração e taxa de dados', 'Compare cenários para H.264, H.265 e AV1', 'Separe sobrecarga de vídeo, áudio e contentor', 'Mantenha a recompressão da plataforma fora da estimativa'] },
  { type: 'title' as const, text: 'O que indica a estimativa de exportação', level: 2 as const },
  { type: 'paragraph' as const, html: 'Uma exportação de vídeo é um fluxo de bits ao longo do tempo. O planeador calcula os dados combinados de vídeo e áudio e converte o resultado final em bytes.' },
  { type: 'title' as const, text: 'Como escolher um bitrate inicial', level: 2 as const },
  { type: 'paragraph' as const, html: 'Inicie com as especificações da plataforma de destino e teste uma amostra curta antes da exportação completa.' },
  { type: 'list' as const, items: ['Mantenha a taxa de fotogramas original.', 'Diferencie Mbps de kbps.', 'Reserve espaço adicional para ficheiros temporários.', 'Verifique uma amostra no tamanho de reprodução real.'] },
  { type: 'title' as const, text: 'Ler a comparação de codecs', level: 2 as const },
  { type: 'paragraph' as const, html: 'A tabela de codecs compara necessidades de armazenamento. Os resultados finais variam segundo a complexidade da cena.' },
  { type: 'tip' as const, title: 'Limite da estimativa', html: 'A estimativa não garante a qualidade final. Avalie uma amostra antes da entrega.' },
];

const title = 'Planeador de bitrate e tamanho de ficheiro de exportação de vídeo';
const description = 'Estime o tamanho de ficheiros de vídeo com base na duração e bitrate e compare pontos de partida para H.264, H.265 e AV1.';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'planificador-bitrate-tamanho-ficheiro-exportacao-video', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'pt' }),
};

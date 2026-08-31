import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: '设置画面、音频和时长。下方的数据卷轴将把这些选项转换为编码器所需的导出预估值。',
  presetLabel: '从交付预设开始',
  presetYoutube: 'YouTube SDR',
  presetSocial: '社交媒体 1080p 60',
  presetMaster: '4K 母版交付',
  sourceSettingsTitle: '导出设置',
  resolutionLabel: '画面尺寸',
  frameRateLabel: '帧率',
  codecLabel: '视频编码器',
  durationLabel: '节目时长',
  minutesUnit: '分钟',
  videoBitrateLabel: '视频码率',
  audioBitrateLabel: '音频码率',
  overheadLabel: '容器开销',
  selectedOutputTitle: '已选导出选项',
  estimatedFileSizeLabel: '预估文件大小',
  totalDataRateLabel: '总数据速率',
  videoDataLabel: '视频流',
  audioDataLabel: '音频流',
  containerOverheadLabel: '容器开销',
  dataReelLabel: '显示所选导出随时间变化的数据卷轴',
  comparisonTitle: '编码器起始基准',
  codecColumn: '编码器',
  suggestedVideoColumn: '建议视频速率',
  estimatedSizeColumn: '预估大小',
  planningNote: '编码器对比行仅供容量规划参考，并不保证获得完全相同的画质。',
  statusReady: '随时可进行预估',
  statusCheck: '请检查高亮显示的假设条件',
  warningDuration: '请输入大于零的时长以预估文件大小。',
  warningVideoBitrate: '对于当前画面尺寸和帧率，视频码率偏低。请在交付前检查压缩痕迹。',
  warningAudioBitrate: '音频码率高于常见交付范围。请确认额外的容量占用是否符合预期。',
  warningOverhead: '容器开销较高。在预留存储空间前，请核对封装和元数据。',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: '视频导出规划工具常见问题',
  bibliographyTitle: '来源参考',
};

const faq = [
  { question: '预估视频文件大小是如何计算的？', answer: '规划工具将视频码率与音频码率相加，乘以节目时长，换算为字节后再加上容器开销百分比。' },
  { question: '为什么编码器对比表显示不同的起始基准？', answer: 'H.264、H.265 和 AV1 对相同素材的压缩效率不同，表格使用简化的规划系数来进行存储方案对比。' },
  { question: '是否必须将建议码率作为强制要求？', answer: '不需要。请将其作为初始参考值，结合实际素材和编码器进行测试。' },
  { question: '此工具能否预测上传到平台后的文件大小？', answer: '它预估的是平台二次转码前的导出文件大小。上传服务可能会重新压缩或生成多种清晰度版本。' },
];

const howTo = [
  { name: '选择交付规格', text: '选择与编辑时间线匹配的画面尺寸和帧率。' },
  { name: '选择编码器与码率', text: '选择拟使用的编码格式，并输入导出预设或交付规范中的码率。' },
  { name: '设置时长与开销', text: '输入以分钟为单位的节目时长，并为容器和元数据预留适当开销。' },
  { name: '对比并预留存储空间', text: '查看计算得出的文件大小，为导出文件及衍生素材预留足够的存储空间。' },
];

const seo = [
  { type: 'summary' as const, title: '在视频导出前规划存储空间', items: ['根据时长和码率预估文件大小', '对比 H.264、H.265 和 AV1 的规划方案', '独立计算视频、音频与容器开销', '导出预估不含平台二次压缩'] },
  { type: 'title' as const, text: '导出预估数值的含义', level: 2 as const },
  { type: 'paragraph' as const, html: '视频导出是按时间排列的比特流。规划工具将视频与音频码率合并，计算出按字节表示的总文件大小。' },
  { type: 'title' as const, text: '如何选择初始码率', level: 2 as const },
  { type: 'paragraph' as const, html: '首先参考交付目标的推荐规范。在渲染整部影片前，务必先导出短片段测试动态和细节表现。' },
  { type: 'list' as const, items: ['保持导出帧率与原始剪辑一致。', '区分 Mbps（兆比特每秒）与 kbps（千比特每秒）。', '为源素材和中间渲染预留额外空间。', '在实际播放尺寸下检查测试片段。'] },
  { type: 'title' as const, text: '如何解读编码器对比表', level: 2 as const },
  { type: 'paragraph' as const, html: '编码器对比表旨在辅助存储规划。最终文件大小取决于画面复杂度和运动剧烈程度。' },
  { type: 'tip' as const, title: '预估的局限性', html: '计算结果无法保证最终视觉质量。正式交付前请先验证代表性片段。' },
];

const title = '视频导出码率与文件大小规划工具';
const description = '根据时长和码率预估视频导出大小，并对比 H.264、H.265 和 AV1 编码器的参考基准。';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'video-export-bitrate-file-size-planner', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'zh' }),
};

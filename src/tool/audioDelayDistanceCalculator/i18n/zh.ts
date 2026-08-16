import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-distance-calculator';
const title = '基于距离与温度的音频延迟计算器';
const description = '计算扩声系统延迟塔的声学延迟时间、空气声速、相位偏移量、数字采样数及声压级衰减量。';

const ui: AudioDelayUI = {
  title: '基于距离与温度的音频延迟计算器',
  subtitle: '计算扩声系统延迟音箱的声波传播延迟时间、声学相位偏移量、采样点数及SPL衰减量。',
  unitSystemLabel: '单位制',
  unitMetric: '公制 (m, °C)',
  unitImperial: '英制 (ft, °F)',
  distanceLabel: '到延迟音箱的距离',
  temperatureLabel: '环境空气温度',
  humidityLabel: '相对湿度',
  sampleRateLabel: '调音台采样率',
  presetsTitle: '快捷场景预设',
  presetSummerFestival: '夏季户外音乐节 (35°C, 40m)',
  presetIndoorConcert: '室内音乐厅 (20°C, 25m)',
  presetTheater: '声学剧场 (22°C, 15m)',
  presetWinterOutdoor: '冬季户外活动 (5°C, 50m)',
  resultDelayMs: '延迟时间',
  resultSamples: '数字采样数',
  resultSpeed: '声速',
  resultSplLoss: 'SPL衰减量',
  phaseStatusLabel: '声学相位对齐状态',
  statusDirectZone: '直达波同步',
  statusHaasZone: '哈斯效应区',
  statusEchoZone: '可察觉回声区',
  statusExtremeZone: '严重延迟偏差',
  advicePhaseAligned: '信号在5毫秒内保持声学同步，仅需极小延迟调整。',
  adviceMinorHaas: '声音在哈斯效应区(5-35毫秒)内到达，自然声像定位保持主舞台。',
  adviceHaasDelayNeeded: '延迟塔需要精确时间偏移，以防止产生独立回声感。',
  adviceCriticalDelayNeeded: '延迟偏差较大，请应用精确采样延迟以避免梳状滤波效应。',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: '主扩声',
  delaySpeakerLabel: '延迟塔',
  audienceLabel: '观众区',
  haasZoneLegend: '哈斯区 (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: '计算音频延迟时空气温度为何重要？',
    answer: '空气中的声速直接取决于温度。在摄氏0度时声速为每秒331.3米，而在摄氏30度时会增加至约每秒349米。忽略环境温度会导致相位抵消和梳状滤波。',
  },
];

const howTo: HowToStep[] = [
  {
    name: '测量物理距离',
    text: '使用激光测距仪测量主扩声与延迟塔之间的物理距离。',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: '声学延迟对齐功能',
    items: [
      '基于温度与湿度的精准声速计算',
      '即时转换为数字调音台采样点数',
      '哈斯效应区与相位对齐评估',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({
    '@type': 'Question',
    name: item.question,
    acceptedAnswer: { '@type': 'Answer', text: item.answer },
  })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({
    '@type': 'HowToStep',
    name: step.name,
    text: step.text,
  })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<AudioDelayUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [faqSchema as any, howToSchema as any, appSchema],
};

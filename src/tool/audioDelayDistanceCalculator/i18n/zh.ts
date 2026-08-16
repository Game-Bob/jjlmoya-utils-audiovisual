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
  {
    question: '现场扩声中的哈斯效应（Haas Effect）是什么？',
    answer: '哈斯效应（优先效应）指出，当次要声信号在5到35毫秒内以相似强度到达时，人类听觉会将声源定位在最先到达的信号方向。',
  },
  {
    question: '如何将延迟时间转换为数字调音台采样点数？',
    answer: '将以秒为单位的延迟时间乘以数字调音台的采样率。例如，48 kHz采样率下的50毫秒延迟等于0.05乘以48000，正好是2400个数字采样点。',
  },
];

const howTo: HowToStep[] = [
  {
    name: '测量物理距离',
    text: '使用激光测距仪测量主扩声与延迟塔之间的物理距离。',
  },
  {
    name: '确认环境空气温度',
    text: '输入场地当前空气温度，以确定精确的声波传播速度。',
  },
  {
    name: '选择调音台采样率',
    text: '将数字调音台的工作采样率设置为44.1 kHz、48 kHz、96 kHz或192 kHz。',
  },
  {
    name: '应用计算得出的延迟量',
    text: '在音箱处理器或输出矩阵中输入以毫秒或采样点为单位的延迟时间。',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: '声学延迟对齐功能',
    items: [
      '基于温度与湿度的精准声速计算',
      '即时转换为数字调音台采样点数 (44.1k, 48k, 96k, 192k)',
      '哈斯效应区与相位对齐评估',
      '基于平方反比定律的声压级 (SPL) 衰减估算',
    ],
  },
  { type: 'title', text: '声波传播与大气热力学', level: 2 },
  {
    type: 'paragraph',
    html: '声音作为机械压力波在空气中传播。其速度主要受空气温度控制，计算公式为 <code>c = 331.3 * sqrt(1 + T / 273.15)</code>。在户外活动中，彩排与演出之间的温度变化会对声速产生显著影响。',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: '20°C下的标准声速', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: '哈斯优先效应窗口', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: '调音台采样精度', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: '声学相位对齐与梳状滤波消除', level: 3 },
  {
    type: 'paragraph',
    html: '当两个空间分离的音箱在没有精确校准的情况下播放同一信号时，声波在叠加时会产生相位差，从而导致严重的梳状滤波现象。',
  },
  {
    type: 'list',
    items: [
      '<strong>时间校准：</strong> 延迟辅助音箱，使其与主扩声波到达时间保持一致。',
      '<strong>消除梳状滤波：</strong> 消除可听频段内的相位抵消凹陷。',
      '<strong>哈斯声像定位：</strong> 将听觉声像定位自然保留在主舞台上。',
      '<strong>采样精度：</strong> 为输出矩阵提供精确的数字采样点数值。',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '直接PA校准',
        description: '物理延迟完全等于声波传播距离时间',
        icon: 'mdi:target',
        points: ['完美的相位相关性', '非常适合补声音箱', '完全无梳状滤波'],
      },
      {
        title: '哈斯偏移量校准',
        description: '物理延迟加上5至15毫秒的优先效应偏移',
        icon: 'mdi:music-clef-treble',
        points: ['舞台上的自然定位', '提高语言清晰度', '非常适合延迟塔音箱'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['扩声校准场景', '距离 (m)', '温度 (°C)', '延迟时间 (ms)', '采样点 (48kHz)'],
    rows: [
      ['剧院楼座补声', '15 m', '22 °C', '43.5 ms', '2,090 采样点'],
      ['室内音乐厅', '25 m', '20 °C', '72.8 ms', '3,494 采样点'],
      ['音乐节主舞台', '40 m', '35 °C', '113.6 ms', '5,453 采样点'],
      ['冬季户外活动', '50 m', '5 °C', '149.5 ms', '7,176 采样点'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: '为数字调音台提供亚毫秒级采样精度',
        con: '需要精确测量物理距离',
      },
      {
        pro: '充分考虑环境空气温度与相对湿度',
        con: '户外风向与风速变化需要持续监测',
      },
    ],
    proTitle: '优势',
    conTitle: '注意事项',
  },
  {
    type: 'glossary',
    items: [
      {
        term: '哈斯效应',
        definition: '人耳将声音定位在5-35毫秒内最先到达的信号方向的心理声学现象。',
      },
      {
        term: '梳状滤波',
        definition: '由于信号与延迟版本相加而在频率响应上产生的梳状叠加干涉。',
      },
      {
        term: '采样率',
        definition: '数字调音台或DSP处理器每秒处理的音频数字采样点数量。',
      },
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

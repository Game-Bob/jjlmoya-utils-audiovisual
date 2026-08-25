import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: '胶片显影温度常见问题',
  bibliographyTitle: '主要参考资料',
  chooseDocumentedCombination: '选择有官方数据记录的胶片与显影液组合',
  filmLabel: '胶片型号',
  developerLabel: '显影液',
  dilutionLabel: '稀释比例',
  temperatureLabel: '显影液温度',
  temperatureHelp: '请输入显影罐内显影液的实际测量温度。参考基准基于 20 °C 时的标准显影时间。',
  unitSwitchLabel: '温度单位',
  metricLabel: '摄氏度 °C',
  imperialLabel: '华氏度 °F',
  currentReadingLabel: '暗房测量值',
  baseTimeLabel: '20 °C 基准',
  adjustedTimeLabel: '补偿后的显影开始时间',
  temperatureGuideLabel: '温度时间补偿对照表',
  temperatureGuideHelp: '围绕实测温度提供的实用时间指南。高亮显示的行对应您当前的测量值。',
  sourceLabel: '验证组合来源',
  eiLabel: '感光度设定 EI',
  statusCool: '低温显影',
  statusSteady: '接近标准温度',
  statusWarm: '高温显影',
  warningShortTime: '显影时间低于 5 分钟会增加显影不均匀的风险。请选择有记录的工艺或仅在经过自测后延长时间。',
  warningOutOfRange: '该温度已接近推荐范围的边缘。请保持显影液温度稳定并核对厂商技术文档。',
  guideNotice: '此结果仅作为暗房冲洗的起始参考。搅拌频率、冲洗罐结构、目标反差及个人习惯均会影响最终效果。',
  resetLabel: '恢复为第一个标准组合',
  minutesLabel: '分',
  secondsLabel: '秒',
  currentBadge: '当前',
  belowFiveMinutes: '低于 5 分钟警告',
  tableTemperature: '温度',
  tableTime: '参考时间',
  tableDifference: '距 20 °C 偏差',
  currentRow: '当前',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '温度胶片显影时间补偿计算器',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: '根据实测的显影液温度，计算并补偿黑白胶片的显影冲洗时间。',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: '计算器使用哪个温度作为基准？', acceptedAnswer: { '@type': 'Answer', text: '每个选择的显影组合均以官方技术文档中 20 °C 时的显影时间为基准，并根据实际温度进行时间补偿。' } },
    { '@type': 'Question', name: '计算得出的显影时间是否绝对保证效果？', acceptedAnswer: { '@type': 'Answer', text: '不是。这只是暗房冲洗的实用起始参考。搅拌强度、冲洗罐形状、药水新鲜度及期望的反差均会改变结果。' } },
    { '@type': 'Question', name: '为什么显影时间低于 5 分钟时会发出警告？', acceptedAnswer: { '@type': 'Answer', text: '显影时间过短会导致倒水和排水时间所占比例过大，从而大幅增加胶片出现显影不均匀和斑痕的风险。' } },
    { '@type': 'Question', name: '如果列表中没有我使用的胶片和显影液怎么办？', acceptedAnswer: { '@type': 'Answer', text: '请查阅胶片和显影液厂商的官方技术说明书或权威冲洗对照表。本工具不会随意编造未经验证的数据。' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '如何根据温度补偿胶片显影时间',
  step: [
    { '@type': 'HowToStep', name: '选择胶片', text: '选择显影罐中所装入的黑白胶片型号。' },
    { '@type': 'HowToStep', name: '匹配显影液与稀释比', text: '选择数据表中对应的显影液及准确的稀释比例。' },
    { '@type': 'HowToStep', name: '测量显影液温度', text: '在开始冲洗前测量并输入显影液的实际温度。' },
    { '@type': 'HowToStep', name: '使用补偿显影时间', text: '将计算出的时间作为暗房冲洗定时器的起始依据。' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'film-development-time-temperature-compensation-calculator',
  title: '温度胶片显影时间补偿计算器',
  description: '根据实测的显影液温度，计算并补偿黑白胶片的显影冲洗时间，并提供清晰的温度对照参考。',
  ui,
  seo: [
    { type: 'title', level: 2, text: '如何根据显影液温度变化补偿黑白胶片的冲洗时间' },
    { type: 'paragraph', html: '从数据表中选择准确的胶片、显影液和稀释比例组合，然后输入工作液的实际测量温度。计算器将以 20 °C 时的官方时间为基准，计算出适合当前温度的实用显影时间。' },
    { type: 'title', level: 3, text: '将计算结果作为暗房实践的良好起始点' },
    { type: 'paragraph', html: '温度的变化会直接改变显影药水的化学活性：较高的温度需要更短的显影时间，而较低的温度则需要延长显影时间。参考对照表直观地展示了实测温度周围的时间变化趋势。' },
    { type: 'tip', title: '保持暗房冲洗流程的严谨性与一致性', html: '切勿将计算得出的时间视为不可更改的绝对真理。搅拌节奏、冲洗罐结构、药水使用寿命以及个人对底片反差的偏好依然起着关键作用。' },
    { type: 'title', level: 3, text: '为什么必须依据官方验证的组合数据' },
    { type: 'list', items: ['胶片与显影液的搭配决定了底片的颗粒感、锐度以及有效感光度。', '稀释比例改变了药水耗竭的速度，无法从其他比例中简单线性推算。', '低于 5 分钟的显影时间需要格外注意，因为倾倒药水的时间差对整体反差影响极大。'] },
  ],
  faq: [
    { question: '计算器使用哪个温度作为基准？', answer: '每个选择的显影组合均以官方技术文档中 20 °C 时的显影时间为基准，并根据实际温度进行时间补偿。' },
    { question: '计算得出的显影时间是否绝对保证效果？', answer: '不是。这只是暗房冲洗的实用起始参考。搅拌强度、冲洗罐形状、药水新鲜度及期望的反差均会改变结果。' },
    { question: '为什么显影时间低于 5 分钟时会发出警告？', answer: '显影时间过短会导致倒水和排水时间所占比例过大，从而大幅增加胶片出现显影不均匀和斑痕的风险。' },
    { question: '如果列表中没有我使用的胶片和显影液怎么办？', answer: '请查阅胶片和显影液厂商的官方技术说明书或权威冲洗对照表。本工具不会随意编造未经验证的数据。' },
  ],
  bibliography,
  howTo: [
    { name: '选择胶片', text: '选择显影罐中所装入的黑白胶片型号。' },
    { name: '匹配显影液与稀释比', text: '选择数据表中对应的显影液及准确的稀释比例。' },
    { name: '测量显影液温度', text: '在开始冲洗前测量并输入显影液的实际温度。' },
    { name: '使用补偿显影时间', text: '将计算出的时间作为暗房冲洗定时器的起始依据。' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};

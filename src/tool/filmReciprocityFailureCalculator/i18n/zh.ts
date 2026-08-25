import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'film-reciprocity-failure-calculator';
const title = '胶片倒易律失效计算器 (互律失效补偿)';
const description = '根据 ILFORD 和 KENTMERE 官方技术参数，精准计算并补偿胶片长曝光下的倒易律失效时间。';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: '胶片倒易律失效常见问题',
  bibliographyTitle: '参考资料',
  studyLabel: '长曝光研究',
  studyTitle: '让胶片感光乳剂获得足够的时间',
  studyText: '测光表测量的是瞬间到达的受光量。在长曝光下，乳剂需要更长的时间才能建立相同的影像密度。',
  filmLabel: '选择胶片型号',
  filmHint: '使用所选 ILFORD 或 KENTMERE 胶片官方公布的补偿系数。',
  measuredTimeLabel: '输入测光表测得的时间',
  measuredTimeHint: '暴光时间超过 1 秒时开始自动应用补偿。',
  secondsUnit: '秒',
  filmMenuLabel: '胶片菜单',
  presetsLabel: '实地预设条件',
  presetShort: '失效临界点',
  presetNight: '夜间街道',
  presetDeepNight: '深夜场景',
  resultLabel: '补偿后的曝光时间',
  correctedTimeLabel: '建议最终曝光时间',
  addedTimeLabel: '额外增加时间',
  correctionStopsLabel: '曝光补偿档数 (EV)',
  correctionFactorLabel: '胶片系数',
  noCorrection: '无需倒易律补偿',
  correctionNeeded: '倒易律失效补偿已生效',
  longExposure: '进入长曝光区间',
  meterTimeLabel: '测光表时间',
  filmTimeLabel: '调整后时间',
  exposurePathLabel: '视觉曝光增长路径',
  exposurePathText: '胶片条从初始测光时间动态延伸至最终补偿时间。',
  formulaLabel: '计算公式',
  formulaText: '补偿后时间 = 测光时间 <sup>胶片系数</sup>。',
  manufacturerNote: '参数来自 HARMAN 官方技术资料。请将计算结果作为暗房及实拍的起始参考。',
  resetLabel: '重置计算',
  invalidTime: '请输入大于零的时间。',
  sourceLabel: '厂商说明',
};

const faq: FAQItem[] = [
  {
    question: '什么是胶片摄影中的倒易律失效（互律失效）？',
    answer: '倒易律失效（Schwarzschild 效应）是指胶片在长时间曝光下感光效率下降的现象。较弱的光线在较长时间内累积，产生的底片密度低于测光表推算的理论值，因此需要给予比测光值更长的曝光时间。',
  },
  {
    question: '本计算器是如何计算补偿时间的？',
    answer: '基于 HARMAN 官方公式：补偿后时间 (Tc) 等于测光时间 (Tm) 的 P 次方。P 是该胶片公布的指数系数。等于或小于 1 秒的曝光不进行补偿。',
  },
  {
    question: '为什么不同胶片拥有不同的补偿系数？',
    answer: '不同感光乳剂中卤化银晶体的反应特性存在差异。HARMAN 为 HP5+、FP4+、DELTA 和 KENTMERE 等各型号胶片单独发布了对应的补偿系数。',
  },
  {
    question: '计算出的时间能保证得到完美的底片吗？',
    answer: '不能。极长曝光受测光精度、被摄体反差、冲洗温度及搅拌等多种因素影响。建议将计算结果作为基准，并在关键拍摄中进行包围曝光。',
  },
];

const howTo: HowToStep[] = [
  { name: '选择胶片型号', text: '选择您相机中所装入的胶片，以加载其专属的倒易律系数。' },
  { name: '输入测光时间', text: '输入测光表测得的曝光秒数，或选择实地预设。' },
  { name: '查看补偿时间', text: '将相机快门速度设置为计算得出的最终曝光时间。' },
  { name: '进行包围曝光', text: '对于非常长的夜间拍摄，建议围绕计算得出的时间进行加减档包围拍摄。' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: '基于官方数据的长曝光补偿',
    items: [
      '应用 11 款 ILFORD 和 KENTMERE 黑白胶片的官方补偿系数',
      '对比测光表测量值与乳剂实际所需的曝光时间',
      '直观显示增加的秒数、EV 补偿档数及动态视觉增长路径',
      '内置 3 种实地场景预设，方便夜间拍摄快速调取',
    ],
  },
  { type: 'title', text: '为什么长曝光必须进行倒易律失效补偿', level: 2 },
  {
    type: 'paragraph',
    html: '在常规快门速度下，曝光遵从倒易律（曝光量 = 光照强度 x 时间）。但在长曝光下，乳剂形成稳定潜影核的效率会下降。测光表给出的时间虽然在物理上是准确的，但在化学感光上却会导致曝光不足。',
  },
  { type: 'title', text: '计算背后的厂商官方公式', level: 2 },
  {
    type: 'table',
    headers: ['胶片型号', '官方系数', '测光 10 秒时的补偿示例'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4 秒'],
      ['ILFORD FP4+', '1.26', '18.2 秒'],
      ['ILFORD SFX 200', '1.43', '26.9 秒'],
      ['KENTMERE 400', '1.30', '20.0 秒'],
    ],
  },
  {
    type: 'paragraph',
    html: '本计算器采用 Tc = Tm<sup>P</sup> 公式。Tm 为测光秒数，Tc 为补偿后秒数，P 为 HARMAN 公布的指数系数。小于等于 1 秒时无需补偿。',
  },
  {
    type: 'tip',
    title: '将计算结果作为拍摄的良好起点',
    html: '长曝光的效果还受到测光误差、场景反差和冲洗显影的影响。对于重要的拍摄，请以计算时间为核心进行包围曝光。',
  },
  { type: 'title', text: '应用倒易律补偿时的注意事项', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>使用官方系数:</strong> 务必使胶片型号与厂商给出的技术数据严格对应。',
      '<strong>保持冲洗流程一致:</strong> 显影液类型、温度和搅拌频率都会改变底片的最终密度。',
      '<strong>极长曝光进行包围拍摄:</strong> 曝光时间越长，进行试拍和包围曝光就越有必要。',
    ],
  },
];

const faqSchema: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faq.map((item) => ({ '@type': 'Question', name: item.question, acceptedAnswer: { '@type': 'Answer', text: item.answer } })),
};

const howToSchema: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: title,
  description,
  step: howTo.map((step) => ({ '@type': 'HowToStep', name: step.name, text: step.text })),
};

const appSchema: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: title,
  description,
  applicationCategory: 'PhotographyApplication',
  operatingSystem: 'Web',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'EUR' },
  inLanguage: 'zh',
};

export const content: ToolLocaleContent<FilmReciprocityFailureCalculatorUI> = {
  slug,
  title,
  description,
  ui,
  seo,
  faq,
  bibliography,
  howTo,
  schemas: [appSchema, faqSchema, howToSchema],
};

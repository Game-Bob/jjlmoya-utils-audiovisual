import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-zone-system-visualizer-exposure-zones';
const title = '安塞尔 亚当斯 区域系统 可视化 曝光区域';
const description = '探索区域0至IX，准确定位测光影调与曝光档数，并结合标准、N减和N加冲洗控制底片反差。';

const ui: AdamsZoneSystemUI = {
  faqTitle: '关于分区曝光系统的常见问题',
  bibliographyTitle: '参考来源',
  orientationTitle: '区域定位设定',
  orientationText: '选择在场景中测得的影调，指定希望其落入的目标区域，并利用显示的曝光档数差额指导调整。冲洗提示有助于保护高光细节或还原暗部层次。',
  measuredToneLabel: '场景中测得的影调',
  targetPlacementLabel: '将该影调定位至',
  developmentLabel: '显影冲洗意图',
  normalDevelopment: '标准冲洗',
  minusDevelopment: 'N减冲洗',
  plusDevelopment: 'N加冲洗',
  presetsLabel: '预设现场笔记',
  presetShadow: '有纹理的暗部',
  presetSkin: '明亮肤色',
  presetSnow: '阳光下的雪景',
  presetNight: '夜间阴影',
  zoneStripLabel: '从黑到白的分区渐变条',
  meterBaselineLabel: '测光表基准: 区域V',
  selectedToneLabel: '测得影调',
  placementResultLabel: '定位结果',
  exposureShiftLabel: '相对中性灰的曝光偏移',
  tonalDistanceLabel: '距测得影调的档数',
  luminanceLabel: '相对亮度',
  stopsFromMiddleLabel: '距区域V的档数',
  developmentAdviceLabel: '底片评估指导',
  techniqueLabel: '暗房操作建议',
  resetLabel: '重置示例',
  meterAssumption: '反射式测光表在未作补偿时，始终将测得的任何读数当作区域V(18%中性灰)处理。',
  zonePrefix: '区域',
  zoneNames: '纯黑|近乎纯黑|深暗部|有纹理的暗部|偏暗中间调|中性灰|偏亮中间调|有纹理的高光|亮丽高光|近乎纯白',
  zoneDescriptions: '无任何可见纹理的极限纯黑。|从纯黑开始的极微弱分离，几乎没有纹理。|重要暗部层次中纹理的最初显现。|具有可呈现纹理的暗部，常作为定位基准点。|具有清晰轮廓的敞开阴影与深色树叶。|测光表指示的中性基准点。|明亮肤色、风化石材与明亮树叶。|照片中需保留可读性与质感的明亮纹理。|极亮但仅存微弱纹理的影调。|近乎纯白，仅存一丝微弱的层次分离。',
  increaseExposure: '按显示的档数开大曝光(增加光圈或减慢快门)，将读数提升至目标区域。',
  decreaseExposure: '按显示的档数缩小曝光(缩小光圈或加快快门)，将读数锁定在目标区域。',
  holdExposure: '保持测光表读数不变，因为定位目标即为区域V。',
  protectHighlights: '高光保护',
  openShadows: '暗部层次还原',
  balancedPlacement: '平衡定位',
  normalAdvice: '标准冲洗可使底片反差保持在场景测得的正常范围内。',
  minusAdvice: 'N减冲洗可压缩高反差场景，防止高光高密区出现死白。',
  plusAdvice: 'N加冲洗可扩展平淡场景的反差，提升重要暗部层次的分离度。',
};

const faq: FAQItem[] = [
  {
    question: '分区曝光系统(Zone System)测量与控制什么？',
    answer: '分区曝光系统是一种将照片影调从纯黑到纯白划分为不同区域进行可视化与控制的方法。它将测得的被摄体亮度与最终照片的影调区域及暗房冲洗决策紧密结合。',
  },
  {
    question: '为什么测光表始终以区域V为基准？',
    answer: '反射式测光表在校准上会将所测区域的平均亮度处理为18%中性灰(区域V)。若要使暗部保持深暗或使亮部保持明亮，必须进行偏离区域V的曝光补偿。',
  },
  {
    question: '相邻区域之间相差多少曝光档数？',
    answer: '相邻的完整区域之间刚好相差1档曝光(1 EV)。将测得影调从区域V重新定位至区域VII需要增加2档曝光。',
  },
  {
    question: 'N减与N加冲洗分别代表什么？',
    answer: '它们是用于控制底片反差的冲洗调节手段。N减冲洗可降低大反差场景在底片上的对比度，而N加冲洗可提高小反差平淡场景的对比度。',
  },
];

const howTo: HowToStep[] = [
  { name: '选择测得影调', text: '选择最符合测光表所测场景部位的区域。' },
  { name: '指定目标定位', text: '点击希望该影调在底片或照片上落入的目标区域。' },
  { name: '应用曝光偏移', text: '根据显示的档数差额相应开大或缩小光圈/快门。' },
  { name: '匹配冲洗意图', text: '根据提示在暗房冲洗时调整显影时间。' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: '分区曝光系统可视化实操指南',
    items: [
      '在清晰的渐变影调条上直观探索区域0至区域IX的所有层次',
      '将期望的区域定位快速转换为基于区域V的精确曝光档数补偿',
      '对比被摄体测得亮度与最终照片上希望呈现的影调效果',
      '将N减、标准与N加冲洗作为掌控底片反差的有力工具',
    ],
  },
  { type: 'title', text: '安塞尔 亚当斯 分区曝光系统的原理', level: 2 },
  {
    type: 'paragraph',
    html: '分区曝光系统将连续的场景亮度划分为十个实用的参考区域。区域V代表测光表给出的18%中性灰。',
  },
  { type: 'title', text: '从分区渐变条读取曝光补偿', level: 2 },
  {
    type: 'table',
    headers: ['定位目标', '视觉表现特征', '测光表补偿操作'],
    rows: [
      ['区域II', '隐约可见纹理的深暗部', '比区域V减少3档曝光(缩小光圈/加快快门)'],
      ['区域III', '需保留质感的重要暗部层次', '比区域V减少2档曝光(缩小光圈/加快快门)'],
      ['区域V', '18%中性灰基准', '保持测光表指示读数'],
      ['区域VI', '如明亮肤色般的偏亮中间调', '比区域V增加1档曝光(开大光圈/减慢快门)'],
      ['区域VII', '需保留细节的明亮纹理高光', '比区域V增加2档曝光(开大光圈/减慢快门)'],
    ],
  },
  {
    type: 'tip',
    title: '将区域定位作为一种艺术创作决策',
    html: '不要把测光表当作必须把一切都变成灰色的规则。决定场景中承载核心纹理的影调，并主动将其定位在合适的区域。',
  },
  { type: 'title', text: '显影冲洗对对比度的调节作用', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>标准冲洗:</strong> 将正常反差场景的影调范围保存在底片的标准密度范围内。',
      '<strong>N减冲洗:</strong> 压缩大反差场景，防止亮部密度过高丢失细节。',
      '<strong>N加冲洗:</strong> 扩展小反差场景，使暗部层次更加清晰可辨。',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: '区域(Zone)', definition: '相隔1档曝光(1 EV)的实用影调层次单位。' },
      { term: '定位(Placement)', definition: '将测得的被摄体影调主动分配至目标区域的决策。' },
      { term: '中性灰', definition: '反射式测光表校准时所采用的区域V基准影调。' },
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

export const content: ToolLocaleContent<AdamsZoneSystemUI> = {
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

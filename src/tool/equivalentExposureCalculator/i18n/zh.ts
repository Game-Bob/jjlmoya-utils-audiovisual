import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'equivalent-exposure-calculator';
const title = '等效曝光计算器 曝光三要素互则計算';
const description = '计算光圈、快门速度和ISO感光度的等效曝光设置，保持EV曝光值恒定。';

const ui: EquivalentExposureUI = {
  "title": "等效曝光计算器",
  "subtitle": "计算光圈、快门和ISO的互法则参数，保持恒定的曝光值。",
  "baseSettingsTitle": "基础曝光设置",
  "targetSettingsTitle": "目标等效设置",
  "lockModeLabel": "自动计算模式",
  "isoLabel": "ISO 感光度",
  "apertureLabel": "光圈 (f值)",
  "shutterLabel": "快门速度",
  "lockIsoOption": "计算 ISO (保持光圈和快门)",
  "lockApertureOption": "计算光圈 (保持ISO和快门)",
  "lockShutterOption": "计算快门 (保持ISO和光圈)",
  "presetsTitle": "快速预设",
  "presetSunny16": "阳光16法则",
  "presetOvercast": "阴天",
  "presetIndoor": "室内灯光",
  "presetNight": "夜景拍摄",
  "targetEvLabel": "目标 EV"
};

const faq: FAQItem[] = [
  {
    "question": "什么是曝光值(EV)？如何计算？",
    "answer": "EV是在ISO 100下代表光圈与快门组合的对数标度。公式为 EV = log2(N^2 / t)。"
  },
  {
    "question": "等效曝光如何保持图像亮度一致？",
    "answer": "通过平衡ISO、快门速度和光圈之间的档数，传感器接收的总光量保持不变。"
  },
  {
    "question": "什么是阳光16法则？",
    "answer": "在晴天f/16下，正确的快门速度是ISO感光度的倒数（例如ISO 100需要1/100秒）。"
  },
  {
    "question": "光圈选择如何改变景深？",
    "answer": "开大光圈会减小景深，通过柔和的背景虚化突出主体。"
  }
];

const howTo: HowToStep[] = [
  {
    "name": "选择基础设置",
    "text": "设定拍摄场景的基础ISO、光圈和快门速度。"
  },
  {
    "name": "选择计算模式",
    "text": "选择需要自动计算的变量。"
  },
  {
    "name": "调整目标参数",
    "text": "修改目标值即可实时查看互法则计算结果。"
  },
  {
    "name": "评估视觉效果",
    "text": "查看矢量图了解景深、动态模糊和噪点表现。"
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: '曝光互法则计算特点',
    items: [
      "ISO、光圈和快门速度之间精确的1/3 EV档位计算",
      "交互式曝光三要素SVG矢量可视化图表",
      "景深、动态模糊和传感器噪点的实时反馈",
      "阳光16、阴天和夜景的一键快速预设"
    ],
  },
  { type: 'title', text: '理解曝光三要素', level: 2 },
  {
    type: 'paragraph',
    html: '摄影中的曝光是由镜头的光圈通光孔径大小、快门开启的时间长度以及感光元件的ISO感光度三者共同决定的。改变其中任何一个参数，都必须在其他参数上进行相应的倒易律互法则补偿，以维持传感器接收到的总进光量不变。',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: '日光基准 (阳光16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: '精密三分之一档步进', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: '标准景深前后分布比例', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: '创作意图', level: 3 },
  {
    type: 'table',
    headers: [
      "创作意图",
      "光圈调整",
      "快门调整",
      "ISO调整",
      "视觉效果"
    ],
    rows: [
      [
        "凝固动作",
        "开大 (f/2.8)",
        "加快 (1/1000s)",
        "保持不变",
        "景深变浅"
      ],
      [
        "风光清晰度",
        "缩小 (f/11)",
        "减慢 (1/30s)",
        "保持不变",
        "需要三脚架"
      ],
      [
        "弱光手持拍摄",
        "开到最大 (f/1.4)",
        "保持手持极限 (1/60s)",
        "提高 (ISO 3200)",
        "噪点增加"
      ],
      [
        "影棚最高画质",
        "最佳光圈 (f/8)",
        "闪光同步 (1/200s)",
        "基准 ISO 100",
        "最大动态范围"
      ]
    ],
  },
  { type: 'title', text: '等效设置的创作影响', level: 3 },
  {
    type: 'paragraph',
    html: '虽然采用等效曝光设置能够在图像感光元件(传感器)上获得完全相同的总体画面亮度，但是画面的艺术表现形式、被摄体运动轨迹以及背景虚化效果会根据具体设置产生显著差异：',
  },
  {
    type: 'list',
    items: [
      "<strong>光圈：</strong> 控制景深范围和背景虚化效果。大光圈产生柔和焦外。",
      "<strong>快门速度：</strong> 控制曝光时间长度，实现凝固动态或记录运动轨迹。",
      "<strong>ISO感光度：</strong> 以噪点为代价放大传感器信号，提升弱光表现。"
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '背景虚化预设',
        description: '人像大光圈设置',
        icon: 'mdi:account-box-outline',
        points: [
          "f/1.4 至 f/2.8 大光圈",
          "高速快门",
          "柔和虚化"
        ],
      },
      {
        title: '大景深风光预设',
        description: '小光圈全景清晰',
        icon: 'mdi:image-filter-hdr',
        points: [
          "最佳画质 f/8 至 f/11",
          "三脚架慢速快门",
          "最高解像力"
        ],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'proscons',
    items: [
      {
        pro: '契合相机拨盘的1/3档精度',
        con: '未考虑胶片倒易律失效或T光圈值',
      },
      {
        pro: '实时显示清晰度状态的SVG可视化',
        con: '需要手动计算传感器裁切系数',
      },
    ],
  },
  {
    type: 'glossary',
    items: [
      {
        "term": "曝光值 (EV)",
        "definition": "结合光圈与快门速度的对数标度。"
      },
      {
        "term": "倒易律 (互法则)",
        "definition": "曝光量等于光照强度与照射时间乘积的法则。"
      },
      {
        "term": "曝光档位 (Stop)",
        "definition": "代表光量翻倍或减半的相对单位。"
      }
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

export const content: ToolLocaleContent<EquivalentExposureUI> = {
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

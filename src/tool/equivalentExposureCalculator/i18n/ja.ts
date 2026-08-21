import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { EquivalentExposureUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'equivalent-exposure-calculator';
const title = '等価露出計算機 露出の三角形と相反則';
const description = '絞り値、シャッタースピード、ISO感度の同等な露出設定を計算し、一定のEV値を維持します。';

const ui: EquivalentExposureUI = {
  "title": "等価露出計算機",
  "subtitle": "絞り、シャッタースピード、ISOの相互パラメータを計算し、一定の露出値を維持します。",
  "baseSettingsTitle": "基本露出設定",
  "targetSettingsTitle": "目標同等設定",
  "lockModeLabel": "自動計算モード",
  "isoLabel": "ISO感度",
  "apertureLabel": "絞り値 (f値)",
  "shutterLabel": "シャッタースピード",
  "lockIsoOption": "ISOを計算 (絞りとシャッターを固定)",
  "lockApertureOption": "絞りを計算 (ISOとシャッターを固定)",
  "lockShutterOption": "シャッターを計算 (ISOと絞りを固定)",
  "presetsTitle": "クイックプリセット",
  "presetSunny16": "Sunny 16の法則",
  "presetOvercast": "曇天",
  "presetIndoor": "室内光",
  "presetNight": "夜景撮影",
  "targetEvLabel": "目標EV"
};

const faq: FAQItem[] = [
  {
    "question": "露出値(EV)とは何ですか？計算方法は？",
    "answer": "EVはISO 100における絞りとシャッタースピードの組み合わせを表す対数尺度です。数式は EV = log2(N^2 / t) です。"
  },
  {
    "question": "同等露出はどのように画像の明るさを維持しますか？",
    "answer": "ISO、シャッタースピード、絞りの間で段数を調整することで、センサーが捉える光量を一定に保ちます。"
  },
  {
    "question": "Sunny 16の法則とは何ですか？",
    "answer": "晴天時にf/16で撮影する場合、適切なシャッタースピードはISO感度の逆数になります(例: ISO 100なら1/100秒)。"
  },
  {
    "question": "絞り値の選択によって被写界深度はどう変化しますか？",
    "answer": "絞りを開くと被写界深度が浅くなり、背景を柔らかくボカして被写体を際立たせます。"
  }
];

const howTo: HowToStep[] = [
  {
    "name": "基本設定を選択",
    "text": "撮影シーンの基本となるISO、絞り、シャッタースピードを設定します。"
  },
  {
    "name": "計算モードを選択",
    "text": "自動計算させたい変数を選択します。"
  },
  {
    "name": "目標パラメータを調整",
    "text": "目標値を変更すると、相回転の設定が即座に計算されます。"
  },
  {
    "name": "視覚的効果を確認",
    "text": "ベクトル図で被写界深度、手ブレ限界、ノイズを確認します。"
  }
];

const seo: ToolLocaleContent<EquivalentExposureUI>['seo'] = [
  {
    type: 'summary',
    title: '露出相反則計算の特徴',
    items: [
    "ISO、絞り、シャッタースピード間の正確な1/3 EVステップ計算",
    "インタラクティブな露出の三角形SVGベクター可視化",
    "被写界深度、被写体ブレ、センサーノイズのリアルタイムフィードバック",
    "Sunny 16、曇天、夜景などのワンクリックプリセット"
],
  },
  { type: 'title', text: '露出の三角形を理解する', level: 2 },
  {
    type: 'paragraph',
    html: '写真の露出は絞り、シャッタースピード、ISOの3要素で決定されます。1つの要素を変更した場合、相回転の調整が必要です。',
  },
  {
    type: 'stats',
    items: [
      { value: 'EV 15', label: '日中晴天の基準 (Sunny 16)', icon: 'mdi:white-balance-sunny' },
      { value: '1/3 EV', label: '精密な1/3ステップ分解能', icon: 'mdi:tune-vertical' },
      { value: '2:1 DOF', label: '標準的なピント前後比率', icon: 'mdi:camera-iris' },
    ],
    columns: 3,
  },
  { type: 'title', text: '撮影の意図', level: 3 },
  {
    type: 'table',
    headers: [
    "撮影の意図",
    "絞り調整",
    "シャッター調整",
    "ISO調整",
    "視覚的結果"
],
    rows: [
    [
        "動きを止める",
        "開く (f/2.8)",
        "高速化 (1/1000s)",
        "固定",
        "被写界深度が浅くなる"
    ],
    [
        "パンフォーカス",
        "絞り込む (f/11)",
        "低速化 (1/30s)",
        "固定",
        "三脚が必要"
    ],
    [
        "暗所での手持ち撮影",
        "開放にする (f/1.4)",
        "限界速度を維持 (1/60s)",
        "上げる (ISO 3200)",
        "ノイズが増加"
    ],
    [
        "最高画質スタジオ撮影",
        "最適絞り (f/8)",
        "フラッシュ同調 (1/200s)",
        "基準ISO 100",
        "最大ダイナミックレンジ"
    ]
],
  },
  { type: 'title', text: '同等設定による表現の違い', level: 3 },
  {
    type: 'paragraph',
    html: '同等の露出値であっても、写真の仕上がりは大きく異なります：',
  },
  {
    type: 'list',
    items: [
    "<strong>絞り：</strong> 被写界深度と背景のボケ味をコントロールします。",
    "<strong>シャッタースピード：</strong> 被写体の動きのブレやブレの停止をコントロールします。",
    "<strong>ISO感度：</strong> ノイズと引き換えにセンサー信号を増幅します。"
],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: '背景ボケ重視の設定',
        description: 'ポートレート用大口径設定',
        icon: 'mdi:account-box-outline',
        points: [
          "f/1.4 から f/2.8 の大口径",
          "高速シャッター",
          "柔らかいボケ"
],
      },
      {
        title: '風景撮影向けの設定',
        description: '全体にピントを合わせる設定',
        icon: 'mdi:image-filter-hdr',
        points: [
          "解像性能が高い f/8 から f/11",
          "三脚使用の低速シャッター",
          "最高画質"
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
        pro: 'カメラのダイヤルに合わせた1/3ステップ精度',
        con: 'フィルムの相変則不全やT値を考慮しない',
      },
      {
        pro: 'シャープネス状態を表示するリアルタイムSVG可視化',
        con: 'センサーサイズによるクロップ係数の手動計算が必要',
      },
    ],
    proTitle: '技術的長所',
    conTitle: '物理的限界',
  },
  {
    type: 'glossary',
    items: [
    {
        "term": "露出値 (EV)",
        "definition": "絞りとシャッタースピードを組み合わせた対数尺度。"
    },
    {
        "term": "相反則",
        "definition": "露出量が光の強さと照射時間の積に比例するという法則。"
    },
    {
        "term": "露出段数 (Stop)",
        "definition": "光量が2倍または1/2になる相対単位。"
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
  inLanguage: 'ja',
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

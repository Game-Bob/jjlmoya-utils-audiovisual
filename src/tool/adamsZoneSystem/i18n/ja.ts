import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { AdamsZoneSystemUI } from '../ui';

const slug = 'ansel-adams-zone-system-visualizer-exposure-zones';
const title = 'アンセル アダムス ゾーンシステム 可視化 露出ゾーン';
const description = 'ゾーン0からIXまでを可視化し、測定したトーンを正確な露出段数で配置し、ノーマル、Nマイナス、Nプラス現像の判断をサポートします。';

const ui: AdamsZoneSystemUI = {
  faqTitle: 'ゾーンシステムに関する質問',
  bibliographyTitle: '参考文献',
  orientationTitle: 'ゾーンの配置決定',
  orientationText: '被写体で測定したトーンを選び、最終的に配置したいゾーンを指定すると、露出の調整段数が表示されます。現像の指示はハイライトの白とびや暗部の黒つぶれを防ぐ目安になります。',
  measuredToneLabel: '被写体で測定したトーン',
  targetPlacementLabel: 'このトーンの配置先',
  developmentLabel: '現像処理の意図',
  normalDevelopment: 'ノーマル現像',
  minusDevelopment: 'Nマイナス現像',
  plusDevelopment: 'Nプラス現像',
  presetsLabel: 'フィールドプリセット',
  presetShadow: 'ディテールのある暗部',
  presetSkin: '明るい肌色',
  presetSnow: '日向の雪景',
  presetNight: '夜間のシャドウ',
  zoneStripLabel: '黒から白へのゾーンチャート',
  meterBaselineLabel: '露出計の基準: ゾーンV',
  selectedToneLabel: '測定されたトーン',
  placementResultLabel: '配置結果',
  exposureShiftLabel: '標準露出(18%グレー)からの補正量',
  tonalDistanceLabel: '測定トーンからの移動量',
  luminanceLabel: '相対輝度',
  stopsFromMiddleLabel: 'ゾーンVからの段数',
  developmentAdviceLabel: 'ネガの評価指示',
  techniqueLabel: '暗室作業のアドバイス',
  resetLabel: '設定をリセット',
  meterAssumption: '反射光式露出計は、補正を行わない限り測定したあらゆる対象をゾーンV(18%標準グレー)として表示します。',
  zonePrefix: 'ゾーン',
  zoneNames: '完全な黒|漆黒|深い暗部|ディテールの残る暗部|暗い中間調|標準グレー|明るい中間調|ディテールの残る明部|輝くハイライト|ほぼ完全な白',
  zoneDescriptions: '質感の全くない最高の黒。|黒からの最初の変化で、質感をほとんど伴わない。|重要な暗部における質感の最初の兆候。|階調が再現可能な暗部であり、配置の標準的な基準点。|フォームがはっきり判別できる暗い葉やシャドウ。|露出計が指示する中性的な基準点。|明るい肌、風化した石、明るい緑。|プリントで階調を保持すべき明るい質感。|質感のほとんど残らない非常に明るいトーン。|わずかな分離を残すだけのほぼ純白。',
  increaseExposure: '指示された段数分だけ露出を開き、測定値を目的のゾーンへ持ち上げます。',
  decreaseExposure: '指示された段数分だけ露出を絞り、測定値を目的のゾーンに保持します。',
  holdExposure: '配置先がゾーンVのため、露出計の測定値をそのまま使用します。',
  protectHighlights: 'ハイライト保持',
  openShadows: '暗部階調の確保',
  balancedPlacement: 'バランス配置',
  normalAdvice: 'ノーマル現像は被写体のコントラストを測定範囲通りにネガへ反映させます。',
  minusAdvice: 'Nマイナス現像は明暗差の激しい被写体のコントラストを抑え、ハイライトのトーンを保護します。',
  plusAdvice: 'Nプラス現像はコントラストの低い被写体のメリハリを強調し、暗部の分離を改善します。',
};

const faq: FAQItem[] = [
  {
    question: 'ゾーンシステムとは何を測定・管理するものですか？',
    answer: 'ゾーンシステムは、写真における深い黒から純白までの明暗階調を視覚化しコントロールする手法です。測定した輝度を最終プリントのゾーンと結びつけ、露出と現像を決定します。',
  },
  {
    question: 'なぜ露出計はゾーンVを基準にするのですか？',
    answer: '反射光式露出計は、測定結果の平均を18%標準グレー(ゾーンV)として処理するように校正されているためです。暗部を暗く、明部を明るく表現するには意図的な露出補正が必要です。',
  },
  {
    question: '各ゾーン間は何EV(段)離れていますか？',
    answer: '隣り合う各ゾーンは正確に1EV(1段)離れています。ゾーンVからゾーンVIIへ配置を変更するには2段分露出を増やす必要があります。',
  },
  {
    question: 'Nマイナス現像とNプラス現像の違いは何ですか？',
    answer: 'コントラストを調整するための現像コントロールです。Nマイナスは明暗差の強い被写体でネガのコントラストを下げ、Nプラスは明暗差の少ない被写体でコントラストを高めます。',
  },
];

const howTo: HowToStep[] = [
  { name: '測定トーンを選択', text: '露出計でスポット測定した被写体部分に最も近いゾーンを選択します。' },
  { name: '配置先ゾーンを指定', text: 'ネガやプリントでそのトーンを再現したい目標ゾーンをタップします。' },
  { name: '露出補正を適用', text: '表示された段数に従って絞りやシャッタースピードを補正します。' },
  { name: '現像処理を決定', text: 'アドバイスに従って暗室での現像時間を調整します。' },
];

const seo: ToolLocaleContent<AdamsZoneSystemUI>['seo'] = [
  {
    type: 'summary',
    title: 'ゾーンシステム視覚的フィールドガイド',
    items: [
      'ゾーン0からIXまでの全階調を直感的なトーンチャートで確認',
      '目標配置に必要な露出補正段数をゾーンV基準で即座に計算',
      'スポット測定した輝度とプリント上で再現したいトーンを比較',
      'Nマイナス、ノーマル、Nプラス現像を明快なコントラスト制御として活用',
    ],
  },
  { type: 'title', text: 'アンセル アダムス ゾーンシステムの仕組み', level: 2 },
  {
    type: 'paragraph',
    html: 'ゾーンシステムは連続した被写体輝度を10段階の参照ゾーンに分類します。ゾーンVは露出計が指し示す標準グレーです。',
  },
  { type: 'title', text: 'ゾーンチャートに基づく露出補正', level: 2 },
  {
    type: 'table',
    headers: ['配置先', '視覚的表現', '露出計からの操作'],
    rows: [
      ['ゾーンII', 'わずかに質感の残る深い暗部', 'ゾーンVから3段減光(絞る)'],
      ['ゾーンIII', 'テクスチャを保持すべき重要なシャドウ', 'ゾーンVから2段減光(絞る)'],
      ['ゾーンV', '標準的な18%中性グレー基準', '露出計の指示通りの設定'],
      ['ゾーンVI', '明るい肌色などのライトミッドトーン', 'ゾーンVから1段増光(開く)'],
      ['ゾーンVII', '階調を残すべき重要なハイライト', 'ゾーンVから2段増光(開く)'],
    ],
  },
  {
    type: 'tip',
    title: 'ゾーン配置をクリエイティブな表現として活用する',
    html: '露出計の指示に盲従してすべてをグレーにする必要はありません。質感や意図の中心となるトーンを決定し、意図的に配置してください。',
  },
  { type: 'title', text: '現像によるコントラスト補正', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>ノーマル現像:</strong> 被写体の標準的な明暗差をそのままネガに記録します。',
      '<strong>Nマイナス現像:</strong> 強烈な明暗差を圧縮し、ハイライトの白とびを防ぎます。',
      '<strong>Nプラス現像:</strong> フラットな被写体のコントラストを拡大し、暗部のメリハリを高めます。',
    ],
  },
  {
    type: 'glossary',
    items: [
      { term: 'ゾーン', definition: '1段(1EV)の露出差ごとに分けられた実用的な明暗階調の単位。' },
      { term: '配置(Placement)', definition: '測定した被写体の輝度を最終的な目標ゾーンへ割り当てる決定。' },
      { term: '18%標準グレー', definition: '反射光式露出計が基準とするゾーンVの中性トーン。' },
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
  inLanguage: 'ja',
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

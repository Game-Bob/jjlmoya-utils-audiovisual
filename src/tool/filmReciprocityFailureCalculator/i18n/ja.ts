import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { FAQItem, HowToStep, ToolLocaleContent } from '../../../types';
import { bibliography } from '../bibliography';
import type { FilmReciprocityFailureCalculatorUI } from '../ui';

const slug = 'film-reciprocity-failure-calculator';
const title = 'フィルム相反則不全計算ツール (シュヴァルツシルト効果)';
const description = 'ILFORDおよびKENTMEREの公式データに基づき、長露出時の相反則不全（露光不足）を正しく補正計算します。';

const ui: FilmReciprocityFailureCalculatorUI = {
  faqTitle: 'フィルムの相反則不全に関するよくある質問',
  bibliographyTitle: '参考資料',
  studyLabel: '長露出の補正計算',
  studyTitle: 'フィルムに十分な時間を与える',
  studyText: '露出計は到達した光を瞬時に測定します。乳剤が同じ濃度の潜像を形成するには長露出時により多くの時間が必要です。',
  filmLabel: '使用フィルムを選択',
  filmHint: '選択したILFORDまたはKENTMEREフィルムの公式補正係数を使用します。',
  measuredTimeLabel: '露出計の測定時間を入力',
  measuredTimeHint: '1秒を超える長露出から補正が適用されます。',
  secondsUnit: '秒',
  filmMenuLabel: 'フィルム選択メニュー',
  presetsLabel: 'プリセット撮影条件',
  presetShort: '補正開始限界',
  presetNight: '夜間の街頭',
  presetDeepNight: '深夜の情景',
  resultLabel: '補正後の露出時間',
  correctedTimeLabel: '推奨される露光時間',
  addedTimeLabel: '追加時間',
  correctionStopsLabel: '露出増加量 (EV段数)',
  correctionFactorLabel: 'フィルム補正係数',
  noCorrection: '補正不要',
  correctionNeeded: '相反則不全の補正が有効',
  longExposure: '長露出領域',
  meterTimeLabel: '露出計の測定値',
  filmTimeLabel: '補正後の時間',
  exposurePathLabel: '露出時間の視覚的変化',
  exposurePathText: 'フィルムストリップが測定値から補正時間まで視覚的に伸びます。',
  formulaLabel: '計算公式',
  formulaText: '補正時間 = 測定時間 <sup>フィルム補正係数</sup>。',
  manufacturerNote: '係数はHARMANの公式技術情報に基づきます。算出された時間は撮影の開始目安としてご活用ください。',
  resetLabel: '計算をリセット',
  invalidTime: '0秒より大きい値を入力してください。',
  sourceLabel: 'メーカー技術注記',
};

const faq: FAQItem[] = [
  {
    question: 'フィルムの相反則不全（シュヴァルツシルト効果）とは何ですか？',
    answer: '相反則不全とは、長時間露光時にフィルムの感度効率が低下する現象です。露出計が示す時間が正しくても、光量が極めて弱い場合は潜像核が形成されにくく、より長い露光時間が必要になります。',
  },
  {
    question: 'このツールはどのように補正時間を計算しますか？',
    answer: 'HARMAN公式の計算式（補正時間 Tc = 測定時間 Tm <sup>P</sup>）を使用しています。Pはフィルム固有の係数です。1秒以下の露光では補正は行われません。',
  },
  {
    question: 'なぜフィルムごとに補正係数が異なるのですか？',
    answer: '乳剤中のハロゲン化銀粒子の反応特性がフィルムごとに異なるためです。HARMAN社はHP5+、FP4+、DELTA、KENTMEREなど銘柄ごとに個別の係数を公表しています。',
  },
  {
    question: '計算された時間で常に完璧なネガが得られますか？',
    answer: 'いいえ。極端な長露出では、露出計測精度、被写体のコントラスト、現像条件（温度・攪拌）などの影響が大きくなります。算出時間を基準としてブラケティング撮影を行うことを推奨します。',
  },
];

const howTo: HowToStep[] = [
  { name: 'フィルムを選択', text: 'カメラに装填されているフィルムを選択し、固有の補正係数を読み込みます。' },
  { name: '測定時間を入力', text: '単体露出計やカメラが示した露出時間（秒）を入力します。' },
  { name: '補正時間を確認', text: '算出された補正時間にシャッタースピードを設定します。' },
  { name: 'ブラケティング撮影', text: '非常に長い夜間撮影では、算出時間を中心に露光時間を前後させて撮影します。' },
];

const seo: ToolLocaleContent<FilmReciprocityFailureCalculatorUI>['seo'] = [
  {
    type: 'summary',
    title: '公式データに基づく長露出補正',
    items: [
      'ILFORDおよびKENTMEREのモノクロフィルム11銘柄の公式補正係数を適用',
      '露出計の計測値とフィルム乳剤が実際に必要とする時間を比較',
      '追加時間、段数（EV）での補正量、視覚的な時間伸びを同時に表示',
      '夜景や暗所撮影で役立つ3つの撮影プリセットを搭載',
    ],
  },
  { type: 'title', text: 'なぜ長露出で相反則補正が必要なのか', level: 2 },
  {
    type: 'paragraph',
    html: '通常のシャッタースピードでは、露出量は「光の強さ×時間」の相反則が成り立ちます。しかし長時間露光では、乳剤が安定した潜像を形成する効率が落ちます。露出計の表示時間は物理的には正しくても、化学的には露光不足になります。',
  },
  { type: 'title', text: '計算の背景にあるメーカー公式の計算式', level: 2 },
  {
    type: 'table',
    headers: ['フィルム銘柄', '公式補正係数', '測定値10秒時の補正結果'],
    rows: [
      ['ILFORD HP5+', '1.31', '20.4秒'],
      ['ILFORD FP4+', '1.26', '18.2秒'],
      ['ILFORD SFX 200', '1.43', '26.9秒'],
      ['KENTMERE 400', '1.30', '20.0秒'],
    ],
  },
  {
    type: 'paragraph',
    html: '本計算ツールは Tc = Tm<sup>P</sup> を採用しています。Tmは測定時間（秒）、Tcは補正時間、PはHARMAN公表の指数係数です。1秒以下では相反則補正は不要とされています。',
  },
  {
    type: 'tip',
    title: '計算結果は撮影のスタートラインとして活用する',
    html: '長露出の成否には相反則不全だけでなく、測光の誤差や現像条件も大きく影響します。重要なカットでは算出された補正時間をベースにブラケティング撮影を行ってください。',
  },
  { type: 'title', text: '相反則補正を正しく適用するためのポイント', level: 2 },
  {
    type: 'list',
    items: [
      '<strong>公式の補正係数を使用する:</strong> 使用するフィルムの銘柄と技術データを一致させます。',
      '<strong>現像条件を一定に保つ:</strong> 現像液の種類、温度、攪拌方法がネガの仕上がりを左右します。',
      '<strong>極端な長露出では段階露出を行う:</strong> 露出時間が伸びるほどテスト撮影やブラケティングが効果的です。',
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
  inLanguage: 'ja',
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

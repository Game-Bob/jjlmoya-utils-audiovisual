import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-distance-calculator';
const title = '距離と温度による音響ディレイ計算機';
const description = 'PAディレイタワーの音響ディレイ時間、空気中の音速、位相シフト、デジタルサンプル数、およびSPL減衰量を計算します。';

const ui: AudioDelayUI = {
  title: '距離と温度による音響ディレイ計算機',
  subtitle: 'PAディレイの音波伝播ディレイ時間、音響位相シフト、サンプル数、およびSPL減衰量を計算します。',
  unitSystemLabel: '単位系',
  unitMetric: 'メートル法 (m, °C)',
  unitImperial: 'ヤード・ポンド法 (ft, °F)',
  distanceLabel: 'ディレイタワーへの距離',
  temperatureLabel: '周囲気温',
  humidityLabel: '相対湿度',
  sampleRateLabel: 'ミキサーのサンプリングレート',
  presetsTitle: 'クイックシナリオプリセット',
  presetSummerFestival: '夏フェス (35°C, 40m)',
  presetIndoorConcert: '屋内コンサート (20°C, 25m)',
  presetTheater: '音響ホール・劇場 (22°C, 15m)',
  presetWinterOutdoor: '冬の屋外イベント (5°C, 50m)',
  resultDelayMs: 'ディレイ時間',
  resultSamples: 'デジタルサンプル数',
  resultSpeed: '音速',
  resultSplLoss: 'SPL減衰量',
  phaseStatusLabel: '音響位相整合ステータス',
  statusDirectZone: '直接波波面同期',
  statusHaasZone: 'ハース効果優先ゾーン',
  statusEchoZone: '感知可能なエコーゾーン',
  statusExtremeZone: '重度ディレイ偏差',
  advicePhaseAligned: '信号は5ms以内で音響的に同期しています。最小限のディレイ処理で足ります。',
  adviceMinorHaas: '音はハースゾーン(5-35ms)内に到達します。自然な音像定位はメインステージに留まります。',
  adviceHaasDelayNeeded: 'ディレイタワーは独立したエコー感知を防ぐため正確なタイムオフセットが必要です。',
  adviceCriticalDelayNeeded: 'ディレイ偏差が大きいです。コムフィルタリングを防ぐため正確なサンプルディレイを適用してください。',
  unitMeters: 'm',
  unitFeet: 'ft',
  unitCelsius: '°C',
  unitFahrenheit: '°F',
  mainSpeakerLabel: 'メインPA',
  delaySpeakerLabel: 'ディレイタワー',
  audienceLabel: '観客エリア',
  haasZoneLegend: 'ハースゾーン (5-35ms)',
};

const faq: FAQItem[] = [
  {
    question: 'オーディオディレイ計算において気温が重要な理由は何ですか？',
    answer: '空気中の音速は気温に直接依存します。摂氏0度では音速は毎秒331.3メートルですが、摂氏30度では約毎秒349メートルに増加します。気温を無視すると位相打ち消しが発生します。',
  },
  {
    question: 'ライブ音響におけるハース効果とは何ですか？',
    answer: 'ハース効果（先行音効果）とは、後続の音響信号が5〜35ミリ秒以内に同等の音量で到達した場合、人間の聴覚が最初に到達した音の方向に音源を定位する現象です。',
  },
  {
    question: 'ディレイ時間をデジタルミキサーのサンプル数に変換する方法は？',
    answer: 'ディレイ時間（秒）にデジタルミキサーのサンプリングレートを掛けます。例えば48kHzで50ミリ秒のディレイは、0.05×48000＝2400サンプルとなります。',
  },
];

const howTo: HowToStep[] = [
  {
    name: '物理距離の測定',
    text: 'レーザー距離計を使用して、メインPAとディレイタワー間の物理距離を測定します。',
  },
  {
    name: '周囲気温の確認',
    text: '正確な音速を算出するために会場の現在の気温を入力します。',
  },
  {
    name: 'コンソールのサンプリングレート選択',
    text: '使用するデジタルミキサーの動作サンプリングレート（44.1kHz、48kHz、96kHz、192kHz）を設定します。',
  },
  {
    name: '計算されたディレイの適用',
    text: 'スピーカープロセッサーまたはマトリクス出力にディレイ時間（ms）またはサンプル数を設定します。',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: '音響ディレイ整合の主な機能',
    items: [
      '気温と湿度に基づく精密な音速計算',
      'デジタルコンソールのサンプル数への即時変換 (44.1k, 48k, 96k, 192k)',
      'ハース効果ゾーンおよび位相整合の評価機能',
      '逆二乗法則に基づく音圧レベル (SPL) 減衰量の推定',
    ],
  },
  { type: 'title', text: '音波の伝播と大気熱力学', level: 2 },
  {
    type: 'paragraph',
    html: '音は疎密波として空気中を伝播します。その速度は主に空気温度に支配され、<code>c = 331.3 * sqrt(1 + T / 273.15)</code>で計算されます。屋外イベントでは昼間のリハーサルと夜の本番での気温変化が音速に顕著な影響を与えます。',
  },
  {
    type: 'stats',
    items: [
      { value: '343.2 m/s', label: '20°Cでの標準音速', icon: 'mdi:speedometer' },
      { value: '5-35 ms', label: 'ハース先行音窓', icon: 'mdi:timer-sand' },
      { value: '48/96 kHz', label: 'コンソールサンプル精度', icon: 'mdi:sine-wave' },
    ],
    columns: 3,
  },
  { type: 'title', text: '音響位相アライメントとコムフィルタの防止', level: 3 },
  {
    type: 'paragraph',
    html: '離れた2つのスピーカーが正確な時間補正なしに同じ信号を出力すると、音波の位相差によって周波数特性に深い谷が生じるコムフィルタリング現象が発生します。',
  },
  {
    type: 'list',
    items: [
      '<strong>時間アライメント:</strong> メインPAからの音波到達に合わせてサブスピーカーを遅延させます。',
      '<strong>コムフィルタ防止:</strong> 可聴帯域全体での位相打ち消しを排除します。',
      '<strong>ハース定位:</strong> 音像定位の意識をメインステージ上に保持します。',
      '<strong>サンプル精度:</strong> 出力マトリクス用の正確なデジタルサンプル数を提供します。',
    ],
    icon: 'mdi:check-circle',
  },
  {
    type: 'comparative',
    items: [
      {
        title: 'ダイレクトPAアライメント',
        description: '距離に相当する音の到達時間と完全に一致させる遅延設定',
        icon: 'mdi:target',
        points: ['完璧な位相コヒーレンス', 'インフィルスピーカーに最適', 'コムフィルタの完全排除'],
      },
      {
        title: 'ハースオフセットアライメント',
        description: '物理ディレイに5〜15msの先行音オフセットを追加',
        icon: 'mdi:music-clef-treble',
        points: ['ステージ上への自然な定位', '明瞭度および明瞭性の向上', 'ディレイタワーに最適'],
        highlight: true,
      },
    ],
    columns: 2,
  },
  {
    type: 'table',
    headers: ['音響補正シナリオ', '距離 (m)', '気温 (°C)', 'ディレイ時間 (ms)', 'サンプル数 (48kHz)'],
    rows: [
      ['劇場バルコニー・インフィル', '15 m', '22 °C', '43.5 ms', '2,090 サンプル'],
      ['屋内ホールコンサート', '25 m', '20 °C', '72.8 ms', '3,494 サンプル'],
      ['野外フェス・メインステージ', '40 m', '35 °C', '113.6 ms', '5,453 サンプル'],
      ['冬のナイトイベント', '50 m', '5 °C', '149.5 ms', '7,176 サンプル'],
    ],
  },
  {
    type: 'proscons',
    items: [
      {
        pro: 'デジタルミキサー向けサブミリ秒レベルのサンプル精度計算',
        con: '正確な物理距離の測定が必要',
      },
      {
        pro: '周囲気温および相対湿度を精密に反映',
        con: '屋外での風速・風向の変化には継続的な監視が必要',
      },
    ],
    proTitle: '利点',
    conTitle: '考慮事項',
  },
  {
    type: 'glossary',
    items: [
      {
        term: 'ハース効果',
        definition: '最初に到達した音の方向に人間の聴覚が意識を集中させる心理音響現象。',
      },
      {
        term: 'コムフィルタリング',
        definition: '元の信号と遅延信号が干渉し、周波数特性が櫛の歯状に乱れる現象。',
      },
      {
        term: 'サンプリングレート',
        definition: 'デジタルミキサーやDSPが1秒間に処理する音響データのサンプル数。',
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
  inLanguage: 'ja',
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

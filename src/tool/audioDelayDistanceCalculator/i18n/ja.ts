import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { AudioDelayUI } from '../ui';
import type { ToolLocaleContent, FAQItem, HowToStep } from '../../../types';

const slug = 'audio-delay-distance-calculator';
const title = '距離と温度によるオーディオディレイ計算機';
const description = 'PAディレイタワーの音響遅延時間、空気中の音速、位相オフセット、デジタルサンプル数、SPL減衰量を計算します。';

const ui: AudioDelayUI = {
  title: '距離と温度によるオーディオディレイ計算機',
  subtitle: 'PAディレイタワーの音波伝播遅延時間、音響位相オフセット、サンプル数、SPL減衰量を計算します。',
  unitSystemLabel: '単位系',
  unitMetric: 'メートル法 (m, °C)',
  unitImperial: 'ヤード・ポンド法 (ft, °F)',
  distanceLabel: 'ディレイスピーカーへの距離',
  temperatureLabel: '周囲気温',
  humidityLabel: '相対湿度',
  sampleRateLabel: 'コンソールサンプルレート',
  presetsTitle: 'クイックシーンプリセット',
  presetSummerFestival: '野外夏フェス (35°C, 40m)',
  presetIndoorConcert: '屋内ホールコンサート (20°C, 25m)',
  presetTheater: '音響ホール劇場 (22°C, 15m)',
  presetWinterOutdoor: '冬期屋外イベント (5°C, 50m)',
  resultDelayMs: '遅延時間',
  resultSamples: 'デジタルサンプル数',
  resultSpeed: '音速',
  resultSplLoss: 'SPL減衰量',
  phaseStatusLabel: '音響位相整合ステータス',
  statusDirectZone: '直接波同期',
  statusHaasZone: 'ハース効果ゾーン',
  statusEchoZone: '知覚可能エコーゾーン',
  statusExtremeZone: '重大なディレイ乖離',
  advicePhaseAligned: '信号は5ms以内で音響的に同期しています。最小限のディレイ調整で十分です。',
  adviceMinorHaas: '音はハースゾーン(5-35ms)内に到達します。自然な音像定位はメインステージに維持されます。',
  adviceHaasDelayNeeded: '分離したエコーの知覚を防ぐため、ディレイタワーに正確な時間オフセットが必要です。',
  adviceCriticalDelayNeeded: '大きなディレイオフセットです。コムフィルタリングを防ぐため正確なサンプルディレイを適用してください。',
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
    question: 'オーディオディレイの計算で気温が重要な理由は何ですか？',
    answer: '空気中の音速は気温に直接依存します。摂氏0度で音速は秒速331.3メートルですが、摂氏30度では約349メートルに加速します。周囲気温を無視すると位相打ち消しやコムフィルタリングが発生します。',
  },
];

const howTo: HowToStep[] = [
  {
    name: '物理的距離を測定',
    text: 'レーザー距離計を使用してメインPAとディレイタワー間の距離を測定します。',
  },
];

const seo: ToolLocaleContent<AudioDelayUI>['seo'] = [
  {
    type: 'summary',
    title: '音響ディレイ整合機能',
    items: [
      '気温と湿度に基づく正確な音速計算',
      'デジタルコンソールサンプル数への即時変換',
      'ハース効果ゾーンと位相整合の評価',
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

import type { FAQPage, HowTo, SoftwareApplication, WithContext } from 'schema-dts';
import type { ToolLocaleContent } from '../../../types';
import type { FilmDevelopmentTemperatureUI } from '../ui';
import { bibliography } from '../bibliography';

const ui: FilmDevelopmentTemperatureUI = {
  faqTitle: 'フィルム現像温度に関するよくある質問',
  bibliographyTitle: '主要参考資料',
  chooseDocumentedCombination: '公式データのあるフィルムと現像液の組み合わせを選択',
  filmLabel: '使用フィルム',
  developerLabel: '現像液',
  dilutionLabel: '希釈率',
  temperatureLabel: '現像液の温度',
  temperatureHelp: 'タンク内の現像液の実測温度を入力してください。ガイドは20 °Cの基準時間に基づきます。',
  unitSwitchLabel: '温度単位',
  metricLabel: '摂氏 °C',
  imperialLabel: '華氏 °F',
  currentReadingLabel: '暗室での実測値',
  baseTimeLabel: '20 °Cでの基準',
  adjustedTimeLabel: '補正後の現像開始時間',
  temperatureGuideLabel: '温度と時間の補正表',
  temperatureGuideHelp: '実測温度を中心とした実用的な時間ガイド。ハイライト表示の行が現在の入力値です。',
  sourceLabel: '確認済みデータソース',
  eiLabel: '設定感度 EI',
  statusCool: '低温処理',
  statusSteady: '標準温度付近',
  statusWarm: '高温処理',
  warningShortTime: '現像時間が5分未満の場合、ムラが発生しやすくなります。公式ガイドに従うか、ご自身でテストした工程で調整してください。',
  warningOutOfRange: '推奨温度範囲の限界付近です。現像液の温度を安定させ、メーカーの技術仕様を確認してください。',
  guideNotice: 'この結果はあくまで開始の目安です。攪拌方法、タンクの形状、目標コントラスト、作業環境により結果は変化します。',
  resetLabel: '最初の標準設定に戻す',
  minutesLabel: '分',
  secondsLabel: '秒',
  currentBadge: '現在値',
  belowFiveMinutes: '5分未満の注意警告',
  tableTemperature: '温度',
  tableTime: '目安時間',
  tableDifference: '20 °Cからの差',
  currentRow: '現在値',
};

const softwareApplication: WithContext<SoftwareApplication> = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: '温度別フィルム現像時間計算ツール',
  applicationCategory: 'UtilitiesApplication',
  operatingSystem: 'Web',
  description: '実測した現像液の温度に合わせて、モノクロフィルムの現像時間を補正計算します。',
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
};

const faqPage: WithContext<FAQPage> = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'この計算ツールはどの温度を基準にしていますか？', acceptedAnswer: { '@type': 'Answer', text: 'メーカーが規定する20 °Cでの標準現像時間を基準として、実測温度に応じた時間の補正を行っています。' } },
    { '@type': 'Question', name: '計算された時間は完全に保証されますか？', acceptedAnswer: { '@type': 'Answer', text: 'いいえ。あくまで実験や現像作業のスタートラインとなる目安時間です。攪拌の強さやタンクの性質によって仕上がりは変わります。' } },
    { '@type': 'Question', name: 'なぜ5分未満の時間で警告が表示されるのですか？', acceptedAnswer: { '@type': 'Answer', text: '現像時間が短すぎると、現像液の注入や排出にかかる時間の割合が大きくなり、現像ムラが生じやすくなるためです。' } },
    { '@type': 'Question', name: '使いたいフィルムや現像液がリストにない場合はどうすればよいですか？', acceptedAnswer: { '@type': 'Answer', text: 'フィルムおよび現像液メーカーの公式テクニカルデータシートや信頼できる現像データ表を参照してください。' } },
  ],
};

const howTo: WithContext<HowTo> = {
  '@context': 'https://schema.org',
  '@type': 'HowTo',
  name: '温度に応じてフィルム現像時間を補正手順',
  step: [
    { '@type': 'HowToStep', name: 'フィルムを選択', text: '現像タンクにセットしたモノクロフィルムの種類を選択します。' },
    { '@type': 'HowToStep', name: '現像液と希釈率を一致させる', text: '使用する現像液と指定の希釈率を選択します。' },
    { '@type': 'HowToStep', name: '液温を計測して入力', text: '現像作業を始める直前に、現像液の実際の温度を計測して入力します。' },
    { '@type': 'HowToStep', name: '補正時間を確認', text: '計算された補正時間をベースにして、暗室での現像タイマーを設定します。' },
  ],
};

export const content: ToolLocaleContent<FilmDevelopmentTemperatureUI> = {
  slug: 'film-development-time-temperature-compensation-calculator',
  title: '温度別フィルム現像時間計算ツール',
  description: '実測した現像液の温度に合わせて、モノクロフィルムの現像時間を補正計算し、明確な温度別参考リストを表示します。',
  ui,
  seo: [
    { type: 'title', level: 2, text: '現像液の温度変化に応じた現像時間の計算と補正方法' },
    { type: 'paragraph', html: 'データ表から正確なフィルム、現像液、希釈率の組み合わせを選び、準備した現像液の実測温度を入力します。本ツールはメーカー標準の20 °Cにおける現像時間をベースに、現在の温度に最適な補正時間を算出します。' },
    { type: 'title', level: 3, text: '算出された補正時間を最適なスタートラインとして活用する' },
    { type: 'paragraph', html: '温度の変化は化学反応の速度に直接影響を与えます。液温が高い場合は現像時間が短くなり、低い場合は時間が長く必要になります。補正表を確認することで、前後温度での現像時間の変化傾向を一目で把握できます。' },
    { type: 'tip', title: '暗室作業の再現性を高く保つための注意点', html: '計算結果の時間を絶対的な答えとして過信しないでください。攪拌のリズム、現像液の新鮮さ、希望するネガのコントラストなど、個人のプロセス調整が重要です。' },
    { type: 'title', level: 3, text: '公式に確認された現像データを基準にする理由' },
    { type: 'list', items: ['フィルムと現像液の組み合わせによって、粒子感、解像度、実効感度が決まります。', '希釈率が変わると反応速度が変化するため、他の希釈率から単純計算で推測することは推奨されません。', '5分未満の現像時間は液の注排出し時間の影響を受けやすいため、十分な注意が必要です。'] },
  ],
  faq: [
    { question: 'この計算ツールはどの温度を基準にしていますか？', answer: 'メーカーが規定する20 °Cでの標準現像時間を基準として、実測温度に応じた時間の補正を行っています。' },
    { question: '計算された時間は完全に保証されますか？', answer: 'いいえ。あくまで実験や現像作業のスタートラインとなる目安時間です。攪拌の強さやタンクの性質によって仕上がりは変わります。' },
    { question: 'なぜ5分未満の時間で警告が表示されるのですか？', answer: '現像時間が短すぎると、現像液の注入や排出にかかる時間の割合が大きくなり、現像ムラが生じやすくなるためです。' },
    { question: '使いたいフィルムや現像液がリストにない場合はどうすればよいですか？', answer: 'フィルムおよび現像液メーカーの公式テクニカルデータシートや信頼できる現像データ表を参照してください。' },
  ],
  bibliography,
  howTo: [
    { name: 'フィルムを選択', text: '現像タンクにセットしたモノクロフィルムの種類を選択します。' },
    { name: '現像液と希釈率を一致させる', text: '使用する現像液と指定の希釈率を選択します。' },
    { name: '液温を計測して入力', text: '現像作業を始める直前に、現像液の実際の温度を計測して入力します。' },
    { name: '補正時間を確認', text: '計算された補正時間をベースにして、暗室での現像タイマーを設定します。' },
  ],
  schemas: [softwareApplication, faqPage, howTo],
};

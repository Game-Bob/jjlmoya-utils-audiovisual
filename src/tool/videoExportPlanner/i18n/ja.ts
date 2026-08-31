import { bibliography } from '../bibliography';
import { createSchemas } from '../schema';
import type { VideoExportPlannerLocaleContent } from '../entry';
import type { VideoExportPlannerUI } from '../ui';

const ui: VideoExportPlannerUI = {
  workflowHint: '画質、音声、再生時間を設定します。下のデータリールが選択内容を書き出し見積もりに変換します。',
  presetLabel: 'プリセットから開始',
  presetYoutube: 'YouTube SDR',
  presetSocial: 'ソーシャル 1080p 60',
  presetMaster: '4K マスター納品',
  sourceSettingsTitle: '書き出し設定',
  resolutionLabel: 'フレームサイズ',
  frameRateLabel: 'フレームレート',
  codecLabel: 'ビデオコーデック',
  durationLabel: '番組の長さ',
  minutesUnit: '分',
  videoBitrateLabel: '映像ビットレート',
  audioBitrateLabel: '音声ビットレート',
  overheadLabel: 'コンテナオーバーヘッド',
  selectedOutputTitle: '選択された書き出し',
  estimatedFileSizeLabel: '推定ファイルサイズ',
  totalDataRateLabel: '合計データレート',
  videoDataLabel: '映像ストリーム',
  audioDataLabel: '音声ストリーム',
  containerOverheadLabel: 'コンテナオーバーヘッド',
  dataReelLabel: '時間の経過に伴う書き出し推移を示すデータリール',
  comparisonTitle: 'コーデック別基準値',
  codecColumn: 'コーデック',
  suggestedVideoColumn: '推奨映像レート',
  estimatedSizeColumn: '推定サイズ',
  planningNote: 'コーデック行は容量計画の目安であり、同等画質を保証するものではありません。',
  statusReady: '計算可能',
  statusCheck: '強調された項目を確認してください',
  warningDuration: 'ファイルを計算するには0より大きい時間を入力してください。',
  warningVideoBitrate: '解像度に対して映像ビットレートが低すぎます。圧縮ノイズを確認してください。',
  warningAudioBitrate: '音声ビットレートが推奨値を超えています。容量増加が意図的か確認してください。',
  warningOverhead: 'コンテナのオーバーヘッドが大きいです。容量を確保する前にメタデータを検証してください。',
  resolution480: '480p 854 x 480',
  resolution720: '720p 1280 x 720',
  resolution1080: '1080p 1920 x 1080',
  resolution1440: '1440p 2560 x 1440',
  resolution2160: '4K 3840 x 2160',
  codecH264: 'H.264 AVC',
  codecH265: 'H.265 HEVC',
  codecAv1: 'AV1',
  faqTitle: '動画書き出しプランナーに関するFAQ',
  bibliographyTitle: '出典',
};

const faq = [
  { question: '推定動画ファイルサイズはどのように計算されますか？', answer: '映像ビットレートと音声ビットレートを合計し、再生時間を掛け合わせた後にコンテナのオーバーヘッド率を加算します。' },
  { question: 'コーデック比較表の基準値が異なるのはなぜですか？', answer: 'H.264、H.265、AV1は同じ映像素材に対して圧縮効率が異なるためです。' },
  { question: '推奨ビットレートは必須条件ですか？', answer: 'いいえ。エンコード前のテスト用参考値としてご活用ください。' },
  { question: '投稿サイトにアップロードした後のサイズも予測できますか？', answer: 'プラットフォーム側で再エンコードされる前のファイルサイズを推定します。' },
];

const howTo = [
  { name: '納品フォーマットを選択', text: '編集タイムラインに合わせたフレームサイズとフレームレートを選択します。' },
  { name: 'コーデックとビットレートを選択', text: '使用するコーデックを選択し、映像および音声のビットレートを入力します。' },
  { name: '時間とオーバーヘッドを設定', text: '再生時間を分単位で入力し、コンテナのオーバーヘッド分を確保します。' },
  { name: '比較して容量を確保', text: '計算されたサイズを確認し、書き出し用ストレージを確保します。' },
];

const seo = [
  { type: 'summary' as const, title: '動画書き出し前にストレージ容量を計画', items: ['再生時間とビットレートからファイルサイズを推定', 'H.264、H.265、AV1のシナリオ比較', '映像・音声・コンテナの各要素を分離計算', 'プラットフォーム側の再圧縮を含まない正確な事前計算'] },
  { type: 'title' as const, text: '書き出し計算結果の読み方', level: 2 as const },
  { type: 'paragraph' as const, html: '動画書き出しは時間の経過に伴うビットストリームです。映像と音声のビットレートを合算し、全体のファイルサイズをバイト単位で算出します。' },
  { type: 'title' as const, text: '初期ビットレートの選び方', level: 2 as const },
  { type: 'paragraph' as const, html: '投稿先プラットフォームの推奨スペックを参考に設定してください。全体の書き出し前に必ず短いテスト動画で画質を確認しましょう。' },
  { type: 'list' as const, items: ['フレームレートを元素材に合わせる', 'Mbpsとkbpsの違いに注意する', '中間レンダーやバックアップ用の余剰容量を確保する', '実際の再生サイズでテストサンプルを確認する'] },
  { type: 'title' as const, text: 'コーデック比較表の活用方法', level: 2 as const },
  { type: 'paragraph' as const, html: 'コーデック比較表はストレージ計画のための目安です。実際のサイズは映像の複雑さや動きの激しさによって変動します。' },
  { type: 'tip' as const, title: '計算ツール利用上の注意', html: '計算結果は最終的な画質を保証するものではありません。本書き出し前にテストサンプルで確認してください。' },
];

const title = '動画書き出しビットレート・ファイルサイズ計算ツール';
const description = '動画の再生時間とビットレートから書き出しサイズを推定し、H.264、H.265、AV1のコーデック別参考値を比較します。';

export const content: VideoExportPlannerLocaleContent = {
  slug: 'video-export-bitrate-file-size-planner', title, description, ui, seo, faq, bibliography, howTo,
  schemas: createSchemas({ title, description, faq, howTo, language: 'ja' }),
};

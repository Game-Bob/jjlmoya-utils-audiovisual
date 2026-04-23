import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { SubtitleSyncUI, SubtitleSyncLocaleContent } from '../index';

const slug = 'synchronize-srt-subtitles-online-adjust-timing-free';
const title = 'SRT字幕オンライン同期：無料でタイミング調整';
const description = 'SRT字幕を早めたり遅らせたりするためのオンラインツール。時間のズレを簡単に修正し、同期されたファイルをすぐにダウンロードできます。';

const ui: SubtitleSyncUI = {
    dropTitle: ".SRTファイルをここにドラッグ",
    dropSubtitle: "またはクリックして選択",
    adjustTitle: "時間を調整",
    offsetLabel: "オフセット（秒）",
    offsetHelp: "早める場合は負の値（例：-1.5）、遅らせる場合は正の値を使用します。",
    linesStat: "行数",
    firstStat: "最初の字幕",
    lastStat: "最後の字幕",
    originalLabel: "オリジナル",
    resultLabel: "結果",
    downloadButton: "修正済みをダウンロード",
    previewBadge: "プレビュー",
    unitSeconds: "秒"
};

const faq: SubtitleSyncLocaleContent['faq'] = [
    {
        question: "音声が先に聞こえる場合、どうやって字幕を同期させればいいですか？",
        answer: "音ダイがテキストよりも先に聞こえる場合は、字幕を遅らせる必要があります。本ツールで正の値（例：2秒遅らせるなら 2.0）を入力してください。",
    },
    {
        question: "対応しているファイル形式は何ですか？",
        answer: "現在は.SRT（SubRip）形式に最適化されています。これは動画プレイヤーや配信プラットフォームで最も一般的な標準形式です。",
    },
    {
        question: "字幕ファイルをアップロードしても安全ですか？",
        answer: "はい。処理はすべてお使いのデバイス上でローカルに行われます。ファイルがサーバーに送信されることはなく、同期作業はブラウザ内で完結します。",
    },
    {
        question: "ファイルの一部だけを同期できますか？",
        answer: "いいえ。このツールはファイル全体に一定のオフセットを適用します。ズレが徐々に大きくなる（累進的）場合は、より高度な編集ソフトが必要になることがあります。",
    },
];

const howTo: SubtitleSyncLocaleContent['howTo'] = [
    {
        name: "SRTファイルをアップロード",
        text: "修正したい字幕ファイルをアップロードエリアにドラッグします。",
    },
    {
        name: "ズレを確認",
        text: "お使いの再生ソフトで、音声に対して字幕がどれだけ遅れているか、あるいは早まっているかを確認します。",
    },
    {
        name: "オフセットを調整",
        text: "コントロールパネルで、遅らせる（正の値）か早める（負の値）秒数を入力します。",
    },
    {
        name: "ファイルをダウンロード",
        text: "プレビューで時間が正しいことを確認し、ダウンロードをクリックして新しいSRTファイルを取得します。",
    },
];

const seo: SubtitleSyncLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'プロフェッショナルな字幕同期',
        items: [
            '音声と字幕のズレを即座に修正',
            '標準的なSRT (SubRip) ファイルに対応',
            '100% ローカル処理によりプライバシーを最大化',
            'インストール不要、登録不要、完全無料'
        ]
    },
    { type: 'title', text: '完璧なSRT字幕の同期を実現', level: 2 },
    { type: 'paragraph', html: '視聴者にとって、声と一致しないセリフほどストレスを感じるものはありません。字幕のズレは通常、動画バージョンの違い（フレームレートの変動、広告の挿入、制作ロゴの有無、圧縮率の変化など）によって発生します。このツールを使えば、数秒で問題を解決できます。' },

    { type: 'stats', items: [
        { value: '100%', label: 'ローカル処理', icon: 'mdi:shield' },
        { value: 'ミリ秒単位', label: '高精度', icon: 'mdi:clock-outline' },
        { value: '制限なし', label: 'ファイルサイズ不問', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: '「早める」か「遅らせる」か：実践ガイド', level: 3 },
    { type: 'paragraph', html: '最初のステップは、ズレの種類を正しく特定することです。論理は以下の通りです：' },
    { type: 'list', items: [
        '<strong>遅らせる (正の値):</strong> 音より先にテキストが出る場合。字幕が早すぎます。例：+2.0秒',
        '<strong>早める (負の値):</strong> 音の後にテキストが出る場合。字幕が遅れています。例：-2.0秒',
        '<strong>テストと調整:</strong> まずは小さな単位（0.5秒など）から始め、プレビューを使って確認してください。'
    ], icon: 'mdi:arrow-right' },

    { type: 'card', title: 'プロフェッショナル・プライバシー', html: 'クライアントサイドのJavaScriptでファイルを処理するため、字幕の内容があなたのコンピュータから外部へ漏れることはありません。機密情報を扱う翻訳者や、NDA（守秘義務契約）下のプロフェッショナルの方にも安心してお使いいただけます。' },

    { type: 'title', text: '主なユースケース', level: 3 },
    { type: 'comparative', items: [
        {
            title: '翻訳者・字幕制作の方',
            description: '複数の動画バージョンに合わせて翻訳タイミングを一括同期',
            icon: 'mdi:translate',
            points: [
                '異なるソース由来のSRTファイル',
                '劇場版と配信版などのバージョン管理',
                'ツールを切り替えずに迅速な納品'
            ]
        },
        {
            title: 'コンテンツ制作の方',
            description: '異なるフレームレートで書き出された動画に既存字幕を合わせる',
            icon: 'mdi:video',
            points: [
                '既存字幕の再利用',
                '解像度変更（720pから1080p）への対応',
                '数千行の手動調整作業を回避'
            ],
            highlight: true
        },
        {
            title: '一般ユーザーの方',
            description: 'ダウンロードした字幕が動画と少しズレている場合の修正',
            icon: 'mdi:account',
            points: [
                '汎用的な字幕の同期ずれ',
                'リージョン違い（PALとNTSCなど）',
                '編集が加えられた配信版への対応'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'なぜ字幕がズレるのか', level: 3 },
    { type: 'table', headers: ['主な原因', '技術的背景', '解決策'], rows: [
        ['フレームレートの差', '23.976 fps vs 25 fps - 累積的なズレ', '一定のオフセット調整（本ツール）'],
        ['編集内容の差', '広告カットや追加シーンの有無', '手動計算 ＋ 部分同期'],
        ['リージョン版の違い', 'PAL（欧州25fps） vs NTSC（米国29.97fps）', '単純な数学的オフセット調整'],
        ['解像度の変更', '処理速度の異なる再エンコード', 'オリジナルファイルの再計算']
    ] },

    { type: 'diagnostic', variant: 'info', title: '考慮すべき技術的制限', icon: 'mdi:information', badge: '重要', html: 'このツールはファイル全体に<strong>一定</strong>のオフセットを適用します。もしズレが<strong>累進的</strong>（最初は合っているが徐々にズレていく）な場合は、フレームレートの根本的な違いを示しています。その場合は、プロ用の編集ソフトでファイルを再処理する必要があります。' },

    { type: 'proscons', items: [
        {
            pro: '超高速 - 大容量ファイルも数ミリ秒で処理',
            con: '固定されたズレのみ対応（徐々に広がるズレには非対応）'
        },
        {
            pro: '完全なプライバシー - 内容がブラウザ外に出ることはありません',
            con: 'JavaScriptが有効な最新のブラウザが必要'
        },
        {
            pro: '汎用性 - あらゆる標準的なSRTに対応',
            con: '他の形式（ASS, VTT, SCC等）には非対応'
        },
        {
            pro: '完全無料、広告なし、追跡なし',
            con: '変更履歴やバージョン管理機能はありません'
        }
    ], proTitle: 'メリット', conTitle: '制限' },

    { type: 'glossary', items: [
        {
            term: 'SRT (SubRip)',
            definition: '最も汎用的な字幕形式。番号、時間（hh:mm:ss,mmm）、テキストで構成されるテキストファイル。再生ソフト等の事実上の標準。'
        },
        {
            term: 'オフセット (Offset)',
            definition: 'ファイル内のすべての時間に加算または減算される一定の時間量。正の秒数（遅延）または負の秒数（前進）。'
        },
        {
            term: 'フレームレート (fps)',
            definition: '1秒あたりの静止画数。24p（映画）、25p（PAL/欧州）、29.97p（NTSC/米国）、60p（滑らかな動画）。この差が累積的なズレの原因になります。'
        },
        {
            term: 'NTSC vs PAL',
            definition: '放送方式の地域規格。PAL（25 fps）、NTSC（29.97 fps）。速度に約4％の差があります。'
        },
        {
            term: '累進的なズレ (Progressive Offset)',
            definition: '最初は合っているが、時間の経過とともにズレが大きくなる現象。フレームレートの設定違いが原因。'
        }
    ] },

    { type: 'message', title: '完全なコントロールを備えたプロの編集', ariaLabel: '同期に関する技術情報', html: '私たちの手法はシンプルかつ強力です。一つのオフセットを即座に適用し、100% ブラウザ内で処理します。クラウドも、ストレージも、追跡もありません。アップロードして調整し、ダウンロードするだけ。あなたのコンテンツを完璧にコントロールできます。' },

    { type: 'title', text: '結論：中断のない映画体験を', level: 3 },
    { type: 'paragraph', html: '高品質な視聴体験には、完璧な字幕同期が不可欠です。このツールを使えば、高価なソフトや複雑な操作なしで、ストレスの多い体験を完璧な映画の時間へと変えることができます。' }
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

export const content: SubtitleSyncLocaleContent = {
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

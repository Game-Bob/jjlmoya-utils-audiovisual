import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ImageCompressorUI, ImageCompressorLocaleContent } from '../index';

const slug = 'online-image-compressor-reduce-file-size-no-quality-loss';
const title = 'オンライン画像圧縮ツール：画質を落とさずにファイルサイズを削減';
const description = 'JPG、PNG、WebP形式の写真を無料で最適化および圧縮。ファイルサイズを削減して、ウェブサイトの読み込み速度をローカルで向上させます。';

const ui: ImageCompressorUI = {
    dropTitle: "画像を最適化",
    dropSubtitle: "写真をドラッグして、瞬時にファイルサイズを削減します。",
    settingsTitle: "圧縮設定",
    qualityLabel: "視覚的画質",
    widthLabel: "最大幅（ピクセル）",
    convertToWebpLabel: "WebPに変換",
    compressionLabel: "圧縮",
    compressBtn: "画像を圧縮",
    processingLabel: "処理中...",
    resultsTitle: "最適化された画像",
    originalSizeLabel: "元のサイズ",
    newSizeLabel: "新しいサイズ",
    reductionLabel: "削減量",
    downloadBtn: "ダウンロード",
    addMoreBtn: "さらに追加",
    browseFilesBtn: "ファイルを選択",
    processedFilesTitle: "処理済みファイル",
    downloadAllBtn: "一括ダウンロード",
    adjustThisImage: "この画像を調整",
    downloadTitle: "ダウンロード",
    maxWidthLabel: "最大幅 (px)",
    closeBtn: "閉じる",
    totalSavingsLabel: "合計削減量",
    noSavings: "削減なし",
    faqTitle: "よくある質問": "リファレンス"
};

const faq: ImageCompressorLocaleContent['faq'] = [
    {
        question: "ロスレス（無劣化）圧縮はどのように機能しますか？",
        answer: "不要なメタデータを削除し、ピクセルエンコーディングを最適化するアルゴリズムを使用しています。WebPを選択すると、従来の形式よりも高度な圧縮技術が使用されます。",
    },
    {
        question: "画像はサーバーにアップロードされますか？",
        answer: "いいえ。すべての処理はブラウザ内で100%行われます（クライアントサイド）。写真はコンピュータの外に出ることはなく、絶対的なプライバシーが保証されます。",
    },
    {
        question: "なぜWebPに変換すべきなのですか？",
        answer: "WebPはウェブの現代的な標準形式です。JPGやPNGよりも優れた画質を保ちながら、ファイルサイズを最大30%削減でき、ページの読み込み速度を向上させます。",
    },
];

const howTo: ImageCompressorLocaleContent['howTo'] = [
    {
        name: "画像をアップロード",
        text: "圧縮したいファイル（JPG、PNG、またはWebP）をアップロードします。",
    },
    {
        name: "画質を調整",
        text: "スライダーを使用して、ファイルサイズと視覚的画質の完璧なバランスを見つけます（推奨：75〜85%）。",
    },
    {
        name: "リサイズ（任意）",
        text: "画像が非常に大きい場合は、最大幅を指定して解像度を下げることができます。",
    },
    {
        name: "結果をダウンロード",
        text: "ダウンロードボタンを押して、最適化された画像を取得し、すぐに使用できるようにします。",
    },
];

const seo: ImageCompressorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'プロフェッショナルなウェブ画像最適化',
        items: [
            '高度なJPG、PNG、WebP圧縮',
            '視覚的画質を維持しつつ、サイズを50〜80%削減',
            '100%ローカル処理 - プライバシーを保証',
            'Core Web VitalsとSEO順位の向上'
        ]
    },
    { type: 'title', text: '画像最適化：ウェブ速度とCore Web Vitals', level: 2 },
    { type: 'paragraph', html: 'デジタル環境において、遅いウェブサイトはユーザーを失います。最適化されていない画像は、ウェブページの総容量の60〜70%を占めます。画像の最適化は、Googleの指標（LCP、CLS）と検索結果の順位を向上させるための第一歩です。' },

    { type: 'stats', items: [
        { value: '50-80%', label: '一般的な削減量', icon: 'mdi:trending-down' },
        { value: '100%', label: 'ローカルプライバシー', icon: 'mdi:lock' },
        { value: '+30%', label: 'JPGより高速', icon: 'mdi:speedometer' }
    ], columns: 3 },

    { type: 'title', text: '圧縮形式の解説', level: 3 },
    { type: 'table', headers: ['形式', '圧縮方法', '用途', '互換性'], rows: [
        ['JPEG', '非可逆 50-90%', '写真、編集コンテンツ', 'ユニバーサル (100%)'],
        ['PNG', '可逆 30-50%', 'グラフィックス、ロゴ、透過画像', 'ユニバーサル (100%)'],
        ['WebP', '非可逆/可逆 さらに25-35%削減', '現代のウェブ、SNS', '95%の現代のブラウザ'],
        ['AVIF', '非可逆/可逆 さらに20%向上', '次世代ウェブ', '最新ブラウザのみ']
    ] },

    { type: 'card', title: 'WebPが未来である理由', html: 'Googleはウェブ向けにWebPを開発しました。JPEGやPNGよりも優れた圧縮を提供しつつ、視覚的画質を維持または向上させます。同等のJPEGよりも25〜35%軽量です。現代のブラウザの95%が対応しています。' },

    { type: 'title', text: '非可逆圧縮 vs 可逆圧縮', level: 3 },
    { type: 'comparative', items: [
        {
            title: '非可逆圧縮 (Lossy)',
            description: 'JPG, WebP - 人の目には見えない視覚情報を削除',
            icon: 'mdi:compress',
            points: [
                '元のサイズの70〜90%を削減',
                '画質が75%以上に保たれていれば、人の目には判別不能',
                '実写写真に最適',
                'ロゴや鮮明なテキストには不向き'
            ],
            highlight: true
        },
        {
            title: '可逆圧縮 (Lossless)',
            description: 'PNG, WebPロスレス - 100%の視覚データを維持',
            icon: 'mdi:shield',
            points: [
                'サイズを20〜50%削減',
                '劣化のない完璧な画質',
                'グラフィックス、ロゴ、透過画像に最適',
                '非可逆圧縮よりもファイルサイズは大きくなる'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'SEOとコンバージョンへの影響', level: 3 },
    { type: 'list', items: [
        '<strong>Core Web Vitals:</strong> Googleは遅いサイトを評価しません。最適化された画像はLCP（Largest Contentful Paint）を直接改善します。',
        '<strong>直帰率:</strong> 1秒の遅延で直帰率が7%増加します。高速な画像表示はユーザー離脱を防ぎます。',
        '<strong>検索順位:</strong> 速度はランキング要因です。画像最適化はSEO順位を押し上げます。',
        '<strong>コンバージョン:</strong> 読み込みが速いほど、コンバージョン率は向上します。最適化によりコンバージョンが10%向上するという研究結果もあります。'
    ], icon: 'mdi:check' },

    { type: 'proscons', items: [
        {
            pro: '完全なプライバシー：サーバー不要の100%ローカル処理',
            con: 'Canvas APIをサポートするブラウザが必要（主要ブラウザはすべて対応）'
        },
        {
            pro: 'WebPは同じ画質でもJPEGより25〜35%軽量',
            con: '古いSafariやIEはWebP非対応（代替手段あり）'
        },
        {
            pro: '複数画像の即時処理',
            con: '非常に大きな画像（50MB以上）は処理に時間がかかる場合があります'
        },
        {
            pro: '任意のリサイズ機能：圧縮に加えて解像度の縮小も可能',
            con: 'リサイズは情報を失います - 元の解像度で最適化するのがベストです'
        }
    ], proTitle: 'メリット', conTitle: '制限事項' },

    { type: 'diagnostic', variant: 'warning', title: '注意：過度な圧縮は画質を損なう', icon: 'mdi:alert', badge: '画質', html: '写真は75%以上、文字を含む画像は85%以上の画質を維持してください。それ以下になると、圧縮ノイズ（ブロックノイズや色にじみ）が目立つようになります。サムネイルで綺麗に見えても、拡大すると劣化している場合があります。' },

    { type: 'glossary', items: [
        {
            term: '非可逆圧縮 (Lossy)',
            definition: '人の目が「ノイズ」として認識する視覚データを取り除きます。写真に最適です。JPEGやWebPの非可逆モードが該当します。'
        },
        {
            term: '可逆圧縮 (Lossless)',
            definition: '視覚情報を一切失わずにサイズを削減します。PNGやWebPのロスレスモードが該当します。ロゴや図解に最適です。'
        },
        {
            term: 'Core Web Vitals (Google)',
            definition: 'ユーザー体験を測る指標。LCP（読み込み速度）、FID（応答性）、CLS（視覚的安定性）があり、SEOに影響します。'
        },
        {
            term: 'WebP',
            definition: 'Googleが開発した次世代画像形式。JPEGより25〜35%軽量。IE以外の主要な現代ブラウザでサポートされています。'
        },
        {
            term: '圧縮ノイズ (Artifacts)',
            definition: '過度な圧縮によって生じる画像の乱れ（斑点、色の縞模様、輪郭のボケ）。画質75%以上ではほとんど目立ちません。'
        }
    ] },

    { type: 'message', title: 'プロフェッショナルなウェブ最適化', ariaLabel: 'SEOのための画像最適化に関する情報', html: '画像圧縮は単なる技術的なこだわりではなく、ユーザー体験とGoogle順位への直接的な投資です。モバイルでは数キロバイトの差が重要になります。かつては高価なプロ用ソフトを必要とした処理が、このツールによりわずか3クリックで無料で行えます。' },

    { type: 'title', text: '現代のウェブ環境への対応', level: 3 },
    { type: 'paragraph', html: '高度な圧縮技術とWebP形式を活用して、高速でレスポンシブな、検索に強いサイトを実現しましょう。プロ仕様の品質を保ち、最小限の容量で、瞬時に読み込まれる体験を。' }
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

export const content: ImageCompressorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "よくある質問",
    faq: "リファレンス",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

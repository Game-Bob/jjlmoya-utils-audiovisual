import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoFrameExtractorUI, VideoFrameExtractorLocaleContent } from '../index';

const slug = 'online-video-frame-extractor-capture-hd-stills';
const title = 'ビデオフレーム抽出：HD静止画キャプチャ';
const description = 'ビデオから特定の瞬間をフレーム単位で正確に抽出。HD品質の画像をブラウザ上で安全かつ無料でキャプチャできます。';

const ui: VideoFrameExtractorUI = {
    uploadTitle: "ビデオファイルをアップロード",
    uploadFormats: "MP4, WebM, MOV, または MKV (最大 500MB)",
    privacyNote: "ビデオはインターネットに送信されず、ブラウザ内でローカルに処理されます。",
    playLabel: "再生",
    pauseLabel: "一時停止",
    captureBtn: "フレームをキャプチャ",
    prevFrame: "-1F",
    nextFrame: "+1F",
    batchTitle: "自動書き出し",
    batchEvery: "間隔：",
    batchStart: "連続抽出開始",
    batchProcessing: "抽出中...",
    galleryTitle: "キャプチャ済みフレーム",
    galleryEmpty: "キャプチャした画像がここに表示されます。",
    downloadAll: "一括ダウンロード",
    downloadHD: "HD画像をダウンロード",
    resetBtn: "別のビデオを読み込む"
};

const faq: VideoFrameExtractorLocaleContent['faq'] = [
    {
        question: "長いビデオからフレームを抽出できますか？",
        answer: "はい、ブラウザがビデオを読み込むのに十分なRAM（メモリ）を持っていれば可能です。最適なパフォーマンスのために500MB以下のファイルを推奨しています。",
    },
    {
        question: "保存される画像の解像度はどのくらいですか？",
        answer: "元のビデオのネイティブ解像度でキャプチャされます。4Kビデオであれば、高品質な4Kイメージを抽出できます。",
    },
];

const howTo: VideoFrameExtractorLocaleContent['howTo'] = [
    {
        name: "ビデオをアップロード",
        text: "デバイスからビデオファイルを選択します。外部サーバーには一切アップロードされません。",
    },
    {
        name: "正確な瞬間へ移動",
        text: "タイムラインバーまたは±1フレームボタンを使用して、秒単位以下の精度で調整します。",
    },
    {
        name: "フレームをキャプチャ",
        text: "キャプチャボタンを押して、下のギャラリーに画像を保存します。",
    },
    {
        name: "高品質でダウンロード",
        text: "個別の画像またはセッション全体を最適化されたWebP形式でダウンロードします。",
    },
];

const bibliography: VideoFrameExtractorLocaleContent['bibliography'] = [
    {
        name: "Capturing frames with HTML5 Video API",
        url: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video",
    },
];

const seo: VideoFrameExtractorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'プロフェッショナルなビデオフレーム抽出',
        items: [
            '特定の瞬間を逃さない±1フレーム単位の超精密キャプチャ',
            'MP4, WebM, MOV, MKVに対応 (最大500MB)',
            'ビデオ本来の解像度を維持 (SD, HD, 4K対応)',
            '指定した間隔での自動バッチ抽出機能'
        ]
    },
    { type: 'title', text: 'フレーム抽出：映像の一瞬を切り取る', level: 2 },
    { type: 'paragraph', html: '時には一枚の画像が千の言葉よりも雄弁に語ることがあります。プロ用の編集ソフトを使わずに、ブラウザの処理能力を活用して正確なフレームを抽出しましょう。' },

    { type: 'stats', items: [
        { value: '±1', label: '1フレーム単位の精度', icon: 'mdi:target' },
        { value: '100%', label: 'ネイティブ解像度', icon: 'mdi:video-high-definition' },
        { value: '500MB', label: '対応ファイル容量', icon: 'mdi:file-video' }
    ], columns: 3 },

    { type: 'title', text: 'プロフェッショナルな活用シーン', level: 3 },
    { type: 'comparative', items: [
        {
            title: '映像制作・写真',
            description: '構図の確認やリファレンスとして抽出',
            icon: 'mdi:film',
            points: [
                'プロモーション用のスチル素材',
                'シーン構図の資料作成',
                'コマ送りによる詳細分析'
            ]
        },
        {
            title: 'SNS・Webコンテンツ',
            description: 'サムネイルやカバー画像の作成',
            icon: 'mdi:youtube',
            points: [
                '高解像度なYouTubeサムネイル',
                'SNS投稿用カバー画像',
                'プレゼン資料用のキャプチャ'
            ],
            highlight: true
        },
        {
            title: '技術資料・教育',
            description: 'チュートリアルやデモ動画の図解作成',
            icon: 'mdi:book-open',
            points: [
                '操作手順のステップ画像',
                '動作確認用の視覚的エビデンス',
                'リアルタイム動作分析'
            ]
        },
        {
            title: 'スポーツ分析',
            description: '最も重要なアクションの瞬間を捉える',
            icon: 'mdi:dumbbell',
            points: [
                'フォームのコマ送りチェック',
                '決定的な瞬間の保存',
                '動作解析'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '対応ビデオフォーマット', level: 3 },
    { type: 'table', headers: ['フォーマット', '拡張子', '互換性', '備考'], rows: [
        ['MPEG-4', 'MP4', '汎用性（100%）', '最も普及している形式'],
        ['WebM', 'WebM', 'モダンブラウザ', '優れた圧縮効率'],
        ['QuickTime', 'MOV', 'Safari等', 'Apple系標準'],
        ['Matroska', 'MKV', 'モダンブラウザ', '高機能コンテナ形式']
    ] },

    { type: 'card', title: '1フレーム単位の超精密操作', html: '1コマだけ進める、戻すといった操作は、完璧な一瞬を捉えるために不可欠です。秒間24～60コマの映像から、狙った瞬間を逃さずコントロールできます。' },

    { type: 'proscons', items: [
        {
            pro: '完全なプライバシー：映像は100%ローカル（ブラウザ内）で処理',
            con: 'お使いのデバイスのRAM容量に依存（500MB以下を推奨）'
        },
        {
            pro: '解像度劣化なし：再圧縮なしでSD, HD, 4Kを維持',
            con: 'HTML5 Videoに対応したモダンブラウザが必要'
        },
        {
            pro: '指定間隔での一括抽出が可能',
            con: '複雑な編集（カットや結合）には編集ソフトが必要'
        },
        {
            pro: 'WebPや無圧縮PNG形式での書き出しに対応',
            con: '自動アニメーションGIFの作成機能は非搭載'
        }
    ], proTitle: 'メリット', conTitle: '制限事項' },

    { type: 'diagnostic', variant: 'info', title: '解像度とフレームレート', icon: 'mdi:information', badge: 'テクニカル', html: '抽出される解像度は元のビデオに依存します。アップスケーリングなどは行わず、ビデオ本来の情報を忠実に保存します。' },

    { type: 'glossary', items: [
        {
            term: 'フレーム',
            definition: 'ビデオを構成する個々の静止画のこと。24fpsの動画なら1秒に24枚の画像が含まれます。'
        },
        {
            term: 'FPS',
            definition: '1秒あたりのフレーム数。映像の滑らかさを決定します。'
        },
        {
            term: 'ビデオコーデック',
            definition: '圧縮アルゴリズム（H.264, VP9等）。ファイルサイズと画質に影響します。'
        },
        {
            term: 'ビットレート',
            definition: '1秒間に処理されるデータ量。高いほど高品質になります。'
        },
        {
            term: '解像度',
            definition: 'ピクセル数（1080p, 4K等）。画像の細かさを決定します。'
        }
    ] },

    { type: 'message', title: 'プロ品質のフレーム抽出', ariaLabel: '抽出技術に関する情報', html: '複雑な変換サイトや高価なソフトは不要です。アップロード、移動、保存の3ステップで理想の一枚が手に入ります。' },

    { type: 'title', text: 'ビデオの瞬間を「永遠」に', level: 3 },
    { type: 'paragraph', html: '映像の中には無数の価値ある瞬間が眠っています。品質やプライバシーを損なうことなく、それらを最高品質で切り取りましょう。' }
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

export const content: VideoFrameExtractorLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'ビデオフレーム抽出に関するよくある質問',
    bibliography,
    bibliographyTitle: 'ビデオキャプチャの技術仕様',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

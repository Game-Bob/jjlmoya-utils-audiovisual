import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { CollageMakerUI, CollageMakerLocaleContent } from '../index';

const slug = 'free-online-photo-collage-maker-professional-compositions';
const title = 'オンライン コラージュ作成ツール：プロ仕様のデザイン';
const description = '数秒で無料のフォトコラージュを作成。複数のレイアウトから選択し、境界線を調整して、ウォーターマークなしの高画質でダウンロードできます。';

const ui: CollageMakerUI = {
    dropTitle: "ここに画像をドラッグ",
    dropSub: "または {link} - 最小2、最大9枚",
    dropLink: "ファイルを選択",
    imgsLoaded: "読み込まれた画像",
    layoutLabel: "レイアウト",
    settingsLabel: "設定",
    borderLabel: "境界線",
    borderColorLabel: "境界線の色",
    bgColorLabel: "背景",
    downloadBtn: "ダウンロード",
    previewTitle: "プレビュー",
    needsImgs: "あと {n} 枚の画像が必要です",
    errorMin: "少なくとも2枚の画像が必要です",
    errorMax: "最大9枚まで許可されています",
    errorLoad: "画像の読み込み中にエラーが発生しました",
    faqTitle: "よくある質問",
    bibliographyTitle: "リファレンス"
};

const faq: CollageMakerLocaleContent['faq'] = [
    {
        question: "写真の順序を変更するにはどうすればよいですか？",
        answer: "写真は、読み込まれた画像リストに表示される順序でコラージュに配置されます。一度削除してから再度アップロードすることで、位置を調整できます。",
    },
    {
        question: "コラージュの出力形式は何ですか？",
        answer: "コラージュは高解像度WebP形式でダウンロードされます。これは鮮明さを維持したままSNSで共有するのに最適です。",
    },
];

const howTo: CollageMakerLocaleContent['howTo'] = [
    {
        name: "写真をアップロード",
        text: "ファイルエクスプローラーから2枚から9枚の画像を選択します。",
    },
    {
        name: "レイアウトを選択",
        text: "アップロードした写真の数に最適なグリッドを選択します。",
    },
    {
        name: "スタイルをカスタマイズ",
        text: "境界線の太さと色を調整して、プロフェッショナルな仕上がりにします。",
    },
    {
        name: "ダウンロードして共有",
        text: "作成ボタンを押し、完成した作品を即座にダウンロードします。",
    },
];

const bibliography: CollageMakerLocaleContent['bibliography'] = [
    {
        name: "写真の構図：コラージュの芸術",
        url: "https://ja.wikipedia.org/wiki/%E3%82%B3%E3%83%A9%E3%83%BC%E3%82%B8%E3%83%A5",
    },
];

const seo: CollageMakerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'プロ仕様のオンラインコラージュ作成ツール',
        items: [
            '複数のレイアウトと定義済みグリッド',
            '境界線と背景色のカスタマイズ',
            'SNSに最適な1200pxの高解像度',
            '使用制限なしの即時処理'
        ]
    },
    { type: 'title', text: 'コラージュデザイン：物語を語る構図', level: 2 },
    { type: 'paragraph', html: 'コラージュは単なる写真の混ぜ合わせではありません。感情や文脈を伝える視覚的な物語です。当社のツールを使えば、Photoshopや高価なソフトウェアを必要とせず、Instagram、Facebook、Pinterest、または個人プロジェクト用のプロフェッショナルな幾何学的構成を作成できます。' },

    { type: 'stats', items: [
        { value: '2-9', label: '枚の画像', icon: 'mdi:image-multiple' },
        { value: '1200px', label: 'HD解像度', icon: 'mdi:video-high-definition' },
        { value: '即時', label: '生成', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: '視覚的構成：デザインの原則', level: 3 },
    { type: 'paragraph', html: '構成とは、見る人の視線を誘導し、意図を伝えるように視覚要素を整理する技術です。優れたコラージュは以下のバランスを取ります：' },
    { type: 'list', items: [
        '<strong>均衡：</strong> 視覚的な重みの分配（明るい画像対暗い画像、大きい対小さい）。',
        '<strong>視線の流れ：</strong> 視線が不自然な空白なく、構成内を自然に移動するようにします。',
        '<strong>対比：</strong> 注意を引くための色、サイズ、形状の変化。',
        '<strong>統一：</strong> テーマの一貫性 - 画像同士が同じ物語について「共に語る」必要があります。'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'スマートで適応性のあるデザイン', html: '当社のシステムは、写真の数に基づいて最適な空間配分を自動的に計算します。2枚なら対称グリッド、5枚ならバランスの取れた非対称配分。各グリッドは視覚的インパクトを最大化するように設計されています。' },

    { type: 'comparative', items: [
        {
            title: 'SNS用',
            description: 'Instagram、TikTok、Facebook - 正方形フォーマット',
            icon: 'mdi:share-all',
            points: [
                '1200pxはInstagramフィードに最適',
                '正方形フォーマットにより投稿時の切り抜きを回避',
                'ブランディングのためのカスタマイズ可能な境界線'
            ],
            highlight: true
        },
        {
            title: 'ポートフォリオ用',
            description: '写真家やデザイナーのための視覚的ショーケース',
            icon: 'mdi:briefcase-outline',
            points: [
                'プロジェクトの複数の角度を表示',
                'まとまりのある視覚的物語',
                'プロ仕様のデジタルブック印刷'
            ]
        },
        {
            title: '個人的なギフト用',
            description: 'プリント、フレーム、デジタルアルバム',
            icon: 'mdi:gift-outline',
            points: [
                'イベントの思い出（結婚式、旅行）',
                '印刷に対応した高解像度',
                '手作業なしの即時デザイン'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'カスタマイズ：境界線と色', level: 3 },
    { type: 'table', headers: ['要素', '視覚効果', '推奨事項'], rows: [
        ['白い境界線', 'クリーン、ミニマル、モダン', 'SNS、デジタルポートフォリオ'],
        ['黒い境界線', 'ドラマチック、プロフェッショナル、芸術的', '芸術写真、ファッション、高級感'],
        ['ニュートラルな境界線（グレー）', '多用途、アカデミック、コーポレート', 'ビジネス、教育、中立性'],
        ['境界線なし', '融合、継続、没入感', '均一な背景、流れるような写真']
    ] },

    { type: 'proscons', items: [
        {
            pro: '定義済みのプロ仕様デザイン - 構成の知識は不要',
            con: 'オプションは事前設定されたグリッドに限定されます'
        },
        {
            pro: 'リサイズなしでSNSにそのまま使える1200px解像度',
            con: 'Photoshopほど自由にカスタマイズはできません'
        },
        {
            pro: '100%ローカル処理 - プライバシー、スピード、無制限',
            con: '最新のブラウザが必要です'
        },
        {
            pro: '完全無料、ウォーターマークなし、広告なし',
            con: '個別の編集オプション（切り抜き、回転）はありません'
        }
    ], proTitle: 'メリット', conTitle: '制限事項' },

    { type: 'diagnostic', variant: 'success', title: 'SNSに対応', icon: 'mdi:check-circle-outline', badge: '最適化済み', html: '1200x1200pxはInstagramに最適な解像度です。あらゆるアスペクト比をサポートしますが、正方形の出力はフィードでのインパクトを最大化し、自動的な切り抜きを排除し、デスクトップ、タブレット、モバイルのどこでも美しく見えます。' },

    { type: 'glossary', items: [
        {
            term: '視覚的構成',
            definition: '見る人の視線を誘導し、感情的な意図を伝えるために要素（色、形状、空間）を整理する技術。'
        },
        {
            term: '三分割法',
            definition: '構図の原則：画像を9つの等しい領域（3x3）に分割します。被写体を交点に配置することで、最大のインパクトを与えます。'
        },
        {
            term: '対称グリッド',
            definition: '等間隔の分割。安心感があり、秩序だっています。写真のペアや偶数枚に最適です。'
        },
        {
            term: '非対称グリッド',
            definition: '不等間隔の分割。ダイナミックで面白く、視覚的です。サイズの異なる5枚以上の写真に最適です。'
        },
        {
            term: '視覚的均衡',
            definition: '視覚的な重みの知覚的な均等。明るい画像＋暗い画像＝バランス、大きい＋小さい＝バランス。'
        }
    ] },

    { type: 'message', title: '即座に視覚的物語を', ariaLabel: '構成とコラージュに関する情報', html: 'すべてのコラージュには物語があります。当社の自動デザイナーは、あなたの視覚的な物語がバランスよく、プロフェッショナルで、世界に向けて発信できる状態であることを保証します。グラフィックデザイナーの作業を待つ必要はありません。' },

    { type: 'title', text: '作り、共有し、刺激を与える', level: 3 },
    { type: 'paragraph', html: 'よくできたコラージュは、忘れ去られる投稿と、フォロワーが記憶し、共有する投稿との違いを生みます。インパクトを与えるために、視覚的な物語にスマートな構成を取り入れましょう。' }
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

export const content: CollageMakerLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faqTitle: "よくある質問",
    faq,
    bibliographyTitle: "リファレンス",
    bibliography,
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

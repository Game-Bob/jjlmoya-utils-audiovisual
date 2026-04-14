import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ChromaticLensUI, ChromaticLensLocaleContent } from '../index';

const slug = 'chromatic-lens-color-palette-extraction-online';
const title = 'Chromatic Lens: オンライン カラーパレット抽出・解析ツール';
const description = 'あらゆる画像からプロフェッショナルなカラーパレットを無料で抽出。数学的なアルゴリズムを用いて、写真の中の主要な色を特定します。';

const ui: ChromaticLensUI = {
    dropTitle: "カラーを解析",
    dropSubtitle: "画像をドラッグして、その色彩DNAを抽出します。",
    processingLabel: "パレットを抽出中...",
    paletteTitle: "抽出されたパレット",
    copyLabel: "HEXをコピー",
    copiedLabel: "コピーしました！",
    colorCountLabel: "色の数",
    changeImage: "画像を変更",
    faqTitle: "カラー抽出に関するよくある質問",
    bibliographyTitle: "リソースと技術ドキュメント"
};

const faq: ChromaticLensLocaleContent['faq'] = [
    {
        question: "カラー抽出はどのように機能しますか？",
        answer: "RGB色空間における近似性に基づいて画像の画素をグループ化する「メディアンカット（Median Cut）」アルゴリズムを使用し、最も代表的なトーンを見つけ出します。",
    },
    {
        question: "抽出した色をデザインエディタにコピーできますか？",
        answer: "はい。各色をクリックするとHEXコードが自動的にクリップボードにコピーされ、Photoshop、Figma、CSSなどにすぐに貼り付けることができます。",
    },
    {
        question: "どのような種類の画像を解析できますか？",
        answer: "JPG、PNG、WebPの各ファイルに対応しています。処理はローカルで行われるため、大きな画像でもネットワークデータを使用せずに素早く解析できます。",
    },
];

const howTo: ChromaticLensLocaleContent['howTo'] = [
    {
        name: "画像をアップロード",
        text: "色彩のインスピレーションを抽出したい写真をアップロードします。",
    },
    {
        name: "精度を調整",
        text: "ツールに特定させたい主要な色の数（3～12色）を選択します。",
    },
    {
        name: "結果を解析",
        text: "対応する16進数（HEX）コードと共に、パレットが即座に表示されます。",
    },
    {
        name: "コピーして活用",
        text: "トーンをクリックして保存し、デザインプロジェクトに適用します。",
    },
];

const bibliography: ChromaticLensLocaleContent['bibliography'] = [
    {
        name: "メディアンカット・アルゴリズム - Wikipedia",
        url: "https://ja.wikipedia.org/wiki/%E3%83%A1%E3%83%87%E3%82%A3%E3%82%A2%E3%83%B3%E3%82%AB%E3%83%83%E3%83%88",
    },
    {
        name: "デザイナーのための色彩理論",
        url: "https://www.smashingmagazine.com/2010/01/color-theory-for-designers-part-1-the-meaning-of-color/",
    },
];

const seo: ChromaticLensLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'インテリジェントなカラーパレット抽出',
        items: [
            'カラー解析のためのプロ仕様メディアンカット・アルゴリズム',
            'あらゆる画像から3～12色の主要な色を抽出',
            'クリップボードに直接コピー可能なHEXコード',
            '100%ローカル処理 - クリエイターに最適'
        ]
    },
    { type: 'title', text: 'カラーパレット抽出：科学とデザイン', level: 2 },
    { type: 'paragraph', html: '映画のような写真がなぜこれほど調和して見えるのか、不思議に思ったことはありませんか？それは偶然ではなく、色彩理論に基づいています。Chromatic Lensを使えば、その調和をピクセルから直接抽出し、デザインプロジェクトで使用可能なHEXコードに変換できます。' },

    { type: 'stats', items: [
        { value: '即時', label: 'カラー解析', icon: 'mdi:lightning-bolt' },
        { value: '100%', label: 'ローカル・プライバシー', icon: 'mdi:lock' },
        { value: 'RGB', label: '精密な色空間', icon: 'mdi:palette' }
    ], columns: 3 },

    { type: 'title', text: 'メディアンカット・アルゴリズムの解説', level: 3 },
    { type: 'paragraph', html: 'インテリジェントなパレット抽出は、単なる画素のランダムサンプリングではありません。再帰的な分割技術であるメディアンカット・アルゴリズムを使用し、忠実な再現性を確保します。' },
    { type: 'list', items: [
        '<strong>再帰的な分割:</strong> 画像のRGB「カラーキューブ」を、より小さなボックスに再帰的に分割します。',
        '<strong>ボリュームのバランス:</strong> 各パーティションは、似たようなボリュームを持つ同じ色空間の画素をグループ化しようとします。',
        '<strong>加重平均:</strong> 各ボックスの結果としての色は、そこに含まれるすべての画素の平均値となります。',
        '<strong>忠実な再現:</strong> 主要な色は、単なるサンプルではなく、画像の実際の視覚的な雰囲気を反映します。'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'クリエイティブなワークフロー', html: 'Web開発者、UX/UIデザイナー、デジタルアーティスト、そして写真や映画、視覚的なリファレンスの本質を即座に捉え、自身のインターフェース、イラスト、またはブランドパレットに適用したいと考えるクリエイターに最適です。' },

    { type: 'title', text: 'デジタルデザインにおける活用事例', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'UX/UIデザイナー',
            description: 'ヒーロー画像からパレットを抽出し、まとまりのあるインターフェースを作成',
            icon: 'mdi:palette',
            points: [
                '調和のとれた背景色',
                'ボタンや二次的な要素',
                '自動計算されるコントラスト'
            ]
        },
        {
            title: 'Web開発者',
            description: '視覚的なリファレンスから直接CSSスタイルシートを作成',
            icon: 'mdi:code-braces',
            points: [
                'HEXをCSSに直接コピー',
                'SCSS/CSSでのカラー変数化',
                '事前のデザインなしで統一感のあるテーマ'
            ],
            highlight: true
        },
        {
            title: 'デジタルアーティスト・イラストレーター',
            description: '映画、自然、芸術から色彩のリファレンスをキャプチャ',
            icon: 'mdi:brush',
            points: [
                '名作からのリファレンスパレット',
                'シネマティックな色彩研究',
                '即座に得られる視覚的なインスピレーション'
            ]
        },
        {
            title: 'ブランディング・スペシャリスト',
            description: 'ガイドとなる写真に基づいて視覚的なアイデンティティを構築',
            icon: 'mdi:tag-multiple',
            points: [
                '画像からブランドカラーを抽出',
                'プロ仕様の色彩ガイドを作成',
                '視覚的な一貫性を確保'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '応用色彩理論', level: 3 },
    { type: 'table', headers: ['色彩の概念', '定義', '実践的な応用'], rows: [
        ['色彩の調和', '視覚的にバランスの取れた色の組み合わせ', 'UIにおける一貫した視覚的アイデンティティ'],
        ['コントラスト', '色と色の間の明るさの差', '読みやすさと視覚的な階層構造'],
        ['彩度', '色の鮮やかさ', 'プロフェッショナリズム（低）対 エネルギー（高）'],
        ['色温度', '暖色（赤系）対 寒色（青系）', 'デザインの感情的心理'],
        ['モノクロームパレット', '単一のトーンのバリエーション', 'エレガンスとミニマリズム']
    ] },

    { type: 'proscons', items: [
        {
            pro: '抽出における数学的な正確さ - おおよその視覚的な選択ではありません',
            con: '画素数が多い場合、ほとんど見えない色が選ばれることがあります'
        },
        {
            pro: 'クリップボードへの即時コピー - ワークフローとの完璧な統合',
            con: 'Canvas APIに対応した最新のブラウザが必要です'
        },
        {
            pro: '完全なプライバシー - データ送信なしの100%ローカル解析',
            con: '解析履歴は保存されません'
        },
        {
            pro: 'あらゆるデジタル画像形式に対応',
            con: '最終的な色は画像の圧縮や品質に依存します'
        }
    ], proTitle: 'メリット', conTitle: '制限事項' },

    { type: 'diagnostic', variant: 'success', title: 'リアルな色彩表現', icon: 'mdi:check-circle-outline', badge: '高度なアルゴリズム', html: '単にランダムに画素をサンプリングするツールとは異なり、当社のシステムは各トーンの全画素数を重み付けするメディアンカット・アルゴリズムを使用しているため、抽出されたパレットは元の画像の視覚的な雰囲気や色彩心理を忠実に反映します。' },

    { type: 'glossary', items: [
        {
            term: 'メディアンカット',
            definition: 'RGB空間を再帰的にボックスに分割し、均一な分布を確保するカラー量子化アルゴリズム。歴史的に、GIFやインデックスカラー技術で使用されてきました。'
        },
        {
            term: 'RGB色空間',
            definition: '赤、緑、青に基づくカラーモデル。各色はこれら3つの値（0～255）の組み合わせとして表されます。デジタル画面やWebの標準です。'
        },
        {
            term: 'HEXコード',
          definition: 'Web上で色を表す6桁の16進数表記（#RRGGBB）。#FF0000（赤）、#00FF00（緑）、#0000FF（青）など。CSS、Figma、Adobeで共通。'
        },
        {
            term: '彩度',
            definition: '色の鮮やかさや純度。彩度が高い＝鮮やかな色、彩度が低い＝灰色がかった色。デザインの感情的な知覚に影響します。'
        },
        {
            term: '色彩の調和',
            definition: '視覚的に心地よい結果をもたらす色の選択と組み合わせ。モノクローム、補色、類似色、トライアドなどがあります。'
        }
    ] },

    { type: 'message', title: 'プロフェッショナルな色彩解析', ariaLabel: '色彩解析に関する技術情報', html: 'Chromatic Lensは、手動の視覚解析をアルゴリズムによる精度へと変換します。単に色を抽出するだけでなく、あらゆる画像の感情的・視覚的な本質を捉え、すぐに使えるHEXコードとしてクリップボードに直接届けます。完全なプライバシーを保ち、解析量に制限はありません。' },

    { type: 'title', text: '視覚的なインスピレーションからのデザイン', level: 3 },
    { type: 'paragraph', html: '最高のカラーパレットとは、リファレンスの視覚的な意図を捉えたものです。Chromatic Lensは、かつては手動だったプロセス（観察、解析、メモ）を自動化します。今では、画像をドラッグするだけで、数秒でプロ仕様のHEXコードを入手できます。' }
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

export const content: ChromaticLensLocaleContent = {
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

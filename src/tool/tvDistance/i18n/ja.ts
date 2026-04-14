import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { TvDistanceUI, TvDistanceLocaleContent } from '../index';

const slug = 'tv-viewing-distance-calculator-japan-thx-4k';
const title = 'テレビ視聴距離計算機：THX/4K最適画面設定';
const description = 'テレビのサイズと解像度に基づいて、理想的な視聴距離を計算。THXやSMPTE規格に準拠したホームシアター構築の最適化ツール。';

const ui: TvDistanceUI = {
    specTitle: "基本仕様設定",
    diagonalLabel: "画面サイズ（インチ）",
    resolutionLabel: "解像度",
    thxRecommendation: "THX推奨設定",
    thxDescription: "THXは、没入感のある映画体験のために、視野角40度をカバーする距離を推奨しています。",
    simulationBadge: "リアルタイム・シミュレーション",
    tvWidthLabel: "cm（幅）",
    userLocationLabel: "あなたの位置",
    minLimitLabel: "最短限界距離",
    optimalLimitLabel: "最適視聴距離",
    maxLimitLabel: "最長限界距離",
    unitMeters: "m",
    unitCm: "cm"
};

const faq: TvDistanceLocaleContent['faq'] = [
    {
        question: "距離を計算する際、なぜ解像度が重要なのですか？",
        answer: "4Kや8Kなどの高解像度では、画素（ピクセル）がより微細になります。これにより、画素の網目を感じることなく画面に近づくことができ、没入感を高めることができます。",
    },
    {
        question: "「視野角40度」とは何ですか？",
        answer: "これはTHXが推奨する、画面が周辺視野の大部分を占めるようにするための基準です。プロの映画館の中央付近で鑑賞しているような体験が可能になります。",
    },
    {
        question: "推奨距離よりも離れて座ってもいいですか？",
        answer: "可能ですが、高解像度のメリットが失われます。4Kテレビから離れすぎると、人間の目は細かいディテールを識別できなくなり、1080p（フルHD）で見ているのと変わらなくなってしまいます。",
    },
];

const howTo: TvDistanceLocaleContent['howTo'] = [
    {
        name: "画面サイズを選択",
        text: "スライダーを動かして、現在お持ちの、または購入予定のテレビサイズ（インチ）を選択します。",
    },
    {
        name: "解像度を選択",
        text: "1080p、4K、8Kの中から、視覚的な識別限界を調整するために解像度を選びます。",
    },
    {
        name: "シミュレーターを確認",
        text: "図解上で、あなたと画面のサイズの相関関係がどのように変化するかを確認してください。",
    },
    {
        name: "ソファの位置を調整",
        text: "映画的な没入感を最大限に引き出すため、座席を「最適視聴距離」の範囲内に配置します。",
    },
];

const bibliography: TvDistanceLocaleContent['bibliography'] = [
    {
        name: "THX - HDTV Set Up Guide",
        url: "https://www.thx.com/questions/what-is-the-best-viewing-distance-for-my-tv/",
    },
    {
        name: "SMPTE - Standards Documentation",
        url: "https://www.smpte.org/",
    },
];

const seo: TvDistanceLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '解像度とサイズによる最適なテレビ視聴距離',
        items: [
            '没入型映画体験のためのTHX規格（40°）準拠',
            '1080p、4K、8Kを高精度に計算',
            '設定状況をリアルタイムで視覚的にシミュレーション',
            '眼精疲労を防ぎ、コンテンツへの没入感を最大化'
        ]
    },
    { type: 'title', text: '没入感の科学：最適なテレビ視聴距離とは', level: 2 },
    { type: 'paragraph', html: 'これは単なる好みの問題ではなく、人間の視覚生理に基づいた科学です。人間の目には識別できる解像度の限界があります。4K画面から離れすぎると、視覚が捉えきれない画素（ピクセル）にお金を払っていることになります。逆に近すぎると、眼精疲労の原因となります。' },

    { type: 'stats', items: [
        { value: '40°', label: '理想のTHX角度', icon: 'mdi:eye' },
        { value: '100%', label: '画素の有効活用', icon: 'mdi:video-high-definition' },
        { value: 'ゼロ', label: '視覚的疲労', icon: 'mdi:heart-pulse' }
    ], columns: 3 },

    { type: 'title', text: '2つのプロフェッショナル規格：THX vs SMPTE', level: 3 },
    { type: 'paragraph', html: '映像業界には、視聴体験を最適化するための主要な2つの権威ある基準が存在します。' },
    { type: 'comparative', items: [
        {
            title: 'THX基準',
            description: '視野角40度 - より高い没入感',
            icon: 'mdi:filmstrip',
            points: [
                '画面が周辺視野の多くをカバー',
                '没入感のある映画体験',
                'アクション映画やスポーツ生中継に最適',
                '部屋に一定の広さが必要'
            ],
            highlight: true
        },
        {
            title: 'SMPTE基準',
            description: '視野角30度 - よりリラックスした視聴',
            icon: 'mdi:television',
            points: [
                'より快適で自然な視聴距離',
                '保守的で標準的なプロ向け推奨設定',
                'ニュースやドラマなどの多様な番組に最適',
                '小さめの部屋に適している'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: '解像度によって計算式はどう変わるか', level: 3 },
    { type: 'table', headers: ['解像度', '55インチTVの場合', '最短距離（画素が見えない）', 'THX最適距離'], rows: [
        ['1080p (フルHD)', '55 インチ', '2.0 m', '2.3 m'],
        ['4K (Ultra HD)', '55 インチ', '1.2 m', '1.5 m'],
        ['8K', '55 インチ', '0.8 m', '1.0 m']
    ] },

    { type: 'paragraph', html: 'ご覧の通り、高解像度ほど画素の構造を感じることなく近くに座ることができます。4Kテレビは1.2メートルから楽しめますが、1080pでは少なくとも2メートル必要です。' },

    { type: 'card', title: '人間の視力の限界', html: '人間の目には識別能力の限界（視力）があります。一定の距離を超えると、画面が8Kであってもそれ以上のディテールを識別できなくなります。当計算機は、余計な眼のエネルギーを浪費することなく、100%の画素を活用できる「最適なゾーン」にあなたを配置します。' },

    { type: 'diagnostic', variant: 'info', title: '眼精疲労と距離の関係', icon: 'mdi:information', badge: '視覚の健康', html: '近すぎると目が常に極端な角度に適応しようとするため疲労します。離れすぎるとディテールを識別しようとして緊張が生じます。当ツールは、不快感なく自然な視界を満たす「スイートスポット」（THXで40°）を算出します。' },

    { type: 'proscons', items: [
        {
            pro: 'THX 40°はプロの映画館のような真の没入感を生み出す',
            con: '部屋に十分なスペースが必要となる'
        },
        {
            pro: '4Kは1080pより近づけるため、狭い空間でも大画面を楽しめる',
            con: '追加の画素を活用するには最短距離付近にいる必要がある'
        },
        {
            pro: '最初から正しい位置に設置することで眼精疲労を回避できる',
            con: '一般家庭の部屋はこれらの基準に従っていないことが多い'
        },
        {
            pro: '現在のテレビの配置が適切かどうかを検証できる',
            con: '適切でない場合、家具の移動が必要になる（ソフトウェア上の問題ではない）'
        }
    ], proTitle: 'メリット', conTitle: '考慮すべき点' },

    { type: 'glossary', items: [
        {
            term: '視野角（度）',
            definition: 'あなたの位置から画面が占める角度。40° = 没入感大（周辺視野カバー）。20° = 背景として流す程度（没入感小）。'
        },
        {
            term: 'THX',
            definition: 'Lucasfilmによって設立された映像・音響の品質認定規格。プロの映画館やホームシアターの基準を定義。40°が主要な推奨値。'
        },
        {
            term: 'SMPTE',
            definition: '映画テレビ技術者協会。映画やビデオの技術規格を策定。30°を標準的なプロ向け視聴距離として推奨。'
        },
        {
            term: '人間の視力識別限界',
            definition: '目が微細なディテールを識別できる能力。一定の距離を超えると個々の画素は判別不能になる。'
        },
        {
            term: '4K (Ultra HD)',
            definition: '約3840x2160ピクセルの解像度。1080pの4倍の画素数を持ち、より近づいても画素を感じさせない。'
        }
    ] },

    { type: 'message', title: 'プロフェッショナルな映像空間の最適化', ariaLabel: 'テレビ設置基準に関する情報', html: 'プロの映画館は、距離、角度、照明を完璧にするために膨大なコストを投じています。この計算機は、それと同じ原理をあなたの家庭にもたらします。' },

    { type: 'title', text: 'ホームシアターをプロの仕上がりに', level: 3 },
    { type: 'paragraph', html: '距離の設定は、画面サイズや解像度と「同じくらい」重要です。これらの基準に従って、リビングを本物の映画館へと変貌させましょう。' }
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

export const content: TvDistanceLocaleContent = {
    slug,
    title,
    description,
    ui,
    seo,
    faq,
    faqTitle: 'テレビ視聴距離に関するよくある質問',
    bibliography,
    bibliographyTitle: 'テレビ設置に関するプロフェッショナル規格',
    howTo,
    schemas: [faqSchema as any, howToSchema as any, appSchema],
};

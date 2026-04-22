import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrintQualityCalculatorUI, PrintQualityCalculatorLocaleContent } from '../index';

const slug = 'print-quality-calculator-pixels-to-cm-dpi';
const title = '印刷品質シミュレーター：ピクセルからCM・DPI計算';
const description = '解像度に基づいて写真の最大印刷サイズを計算します。ピクセルをセンチメートルやインチに変換し、プロフェッショナルな印刷品質を保証します。';

const ui: PrintQualityCalculatorUI = {
    dropTitle: "解像度を分析",
    dropSubtitle: "画像をドラッグして印刷サイズを計算します。",
    resultsTitle: "ファイル仕様",
    dpiDensityLabel: "希望する印刷密度 (DPI)",
    dpiPointsLabel: "ドット/インチ",
    maxPrintTitle: "最大印刷サイズ",
    standardFormatsTitle: "対応標準フォーマット",
    formatColumn: "フォーマット",
    measureColumn: "寸法",
    supportColumn: "対応可否",
    qualityExcellent: "最高品質",
    qualityGood: "良質な品質",
    qualityFair: "画面表示品質",
    qualityPoor: "不適合",
    qualityExcellentDesc: "美術雑誌、写真集、至近距離での鑑賞に最適です。",
    qualityGoodDesc: "ポスターや中距離からの鑑賞に十分な品質です。",
    qualityFairDesc: "デジタル鑑賞や遠くの看板に適しています。",
    qualityPoorDesc: "画像がピクセル化して見えます。印刷は推奨されません。",
    unitCm: "cm",
    unitInches: "インチ",
    dpiScreenLabel: "画面",
    dpiNewspaperLabel: "新聞",
    dpiPrintLabel: "一般印刷",
    dpiFineArtLabel: "ファインアート",
    formatPostal: "ハガキ",
    formatQuartilla: "四六判",
    formatFolio: "フォリオ",
    formatDoubleFolio: "ダブルフォリオ",
    formatSmallPoster: "小型ポスター",
    formatLargePoster: "大型ポスター",
    formatPlane: "図面",
    supportedText: "可能 (カバー範囲内)",
    notSupportedPrefix: "不可 (",
    invalidImageError: "有効な画像を選択してください",
    faqTitle: "よくある質問": "リファレンス"
};

const faq: PrintQualityCalculatorLocaleContent['faq'] = [
    {
        question: "DPIとは何ですか？なぜ重要なのですか？",
        answer: "DPI（Dots Per Inch）は、プリンターが1インチ（2.54cm）の直線上に並べるインクのドット数を示します。DPIが高いほど画像は鮮明になりますが、ピクセルがカバーする物理的なサイズは小さくなります。",
    },
    {
        question: "写真印刷に理想的なDPIは？",
        answer: "写真のような高品質な印刷では300 DPIが業界標準です。遠くから見る大きな印刷物の場合は、150 DPIでも十分な場合があります。",
    },
    {
        question: "画質を下げずに画像のスキャンDPIを上げることはできますか？",
        answer: "いいえ。ピクセル数を変えずにDPIを上げると、単純に印刷サイズが小さくなるだけです。ソフトウェアでピクセルを「補完」してサイズを大きく（アップスケーリング）すると、ぼやけた仕上がりになります。",
    },
];

const howTo: PrintQualityCalculatorLocaleContent['howTo'] = [
    {
        name: "画像をアップロード",
        text: "印刷したい写真をアップロードして、ピクセル単位の寸法を確認します。",
    },
    {
        name: "DPIを調整",
        text: "バーをスライドさせて、ドット密度（72〜600 DPI）に応じて最終的なサイズがどのように変化するかを確認します。",
    },
    {
        name: "フォーマットを確認",
        text: "標準フォーマット表（A4、A3など）をチェックして、解像度が希望の用紙サイズをカバーしているか確認します。",
    },
    {
        name: "品質を確定",
        text: "印刷に出す前に、インジケーターが「最高品質」を示していることを確認してください。",
    },
];

const seo: PrintQualityCalculatorLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'プロフェッショナルな印刷解像度計算',
        items: [
            'ピクセルをセンチメートルやインチに正確に変換',
            '希望のDPIに基づく最大サイズの計算',
            '標準フォーマット（A4、A3など）との互換性チェック',
            '最高品質から不適合まで、4段階の品質ガイド'
        ]
    },
    { type: 'title', text: '印刷品質とDPIの決定版ガイド', level: 2 },
    { type: 'paragraph', html: '写真を印刷して、ぼやけたりギザギザになったりしたことはありませんか？その秘密は、<strong>ピクセル</strong>と<strong>DPI</strong>（Dots Per Inch）の数学的な関係にあります。このツールは、プロレベルの品質を維持したまま、画像を印刷できる正確な最大サイズを計算します。' },

    { type: 'stats', items: [
        { value: '300', label: '業界標準DPI', icon: 'mdi:target' },
        { value: '100%', label: '正確な計算', icon: 'mdi:check' },
        { value: 'ISO 216', label: '主要規格に対応', icon: 'mdi:file-document' }
    ], columns: 3 },

    { type: 'title', text: 'DPIを理解する：ピクセル vs ドット', level: 3 },
    { type: 'paragraph', html: 'DPIとピクセルを同じものだと誤解されることがよくありますが、異なります。ピクセルは「デジタルファイルの中」にある情報量です。DPIは、プリンターがそれを「紙の上のインク」にどう変換するかを示す指標です。' },
    { type: 'list', items: [
        '<strong>DPI (Dots Per Inch):</strong> 1インチ（2.54cm）の線形範囲にプリンターが配置するインルドットの数。',
        '<strong>ピクセル:</strong> デジタルファイル内の小さな情報単位。3000x2000ピクセルの写真は、DPIに関係なく、持っている総情報量は一定です。',
        '<strong>計算式:</strong> 印刷サイズ（インチ）＝ ピクセル数 / DPI。例：3000ピクセル / 300 DPI ＝ 10インチ（25.4cm）'
    ], icon: 'mdi:check' },

    { type: 'title', text: 'DPI品質レベルの解説', level: 3 },
    { type: 'table', headers: ['DPI', '視覚的品質', '用途', '鑑賞距離の目安'], rows: [
        ['600+ DPI', '最高（完璧）', '画集、高級雑誌、ファインアート写真', '10cm未満'],
        ['300-400 DPI', '最高（プロ仕様）', '写真、書籍、企業カタログ', '20-30cm（手元）'],
        ['150-200 DPI', '良好（一般的な印刷）', 'ポスター、カレンダー、中距離鑑賞', '1-2m'],
        ['72-100 DPI', '画面相当（可）', '屋外看板、遠くのバナー', '5m以上'],
        ['10-30 DPI', '低（不適合）', '巨大看板、極めて遠くからの鑑賞', '50m以上']
    ] },

    { type: 'card', title: '黄金律：300 DPI', html: '写真やプロの出版印刷において、業界標準は<strong>300 DPI</strong>です。これにより、通常の鑑賞距離（20〜30cm）で、人間の目が個々のインクドットを認識できなくなります。300 DPIを下回ると、ピクセルのギザギザが見え始める可能性があります。' },

    { type: 'comparative', items: [
        {
            title: '手持ち写真 (L版サイズなど)',
            description: '300 DPI 必須 - 近くで見るため',
            icon: 'mdi:image',
            points: [
                '3000x2000ピクセル ＝ 約10x6.7インチまで',
                '最高品質を保証',
                'アルバムやプレゼントに最適'
            ]
        },
        {
            title: '壁掛けポスター A3 (30x42 cm)',
            description: '150 DPI で十分 - 離れて見るため',
            icon: 'mdi:wall-fire',
            points: [
                '1〜2m離れて鑑賞',
                '必要なピクセル数は少なめ',
                '機材の解像度を最大限に活かす'
            ],
            highlight: true
        },
        {
            title: 'のぼり・看板 (200x300 cm)',
            description: '15-30 DPI - 数メートル離れて見る',
            icon: 'mdi:sign',
            points: [
                '20m以上離れて見る',
                '低解像度でも綺麗に見える',
                '大容量ファイルの最適化'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'プロの印刷に向けたファイル準備', level: 3 },
    { type: 'proscons', items: [
        {
            pro: 'CMYK vs RGB: プリンターはインク（CMYK）を使い、画面は光（RGB）を使います。色のズレを防ぐため、変換を検討してください。',
            con: '変換時に色味が変わることがあるため、必ずプレビューを確認してください。'
        },
        {
            pro: '塗り足し: 画像が紙の端まで必要な場合は、各辺に3mmの予備（裁ち落とし）を追加してください。',
            con: '塗り足しがないと、裁断時に端に白い線が入ることがあります。'
        },
        {
            pro: 'アップスケーリングは万能ではありません: Photoshop等でピクセルを増やすと、偽の情報が追加され、輪郭がボケます。',
            con: '大きく印刷するには、オリジナルの高解像度写真が必要です。'
        },
        {
            pro: '推奨形式: 写真にはTIFF（非圧縮）や高品質JPEG、ロゴ等にはベクトル形式（AI, EPS）を使用します。',
            con: '多くの印刷所では、PNGはネイティブなCMYKをサポートしていません。'
        }
    ], proTitle: '推奨事項', conTitle: '注意事項' },

    { type: 'diagnostic', variant: 'warning', title: 'よくある間違い：アップスケーリングの神話', icon: 'mdi:alert', badge: '重要', html: '<strong>ピクセル数を変えずにPhotoshopでDPI設定だけを上げないでください。</strong> 72 DPIから300 DPIに変更するだけでは、物理的な印刷サイズが小さくなるだけです。補完によって「ピクセルを増やす」と、画像がボケたり滑らかになりすぎたりします。ソース由来の「本物のピクセル」が必要です。' },

    { type: 'glossary', items: [
        {
            term: 'DPI (Dots Per Inch)',
            definition: '印刷解像度の単位。1インチ（2.54cm）あたりのインクドット数。300 DPI ＝ 画素密度 約9万ドット/平方インチ。'
        },
        {
            term: 'CMYK',
            definition: '印刷用の表色系。シアン、マゼンタ、イエロー、ブラックの4色のインク。画面のRGB（光の三原色）とは異なります。'
        },
        {
            term: '塗り足し (Bleed)',
            definition: '裁断のズレによる白い余白を防ぐため、仕上がりサイズより外側にはみ出させて印刷する範囲（通常3mm程度）。'
        },
        {
            term: 'ネイティブ解像度',
            definition: '加工なしでカメラが捉えた本物のピクセル数。DPI設定を変更しただけのものはネイティブ解像度とは言いません。'
        },
        {
            term: '補完 (Interpolation)',
            definition: '既存のピクセルに基づいて新しいピクセルを生成する手法。少量の拡大には便利ですが、大幅な拡大では鮮明さが失われます。'
        }
    ] },

    { type: 'message', title: 'プロの結果をもたらす技術的な精度', ariaLabel: '印刷計算に関する情報', html: '当シミュレーターは、国際規格（紙のISO 216）を考慮してピクセルをセンチメートルに変換します。単なる計算機ではありません。その写真がプロ品質を維持したまま、その印刷サイズに適しているかどうかを検証する「バリデーター」です。' },

    { type: 'title', text: '結論：失敗しない印刷のために', level: 3 },
    { type: 'paragraph', html: '素晴らしい仕上がりと、残念な仕上がりの違いは、ピクセルとDPIの関係を知っているかどうかにあります。印刷所にデータを送る前に、このツールでファイルを検証してください。そうすることで、無駄な出費や期待外れの結果を避けることができます。' }
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

export const content: PrintQualityCalculatorLocaleContent = {
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

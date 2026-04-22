import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { PrivacyBlurUI, PrivacyBlurLocaleContent } from '../index';

const slug = 'online-privacy-editor-pixelate-blur-faces-photos';
const title = 'オンライン・プライバシー・エディター：写真の顔をモザイク・ぼかしで隠す';
const description = '写真の機密箇所を検閲してプライバシーを守ります。顔へのモザイク、書類へのぼかし、情報の塗りつぶしを100%ローカルで実行します。';

const ui: PrivacyBlurUI = {
    toolPixel: "モザイク",
    toolBlur: "ぼかし",
    toolSolid: "塗りつぶし",
    intensityLabel: "強度",
    undoButton: "元に戻す",
    downloadButton: "保存",
    dropTitle: "プライバシー・エディター",
    dropSubtitle: "画像をここにドラッグするか、クリックして開始",
    privacySecureLabel: "100% ローカル",
    offlineLabel: "オフライン",
    autoDetectFaces: "自動検出",
    loadingModels: "モデルを読み込み中...",
    noFacesDetected: "顔は自動検出されませんでした。",
    faqTitle: "よくある質問": "リファレンス"
};

const faq: PrivacyBlurLocaleContent['faq'] = [
    {
        question: "写真はサーバーにアップロードされますか？",
        answer: "いいえ。このエディターは完全にブラウザ内で動作します。ピクセルの加工はローカルで行われ、デバイスの外に送信されることはありません。",
    },
    {
        question: "自動顔検出はどのように機能しますか？",
        answer: "軽量なニューラルネットワーク（TinyFaceDetector）をブラウザで実行し、外部接続なしで顔の情報を識別します。",
    },
];

const howTo: PrivacyBlurLocaleContent['howTo'] = [
    {
        name: "写真をアップロード",
        text: "隠したい機密情報が含まれている画像をドラッグまたは選択します。",
    },
    {
        name: "ツールを選択",
        text: "必要なプライバシーレベルに応じて、モザイク、ぼかし、または塗りつぶしを選択します。",
    },
    {
        name: "エリアを指定",
        text: "保護したい範囲（顔、ナンバープレート、名前など）をクリックしてドラッグします。",
    },
    {
        name: "結果を保存",
        text: "元のデータが復元不可能な状態になった画像をダウンロードします。安心して共有できます。",
    },
];

const seo: PrivacyBlurLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'プライバシー・エディター：モザイク、ぼかし、非表示',
        items: [
            '3つの編集ツール：モザイク、ぼかし、塗りつぶし',
            'AIによる自動顔検出（TinyFaceDetector）',
            '100% ローカル処理 - 写真がブラウザの外に出ることはありません',
            '透かしなし、制限なし、完全無料'
        ]
    },
    { type: 'title', text: 'デジタル・プライバシー：視覚データの守り方', level: 2 },
    { type: 'paragraph', html: 'SNSの時代において、無防備に写真を共有することは機密性の高い個人情報を露出させるリスクを伴います。当ツールでは、インターネットにアップロードする前に、重要な情報（顔、ナンバープレート、名前、住所）を隠すことができ、プライバシーを完全にコントロール下に置くことができます。' },

    { type: 'stats', items: [
        { value: '3', label: '加工メソッド', icon: 'mdi:tools' },
        { value: '100%', label: 'ローカル・プライバシー', icon: 'mdi:shield-check' },
        { value: 'AI', label: '顔検出機能', icon: 'mdi:brain' }
    ], columns: 3 },

    { type: 'title', text: '3つの加工メソッドの解説', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'モザイク (Pixelate)',
            description: 'エリアを正方形に分割し、認識不可能にします',
            icon: 'mdi:blur',
            points: [
                '不可逆的な難読化を最大化',
                '顔認識技術に対してより安全',
                '何かが隠されていることが明確に分かる',
                '理想的：公的な写真に含まれる顔'
            ]
        },
        {
            title: 'ぼかし (Blur)',
            description: 'ガウスぼかし - より自然な見た目',
            icon: 'mdi:blur-off',
            points: [
                '視覚的に洗練された外観',
                '色調の連続性をある程度維持',
                '数学的に復元される可能性が（理論上）ある',
                '理想的：機密性の低い情報'
            ],
            highlight: true
        },
        {
            title: '塗りつぶし (Solid)',
            description: '不透明な色ブロック - 最大のプライバシー',
            icon: 'mdi:rectangle',
            points: [
                '視覚的にはっきりとした隠蔽',
                '法的・プライバシー面での最大級の安全性',
                '画像の構図が変化する',
                '理想的：書類、極めて機密性の高いデータ'
            ]
        }
    ], columns: 3 },

    { type: 'title', text: 'AIによる自動顔検出', level: 3 },
    { type: 'paragraph', html: '当ツールはTinyFaceDetectorを使用しています。これはブラウザ内で直接動作し、顔を自動的に識別するコンパクトなニューラルネットワークです。' },
    { type: 'list', items: [
        '<strong>100% ローカル:</strong> AIモデルはリモートサーバーではなく、あなたのGPU/CPUで動作します。',
        '<strong>オフライン動作:</strong> 最初の読み込み後は、インターネット接続なしで使用できます。',
        '<strong>プライバシー保証:</strong> 誰もあなたの写真を見ません。GoogleもOpenAIも、そして私たちも。',
        '<strong>ワンクリック自動化:</strong> 顔を検出し、ワンクリックで隠すエリアを選択できます。'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'Privacy by Design', html: 'ブラウザのローカルGPUとCPUを使用して画像を処理することにより、元の写真がデバイスから離れないことを保証します。たとえ途中で止めたとしても、何も送信されていません。これがデジタルプライバシーの最高水準です。' },

    { type: 'title', text: 'プライバシー対策のユースケース', level: 3 },
    { type: 'table', headers: ['機密情報', '推奨されるメソッド', '緊急性'], rows: [
        ['人物の顔', 'モザイク または ぼかし', '致命的'],
        ['車のナンバープレート', 'モザイク (不可逆)', '致命的'],
        ['身分証明書', '塗りつぶし または モザイク', '致命的'],
        ['記載された名前・住所', '塗りつぶし または モザイク', '高い'],
        ['電話番号', 'モザイク または 塗りつぶし', '高い'],
        ['医療情報', '塗りつぶし', '致命的'],
        ['映り込んだWiFiパスワード等', 'モザイク', '中程度']
    ] },

    { type: 'proscons', items: [
        {
            pro: '完全なプライバシー：100% ローカル処理、サーバーなし、保存なし',
            con: 'CanvasとWebGLをサポートする最新のブラウザが必要'
        },
        {
            pro: '自動顔検出により手作業の時間を短縮',
            con: 'AIは完璧ではありません。横顔や顔の一部が隠れている場合は検出されないことがあります'
        },
        {
            pro: '3つのメソッドから安全性と美観のバランスを選択可能',
            con: '高度な機能（スマートワープ、コンテンツに応じた塗りつぶし等）は未搭載'
        },
        {
            pro: '完全無料、広告なし、制限なし',
            con: 'Photoshopのようなプロ用ソフトウェアとは用途が異なります'
        }
    ], proTitle: 'メリット', conTitle: '制限事項' },

    { type: 'diagnostic', variant: 'warning', title: '警告：ぼかしは100%安全ではありません', icon: 'mdi:alert', badge: 'セキュリティ', html: 'ガウスぼかしは、高度なアルゴリズムによって数学的に復元される可能性があります。情報が「極めて重要」な場合（法的書類、個人特定情報）は、<strong>モザイクまたは塗りつぶし</strong>を使用してください。ぼかしは見た目は良いですが、安全性では劣ります。' },

    { type: 'glossary', items: [
        {
            term: 'モザイク (Pixelation)',
            definition: 'エリアを均一な色のブロックに分割して解像度を下げる手法。不可逆。AIによる顔認識に対する最大の防御策。'
        },
        {
            term: 'ガウスぼかし (Gaussian Blur)',
            definition: '正規分布に基づいた数学的な平滑化。理論上は逆演算（デコンボリューション）で復元可能ですが、実際には非常に困難です。'
        },
        {
            term: '塗りつぶし (Solid Cover)',
            definition: '均一な色の不透明なブロック。最大の安全性と法的なプライバシーを確保しますが、見た目の優雅さには欠けます。'
        },
        {
            term: 'TinyFaceDetector',
            definition: '顔検出用の軽量な畳み込みニューラルネットワーク（CNN）。外部サーバーなしでブラウザ内で動作します。'
        },
        {
            term: 'Privacy by Design (PbD)',
            definition: 'システムの設計段階からプライバシーを統合する手法。当ツールのローカル処理アプローチはまさにこれに該当します。'
        }
    ] },

    { type: 'message', title: 'あなたのコントロール下にあるプライバシー', ariaLabel: 'プライバシー保護に関する情報', html: '私たちはあなたの写真をリモートサーバーに保存も処理もしません。追跡用クッキーも、編集履歴もありません。あなたが何を隠したのか、私たちは知ることができません。完全なコントロール、完全なプライバシー、完全な自由を提供します。' },

    { type: 'title', text: 'SNSで安全にシェアするために', level: 3 },
    { type: 'paragraph', html: 'インターネットに写真を投稿する前に、自分に問いかけてみてください。「公開したくない情報が含まれていないか？」子供の顔、ナンバープレート、住所、書類の番号。今2分のプライバシー対策をするだけで、将来のトラブルを防げます。' }
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

export const content: PrivacyBlurLocaleContent = {
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

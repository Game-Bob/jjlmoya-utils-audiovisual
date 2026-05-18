import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { VideoMergerUI, VideoMergerLocaleContent } from '../index';

const slug = 'merge-videos-online';
const title = '動画結合オンライン：複数の動画を素早く無料で結合';
const description = '複数の動画を1つに無料でオンラインかつローカルで結合します。透かしなし、アップロードなし、ブラウザ内で100%プライベートに処理されます。';

const ui: VideoMergerUI = {
    uploadTitle: "動画ファイルをアップロード",
    uploadFormats: "複数の動画をドラッグ＆ドロップするか、クリックして選択",
    privacyNote: "動画は100%ローカルで処理されます。インターネットには一切アップロードされません。",
    addMoreBtn: "動画を追加",
    mergeBtn: "今すぐ動画を結合",
    mergingStatus: "動画を結合中...",
    downloadBtn: "結合した動画をダウンロード",
    resetBtn: "最初からやり直す",
    emptyList: "動画をドラッグまたは選択して結合を開始してください。",
    listTitle: "結合する動画の順序",
    optionsTitle: "出力設定",
    optionResolution: "解像度",
    optionFps: "フレームレート（FPS）",
    optionsQualityNote: "動画のサイズが異なる場合、最終的な解像度は元の縦横比を維持しながらレターボックス形式で調整されます。",
    faqTitle: "動画結合に関するよくある質問",
    bibliographyTitle: "参考文献とリンク",
    resolutionWarning: "注意：一部の動画の解像度が異なるため、自動的に調整されます。"
};

const faq: VideoMergerLocaleContent['faq'] = [
    {
        question: "このツールに動画をアップロードするのは安全ですか？",
        answer: "はい、完全に安全です。このツールはブラウザ内で100%ローカルに動作します。動画がインターネット経由で送信されたり、サーバーに保存されたりすることはありません。",
    },
    {
        question: "動画のサイズが異なる場合はどうなりますか？",
        answer: "選択した出力解像度に合わせて、動画が自動的にスケーリングされます。比率が完全に一致しない場合は、元の縦横比を維持するために黒い余白（レターボックス）が追加されます。",
    },
    {
        question: "結合時に動画の音声は保持されますか？",
        answer: "はい。各動画のオーディオトラックが抽出され、各映像セグメントと完全に同期して順番にミックスされます。",
    },
];

const howTo: VideoMergerLocaleContent['howTo'] = [
    {
        name: "動画を選択またはドラッグ",
        text: "結合したいすべての動画ファイルを、パソコンやスマートフォンから直接読み込みます。",
    },
    {
        name: "順序を整理する",
        text: "リストの上下ボタンを使用してアップロードした動画を並べ替え、再生順序を決定します。",
    },
    {
        name: "オプションを調整する",
        text: "結合した動画の出力解像度とフレームレート（FPS）を選択します。",
    },
    {
        name: "結合してエクスポート",
        text: "結合ボタンを押します。リアルタイム処理が完了するのを待ち、結果のファイルをダウンロードします。",
    },
];

const seo: VideoMergerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: '100%ローカルでプロフェッショナルな動画結合',
        items: [
            'ブラウザ内で直接リアルタイム処理',
            '異なるサイズやフォーマット（MP4、WEBM、MOV）の複数の動画に対応',
            '選択可能な出力解像度（720p、1080p、2K、4K）',
            'オーディオトラックを完璧に順番に結合'
        ]
    },
    { type: 'title', text: '動画を無料でオンライン結合：無限のシンプルさとプライバシー', level: 2 },
    { type: 'paragraph', html: '<strong>2つの動画を1つに結合する方法</strong>をお探しですか？ 重いソフトウェアや有料アプリをダウンロードする必要はもうありません。私たちの<strong>無料で動画をオンライン結合</strong>するツールを使えば、必要なすべてのクリップを数秒でつなぎ合わせることができます。100%ローカルで動作するため、ファイルをサーバーにアップロードする必要がなく、絶対的なプライバシーが保証されます。また、アップロードの待ち時間なしで<strong>大容量の動画を結合</strong>できます。' },
    
    { type: 'title', text: '透かしなしで動画を結合', level: 3 },
    { type: 'paragraph', html: '他のアプリの最大の欠点の1つは、コンテンツに透かしが入ってしまうことです。私たちのツールでは、<strong>透かしなしで動画をオンライン結合</strong>できます。ダウンロードしたファイルは完全にあなたの作品であり、クリーンでプロフェッショナルな状態のまま、YouTube、Instagram、TikTokで共有したり、個人的に使用したりできます。' },

    { type: 'stats', items: [
        { value: '100%', label: 'プライベート＆ローカル', icon: 'mdi:shield-check' },
        { value: '0MB', label: 'アップロードデータなし', icon: 'mdi:upload-off' },
        { value: '4K', label: '最大解像度', icon: 'mdi:video-high-definition' }
    ], columns: 3 },

    { type: 'title', text: '動画結合の一般的な使用例', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'ソーシャルメディア',
            description: 'ストーリー、TikTok、リールを1つの動画にすばやく結合',
            icon: 'mdi:instagram',
            points: [
                'スマートフォンで撮影した短いクリップを結合',
                'InstagramやYouTube用の連続したコンテンツを準備',
                '煩わしい透かしなしで結合'
            ]
        },
        {
            title: 'プレゼンテーション',
            description: 'イントロとデモ録画を1つのファイルに結合',
            icon: 'mdi:presentation',
            points: [
                'アニメーションのイントロをプレゼンテーション本体と結合',
                '短いソフトウェアのデモを結合',
                '標準的なMP4/WEBM形式でのクリーンなエクスポート'
            ],
            highlight: true
        },
        {
            title: '家族の思い出まとめ',
            description: '休暇やお祝いの複数の動画を結合',
            icon: 'mdi:home-heart',
            points: [
                'パーティーのすべての瞬間を1つの動画に',
                '旅行の思い出を時系列でグループ化',
                '1つのファイルになるため共有が簡単'
            ]
        },
        {
            title: '教育ビデオ',
            description: '短いトレーニングチャプターやレッスンをつなぎ合わせる',
            icon: 'mdi:school',
            points: [
                '小さな独立したチュートリアルをグループ化',
                'レッスンに終了クリップを追加',
                'コースをプロフェッショナルに構成する'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'ブラウザから動画を結合するのに最適なアプリ', level: 2 },
    { type: 'paragraph', html: 'これは単なるウェブページではありません。最新のHTML5ビデオAPIのおかげで、ブラウザから直接動作する真の<strong>動画結合アプリ</strong>です。<strong>MP4動画</strong>、WEBMなどを結合し、解像度を混在させ（サイズが異なる場合、システムが自動的にレターボックスを適用します）、最終的なエクスポートのフレームレート（FPS）を選択できます。' },

    { type: 'title', text: '結合アプローチの比較', level: 3 },
    { type: 'table', headers: ['機能', '私たちのローカルツール', '従来のオンラインコンバーター', 'プロフェッショナル向けエディター'], rows: [
        ['プライバシー', '完全（デバイス上で処理）', '低い（サーバーへのアップロードが必要）', '完全（デバイスにインストール）'],
        ['ネットワーク消費', 'ゼロ（GBのアップロードなし）', '非常に高い（アップロードとダウンロード）', 'ゼロ'],
        ['透かし', 'なし（100%クリーン）', 'あり（無料版の場合）', 'なし（ライセンス購入時）'],
        ['価格', '100%無料', '制限付きで無料、またはサブスクリプション', '通常は高価'],
        ['学習曲線', '非常に低い（ドラッグ、並べ替え、結合）', '低い', '非常に高い（トレーニングが必要）']
    ] },

    { type: 'proscons', items: [
        {
            pro: '保証されたプライバシー：ファイルがデバイスから離れることがないため、セキュリティは最高です',
            con: '大容量の動画を結合する速度は、ローカルコンピューターのRAMとプロセッサに依存します'
        },
        {
            pro: 'プロフェッショナルな結果：100%無料で登録不要、透かしもありません',
            con: '縦向きと横向きなど、寸法の異なる動画を結合する場合は、黒い余白（レターボックス）が適用されます'
        },
        {
            pro: '汎用性：ウェブやソーシャルメディア向けに最適化された効率的なエンコーディングによる高速エクスポート',
            con: 'クリップ間に複雑なトランジション（3Dフェード）や映画のような視覚効果を追加することはできません'
        }
    ], title: '利点と考慮事項' },

    { type: 'title', text: '今すぐ動画の結合を始めましょう', level: 2 },
    { type: 'paragraph', html: 'バラバラの動画フラグメントが何百もある言い訳はもう通用しません。ファイルをアップロードし、希望の順序に並べ、ボタンを押すだけです。<strong>オンラインで動画を結合</strong>するための、最も速く、最も安全で、最もプライベートな方法を体験してください。' }
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

export const content: VideoMergerLocaleContent = {
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

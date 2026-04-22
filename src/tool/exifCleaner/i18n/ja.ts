import { bibliography } from '../bibliography';
import type { WithContext, FAQPage, HowTo, SoftwareApplication } from 'schema-dts';
import type { ExifCleanerUI, ExifCleanerLocaleContent } from '../index';

const slug = 'exif-metadata-cleaner-remove-gps-photo-privacy';
const title = 'EXIFメタデータクリーナー：写真からGPSと隠しデータを削除';
const description = '共有前に画像からEXIFメタデータ、GPS座標、カメラ仕様を消去する無料オンラインツール。100%プライベート：写真をインターネットにアップロードせずに動作します。';

const ui: ExifCleanerUI = {
    dropTitle: "ここに画像をドラッグ",
    dropSubtitle: "GPSメタデータ、カメラモデル、隠し設定を削除します。",
    dropLocalInfo: "100%ローカル処理。クラウドへのアップロードは一切ありません。",
    selectButton: "画像を選択",
    processingText: "メタデータをクリーンアップ中...",
    analysisCompleted: "解析完了",
    downloadButton: "クリーンな画像をダウンロード",
    resetButton: "別の画像をクリーンアップ",
    privacyRiskTitle: "検出されたプライバシーリスク：",
    gpsLabel: "GPS：",
    gpsDetected: "検出あり",
    gpsNotFound: "未検出",
    cameraLabel: "カメラ：",
    softwareLabel: "ソフトウェア：",
    dateLabel: "日付：",
    otherTechnicalDetails: "その他の技術詳細",
    noMetadataFound: "読み取り可能なEXIFメタデータは見つかりませんでした。",
    alreadyCleanInfo: "画像はすでにクリーンである可能性があります。",
    previewLabel: "プレビュー",
    faqTitle: "写真のプライバシーに関するよくある質問": "リソースと技術的なEXIFドキュメント",
};

const faq: ExifCleanerLocaleContent['faq'] = [
    {
        question: "EXIFメタデータとは何ですか？",
        answer: "EXIF（Exchangeable Image File Format）は、カメラやスマートフォンがすべての写真の中に保存する隠し情報です。これには、正確な日付、デバイスのモデル、撮影設定（ISO、絞り）、そして最も重要なのは、写真が撮影された場所のGPS座標が含まれます。",
    },
    {
        question: "このオンラインツールを使用するのは安全ですか？",
        answer: "はい。処理はブラウザ内で100%ローカルに行われるためです。写真はサーバーにアップロードされることはなく、クリーンアップはデバイスのメモリ内で直接行われるため、絶対的なプライバシーが保証されます。",
    },
    {
        question: "クリーナーは具体的にどのようなデータを削除しますか？",
        answer: "すべてのEXIFタグ（GPS、カメラブランド、シリアル番号）、IPTC（著作権、作成者）、およびXMP（編集履歴）を消去します。画像は「クリーン」になり、視覚的な画素（ピクセル）のみが保持されます。",
    },
    {
        question: "メタデータのクリーンアップにより画質は低下しますか？",
        answer: "いいえ。ファイルの技術データ「ヘッダー」のみを削除します。画像データ（ピクセル）はそのまま残るため、視覚的な品質にはまったく影響しません。",
    },
];

const howTo: ExifCleanerLocaleContent['howTo'] = [
    {
        name: "画像を選択",
        text: "写真をドラッグするか、ファイルエクスプローラーから選択します。一度に複数の写真を処理できます。",
    },
    {
        name: "現在のデータを解析",
        text: "ツールは、検出された機密情報（例：「GPS座標を検出」）を表示します。",
    },
    {
        name: "処理してクリーンアップ",
        text: "クリーンアップボタンをクリックして、すべてのメタデータタグを即座に削除します。",
    },
    {
        name: "安全な写真をダウンロード",
        text: "匿名化され、SNSで安全に共有できるようになった新しいバージョンの画像を保存します。",
    },
];

const seo: ExifCleanerLocaleContent['seo'] = [
    {
        type: 'summary',
        title: 'EXIFメタデータクリーナー：プライバシーを保護',
        items: [
            '写真からGPS座標と位置情報を即座に削除',
            'カメラモデル、シリアル番号、技術情報を消去',
            '100%ブラウザベースの処理 - 画像がデバイスから離れることはありません',
            '画質を維持 - 隠しデータのみを削除'
        ]
    },
    { type: 'title', text: 'デジタル写真におけるプライバシーとEXIFメタデータの完全ガイド', level: 2 },
    { type: 'paragraph', html: 'SNSに写真をアップロードするとき、どれだけの個人情報を共有しているか考えたことはありますか？EXIFメタデータは、<strong>目に見えない指紋</strong>のようなもので、自宅の正確な場所からカメラ機材の価格まで、あらゆる情報を明らかにする可能性があります。このガイドでは、プライバシーを効果的に保護する方法を説明します。' },

    { type: 'stats', items: [
        { value: '100%', label: 'プライバシー - ローカル処理', icon: 'mdi:shield-check' },
        { value: '0%', label: 'サーバー保存データ', icon: 'mdi:database' },
        { value: '即時', label: 'メタデータ削除', icon: 'mdi:lightning-bolt' }
    ], columns: 3 },

    { type: 'title', text: '写真に隠されている情報とは？', level: 3 },
    { type: 'paragraph', html: 'デジタル写真の90%以上には、セキュリティを損なう可能性のある機密情報が含まれています。明らかになる可能性のあるデータは以下の通りです：' },
    { type: 'list', items: [
        '<strong>GPS座標：</strong> 撮影が行われた正確な緯度と経度（自宅住所、職場、頻繁に訪れる場所）。',
        '<strong>機材の識別：</strong> カメラやスマートフォンのメーカー、モデル、シリアル番号（貴重な情報）。',
        '<strong>技術設定：</strong> ISO、絞り（f値）、露出時間、焦点距離（特定の機材の特定が可能になります）。',
        '<strong>正確な日時：</strong> 日々の活動の完全なタイムライン。',
        '<strong>編集履歴：</strong> 使用されたソフトウェア、編集ソフト、最終更新日。',
        '<strong>著作権データ：</strong> 写真家、著作権、個人的なメモ。'
    ] },

    { type: 'title', text: '現実のセキュリティリスク：活用事例', level: 3 },
    { type: 'comparative', items: [
        {
            title: 'プロ写真家',
            description: 'シリアル番号で特定された高価な機材の盗難リスク',
            icon: 'mdi:camera',
            points: [
                '窃盗犯は高価な機材を持つ写真家を探している',
                'GPSが所有者の自宅住所を特定する',
                'シリアル番号がダークウェブでの転売を容易にする'
            ]
        },
        {
            title: '保護者とインフルエンサー',
            description: '極めて危険：子供のリアルタイムの位置情報',
            icon: 'mdi:alert',
            points: [
                '犯罪者はOSINTを使用して場所を追跡する',
                '日々のルーチンが特定される可能性がある',
                'ストーキングや物理的な追跡のリスク'
            ],
            highlight: true
        },
        {
            title: 'SNSユーザー',
            description: '個人および仕事のプライバシーの露出',
            icon: 'mdi:share-variant',
            points: [
                'オフィスからの投稿が職場の場所を明らかにする',
                'ジオロケーションからおおよその給与を推測される',
                '公開データにより標的型のプロファイリングが可能になる'
            ]
        },
        {
            title: '旅行者とノマド',
            description: '留守中の自宅での盗難の危険',
            icon: 'mdi:map',
            points: [
                '公開されたGPSが旅行中の空き家を示す',
                '機材データが犯罪者を引き寄せる',
                '旅行履歴がスケジュールやパターンを明らかにする'
            ]
        }
    ], columns: 2 },

    { type: 'title', text: 'このツールの仕組み', level: 3 },
    { type: 'list', items: [
        '<strong>1. 画像を選択：</strong> 写真をドラッグするかセレクターを使用します。一度に複数を処理できます。',
        '<strong>2. 自動解析：</strong> ツールは存在するすべてのメタデータ（GPS、カメラモデル、日付など）を検出し表示します。',
        '<strong>3. 即時クリーンアップ：</strong> ワンクリックで、有害なメタデータを100%削除します。',
        '<strong>4. 安全なダウンロード：</strong> リスクなしでSNSに共有できる匿名化された画像を受け取ります。',
        '<strong>5. 残留物なし：</strong> クリーンな画像は元の視覚的な品質をすべて保持します。'
    ], icon: 'mdi:check' },

    { type: 'card', title: 'プライバシー技術', icon: 'mdi:shield-check', html: 'このツールは、<strong>ブラウザのCanvas API</strong>を使用して、画像をピクセル単位でクリーンにコピーを作成します。これにより、以下のことが保証されます：<br><br>- サーバーにデータは送信されません<br>- 画像がデバイスから離れることはありません<br>- 100%匿名で安全な処理<br>- 初回ロード後はインターネット接続なしでも使用可能' },

    { type: 'title', text: '具体的に削除されるデータは？', level: 3 },
    { type: 'table', headers: ['メタデータタイプ', '例', 'リスク'], rows: [
        ['EXIF (交換可能)', 'GPS、ISO、絞り、シャッタースピード、カメラモデル', '致命的'],
        ['IPTC (出版用)', '著作権、作成者、キーワード、シーンの場所', '高い'],
        ['XMP (XML)', '編集履歴、使用ソフトウェア、行われた編集', '中'],
        ['基本ファイルデータ', '作成日、正確な時間、デバイス', '高い']
    ] },

    { type: 'proscons', items: [
        {
            pro: '完全なプライバシー - 100%ブラウザベースの処理',
            con: 'JavaScriptをサポートする最新のブラウザが必要です'
        },
        {
            pro: '即時 - 写真のクリーンアップは1秒未満で完了',
            con: '古いデバイスでは大きな写真の処理が遅くなる場合があります'
        },
        {
            pro: '画質の低下ゼロ - 技術データのみを削除し、ピクセルは削除しません',
            con: '画像の編集（切り抜き、回転など）は行いません'
        },
        {
            pro: '制限なしで完全無料 - 無制限に写真を処理可能',
            con: 'プレミアムサポートやクラウドストレージはありません'
        }
    ], proTitle: '主なメリット', conTitle: '制限事項' },

    { type: 'tip', title: 'デジタルセキュリティのヒント', html: 'SNSに投稿する<strong>前に</strong>写真をクリーンアップしましょう。投稿を削除しても、メタデータが検索エンジンやアーカイブにインデックスされている可能性があります。予防は治療に勝ります。習慣にしましょう：<br><br><em>写真 → EXIFをクリーンアップ → 投稿</em>' },

    { type: 'diagnostic', variant: 'warning', title: 'クリーンアップしない場合の現実のリスク', icon: 'mdi:alert-circle', badge: '重大なセキュリティ', html: '<strong>文書化された事例：</strong><br>- 子供の写真を投稿した保護者 - 犯罪者がGPSを追跡<br>- 旅行中の写真家 - 留守中に自宅が強盗に遭う<br>- インフルエンサー - 熱狂的なファンに居住場所を特定される<br><br>これは被害妄想ではありません。2026年における基本的なデジタル衛生管理です。' },

    { type: 'glossary', items: [
        {
            term: 'EXIF',
            definition: 'Exchangeable Image File Format。画像ファイルに技術的なメタデータ（GPS、カメラデータ、露出設定）を保存する標準規格。ユーザーの意図に関わらず、デジタル写真の約90%に含まれています。'
        },
        {
            term: 'GPS座標',
            definition: '写真が撮影された正確な場所の正確な緯度と経度。SNSと組み合わせることで、人物の物理的な追跡が可能になります。'
        },
        {
            term: 'IPTC',
            definition: 'International Press Telecommunications Council。著作権、作成者、キーワード、説明など、読み取り可能な出版用メタデータ。プロの写真撮影における標準。'
        },
        {
            term: 'XMP',
            definition: 'Extensible Metadata Platform。LightroomやPhotoshopなどのソフトウェアでの編集履歴を記録するXML形式。行われたすべての編集を明らかにすることができます。'
        },
        {
            term: 'OSINT',
            definition: 'Open Source Intelligence（オープンソース・インテリジェンス）。公開情報（SNS、メタデータ、記録）を収集して、本人に知られずに人物のプロファイリングを行う手法。'
        },
        {
            term: 'デジタル匿名化',
            definition: '識別可能な情報（場所、デバイス、行動パターン）を削除または隠蔽するプロセス。オンラインプライバシーに不可欠です。'
        }
    ] },

    { type: 'message', title: 'プライバシー保護はあなたの責任です', ariaLabel: 'プライバシーとデータ権利に関する情報', html: '当社はあなたの画像を保存、処理、共有することはありません。<strong>あなたがすべてをコントロールします。</strong> すべての操作はブラウザ内でのみ行われます。このタブを閉じると、活動の記録は一切残りません。これこそがインターネットでプライバシーを守る方法です：あなたのデータを尊重するツールです。' },

    { type: 'title', text: '結論：痕跡を残さずに共有', level: 3 },
    { type: 'paragraph', html: 'デジタルアイデンティティの保護は、小さな詳細から始まります。公開前に写真をクリーンアップすることは、2026年において<strong>不可欠なデジタル衛生習慣</strong>です。それは単に場所を守るだけでなく、あなたの家族、資産、そして仕事のプライバシーを守ることにつながります。一見無害な写真が、あなたが想像する以上に多くのことを明らかにする可能性があるのです。' }
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

export const content: ExifCleanerLocaleContent = {
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
